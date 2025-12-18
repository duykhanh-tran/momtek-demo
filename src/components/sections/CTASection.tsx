'use client';
import React from 'react';
import { Zap, Play } from 'lucide-react'; // Thêm icon Play
import { useModal } from '@/context/ModalContext'; 

const CTASection = () => {
  const { openQuiz, openVideo } = useModal(); // Lấy thêm hàm openVideo

  return (
    <section id="cta" className="py-24 bg-blue-900 relative overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Đừng để nỗi sợ cản bước con bạn
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
          Bắt đầu ngay hôm nay để nhận lộ trình cá nhân hóa miễn phí.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Nút mở Quiz */}
          <button 
            onClick={openQuiz}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-blue-900/50 transition transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <Zap className="w-6 h-6 fill-current" />
            Làm Quiz & Nhận Lộ trình
          </button>

          {/* Nút mở Video Youtube (Mới thêm) */}
          <button 
            onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1')}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl backdrop-blur-sm transition transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <Play className="w-6 h-6 fill-current" />
            Xem Video
          </button>
        </div>
        <p className="mt-6 text-sm text-blue-300 opacity-80">
          Miễn phí 100% • Không cần thẻ tín dụng
        </p>
      </div>
    </section>
  );
};

export default CTASection;