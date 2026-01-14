import React from "react";
import {
  Users,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export type ValueItem = {
  id: number | string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

type ValuesSectionProps = {
  title?: string;
  items?: ValueItem[];
};

const DEFAULT_VALUES: ValueItem[] = [
  {
    id: 1,
    title: "Lấy gia đình làm trung tâm",
    desc: "Mọi sản phẩm đều được thiết kế để vun đắp tình cảm và sự gắn kết gia đình.",
    icon: <Users className="h-5 w-5 text-amber-500" />,
  },
  {
    id: 2,
    title: "Thấu hiểu trẻ em",
    desc: "Phương pháp học tôn trọng tâm lý và nhịp độ phát triển tự nhiên của trẻ.",
    icon: <HeartHandshake className="h-5 w-5 text-amber-500" />,
  },
  {
    id: 3,
    title: "Đổi mới và Sáng tạo",
    desc: "Luôn ứng dụng công nghệ và các phương pháp sư phạm tiên tiến nhất.",
    icon: <Sparkles className="h-5 w-5 text-amber-500" />,
  },
  {
    id: 4,
    title: "Cam kết và Đồng hành",
    desc: "Chúng tôi không chỉ bán sản phẩm, chúng tôi đồng hành cùng ba mẹ trong suốt hành trình.",
    icon: <ShieldCheck className="h-5 w-5 text-amber-500" />,
  },
];

export default function ValuesSection({
  title = "La bàn dẫn lối cho mọi quyết định của chúng tôi",
  items = DEFAULT_VALUES,
}: ValuesSectionProps) {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-slate-900 mb-10 md:mb-12 px-4">
          {title}
        </h2>

        {/* CẬP NHẬT: Grid Layout cố định
            - Loại bỏ hoàn toàn thanh cuộn (overflow-x-auto).
            - Mobile: grid-cols-2 (2 cột) để hiển thị 2x2, vừa gọn vừa dễ đọc, không cần kéo.
            - Desktop: grid-cols-4 như cũ.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((it) => (
            <div 
                key={it.id} 
                className="flex flex-col items-center text-center p-3 md:p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300"
            >
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100 mb-3 md:mb-4">
                {it.icon}
              </div>

              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">
                {it.title}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}