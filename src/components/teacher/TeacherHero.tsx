import Image from 'next/image';

const TeacherHero = () => {
  return (
    <section className="w-full bg-[#EFF6FF] pt-20">
      <div className="max-w-[1920px] mx-auto px-[192px]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl pt-8  md:text-4xl font-extrabold text-slate-900 leading-snug max-w-3xl">
            Mọi trẻ em đều xứng đáng{" "}
            <br />
            <span className="text-orange-500">
              có khởi đầu tốt nhất, ngay tại nhà
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 pb-8 text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed">
            Chúng tôi tin rằng ba mẹ chính là người thầy tốt nhất, công nghệ là trợ lý đắc lực. Khám phá hệ sinh thái học tập toàn diện , nôi việc học diễn ra tự nhiên như một cuộc trò chuyện .   
          </p>

          {/* Image */}
          
          <div className="w-full md:w-1/2 relative order-1 md:order-2  mb-20">
              <div className="relative rounded-xl md:rounded-2xl shadow-lg border-4 border-white overflow-hidden aspect-video">
               <Image 
              src="/images/1.png"
              alt="Parent and child learning"
              fill 
              className="object-cover" 
              />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherHero;