import React from 'react';
import PlayLabHero from '@/components/play-lab/PlayLabHero';
import StarterPacks from '@/components/play-lab/StarterPacks';
import ResourceLibrary from '@/components/play-lab/ResourceLibrary';
import PlayLabValues from '@/components/play-lab/PlayLabValues';
import ZaloSubscription from '@/components/play-lab/ZaloSubscription';
import PhonicNextSteps from '@/components/phonic-ai/PhonicNextSteps';
import FadeIn from '@/components/ui/FadeIn';

export default function PlayLabPage() {
  return (
    <div className="bg-white min-h-screen">
      
      <PlayLabHero />
      
      <FadeIn>
        <StarterPacks />
      </FadeIn>

      <FadeIn>
        <ResourceLibrary />
      </FadeIn>

      <FadeIn>
        <PlayLabValues />
      </FadeIn>

      <FadeIn>
        <ZaloSubscription />
      </FadeIn>

      <FadeIn>
        <PhonicNextSteps />
      </FadeIn>
    </div>
  );
}