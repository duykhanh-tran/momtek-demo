'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Import Link
import { Play, Gamepad2, Files, Lock } from 'lucide-react';
import { SONG_LIST } from '@/lib/vocab-data';
import { useUpsell } from '@/context/UpsellContext';

const SongGrid = () => {
  const { openUpsell } = useUpsell();

  return (
    <section className="py-8 md:py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {SONG_LIST.map((song) => (
                    <article key={song.id} className="group cursor-pointer">
                        <div className="flex md:block gap-4 items-start">
                            
                            {/* Thumbnail - Bấm vào sẽ chuyển trang */}
                            <Link href={`/vocab/${song.id}`} className="relative w-[40%] md:w-full shrink-0 aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-slate-100 block">
                                {song.isHot && (
                                    <div className="absolute top-1 left-1 md:top-2 md:left-2 z-10 bg-red-500 text-white text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                                        🔥 Hot
                                    </div>
                                )}
                                <Image src={song.thumbnail} alt={song.title} width={400} height={300} className="w-full h-full object-cover transition duration-500 md:group-hover:scale-105" />
                                <span className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-black/70 text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded">{song.duration}</span>
                                
                                {/* Overlay Play Icon */}
                                <div className="hidden md:flex absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition items-center justify-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <Play className="w-5 h-5 text-slate-900 fill-current ml-1" />
                                    </div>
                                </div>
                            </Link>

                            {/* Content */}
                            <div className="flex-1 md:mt-4 min-w-0">
                                {/* Title - Bấm vào cũng chuyển trang */}
                                <Link href={`/vocab/${song.id}`}>
                                    <h3 className="font-bold text-slate-900 text-sm md:text-lg leading-tight md:leading-snug line-clamp-2 md:group-hover:text-blue-600 transition mb-1">
                                        {song.title}
                                    </h3>
                                </Link>
                                
                                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 md:mb-3">
                                    <span className={`bg-${song.tagColor}-50 text-${song.tagColor}-600 px-1.5 py-0.5 rounded font-bold`}>{song.tag}</span>
                                    <span>• {song.views}</span>
                                </div>

                                {/* Các nút Game/Card vẫn giữ logic Upsell (không chuyển trang) */}
                                <div className="flex items-center gap-2">
                                    <button onClick={(e) => { e.preventDefault(); openUpsell(); }} className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 bg-purple-50 text-purple-600 rounded-lg text-[10px] md:text-xs font-bold border border-purple-100 active:scale-95 transition hover:bg-purple-100">
                                        <Gamepad2 className="w-3 h-3 md:w-3.5 md:h-3.5" /> Game <Lock className="w-2.5 h-2.5 md:w-3 md:h-3 ml-0.5 opacity-70" />
                                    </button>
                                    <button onClick={(e) => { e.preventDefault(); openUpsell(); }} className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 bg-orange-50 text-orange-600 rounded-lg text-[10px] md:text-xs font-bold border border-orange-100 active:scale-95 transition hover:bg-orange-100">
                                        <Files className="w-3 h-3 md:w-3.5 md:h-3.5" /> Cards <Lock className="w-2.5 h-2.5 md:w-3 md:h-3 ml-0.5 opacity-70" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
            <div className="text-center mt-12">
                <button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-full text-sm hover:bg-slate-50 transition shadow-sm">
                    Xem thêm bài hát
                </button>
            </div>
        </div>
    </section>
  );
};

export default SongGrid;