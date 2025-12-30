import { BrainCircuit, Heart, Hand, GraduationCap, Map } from 'lucide-react';

// --- 1. DEFINITIONS (Types) ---
export interface ProcessStep {
  id: string;
  icon: 'brain' | 'heart' | 'hand';
  title: string;
  subtitle: string;
  items: string[];
  colorTheme: 'blue' | 'red' | 'orange';
}

export interface Advisor {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Mentor {
  name: string;
  title: string;
  image: string;
  tag: string;
  funFact: string;
  funFactColor: 'orange' | 'blue' | 'purple';
}

export interface Role {
  id: string;
  icon: 'graduation' | 'map' | 'heart';
  title: string;
  description: string;
  checklist: string[];
  colorTheme: 'blue' | 'orange' | 'pink';
}

export interface Testimonial {
  parentName: string;
  mentorName: string;
  avatar: string;
  content: string;
}

// --- 2. DATA (Content) ---

export const MENTOR_HERO = {
  label: "HUMAN TOUCH",
  title_1: "Hơn cả một người thầy , ",
  title_2: "chúng tôi là   ",
  title_highlight: "người bạn đồng hành của Mẹ. ",
  desc: "Gặp gỡ đội ngũ chuyên gia giáo dục không chỉ sở hữu chứng chỉ quốc tế, mà còn mang trái tim ấm áp của những người làm cha mẹ .",
  author: "Teacher.Mai Linh ",
  role: "Founder Momtek",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'head',
    icon: 'brain',
    title: '1. HEAD (Cái đầu)',
    subtitle: 'Giỏi chuyên môn',
    items: ['Chứng chỉ TESOL/CELTA quốc tế.', 'IELTS 7.5+ hoặc tốt nghiệp Sư phạm.'],
    colorTheme: 'blue'
  },
  {
    id: 'heart',
    icon: 'heart',
    title: '2. HEART (Trái tim)',
    subtitle: 'Giàu yêu thương',
    items: ['Vượt qua bài test EQ & Tâm lý trẻ.', 'Ưu tiên những người đã làm mẹ.'],
    colorTheme: 'red'
  },
  {
    id: 'hand',
    icon: 'hand',
    title: '3. HAND (Bàn tay)',
    subtitle: 'Sự tận tụy',
    items: ['Sẵn sàng hỗ trợ mẹ 24/7.', 'Cầm tay chỉ việc, sửa từng lỗi nhỏ.'],
    colorTheme: 'orange'
  }
];

export const ADVISORS: Advisor[] = [
  {
    name: 'Tiến sĩ Nguyễn Thanh Vân',
    role: 'Cố vấn Giáo trình',
    quote: '"Giáo dục sớm không phải là dạy kiến thức sớm, mà là đánh thức tiềm năng đúng thời điểm."',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Thạc sĩ David Wilson',
    role: 'Chuyên gia Ngôn ngữ học',
    quote: '"Phương pháp Hybrid của Momtek là bước tiến thông minh để đưa tiếng Anh chuẩn vào từng gia đình."',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop'
  }
];

export const MENTORS: Mentor[] = [
  {
    name: 'Ms. Lan Anh',
    title: 'Mentor Trưởng - Khối Mầm non',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
    tag: '⭐ 5 Năm KN',
    funFact: '"Mẹ của 2 bé Sóc & Nhím. Chuyên trị các ca bé mất tập trung!"',
    funFactColor: 'orange'
  },
  {
    name: 'Ms. Thanh Trúc',
    title: 'Chuyên gia Ngữ âm (Phonics)',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
    tag: '⭐ 8.0 IELTS',
    funFact: '"Có thể giả giọng 5 nhân vật hoạt hình khác nhau để kể chuyện."',
    funFactColor: 'blue'
  },
  {
    name: 'Ms. Ngọc Mai',
    title: 'Cố vấn Tâm lý & Động lực',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    tag: '⭐ Tâm lý',
    funFact: '"Luôn bắt đầu buổi nói chuyện bằng một lời khen cụ thể cho bé."',
    funFactColor: 'purple'
  }
];

export const ROLES: Role[] = [
  {
    id: 'expert',
    icon: 'graduation',
    title: 'Là Chuyên gia',
    description: 'Khi mẹ hoang mang về kiến thức, Mentor là người đưa ra đáp án chuẩn xác.',
    checklist: ['Sửa lỗi phát âm, ngữ điệu.', 'Giải thích ngữ pháp/từ vựng.', 'Đánh giá năng lực định kỳ.'],
    colorTheme: 'blue'
  },
  {
    id: 'guide',
    icon: 'map',
    title: 'Là Người dẫn đường',
    description: 'Khi mẹ bí ý tưởng chơi cùng con, Mentor là kho tàng cung cấp giải pháp và công cụ.',
    checklist: ['Hướng dẫn khai thác App/Sách.', 'Gợi ý trò chơi tương tác.', 'Xây dựng lộ trình cá nhân hóa.'],
    colorTheme: 'orange'
  },
  {
    id: 'companion',
    icon: 'heart',
    title: 'Là Bạn tâm giao',
    description: 'Khi mẹ nản lòng hay con mất tập trung, Mentor là nguồn năng lượng tích cực nhất.',
    checklist: ['Lắng nghe & Gỡ rối tâm lý.', 'Truyền động lực mỗi ngày.', 'Kết nối cộng đồng phụ huynh.'],
    colorTheme: 'pink'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    parentName: 'Mẹ Lan Anh',
    mentorName: 'Ms. Lan Anh',
    avatar: 'https://i.pravatar.cc/100?img=5',
    content: '"Cảm ơn cô đã kiên nhẫn với mẹ con em. Mẹ dốt tiếng Anh mà giờ tự tin hẳn, dám mở miệng nói chuyện với con rồi."'
  },
  {
    parentName: 'Bố Tuấn',
    mentorName: 'Ms. Ngọc Mai',
    avatar: 'https://i.pravatar.cc/100?img=12',
    content: '"Bé nhà mình thích cô lắm, tối nào cũng đòi gửi bài cho cô xem để được cô khen. Cách cô động viên bé rất tinh tế."'
  },
  {
    parentName: 'Mẹ Thu Hà',
    mentorName: 'Team Momtek',
    avatar: 'https://i.pravatar.cc/100?img=9',
    content: '"Chưa thấy trung tâm nào mà các cô nhiệt tình như vậy. 10h đêm nhắn tin hỏi bài cô vẫn rep siêu nhanh."'
  }
];