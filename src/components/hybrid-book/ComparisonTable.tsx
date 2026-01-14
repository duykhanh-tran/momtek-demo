import React from 'react';
import { Book, PenTool, Smartphone, Check, X, CheckCircle } from 'lucide-react';
import { COMPARISON_DATA } from '@/lib/hybrid-book-data';

export default function ComparisonTable() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'book': return <Book className="w-8 h-8" />;
      case 'pen': return <PenTool className="w-8 h-8" />;
      case 'smartphone': return <Smartphone className="w-10 h-10" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-slate-900">Tại sao gọi là "Sách Blend"?</h2>
                <p className="text-slate-500 mt-2">Sự nâng cấp toàn diện so với sách truyền thống và sách chấm đọc.</p>
            </div>

            {/* Bỏ items-center để các cột tự động stretch bằng nhau về chiều cao */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {COMPARISON_DATA.map((item) => (
                    <div 
                        key={item.id}
                        /* Thêm h-full và flex flex-col để thẻ chiếm trọn chiều cao cột */
                        className={`
                            relative rounded-2xl transition duration-300 h-full flex flex-col
                            ${item.isHighlight 
                                ? 'bg-blue-600 text-white p-8 shadow-xl border-4 border-blue-400/30 overflow-hidden z-10' // Đã xóa md:-translate-y-4
                                : 'bg-white text-slate-800 p-8 border border-slate-100 opacity-80 hover:opacity-100 hover:shadow-lg'
                            }
                        `}
                    >
                        {item.isHighlight && (
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                <Smartphone className="w-24 h-24" />
                            </div>
                        )}

                        <div className={`mb-4 ${item.isHighlight ? 'text-yellow-300' : 'text-slate-400'}`}>
                            {getIcon(item.icon)}
                        </div>
                        
                        <h3 className={`font-bold ${item.isHighlight ? 'text-2xl mb-2' : 'text-lg mb-2'}`}>
                            {item.title}
                        </h3>
                        
                        {item.isHighlight && <p className="text-blue-100 text-xs mb-4">Paper + Digital + AI Feedback</p>}
                        
                        <ul className={`text-sm space-y-3 ${item.isHighlight ? 'text-white font-medium' : 'text-slate-500'}`}>
                            {item.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-2 items-start">
                                    {feature.type === 'positive' && (
                                        item.isHighlight 
                                        ? <CheckCircle className="w-5 h-5 text-yellow-300 shrink-0" />
                                        : <Check className="w-4 h-4 text-green-500 shrink-0" />
                                    )}
                                    {feature.type === 'negative' && <X className="w-4 h-4 text-red-400 shrink-0" />}
                                    
                                    <span>{feature.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}