import { 
  Facebook, Youtube, Instagram, Star, Video, MessageCircleQuestion, 
  Headphones, Cpu, Hand, Users, Music, Mic, Scissors, BookOpen, 
  Smile, LayoutGrid, Book, BookOpenCheck, Layers, FlaskConical, 
  GraduationCap, Presentation, Zap, Heart, Award,
} from 'lucide-react';

export const SITE_CONFIG = {
  name: "Momtek",
  description: "Hệ sinh thái Tiếng Anh Hybrid dành cho cha mẹ và trẻ em.",
};

// --- CẬP NHẬT NAV_LINKS ---
export const NAV_LINKS = [
  // { label: "Hero", href: "/", highlight: false },
  { label: "Học viện ", href: "/academy", highlight: false },
  { 
    label: "Giải pháp", 
    href: "/hybrid", 
    highlight: false,
    children: [
      { label: "Vocal-song", href: "/vocab" },
      { label: "Phonic AI", href: "/phonic-ai" },
      { label: "Play-lab", href: "/play-lab" },
      { label: "Sách Hybrid", href: "/hybrid-book" },
      { label: "Đội ngũ Mentor", href: "/mentor" },
    ]
  },
  { 
    label: "Sản phẩm", 
    href: "/products", 
    highlight: false,
    children: [
      { label: "Language", href: "/language" },
    ]
  },
  { label: "Về chúng tôi ", href: "/teacher", highlight: false },
];

export const HERO_CONTENT = {
  badge: "Học tập kết hợp : Sách - App - Mentor",
  title_1: "Giải pháp giúp Mẹ tự tin dạy con học tiếng Anh tại nhà. ",
  desc: "Hệ sinh thái toàn diện của momtek biến mỗi giờ học tại nhà thành khoảnh khắc gắn kết đầy niềm vui của mẹ và con .",
  bg_image: "/images/1.png",
};

export const SOCIAL_PROOF_LOGOS = [
  { name: "VnExpress", url: "https://dl.dropboxusercontent.com/s/fi/idpxl6ehe9wsojo70icck/Vnexpress.png?rlkey=y1xz8q3iiowhtkatdp7dzsd7b&st=dit93w05&dl=0" },
  { name: "VTV", url: "https://dl.dropboxusercontent.com/s/fi/o9uwkskzkfhdp3gyv6bk9/vtv.png?rlkey=koqngnthu0ejtfh5h1xib45n7&st=qzaxr5pe&dl=0" },
  { name: "DanTri", url: "https://dl.dropboxusercontent.com/s/fi/phb8tssud2siws37rnn8r/Dantri.png?rlkey=n7cfhik8o7bqkf0xxtdetkrul&st=kogox998&dl=0" },
  { name: "National", url: "https://dl.dropboxusercontent.com/s/fi/zl874axqfiost2hizmchv/National.png?rlkey=puhtpoee53tw4hu8smdo44579&st=gm49gzb1&dl=0" },
];

export const PAIN_POINTS = [
  { icon: "😟", title: "Thiếu tự tin", desc: "Sợ phát âm sai ảnh hưởng con.", color: "green" },
  { icon: "😵‍💫", title: "Loạn phương pháp", desc: "Mẹ không biết bắt đầu từ đâu.", color: "orange" },
  { icon: "⏳", title: "Thiếu thời gian", desc: "Mẹ bận rộn, áp lực công việc.", color: "blue" },
  { icon: "📱", title: "Nỗi lo Screen-time", desc: "Mẹ sợ con nghiện thiết bị điện tử.", color: "purple" },
];

export const RESOURCES = [
  {
    tag: "Kiến thức nền tảng", title: "Lộ trình 7 ngày vàng bắt đầu cùng con",
    desc: "Hướng dẫn từng bước thiết lập môi trường và tâm lý để mẹ tự tin dạy bé.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    color: "blue", icon: Star
  },
  {
    tag: "Kỹ năng thực chiến", title: "Bí quyết \"Tắm ngôn ngữ\" hiệu quả",
    desc: "Cách dùng loa, bài hát và các thiết bị hỗ trợ để con thẩm thấu tự nhiên.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    color: "green", icon: Video
  },
  {
    tag: "Hỏi đáp Chuyên gia", title: "Con không chịu hợp tác thì làm sao?",
    desc: "Giải đáp từ chuyên gia tâm lý trẻ em Momtek về các tình huống khó xử.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop",
    color: "orange", icon: MessageCircleQuestion
  },
  {
    tag: "Podcast Tâm lý", title: "Vượt qua nỗi sợ phát âm sai",
    desc: "Lời khuyên giúp mẹ tự tin mở miệng nói chuyện và đồng hành cùng con.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
    color: "purple", icon: Headphones
  },
];

export const METHODOLOGY_PILLARS = [
  {
    id: "tech", name: "1. Công nghệ (Tech)", desc: "Môi trường \"tắm\" ngôn ngữ và luyện âm chuẩn xác với AI độc quyền đến từ Microsoft và đội ngũ thiết kế chuyên nghiệp",
    icon: Cpu, bgIcon: "smartphone", color: "blue",
    links: [
      { text: "Vocab Song", icon: Music, href: "/vocab" },
      { text: "Phonic AI", icon: Mic, href: "/phonic-ai" }
    ]
  },
  {
    id: "coursebook", name: "2. Học liệu (Coursebook)", desc: "Các sách vở được thiết kế,bài bản,bám sát chương trình Cambridge và được phê duyệt bởi thầy Hoàng Tăng Đức ",
    icon: BookOpen, bgIcon: "package", color: "orange",
    links: [
      { text: "Play Lab (DIY)", icon: Scissors, href: "/play-lab" },
      { text: "Sách & Flashcard", icon: BookOpen , href: "/hybrid-book" }
    ]
  },
  {
    id: "human", name: "3. Giáo viên ( Mentor )", desc: "Đội ngũ chuyên gia Online,vững chuyên môn,tận tâm,sẵn sàng đồng hành sửa lỗi và giữ lửa cho mẹ ",
    icon: Heart, bgIcon: "users", color: "purple",
    links: [
      { text: "Gặp gỡ đội ngũ Mentor", icon: Smile, href: "/mentor" },
      { text: "Quy trình Huấn luyện ", icon: Video, href: "/" }
    ]
  },
];

export const PRODUCTS = {
  single: [
    { title: "Sing by Zalo", desc: "Học hát qua Zalo",href : "/", icon: Music },
    { title: "Phonic Blend", desc: "Sách ngữ âm kết hợp On-Off",href : "/", icon: Book },
    { title: "Story Blend", desc: "Truyện tương tác kết hợp On-Off",href : "/", icon: BookOpenCheck },
  ],
  bundle: [
    {title: " Momtek Language", desc: "Học tập 4 kỹ năng , đầu ra Pre Starters", icon: Star, highlight: "Phổ biến nhất" , href : "/language"},
    {title: " Momtek STEM", desc: "Sắp ra mắt ", icon:FlaskConical , highlight: "Phổ biến nhất" , href : "/"},
  ],
  training: [
    { title: "Class Online 1-1", desc: "Học trực tiếp với giáo viên", href : "/" ,icon: Video },
    { title: "Workshop Chuyên đề", desc: "Đào tạo theo chủ đề",href : "/", icon: Presentation },
    { title: "Workshop Chuyên đề", desc: "Đào tạo theo chủ đề",href : "/", icon: BookOpenCheck },
  ]
};

export const FOUNDERS = [
  {
    name: "Teacher. Mai Linh ", 
    role: "Co-Founder", 
    title: "Người truyền lửa",
    quote: "Giáo dục không chỉ là đổ đầy kiến thức, mà là thắp lên ngọn lửa.Tôi ở đây để giúp mẹ tự tin trở thành người thầy đầu tiên của con.",
    image: "/images/FD.jpg",
    color: "orange", 
    icon1: Heart,
    icon2: GraduationCap
  },
  {
    name: "ThS. Hoàng Tăng Đức ",
    role: "Co-Founder",
    roleExtra: "TOP VN",
    title: "Kiến trúc sư chương trình",
    quote: "Chúng tôi đưa những phương pháp sư phạm tiên tiến nhất thế giới vào Momtek, đảm bảo mỗi giờ học đều mang lại hiệu quả tối ưu cho con.",
    image: "/images/FD.jpg",
    color: "blue",
    icon1: Award,
    icon2: Layers
  }
];

export const TESTIMONIALS = [
  { name: "Mẹ Lan Anh", loc: "Hà Nội", quote: "Gói Foundation sách rất đẹp. Nhưng mình vẫn quyết định nâng cấp lên Pathway để có cô giáo sửa lỗi. Rất đáng tiền!", avatar: "https://i.pravatar.cc/100?img=5" },
  { name: "Bố Hoàng Tùng", loc: "TP.HCM", quote: "Mình bắt đầu từ gói Free cho con nghe nhạc. Sau đó thấy con thích quá nên mua trọn bộ Momtek Language luôn.", avatar: "https://i.pravatar.cc/100?img=3" },
  { name: "Mẹ Thu Hà", loc: "Đà Nẵng", quote: "Cách Momtek phân chia lộ trình rất rõ ràng. Mình chọn gói Foundation vì muốn hạn chế con xem iPad.", avatar: "https://i.pravatar.cc/100?img=9" },
  { name: "Mẹ Hoàng Dũng", loc: "Cần Thơ", quote: "Cách Momtek phân chia lộ trình rất rõ ràng. Mình chọn gói Foundation vì muốn hạn chế con xem iPad.", avatar: "https://i.pravatar.cc/100?img=9" },
  { name: "Mẹ Minh Anh ", loc: "Hải Phòng ", quote: "Cách Momtek phân chia lộ trình rất rõ ràng. Mình chọn gói Foundation vì muốn hạn chế con xem iPad.", avatar: "https://i.pravatar.cc/100?img=9" },
];

export const FOOTER_LINKS = {
  products: ["Sing by Zalo", "Momtek Language", "Class 1-1"],
  support: ["Hướng dẫn kích hoạt", "Chính sách hoàn tiền", "Liên hệ"],
  socials: [Facebook, Youtube, Instagram]
};