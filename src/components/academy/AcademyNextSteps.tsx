import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ACADEMY_NEXT_STEPS } from '@/lib/academy-data';

const AcademyNextSteps = () => {
  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Khám phá thêm về Momtek</p>
          <h3 className="text-3xl font-black text-center text-slate-900 mb-12 ">Mẹ muốn tìm hiểu điều gì tiếp theo?</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ACADEMY_NEXT_STEPS.map((step, index) => (
            <a 
              key={index} 
              href={step.link} 
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-${step.color}-500 transition duration-300`}
            >
              <div className={`absolute inset-0 bg-${step.color}-50 opacity-0 group-hover:opacity-100 transition duration-300`}></div>
              <div className="p-6 flex items-center gap-5 relative z-10">
                <div className={`w-14 h-14 bg-${step.color}-100 rounded-full flex items-center justify-center text-${step.color}-600 shrink-0 group-hover:scale-110 transition`}>
                  <step.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className={`font-bold text-slate-900 text-lg group-hover:text-${step.color}-600 transition`}>
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">{step.desc}</p>
                </div>
                <div className="ml-auto">
                  <ArrowRight className={`w-5 h-5 text-slate-300 group-hover:text-${step.color}-500 transition`} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyNextSteps;