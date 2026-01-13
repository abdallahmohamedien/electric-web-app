import { Lightbulb, Wrench, ShieldAlert, Zap, Home, HardHat, ArrowUpLeft } from "lucide-react";

const services = [
  {
    title: "تأسيس وتشطيب",
    description: "بناء البنية التحتية الكهربائية للفلل والمشاريع الكبرى وفق الكود السعودي.",
    icon: <HardHat size={26} />,
  },
  {
    title: "صيانة أعطال",
    description: "تشخيص دقيق وإصلاح فوري للالتماسات والأعطال لضمان استمرارية التيار.",
    icon: <Wrench size={26} />,
  },
  {
    title: "المنزل الذكي",
    description: "دمج التقنية بالكهرباء للتحكم في الإضاءة والتكييف عبر أنظمة ذكية متطورة.",
    icon: <Zap size={26} />,
  },
  {
    title: "تركيب إنارة",
    description: "توزيع هندسي للإضاءة المخفية والحديثة يبرز جمال التصميم الداخلي.",
    icon: <Lightbulb size={26} />,
  },
  {
    title: "فحص وتأمين",
    description: "اختبار أحمال القواطع وتأمين اللوحات الرئيسية ضد مخاطر ارتفاع الجهد.",
    icon: <ShieldAlert size={26} />,
  },
  {
    title: "تمديدات خارجية",
    description: "تجهيز وتمديد الإنارة الخارجية والحدائق بمواد مقاومة للرطوبة والحرارة.",
    icon: <Home size={26} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] text-right font-sans">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header - Minimal & Aligned */}
        <div className="max-w-4xl mb-24 space-y-6">
          <div className="flex items-center gap-4 text-[#eab308]">
             <span className="h-[1px] w-12 bg-[#eab308]"></span>
             <span className="text-xs font-black uppercase tracking-[0.4em]">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            حلول <span className="text-zinc-600">هندسية</span> <br /> 
            بصمة <span className="text-[#eab308]">احترافية.</span>
          </h2>
        </div>

        {/* Services Grid - Ultra Balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-12 border-[0.5px] border-zinc-900 hover:bg-zinc-900/20 transition-all duration-700 rounded-xl"
            >
              {/* Icon - Constant Proportion */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center text-zinc-500 group-hover:text-[#eab308] transition-colors duration-500">
                {service.icon}
              </div>

              {/* Content - Symmetric Layout */}
              <div className="mt-8 space-y-4 relative z-10">
                <h3 className="text-2xl font-bold text-zinc-100 tracking-tight group-hover:translate-x-[-5px] transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-base font-medium group-hover:text-zinc-300 transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Functional Decorative Element */}
              <div className="absolute bottom-8 left-8 text-zinc-900 opacity-20 group-hover:opacity-100 group-hover:text-[#eab308]/20 transition-all duration-700">
                <ArrowUpLeft size={40} strokeWidth={1} />
              </div>

              {/* Subtle Numbering */}
              <div className="absolute top-8 left-12">
                <span className="text-[10px] font-black text-zinc-800 tracking-widest group-hover:text-zinc-600 transition-colors">
                  0{index + 1} 
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action - Balanced Footer of Section */}
        <div className="mt-20 flex justify-center">
           <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-zinc-800 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;