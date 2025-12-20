import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const Testimonials = () => {
  // Nhân bản dữ liệu lên nhiều lần để tạo vòng lặp vô tận mượt mà
  const loopedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <h2 className="text-3xl font-bold text-center text-slate-900">
          Hàng nghìn phụ huynh đã sử dụng và thành công
        </h2>
      </div>
        
      {/* Marquee Container:
        - animate-marquee: Chạy animation từ phải sang trái.
        - pause-on-hover: Dừng animation khi hover chuột hoặc touch (trên mobile).
      */}
      <div className="relative w-full">
        {/* Lớp phủ mờ 2 bên để tạo hiệu ứng đẹp mắt */}
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>

        <div className="flex w-max animate-marquee pause-on-hover items-stretch gap-6 px-6 cursor-pointer">
          {loopedTestimonials.map((item, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative h-full flex flex-col hover:shadow-lg transition-shadow duration-300 select-none"
            >
              <Quote className="absolute top-6 left-6 text-blue-100 w-10 h-10 fill-current" />
              <p className="text-slate-600 italic mb-6 relative z-10 pt-6 flex-grow">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden relative flex-shrink-0">
                   <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;