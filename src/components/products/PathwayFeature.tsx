import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import { PATHWAY_FEATURE } from '@/lib/products-data';

const PathwayFeature = () => {
  return (
    <section id="pathway" className="py-12 md:py-20 bg-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl shadow-orange-100 border border-orange-100">
                
                {/* Content */}
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-[10px] md:text-xs">Dòng Pathway</span>
                    </div>
                    <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4  leading-tight">
                        {PATHWAY_FEATURE.title}<br/>
                        <span className="text-orange-500 text-xl md:text-3xl">{PATHWAY_FEATURE.subtitle}</span>
                    </h2>
                    <p className="text-slate-500 text-sm md:text-lg mb-6 leading-relaxed">
                        {PATHWAY_FEATURE.desc}
                    </p>
                    
                    <ul className="space-y-3 mb-8 text-sm md:text-base">
                        {PATHWAY_FEATURE.points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                                <span className="font-bold text-slate-700">{point}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="w-full md:w-auto bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-700 transition flex items-center justify-center gap-2 text-sm">
                        {PATHWAY_FEATURE.btnText} <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 relative order-1 md:order-2">
                    <div className="relative rounded-xl md:rounded-2xl shadow-lg border-4 border-white overflow-hidden aspect-video">
                        <Image 
                            src={PATHWAY_FEATURE.image} 
                            alt={PATHWAY_FEATURE.title} 
                            fill 
                            className="object-cover" 
                        />
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default PathwayFeature;