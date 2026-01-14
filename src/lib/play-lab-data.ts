import { Scissors, Search, ArrowRight, Library, Download, Eye, Package, BrainCircuit, Smile, QrCode, Bell, Brain } from 'lucide-react';

export const PLAY_HERO = {
  label: "Triết lý MOMTEK",
  title_1: " Nơi học không nhất định là Bàn học, Momtek   ",
  title_2: "biến phòng khách thành  ",
  title_highlight: "sân chơi ngôn ngữ.  ",
  desc: "Tại sao phải ép con ngồi cào bàn học ? Tại Momtel Play Lab, chúng tôi tin rằng đôi tay lấm lem và những tiếng cười hạnh phúc mới là cách nhanh nhất để trẻ 'ngấm' tiếng Anh ",
  author: "Teacher.Mai Linh ",
  role: "Founder Momtek",
  image: "/images/FD.jpg",
};

export const STARTER_PACKS = [
  {
    id: 1,
    icon: "🔤",
    title: "Biệt đội Chữ cái (Alphabet)",
    desc: "Đừng ép con học thuộc lòng. Hãy để bé tô màu 26 chữ cái được hóa thân thành quái vật ngộ nghĩnh.",
    btnText: "Tải trọn bộ 26 trang",
    color: "blue",
    gradient: "from-blue-50 to-white",
    borderColor: "border-blue-100"
  },
  {
    id: 2,
    icon: "✍️",
    title: "Luyện tay Khéo léo",
    desc: "Bộ bài tập nối hình (Tracing) và tập cắt dán cơ bản. Giúp con rèn lực tay và sự tập trung trước khi vào lớp 1.",
    btnText: "Tải bộ luyện tay",
    color: "orange",
    gradient: "from-orange-50 to-white",
    borderColor: "border-orange-100"
  },
  {
    id: 3,
    icon: "🏷️",
    title: "Dán nhãn Ngôi nhà",
    desc: "Biến nhà thành lớp học! Bộ thẻ từ vựng (Bàn, Ghế, Tủ...) để mẹ và con cùng đi dán tên tiếng Anh cho đồ vật.",
    btnText: "Tải bộ Sticker",
    color: "purple",
    gradient: "from-purple-50 to-white",
    borderColor: "border-purple-100"
  }
];

export const FILTERS = [
  { id: 'all', label: 'Tất cả', active: true },
  { id: 'featured', label: '🔥 Nổi bật' },
  { id: 'craft', label: '✂️ Cắt dán' },
  { id: 'active', label: '🏃 Vận động' },
  { id: 'science', label: '🧪 Khoa học vui' },
];

export const RESOURCES = [
  {
    id: 1,
    type: 'download',
    badge: 'Top 1 Tuần này',
    badgeColor: 'bg-red-500',
    category: 'Cắt dán',
    categoryColor: 'bg-purple-100 text-purple-700',
    age: '4-6 tuổi',
    title: 'Làm chú rối tay Cừu vui vẻ (Funny Sheep)',
    desc: 'Con học từ vựng nông trại qua trò chơi đóng vai.',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=400',
    btnIcon: Download,
    btnText: 'Tải PDF miễn phí'
  },
  {
    id: 2,
    type: 'view',
    category: 'Vận động',
    categoryColor: 'bg-green-100 text-green-700',
    age: '3-5 tuổi',
    title: 'Truy tìm kho báu trong nhà (Treasure Hunt)',
    desc: 'Học giới từ (in, on, under) qua việc chạy nhảy.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=400',
    btnIcon: Eye,
    btnText: 'Xem hướng dẫn'
  },
  {
    id: 3,
    type: 'view',
    category: 'Khoa học',
    categoryColor: 'bg-blue-100 text-blue-700',
    age: '5-6 tuổi',
    title: 'Thí nghiệm Núi lửa sắc màu (Volcano)',
    desc: 'Kết hợp học màu sắc và phản ứng hóa học đơn giản.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400',
    btnIcon: Eye,
    btnText: 'Xem hướng dẫn'
  },
  {
    id: 'upsell',
    type: 'buy',
    isUpsell: true,
    title: 'Mẹ ngại in ấn?',
    desc: 'Đặt ngay Hộp Play Kit tháng này. Đầy đủ nguyên liệu, cắt sẵn, ship tận cửa!',
    btnText: 'Mua ngay (99k)',
    image: '' 
  }
];

export const VALUES = [
  {
    icon: BrainCircuit,
    color: "blue",
    title: "Chuẩn độ tuổi & Năng lực",
    desc: "Nội dung được biên soạn bởi chuyên gia ngôn ngữ, đảm bảo từ vựng và mẫu câu phù hợp với tháp phát triển tư duy của trẻ mầm non."
  },
  {
    icon: Smile,
    color: "pink",
    title: 'Đúng "Gu" bé thích',
    desc: "Hình ảnh vẽ tay độc quyền, màu sắc bắt mắt theo các chủ đề bé mê mẩn (Khủng long, Công chúa, Vũ trụ...), khiến việc học vui như chơi."
  },
  {
    icon: QrCode,
    color: "green",
    title: "Tương tác Đa phương tiện",
    desc: "Mỗi trang sách đều tích hợp mã QR/Code. Mẹ quét để mở Video/Audio minh họa, giúp con nghe giọng bản xứ và nhìn hình ảnh chuyển động sinh động."
  }
];