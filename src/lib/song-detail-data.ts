import { Mic, Lock } from 'lucide-react';

export const SONG_DETAIL = {
  id: "wheels-on-the-bus",
  title: "The Wheels on the Bus - Nhạc thiếu nhi vui nhộn",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Link Youtube mẫu
  thumbnail: "https://images.unsplash.com/photo-1629249767576-8025287f3b89?q=80&w=1200&auto=format&fit=crop"
};

export const SCRIPTS = {
  song: {
    title: "Lời bài hát (Lyrics)",
    content: `<p>The wheels on the bus go round and round,<br>Round and round,<br>Round and round.<br>The wheels on the bus go round and round,<br>All through the town.</p><br><p>The wipers on the bus go Swish, swish, swish...</p>`
  },
  story: {
    title: "Lời dẫn truyện (Script)",
    content: `<p><strong>Narrator:</strong> One sunny morning, the yellow bus started its engine. "Vroom Vroom!". The wheels began to turn. They went round and round, rolling down the street.</p>`
  },
  bedtime: {
    title: "Lời ru (Script)",
    content: `<p><i>(Soft music playing)</i><br>Close your eyes, little one. Imagine the big yellow bus is now sleeping in the garage. The wheels are still. Shhh... Goodnight bus.</p>`
  }
};

export const LESSON_DATA = [
  { 
    id: 1, 
    type: 'vocab', 
    word: 'Bus', 
    mean: 'Xe buýt', 
    img: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png', 
    audio: '/audio/bus.mp3' // Placeholder
  },
  { 
    id: 2, 
    type: 'vocab', 
    word: 'Wheel', 
    mean: 'Bánh xe', 
    img: 'https://cdn-icons-png.flaticon.com/512/3204/3204216.png', 
    audio: '/audio/wheel.mp3' 
  },
  { 
    id: 3, 
    type: 'vocab', 
    word: 'Door', 
    mean: 'Cửa xe', 
    img: 'https://cdn-icons-png.flaticon.com/512/822/822168.png', 
    audio: '/audio/door.mp3' 
  },
  { 
    id: 4, 
    type: 'sentence', 
    word: 'The wheels go round.', 
    mean: 'Bánh xe quay tròn', 
    img: 'https://cdn-icons-png.flaticon.com/512/2641/2641457.png', 
    audio: '/audio/sentence.mp3' 
  }
];

export const RELATED_RESOURCES = [
  { id: 1, title: 'Tô màu', img: '/images/7.jpg' },
  { id: 2, title: 'Nối từ', img: '/images/7.jpg' },
  { id: 3, title: 'Thủ công', img: '/images/7.jpg' },
  { id: 4, title: 'Tập viết', img: '/images/7.jpg' }
];