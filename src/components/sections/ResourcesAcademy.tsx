import React from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { RESOURCES } from '@/lib/constants';
import { BookOpen } from 'lucide-react';

const ResourcesAcademy = () => {
  return (
    <section id="resources" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-extrabold tracking-widest uppercase text-sm mb-3 block">Học viên Cha mẹ </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
           Tư duy & Kiến thức để dạy con
          </h2>
          <p className="text-lg text-slate-500">
            Kho tài nguyên đã dạng : từ cẩm nang chuyên sâu ,bài hát vui nhộn đến các hoạt dộng sáng tạo.
          </p>
          <p className="text-lg text-slate-500">
            Mọi thứ mẹ cần để tự tin bắt đầu hành trình cùng con. 
          </p>
          <a href="/academy" className="inline-flex items-center pt-5 gap-2 text-sm font-bold  text-blue-600 transition border-b border-slate-200 hover:border-blue-600 pb-0.5">
            <BookOpen className="w-4 h-4" />
            Vào Học viện Cha mẹ Momtek
          </a>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto space-x-6 pb-6 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:space-x-0 md:gap-6 snap-x">
          {RESOURCES.map((item, index) => (
            <div key={index} className="min-w-[280px] snap-center bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition cursor-pointer group active:scale-95 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-3 right-3 bg-${item.color === 'green' ? 'red' : item.color}-600/90 backdrop-blur p-2 rounded-full text-white shadow-sm`}>
                  <item.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className={`text-[10px] font-bold uppercase tracking-wider text-${item.color}-600 mb-2`}>
                  {item.tag}
                </p>
                <h3 className={`text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-${item.color}-600 transition`}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4">{item.desc}</p>
                <div className={`mt-auto flex items-center text-${item.color}-600 text-xs font-bold gap-1`}>
                  Xem chi tiết <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesAcademy;