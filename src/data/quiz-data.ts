import { Crown, Heart, Zap } from 'lucide-react';

export const QUIZ_QUESTIONS = [
  {
    question: "Khi con phát âm sai từ vựng tiếng Anh, phản ứng đầu tiên của bạn là gì?",
    options: [
      { text: "Chỉnh ngay lập tức, yêu cầu con nhìn miệng mẹ đọc lại cho đúng.", type: "A" }, // Skill
      { text: "Cười xòa động viên, biến lỗi sai thành trò đùa vui vẻ.", type: "B" }, // Bonding
      { text: "Mở App/Loa cho con nghe lại, vì sợ mình chỉnh cũng sai.", type: "C" }  // Time/Tech
    ]
  },
  {
    question: "Bạn ưu tiên điều gì nhất trong một giờ học cùng con?",
    options: [
      { text: "Con phải nhớ được từ vựng và hoàn thành bài tập.", type: "A" },
      { text: "Hai mẹ con vui vẻ, cười đùa, học ít cũng được.", type: "B" },
      { text: "Con tự giác ngồi học để mẹ tranh thủ làm việc khác.", type: "C" }
    ]
  },
  {
    question: "Công cụ hỗ trợ nào khiến bạn cảm thấy hứng thú nhất?",
    options: [
      { text: "Giáo trình bài bản, chi tiết từng ngày để đảm bảo đầu ra.", type: "A" },
      { text: "Bộ đồ chơi cắt dán, sticker để tương tác cùng con.", type: "B" },
      { text: "Ứng dụng AI trên iPad tự chấm điểm và dạy con.", type: "C" }
    ]
  },
  {
    question: "Rào cản lớn nhất khiến bạn nản lòng khi dạy con là gì?",
    options: [
      { text: "Bất lực vì không có phương pháp sư phạm, dạy con không hiểu.", type: "A" },
      { text: "Cảm thấy buổi học khô khan, nhàm chán như 'đánh vật'.", type: "B" },
      { text: "Quá bận rộn, đi làm về mệt nhoài không còn sức.", type: "C" }
    ]
  },
  {
    question: "Nếu được Momtek tặng một món quà, bạn muốn nhận gì?",
    options: [
      { text: "Một buổi tư vấn 1-1 với chuyên gia để rà soát lỗi sai.", type: "A" },
      { text: "Một bộ Kit trò chơi Boardgame để cả nhà cùng chơi.", type: "B" },
      { text: "Tài khoản App Premium trọn đời để con tự học.", type: "C" }
    ]
  }
];

export const PERSONAS = {
  SKILL: {
    title: "NGƯỜI KIẾN TẠO TẬN TÂM",
    desc: "Mẹ là người cầu toàn, có trách nhiệm cao. Mẹ luôn muốn điều chuẩn chỉnh nhất cho con.",
    product: "Gói Pathway (Momtek Language)",
    reason: "Mẹ cần Mentor và Lộ trình chuẩn để an tâm tuyệt đối.",
    icon: Crown,
    color: "blue"
  },
  BONDING: {
    title: "NGƯỜI BẠN ĐỒNG HÀNH",
    desc: "Mẹ là chuyên gia tạo niềm vui! Con yêu thích việc học nhờ năng lượng tích cực của mẹ.",
    product: "Gói Foundation (Sách & Kit)",
    reason: "Mẹ cần công cụ tương tác để chơi cùng con hiệu quả hơn.",
    icon: Heart,
    color: "orange"
  },
  TIME: {
    title: "NGƯỜI MẸ HIỆN ĐẠI",
    desc: "Mẹ tư duy thoáng, thích công nghệ và đề cao tính hiệu quả, tiết kiệm thời gian.",
    product: "App Sing by Zalo + AI",
    reason: "Mẹ cần công nghệ làm đòn bẩy để con tự học.",
    icon: Zap,
    color: "purple"
  }
};