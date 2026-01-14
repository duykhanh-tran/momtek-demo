import React from 'react';

const TeacherHero = () => {
  return (
    <section className="w-full bg-[#EFF6FF] pt-20 overflow-hidden">
      {/* Sử dụng container để đồng bộ chiều rộng với Navbar/Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-[192px]">
        <div className="flex flex-col items-center text-center">
          
          <h1 className="text-3xl pt-8 md:text-4xl font-extrabold text-slate-900 leading-snug max-w-3xl">
            Mọi trẻ em đều xứng đáng{" "}
            <br className="hidden md:block" />
            <span className="text-orange-500 block md:inline mt-2 md:mt-0">
              có khởi đầu tốt nhất, ngay tại nhà
            </span>
          </h1>

          <p className="mt-6 pb-8 text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed px-2">
            Chúng tôi tin rằng ba mẹ chính là người thầy tốt nhất, công nghệ là trợ lý đắc lực. Khám phá hệ sinh thái học tập toàn diện, nơi việc học diễn ra tự nhiên như một cuộc trò chuyện.
          </p>

          <div className="w-full md:w-10/12 lg:w-8/12 relative order-1 md:order-2 mb-12 md:mb-20">
              <div className="relative rounded-xl md:rounded-2xl shadow-lg border-4 border-white overflow-hidden aspect-video w-full">
               <img 
                  src="/images/1.png"
                  alt="Parent and child learning"
                  className="object-cover w-full h-full absolute inset-0" 
              />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherHero;