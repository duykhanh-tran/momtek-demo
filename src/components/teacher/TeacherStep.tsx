// components/about/ValuesSection.tsx
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
    icon: <Users className="h-4 w-4 text-amber-500" />,
  },
  {
    id: 2,
    title: "Thấu hiểu trẻ em",
    desc: "Phương pháp học tôn trọng tâm lý và nhịp độ phát triển tự nhiên của trẻ.",
    icon: <HeartHandshake className="h-4 w-4 text-amber-500" />,
  },
  {
    id: 3,
    title: "Đổi mới và Sáng tạo",
    desc: "Luôn ứng dụng công nghệ và các phương pháp sư phạm tiên tiến nhất.",
    icon: <Sparkles className="h-4 w-4 text-amber-500" />,
  },
  {
    id: 4,
    title: "Cam kết và Đồng hành",
    desc: "Chúng tôi không chỉ bán sản phẩm, chúng tôi đồng hành cùng ba mẹ trong suốt hành trình.",
    icon: <ShieldCheck className="h-4 w-4 text-amber-500" />,
  },
];

export default function ValuesSection({
  title = "La bàn dẫn lối cho mọi quyết định của chúng tôi",
  items = DEFAULT_VALUES,
}: ValuesSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-center text-xl font-extrabold text-slate-900 md:text-2xl">
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {items.map((it) => (
            <div key={it.id} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                {it.icon}
              </div>

              <p className="mt-4 text-sm font-bold text-slate-900">
                {it.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
