import React from 'react';
import HeroSection from '@/components/mentor/HeroSection';
import SelectionProcess from '@/components/mentor/SelectionProcess';
import AdvisoryBoard from '@/components/mentor/AdvisoryBoard';
import MentorList from '@/components/mentor/MentorList';
import MentorRoles from '@/components/mentor/MentorRoles';
import Testimonials from '@/components/mentor/Testimonials';
import FounderPromise from '@/components/mentor/FounderPromise';
import CtaBanner from '@/components/mentor/CtaBanner';
import FadeIn from '@/components/ui/FadeIn';

export default function MentorPage() {
  return (
    <main className="w-full">
      <HeroSection />
        <FadeIn>
      <SelectionProcess />
      </FadeIn>
      <FadeIn>
      <AdvisoryBoard />
      </FadeIn>
      <FadeIn>
      <MentorList />
      </FadeIn>
      <FadeIn>
      <MentorRoles />
      </FadeIn>
      <FadeIn>
      <Testimonials />
      </FadeIn>
      <FadeIn>
      <FounderPromise />
      </FadeIn>
      <FadeIn>
      <CtaBanner />
      </FadeIn>
      
    </main>
  );
}