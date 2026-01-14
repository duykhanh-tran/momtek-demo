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
    <section className="bg-slate-50 w-full">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="rounded-xl  bg-slate-50  px-6 py-8 md:px-10 md:py-12">
          {/* Grid responsive: 1 cột trên mobile, 2 cột trên tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-blue-900 mb-3">
                {missionTitle}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 text-justify">
                {missionText}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-blue-900 mb-3">
                {visionTitle}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 text-justify">
                {visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}