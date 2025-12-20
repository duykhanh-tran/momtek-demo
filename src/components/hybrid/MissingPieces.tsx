import React from 'react';
import { MISSING_PIECES } from '@/lib/hybrid-data';

const MissingPieces = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl font-black text-slate-900">Tại sao các mô hình cũ đang dần lỗi thời?</h2>
        <p className="text-slate-500 mt-2">Để giúp con học tiếng Anh, trước đây mẹ chỉ có 3 lựa chọn, và cả 3 đều chưa đạt hiệu quả cao.</p>
      </div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {MISSING_PIECES.map((item, index) => (
          <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition duration-500 text-center md:text-left">
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto md:mx-0">
                <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.desc}</p>
            <span className="inline-block text-[10px] font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">
                {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissingPieces;