import React from 'react';
import { Download } from 'lucide-react';
import { VALUES } from '@/lib/play-lab-data';

const PlayLabValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600 rounded-full blur-[100px] opacity-20"></div>

            <div className="relative z-10 text-center mb-12 max-w-3xl mx-auto">
                <span className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-2 block">Sự khác biệt của Momtek Play Lab</span>
                <h2 className="text-2xl md:text-4xl font-black text-white  mb-4">
                    Không chỉ là "File in", đây là <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Giải pháp Ngôn ngữ</span> cho trẻ 4-6 tuổi
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    Khác với các tài liệu trôi nổi trên mạng, mỗi trang in tại Momtek Play Lab đều được thiết kế bởi đội ngũ chuyên gia ngôn ngữ và tâm lý trẻ em.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {VALUES.map((val, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group">
                        <div className={`w-12 h-12 bg-${val.color}-600 rounded-xl flex items-center justify-center text-white font-bold mb-4 shadow-lg shadow-${val.color}-900/50 group-hover:scale-110 transition`}>
                            <val.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            {val.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center relative z-10">
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition shadow-lg flex items-center gap-2 mx-auto">
                    <Download className="w-4 h-4" /> Tải thử tài liệu mẫu ngay
                </button>
                <p className="text-slate-500 text-xs mt-3">Miễn phí trọn đời cho cộng đồng Momtek</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PlayLabValues;