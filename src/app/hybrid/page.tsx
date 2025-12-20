import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import HybridHero from '@/components/hybrid/HybridHero';
import MissingPieces from '@/components/hybrid/MissingPieces';
import FounderStory from '@/components/hybrid/FounderStory'; 
import ThreePillarsDeepDive from '@/components/hybrid/ThreePillarsDeepDive';
import HybridDifference from '@/components/hybrid/HybridDifference'; 
import HybridNextSteps from '@/components/hybrid/HybridNextSteps'; 

export default function HybridPage() {
  return (
    <div className="bg-white min-h-screen">
      <HybridHero />
      
      <FadeIn>
        <MissingPieces />
      </FadeIn>

      <FadeIn>
        <FounderStory />
      </FadeIn>

      <FadeIn>
        <ThreePillarsDeepDive />
      </FadeIn>

      <FadeIn>
        <HybridDifference />
      </FadeIn>

      <FadeIn>
        <HybridNextSteps />
      </FadeIn>
    </div>
  );
}