import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function CtaHybrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Sẵn sàng trải nghiệm <br/> <span className="text-blue-600">Công nghệ Đọc sách 4.0?</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
                Khám phá các đầu sách Hybrid đã được Momtek xuất bản và tích hợp công nghệ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#products" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-orange-500/30 transition transform hover:scale-105 flex items-center justify-center gap-3">
                    <ShoppingBag className="w-5 h-5" /> Xem Kệ sách Momtek
                </a>
            </div>
        </div>
    </section>
  );
}