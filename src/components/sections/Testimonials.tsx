import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          Hàng nghìn phụ huynh đã sử dụng và thành công
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 left-6 text-blue-100 w-10 h-10 fill-current" />
              <p className="text-slate-600 italic mb-6 relative z-10 pt-6">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden relative">
                   <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;