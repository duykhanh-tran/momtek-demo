'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isQuizOpen: boolean;
  videoUrl: string | null; // Nếu null nghĩa là đóng, có string là mở
  openQuiz: () => void;
  closeQuiz: () => void;
  openVideo: (url: string) => void;
  closeVideo: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);
  const openVideo = (url: string) => setVideoUrl(url);
  const closeVideo = () => setVideoUrl(null);

  return (
    <ModalContext.Provider value={{ isQuizOpen, videoUrl, openQuiz, closeQuiz, openVideo, closeVideo }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};