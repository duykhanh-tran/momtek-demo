import React from 'react';
import { NEXT_STEPS } from '@/lib/hybrid-data';

const HybridNextSteps = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h3 className="text-3xl font-black text-center text-slate-900 mb-12">Mẹ đã sẵn sàng bắt đầu lộ trình Hybrid?</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {NEXT_STEPS.map((step, index) => (
            <a 
                key={index} 
                href={step.link} 
                className={`group p-8 rounded-3xl border border-slate-200 hover:border-${step.color}-500 transition duration-300 flex flex-col items-center text-center`}
            >
                <div className={`w-16 h-16 bg-${step.color}-50 text-${step.color}-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-${step.color}-600 group-hover:text-white transition`}>
                    <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500">{step.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HybridNextSteps;