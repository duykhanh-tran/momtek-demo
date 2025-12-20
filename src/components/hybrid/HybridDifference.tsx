import React from 'react';
import { DIFFERENCE_TABLE } from '@/lib/hybrid-data';

const HybridDifference = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-12">Sự khác biệt thực sự tại Momtek</h2>
        
        <div className="grid md:grid-cols-2 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            {/* Cột 3 KHÔNG */}
            <div className="bg-white p-10">
                <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
                    <DIFFERENCE_TABLE.old.icon className="w-5 h-5" /> {DIFFERENCE_TABLE.old.title}
                </h4>
                <ul className="space-y-8">
                    {DIFFERENCE_TABLE.old.items.map((item, idx) => (
                        <li key={idx} className="flex gap-4">
                            <span className="text-3xl font-black text-slate-200 italic">0{idx + 1}</span>
                            <p className="text-slate-500 leading-snug">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cột 3 CÓ */}
            <div className="bg-blue-600 p-10 text-white">
                <h4 className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
                    <DIFFERENCE_TABLE.new.icon className="w-5 h-5" /> {DIFFERENCE_TABLE.new.title}
                </h4>
                <ul className="space-y-8">
                    {DIFFERENCE_TABLE.new.items.map((item, idx) => (
                        <li key={idx} className="flex gap-4">
                            <span className="text-3xl font-black text-blue-500 italic opacity-80">0{idx + 1}</span>
                            <p className="text-white font-bold leading-snug">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HybridDifference;