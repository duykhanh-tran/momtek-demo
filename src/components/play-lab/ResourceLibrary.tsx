import React from 'react';
import Image from 'next/image';
import { Library, Package } from 'lucide-react';
import { FILTERS, RESOURCES } from '@/lib/play-lab-data';

const ResourceLibrary = () => {
  return (
    <section className="py-16 bg-slate-50" id="library">
        <div className="container mx-auto px-6">
            
            {/* Sticky Filter Bar */}
            <div className="sticky top-[72px] z-30 bg-slate-50/95 backdrop-blur-sm py-4 mb-8 border-b border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-2xl font-black text-slate-900  flex items-center gap-2">
                        <Library className="w-6 h-6 text-pink-500" /> Kho Tài Nguyên
                    </h2>
                    
                    <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 md:pb-0">
                        {FILTERS.map((filter) => (
                            <button 
                                key={filter.id}
                                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition border
                                    ${filter.active 
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                                    }
                                `}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {RESOURCES.map((item) => (
                    item.isUpsell ? (
                        /* Upsell Card (Native Ad style) */
                        <div key={item.id} className="bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300 text-white relative">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                            <div className="p-6 h-full flex flex-col justify-center items-center text-center relative z-10">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 animate-bounce">
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-black text-xl mb-2">{item.title}</h3>
                                <p className="text-white/90 text-xs mb-6 leading-relaxed">{item.desc}</p>
                                <button className="px-6 py-2 rounded-full bg-white text-pink-600 text-sm font-bold hover:bg-pink-50 transition shadow-lg">
                                    {item.btnText}
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Standard Resource Card */
                        <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition duration-300 flex flex-col">
                            <div className="relative h-48 overflow-hidden shrink-0">
                                {item.badge && (
                                    <div className={`absolute top-3 left-3 ${item.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-md z-10 uppercase shadow-sm`}>
                                        {item.badge}
                                    </div>
                                )}
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex gap-2 mb-2">
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${item.categoryColor}`}>{item.category}</span>
                                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">{item.age}</span>
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1 line-clamp-2">{item.title}</h3>
                                <p className="text-xs text-slate-500 mb-4 line-clamp-2">{item.desc}</p>
                                <button className={`mt-auto w-full py-2 rounded-lg text-sm font-bold transition flex items-center justify-center gap-2
                                    ${item.type === 'download' 
                                        ? 'bg-slate-900 text-white hover:bg-pink-600' 
                                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                                    }
                                `}>
                                 {item.btnIcon && <item.btnIcon className="w-4 h-4" />} {item.btnText}
                                </button>
                            </div>
                        </div>
                    )
                ))}
            </div>
            
            <div className="mt-10 text-center">
                <button className="px-8 py-3 rounded-full border border-slate-300 text-slate-600 font-bold text-sm hover:bg-white hover:shadow-md transition">
                    Xem thêm 120+ trò chơi khác
                </button>
            </div>
        </div>
    </section>
  );
};

export default ResourceLibrary;