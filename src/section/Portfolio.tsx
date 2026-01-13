"use client";
import { useState } from "react";
import Image from "next/image"; 
import { LayoutGrid, Lightbulb, Drill, Zap, ArrowUpLeft } from "lucide-react";
import ModernLight1 from '../../public/assets/ModernLight1.jpeg'
import ModernLight2 from '../../public/assets/ModernLight2.jpeg'
import ModernLight3 from '../../public/assets/ModernLight3.jpeg'
import ModernLight4 from '../../public/assets/ModernLight4.jpeg'
import ModernLight5 from '../../public/assets/ModernLight5.jpeg'
import ModernLight6 from '../../public/assets/ModernLight6.jpeg'






const categories = [
  { id: "all", name: "الكل", icon: <LayoutGrid size={14} /> },
  { id: "lighting", name: "إنارة", icon: <Lightbulb size={14} /> },
  { id: "setup", name: "تأسيس", icon: <Drill size={14} /> },
  { id: "smart", name: "أنظمة ذكية", icon: <Zap size={14} /> },
];

const projects = [
  { id: 1, category: "lighting", title: "إضاءة مخفية - قصر مودرن", image: ModernLight1 },
  { id: 2, category: "setup", title: "تأسيس شبكة ضغط عالي", image: ModernLight6 },
  { id: 3, category: "smart", title: "تحكم ذكي - فيلا", image: ModernLight2 },
  { id: 4, category: "lighting", title: "إنارة حدائق ليلية", image: ModernLight5 },
  { id: 5, category: "setup", title: "لوحة تحكم رئيسية", image: ModernLight4 },
  { id: 6, category: "smart", title: "أتمتة إضاءة كاملة", image: ModernLight3 },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] text-right">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="flex items-center gap-4 text-[#eab308]">
             <span className="h-[1px] w-12 bg-[#eab308]"></span>
             <span className="text-xs font-black uppercase tracking-[0.4em]">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            مشاريع <span className="text-zinc-600">تمت</span> <br /> 
            بكل <span className="text-[#eab308]">دقة.</span>
          </h2>
        </div>

        {/* Tabs Control */}
        <div className="flex flex-wrap gap-10 mb-12 border-b border-zinc-900 pb-8">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-3 transition-all duration-500 ${
                activeTab === tab.id ? "text-[#eab308]" : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              <span className={`p-2 rounded-lg border transition-all ${
                activeTab === tab.id ? "border-[#eab308]/50 bg-[#eab308]/5" : "border-zinc-800 bg-transparent"
              }`}>
                {tab.icon}
              </span>
              <span className="text-sm font-bold tracking-wide">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - تم إضافة رابط الاتصال السريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <a 
              key={project.id} 
              href="#contact"
              className="group relative overflow-hidden bg-zinc-900 rounded-2xl border-[0.5px] border-zinc-900 aspect-square block cursor-pointer"
            >
              {/* Image */}
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
                priority={index < 3}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-black text-[#eab308] tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#eab308]/20">
                    0{index + 1}
                  </span>
                  <div className="bg-[#eab308] p-2 rounded-full text-black transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <ArrowUpLeft size={20} />
                  </div>
                </div>

                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#eab308] text-xs font-bold mb-2 opacity-0 group-hover:opacity-100 transition-all">
                    اطلب مشروعاً مماثلاً ←
                  </p>
                  <h3 className="text-white font-bold text-2xl leading-tight">
                    {project.title}
                  </h3>
                  <div className="h-[2px] w-0 group-hover:w-full bg-[#eab308] mt-4 transition-all duration-700"></div>
                </div>
              </div>

              {/* Dark Gradient Covering */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;