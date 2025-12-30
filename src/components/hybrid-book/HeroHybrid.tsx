import React from 'react';
import Image from 'next/image';
import { Zap, Music } from 'lucide-react';

export default function HeroHybrid() {
  return (
    <section className="min-h-[85vh] flex items-center pt-20 relative overflow-hidden bg-white">
        {/* Tech Grid Background - Đã thêm vào globals.css hoặc dùng inline style ở đây */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <span className="inline-flex items-center py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                        <Zap className="w-3 h-3 mr-1" /> Công nghệ Giáo dục 4.0
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                        Sách Hybrid Momtek <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Khi trang giấy mở ra thế giới số</span>
                    </h1>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                        Không cần bút chấm đọc đắt tiền. Sách Hybrid Momtek kết hợp cảm giác đọc sách truyền thống với sức mạnh của Video, Audio và AI chấm điểm ngay trên điện thoại của mẹ.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a href="#how-it-works" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 flex items-center justify-center gap-2">
                            Khám phá nguyên lý
                        </a>
                    </div>
                </div>
                
                {/* Phần minh họa Scan 3D */}
                <div className="w-full md:w-1/2 relative flex justify-center py-10 md:py-0">
                    <div className="relative w-72 h-[450px] md:w-80 md:h-[480px] bg-white rounded-[2rem] shadow-2xl border-8 border-slate-900 z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-slate-100 flex flex-col">
                            {/* Camera View Simulation */}
                            <div className="h-2/3 bg-slate-800 relative overflow-hidden">
                                <Image 
                                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" 
                                    alt="Book Scan"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                {/* Scan Frame Overlay */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/50 rounded-xl">
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-blue-500 rounded-bl-lg"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
                                    {/* Scan Line Animation */}
                                    <div className="absolute left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-scan"></div>
                                </div>
                                <div className="absolute bottom-4 left-0 w-full text-center text-white text-xs font-bold animate-pulse">Đang quét mã học liệu...</div>
                            </div>
                            
                            {/* Pop-up Content */}
                            <div className="h-1/3 bg-white p-4 rounded-t-2xl -mt-4 z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] relative">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                                        <Music className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase">Đã mở khóa</p>
                                        <p className="font-bold text-slate-800 text-sm">Bài hát: The Apple Tree</p>
                                    </div>
                                </div>
                                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg text-sm font-bold shadow-md">Bắt đầu học ngay</button>
                            </div>
                        </div>
                    </div>
                    
                    {/* 3D Book Base */}
                    <div className="absolute bottom-[-20px] md:bottom-[-40px] z-0 w-[300px] h-[220px] md:w-[400px] md:h-[300px] bg-orange-50 rounded-xl shadow-xl rotate-x-60 transform perspective-1000 border border-slate-200 flex items-center justify-center">
                         {/* QR Code Simulation */}
                         <div className="absolute top-10 right-10 w-16 h-16 md:w-24 md:h-24 bg-white p-2 rounded-lg shadow-inner rotate-x-0">
                            <div className="w-full h-full bg-slate-900 opacity-80 grid grid-cols-5 gap-0.5 p-1">
                                {Array.from({length: 25}).map((_, i) => (
                                    <div key={i} className={`bg-white ${Math.random() > 0.5 ? 'opacity-0' : 'opacity-100'}`}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}