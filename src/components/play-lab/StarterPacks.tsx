import React from 'react';
import { ArrowRight } from 'lucide-react';
import { STARTER_PACKS } from '@/lib/play-lab-data';

const StarterPacks = () => {
  return (
    <section className="py-12 bg-white relative -mt-8 z-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <div className="text-center mb-10">
                <span className="text-pink-500 font-bold uppercase text-[10px] tracking-widest">Dành cho người mới</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900  mt-2">Mẹ chưa biết bắt đầu từ đâu?</h2>
                <p className="text-slate-500 text-sm mt-2">Hãy thử ngay 3 bộ học liệu "kinh điển" được tải nhiều nhất tại Momtek</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {STARTER_PACKS.map((pack) => (
                    <div 
                        key={pack.id} 
                        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${pack.gradient} border ${pack.borderColor} hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer`}
                    >
                        <div className="p-6">
                            <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-${pack.color}-600 shadow-md mb-4 text-2xl group-hover:scale-110 transition`}>
                                {pack.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">{pack.title}</h3>
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                {pack.desc}
                            </p>
                            <div className={`flex items-center text-${pack.color}-600 text-sm font-bold`}>
                                <span>{pack.btnText}</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                            </div>
                        </div>
                        {/* Blob decoration */}
                        <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-${pack.color}-100 rounded-full opacity-50 blur-xl`}></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default StarterPacks;