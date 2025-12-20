import { 
  Tablet, Building, UserX, Cpu, Smartphone, Hand, Heart, Users, CheckCircle, 
  XCircle, Package, BookOpen 
} from 'lucide-react';

export const HYBRID_HERO = {
  label: "Câu chuyện sáng lập",
  title_1: "Tại sao phải chọn giữa ",
  title_2: "khi con bạn cần cả hai?",
  title_highlight: "Công nghệ và Cảm xúc ",
  desc: "Mô hình giáo dục tiên phong, kết hợp sức mạnh AI, học liệu truyền thống và sự gắn kết gia đình, giúp mẹ không cần giỏi tiếng Anh vẫn là người thầy tốt nhất của con.",
  author: "Teacher.Mai Linh ",
  role: "Founder Momtek",
  image: "/images/FD.jpg",
};

export const MISSING_PIECES = [
  {
    icon: Tablet,
    title: "Học qua App",
    desc: "Trẻ bị bỏ rơi với màn hình, học vẹt thụ động và thiếu sự kết nối thực tế.",
    tag: "THIẾU: TOUCH & HUMAN",
    color: "red"
  },
  {
    icon: Building,
    title: "Học qua Trung tâm",
    desc: "Học phí đắt đỏ, thiếu sự linh hoạt trong bố trí lịch học và mất nhiều công đưa đón.",
    tag: "THIẾU: TẦN SUẤT",
    color: "red"
  },
  {
    icon: UserX,
    title: "Mẹ tự dạy",
    desc: "Mẹ lo phát âm sai, nhanh nản vì không có giáo án và công cụ chuẩn hỗ trợ.",
    tag: "THIẾU: TECH (CÔNG CỤ)",
    color: "red"
  }
];

export const THREE_PILLARS = [
  {
    id: "tech",
    title: "TECH - Cái đầu lạnh",
    desc: "AI Speech Coach đóng vai trò là 'Thầy Tây' tại nhà. Máy không biết mệt, chấm điểm chính xác 100% để mẹ không lo dạy sai.",
    points: [
      "AI chấm điểm phát âm từng âm vị 24/7.",
      "Lộ trình cá nhân hóa theo từng bé."
    ],
    icon: Cpu,
    color: "blue",
    image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=800"
  },
  {
    id: "touch",
    title: "TOUCH - Trái tim nóng",
    desc: "Sách giấy, thẻ bài và trò chơi cắt dán thủ công kéo con ra khỏi màn hình. Để con được 'chạm' vào tiếng Anh qua đôi tay và cảm xúc.",
    points: [
      "Phát triển xúc giác qua Sách tương tác.",
      "Biến giờ học thành giờ chơi cùng cha mẹ."
    ],
    icon: Heart,
    color: "orange",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800"
  },
  {
    id: "human",
    title: "HUMAN - Người giữ lửa",
    desc: "Mẹ không bao giờ cô đơn. Đội ngũ Mentor hỗ trợ 1:1 và cộng đồng 50.000 mẹ bỉm cùng nhau tiến bộ mỗi ngày.",
    points: [
      "Mentor theo sát lộ trình và gỡ rối cho mẹ.",
      "Cộng đồng truyền cảm hứng, xóa bỏ nản lòng."
    ],
    icon: Users,
    color: "green",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800"
  }
];

export const DIFFERENCE_TABLE = {
  old: {
    title: "3 KHÔNG (Mô hình cũ)",
    icon: XCircle,
    items: [
      "Cần mẹ giỏi tiếng Anh mới có thể dạy con.",
      "Dán mắt vào màn hình liên tục để học.",
      "Mẹ đơn độc mày mò giáo án không lộ trình."
    ]
  },
  new: {
    title: "3 CÓ (Momtek Hybrid)",
    icon: CheckCircle,
    items: [
      "Có AI trợ giúp mẹ sửa lỗi phát âm 100%.",
      "Có học liệu giấy để mẹ con cùng tương tác.",
      "Có Mentor giữ lửa và giáo án chuẩn mỗi ngày."
    ]
  }
};

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

export const FOUNDER_STORY = {
  quote: '"Tôi cũng từng là một người mẹ loay hoay..."',
  p1: "Tôi thấy nhiều mẹ mua App về con không học, mua sách về mẹ không biết dạy. Tôi hiểu rằng nếu thiếu sự GẮN KẾT, mọi công nghệ đều vô nghĩa.",
  p2: "Nhưng nếu chỉ có gắn kết mà thiếu công cụ chuẩn, mẹ sẽ rất áp lực vì sợ dạy sai. Đó là lúc tôi nhận ra mình cần một công thức kết hợp cả hai thế giới.",
  image: "/images/1.png",
  name: "Teacher Mai Linh",
  role: "Founder Momtek"
};