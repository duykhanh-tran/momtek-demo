import Image from "next/image";
import { ADVISORS } from "@/lib/teacher-data";

type Advisor = (typeof ADVISORS)[number];

function FounderBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold tracking-wider text-white">
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
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-12 items-start gap-10 md:gap-14">
          {/* TEXT */}
          <div
            className={[
              "col-span-12 md:col-span-6",
              reverse ? "md:order-2" : "md:order-1",
            ].join(" ")}
          >
            <div className="max-w-[540px] space-y-4">
              <FounderBadge />

              <h3 className="text-4xl font-extrabold leading-snug text-slate-900 md:text-[22px]">
                {advisor.title}
              </h3>

              <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                <p>“{advisor.quote}</p>
                <p>{advisor.quote1}</p>
                <p>{advisor.quote2}</p>
              </div>

              <p className="pt-1 text-sm font-semibold text-slate-900">
                {advisor.name}
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className={[
              "col-span-12 md:col-span-6",
              reverse ? "md:order-1" : "md:order-2",
            ].join(" ")}
          >
            <div
              className={[
                "flex",
                reverse ? "md:justify-start" : "md:justify-end",
              ].join(" ")}
            >
              <div className="w-full max-w-[460px]">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_14px_34px_rgba(15,23,42,0.10)] ring-1 ring-black/5">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={advisor.image}
                      alt={advisor.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 770px) 480px, 100vw"
                      priority={!reverse}
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
    <section className="bg-white">
      {ADVISORS.map((advisor, idx) => (
        <AdvisorRow key={advisor.id} advisor={advisor} reverse={idx % 2 === 1} />
      ))}
    </section>
  );
}
