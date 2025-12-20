import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { FOUNDERS } from '@/lib/constants';

const Founders = () => {
  return (
    <section id="founder" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-extrabold tracking-widest uppercase text-sm mb-3 block">Đội ngũ Lãnh đạo</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
            Sự kết hợp hoàn hảo giữa <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Tâm huyết & Chuyên môn</span>
          </h2>
          <p className="text-lg text-slate-500">
            Momtek được xây dựng bởi những tên tuổi hàng đầu trong nền giáo dục Việt Nam, mang đến giải pháp vừa khoa học, vừa giàu tình yêu thương.
          </p>
        </div>

        {/* FIX LAYOUT:
           - max-w-5xl mx-auto: Đảm bảo khối này luôn nằm giữa trang web
           - md:grid md:grid-cols-2: Trên desktop chia đôi cột đều nhau
           - justify-items-center: Căn các thẻ vào giữa cột của nó (nếu cần)
           - Mobile: Vẫn giữ flex + overflow-x-auto để vuốt
        */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible gap-6 md:gap-12 items-stretch snap-x snap-mandatory px-6 md:px-0 -mx-6 md:mx-0 pb-8 md:pb-0 no-scrollbar">
            {FOUNDERS.map((founder, index) => (
              <div 
                key={index} 
                className={`min-w-[85vw] md:min-w-0 w-full snap-center bg-white rounded-3xl border border-${founder.color}-100 shadow-xl shadow-${founder.color}-100/50 overflow-hidden flex flex-col group hover:-translate-y-2 transition duration-300`}
              >
                <div className={`relative h-80 overflow-hidden bg-${founder.color}-50`}>
                  <Image 
                    src={founder.image} 
                    alt={founder.name} 
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`bg-${founder.color === 'orange' ? 'orange-500' : 'blue-600'} text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase`}>
                        {founder.role}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4">
                    <p className={`text-${founder.color === 'orange' ? 'orange-600' : 'blue-600'} font-bold text-sm uppercase tracking-wide mb-2`}>
                      {founder.title}
                    </p>
                    <p className="text-slate-600 italic">"{founder.quote}"</p>
                  </div>
                  <ul className="space-y-2 mt-auto text-sm text-slate-500">
                    <li className="flex gap-2 items-start"><founder.icon className={`w-4 h-4 text-${founder.color === 'orange' ? 'orange-500' : 'blue-600'} mt-0.5 shrink-0`} /> Kinh nghiệm dày dặn</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 md:mt-16 text-center max-w-2xl mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <Quote className="w-8 h-8 text-slate-300 mx-auto mb-4 fill-current" />
          <p className="text-lg font-bold text-slate-800">
            "Sứ mệnh của chúng tôi là biến tiếng Anh từ 'nỗi sợ' thành 'niềm vui' trong mọi gia đình Việt."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founders;