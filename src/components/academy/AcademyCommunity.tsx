import React from 'react';
import Image from 'next/image';
import { Facebook, MessageCircle, Video, ThumbsUp, Youtube } from 'lucide-react';
import { COMMUNITY_STATS } from '@/lib/academy-data';

const AcademyCommunity = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Avatars */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex -space-x-4 mb-4">
             {[1,2,3,4].map((i) => (
               <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 relative overflow-hidden">
                 <Image src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i === 2 ? '1506794778202-cad84cf45f1d' : i === 3 ? '1494790108377-be9c29b29330' : '1507003211169-0a1dd7228f2d'}?w=100&auto=format&fit=crop`} alt="User" fill className="object-cover" />
               </div>
             ))}
            <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-bold">+50k</div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Cộng đồng cha mẹ thông thái</h2>
          <p className="text-slate-400 text-sm">Gia nhập ngay để không bỏ lỡ tài liệu mới.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-slate-800 pt-8 mb-8">
            {COMMUNITY_STATS.map((stat, idx) => (
                <div key={idx} className={`text-center ${idx === 1 ? 'border-l border-slate-800 border-r' : ''}`}>
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide flex items-center justify-center gap-1">
                        <stat.icon className="w-3 h-3" /> {stat.label}
                    </p>
                </div>
            ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-500 transition shadow-lg flex items-center justify-center gap-2 w-full md:w-auto">
            <Facebook className="w-5 h-5" /> Group Facebook
          </button>
          <button className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition flex items-center justify-center gap-2 w-full md:w-auto">
            <MessageCircle className="w-5 h-5" /> Cộng đồng Zalo
          </button>
        </div>

      </div>
    </section>
  );
};

export default AcademyCommunity;