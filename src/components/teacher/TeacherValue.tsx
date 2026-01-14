// components/about/MissionVision.tsx
import React from "react";

type MissionVisionProps = {
  missionTitle?: string;
  missionText?: string;
  visionTitle?: string;
  visionText?: string;
};

export default function MissionVision({
  missionTitle = "Sứ mệnh của chúng tôi",
  missionText = "Trao cho 1 triệu ba mẹ Việt Nam sự tự tin, công cụ và lộ trình rõ ràng để đồng hành cùng con chinh phục tiếng Anh ngay tại nhà.",
  visionTitle = "Tầm nhìn của chúng tôi",
  visionText = "Trở thành người bạn đồng hành đáng tin cậy nhất trong tủ sách và trong tim của mọi gia đình Việt, kiến tạo một thế hệ trẻ em yêu thích học hỏi và gắn kết sâu sắc với ba mẹ.",
}: MissionVisionProps) {
  return (
    <section className="bg-slate-50">
      {/* giống ảnh: một khối trắng, viền nhẹ, có padding lớn và 2 cột */}
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="rounded-xl  border-slate-200 bg-slate-50 px-6 py-6 md:px-10 md:py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="text-xl font-extrabold text-blue-900">
                {missionTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {missionText}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-blue-900">
                {visionTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
