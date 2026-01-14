import React from "react";

type CallToActionBannerProps = {
  title?: string;
  subtitle?: string;
  subtitle1?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
};

export default function CallToActionBanner({
  title = "Hãy cùng Momtek viết nên câu chuyện thành công của riêng bạn",
  subtitle = "Chúng tôi rất mong được trở thành một phần trong hành trình nuôi dạy ",
  subtitle1 = " con đầy ý nghĩa của bạn.",
  primaryText = "Khám phá các gói sản phẩm",
  primaryHref = "/san-pham",
  secondaryText = "Hoặc liên hệ với chúng tôi",
  secondaryHref = "/lien-he",
}: CallToActionBannerProps) {
  return (
    <section className="bg-blue-100 w-full">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="rounded-2xl bg-white/50 md:bg-transparent px-4 py-8 text-center md:px-12 md:py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 px-2">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600 px-2">
            {subtitle}
            <span className="block md:inline">{subtitle1}</span>
          </p>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
            <a
              href={primaryHref}
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-amber-400 px-8 text-sm font-bold text-slate-900 shadow-md transition hover:bg-amber-300 active:scale-95 no-underline"
            >
              {primaryText}
            </a>

            <a
              href={secondaryHref}
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-slate-300 sm:border-transparent text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-white/50 transition no-underline"
            >
              {secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}