import React from 'react';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';
import { METHODOLOGY_PILLARS } from '@/lib/constants';

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-extrabold tracking-widest uppercase text-sm mb-3 block">Giải pháp Momtek</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
             3 trụ cột tạo nên thành công 
          </h2>
          <p className="text-lg text-slate-500 mb-6">
            Momtek sở hữu hệ sinh thái Công nghệ - Học liệu - Giáo viên toàn diện để giải quyết mọi rào cản giúp mẹ yên tâm cùng con chinh phục tiếng Anh tại nhà.
          </p>
          <Link href="/hybrid" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition border-b border-slate-200 hover:border-blue-600 pb-0.5">
            <BookOpen className="w-4 h-4" />
            Mô hình học tập Blended Learning 
          </Link>
        </div>
             
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {METHODOLOGY_PILLARS.map((pillar) => (
            <div key={pillar.id} className={`bg-${pillar.color}-50 rounded-3xl p-8 border border-${pillar.color}-100 shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full relative overflow-hidden`}>
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-white text-${pillar.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.name}</h3>
                <p className="text-slate-600 text-sm mb-8 min-h-[40px]">{pillar.desc}</p>
                
                <div className="space-y-3">
                  {pillar.links.map((link, idx) => (
                    // ĐÃ SỬA: Thay thẻ div bằng thẻ Link để có thể click chuyển trang
                    <Link 
                      key={idx} 
                      href={link.href}
                      className={`flex items-center justify-between p-3 bg-white/80 rounded-xl hover:bg-${pillar.color}-600 hover:text-white transition group/item cursor-pointer shadow-sm border border-${pillar.color}-100/50`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`bg-${pillar.color}-100 text-${pillar.color}-600 p-1.5 rounded-lg group-hover/item:bg-white/20 group-hover/item:text-white`}>
                          <link.icon className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-bold">{link.text}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-${pillar.color}-300 group-hover/item:text-white`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;