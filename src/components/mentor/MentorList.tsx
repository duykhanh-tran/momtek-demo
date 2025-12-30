import React from 'react';
import Image from 'next/image';
import { Play, Plus } from 'lucide-react';
import { MENTORS } from '@/lib/mentor-data';

export default function MentorList() {
  return (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Real People, Real Care</span>
                <h2 className="text-3xl font-black text-slate-900 mt-2">Gặp gỡ những "Người bạn lớn" của bé</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {MENTORS.map((mentor, index) => {
                    const bgClass = mentor.funFactColor === 'orange' ? 'bg-orange-50 border-orange-100' : 
                                    mentor.funFactColor === 'blue' ? 'bg-blue-50 border-blue-100' : 'bg-purple-50 border-purple-100';
                    const textClass = mentor.funFactColor === 'orange' ? 'text-orange-500' : 
                                      mentor.funFactColor === 'blue' ? 'text-blue-500' : 'text-purple-500';

                    return (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <Image 
                                    src={mentor.image} 
                                    alt={mentor.name}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm">
                                    {mentor.tag}
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-lg text-slate-900">{mentor.name}</h4>
                                <p className="text-sm text-slate-500 mb-4">{mentor.title}</p>
                                
                                <div className={`${bgClass} p-3 rounded-xl mb-4 border`}>
                                    <span className={`text-[10px] font-bold ${textClass} uppercase block mb-1`}>Fun Fact</span>
                                    <p className="text-xs text-slate-600">{mentor.funFact}</p>
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-green-50 text-slate-600 hover:text-green-600 py-2 rounded-lg transition border border-slate-200 hover:border-green-200 group/btn">
                                    <Play className="w-4 h-4 fill-current" />
                                    <span className="text-xs font-bold">Nghe giọng cô</span>
                                    {index === 0 && (
                                         <div className="flex gap-0.5 items-end h-3 ml-1 text-green-500 opacity-0 group-hover/btn:opacity-100 transition">
                                            <span className="w-[3px] h-[10px] bg-current rounded-sm animate-[wave_1s_infinite_ease-in-out]"></span>
                                            <span className="w-[3px] h-[15px] bg-current rounded-sm animate-[wave_1s_infinite_ease-in-out_0.1s]"></span>
                                            <span className="w-[3px] h-[20px] bg-current rounded-sm animate-[wave_1s_infinite_ease-in-out_0.2s]"></span>
                                            <span className="w-[3px] h-[12px] bg-current rounded-sm animate-[wave_1s_infinite_ease-in-out_0.3s]"></span>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}

                <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-inner border border-slate-200 flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:bg-slate-200 transition">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition">
                        <Plus className="w-8 h-8 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-700">Và 50+ Mentor khác</h4>
                    <p className="text-xs text-slate-500 mb-6 px-4">Đang sẵn sàng đồng hành cùng gia đình bạn.</p>
                    <span className="text-blue-600 text-sm font-bold underline">Xem danh sách đầy đủ</span>
                </div>
            </div>
        </div>
    </section>
  );
}