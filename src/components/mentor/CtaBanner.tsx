import React from 'react';

export default function CtaBanner() {
  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Con bạn cần một người bạn đồng hành?
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
                Đăng ký ngay để được Mentor Momtek tư vấn lộ trình và học thử 1-1 miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-blue-900/50 transition transform hover:scale-105 flex items-center justify-center gap-3">
                    Đăng ký Tư vấn 1-1
                </button>
            </div>
        </div>
    </section>
  );
}