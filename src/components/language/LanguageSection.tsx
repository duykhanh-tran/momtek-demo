import Image from 'next/image';
import Link from 'next/link';
import { 
    Swords, Heart, Package, CalendarCheck, 
    ShieldCheck, Lock, Gift, Check, LayoutGrid 
} from 'lucide-react';
import { PAIN_POINTS, METHODS, CURRICULUM, PRICING_PLANS } from '@/lib/language';

// --- STUB COMPONENTS ---
export const StruggleSection = () => (
    <section id="struggle" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 ">
                    Mẹ muốn đồng hành cùng con, nhưng...
                </h2>
                <p className="text-lg text-slate-500">3 rào cản khiến việc dạy con tại nhà trở thành "cuộc chiến".</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {PAIN_POINTS.map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:shadow-lg transition">
                        <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                            <item.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <p className="text-xl font-bold text-blue-700 bg-blue-50 inline-block px-8 py-4 rounded-xl border border-blue-200 shadow-sm">
                    "Mẹ không cần phải là cô giáo tiếng Anh. Mẹ chỉ cần là người đồng hành đúng nghĩa."
                </p>
            </div>
        </div>
    </section>
);

export const SolutionSection = () => (
    <section id="solution" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Giải pháp đột phá</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 ">
                        Lần đầu tiên, con <span className="text-orange-500">chủ động rủ mẹ học!</span>
                    </h2>
                    <p className="text-lg text-slate-500 mb-6">
                        Tính năng <strong>"Thách đấu cùng Mẹ"</strong> biến giờ học thành 15 phút cười đùa chất lượng (Quality Time).
                    </p>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1 bg-orange-100 p-2 rounded-lg text-orange-600 h-fit"><Swords className="w-6 h-6"/></div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Battle Phát âm & Từ vựng</h4>
                                <p className="text-sm text-slate-500 mt-1">Mẹ và con cùng thi xem ai được AI chấm điểm cao hơn. Mẹo nhỏ: Mẹ hãy "giả vờ thua" để con hưng phấn nhé!</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 bg-orange-100 p-2 rounded-lg text-orange-600 h-fit"><Heart className="w-6 h-6"/></div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Lợi ích kép</h4>
                                <p className="text-sm text-slate-500 mt-1">Con nạp kiến thức Cambridge một cách vô thức, còn Mẹ được trở thành "Đồng đội" tuyệt vời nhất của con.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <div className="relative z-10 bg-slate-900 rounded-3xl p-2 shadow-2xl border-4 border-slate-800 rotate-2 hover:rotate-0 transition duration-500">
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                             <Image src="/images/1.png" fill className="object-cover opacity-90" alt="Battle Mode" />
                        </div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-lg border border-orange-200 flex items-center gap-4 whitespace-nowrap">
                            <span className="font-bold text-blue-600">Con: 95đ</span>
                            <span className="font-black text-slate-400 text-xs">VS</span>
                            <span className="font-bold text-orange-600">Mẹ: 80đ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const MethodSection = () => (
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Phương pháp Hybrid</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-6 ">
                    Không dán mắt vào màn hình <br/>
                    Lớp học đa giác quan ngay trên bàn.
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-slate-200 border-t-2 border-dashed border-slate-300 z-0"></div>
                {METHODS.map((step, idx) => {
                    const colors: any = { blue: 'text-blue-600 border-blue-600 shadow-blue-500/30 bg-blue-600', orange: 'text-orange-500 border-orange-500 shadow-orange-500/30 bg-orange-500', green: 'text-green-500 border-green-500 shadow-green-500/30 bg-green-500' };
                    return (
                        <div key={idx} className="relative z-10 text-center bg-white p-6 rounded-2xl shadow-sm md:bg-transparent md:shadow-none">
                            <div className={`w-20 h-20 mx-auto text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg relative ${step.color === 'blue' ? 'bg-blue-600 shadow-blue-500/30' : step.color === 'orange' ? 'bg-orange-500 shadow-orange-500/30' : 'bg-green-500 shadow-green-500/30'}`}>
                                <step.icon className="w-9 h-9" />
                                <span className={`absolute -top-3 -right-3 bg-white font-black w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm ${step.color === 'blue' ? 'text-blue-600 border-blue-600' : step.color === 'orange' ? 'text-orange-500 border-orange-500' : 'text-green-500 border-green-500'}`}>{idx + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-500">{step.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export const UnboxingSection = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <div className="inline-flex items-center gap-2 border border-yellow-500/50 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <Package className="w-4 h-4"/> LEVEL PACKAGE
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6  leading-tight">
                        Bộ học liệu  <br/>
                        <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">cho mỗi một level.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Đây không phải sách bài tập khô khan. Với chất liệu giấy chống lóa bảo vệ mắt, hình vẽ tay 100%, đây là thế giới để con khám phá.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                        {num: '01', label: 'Hộp cứng sang trọng'},
                        {num: '05', label: 'Bộ Flashcards'},
                        {num: '05', label: 'Cuốn Workbook'},
                        {num: '∞', label: 'Tài khoản App Trọn đời'}
                        ].map((item, i) => (
                        <div key={i} className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                            <span className="block text-2xl font-black text-white mb-1">{item.num}</span>
                            <span className="text-xs text-slate-400 font-bold uppercase">{item.label}</span>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 transform hover:scale-105 transition duration-700">
                         <Image src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800" fill alt="Unboxing" className="object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const CurriculumSection = () => (
    <section id="curriculum" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Thế giới diệu kỳ</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4 ">6 Chủ đề cho con khám phá</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    Các chủ đề <strong>độc lập</strong>. Con có thể bắt đầu từ bất cứ chủ đề nào con thích.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {CURRICULUM.map((item, idx) => (
                    <div key={idx} className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
                        <div className={`h-40 relative overflow-hidden ${item.color === 'blue' ? 'bg-blue-100' : item.color === 'orange' ? 'bg-orange-100' : 'bg-green-100'}`}>
                            <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition duration-700"/>
                            <div className={`absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold uppercase ${item.color === 'blue' ? 'text-blue-800' : item.color === 'orange' ? 'text-orange-800' : 'text-green-800'}`}>Topic</div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-xs text-slate-500 mb-4 line-clamp-2">{item.desc}</p>
                            <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-600 mb-4">
                                {item.tags.map(tag => <span key={tag} className="bg-slate-100 px-2 py-1 rounded">{tag}</span>)}
                            </div>
                            <div className={`text-xs font-bold p-2 rounded ${item.color === 'blue' ? 'text-blue-600 bg-blue-50' : item.color === 'orange' ? 'text-orange-600 bg-orange-50' : 'text-green-600 bg-green-50'}`}>Output: {item.output}</div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="text-center mt-8">
                 <Link href="/shop" className="text-sm text-slate-500 italic hover:text-blue-600 hover:underline decoration-dotted transition">Mỗi Level học trong 2.5 tháng. Xem chi tiết từng cuốn tại Shop</Link>
            </div>
        </div>
    </section>
);

export const QualityControlSection = () => (
    <section className="py-20 bg-green-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-green-200">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600"><CalendarCheck className="w-6 h-6"/></div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Lịch Test Speaking 1-1</h3>
                                <p className="text-xs text-slate-500">Định kỳ 2 tuần/lần</p>
                            </div>
                        </div>
                        {/* Fake Testimonial Card */}
                        <div className="flex gap-4 items-center p-4 bg-green-50 rounded-xl border border-green-100">
                             <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden relative shrink-0">
                                <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" fill alt="Teacher" className="object-cover"/>
                             </div>
                            <div>
                                <p className="font-bold text-sm text-green-800">Cô Lan Anh</p>
                                <p className="text-xs text-green-600">Feedback: "Mẹ phát âm ending sound rất tốt!"</p>
                            </div>
                            <span className="ml-auto text-xs font-bold bg-white px-2 py-1 rounded text-green-600">Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Trạm kiểm soát</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-6 ">
                        Không để con hổng kiến thức.
                    </h2>
                    <p className="text-lg text-slate-500  mt-2 mb-2">
                    Khác biệt hoàn toàn với App tự học.Tại Momtek, chúng tôi cam kết không để mẹ đơn độc .
                </p>
                    <ul className="space-y-3 text-slate-600">
                        <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 shrink-0" /> <span>Test Speaking 1-1 với giáo viên sau mỗi Unit (2 tuần).</span></li>
                        <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 shrink-0" /> <span>Quyền lợi đặt lịch tư vấn riêng cho mẹ.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export const PricingSection = () => (
    <section id="pricing" className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Khoản đầu tư thông minh</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 ">
                    Đầu tư cho tương lai <br/> chỉ bằng 1 ly trà sữa mỗi ngày.
                </h2>
            </div>

            {/* Thay đổi: Loại bỏ items-end để các cột tự động stretch bằng nhau */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {PRICING_PLANS.map((plan, idx) => {
                    const isDark = plan.theme === 'dark';
                    // Logic sắp xếp thứ tự hiển thị
                    const orderClass = plan.isBestValue 
                        ? 'lg:order-2 order-1 transform lg:-translate-y-4' 
                        : (plan.price.includes('900') || idx === 0 ? 'lg:order-1 order-2 opacity-90 hover:opacity-100' : 'lg:order-3 order-3 opacity-90 hover:opacity-100');
                    
                    return (
                        <div key={idx} className={`
                            relative p-8 rounded-2xl transition shadow-sm h-full flex flex-col
                            ${isDark ? 'bg-slate-900 border-4 border-orange-500 shadow-2xl text-white' : 'bg-white border border-slate-200 text-slate-900'}
                            ${plan.isPopular ? 'border-2 border-blue-100 shadow-lg' : ''}
                            ${orderClass}
                        `}>
                            {plan.isBestValue && (
                                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase">Best Value</div>
                            )}
                            {plan.isPopular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Phổ biến</div>
                            )}

                            <h3 className={`font-bold text-sm uppercase mb-4 ${isDark ? 'text-orange-400' : 'text-slate-500'}`}>{plan.name}</h3>
                            <div className="flex items-end gap-2 mb-2">
                                <div className={`text-3xl lg:text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.price}</div>
                                {plan.originalPrice && <div className="text-sm text-slate-500 line-through mb-1">{plan.originalPrice}</div>}
                            </div>
                            <div className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                {plan.subText}
                            </div>
                            
                            {/* Nút bấm */}
                            <button className={`
                                block w-full py-3 rounded-xl font-bold text-center transition
                                ${plan.isBestValue 
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/50 hover:-translate-y-1' 
                                    : (plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-2 border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600')
                                }
                            `}>
                                {plan.cta}
                            </button>

                            <div className={`mt-8 pt-6 ${isDark ? 'border-t border-slate-700' : 'border-t border-slate-100'}`}>
                                {plan.features.length > 0 && <p className={`text-xs font-bold uppercase mb-3 ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Quyền lợi:</p>}
                                <ul className={`space-y-3 text-sm ${isDark ? 'text-white' : 'text-slate-600'}`}>
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex gap-2 items-start">
                                            {feat.includes('Tặng') ? <Gift className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> : <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/>}
                                            <span dangerouslySetInnerHTML={{__html: feat}}></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="text-center mt-12">
                 <Link href="/shop" className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 text-sm transition">
                    <LayoutGrid className="w-4 h-4"/> Xem tất cả sản phẩm khác tại Cửa hàng
                </Link>
            </div>
        </div>
    </section>
);

export const DemoSection = () => (
    <section id="demo" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Bạn vẫn còn phân vân?</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="inline-block p-3 bg-green-100 rounded-full text-green-600 mb-4"><ShieldCheck className="w-8 h-8"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Đăng ký nhận Unit Demo dùng thử 7 ngày</h3>
                <p className="text-slate-500 mb-8">Chúng tôi sẽ gửi trọn bộ sách + mở App cho mẹ dùng thử. Nếu không hài lòng, hoàn tiền 100%.</p>
                <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <input type="tel" placeholder="Nhập số Zalo của mẹ..." className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 text-slate-800"/>
                    <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">Nhận Demo Ngay</button>
                </div>
                <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-1"><Lock className="w-3 h-3"/> Thông tin được bảo mật tuyệt đối.</p>
            </div>
        </div>
    </section>
);

export const FounderSection = () => (
    <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-white overflow-hidden mb-6 relative">
                 <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" fill alt="Founder" className="object-cover"/>
            </div>
            <h2 className="text-2xl font-bold font-[family-name:var(--font-merriweather)] mb-4">"Từ trái tim một người mẹ, gửi đến những người mẹ."</h2>
            <p className="text-slate-300 italic text-lg leading-relaxed mb-6">
                "Tôi hiểu cảm giác bất lực khi muốn dạy con nhưng không đủ khả năng. Momtek ra đời không chỉ để dạy tiếng Anh, mà để trao quyền cho các mẹ trở thành người thầy, người bạn tốt nhất của con mình."
            </p>
            <div className="font-bold text-orange-500">Ms. Thu Hằng</div>
            <div className="text-sm text-slate-500">Founder Momtek Language</div>
        </div>
    </section>
);