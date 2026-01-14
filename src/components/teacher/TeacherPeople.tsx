// components/about/TeamSection.tsx
import Image from "next/image";
import React from "react";

export type TeamMember = {
  id: number | string;
  name: string;
  role: string; // dòng xanh
  quote: string;
  avatar: string; // /public/...
};

type TeamSectionProps = {
  title?: string;
  members?: TeamMember[];
};

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Nguyễn Khánh Hà",
    role: "Giám đốc",
    quote:
      "“Với tầm nhìn nghiêm trọng lĩnh vực giáo dục, tôi tin rằng sứ mệnh của ba mẹ là chìa khoá tốt nhất cho sự phát triển của con.”",
    avatar: "/images/FD.jpg",
  },
  {
    id: 2,
    name: "Nguyễn Thu Hằng",
    role: "Trưởng nhóm Sản phẩm",
    quote:
      "“Phương pháp của Momtek được xây dựng trên nền tảng khoa học và tâm lý và phát triển ngôn ngữ của trẻ.”",
    avatar: "/images/FD.jpg",
  },
  {
    id: 3,
    name: "Nguyễn Văn Hải",
    role: "Trưởng nhóm Thiết kế",
    quote:
      "“Mọi chi tiết trong học liệu và ứng dụng đều được chúng tôi chăm chút để mang lại trải nghiệm tốt nhất.”",
    avatar: "/images/FD.jpg",
  },
  {
    id: 4,
    name: "Nguyễn Bá Sơn",
    role: "Trưởng nhóm Thiết kế",
    quote:
      "“Chúng tôi tự hào mang đến công nghệ AI luyện âm tiên tiến để hỗ trợ các gia đình Việt Nam.”",
    avatar: "/images/FD.jpg",
  },
];

export default function TeamSection({
  title = "Đội ngũ Momtek",
  members = DEFAULT_MEMBERS,
}: TeamSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-center text-xl font-extrabold text-slate-900 md:text-2xl">
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {members.map((m) => (
            <div key={m.id} className="text-center">
              <div className="mx-auto h-16 w-16 overflow-hidden rounded-full ring-1 ring-black/5">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-3 text-sm font-bold text-slate-900">{m.name}</p>
              <p className="text-xs font-semibold text-blue-600">{m.role}</p>

              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                {m.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
