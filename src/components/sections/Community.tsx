import React from 'react';
import Image from 'next/image';
import { ThumbsUp, PlayCircle } from 'lucide-react';

const Community = () => {
  return (
    <section id="social-proof" className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 text-center">
        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Connect & Learn</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Cộng đồng Momtek
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-12">
          Kết nối, học hỏi và chia sẻ kinh nghiệm cùng hàng chục ngàn gia đình Việt Nam khác.
        </p>

        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition hover:border-blue-600 pb-0.5">
          <ThumbsUp className="w-4 h-4" /> Theo dõi Momtek trên Mạng xã hội
        </a>

        {/* Stats - Giữ nguyên layout grid hoặc flex wrap cho stats vì nó nhỏ */}
        <div className="mb-12 md:mb-24 mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
           <div className="flex justify-center items-center space-x-3">
             <div className="text-3xl font-bold">50K+</div>
             <div className="text-sm text-gray-500 text-left">Followers</div>
           </div>
           <div className="flex justify-center items-center space-x-3">
             <div className="text-3xl font-bold text-red-600">1M+</div>
             <div className="text-sm text-gray-500 text-left">Views</div>
           </div>
           <div className="col-span-2 md:col-span-1 flex justify-center items-center space-x-3">
             <div className="text-3xl font-bold text-blue-600">35K+</div>
             <div className="text-sm text-gray-500 text-left">Members</div>
           </div>
        </div>

        {/* Social Cards - Mobile: Horizontal Scroll */}
        <div className="mt-12 flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible items-stretch snap-x snap-mandatory px-6 md:px-0 -mx-6 md:mx-0 pb-8 md:pb-0 no-scrollbar">
          {/* Card 1: Tiktok */}
          <a href="#" className="min-w-[85vw] md:min-w-0 snap-center card overflow-hidden group rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full bg-white">
            <div className="relative w-full aspect-video overflow-hidden bg-black">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition duration-300 group-hover:bg-black/40">
                <PlayCircle className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow text-left">
              <span className="text-sm font-bold text-black">TIKTOK</span>
              <h3 className="text-xl font-bold mt-1 leading-snug">3 Mẹo giúp bé nhớ từ vựng siêu tốc</h3>
            </div>
          </a>
          
          {/* Card 2: Youtube */}
          <a href="#" className="min-w-[85vw] md:min-w-0 snap-center card overflow-hidden group rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full bg-white">
            <div className="relative w-full aspect-video overflow-hidden bg-red-900">
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition duration-300 group-hover:bg-black/40">
                <PlayCircle className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow text-left">
              <span className="text-sm font-bold text-red-600">YOUTUBE</span>
              <h3 className="text-xl font-bold mt-1 leading-snug">Bài hát Karaoke: Head, Shoulders, Knees & Toes</h3>
            </div>
          </a>

          {/* Card 3: Facebook */}
          <a href="#" className="min-w-[85vw] md:min-w-0 snap-center card overflow-hidden group rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full bg-white">
            <div className="relative w-full aspect-video overflow-hidden bg-blue-900">
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition duration-300 group-hover:bg-black/40">
                <PlayCircle className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow text-left">
              <span className="text-sm font-bold text-blue-600">FACEBOOK</span>
              <h3 className="text-xl font-bold mt-1 leading-snug">Download bộ flashcard chủ đề động vật</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;