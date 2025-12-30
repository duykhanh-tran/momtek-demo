import React from 'react';
import PhonicHero from '@/components/phonic-ai/PhonicHero';
import AITestSection from '@/components/phonic-ai/AITestSection';
import ZaloChallenge from '@/components/phonic-ai/ZaloChallenge';
import IPATraining from '@/components/phonic-ai/IPATraining';
import PhonicNextSteps from '@/components/phonic-ai/PhonicNextSteps';
import FadeIn from '@/components/ui/FadeIn';

export default function PhonicPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <PhonicHero />
      
      <FadeIn>
        <AITestSection />
      </FadeIn>

      <FadeIn>
        <ZaloChallenge />
      </FadeIn>

      <FadeIn>
        <IPATraining />
      </FadeIn>

      <FadeIn>
        <PhonicNextSteps />
      </FadeIn>
    </div>
  );
}