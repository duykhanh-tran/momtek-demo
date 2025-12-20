import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { BRAIN_SECTION, PLAY_SECTION, TECH_SECTION } from '@/lib/academy-data';

// Helper component cho thẻ bài viết ngang
const ArticleCard = ({ article, color }: { article: any, color: string }) => (
  <article className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer group">
    <div className={`w-full md:w-40 h-32 md:h-32 rounded-lg overflow-hidden shrink-0 ${article.isIcon ? `bg-${color}-50 flex items-center justify-center` : ''}`}>
      {article.isIcon ? (
        <img src={article.image} className="w-16 h-16 opacity-80" alt="icon" />
      ) : (
        <Image src={article.image} alt={article.title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      )}
    </div>
    <div className="flex flex-col justify-center">
      <span className={`text-[10px] font-bold text-${color}-500 uppercase mb-1`}>{article.tag}</span>
      <h4 className="font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
        {article.title}
      </h4>
      {article.isDownload ? (
         <button className="text-xs text-blue-600 font-bold flex items-center gap-1 hover:underline">
           <Download className="w-3 h-3" /> {article.time}
         </button>
      ) : (
         <div className="flex items-center gap-4 text-xs text-slate-400 font-bold"><span>{article.time}</span></div>
      )}
    </div>
  </article>
);

// Helper component cho Banner quảng cáo
const PromoBanner = ({ banner, color }: { banner: any, color: string }) => (
  <div className={`container mx-auto px-4 md:px-6 max-w-5xl mb-8`}>
    <div className={`bg-${color}-50 border border-${color}-100 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition`}>
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-${color}-500 shadow-sm shrink-0`}>
          <banner.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-bold text-slate-800 text-sm">{banner.title}</p>
          <p className="text-xs text-slate-500">{banner.desc}</p>
        </div>
      </div>
      <button className={`w-full md:w-auto bg-white text-${color}-600 border border-${color}-200 px-5 py-2 rounded-full text-xs font-bold hover:bg-${color}-600 hover:text-white transition whitespace-nowrap text-center`}>
        {banner.btn}
      </button>
    </div>
  </div>
);

const AcademySections = () => {
  return (
    <main className="bg-slate-50 pb-16">
      
      {/* --- SECTION BRAIN --- */}
      <section id="section-brain" className="py-10 container mx-auto px-4 md:px-6 max-w-5xl scroll-mt-32">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <div className="p-1 rounded bg-orange-100 text-orange-500"><BRAIN_SECTION.icon className="w-5 h-5" /></div>
            {BRAIN_SECTION.title}
          </h3>
          <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Xem tất cả</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {BRAIN_SECTION.articles.map((article, idx) => (
            <ArticleCard key={idx} article={article} color={BRAIN_SECTION.color} />
          ))}
        </div>
      </section>

      <PromoBanner banner={BRAIN_SECTION.banner} color={BRAIN_SECTION.color} />

      {/* --- SECTION PLAY --- */}
      <section id="section-play" className="py-10 container mx-auto px-4 md:px-6 max-w-5xl border-t border-slate-200 scroll-mt-32">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <div className="p-1 rounded bg-blue-100 text-blue-500"><PLAY_SECTION.icon className="w-5 h-5" /></div>
            {PLAY_SECTION.title}
          </h3>
          <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Xem tất cả</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PLAY_SECTION.articles.map((article, idx) => (
             <ArticleCard key={idx} article={article} color={PLAY_SECTION.color} />
          ))}
        </div>
      </section>

      <PromoBanner banner={PLAY_SECTION.banner} color={PLAY_SECTION.color} />

      {/* --- SECTION TECH --- */}
      <section id="section-tech" className="py-10 container mx-auto px-4 md:px-6 max-w-5xl border-t border-slate-200 scroll-mt-32">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <div className="p-1 rounded bg-purple-100 text-purple-500"><TECH_SECTION.icon className="w-5 h-5" /></div>
            {TECH_SECTION.title}
          </h3>
          <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Xem tất cả</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {TECH_SECTION.articles.map((article, idx) => (
             <ArticleCard key={idx} article={article} color={TECH_SECTION.color} />
          ))}
        </div>
      </section>

      <PromoBanner banner={TECH_SECTION.banner} color={TECH_SECTION.color} />

    </main>
  );
};

export default AcademySections;