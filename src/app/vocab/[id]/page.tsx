import React from 'react';
import VideoPlayerSection from '@/components/song-detail/VideoPlayerSection';
import PracticeCard from '@/components/song-detail/PracticeCard';
import OfflineResources from '@/components/song-detail/OfflineResources';
import ProducerNote from '@/components/song-detail/ProducerNote';
import DetailNextSteps from '@/components/song-detail/DetailNextSteps';
import FadeIn from '@/components/ui/FadeIn';

// Lưu ý: Trong thực tế bạn sẽ dùng params.id để fetch dữ liệu
export default function SongDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Video & Lyrics */}
      <VideoPlayerSection />
      
      {/* Flashcard Learning Game */}
      <FadeIn>
        <PracticeCard />
      </FadeIn>

      {/* Offline Resources (Upsell) */}
      <FadeIn>
        <OfflineResources />
      </FadeIn>

      {/* Note */}
      <FadeIn>
        <ProducerNote />
      </FadeIn>

      <FadeIn>
        <DetailNextSteps />
      </FadeIn>

    </div>
  );
}