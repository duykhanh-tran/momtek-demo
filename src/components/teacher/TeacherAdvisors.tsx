import React from 'react';
import { ADVISORS } from "@/lib/teacher-data";

type Advisor = (typeof ADVISORS)[number];

function FounderBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold tracking-wider text-white mb-2">
      <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
      MOMTEK&apos;S FOUNDER
    </span>
  );
}

function AdvisorRow({
  advisor,
  reverse,
}: {
  advisor: Advisor;
  reverse?: boolean;
}) {
  return (
    <div className="py-12 md:py-16 border-b border-slate-50 last:border-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1120px]">
        {/* Đảo thứ tự hiển thị: Mobile luôn hiện ảnh trước (hoặc text trước tùy bạn, ở đây để text trước cho nhất quán) */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-14">
          
          {/* TEXT BLOCK */}
          <div
            className={[
              "col-span-1 md:col-span-6",
              reverse ? "md:order-2" : "md:order-1",
              "order-2 md:order-none" // Mobile: Text xuống dưới nếu cần
            ].join(" ")}
          >
            <div className="max-w-none md:max-w-[540px] space-y-4 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <FounderBadge />
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug text-slate-900">
                {advisor.title}
              </h3>

              <div className="space-y-3 text-sm md:text-base leading-relaxed text-slate-600">
                <p>“{advisor.quote}</p>
                <p>{advisor.quote1}</p>
                <p>{advisor.quote2}</p>
              </div>

              <p className="pt-2 text-sm font-bold text-slate-900 uppercase tracking-wide">
                {advisor.name}
              </p>
            </div>
          </div>

          {/* IMAGE BLOCK */}
          <div
            className={[
              "col-span-1 md:col-span-6",
              reverse ? "md:order-1" : "md:order-2",
              "order-1 md:order-none" // Mobile: Ảnh lên đầu
            ].join(" ")}
          >
            <div
              className={[
                "flex",
                reverse ? "md:justify-start" : "md:justify-end",
                "justify-center" // Mobile: Căn giữa ảnh
              ].join(" ")}
            >
              <div className="w-full max-w-[460px]">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/50 ring-1 ring-black/5">
                  <div className="relative aspect-[4/3] w-full">
                    <img
                      src={advisor.image}
                      alt={advisor.title}
                      className="object-cover w-full h-full absolute inset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /IMAGE */}
        </div>
      </div>
    </div>
  );
}

export default function AdvisorsFoundersSection() {
  return (
    <section className="bg-white w-full overflow-hidden">
      {ADVISORS.map((advisor, idx) => (
        <AdvisorRow key={advisor.id} advisor={advisor} reverse={idx % 2 === 1} />
      ))}
    </section>
  );
}