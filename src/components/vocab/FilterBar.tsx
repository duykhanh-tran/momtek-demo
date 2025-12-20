import React from 'react';
import { Search } from 'lucide-react';
import { SONG_FILTERS } from '@/lib/vocab-data';

const FilterBar = () => {
  return (
    <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 py-3">
                
                <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar pr-4">
                    {SONG_FILTERS.map((filter) => (
                        <button 
                            key={filter.id}
                            className={`shrink-0 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition
                                ${filter.color === 'slate' 
                                    ? 'bg-slate-900 text-white shadow-md hover:bg-slate-700' 
                                    : filter.color === 'red'
                                        ? 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                                }
                            `}
                        >
                            <filter.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="shrink-0 pl-2 border-l border-slate-200">
                    <button className="w-9 h-9 md:w-10 md:h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-600 transition">
                        <Search className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>

            </div>
        </div>
    </div>
  );
};

export default FilterBar;