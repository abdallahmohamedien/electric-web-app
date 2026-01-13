"use client";
import Image from "next/image";
import { Zap, ArrowUpLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000"
          alt="فني كهرباء محترف"
          fill
          priority
          className="object-cover opacity-30 grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 text-right">
        <div className="max-w-3xl space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full text-[#eab308]">
            <Zap size={16} fill="#eab308" />
            <span className="text-xs font-black uppercase tracking-widest">المصنف الأول في الرياض</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter">
            نضيء <span className="text-zinc-600">عالمك</span> <br />
            بأمان <span className="text-[#eab308]">واحترافية.</span>
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-xl">
            خدمات كهربائية متكاملة للمنازل والمشاريع، نجمع بين دقة التنفيذ وأعلى معايير الأمان العالمية.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-6 pt-4 justify-end lg:justify-start lg:flex-row-reverse">
            {/* زر اطلب الخدمة - ينقل إلى قسم التواصل */}
            <a
              href="#contact"
              className="px-10 py-5 bg-[#eab308] text-black font-black rounded-2xl hover:bg-[#facc15] transition-all flex items-center gap-3 group cursor-pointer"
            >
              اطلب الخدمة الآن
              <ArrowUpLeft className="group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] transition-transform" />
            </a>

            {/* زر مشاهدة أعمالنا - ينقل إلى معرض الأعمال */}
            <a
              href="#portfolio"
              className="px-10 py-5 bg-transparent border border-zinc-800 text-white font-bold rounded-2xl hover:bg-zinc-900 transition-all cursor-pointer"
            >
              مشاهدة أعمالنا
            </a>
          </div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute left-10 bottom-10 hidden xl:block rotate-90 origin-left">
        <span className="text-[10px] font-black text-zinc-800 tracking-[1em] uppercase">
          Precision • Safety • Innovation
        </span>
      </div>
    </section>
  );
};

export default Hero;