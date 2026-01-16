'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, RefreshCcw, Star, Volume2, Trophy, Loader2, ArrowRight, Frown, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

// 1. DANH SÁCH CÂU LUYỆN TẬP
const PRACTICE_LESSON = [
  { id: 1, text: "I like sports." },
  { id: 2, text: "I play football." },
  { id: 3, text: "I play with my friends."},
  { id: 4, text: "Sports are fun." }
];

export default function PronunciationScorer() {
  // State quản lý
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null); 
  const [audioLevel, setAudioLevel] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false); 
  
  const [lessonScores, setLessonScores] = useState<number[]>([]);
  const [displayScore, setDisplayScore] = useState(0);
  
  // State mới: Lưu các chỉ số tự tính toán (để hiển thị chính xác hơn Azure gốc)
  const [calculatedMetrics, setCalculatedMetrics] = useState({
    completeness: 0, // Tự tính
    accuracy: 0,     // Azure
    fluency: 0       // Azure
  });

  const recognizerRef = useRef<SpeechSDK.SpeechRecognizer | null>(null);
  const currentSentence = PRACTICE_LESSON[currentIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
    } else {
      setAudioLevel(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  useEffect(() => {
    return () => {
      if (recognizerRef.current) {
        recognizerRef.current.close();
      }
    };
  }, []);

  // --- THUẬT TOÁN CHẤM ĐIỂM SIÊU NGHIÊM NGẶT (SUPER STRICT) ---
  const processStrictResult = (jsonResult: any) => {
    // Kiểm tra an toàn dữ liệu đầu vào
    if (!jsonResult || !jsonResult.NBest || !jsonResult.NBest[0]) return 0;
    
    const nbest = jsonResult.NBest[0];
    const words = nbest.Words || [];
    
    // An toàn: Nếu không có object chấm điểm tổng, tạo mặc định để không crash
    const azureAssessment = nbest.PronunciationAssessment || { AccuracyScore: 0, FluencyScore: 0, CompletenessScore: 0 };

    // 2. TÍNH TỔNG SỐ TỪ CHUẨN (MẪU SỐ) TỪ CÂU GỐC
    // Loại bỏ dấu câu (.,!?) và khoảng trắng thừa để đếm chính xác số từ
    const cleanRefText = currentSentence.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
    const totalExpectedWords = cleanRefText.trim().split(/\s+/).length;

    if (totalExpectedWords === 0) return 0;

    // 3. ĐẾM SỐ TỪ ĐÃ ĐỌC (TỬ SỐ)
    let validWordCount = 0; // Số từ Azure nghe thấy (không phải Omission)
    
    words.forEach((w: any) => {
        const error = w.PronunciationAssessment?.ErrorType;
        // Chỉ tính là "đã đọc" nếu Azure không đánh dấu là Omission (Bỏ qua)
        if (error !== 'Omission') {
            validWordCount++;
        }
    });

    // 4. TÍNH ĐỘ ĐẦY ĐỦ (REAL COMPLETENESS)
    // Công thức: (Số từ đã đọc / Tổng số từ chuẩn của câu gốc) * 100
    let realCompleteness = Math.round((validWordCount / totalExpectedWords) * 100);
    // Giới hạn max là 100 (trường hợp Azure nhận diện thừa từ insertion)
    if (realCompleteness > 100) realCompleteness = 100;

    // 5. TÍNH ĐỘ CHÍNH XÁC (REAL ACCURACY)
    // Lấy AccuracyScore từ Azure. Nếu không đọc từ nào thì Accuracy = 0.
    const realAccuracy = validWordCount > 0 ? azureAssessment.AccuracyScore : 0;

    // 6. TÍNH ĐIỂM TỔNG HỢP (FINAL SCORE)
    // Logic: Điểm = Độ chính xác * (Tỷ lệ đầy đủ)
    // Ví dụ: Đọc chính xác 100 điểm, nhưng chỉ đọc 1/2 số từ -> Điểm = 100 * 0.5 = 50.
    let weightedScore = realAccuracy * (realCompleteness / 100);

    // 7. PHẠT ĐIỂM NẾU ĐỌC KHÔNG TRÔI CHẢY (Fluency)
    // FIX LỖI: Kiểm tra azureAssessment.FluencyScore tồn tại trước khi so sánh
    const fluencyScore = azureAssessment.FluencyScore || 0; 
    if (fluencyScore < 60) {
        weightedScore = weightedScore * 0.9; // Giảm 10% nếu đọc ngắc ngứ
    }

    // 8. ĐIỀU KIỆN ĐIỂM TUYỆT ĐỐI (100)
    // Phải đọc đủ 100% từ VÀ không có lỗi nào (None)
    const hasAnyError = words.some((w: any) => w.PronunciationAssessment?.ErrorType !== 'None');
    
    let finalScore = Math.round(weightedScore);
    
    // Logic chặn điểm ảo:
    // Nếu chưa đọc đủ từ -> Không bao giờ được 100
    if (realCompleteness < 100 && finalScore >= 100) finalScore = 99;
    // Nếu có bất kỳ lỗi đỏ nào -> Không bao giờ được 100
    if (hasAnyError && finalScore >= 100) finalScore = 99;

    // Cập nhật State để hiển thị ra UI
    setCalculatedMetrics({
        completeness: realCompleteness,
        accuracy: Math.round(realAccuracy),
        fluency: Math.round(fluencyScore)
    });

    return finalScore;
  };

  // --- LOGIC CŨ GIỮ NGUYÊN ---
  const handleNextSentence = () => {
    const newScores = [...lessonScores, displayScore];
    setLessonScores(newScores);
    setResult(null); 
    setDisplayScore(0);
    setCalculatedMetrics({ completeness: 0, accuracy: 0, fluency: 0 }); // Reset metrics

    if (currentIndex < PRACTICE_LESSON.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setLessonComplete(true); 
    }
  };

  const handleRestartLesson = () => {
    setLessonComplete(false);
    setCurrentIndex(0);
    setResult(null);
    setDisplayScore(0);
    setLessonScores([]); 
    setCalculatedMetrics({ completeness: 0, accuracy: 0, fluency: 0 });
  };

  const startRecording = async () => {
    setResult(null);
    setDisplayScore(0);
    setIsRecording(true);
    setIsProcessing(true);

    try {
      const response = await fetch('/api/speech-token');
      if (!response.ok) throw new Error("Lỗi lấy token");
      const { token, region } = await response.json();
      
      setIsProcessing(false); 

      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(token, region);
      speechConfig.speechRecognitionLanguage = "en-US";
      speechConfig.outputFormat = SpeechSDK.OutputFormat.Detailed;
      
      // --- CẤU HÌNH TIMEOUT (Yêu cầu của bạn) ---
      // Tăng thời gian chờ im lặng ban đầu lên 5s (để người dùng chuẩn bị)
      speechConfig.setProperty(SpeechSDK.PropertyId.SpeechServiceConnection_InitialSilenceTimeoutMs, "5000");
      // Tăng thời gian chờ im lặng cuối câu lên 3s (để tránh ngắt lời khi người dùng ngập ngừng)
      speechConfig.setProperty(SpeechSDK.PropertyId.SpeechServiceConnection_EndSilenceTimeoutMs, "3000");

      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      
      const pronunciationConfig = new SpeechSDK.PronunciationAssessmentConfig(
        currentSentence.text, 
        SpeechSDK.PronunciationAssessmentGradingSystem.HundredMark,
        SpeechSDK.PronunciationAssessmentGranularity.Phoneme,
        true 
      );
      pronunciationConfig.enableProsodyAssessment = true;

      const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
      pronunciationConfig.applyTo(recognizer);

      recognizer.recognized = (s, e) => {
        if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
          try {
             const jsonString = e.result.properties.getProperty(SpeechSDK.PropertyId.SpeechServiceResponse_JsonResult);
             const jsonResult = JSON.parse(jsonString);
             
             // --- DEBUG LOG (Yêu cầu của bạn) ---
             console.log("🔥 AZURE RAW RESULT:", jsonResult);
             console.log("Word Details:", jsonResult?.NBest?.[0]?.Words);
             
             setResult(jsonResult);
             
             // GỌI HÀM TÍNH ĐIỂM MỚI
             const score = processStrictResult(jsonResult);
             setDisplayScore(score);

          } catch (err) {
             console.error("Lỗi parse JSON:", err);
          }
        }
        stopRecording();
      };

      recognizer.canceled = (s, e) => { stopRecording(); };
      recognizer.sessionStopped = (s, e) => { stopRecording(); };

      recognizer.startContinuousRecognitionAsync();
      recognizerRef.current = recognizer;

    } catch (error) {
      console.error(error);
      setIsRecording(false);
      setIsProcessing(false);
      alert("Lỗi kết nối Micro.");
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (recognizerRef.current) {
      recognizerRef.current.stopContinuousRecognitionAsync();
      recognizerRef.current.close();
      recognizerRef.current = null;
    }
  };

  const renderHighlightedText = () => {
    if (!result) return (
        <h3 className="text-2xl md:text-4xl font-black text-slate-700 text-center leading-relaxed transition-all">
            {currentSentence.text}
        </h3>
    );

    const words = result.NBest?.[0]?.Words || [];
    
    return (
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-2xl md:text-4xl font-black leading-relaxed">
        {words.map((word: any, index: number) => {
          const score = word.PronunciationAssessment?.AccuracyScore ?? 0;
          const errorType = word.PronunciationAssessment?.ErrorType;

          let colorClass = 'text-green-500'; 
          // Logic tô màu
          if (errorType === 'Omission') {
            colorClass = 'text-slate-300 opacity-50 decoration-wavy underline decoration-red-400'; 
          } else if (errorType === 'Mispronunciation') {
            colorClass = 'text-red-500 line-through decoration-2'; 
          } else if (errorType === 'Insertion') {
            colorClass = 'text-purple-500 italic'; 
          } else if (score < 80) {
            colorClass = 'text-yellow-500'; 
          }
          
          return (
            <span key={index} className={`relative group cursor-pointer transition-all ${colorClass}`}>
              {word.Word}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                {errorType === 'Omission' ? 'Thiếu' : errorType === 'Mispronunciation' ? 'Sai' : `${score}`}
              </span>
            </span>
          );
        })}
      </div>
    );
  };

  if (lessonComplete) {
    const totalScore = lessonScores.reduce((a, b) => a + b, 0);
    const averageScore = Math.round(totalScore / PRACTICE_LESSON.length);
    const isExcellent = averageScore >= 90; // Phải >= 90 mới xuất sắc
    const isWeak = averageScore < 50; 

    return (
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4 max-w-xl">
            <div className={`rounded-3xl shadow-xl p-12 text-center border-4 ${isWeak ? 'bg-red-50 border-red-200' : 'bg-white border-white'}`}>
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${isWeak ? 'bg-red-100' : 'bg-yellow-100 animate-bounce'}`}>
                    {isWeak ? <Frown className="w-12 h-12 text-red-500" /> : <Trophy className="w-12 h-12 text-yellow-500" />}
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">
                    {isExcellent ? "Tuyệt đối hoàn hảo!" : isWeak ? "Chưa đạt yêu cầu!" : "Làm tốt lắm!"}
                </h2>
                <div className="text-5xl font-black text-blue-600 mb-6">
                    {averageScore}<span className="text-2xl text-slate-400">/100</span>
                </div>
                {isWeak ? (
                    <div className="space-y-6">
                        <p className="text-red-500 font-bold bg-red-100 py-3 px-4 rounded-xl">Con cần đọc đủ các từ và to rõ ràng hơn nhé!</p>
                        <button onClick={handleRestartLesson} className="bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition w-full md:w-auto">Làm lại ngay</button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button onClick={handleRestartLesson} className="bg-slate-100 text-slate-600 font-bold py-3 px-6 rounded-full hover:bg-slate-200 transition">Học lại</button>
                            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                <Sparkles className="w-4 h-4" /> Bài học tiếp theo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </section>
    );
  }

  // Cảnh báo nếu điểm thấp do thiếu từ
  const isMissingWords = calculatedMetrics.completeness < 100;

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block py-1 px-3 rounded bg-purple-900 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3 border border-purple-500/30">
            AI Checkup
          </span>
          <h2 className="text-3xl font-black text-black mb-2 font-tech">Kiểm tra trình độ phát âm</h2>
        </div>
        
        <div className="flex justify-between items-center mb-6 px-4">
            <span className="font-bold text-slate-400 text-sm uppercase">Bài tập luyện nói</span>
            <div className="flex gap-1">
                {PRACTICE_LESSON.map((_, idx) => {
                    let bgClass = 'bg-slate-300';
                    if (idx < currentIndex) bgClass = 'bg-green-500';
                    else if (idx === currentIndex) bgClass = 'bg-blue-600';
                    return <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8' : 'w-2'} ${bgClass}`}></div>
                })}
            </div>
            <span className="font-bold text-blue-600">{currentIndex + 1}/{PRACTICE_LESSON.length}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white relative min-h-[500px] flex flex-col">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-orange-500 p-2 rounded-lg">
                        <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">AI Teacher</h2>
                        <p className="text-slate-400 text-xs uppercase tracking-wider">Chấm điểm nghiêm ngặt</p>
                    </div>
                </div>
                {result && (
                    <div className="bg-white/10 backdrop-blur px-4 py-1 rounded-full border border-white/20 flex items-center gap-2">
                         {displayScore === 100 && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                         <span className={`font-black ${displayScore >= 80 ? 'text-green-400' : displayScore < 50 ? 'text-red-400' : 'text-yellow-400'}`}>
                            {displayScore}
                         </span> 
                         <span className="text-xs">/ 100</span>
                    </div>
                )}
            </div>

            <div className="flex-1 p-8 md:p-12 text-center flex flex-col justify-center items-center relative">
                <div className="mb-8 w-full">
                    <p className="text-slate-400 text-sm font-bold uppercase mb-6 tracking-widest">
                        Câu {currentIndex + 1}
                    </p>
                    {renderHighlightedText()}
                    
                    {/* Cảnh báo chi tiết hơn */}
                    {isMissingWords && result && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 inline-flex flex-col md:flex-row items-center gap-2 bg-red-50 text-red-600 px-5 py-3 rounded-2xl text-sm font-bold border border-red-100"
                        >
                            <AlertTriangle className="w-5 h-5 shrink-0" />
                            <span>Bạn đọc thiếu từ rồi! Độ đầy đủ chỉ đạt {calculatedMetrics.completeness}%</span>
                        </motion.div>
                    )}
                </div>

                <AnimatePresence>
                    {result && !isProcessing && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full max-w-lg mb-10 grid grid-cols-3 gap-2 md:gap-4"
                        >
                            {/* Card: Accuracy (Sử dụng Accuracy tính toán lại) */}
                            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Chính xác</p>
                                <div className="text-xl font-black text-slate-700">
                                    {calculatedMetrics.accuracy}%
                                </div>
                            </div>
                            
                            {/* Card: Completeness (Sử dụng Completeness tự tính) */}
                            <div className={`p-3 rounded-2xl border ${calculatedMetrics.completeness < 100 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
                                <p className={`text-[10px] uppercase font-bold mb-1 ${calculatedMetrics.completeness < 100 ? 'text-red-500' : 'text-green-600'}`}>Độ đầy đủ</p>
                                <div className={`text-xl font-black ${calculatedMetrics.completeness < 100 ? 'text-red-600' : 'text-green-700'}`}>
                                    {calculatedMetrics.completeness}%
                                </div>
                            </div>

                            {/* Card: Fluency (Azure) */}
                            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Trôi chảy</p>
                                <div className="text-xl font-black text-purple-600">{calculatedMetrics.fluency}%</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative z-10 w-full flex justify-center items-center h-24">
                    {isProcessing ? (
                        <div className="flex flex-col items-center">
                            <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-2" />
                            <p className="text-slate-400 text-sm">Đang chấm điểm...</p>
                        </div>
                    ) : (
                        <>
                            {!result && (
                                <button
                                    onClick={isRecording ? stopRecording : startRecording}
                                    className={`
                                        w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300
                                        ${isRecording ? 'bg-red-500 hover:bg-red-600 scale-110' : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105'}
                                    `}
                                >
                                    {isRecording ? <Square className="w-8 h-8 text-white fill-current" /> : <Mic className="w-8 h-8 text-white" />}
                                    
                                    {isRecording && (
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-20 animate-ping"></span>
                                    )}
                                </button>
                            )}

                            {result && (
                                <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <button 
                                        onClick={() => { setResult(null); setIsProcessing(false); setDisplayScore(0); setCalculatedMetrics({ completeness: 0, accuracy: 0, fluency: 0 }); }}
                                        className="w-14 h-14 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition"
                                        title="Thử lại"
                                    >
                                        <RefreshCcw className="w-6 h-6" />
                                    </button>

                                    <button 
                                        onClick={handleNextSentence}
                                        className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold flex items-center gap-2 shadow-lg hover:bg-blue-700 hover:scale-105 transition transform"
                                    >
                                        <span>Câu tiếp theo</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {!result && !isProcessing && (
                    <p className="mt-6 text-slate-400 text-sm font-medium">
                        {isRecording ? "Đang lắng nghe..." : "Bấm Micro để bắt đầu"}
                    </p>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}