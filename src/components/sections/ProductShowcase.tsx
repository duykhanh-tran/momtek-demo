import React from 'react';
import Link from 'next/link'; // Import Link
import { LayoutGrid, GraduationCap, ChevronRight, ArrowRight, MessageCircle, Layers, BookOpen } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-extrabold tracking-widest uppercase text-sm mb-3 block">Danh mục Sản phẩm</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
            Mẹ đang tìm kiếm điều gì?
          </h2>
          <p className="text-lg text-slate-500">
            Tất cả sản phẩm đều được thiết kế độc lập. Hãy chọn đúng công cụ Mẹ cần để bổ trợ cho con tốt nhất 
          </p>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition border-b border-slate-200 hover:border-blue-600 pb-0.5 pt-4">
            <BookOpen className="w-4 h-4 " />
            Hãy xem sản phẩm  của chúng tôi 
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          
          {/* Column 1: Single Apps */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden group h-full flex flex-col">
            <div className="h-2 bg-orange-400 w-full absolute top-0 left-0"></div>
            <div className="p-8 flex flex-col h-full">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <LayoutGrid className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Chương trình Cơ bản </h3>
              <p className="text-slate-500 text-sm mb-6">Các bộ sản phẩm phục vụ từng kỹ năng riêng biệt,để con từng bước làm quen tiếng Anh.</p>
              
              <div className="space-y-3 mt-auto">
                {PRODUCTS.single.map((item, idx) => (
                  // CẬP NHẬT: Dùng Link thay cho div
                  <Link 
                    key={idx} 
                    href={item.href}
                    className="flex items-center justify-between p-4 bg-orange-50 rounded-xl hover:bg-orange-500 hover:text-white transition group/item cursor-pointer border border-orange-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg text-orange-500 shadow-sm"><item.icon className="w-5 h-5" /></div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-[10px] opacity-80">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-300 group-hover/item:text-white" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-6 pt-0 mt-2">
               <Link href="/products" className="block text-center text-xs font-bold text-slate-400 hover:text-orange-500">Xem tất cả sách &rarr;</Link>
            </div>
          </div>

          {/* Column 2: Bundle (Highlighted) */}
          <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden transform md:-translate-y-4 md:scale-105 z-10 flex flex-col h-full">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-transparent w-full h-full opacity-20 pointer-events-none"></div>
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">Phổ biến nhất</div>
            
            <div className="p-8 flex flex-col h-full relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Giải pháp Toàn diện</h3>
              <p className="text-slate-300 text-sm mb-6">Các chương trình học tập tại nhà toàn diện,tạo dựng nền tảng 4 kỹ năng theo chuẩn Cambridge.</p>
            
              <div className="space-y-4 mt-auto">
                {/* Bundle Item 1 */}
                <Link 
                  href={PRODUCTS.bundle[0].href}
                  className="flex items-center justify-between p-4 rounded-xl bg-blue-600 transition group/item cursor-pointer border border-slate-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-900/50 p-2 rounded-lg text-white">
                      {React.createElement(PRODUCTS.bundle[0].icon, { className: "w-6 h-6 text-yellow-500 " })}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{PRODUCTS.bundle[0].title}</h4>
                      <p className="text-[11px]  text-blue-100">{PRODUCTS.bundle[0].desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5  text-white" />
                </Link>

                {/* Bundle Item 2 */}
                <Link 
                  href={PRODUCTS.bundle[1].href}
                  className="flex items-center justify-between p-4 bg-slate-800 rounded-xl cursor-pointer border border-slate-600 hover:bg-slate-700 transition group/item"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-900/50 p-2 rounded-lg  ">
                      {React.createElement(PRODUCTS.bundle[1].icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-500 text-base group-hover/item:text-slate-300">{PRODUCTS.bundle[1].title}</h4>
                      <p className="text-[11px] text-slate-400 group-hover/item:text-blue-100">{PRODUCTS.bundle[1].desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover/item:text-white" />
                </Link>
              </div>
            </div>
             <div className="p-8 pt-0 mt-2 relative">
                <Link href="/lien-he" className="w-full text-blue-400 hover:text-white text-sm font-bold flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-white/10 transition">
                  <MessageCircle className="w-4 h-4" /> Cần tư vấn chọn gói?
                </Link>
           </div>
          </div>

          {/* Column 3: Coaching */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden group h-full flex flex-col">
            <div className="h-2 bg-purple-500 w-full absolute top-0 left-0"></div>
            <div className="p-8 flex flex-col h-full">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Đào tạo Chuyên sâu</h3>
              <p className="text-slate-500 text-sm mb-6">Các khóa học Online 1-1 cùng chuyên gia và các Workshop kỹ năng đặc biệt cho Phụ huynh.</p>
              
              <div className="space-y-3 mt-auto">
                {PRODUCTS.training.map((item, idx) => (
                  // CẬP NHẬT: Dùng Link thay cho div
                  <Link 
                    key={idx} 
                    href={item.href}
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-xl hover:bg-purple-600 hover:text-white transition group/item cursor-pointer border border-purple-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg text-purple-600 shadow-sm"><item.icon className="w-5 h-5" /></div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-[10px] opacity-80">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-purple-300 group-hover/item:text-white" />
                  </Link>
                ))}
              </div>
            </div>
             <div className="p-6 pt-0 mt-2">
                <Link href="/lien-he" className="block text-center text-xs font-bold text-slate-400 hover:text-purple-600">Liên hệ Booking &rarr;</Link>
           </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;