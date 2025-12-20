import React from 'react';
import Image from 'next/image';
import { Quote, Headphones, ArrowRight, ShieldCheck, BrainCircuit, Award } from 'lucide-react';

const ProducerNote = () => {
  return (
    <section className="py-8 md:py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Dark Card */}
        <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-200">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="relative shrink-0">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" width={120} height={120} className="w-full h-full object-cover rounded-full border-2 border-slate-900" alt="Ms. Thu Hang" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white text-slate-900 p-1.5 rounded-full shadow-md border border-slate-200">
                <Headphones className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Quote className="w-4 h-4 md:w-5 md:h-5 text-slate-500 fill-current" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-400">Lời nhắn từ phòng thu</span>
              </div>
              <h3 className="text-lg md:text-xl font-medium italic text-slate-200 mb-4 leading-relaxed">
                "Mẹ có biết? Bài hát này được tinh chỉnh ở tần số <strong>432Hz</strong> - tần số vàng giúp não bộ trẻ thư giãn và tiếp thu ngôn ngữ sâu nhất."
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div>
                  <p className="font-bold text-white text-sm">Ms. Thu Hằng</p>
                  <p className="text-[10px] text-slate-400 uppercase">Founder Momtek</p>
                </div>
                <div className="w-px h-8 bg-slate-700 mx-1"></div>
                <button className="text-xs font-bold text-orange-400 hover:text-orange-300 transition flex items-center gap-1">
                  Xem thêm về phương pháp <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-4 md:gap-8 mt-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-slate-400" /><span className="text-[10px] md:text-xs font-bold text-slate-500">Kid-Safe Content</span></div>
          <div className="flex items-center gap-1.5"><BrainCircuit className="w-4 h-4 text-slate-400" /><span className="text-[10px] md:text-xs font-bold text-slate-500">Earworm Tech</span></div>
          <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-slate-400" /><span className="text-[10px] md:text-xs font-bold text-slate-500">Teacher Approved</span></div>
        </div>

      </div>
    </section>
  );
};

export default ProducerNote;