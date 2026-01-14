import React from 'react';
import { Phone, Send } from 'lucide-react';

const ZaloChallenge = () => {
  return (
    <section id="zalo-challenge" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-blue-500/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-2 block">Miễn phí hoàn toàn</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Thử thách 7 Ngày: <br /> <span className="text-blue-300">Sửa lỗi phát âm qua Zalo</span></h2>
              <p className="text-slate-300 mb-6">
                Không cần cài App phức tạp. Hệ thống AI của Momtek sẽ gửi bài tập 5 phút mỗi ngày trực tiếp vào Zalo của bạn.
              </p>
              
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">Số điện thoại Zalo của bạn</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input type="tel" placeholder="Nhập SĐT để nhận bài..." className="w-full bg-slate-800 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition font-bold" />
                    </div>
                  </div>
                  <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Tham gia ngay
                  </button>
                </form>
                <p className="text-[10px] text-slate-500 mt-3 text-center">
                  *Hoàn thành 7 ngày để nhận Voucher mua sách <span className="text-yellow-400 font-bold">Phonics Blend</span> giảm 40%.
                </p>
              </div>
            </div>

            {/* Chat Simulation */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 rotate-3 hover:rotate-0 transition duration-500">
                <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">M</div>
                  <div>
                    <p className="font-bold text-sm">Momtek AI Coach</p>
                    <p className="text-[10px] opacity-80">Vừa xong</p>
                  </div>
                </div>
                <div className="bg-slate-100 p-4 h-64 flex flex-col gap-3">
                  <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-xs text-slate-700 self-start max-w-[90%]">
                    Chào mẹ! 👋 Hôm nay là Ngày 1. <br />Hãy luyện âm <strong>/p/</strong> nhé. Bấm link dưới đây để đọc thử:
                  </div>
                  <div className="bg-blue-100 p-3 rounded-r-xl rounded-bl-xl shadow-sm text-xs text-blue-800 font-bold self-start max-w-[90%] cursor-pointer border border-blue-200">
                    ▶️ Bài tập Ngày 1: Âm P
                  </div>
                  <div className="bg-blue-600 text-white p-2 rounded-l-xl rounded-br-xl text-xs self-end shadow-sm">
                    Đã xong ạ! Bé thích lắm ❤️
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-xl font-black text-xs shadow-lg animate-bounce">
                  Tặng sách Phonics!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZaloChallenge;