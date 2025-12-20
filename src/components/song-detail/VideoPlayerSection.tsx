'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Music, BookOpen, Moon, Mic2, ChevronDown } from 'lucide-react';
import { SONG_DETAIL, SCRIPTS } from '@/lib/song-detail-data';
import { useModal } from '@/context/ModalContext'; // Dùng lại context để mở video

const VideoPlayerSection = () => {
  const { openVideo } = useModal();
  const [activeMode, setActiveMode] = useState<'song' | 'story' | 'bedtime'>('song');
  const [isScriptOpen, setIsScriptOpen] = useState(false);

  return (
    <section className="pt-20 md:pt-28 pb-4 md:pb-8 relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Video Thumbnail */}
        <div 
          onClick={() => openVideo(SONG_DETAIL.videoUrl)}
          className="relative w-full aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-xl mb-4 group border-4 border-white cursor-pointer"
        >
          <Image 
            src={SONG_DETAIL.thumbnail} 
            alt={SONG_DETAIL.title} 
            fill 
            className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition z-20">
            <Play className="w-6 h-6 md:w-8 md:h-8 text-slate-900 fill-current ml-1" />
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center justify-between gap-2 bg-slate-200/60 p-1.5 rounded-xl mb-4">
          {[
            { id: 'song', icon: Music, label: 'Song' },
            { id: 'story', icon: BookOpen, label: 'Story' },
            { id: 'bedtime', icon: Moon, label: 'Bedtime' }
          ].map((mode) => (
            <button 
              key={mode.id}
              onClick={() => setActiveMode(mode.id as any)}
              className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-bold border border-transparent transition-all flex items-center justify-center gap-1.5
                ${activeMode === mode.id 
                  ? 'bg-white text-blue-600 shadow-sm border-blue-100' 
                  : 'text-slate-500 hover:text-slate-700'
                }
              `}
            >
              <mode.icon className="w-3.5 h-3.5 md:w-4 md:h-4" /> {mode.label}
            </button>
          ))}
        </div>

        {/* Lyrics Accordion */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
          <button 
            onClick={() => setIsScriptOpen(!isScriptOpen)} 
            className="w-full px-4 py-3 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition"
          >
            <span className="text-xs md:text-sm font-bold text-slate-700 flex items-center gap-2">
              <Mic2 className="w-4 h-4 text-blue-500" />
              <span>{SCRIPTS[activeMode].title}</span>
            </span>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isScriptOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`transition-all duration-300 overflow-hidden ${isScriptOpen ? 'max-h-40' : 'max-h-0'}`}>
            <div 
              className="p-4 bg-white text-sm text-slate-600 leading-relaxed overflow-y-auto max-h-40"
              dangerouslySetInnerHTML={{ __html: SCRIPTS[activeMode].content }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoPlayerSection;