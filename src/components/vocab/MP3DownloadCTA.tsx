import React from 'react';
import { Mail, Download, Music, ShieldCheck } from 'lucide-react';
import { MP3_PACK_INFO } from '@/lib/vocab-data';

const MP3DownloadCTA = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-orange-500 rounded-full blur-[80px] md:blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full blur-[60px] md:blur-[100px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-bold uppercase tracking-wider mb-4">
                        🎁 Quà tặng giới hạn
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                        {MP3_PACK_INFO.title}
                    </h2>
                    <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                        {MP3_PACK_INFO.desc}
                    </p>
                    
                    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto md:mx-0">
                        <div className="relative flex-1">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input type="email" placeholder="Nhập email nhận link tải..." className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/50 font-bold shadow-lg text-sm md:text-base" required />
                        </div>
                        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl shadow-orange-500/30 transition transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap shrink-0">
                            <Download className="w-5 h-5" /> <span className="hidden sm:inline">Tải ngay</span><span className="sm:hidden">Tải</span>
                        </button>
                    </form>
                    <p className="text-slate-500 text-xs mt-4 flex items-center justify-center md:justify-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" /> Cam kết bảo mật thông tin 100%.
                    </p>
                </div>

                {/* Animated Vinyl Disk */}
                <div className="w-full md:w-5/12 flex justify-center relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-4 border border-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl rotate-6 hover:rotate-0 transition duration-500">
                                <div className="text-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <Music className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                    </div>
                                    <p className="text-xl md:text-2xl font-black text-white">MP3</p>
                                    <p className="text-blue-200 font-bold text-sm md:text-base">Pack</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute top-4 right-4 md:top-10 md:right-10 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold shadow-lg animate-bounce">
                            FREE
                        </div>
                        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-10 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                            High Quality
                        </div>
                    </div>
                </div>
             </div>   
            </div>
        </div>
    </section>
  );
};

export default MP3DownloadCTA;