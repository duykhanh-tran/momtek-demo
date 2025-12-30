import React from 'react';
import Image from 'next/image';
import { Bell, ArrowRight } from 'lucide-react';

const ZaloSubscription = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-xl shadow-blue-100 animate-bounce">
                <div className="relative w-10 h-10">
                    <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png" 
                        alt="Zalo" 
                        fill 
                        className="object-contain"
                    />
                </div>
            </div>
            
            <h2 className="text-3xl font-black text-slate-900  mb-4">
                Đừng bỏ lỡ học liệu mới mỗi tuần!
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Hơn 15.000 mẹ thông thái đang nhận file in (PDF), Video hướng dẫn và Mã code học liệu miễn phí qua Zalo mỗi sáng Thứ Hai.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 flex items-center gap-2 transform hover:-translate-y-1">
                    <Bell className="w-5 h-5" /> Đăng ký nhận quà qua Zalo
                </button>
            </div>

            <p className="mt-8 text-sm text-slate-500">
                Mẹ muốn mua trọn bộ Sách giấy in sẵn đẹp lung linh? <br className="md:hidden" />
                <br />
                <a href="#products" className="text-pink-600 font-bold hover:underline inline-flex items-center gap-1 mt-2">
                    Xem ưu đãi bộ sách Momtek <ArrowRight className="w-3 h-3" />
                </a>
            </p>
        </div>
    </section>
  );
};

export default ZaloSubscription;