import React from 'react';
import AcademyHero from '@/components/academy/AcademyHero';
import EntryPoints from '@/components/academy/EntryPoints';
import StickySubNav from '@/components/academy/StickySubNav';
import TopicSection from '@/components/academy/TopicSection';
import AcademyCommunity from '@/components/academy/AcademyCommunity';
import AcademyNextSteps from '@/components/academy/AcademyNextSteps';
import FadeIn from '@/components/ui/FadeIn';

export default function AcademyPage() {
  return (
    <div className="bg-white min-h-screen">
      <AcademyHero />
      <EntryPoints />
      <StickySubNav />
      
      <FadeIn>
        <TopicSection />
      </FadeIn>

      <FadeIn>
        <AcademyNextSteps />
      </FadeIn>

      <FadeIn>
        <AcademyCommunity />
      </FadeIn>

    </div>
  );
}