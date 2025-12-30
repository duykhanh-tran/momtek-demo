import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { PRODUCT_NAV } from '@/lib/products-data';

const ProductNav = () => {
  return (
    // Đã thay đổi: Xóa negative margin (-mt), thêm py-8 để tạo khoảng cách thoáng
    <div className="relative z-20 py-8 md:py-12 container mx-auto px-4 md:px-6">
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {PRODUCT_NAV.map((item) => (
                <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    className={`snap-center shrink-0 min-w-[85vw] md:min-w-0 md:w-auto group bg-white p-5 rounded-xl shadow-lg border-b-4 hover:-translate-y-1 transition duration-300 cursor-pointer flex items-center gap-4
                        ${item.color === 'blue' ? 'border-blue-600' : item.color === 'orange' ? 'border-orange-500' : 'border-purple-600'}
                    `}
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition
                        ${item.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 
                          item.color === 'orange' ? 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' :
                          'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'}
                    `}>
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h3>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-300 ml-auto md:hidden
                        ${item.color === 'blue' ? 'group-hover:text-blue-600' : item.color === 'orange' ? 'group-hover:text-orange-600' : 'group-hover:text-purple-600'}
                    `} />
                    <ArrowDown className={`hidden md:block w-4 h-4 text-slate-300 ml-auto
                        ${item.color === 'blue' ? 'group-hover:text-blue-600' : item.color === 'orange' ? 'group-hover:text-orange-600' : 'group-hover:text-purple-600'}
                    `} />
                </a>
            ))}
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden text-[10px] text-slate-400 mt-2">
            Vuốt để xem thêm
        </div>
    </div>
  );
};

export default ProductNav;