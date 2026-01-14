import React from 'react';
import { ArrowRight, Music, Scissors } from 'lucide-react';
import Link from 'next/link';

const PhonicNextSteps = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-black mb-2">Bạn muốn làm gì tiếp theo?</h3>
          <p className="text-slate-500 text-sm">Khám phá các phương pháp học tập khác tại Momtek.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <Link href="/vocab" className="group bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-orange-500 transition flex items-center gap-6 cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-500/5 translate-x-[-100%] group-hover:translate-x-0 transition duration-500"></div>
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 text-orange-500 shrink-0 group-hover:scale-110 transition">
              <Music className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition">Thư viện Vocab Songs</h4>
              <p className="text-sm text-slate-400 mb-2">300+ bài hát tích hợp AI chấm điểm.</p>
              <span className="text-xs font-bold text-orange-500 flex items-center gap-1">
                Nghe ngay <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
              </span>
            </div>
          </Link>

          <Link href="/play-lab" className="group bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition flex items-center gap-6 cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 translate-x-[-100%] group-hover:translate-x-0 transition duration-500"></div>
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 text-blue-500 shrink-0 group-hover:scale-110 transition">
              <Scissors className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition">Xưởng Play Lab</h4>
              <p className="text-sm text-slate-400 mb-2">Học liệu thủ công & tương tác thực tế.</p>
              <span className="text-xs font-bold text-blue-500 flex items-center gap-1">
                Xem Box <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default PhonicNextSteps;