import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import HeroSection from "@/components/language/ContentSections";
import { 
  StruggleSection, 
  SolutionSection, 
  MethodSection, 
  UnboxingSection, 
  CurriculumSection, 
  QualityControlSection,
  PricingSection,
  DemoSection,
  FounderSection
} from "@/components/language/LanguageSection";
import FadeIn from '@/components/ui/FadeIn';
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-merriweather', // Biến CSS này sẽ được inject vào layout
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Momtek Language - Mẹ cùng con chinh phục Pre-Starters",
  description: "Giải pháp tiếng Anh Hybrid dành cho trẻ 4-6 tuổi.",
};

export default function LanguagePage() {
  return (
    <div className={`${merriweather.variable} w-full`}>
      <HeroSection />
        <FadeIn>
      <StruggleSection />
        </FadeIn>
        <FadeIn>
      <SolutionSection />
        </FadeIn>
        <FadeIn>
      <MethodSection />
        </FadeIn>
        <FadeIn>
      <UnboxingSection />
        </FadeIn>
        <FadeIn>
      <CurriculumSection />
        </FadeIn>
        <FadeIn>
      <QualityControlSection />
        </FadeIn>
        <FadeIn>
      <FounderSection />
        </FadeIn>
        <FadeIn>
      <PricingSection />
        </FadeIn>
        <FadeIn>
      <DemoSection />
        </FadeIn>
    </div>
  );
}