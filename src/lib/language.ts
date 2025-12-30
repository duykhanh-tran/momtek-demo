import { 
  MicOff, Tv, HelpCircle, 
  Smartphone, BookOpen, UserCheck, 
  Swords, Heart
} from 'lucide-react';

export const PAIN_POINTS = [
  {
    icon: MicOff,
    title: "Lực bất tòng tâm",
    desc: "Mẹ sợ phát âm sai làm hỏng gốc của con. Muốn dạy nhưng không có lộ trình, không biết bắt đầu từ đâu."
  },
  {
    icon: Tv,
    title: "Con không hợp tác",
    desc: "Con chỉ thích xem YouTube. Mẹ cứ lôi sách ra là con chán nản, chạy trốn hoặc khóc lóc."
  },
  {
    icon: HelpCircle,
    title: "Cô đơn & Mất hướng",
    desc: "Mua App về \"vứt xó\" vì không ai nhắc nhở. Con học đúng hay sai mẹ cũng không biết để sửa."
  }
];

export const METHODS = [
  {
    icon: Smartphone,
    color: "blue",
    title: "App Dẫn đường",
    desc: "Định hướng nhiệm vụ bài học hôm nay. Chấm điểm phát âm bằng AI."
  },
  {
    icon: BookOpen,
    color: "orange",
    title: "Sách Thực hành",
    desc: "Cắt dán, tô màu, làm bài tập trên giấy. Phát triển vận động tinh & tư duy."
  },
  {
    icon: UserCheck,
    color: "green",
    title: "Giáo viên Kiểm tra",
    desc: "Human Touch: Giáo viên chấm bài & feedback 1-1 về kết quả học tập của cả Mẹ và Con."
  }
];

export const CURRICULUM = [
  {
    title: "My Family & Me",
    desc: "Con tự tin giới thiệu bản thân và thể hiện tình yêu với gia đình.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600",
    tags: ["50+ Từ vựng", "Ending Sounds"],
    output: "Thuyết trình về gia đình",
    color: "blue"
  },
  {
    title: "My School",
    desc: "Khám phá trường lớp và làm quen với các hiệu lệnh lớp học.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600",
    tags: ["60+ Từ vựng", "Mệnh lệnh"],
    output: "Hiểu & làm theo chỉ dẫn",
    color: "orange"
  },
  {
    title: "Park & Nature",
    desc: "Khám phá thiên nhiên, màu sắc và thế giới động vật.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600",
    tags: ["70+ Từ vựng", "Mô tả"],
    output: "Mô tả thế giới quan",
    color: "green"
  }
  
];

export const PRICING_PLANS = [
  {
    id: 'trial',
    name: "Trải nghiệm",
    price: "900.000đ",
    originalPrice: null,
    subText: "/ 1 Level (2.5 tháng)",
    features: ["05 Sách Workbook", "05 Bộ Flashcards"],
    isBestValue: false,
    cta: "Mua lẻ tại Shop",
    theme: "light"
  },
  {
    id: 'full',
    name: "Gói Toàn diện (6 Levels)",
    price: "4.590.000đ",
    originalPrice: "5.400k",
    subText: "Tiết kiệm 15% (810.000đ)",
    features: [
      "Tặng bộ Phonic/Story Blend (300k)",
      "Giảm 50% Khóa Online Giao tiếp (Tiết kiệm 1.8tr)",
      "Ưu tiên xếp lịch Mentor VIP"
    ],
    isBestValue: true,
    cta: "Đăng ký Ngay",
    theme: "dark"
  },
  {
    id: 'combo',
    name: "Gói Tăng tốc (3 Levels)",
    price: "2.430.000đ",
    originalPrice: "2.700k",
    subText: "Tiết kiệm 10% (270.000đ)",
    features: ["Tặng bộ Phonic/Story Blend (300k)"],
    isBestValue: false,
    isPopular: true,
    cta: "Mua Combo 3 Level",
    theme: "light"
  }
];
