'use client';
import { X } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const VideoModal = () => {
  const { videoUrl, closeVideo } = useModal();

  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
        <button 
          onClick={closeVideo}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-white/20 text-white p-2 rounded-full transition"
        >
          <X className="w-6 h-6" />
        </button>
        <iframe 
          src={videoUrl} 
          className="w-full h-full" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;