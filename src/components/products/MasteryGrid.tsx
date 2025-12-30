import React from 'react';
import Image from 'next/image';
import { MASTERY_LIST } from '@/lib/products-data';

const MasteryGrid = () => {
  return (
    <section id="mastery" className="py-12 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
                <div className="text-center md:text-left w-full">
                    <span className="text-purple-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Dòng Mastery</span>
                    <h2 className="text-2xl md:text-4xl font-bold mt-2 ">Khi Mẹ cần Chuyên gia hỗ trợ</h2>
                    <p className="text-slate-400 mt-2 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
                        Có những kỹ năng khó (Phản xạ, Thuyết trình) cần thầy cô Momtek trực tiếp kèm cặp con qua Zoom.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                {MASTERY_LIST.map((item) => (
                    <div key={item.id} className="bg-slate-800 rounded-2xl p-1 border border-slate-700 cursor-pointer hover:border-purple-500 transition group">
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="w-full md:w-1/3 h-40 md:h-auto relative overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                                <Image src={item.image} alt={item.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition" />
                            </div>
                            <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col justify-center">
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{item.desc}</p>
                                <button className="text-sm font-bold text-white border-b border-purple-500 self-start pb-1 group-hover:text-purple-400 transition">{item.btnText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default MasteryGrid;