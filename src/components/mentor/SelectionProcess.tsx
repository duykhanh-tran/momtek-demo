import React from 'react';
import { BrainCircuit, Heart, Hand, Check } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/mentor-data'; 

export default function SelectionProcess() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <BrainCircuit className="w-8 h-8" />;
      case 'heart': return <Heart className="w-8 h-8" />;
      case 'hand': return <Hand className="w-8 h-8" />;
      default: return null;
    }
  };

  const getThemeClasses = (theme: string) => {
     switch (theme) {
        case 'blue': return { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600', check: 'text-blue-500' };
        case 'red': return { bg: 'bg-red-50', border: 'border-red-100', text: 'text-red-500', check: 'text-red-500' };
        case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-500', check: 'text-orange-500' };
        default: return { bg: 'bg-slate-50', border: 'border-slate-100', text: 'text-slate-600', check: 'text-slate-500' };
     }
  };

  return (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl font-black text-slate-900 mb-4">Quy trình tuyển chọn khắt khe với "Tiêu chuẩn 3H"</h2>
                <p className="text-slate-500">Tại Momtek, bằng cấp là điều kiện cần, nhưng tình yêu thương mới là điều kiện đủ. Chỉ top 5% ứng viên xuất sắc nhất được lựa chọn.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {PROCESS_STEPS.map((step, index) => {
                    const theme = getThemeClasses(step.colorTheme);
                    return (
                        <div key={step.id} className={`${theme.bg} p-8 rounded-3xl border ${theme.border} text-center group hover:shadow-lg transition ${index === 1 ? 'md:-translate-y-4' : ''}`}>
                            <div className={`w-16 h-16 bg-white ${theme.text} rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition`}>
                                {getIcon(step.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-600 mb-4">{step.subtitle}</p>
                            <ul className="text-left text-sm text-slate-500 space-y-2 bg-white/50 p-4 rounded-xl">
                                {step.items.map((item, i) => (
                                    <li key={i} className="flex gap-2">
                                        <Check className={`w-4 h-4 ${theme.check}`} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
}