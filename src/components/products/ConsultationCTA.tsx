import React from 'react';

const ConsultationCTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 ">Mẹ vẫn băn khoăn?</h2>
            <p className="text-blue-200 mb-6 text-sm md:text-base">
                Mỗi trẻ em là một thế giới. Hãy để Momtek tư vấn giải pháp học tập phù hợp nhất cho con bạn.
            </p>
            
            <form className="bg-white p-1.5 rounded-full flex shadow-2xl max-w-md mx-auto">
                <input type="tel" placeholder="SĐT của Mẹ..." className="flex-1 px-4 md:px-6 py-2 md:py-3 rounded-l-full text-slate-900 focus:outline-none rounded-full text-sm font-bold" required />
                <button type="submit" className="bg-orange-500 text-white px-5 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-orange-600 transition flex items-center gap-2 shadow-lg shrink-0 text-sm whitespace-nowrap">
                    Gọi tư vấn
                </button>
            </form>
        </div>
    </section>
  );
};

export default ConsultationCTA;