import React from 'react';
import Image from 'next/image';
import { FOUNDATION_LIST } from '@/lib/products-data';

const FoundationGrid = () => {
  return (
    <section id="foundation" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs">Dòng Foundation</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 ">Tiếng Anh theo chủ đề</h2>
                <p className="text-slate-500 mt-2 text-sm md:text-base">
                    Phân chia các nội dung theo từng chủ đề nhỏ. Phù hợp để mẹ và con cùng bắt đầu.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {FOUNDATION_LIST.map((product) => (
                    <div key={product.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
                        <div className={`h-40 md:h-48 relative flex items-center justify-center
                            ${product.color === 'blue' ? 'bg-blue-50' : product.color === 'green' ? 'bg-green-50' : 'bg-yellow-50'}
                        `}>
                            {product.isIcon ? (
                                <img src={product.image} className="w-16 h-16 md:w-20 md:h-20 shadow-lg rounded-2xl" alt={product.title} />
                            ) : (
                                <Image 
                                    src={product.image} 
                                    alt={product.title} 
                                    width={200} height={300} 
                                    className="w-28 h-36 md:w-32 md:h-40 object-cover rounded shadow-lg rotate-3 group-hover:rotate-0 transition duration-500" 
                                />
                            )}
                            
                            {!product.isIcon && (
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-slate-600 border border-slate-200 flex items-center gap-1 w-max">
                                    <product.icon className="w-3 h-3" /> Xem thử
                                </div>
                            )}
                        </div>
                        
                        <div className="p-5 md:p-6 flex-1 flex flex-col">
                            <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{product.title}</h3>
                            <p className="text-sm text-slate-500 mb-4 flex-1">
                                <strong className="text-slate-700">{product.highlight}</strong> {product.desc}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-slate-900 font-black text-lg">{product.price} <span className="text-xs font-normal text-slate-400">{product.unit}</span></span>
                            </div>
                            <button className={`w-full mt-4 py-3 rounded-xl font-bold transition text-sm text-white
                                ${product.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' : 
                                  product.color === 'green' ? 'bg-slate-900 hover:bg-slate-700' : 
                                  'bg-slate-900 hover:bg-slate-700'}
                            `}>
                                {product.btnText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default FoundationGrid;