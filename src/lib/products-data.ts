import { 
  BookOpen, Layers, Crown, Music, Book, BookOpenCheck, Star, 
  FlaskConical, MessageCircle, Video, Presentation 
} from 'lucide-react';

export const PRODUCT_HERO = {
  label: "Dành riêng cho trẻ 4-6 tuổi ",
  title_1: " Trọn bộ giải pháp  ",
  title_2: "Giúp Mẹ dạy con tại nhà dễ dàng. ",
  title_highlight: "'Cầm tay chỉ việc '",
  desc: "Từ Sách tương tác ,App AI sửa lỗi đến Giáo án chi tiết từng ngày. Momtek đóng gói tất cả trong một hệ sinh thái duy nhất.",
  author: "Teacher.Mai Linh ",
  role: "Founder Momtek",
  image: "/images/FD.jpg",
};

export const PRODUCT_NAV = [
  { id: 'foundation', icon: BookOpen, title: 'Dòng Foundation', desc: 'Xây dựng nền tảng', color: 'blue' },
  { id: 'pathway', icon: Layers, title: 'Dòng Pathway', desc: 'Lộ trình bài bản', color: 'orange' },
  { id: 'mastery', icon: Crown, title: 'Dòng Mastery', desc: 'Bứt phá chuyên sâu', color: 'purple' },
];

export const FOUNDATION_LIST = [
  {
    id: 1,
    title: "Learn by Zalo",
    desc: "Nhận bài học hằng ngày qua Zalo. Không cần cài App.",
    highlight: "Mẹ bận rộn?",
    price: "250k",
    unit: "/ bộ",
    btnText: "Đăng ký nhận bài",
    icon: Music,
    color: "blue",
    // Ảnh sản phẩm
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png", 
    isIcon: true // Đánh dấu đây là icon logo, không phải ảnh chụp
  },
  {
    id: 2,
    title: "Sách Phonics Blend",
    desc: "AI sẽ đọc mẫu và sửa lỗi cho con thay Mẹ.",
    highlight: "Mẹ sợ phát âm sai?",
    price: "250k",
    unit: "/ bộ",
    btnText: "Xem đọc thử",
    icon: Book,
    color: "green",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400"
  },
  {
    id: 3,
    title: "Truyện Story Blend",
    desc: "Giúp Mẹ xây dựng thói quen đọc sách mỗi tối.",
    highlight: "Giờ kể chuyện.",
    price: "250k",
    unit: "/ bộ",
    btnText: "Xem trọn bộ",
    icon: BookOpenCheck,
    color: "yellow",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400"
  }
];

export const PATHWAY_FEATURE = {
  title: "Momtek Language",
  subtitle: "Chương trình tiếng Anh trẻ em tại nhà toàn diện nhất",
  desc: "Được thiết kế để trẻ 4-6 tuổi tự học cùng mẹ ở nhà. Mẹ nắm rõ tiến độ qua Báo cáo Zalo hàng tuần mà không cần kè kè bên cạnh.",
  points: [
    "Mẹ không lo phát âm (Có AI Coach)",
    "Mẹ không lo con chán (Học qua Game)",
    "Mẹ yên tâm vào Lớp 1 (Chuẩn Cambridge)"
  ],
  btnText: "Xem lộ trình cho Mẹ",
  image: "/images/1.png"
};

export const MASTERY_LIST = [
  {
    id: 1,
    title: "Lớp Giao tiếp 1:1",
    desc: "Giáo viên nước ngoài sửa lỗi trực tiếp.",
    btnText: "Mẹ đăng ký tư vấn",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=400"
  },
  {
    id: 2,
    title: "Master Phonics",
    desc: "Lớp nhóm nhỏ luyện đánh vần nâng cao.",
    btnText: "Mẹ đăng ký tư vấn",
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=400"
  }
];