'use client';

import React, { useState, useEffect } from 'react';
import { Mic, CheckCircle, Lock, Play } from 'lucide-react';
import { TEST_QUESTIONS } from '@/lib/phonic-ai-data';

const AITestSection = () => {
  const [step, setStep] = useState<'intro' | 'question' | 'result'>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [progress, setProgress] = useState(0);

  // Giả lập Login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const startTest = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      setStep('question');
      setCurrentQ(0);
      setProgress(0);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setStep('question');
  };

  const recordAnswer = () => {
    setIsRecording(true);
    // Giả lập ghi âm 1.5s
    setTimeout(() => {
      setIsRecording(false);
      // Next question or Result
      const nextQ = currentQ + 1;
      const nextProgress = (nextQ / TEST_QUESTIONS.length) * 100;
      setProgress(nextProgress);

      if (nextQ < TEST_QUESTIONS.length) {
        setCurrentQ(nextQ);
      } else {
        setStep('result');
      }
    }, 1500);
  };

  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800" id="ai-test-section">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block py-1 px-3 rounded bg-purple-900/50 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3 border border-purple-500/30">
            AI Checkup
          </span>
          <h2 className="text-3xl font-black text-white mb-2 font-tech">Kiểm tra trình độ phát âm</h2>
          <p className="text-slate-400 text-sm">Bài test nhanh. Cần đăng nhập để AI lưu hồ sơ và theo dõi tiến bộ.</p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-700 relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
          
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-700">
            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>

          {/* STEP 1: INTRO */}
          {step === 'intro' && (
            <div className="text-center w-full animate-in fade-in">
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Bạn đã sẵn sàng?</h3>
              <p className="text-slate-400 mb-8 text-sm">Hãy tìm nơi yên tĩnh và cho phép trình duyệt truy cập Microphone.</p>
              <button onClick={startTest} className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-purple-900/50 transition transform hover:scale-105 w-full md:w-auto">
                Bắt đầu Test ngay
              </button>
              <p className="text-xs text-slate-500 mt-4">*Yêu cầu đăng nhập thành viên</p>
            </div>
          )}

          {/* STEP 2: QUESTION */}
          {step === 'question' && (
            <div className="w-full flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
              <p className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-4">Câu {currentQ + 1}/{TEST_QUESTIONS.length}</p>
              <div className="mb-8">
                <h3 className="text-4xl md:text-6xl font-black text-white mb-2 font-tech tracking-wide">{TEST_QUESTIONS[currentQ].word}</h3>
                <p className="text-slate-500 text-lg">{TEST_QUESTIONS[currentQ].phonetic}</p>
              </div>
              
              {/* Visualizer */}
              <div className={`h-12 flex items-center justify-center gap-1 mb-8 transition-opacity ${isRecording ? 'opacity-100' : 'opacity-0'}`}>
                {[0.7, 0.4, 0.8, 0.6, 0.5].map((d, i) => (
                  <div key={i} className="w-1 bg-purple-500 rounded-full animate-sound-wave" style={{ animationDuration: `${d}s` }}></div>
                ))}
              </div>

              <button 
                onClick={recordAnswer} 
                disabled={isRecording}
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition active:scale-95 ${isRecording ? 'bg-red-500' : 'bg-purple-600 mic-shadow'} text-white`}
              >
                <Mic className="w-8 h-8" />
              </button>
              <p className="text-xs text-slate-500 mt-4">{isRecording ? "Đang thu âm..." : "Bấm vào Mic để đọc"}</p>
            </div>
          )}

          {/* STEP 3: RESULT */}
          {step === 'result' && (
            <div className="w-full flex flex-col items-center text-center animate-in fade-in">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Đã có kết quả!</h3>
              
              <div className="grid grid-cols-3 gap-4 w-full mb-6 mt-4">
                <div className="bg-slate-700/50 p-3 rounded-xl border border-slate-600">
                  <p className="text-xs text-slate-400 mb-1">Âm đuôi</p>
                  <p className="text-xl font-black text-yellow-400 font-tech">85%</p>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-xl border border-slate-600">
                  <p className="text-xs text-slate-400 mb-1">Trọng âm</p>
                  <p className="text-xl font-black text-red-400 font-tech">60%</p>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-xl border border-slate-600">
                  <p className="text-xs text-slate-400 mb-1">Trôi chảy</p>
                  <p className="text-xl font-black text-blue-400 font-tech">75%</p>
                </div>
              </div>

              <div className="bg-purple-900/30 p-4 rounded-xl border border-purple-500/30 text-left mb-6 w-full">
                <p className="text-sm text-purple-200">
                  <strong>Nhận xét AI:</strong> Bạn cần cải thiện phần <strong>Trọng âm</strong>. Momtek đã soạn sẵn lộ trình 7 ngày sửa lỗi này cho bạn.
                </p>
              </div>

              <a href="#zalo-challenge" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg w-full md:w-auto animate-bounce flex items-center justify-center gap-2">
                 Nhận lộ trình qua Zalo 👇
              </a>
            </div>
          )}

        </div>
      </div>

      {/* LOGIN MODAL (Fake) */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">✕</button>
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Đăng nhập để tiếp tục</h3>
            <p className="text-sm text-slate-500 mb-6">Momtek cần lưu kết quả bài test để xây dựng lộ trình cá nhân cho bạn.</p>
            <button onClick={handleLogin} className="w-full bg-white border border-slate-300 text-slate-700 py-3 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition mb-3">
               Tiếp tục với Google
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AITestSection;