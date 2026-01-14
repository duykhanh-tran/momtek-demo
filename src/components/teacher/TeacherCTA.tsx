// components/about/CallToActionBanner.tsx
import Link from "next/link";

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
    <section className="bg-blue-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <div className="rounded-2xl bg-blue-100 px-4 py-8 text-center md:px-12 md:py-12">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-2xl">
            {title}
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            {subtitle}
            <br />
            {subtitle1}
          </p>
          

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex h-10 items-center justify-center rounded-full bg-amber-400 px-6 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-95 active:brightness-90"
            >
              {primaryText}
            </Link>

            <Link
              href={secondaryHref}
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              {secondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
