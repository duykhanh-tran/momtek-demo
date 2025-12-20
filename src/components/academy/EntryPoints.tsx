import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ENTRY_CARDS } from '@/lib/academy-data';

const AcademyEntry = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-8 bg-orange-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900 ">Bắt đầu từ đâu?</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {ENTRY_CARDS.map((card) => (
            <a 
              key={card.id} 
              href={`#${card.id}`} 
              className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer block"
            >
              {/* Ảnh nền Full */}
              <Image 
                src={card.image} 
                alt={card.title} 
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              {/* Lớp phủ gradient để đọc chữ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Nội dung đè lên ảnh */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className={`text-xs font-bold text-${card.color}-400 uppercase tracking-widest mb-1 block`}>
                  {card.tag}
                </span>
                <h3 className={`text-xl font-bold text-white leading-tight mb-2 group-hover:text-${card.color}-300 transition `}>
                  {card.title}
                </h3>
                <span className="text-white/80 text-xs flex items-center gap-1 group-hover:translate-x-2 transition font-bold">
                  Xem lộ trình <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyEntry;