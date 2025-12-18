import React from 'react';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 pb-24 md:pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Cột 1: Brand Info */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-3xl mb-4 tracking-tighter">momtek.</h4>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Đồng hành cùng cha mẹ Việt kiến tạo tương lai toàn cầu cho trẻ bằng phương pháp Hybrid Learning tiên tiến.
            </p>
            <div className="flex gap-4">
              {FOOTER_LINKS.socials.map((Icon, idx) => (
                <Link key={idx} href="#" className="text-slate-400 hover:text-white hover:bg-blue-600 transition p-2 bg-slate-900 rounded-full">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Cột 2: Sản phẩm */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-slate-800 pb-2 inline-block">Sản phẩm</h5>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.products.map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-blue-400 transition flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-slate-800 pb-2 inline-block">Hỗ trợ</h5>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.support.map((item, idx) => (
                <li key={idx}>
                   <Link href="#" className="hover:text-blue-400 transition flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Newsletter */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-slate-800 pb-2 inline-block">Đăng ký nhận tin</h5>
            <p className="text-xs mb-4">Nhận các bài viết hay về phương pháp dạy con mỗi tuần.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Email của bạn..." className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-600 text-white" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 rounded-lg transition">Đăng ký</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p>&copy; 2025 Momtek Education. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-400">Điều khoản sử dụng</Link>
            <Link href="#" className="hover:text-slate-400">Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;