import React from 'react';
import { GraduationCap, Map, Heart, Check } from 'lucide-react';
import { ROLES } from '@/lib/mentor-data';

export default function MentorRoles() {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'graduation': return <GraduationCap className="w-6 h-6" />;
      case 'map': return <Map className="w-6 h-6" />;
      case 'heart': return <Heart className="w-6 h-6" />;
      default: return null;
    }
  };

  const getThemeClasses = (theme: string) => {
      switch(theme) {
          case 'blue': return { text: 'text-blue-400', bgIcon: 'bg-blue-500/20 group-hover:bg-blue-500', hoverBorder: 'hover:border-blue-500', check: 'text-blue-500' };
          case 'orange': return { text: 'text-orange-400', bgIcon: 'bg-orange-500/20 group-hover:bg-orange-500', hoverBorder: 'hover:border-orange-500', check: 'text-orange-500' };
          case 'pink': return { text: 'text-pink-400', bgIcon: 'bg-pink-500/20 group-hover:bg-pink-500', hoverBorder: 'hover:border-pink-500', check: 'text-pink-500' };
          default: return { text: 'text-slate-400', bgIcon: 'bg-slate-500/20', hoverBorder: '', check: 'text-slate-500' };
      }
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-orange-900/30 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">3 Vai trò - 1 Sứ mệnh</span>
                <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6">Chân dung người Mentor Momtek</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                    Tại Momtek, Mentor không chỉ là giáo viên chấm bài. Chúng tôi định nghĩa mình là một người bạn đồng hành "đa năng", sẵn sàng biến hóa để lấp đầy mọi khoảng trống mà mẹ đang thiếu.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {ROLES.map((role) => {
                    const theme = getThemeClasses(role.colorTheme);
                    return (
                         <div key={role.id} className={`bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700 ${theme.hoverBorder} hover:bg-slate-800 transition duration-300 group`}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 ${theme.bgIcon} ${theme.text} rounded-xl flex items-center justify-center group-hover:text-white transition`}>
                                    {getIcon(role.icon)}
                                </div>
                                <h3 className="text-xl font-bold text-white">{role.title}</h3>
                            </div>
                            <p className="text-slate-400 text-sm mb-4 min-h-[60px]">
                                {role.description}
                            </p>
                            <div className="space-y-3">
                                {role.checklist.map((item, i) => (
                                     <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check className={`w-4 h-4 ${theme.check}`} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="mt-12 text-center border-t border-slate-800 pt-8">
                <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto italic">
                    "Tùy vào từng thời điểm và sản phẩm mẹ lựa chọn, Mentor sẽ linh hoạt điều chỉnh trọng số của 3 vai trò này để mang lại hiệu quả tốt nhất cho con."
                </p>
            </div>
        </div>
    </section>
  );
}