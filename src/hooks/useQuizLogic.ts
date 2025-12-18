import { useState } from 'react';
import { QUIZ_QUESTIONS, PERSONAS } from '@/data/quiz-data';

export const useQuizLogic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  
  // Điểm số khởi tạo
  const [scores, setScores] = useState({ skill: 0, bonding: 0, time: 0 });

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({ skill: 0, bonding: 0, time: 0 });
    setResult(null);
    setIsCalculating(false);
  };

  const handleAnswer = (type: string) => {
    // Logic tính điểm 7-2-1
    const newScores = { ...scores };
    if (type === 'A') { // Skill Focus
        newScores.skill += 7; newScores.time += 2; newScores.bonding += 1;
    } else if (type === 'B') { // Bonding Focus
        newScores.bonding += 7; newScores.skill += 1; newScores.time += 2;
    } else if (type === 'C') { // Time/Tech Focus
        newScores.time += 7; newScores.skill += 2; newScores.bonding += 1;
    }
    setScores(newScores);

    // Chuyển câu hỏi
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Kết thúc, tính toán
      setIsCalculating(true);
      setTimeout(() => {
        calculateResult(newScores);
        setIsCalculating(false);
      }, 1500); // Giả lập delay tính toán
    }
  };

  const calculateResult = (finalScores: typeof scores) => {
    const maxScore = Math.max(finalScores.skill, finalScores.bonding, finalScores.time);
    
    if (finalScores.skill === maxScore) setResult(PERSONAS.SKILL);
    else if (finalScores.bonding === maxScore) setResult(PERSONAS.BONDING);
    else setResult(PERSONAS.TIME);
  };

  // Tính phần trăm hiển thị thanh năng lực
  const getPercent = (score: number) => Math.min(100, Math.round((score / 35) * 100));

  return {
    currentStep,
    totalSteps: QUIZ_QUESTIONS.length,
    isCalculating,
    result,
    scores,
    handleAnswer,
    resetQuiz,
    getPercent
  };
};