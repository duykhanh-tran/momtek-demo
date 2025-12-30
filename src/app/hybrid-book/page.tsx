import React from 'react';
import HeroHybrid from '@/components/hybrid-book/HeroHybrid';
import ComparisonTable from '@/components/hybrid-book/ComparisonTable';
import FoundingStory from '@/components/hybrid-book/FoundingStory';
import HowItWorks from '@/components/hybrid-book/HowItWorks';
import DigitalContent from '@/components/hybrid-book/DigitalContent';
import CtaHybrid from '@/components/hybrid-book/CtaHybrid';
import FadeIn from '@/components/ui/FadeIn';


export default function HybridBookPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroHybrid />
      <FadeIn>
      <ComparisonTable />
      </FadeIn>
      <FadeIn>
      <FoundingStory />
      </FadeIn>
      <FadeIn>
      <HowItWorks />
      </FadeIn>
      <FadeIn>
      <DigitalContent />
      </FadeIn>
      <FadeIn>

      <CtaHybrid />
      </FadeIn>
    
    </main>
  );
}