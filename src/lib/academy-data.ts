import { Brain, Heart, Zap, Music, Box, Mic, Download, Smartphone, Video, MessageCircle, ThumbsUp, Facebook,Package, Users } from 'lucide-react';

export const ACADEMY_HERO = {
  label: "Thư ngỏ từ Founder",
  title_1: "Giáo dục không phải là đổ đầy một chiếc bình, ",
  title_2: "mà là  ",
  title_highlight: "thắp lên một ngọn lửa ",
  desc: "Chào mừng ba mẹ đến với Học viện Momtek. Tại đây,chúng tôi kết hợp công nghệ AI (High Tech) và sự kết nối cảm xúc (High Touch) để giúp ba mẹ trở thành người thầy vĩ đại nhất của con mình.",
  author: "Teacher.Mai Linh ",
  role: "Founder Momtek",
  image: "/images/FD.jpg",
};

export const ENTRY_CARDS = [
  {
    id: "section-brain",
    tag: "Newbie",
    title: "Khai mở Não bộ & Tần số 432Hz",
    color: "orange",
    image: "/images/Dog-1.jpg"
  },
  {
    id: "section-play",
    tag: "High Touch",
    title: "Kết nối Cảm xúc & Vận động tinh",
    color: "blue",
    image: "/images/Dog-2.jpg"
  },
  {
    id: "section-tech",
    tag: "High Tech",
    title: "Cha mẹ 4.0 & Trợ lý AI",
    color: "purple",
    image: "/images/Dog-3.jpg"
  }
];

export const BRAIN_SECTION = {
  id: "section-brain",
  title: "Khai mở Não bộ",
  icon: Brain,
  color: "orange",
  articles: [
    {
      title: "Tại sao trẻ học qua bài hát nhanh gấp 3 lần?",
      tag: "KHOA HỌC",
      time: "5 phút đọc",
      image: "/images/2.jpg"
    },
    {
      title: "Bí mật tần số 432Hz: Nhạc chữa lành cho bé",
      tag: "PHƯƠNG PHÁP",
      time: "7 phút đọc",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400"
    }
  ],
  banner: {
    icon: Music,
    title: "Trải nghiệm âm nhạc 432Hz",
    desc: "Kho 300+ bài hát Vocab Song tương tác",
    btn: "Nghe thử ngay",
    color: "orange"
  }
};

export const PLAY_SECTION = {
  id: "section-play",
  title: "Chơi cùng con",
  icon: Heart,
  color: "blue",
  articles: [
    {
      title: "Bộ sưu tập 50 tranh tô màu chủ đề Gia đình",
      tag: "TÀI LIỆU IN ẤN",
      time: "Tải PDF",
      isDownload: true,
      image: "https://cdn-icons-png.flaticon.com/512/3094/3094138.png",
      isIcon: true
    },
    {
      title: "15 trò chơi không màn hình với Flashcard",
      tag: "Ý TƯỞNG CHƠI",
      time: "6 phút đọc",
      image: "https://cdn-icons-png.flaticon.com/512/3094/3094138.png"
    }
  ],
  banner: {
    icon: Box,
    title: "Mẹ bận rộn? Dùng Box Play Lab",
    desc: "Học liệu in sẵn, cắt sẵn, giao tận nhà.",
    btn: "Xem bộ Box",
    color: "blue"
  }
};

export const TECH_SECTION = {
  id: "section-tech",
  title: "Cha mẹ 4.0",
  icon: Smartphone,
  color: "purple",
  articles: [
    {
      title: "Khi bố mẹ phát âm chưa chuẩn, hãy để AI lo",
      tag: "AI SPEECH",
      time: "4 phút đọc",
      image: "/images/3.jpg"
    },
    {
      title: "Quy tắc 20-20-20 bảo vệ mắt trẻ khi dùng App",
      tag: "KỶ LUẬT MÀN HÌNH",
      time: "3 phút đọc",
      image: "/images/3.jpg"
    }
  ],
  banner: {
    icon: Mic,
    title: "Super App Momtek",
    desc: "Tích hợp AI Speech Coach sửa lỗi phát âm.",
    btn: "Tải App miễn phí",
    color: "purple"
  }
};

export const COMMUNITY_STATS = [
  { value: "1M+", label: "TikTok Views", icon: Video },
  { value: "150k", label: "Fanpage", icon: ThumbsUp },
  { value: "50k", label: "Subscribers", icon: Facebook } // Icon Youtube mapping tạm
];

export const ACADEMY_NEXT_STEPS = [
  {
    title: "Xem Bộ Giải pháp",
    desc: "Sách, App và Lộ trình giúp mẹ dạy con tại nhà.",
    icon: Package,
    color: "orange",
    link: "/#products"
  },
  {
    title: "Câu chuyện Momtek",
    desc: "Gặp gỡ Founder và hiểu triết lý giáo dục của chúng tôi.",
    icon: Users,
    color: "blue",
    link: "/about"
  }
];