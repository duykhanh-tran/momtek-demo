import React from 'react';
import VocabHero from '@/components/vocab/VocabHero';
import FilterBar from '@/components/vocab/FilterBar';
import SongGrid from '@/components/vocab/SongGrid';
import VocalNextSteps from '@/components/vocab/VocalNextSteops';
import MP3DownloadCTA from '@/components/vocab/MP3DownloadCTA';
import FadeIn from '@/components/ui/FadeIn';

export default function VocabPage() {
  return (
    <div className="bg-white min-h-screen">
      <VocabHero />
      <FilterBar />
      
      <FadeIn>
        <SongGrid />
      </FadeIn>
      <VocalNextSteps />
      <FadeIn>
        <MP3DownloadCTA />
      </FadeIn>
    </div>
  );
}