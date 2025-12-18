'use client';
import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { useQuizLogic } from '@/hooks/useQuizLogic';
import { QUIZ_QUESTIONS } from '@/data/quiz-data';

const QuizModal = () => {
  const { isQuizOpen, closeQuiz } = useModal();
  const { 
    currentStep, totalSteps, isCalculating, result, scores, 
    handleAnswer, resetQuiz, getPercent 
  } = useQuizLogic();

  // Reset quiz khi mở lại modal
  useEffect(() => {
    if (isQuizOpen && !result) {
       // Có thể thêm logic reset nếu muốn mỗi lần mở là làm lại từ đầu
       // Hiện tại giữ trạng thái để trải nghiệm tốt hơn
    }
  }, [isQuizOpen]);

  if (!isQuizOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" onClick={closeQuiz}></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-10 duration-500">
        
        {/* Close Button */}
        <button onClick={closeQuiz} className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-800 bg-slate-100 p-2 rounded-full transition">
          <X className="w-6 h-6" />
        </button>

        {/* --- TRƯỜNG HỢP 1: ĐANG LÀM QUIZ --- */}
        {!result && !isCalculating && (
          <>
            <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Bài trắc nghiệm năng lực</span>
                <span className="text-xs font-bold text-slate-400">Câu {currentStep + 1}/{totalSteps}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
               <h3 className="text-2xl font-bold text-slate-800 mb-8 leading-snug animate-in fade-in slide-in-from-right-4 duration-300">
                 {QUIZ_QUESTIONS[currentStep].question}
               </h3>
               <div className="space-y-4">
                 {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
                   <button 
                     key={idx}
                     onClick={() => handleAnswer(opt.type)}
                     className="w-full text-left p-5 rounded-2xl border-2 border-slate-100 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group flex items-center gap-4"
                   >
                     <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition shrink-0">
                       {String.fromCharCode(65 + idx)}
                     </div>
                     <span className="text-lg text-slate-700 font-medium group-hover:text-orange-700">{opt.text}</span>
                   </button>
                 ))}
               </div>
            </div>
          </>
        )}

        {/* --- TRƯỜNG HỢP 2: ĐANG TÍNH TOÁN --- */}
        {isCalculating && (
           <div className="flex flex-col items-center justify-center h-96 p-8 text-center animate-in fade-in">
             <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-6"></div>
             <h3 className="text-xl font-bold text-slate-800">Đang phân tích Phong cách của bạn...</h3>
             <p className="text-slate-500 mt-2">Hệ thống đang đối chiếu với 3 trụ cột Momtek</p>
           </div>
        )}

        {/* --- TRƯỜNG HỢP 3: KẾT QUẢ --- */}
        {result && (
          <div className="flex-1 overflow-y-auto p-8 animate-in zoom-in-95 duration-500">
             <div className="text-center mb-8">
                <span className={`text-xs font-bold bg-${result.color}-100 text-${result.color}-600 px-3 py-1 rounded-full uppercase tracking-wider`}>Kết quả của bạn</span>
                <h2 className="text-3xl font-black text-slate-900 mt-3 mb-2">{result.title}</h2>
                <p className="text-slate-500">{result.desc}</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl mb-8 space-y-4 border border-slate-100">
                {/* Skill Bar */}
                <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Chuyên môn (Skill)</span>
                        <span>{getPercent(scores.skill)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${getPercent(scores.skill)}%` }}></div>
                    </div>
                </div>
                {/* Bonding Bar */}
                <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Gắn kết (Bonding)</span>
                        <span>{getPercent(scores.bonding)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${getPercent(scores.bonding)}%` }}></div>
                    </div>
                </div>
                {/* Time Bar */}
                <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Hiệu quả (Time)</span>
                        <span>{getPercent(scores.time)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${getPercent(scores.time)}%` }}></div>
                    </div>
                </div>
            </div>

            <div className={`bg-${result.color}-50 border border-${result.color}-200 p-6 rounded-2xl flex items-start gap-4`}>
                <div className={`bg-white p-3 rounded-xl text-${result.color}-600 shadow-sm shrink-0`}>
                    <result.icon className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-1">Giải pháp dành riêng cho mẹ:</h4>
                    <div className={`text-xl font-black text-${result.color}-600 mb-2`}>{result.product}</div>
                    <p className="text-sm text-slate-600">{result.reason}</p>
                    
                    <button 
                      onClick={closeQuiz} 
                      className={`inline-flex items-center gap-2 mt-4 bg-${result.color}-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-${result.color}-700 transition shadow-lg shadow-${result.color}-500/30`}
                    >
                        Xem chi tiết gói này <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
            
            <div className="mt-6 text-center">
              <button onClick={resetQuiz} className="text-sm text-slate-400 hover:text-slate-600 underline">
                Làm lại bài trắc nghiệm
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default QuizModal;