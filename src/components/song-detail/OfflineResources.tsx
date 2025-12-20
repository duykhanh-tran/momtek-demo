'use client';

import React from 'react';
import Image from 'next/image';
import { Printer, Lock, Download } from 'lucide-react';
import { RELATED_RESOURCES } from '@/lib/song-detail-data';
import { useUpsell } from '@/context/UpsellContext';

const OfflineResources = () => {
  const { openUpsell } = useUpsell();

  return (
    <section className="py-6 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div 
          onClick={openUpsell}
          className="bg-orange-50 rounded-2xl p-4 md:p-6 border border-orange-100 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm shrink-0">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-sm md:text-base leading-tight">Góc Sáng Tạo (Offline)</h2>
                <p className="text-[10px] md:text-xs text-slate-500">Tải trọn bộ 4 học liệu in ấn</p>
              </div>
            </div>
            <div className="bg-white text-orange-500 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm border border-orange-100 flex items-center gap-1">
              <Lock className="w-3 h-3" /> VIP
            </div>
          </div>

          {/* Grid Resources */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 relative z-10">
            {RELATED_RESOURCES.map((item, idx) => (
              <div 
                key={item.id} 
                className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 relative transition duration-300"
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <Image src={item.img} alt={item.title} fill className="object-cover opacity-90" />
                
                {/* Download Overlay (Hover) */}
                <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                   <div className="bg-white/90 rounded-full p-1.5 shadow-sm">
                      <Download className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                   </div>
                </div>
                
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/60 text-white text-[8px] md:text-[10px] text-center py-1 font-bold backdrop-blur-sm">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {/* Decor Blob */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-50 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default OfflineResources;