import React from 'react';
import ProductHero from '@/components/products/ProductHero';
import ProductNav from '@/components/products/ProductNav';
import FoundationGrid from '@/components/products/FoundationGrid';
import PathwayFeature from '@/components/products/PathwayFeature';
import MasteryGrid from '@/components/products/MasteryGrid';
import ConsultationCTA from '@/components/products/ConsultationCTA';
import FadeIn from '@/components/ui/FadeIn';

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductHero />
      
      {/* Sticky Nav or Just Nav */}
      <ProductNav />
      
      <FadeIn>
        <FoundationGrid />
      </FadeIn>

      <FadeIn>
        <PathwayFeature />
      </FadeIn>

      <FadeIn>
        <MasteryGrid />
      </FadeIn>

      <FadeIn>
        <ConsultationCTA />
      </FadeIn>
    </div>
  );
}