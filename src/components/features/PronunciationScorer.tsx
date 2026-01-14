'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, RefreshCcw, Star, Volume2, Trophy, Loader2, ArrowRight, Frown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

// 1. DANH SÁCH CÂU LUYỆN TẬP
const PRACTICE_LESSON = [
  { id: 1, text: "Hello mommy, I love you." },
  { id: 2, text: "Can we read a book together?" },
  { id: 3, text: "Look at the blue sky."},
  { id: 4, text: "This apple is very sweet." }
];

export default function PronunciationScorer() {
  // State quản lý
  const [currentIndex, setCurrentIndex] = useState(0); // Theo dõi câu hiện tại
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null); 
  const [audioLevel, setAudioLevel] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false); // Trạng thái hoàn thành bài học
  
  // State mới: Lưu điểm số của từng câu
  const [lessonScores, setLessonScores] = useState<number[]>([]);

  const recognizerRef = useRef<SpeechSDK.SpeechRecognizer | null>(null);

  const currentSentence = PRACTICE_LESSON[currentIndex];

  // Hiệu ứng sóng âm giả lập
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

  // --- LOGIC CHUYỂN CÂU & LƯU ĐIỂM ---
  const handleNextSentence = () => {
    // 1. Lưu điểm của câu hiện tại vào mảng
    const currentScore = result?.NBest?.[0]?.PronunciationAssessment?.AccuracyScore || 0;
    const newScores = [...lessonScores, currentScore];
    setLessonScores(newScores);

    setResult(null); // Reset kết quả cũ

    // 2. Kiểm tra xem còn câu tiếp theo không
    if (currentIndex < PRACTICE_LESSON.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setLessonComplete(true); // Đã hết câu
    }
  };

  const handleRestartLesson = () => {
    setLessonComplete(false);
    setCurrentIndex(0);
    setResult(null);
    setLessonScores([]); // Reset điểm số về 0
  };

  // --- LOGIC MICROSOFT AZURE ---
  const startRecording = async () => {
    setResult(null);
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
      
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      
      // Cấu hình chấm điểm cho câu hiện tại
      const pronunciationConfig = new SpeechSDK.PronunciationAssessmentConfig(
        currentSentence.text, // Dùng text của câu hiện tại
        SpeechSDK.PronunciationAssessmentGradingSystem.HundredMark,
        SpeechSDK.PronunciationAssessmentGranularity.Phoneme,
        true
      );

      const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
      pronunciationConfig.applyTo(recognizer);

      recognizer.recognized = (s, e) => {
        if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
          try {
             const jsonResult = JSON.parse(e.result.properties.getProperty(SpeechSDK.PropertyId.SpeechServiceResponse_JsonResult));
             setResult(jsonResult);
          } catch (err) {
             console.error("Lỗi parse JSON:", err);
          }
        }
        stopRecording();
      };

      recognizer.canceled = (s, e) => {
        stopRecording();
      };

      recognizer.sessionStopped = (s, e) => {
        stopRecording();
      };

      recognizer.startContinuousRecognitionAsync();
      recognizerRef.current = recognizer;

    } catch (error) {
      console.error(error);
      setIsRecording(false);
      setIsProcessing(false);
      alert("Lỗi kết nối Micro/Server");
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

  // --- RENDER TEXT ---
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
          // Logic màu: >=80 Xanh, 60-79 Vàng, <60 Đỏ
          let colorClass = 'text-red-500';
          if (score >= 80) colorClass = 'text-green-500';
          else if (score >= 60) colorClass = 'text-yellow-500';
          
          return (
            <span key={index} className={`relative group cursor-pointer transition-all ${colorClass}`}>
              {word.Word}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                {score}/100
              </span>
            </span>
          );
        })}
      </div>
    );
  };

  // --- MÀN HÌNH HOÀN THÀNH BÀI HỌC (NÂNG CẤP) ---
  if (lessonComplete) {
    // Tính điểm trung bình
    const totalScore = lessonScores.reduce((a, b) => a + b, 0);
    const averageScore = Math.round(totalScore / PRACTICE_LESSON.length);
    
    // Phân loại kết quả
    const isExcellent = averageScore > 75;
    const isWeak = averageScore < 25;

    return (
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4 max-w-xl">
            <div className={`rounded-3xl shadow-xl p-12 text-center border-4 ${isWeak ? 'bg-red-50 border-red-200' : 'bg-white border-white'}`}>
                
                {/* ICON TRẠNG THÁI */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${isWeak ? 'bg-red-100' : 'bg-yellow-100 animate-bounce'}`}>
                    {isWeak ? (
                        <Frown className="w-12 h-12 text-red-500" />
                    ) : (
                        <Trophy className="w-12 h-12 text-yellow-500" />
                    )}
                </div>

                {/* TIÊU ĐỀ */}
                <h2 className="text-3xl font-black text-slate-800 mb-2">
                    {isExcellent ? "Xuất sắc! Con quá giỏi!" : isWeak ? "Cần cố gắng thêm!" : "Hoàn thành tốt!"}
                </h2>
                
                {/* ĐIỂM SỐ */}
                <div className="text-5xl font-black text-blue-600 mb-6">
                    {averageScore}<span className="text-2xl text-slate-400">/100</span>
                </div>

                {/* THÔNG ĐIỆP & NÚT BẤM */}
                {isWeak ? (
                    <div className="space-y-6">
                        <p className="text-red-500 font-bold bg-red-100 py-3 px-4 rounded-xl">
                            Điểm số dưới 25%. Con cần luyện tập lại bài này nhé!
                        </p>
                        <button 
                            onClick={handleRestartLesson}
                            className="bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition w-full md:w-auto"
                        >
                            Làm lại ngay
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <p className="text-slate-500">
                            {isExcellent 
                                ? "Phát âm của con rất chuẩn, giống hệt người bản xứ!" 
                                : "Con đã hoàn thành bài học. Hãy luyện tập thêm để đạt điểm tối đa nhé."}
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button 
                                onClick={handleRestartLesson}
                                className="bg-slate-100 text-slate-600 font-bold py-3 px-6 rounded-full hover:bg-slate-200 transition"
                            >
                                Học lại
                            </button>
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

  // Lấy các chỉ số chi tiết nếu có kết quả
  const assessment = result?.NBest?.[0]?.PronunciationAssessment;

  return (
    <section className="py-16 bg-blue-50 ">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block py-1 px-3 rounded bg-purple-900 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3 border border-purple-500/30">
            AI Checkup
          </span>
          <h2 className="text-3xl font-black text-black mb-2 font-tech">Kiểm tra trình độ phát âm</h2>
          {/* <p className="text-slate-400 text-sm">Bài test nhanh. Cần đăng nhập để AI lưu hồ sơ và theo dõi tiến bộ.</p> */}
        </div>
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-6 px-4">
            <span className="font-bold text-slate-400 text-sm uppercase">Bài tập luyện nói</span>
            <div className="flex gap-1">
                {PRACTICE_LESSON.map((_, idx) => {
                    // Logic màu progress bar: Xanh (đã xong), Xám (chưa), Cam (đang làm)
                    let bgClass = 'bg-slate-300';
                    if (idx < currentIndex) bgClass = 'bg-green-500'; // Đã xong
                    else if (idx === currentIndex) bgClass = 'bg-blue-600'; // Đang làm

                    return <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8' : 'w-2'} ${bgClass}`}></div>
                })}
            </div>
            <span className="font-bold text-blue-600">{currentIndex + 1}/{PRACTICE_LESSON.length}</span>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white relative min-h-[500px] flex flex-col">
            
            {/* Header */}
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-orange-500 p-2 rounded-lg">
                        <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">AI Teacher</h2>
                        <p className="text-slate-400 text-xs uppercase tracking-wider">Azure Speech Technology</p>
                    </div>
                </div>
                {/* Score Badge (Chỉ hiện khi có kết quả) */}
                {assessment && (
                    <div className="bg-white/10 backdrop-blur px-4 py-1 rounded-full border border-white/20">
                         <span className={`font-black ${assessment.AccuracyScore >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {assessment.AccuracyScore}
                         </span> 
                         <span className="text-xs">/ 100</span>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 md:p-12 text-center flex flex-col justify-center items-center relative">
                
                {/* 1. Sentence Display */}
                <div className="mb-8 w-full">
                    <p className="text-slate-400 text-sm font-bold uppercase mb-6 tracking-widest">
                        Câu {currentIndex + 1}
                    </p>
                    {renderHighlightedText()}
                    {/* <p className="mt-4 text-slate-400 font-medium text-lg italic">"{currentSentence.translation}"</p> */}
                </div>

                {/* 2. Detailed Feedback (Hiển thị 3 chỉ số) */}
                <AnimatePresence>
                    {result && !isProcessing && assessment && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full max-w-lg mb-10 grid grid-cols-3 gap-2 md:gap-4"
                        >
                            {/* Card: Accuracy */}
                            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Chính xác</p>
                                <div className={`text-xl font-black ${assessment.AccuracyScore >= 80 ? 'text-green-600' : 'text-yellow-600'}`}>
                                    {assessment.AccuracyScore}%
                                </div>
                            </div>
                            {/* Card: Fluency */}
                            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Trôi chảy</p>
                                <div className="text-xl font-black text-blue-600">{assessment.FluencyScore}%</div>
                            </div>
                            {/* Card: Completeness */}
                            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Đầy đủ</p>
                                <div className="text-xl font-black text-purple-600">{assessment.CompletenessScore}%</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3. Controls Area */}
                <div className="relative z-10 w-full flex justify-center items-center h-24">
                    
                    {isProcessing ? (
                        <div className="flex flex-col items-center">
                            <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-2" />
                            <p className="text-slate-400 text-sm">Đang chấm điểm...</p>
                        </div>
                    ) : (
                        <>
                            {/* Nếu chưa có kết quả hoặc đang thu âm -> Hiện nút Mic */}
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

                            {/* Nếu ĐÃ có kết quả -> Hiện nút Tiếp tục & Thử lại */}
                            {result && (
                                <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <button 
                                        onClick={() => { setResult(null); setIsProcessing(false); }}
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

                {/* Helper Text */}
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