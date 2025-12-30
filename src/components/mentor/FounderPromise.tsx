import React from 'react';
import Image from 'next/image';
import { Check, Quote } from 'lucide-react';

export default function FounderPromise() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="w-20 h-20 mx-auto mb-6 relative">
                 <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                    alt="Founder"
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                 />
                 <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full border-2 border-white">
                    <Check className="w-3 h-3" />
                 </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Lời hứa từ Nhà sáng lập</h2>
            <div className="bg-slate-50 p-8 rounded-2xl relative">
                <Quote className="absolute top-4 left-4 text-slate-200 w-8 h-8 fill-current" />
                <p className="text-lg text-slate-700 font-serif italic mb-6 leading-relaxed">
                    "Tại Momtek, Mentor không được phép phán xét phụ huynh. Dù mẹ có phát âm sai, có lúng túng, chúng tôi vẫn ở đây để cổ vũ. Nhiệm vụ của chúng tôi là làm cho hành trình của mẹ nhẹ nhàng hơn, chứ không phải áp lực hơn."
                </p>
                <div className="flex items-center justify-center gap-2">
                    <span className="font-bold text-slate-900">Ms. Thu Hằng</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-xl text-blue-600" style={{fontFamily: 'cursive'}}>Thu Hang</span>
                </div>
            </div>
        </div>
    </section>
  );
}