import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/mentor-data';

export default function Testimonials() {
  return (
    <section className="py-24 bg-orange-50/50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-center text-slate-900 mb-12">Những lời cảm ơn là động lực của chúng tôi</h2>
            
            <div className="columns-1 md:columns-3 gap-6 space-y-6">
                {TESTIMONIALS.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 break-inside-avoid">
                        <div className="flex items-center gap-3 mb-4 border-b border-slate-50 pb-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full relative overflow-hidden">
                                <Image src={item.avatar} alt={item.parentName} fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">{item.parentName}</p>
                                <p className="text-xs text-slate-500">Gửi {item.mentorName}</p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm italic">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}