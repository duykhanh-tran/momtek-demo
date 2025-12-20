'use client';

import React from 'react';
import { ModalProvider } from '@/context/ModalContext';
import { UpsellProvider } from '@/context/UpsellContext'; // 1. Import UpsellProvider
import VideoModal from '@/components/ui/VideoModal';
import QuizModal from '@/components/quiz/QuizModal';
import UpsellModal from '@/components/vocab/UpsellModal'; // 2. Import UpsellModal

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {/* 3. Bọc UpsellProvider vào bên trong */}
      <UpsellProvider>
        {children}
        
        {/* Các Modal toàn cục */}
        <VideoModal />
        <QuizModal />
        <UpsellModal />
      </UpsellProvider>
    </ModalProvider>
  );
}