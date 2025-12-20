import { useState } from 'react';
import { LESSON_DATA } from '@/lib/song-detail-data';

export const useLessonLogic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [showScoreCard, setShowScoreCard] = useState(false);

  const nextStep = () => {
    if (currentStep < LESSON_DATA.length - 1) {
      setCurrentStep(prev => prev + 1);
      setLastScore(null);
    } else {
      setShowScoreCard(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setLastScore(null);
    }
  };

  const recordAudio = () => {
    setIsRecording(true);
    // Giả lập ghi âm trong 1.5s
    setTimeout(() => {
      setIsRecording(false);
      // Giả lập điểm ngẫu nhiên từ 80-100
      const newScore = Math.floor(Math.random() * 20) + 80;
      setLastScore(newScore);
      
      const newScores = [...scores];
      newScores[currentStep] = newScore;
      setScores(newScores);

      // Tự động chuyển bài sau 1.5s nếu điểm cao
      setTimeout(() => {
        nextStep();
      }, 1500);
    }, 1500);
  };

  const resetLesson = () => {
    setCurrentStep(0);
    setScores([]);
    setShowScoreCard(false);
    setLastScore(null);
  };

  return {
    currentStep,
    totalSteps: LESSON_DATA.length,
    currentData: LESSON_DATA[currentStep],
    isRecording,
    lastScore,
    showScoreCard,
    finalScore: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
    nextStep,
    prevStep,
    recordAudio,
    resetLesson
  };
};