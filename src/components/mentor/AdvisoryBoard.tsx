import React from 'react';
import Image from 'next/image';
import { ADVISORS } from '@/lib/mentor-data';

export default function AdvisoryBoard() {
  return (
    <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Hội đồng Cố vấn Chuyên môn</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {ADVISORS.map((advisor, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-6 border border-slate-100 hover:shadow-md transition">
                         <div className="w-20 h-20 relative flex-shrink-0">
                            <Image 
                                src={advisor.image} 
                                alt={advisor.name}
                                fill
                                className="rounded-full object-cover border-2 border-slate-100"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-slate-900">{advisor.name}</h4>
                            <p className="text-xs text-blue-600 font-bold uppercase mb-2">{advisor.role}</p>
                            <p className="text-sm text-slate-500 italic">{advisor.quote}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}