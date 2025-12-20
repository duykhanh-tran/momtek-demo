'use client';

import React from 'react';
import Image from 'next/image';
import { Volume2, Mic, ArrowLeft, ArrowRight, Trophy, Star, StarHalf, Check } from 'lucide-react';
import { useLessonLogic } from '@/hooks/useLessonLogic';

const PracticeCard = () => {
  const { 
    currentStep, totalSteps, currentData, isRecording, lastScore, showScoreCard, finalScore,
    nextStep, prevStep, recordAudio, resetLesson 
  } = useLessonLogic();

  return (
    <section className="py-4 md:py-8 bg-white border-t border-slate-100 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Header: Progress */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base md:text-xl font-black text-slate-900 flex items-center gap-2">
            <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">AI</div>
            Luyện tập
          </h2>
          <div className="flex gap-1 h-1.5 w-24 md:w-32">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div key={idx} className={`flex-1 rounded-full transition-all ${idx <= currentStep ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
            ))}
          </div>
        </div>

        <div className="relative bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden min-h-[380px] md:min-h-[450px] flex flex-col">
          
          <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-blue-50 to-white z-0"></div>

          {/* --- MAIN CONTENT (LEARNING) --- */}
          {!showScoreCard && (
            <>
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 text-center w-full max-w-lg mx-auto animate-in fade-in">
                
                {/* Image */}
                <div className={`relative cursor-pointer transition-all duration-300 group ${currentData.type === 'sentence' ? 'w-20 h-20 md:w-28 md:h-28' : 'w-32 h-32 md:w-48 md:h-48'} mb-4 md:mb-6`}>
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl animate-pulse opacity-50"></div>
                  <Image 
                    src={currentData.img} 
                    alt={currentData.word} 
                    width={200} height={200}
                    className="w-full h-full object-contain relative z-10 drop-shadow-md group-hover:scale-105 transition"
                  />
                  <div className="absolute bottom-0 right-0 z-20 bg-white p-1.5 rounded-full shadow border border-slate-100 text-blue-600">
                    <Volume2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Text */}
                <div className="mb-6 md:mb-8">
                  <h3 className={`font-black text-slate-800 mb-1 tracking-tight ${currentData.type === 'sentence' ? 'text-xl md:text-2xl px-2' : 'text-3xl md:text-5xl'}`}>
                    {currentData.word}
                  </h3>
                  <p className="text-sm md:text-lg text-slate-500 font-bold">{currentData.mean}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center gap-6 w-full px-4">
                  <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-slate-500 hover:text-blue-600 border border-slate-200 shadow-sm flex items-center justify-center active:scale-95 transition">
                    <Volume2 className="w-6 h-6 md:w-7 md:h-7" />
                  </button>

                  <button 
                    onClick={recordAudio}
                    disabled={isRecording}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-xl transition transform active:scale-90 relative
                      ${isRecording ? 'bg-red-500 scale-110' : 'bg-gradient-to-br from-blue-500 to-indigo-600 hover:-translate-y-1'}
                    `}
                  >
                     <Mic className="w-8 h-8 md:w-10 md:h-10 text-white" />
                     {/* Pulse Ring */}
                     {!isRecording && <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-50 animate-ping"></div>}
                  </button>
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="bg-slate-50 p-3 md:p-4 flex items-center justify-between border-t border-slate-200">
                <button onClick={prevStep} disabled={currentStep === 0} className="text-slate-400 hover:text-slate-600 px-3 py-2 rounded-lg font-bold text-xs md:text-sm disabled:opacity-30 flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                
                <div className="flex gap-1.5">
                   {Array.from({ length: totalSteps }).map((_, idx) => (
                      <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentStep ? 'bg-blue-600 w-4' : 'bg-slate-200'}`}></div>
                   ))}
                </div>

                <button onClick={nextStep} className="bg-white border border-slate-200 text-slate-700 hover:text-blue-600 font-bold px-4 py-2 rounded-lg text-xs md:text-sm shadow-sm active:scale-95 transition flex items-center gap-1">
                  Tiếp theo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* --- SCORE CARD (RESULT) --- */}
          {showScoreCard && (
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 text-center w-full animate-in zoom-in-95">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                <Trophy className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Làm tốt lắm!</h3>
              <p className="text-slate-500 mb-6 text-sm">Bé đã hoàn thành xuất sắc bài học.</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 w-full max-w-xs mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase">Điểm trung bình</p>
                <div className="text-4xl font-black text-blue-600">{finalScore}/100</div>
                <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <StarHalf className="w-4 h-4 fill-current" />
                </div>
              </div>

              <button onClick={resetLesson} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg active:scale-95 transition">
                Học lại bài này
              </button>
            </div>
          )}

        </div>

        {/* Feedback Toast */}
        {lastScore !== null && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-slate-800/90 backdrop-blur text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-4 fade-in duration-300 z-50 whitespace-nowrap">
            <div className="bg-green-500 text-white rounded-full p-0.5"><Check className="w-3 h-3" /></div>
            <span className="font-bold text-sm">Chính xác! ({lastScore} điểm)</span>
          </div>
        )}

      </div>
    </section>
  );
};

export default PracticeCard;