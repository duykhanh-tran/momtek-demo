import React from 'react';
import { Music, BookOpen, Layout, Smartphone, Video, CheckSquare } from 'lucide-react';
import { CONTENT_TYPES } from '@/lib/hybrid-book-data';

export default function DigitalContent() {
  const getMainIcon = (iconName: string, className: string) => {
    switch(iconName) {
      case 'music': return <Music className={className} />;
      case 'book-open': return <BookOpen className={className} />;
      case 'layout': return <Layout className={className} />;
      default: return null;
    }
  };

  const getTechIcon = (iconName: string) => {
    switch(iconName) {
      case 'smartphone': return <Smartphone className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'check-square': return <CheckSquare className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-center mb-4">Đa dạng nội dung số</h2>
            <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">Công nghệ Hybrid cho phép tích hợp nhiều định dạng học liệu khác nhau trên cùng một trang giấy.</p>

            <div className="grid md:grid-cols-3 gap-8">
                {CONTENT_TYPES.map((item, index) => (
                    <div key={index} className="bg-slate-800 rounded-3xl p-1 overflow-hidden group hover:scale-[1.02] transition duration-300">
                        <div className={`bg-gradient-to-br ${item.gradient} p-8 rounded-t-[1.3rem] text-center relative overflow-hidden`}>
                            {/* Decorative Icon */}
                            <div className="absolute top-4 left-4 rotate-12 opacity-20">
                                {getMainIcon(item.mainIcon, "w-20 h-20 text-white")}
                            </div>
                            
                            <h3 className="text-xl font-bold relative z-10">{item.title}</h3>
                            <p className="text-white/80 text-sm mt-2 relative z-10">{item.subTitle}</p>
                        </div>
                        <div className="p-8">
                            <p className="text-slate-400 text-sm mb-6 min-h-[60px]">{item.description}</p>
                            <div className={`flex items-center gap-2 text-xs font-bold ${item.textColor}`}>
                                {getTechIcon(item.techIcon)} {item.techTag}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}