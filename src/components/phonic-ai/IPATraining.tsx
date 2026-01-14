import React from 'react';
import Image from 'next/image';
import { Volume2, Mic } from 'lucide-react';
import { TRAINING_TOPICS, IPA_WORDS } from '@/lib/phonic-ai-data';

const IPATraining = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Luyện tập nhanh (IPA Training)</h2>
          <p className="text-slate-400 text-sm">Cải thiện từng âm vị thông qua các bộ từ vựng chủ đề.</p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {TRAINING_TOPICS.map((topic, index) => (
            <button key={index} className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg transition
              ${topic.color === 'purple' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'}
            `}>
              {topic.title} ({topic.sub})
            </button>
          ))}
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
          {IPA_WORDS.map((item, index) => (
            <div key={index} className="snap-center shrink-0 w-64 md:w-auto bg-slate-900 rounded-2xl p-4 border border-slate-800 hover:border-purple-500 transition group relative">
              <div className="h-32 bg-slate-800 rounded-xl mb-4 overflow-hidden relative p-4 flex items-center justify-center">
                 <Image src={item.img} alt={item.word} width={100} height={100} className="w-full h-full object-contain group-hover:scale-110 transition duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black text-white mb-1 font-tech">{item.word}</h3>
                <p className="text-sm text-slate-500 mb-4">{item.phonetic} - {item.mean}</p>
                <div className="flex justify-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 flex items-center justify-center"><Volume2 className="w-4 h-4" /></button>
                  <button className="w-10 h-10 rounded-full bg-purple-600 text-white hover:bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-900/50"><Mic className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IPATraining;