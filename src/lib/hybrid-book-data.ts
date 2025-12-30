import { 
  Book, PenTool, Smartphone, Check, X, CheckCircle, 
  BookHeart, Cpu, BookOpen, QrCode, PlayCircle, Trophy,
  Music, Video, Layout
} from 'lucide-react';

// --- TYPES ---

export interface ComparisonItem {
  id: string;
  icon: 'book' | 'pen' | 'smartphone';
  title: string;
  features: {
    text: string;
    type: 'positive' | 'negative' | 'neutral'; // check, x, or dot
  }[];
  isHighlight?: boolean;
}

export interface FounderStory {
  name: string;
  role: string;
  image: string;
  quote: string;
  colorTheme: 'orange' | 'blue';
  icon: 'book-heart' | 'cpu';
}

export interface Step {
  stepNumber: number;
  title: string;
  description: string;
  icon: 'book-open' | 'qr-code' | 'play-circle' | 'trophy';
  hoverColor: 'blue' | 'green';
}

export interface ContentType {
  title: string;
  subTitle: string;
  description: string;
  techTag: string;
  techIcon: 'smartphone' | 'video' | 'check-square';
  mainIcon: 'music' | 'book-open' | 'layout';
  gradient: string; // Tailwind class
  textColor: string; // Tailwind class
}

// --- DATA ---

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    id: 'traditional',
    icon: 'book',
    title: 'Sách truyền thống',
    features: [
      { text: 'Nội dung tĩnh (Chỉ có chữ/hình).', type: 'negative' },
      { text: 'Mẹ sợ đọc sai, không dám dạy.', type: 'negative' },
      { text: 'Không biết con học đúng hay sai.', type: 'negative' },
    ]
  },
  {
    id: 'pen',
    icon: 'pen',
    title: 'Sách Bút chấm đọc',
    features: [
      { text: 'Có âm thanh (Audio).', type: 'positive' },
      { text: 'Tốn kém: Phải mua bút riêng.', type: 'negative' },
      { text: 'Thụ động: Chỉ nghe, không có bài tập.', type: 'negative' },
    ]
  },
  {
    id: 'hybrid',
    icon: 'smartphone',
    title: 'Sách Hybrid Momtek',
    isHighlight: true,
    features: [
      { text: 'Đa phương tiện: Video, Audio, Game.', type: 'positive' },
      { text: 'Tiện lợi: Dùng điện thoại của mẹ.', type: 'positive' },
      { text: 'Thông minh: Có bài tập LMS & AI.', type: 'positive' },
    ]
  }
];

export const FOUNDER_STORIES: FounderStory[] = [
  {
    name: 'Ms. Thu Hằng',
    role: 'Co-Founder (Education)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    quote: '"Tôi kiên quyết giữ lại sách giấy. Vì không có công nghệ nào thay thế được cảm giác lật mở từng trang sách và mùi giấy thơm. Đó là nơi nuôi dưỡng sự tập trung và tình yêu tri thức bền vững nhất cho con."',
    colorTheme: 'orange',
    icon: 'book-heart'
  },
  {
    name: 'Mr. [Tên Co-Founder]',
    role: 'Co-Founder (Technology)',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    quote: '"Nhưng sách giấy truyền thống thì \'câm lặng\'. Tôi muốn dùng công nghệ để \'đánh thức\' nó. AI sẽ giúp mẹ biết con đọc đúng hay sai, và Video sẽ giúp trang sách trở nên sống động như một rạp chiếu phim."',
    colorTheme: 'blue',
    icon: 'cpu'
  }
];

export const STEPS: Step[] = [
  {
    stepNumber: 1,
    title: 'Mở sách',
    description: 'Bé đọc sách giấy như bình thường. Hình ảnh sinh động giúp bé phát triển thị giác và văn hóa đọc.',
    icon: 'book-open',
    hoverColor: 'blue'
  },
  {
    stepNumber: 2,
    title: 'Quét mã',
    description: 'Mẹ dùng camera điện thoại/App Momtek quét mã QR Code in trên góc trang sách.',
    icon: 'qr-code',
    hoverColor: 'blue'
  },
  {
    stepNumber: 3,
    title: 'Học Digital',
    description: 'Video bài giảng, Audio phát âm chuẩn hoặc Bài hát tương ứng sẽ hiện ra ngay lập tức.',
    icon: 'play-circle',
    hoverColor: 'blue'
  },
  {
    stepNumber: 4,
    title: 'Nhận Feedback',
    description: 'Bé làm bài tập trắc nghiệm (LMS) hoặc ghi âm giọng đọc để AI chấm điểm và nhận sao thưởng.',
    icon: 'trophy',
    hoverColor: 'green'
  }
];

export const CONTENT_TYPES: ContentType[] = [
  {
    title: 'Sách Âm nhạc',
    subTitle: 'Vocab Songs',
    description: 'Quét mã để nghe bài hát vui nhộn. Giúp bé nhớ từ vựng qua giai điệu (Cơ chế Earworm).',
    techTag: 'Tích hợp: Audio Player',
    techIcon: 'smartphone',
    mainIcon: 'music',
    gradient: 'from-purple-600 to-blue-600',
    textColor: 'text-purple-400'
  },
  {
    title: 'Truyện kể E-Book',
    subTitle: 'Story Blend',
    description: 'Quét mã để xem Video hoạt hình kể chuyện. Giọng đọc bản xứ giúp bé ngấm ngữ điệu tự nhiên.',
    techTag: 'Tích hợp: Video Player',
    techIcon: 'video',
    mainIcon: 'book-open',
    gradient: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400'
  },
  {
    title: 'Bài tập & Game',
    subTitle: 'LMS & Gamification',
    description: 'Quét mã để làm bài tập trắc nghiệm, ghép từ hoặc ghi âm chấm điểm ngay trên màn hình.',
    techTag: 'Tích hợp: AI & LMS',
    techIcon: 'check-square',
    mainIcon: 'layout',
    gradient: 'from-green-500 to-teal-500',
    textColor: 'text-green-400'
  }
];