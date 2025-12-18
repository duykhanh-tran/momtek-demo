import FadeIn from "@/components/ui/FadeIn"; // Import Animation Wrapper

import HeroSection from "@/components/sections/HeroSection";
import SocialProof from "@/components/sections/SocialProof";
import PainPoints from "@/components/sections/PainPoints";
import ResourcesAcademy from "@/components/sections/ResourcesAcademy";
import Methodology from "@/components/sections/Methodology";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Founders from "@/components/sections/Founders";
import Testimonials from "@/components/sections/Testimonials";
import Community from "@/components/sections/Community";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden"> 

      <HeroSection />

      {/* Các phần còn lại sẽ trượt lên khi cuộn tới */}
      <FadeIn delay={0.2}>
        <SocialProof />
      </FadeIn>

      <FadeIn>
        <PainPoints />
      </FadeIn>

      <FadeIn direction="right">
        <ResourcesAcademy />
      </FadeIn>

      <FadeIn>
        <Methodology />
      </FadeIn>

      <FadeIn>
        <ProductShowcase />
      </FadeIn>

      <FadeIn>
        <Founders />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn direction="left">
        <Community />
      </FadeIn>

      <FadeIn>
        <CTASection />
      </FadeIn>
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-3 px-5 z-40 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden safe-area-bottom">
        <div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Ưu đãi độc quyền</p>
          <p className="font-extrabold text-slate-800 text-sm">Gói Momtek Language</p>
        </div>
        <button className="bg-orange-500 active:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-transform active:scale-95">
          Mua ngay
        </button>
      </div>
    </div>
  );
}