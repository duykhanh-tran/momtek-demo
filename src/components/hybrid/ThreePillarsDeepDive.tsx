import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { THREE_PILLARS } from '@/lib/hybrid-data';

const ThreePillarsDeepDive = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-black mb-4">Mô hình Blended Learning của Momtek</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Kết hợp giữa học tập truyền thống và ứng dụng công nghệ để tạo nên sự cân bằng hoàn hảo trong học tập. Mẹ nhàn nhã, con tiến bộ vượt bậc.</p>
      </div>

      <div className="container mx-auto px-6 space-y-20">
        {THREE_PILLARS.map((pillar, index) => (
          <div key={pillar.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
               <div className="relative h-80 w-full">
                 <Image src={pillar.image} alt={pillar.title} fill className="object-cover" />
               </div>
            </div>

            {/* Content Side */}
            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                <div className={`flex items-center gap-4 mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    {index % 2 === 0 && (
                        <div className={`w-12 h-12 bg-${pillar.color}-600 rounded-2xl flex items-center justify-center shadow-lg shadow-${pillar.color}-900/50`}>
                            <pillar.icon className="w-6 h-6" />
                        </div>
                    )}
                    <h3 className={`text-3xl font-bold text-${pillar.color}-400`}>{pillar.title}</h3>
                    {index % 2 !== 0 && (
                        <div className={`w-12 h-12 bg-${pillar.color}-600 rounded-2xl flex items-center justify-center shadow-lg shadow-${pillar.color}-900/50`}>
                            <pillar.icon className="w-6 h-6" />
                        </div>
                    )}
                </div>
                
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    {pillar.desc}
                </p>
                
                <ul className={`space-y-3 text-slate-400 flex flex-col ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                    {pillar.points.map((point, idx) => (
                        <li key={idx} className={`flex gap-2 ${index % 2 !== 0 ? 'flex-row-reverse text-right' : ''}`}>
                            <CheckCircle className={`w-5 h-5 text-${pillar.color}-500 shrink-0`} /> 
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreePillarsDeepDive;