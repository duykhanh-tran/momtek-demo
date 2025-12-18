'use client';

import React from 'react';
import { ModalProvider } from '@/context/ModalContext';
import VideoModal from '@/components/ui/VideoModal';
import QuizModal from '@/components/quiz/QuizModal';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      {/* Đặt Modal ở đây để chúng luôn nằm trên cùng và truy cập được context */}
      <VideoModal />
      <QuizModal />
    </ModalProvider>
  );
}