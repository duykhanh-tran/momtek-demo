import React from 'react';
import Image from 'next/image';
import { BookHeart, Cpu, Plus, PenLine } from 'lucide-react';
import { FOUNDER_STORIES } from '@/lib/hybrid-book-data';

export default function FoundingStory() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/50 to-blue-50/50 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-100 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-slate-400 font-bold tracking-widest uppercase text-sm">Câu chuyện khởi tạo</span>
                <h2 className="text-3xl font-black text-slate-900 mt-2">Tại sao lại là Hybrid?</h2>
                <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
                    Sự kết hợp giữa tư duy Giáo dục truyền thống và Công nghệ hiện đại, đúc kết từ tâm huyết của hai nhà sáng lập.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-8 max-w-5xl mx-auto">
                {FOUNDER_STORIES.map((founder, index) => {
                    const isOrange = founder.colorTheme === 'orange';
                    const borderColor = isOrange ? 'border-orange-400' : 'border-blue-600';
                    const iconBg = isOrange ? 'bg-orange-400' : 'bg-blue-600';
                    const textColor = isOrange ? 'text-orange-500' : 'text-blue-600';
                    const imgBorder = isOrange ? 'border-orange-100' : 'border-blue-100';

                    return (
                        <React.Fragment key={index}>
                            <div className={`w-full md:w-1/2 bg-white p-8 rounded-3xl shadow-lg border-t-4 ${borderColor} relative hover:-translate-y-1 transition duration-300`}>
                                <div className={`absolute -top-6 left-8 w-12 h-12 ${iconBg} text-white rounded-full flex items-center justify-center shadow-md`}>
                                    {founder.icon === 'book-heart' ? <BookHeart className="w-6 h-6"/> : <Cpu className="w-6 h-6"/>}
                                </div>
                                
                                <div className="flex items-center gap-4 mb-6 mt-2">
                                    <div className={`w-16 h-16 rounded-full overflow-hidden border-2 ${imgBorder} relative`}>
                                        <Image src={founder.image} alt={founder.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">{founder.name}</h4>
                                        <p className={`text-xs ${textColor} font-bold uppercase`}>{founder.role}</p>
                                    </div>
                                </div>
                                
                                <blockquote className="text-slate-600 italic leading-relaxed mb-6">
                                    {founder.quote}
                                </blockquote>
                                
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-signature" style={{ fontFamily: 'cursive' }}>
                                    <PenLine className="w-4 h-4" /> Sign Name
                                </div>
                            </div>

                            {/* Dấu cộng ở giữa */}
                            {index === 0 && (
                                <div className="hidden md:flex items-center justify-center text-slate-300">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                                        <Plus className="w-6 h-6" />
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="mt-12 text-center">
                <div className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-900 rotate-45"></div>
                    <p className="text-lg font-bold">
                        "Và Momtek Hybrid ra đời - Để con có được điều tốt nhất của cả hai thế giới."
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}