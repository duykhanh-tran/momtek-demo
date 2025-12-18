import { 
  Facebook, Youtube, Instagram, Star, Video, MessageCircleQuestion, 
  Headphones, Cpu, Hand, Users, Music, Mic, Scissors, BookOpen, 
  Smile, LayoutGrid, Book, BookOpenCheck, Layers, FlaskConical, 
  GraduationCap, Presentation, Zap, Heart, Award
} from 'lucide-react';

export const SITE_CONFIG = {
  name: "Momtek",
  description: "Hệ sinh thái Tiếng Anh Hybrid dành cho cha mẹ và trẻ em.",
};

export const NAV_LINKS = [
  { label: "Học viện ", href: "#resources", highlight: true },
  { label: "Giải pháp", href: "#methodology" ,highlight: true  },
  { label: "Sản phẩm", href: "#products" , highlight: true },
  { label: "Về chúng tôi ", href: "#social-proof" , highlight: true },
];

export const HERO_CONTENT = {
  badge: "Tiên phong EdTech Hybrid",
  title_1: "Mẹ tự tin dạy con tiếng Anh thành công ",
  title_highlight: "ngay cả khi bắt đầu từ con số 0 ",
  desc: "Hệ sinh thái toàn diện giúp biến mỗi giờ học tại nhà thành khoảnh khắc gắn kết đầy niềm vui.",
  bg_image: "https://images.unsplash.com/photo-1544776193-ade277d74f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
};

export const SOCIAL_PROOF_LOGOS = [
  { name: "VnExpress", url: "https://dl.dropboxusercontent.com/s/fi/idpxl6ehe9wsojo70icck/Vnexpress.png?rlkey=y1xz8q3iiowhtkatdp7dzsd7b&st=dit93w05&dl=0" },
  { name: "VTV", url: "https://dl.dropboxusercontent.com/s/fi/o9uwkskzkfhdp3gyv6bk9/vtv.png?rlkey=koqngnthu0ejtfh5h1xib45n7&st=qzaxr5pe&dl=0" },
  { name: "DanTri", url: "https://dl.dropboxusercontent.com/s/fi/phb8tssud2siws37rnn8r/Dantri.png?rlkey=n7cfhik8o7bqkf0xxtdetkrul&st=kogox998&dl=0" },
  { name: "National", url: "https://dl.dropboxusercontent.com/s/fi/zl874axqfiost2hizmchv/National.png?rlkey=puhtpoee53tw4hu8smdo44579&st=gm49gzb1&dl=0" },
];

export const PAIN_POINTS = [
  { icon: "😟", title: "Thiếu tự tin", desc: "Sợ phát âm sai ảnh hưởng con.", color: "green" },
  { icon: "😵‍💫", title: "Loạn phương pháp", desc: "Không biết bắt đầu từ đâu.", color: "orange" },
  { icon: "⏳", title: "Thiếu thời gian", desc: "Bận rộn, áp lực công việc.", color: "blue" },
  { icon: "📱", title: "Nỗi lo Screen-time", desc: "Sợ con nghiện thiết bị điện tử.", color: "purple" },
];

export const RESOURCES = [
  {
    tag: "Kiến thức nền tảng", title: "Lộ trình 7 ngày vàng bắt đầu cùng con",
    desc: "Hướng dẫn từng bước thiết lập môi trường và tâm lý để mẹ tự tin dạy bé.",
    image: "https://images.unsplash.com/photo-1544776193-ade277d74f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "blue", icon: Star
  },
  {
    tag: "Kỹ năng thực chiến", title: "Bí quyết \"Tắm ngôn ngữ\" hiệu quả",
    desc: "Cách dùng loa, bài hát và các thiết bị hỗ trợ để con thẩm thấu tự nhiên.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "green", icon: Video
  },
  {
    tag: "Hỏi đáp Chuyên gia", title: "Con không chịu hợp tác thì làm sao?",
    desc: "Giải đáp từ chuyên gia tâm lý trẻ em Momtek về các tình huống khó xử.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "orange", icon: MessageCircleQuestion
  },
  {
    tag: "Podcast Tâm lý", title: "Vượt qua nỗi sợ phát âm sai",
    desc: "Lời khuyên giúp mẹ tự tin mở miệng nói chuyện và đồng hành cùng con.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "purple", icon: Headphones
  },
];

export const METHODOLOGY_PILLARS = [
  {
    id: "tech", name: "1. Công nghệ (Tech)", desc: "Môi trường \"tắm\" ngôn ngữ và luyện âm chuẩn xác với AI độc quyền.",
    icon: Cpu, bgIcon: "smartphone", color: "blue",
    links: [
      { text: "Vocab Song", icon: Music },
      { text: "Thử chấm điểm AI", icon: Mic }
    ]
  },
  {
    id: "touch", name: "2. Tương tác (Touch)", desc: "Kết nối thế giới thực, giúp bé rời xa màn hình và phát triển vận động tinh.",
    icon: Hand, bgIcon: "package", color: "orange",
    links: [
      { text: "Play Lab (DIY)", icon: Scissors },
      { text: "Sách & Flashcard", icon: BookOpen }
    ]
  },
  {
    id: "human", name: "3. Con người (Human)", desc: "Đội ngũ chuyên gia tận tâm, đồng hành sửa lỗi và giữ lửa cho mẹ.",
    icon: Heart, bgIcon: "users", color: "green",
    links: [
      { text: "Gặp gỡ đội ngũ Mentor", icon: Smile },
      { text: "Quy trình Huấn luyện 1-1", icon: Video }
    ]
  }
];

export const PRODUCTS = {
  single: [
    { title: "Sing by Zalo", desc: "Học hát qua Zalo", icon: Music },
    { title: "Phonic Blend", desc: "Sách ghép vần", icon: Book },
    { title: "Story Blend", desc: "Truyện tương tác", icon: BookOpenCheck },
  ],
  bundle: {
    title: "Bộ Momtek Language", desc: "Giải pháp 3-trong-1 chủ lực", icon: Star, highlight: "Phổ biến nhất"
    
  },
  training: [
    { title: "Class Online 1-1", desc: "Học trực tiếp với giáo viên", icon: Video },
    { title: "Workshop Chuyên đề", desc: "Đào tạo theo chủ đề", icon: Presentation },
    { title: "Workshop Chuyên đề", desc: "Đào tạo theo chủ đề", icon: BookOpenCheck },
  ]
};

export const FOUNDERS = [
  {
    name: "Ms. Thu Hằng", role: "Co-Founder", title: "Người truyền lửa",
    quote: "Giáo dục không chỉ là đổ đầy kiến thức, mà là thắp lên ngọn lửa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "orange", icon: Heart
  },
  {
    name: "TS. Nguyễn Văn A", role: "Co-Founder", title: "Kiến trúc sư chương trình",
    quote: "Chúng tôi đưa những phương pháp sư phạm tiên tiến nhất thế giới vào Momtek.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "blue", icon: Award
  }
];

export const TESTIMONIALS = [
  { name: "Mẹ Lan Anh", loc: "Hà Nội", quote: "Gói Foundation sách rất đẹp. Nhưng mình vẫn quyết định nâng cấp lên Pathway để có cô giáo sửa lỗi. Rất đáng tiền!", avatar: "https://i.pravatar.cc/100?img=5" },
  { name: "Bố Hoàng Tùng", loc: "TP.HCM", quote: "Mình bắt đầu từ gói Free cho con nghe nhạc. Sau đó thấy con thích quá nên mua trọn bộ Momtek Language luôn.", avatar: "https://i.pravatar.cc/100?img=3" },
  { name: "Mẹ Thu Hà", loc: "Đà Nẵng", quote: "Cách Momtek phân chia lộ trình rất rõ ràng. Mình chọn gói Foundation vì muốn hạn chế con xem iPad.", avatar: "https://i.pravatar.cc/100?img=9" },
];

export const FOOTER_LINKS = {
  products: ["Sing by Zalo", "Momtek Language", "Class 1-1"],
  support: ["Hướng dẫn kích hoạt", "Chính sách hoàn tiền", "Liên hệ"],
  socials: [Facebook, Youtube, Instagram]
};