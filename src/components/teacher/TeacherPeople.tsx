import React from "react";

export type TeamMember = {
  id: number | string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
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
      "“Với tầm nhìn nghiêm túc trong lĩnh vực giáo dục, tôi tin rằng sứ mệnh của ba mẹ là chìa khoá tốt nhất cho sự phát triển của con.”",
    avatar: "/images/FD.jpg",
  },
  {
    id: 2,
    name: "Nguyễn Thu Hằng",
    role: "Trưởng nhóm Sản phẩm",
    quote:
      "“Phương pháp của Momtek được xây dựng trên nền tảng khoa học tâm lý và phát triển ngôn ngữ của trẻ.”",
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
    role: "Trưởng nhóm Kỹ thuật",
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
    <section className="bg-white w-full">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-slate-900 mb-10 md:mb-12">
          {title}
        </h2>

        {/* Thay đổi quan trọng:
           - Chuyển sang Grid responsive để hình ảnh và text hiển thị rõ ràng, không bị trượt ngang khuất màn hình.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {members.map((m) => (
            <div key={m.id} className="flex flex-col items-center text-center group">
              <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full ring-4 ring-slate-50 shadow-sm mb-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-base font-bold text-slate-900">{m.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mt-1 mb-3">{m.role}</p>

              <p className="text-xs md:text-sm leading-relaxed text-slate-600 px-2 italic">
                {m.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}