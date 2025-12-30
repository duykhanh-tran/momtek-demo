import React from 'react';
import { BookOpen, QrCode, PlayCircle, Trophy } from 'lucide-react';
import { STEPS } from '@/lib/hybrid-book-data';

export default function HowItWorks() {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'book-open': return <BookOpen className="w-8 h-8 mx-auto" />;
      case 'qr-code': return <QrCode className="w-8 h-8 mx-auto" />;
      case 'play-circle': return <PlayCircle className="w-8 h-8 mx-auto" />;
      case 'trophy': return <Trophy className="w-8 h-8 mx-auto" />;
      default: return null;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-center text-slate-900 mb-16">Cơ chế hoạt động: Từ trang sách đến Lớp học số</h2>
            
            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

                <div className="grid md:grid-cols-4 gap-8 relative z-10">
                    {STEPS.map((step) => {
                        const hoverBg = step.hoverColor === 'blue' ? 'group-hover:bg-blue-600' : 'group-hover:bg-green-600';
                        const hoverText = step.hoverColor === 'blue' ? 'group-hover:text-blue-500' : 'group-hover:text-green-500';

                        return (
                            <div key={step.stepNumber} className="bg-white p-6 rounded-3xl border border-slate-200 text-center hover:shadow-lg transition group">
                                <div className={`w-14 h-14 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl ${hoverBg} group-hover:text-white transition`}>
                                    {step.stepNumber}
                                </div>
                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                <p className="text-sm text-slate-500">{step.description}</p>
                                <div className={`mt-4 text-slate-300 ${hoverText} transition`}>
                                    {getIcon(step.icon)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
  );
}