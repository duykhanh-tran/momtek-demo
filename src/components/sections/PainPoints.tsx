import React from 'react';
import { PAIN_POINTS } from '@/lib/constants';

const PainPoints = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">
          Hành trình dạy con không hề dễ dàng...
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PAIN_POINTS.map((point, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl text-center transition duration-300 hover:scale-105 cursor-default bg-${point.color}-50 hover:bg-${point.color}-100`}
            >
              <div className={`w-12 h-12 bg-white text-${point.color}-500 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl shadow-sm`}>
                {point.icon}
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{point.title}</h3>
              <p className="text-xs text-slate-500">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;