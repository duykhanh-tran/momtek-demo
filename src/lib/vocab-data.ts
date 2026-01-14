import { Eye, ListMusic, LayoutGrid, Gamepad2, Files, Music, Lock ,Package , BookOpen } from 'lucide-react';

export const VOCAL_HERO = {
  label: "Câu chuyện sáng lập",
  title_1: "Momtek không viết nhạc để giải trí ",
  title_2: "Momtek viết để trẻ  ",
  title_highlight: "khắc ghi ngôn ngữ.", 
  desc: "Mỗi nốt nhạc, mỗi lời bài hát tại Momtek đều được tinh chỉnh để giúp nào bộ trẻ thư giãn và tiếp thu sau nhất ",
  author: "Teacher.Mai Linh",
  role: "Founder Momtek",
  image: "/images/FD.jpg",
};

export const SONG_FILTERS = [
  { id: 'top', label: 'Top View', icon: Eye, color: 'red' },
  { id: 'playlist', label: 'Play List', icon: ListMusic, color: 'slate', active: true }, // Slate active -> Dark bg
  { id: 'all', label: 'All', icon: LayoutGrid, color: 'white' },
];

export const SONG_LIST = [
  {
    id: 1,
    title: "The Wheels on the Bus - Nhạc thiếu nhi vui nhộn",
    duration: "03:45",
    views: "20k lượt nghe",
    tag: "Vehicles",
    tagColor: "blue",
    thumbnail: "/images/4.jpg"
  },
  {
    id: 2,
    title: "Old MacDonald Had a Farm - Học tên các con vật",
    duration: "02:30",
    views: "15k lượt nghe",
    tag: "Animals",
    tagColor: "green",
    thumbnail: "/images/5.jpg"
  },
  {
    id: 3,
    title: "Baby Shark Doo Doo - Bài hát yêu thích của bé",
    duration: "04:15",
    views: "50k lượt nghe",
    tag: "Family",
    tagColor: "pink",
    thumbnail: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Twinkle Twinkle Little Star - Nhạc ru ngủ",
    duration: "01:45",
    views: "8k lượt nghe",
    tag: "Bedtime",
    tagColor: "indigo",
    isHot: true,
    thumbnail: "/images/6.jpg"
  },
  {
    id: 5,
    title: "Twinkle Twinkle Little Star - Nhạc ru ngủ",
    duration: "01:45",
    views: "8k lượt nghe",
    tag: "Bedtime",
    tagColor: "indigo",
    isHot: true,
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Twinkle Twinkle Little Star - Nhạc ru ngủ",
    duration: "01:45",
    views: "8k lượt nghe",
    tag: "Bedtime",
    tagColor: "indigo",
    isHot: true,
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Twinkle Twinkle Little Star - Nhạc ru ngủ",
    duration: "01:45",
    views: "8k lượt nghe",
    tag: "Bedtime",
    tagColor: "indigo",
    isHot: true,
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Twinkle Twinkle Little Star - Nhạc ru ngủ",
    duration: "01:45",
    views: "8k lượt nghe",
    tag: "Bedtime",
    tagColor: "indigo",
    isHot: true,
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop"
  }
];

export const NEXT_STEPS = [
  {
    title: "Xem Bộ Sản phẩm",
    desc: "Tìm kiếm bộ học liệu Hybrid phù hợp nhất cho bé 4-6 tuổi.",
    icon: Package,
    color: "orange",
    link: "/products"
  },
  {
    title: "Học viện Cha mẹ",
    desc: "Trang bị kiến thức giáo dục sớm từ các chuyên gia hàng đầu.",
    icon: BookOpen,
    color: "blue",
    link: "/academy"
  }
];

export const MP3_PACK_INFO = {
  title: 'Muốn con "tắm" tiếng Anh ngay cả khi tắt màn hình?',
  desc: "Tải trọn bộ 300+ File MP3 chất lượng cao (320kbps) để chép vào USB, Loa Bluetooth cho bé nghe thụ động mọi lúc mọi nơi."
};