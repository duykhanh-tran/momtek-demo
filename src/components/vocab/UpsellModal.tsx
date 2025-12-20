'use client';

import React from 'react';
import { X, Lock } from 'lucide-react';
import { useUpsell } from '@/context/UpsellContext';

const UpsellModal = () => {
  const { isUpsellOpen, closeUpsell } = useUpsell();

  if (!isUpsellOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-slate-900/60 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative shadow-2xl animate-in zoom-in-95 duration-200">
        <button onClick={closeUpsell} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="w-6 h-6" />
        </button>
        <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-2">Tính năng Premium</h3>
        <p className="text-sm text-slate-500 mb-6">Đăng ký thành viên để mở khóa Game tương tác và tải Flashcard in ấn cho bé!</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition">
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
};

export default UpsellModal;