"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Instagram, Twitter, Facebook, Zap, ChevronDown, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "صيانة أعطال",
    message: ""
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const services = ["صيانة أعطال", "تأسيس كهرباء", "تركيب إنارة", "أنظمة ذكية"];

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const myNumber = "009660573209001";

    const text = `*طلب خدمة جديد من الموقع*%0A%0A` +
      `👤 *الاسم:* ${formData.name}%0A` +
      `📱 *الجوال:* ${formData.phone}%0A` +
      `🛠️ *الخدمة:* ${formData.service}%0A` +
      `📝 *الوصف:* ${formData.message}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] text-right py-24 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 mb-24">

          {/* Form Side */}
          <div className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-zinc-800 shadow-2xl backdrop-blur-sm order-2 lg:order-1">
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#eab308] rounded-full"></span>
              أرسل لنا طلبك
            </h3>

            <form className="space-y-5" onSubmit={handleWhatsApp}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-widest mr-2">الاسم الكريم</label>
                  <input
                    required
                    type="text"
                    className="w-full p-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl text-white focus:border-[#eab308]/50 outline-none transition-all"
                    placeholder="أدخل اسمك"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-widest mr-2">رقم الجوال</label>
                  <input
                    required
                    type="tel"
                    className="w-full p-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl text-white focus:border-[#eab308]/50 outline-none transition-all"
                    placeholder="05xxxxxxxx"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest mr-2">نوع الخدمة</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full p-4 bg-zinc-800/50 border ${isDropdownOpen ? 'border-[#eab308]' : 'border-zinc-700'} rounded-2xl text-white flex items-center justify-between transition-all outline-none text-right`}
                  >
                    <span className="font-bold">{formData.service}</span>
                    <ChevronDown className={`text-[#eab308] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>

                  {isDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                      <ul className="absolute z-50 w-full mt-2 bg-[#121212] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        {services.map((service) => (
                          <li key={service}>
                            <button
                              type="button"
                              className="w-full p-4 text-right text-zinc-300 hover:bg-[#eab308] hover:text-black transition-all flex items-center justify-between group"
                              onClick={() => {
                                setFormData({ ...formData, service: service });
                                setIsDropdownOpen(false);
                              }}
                            >
                              <span className="font-bold">{service}</span>
                              {formData.service === service && <Check size={16} className="text-[#eab308] group-hover:text-black" />}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest mr-2">وصف المشكلة</label>
                <textarea
                  rows={4}
                  className="w-full p-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl text-white focus:border-[#eab308]/50 outline-none transition-all"
                  placeholder="كيف يمكننا مساعدتك؟"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#eab308] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#facc15] transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] active:scale-[0.98]"
              >
                إرسال للواتساب مباشرة
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[#eab308]">
                <span className="h-[1px] w-12 bg-[#eab308]"></span>
                <span className="text-xs font-black uppercase tracking-[0.4em]">Connect</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                جاهزون <span className="text-zinc-600 text-4xl md:text-6xl block">لخدمتكم دائماً.</span>
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed max-w-md">
                فريقنا متاح على مدار الساعة للحالات الطارئة والاستشارات المجانية في كافة أحياء الرياض.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Phone size={24} />, label: "واتساب / اتصال", value: "0573209001", color: "text-[#eab308]" },
                { icon: <MapPin size={24} />, label: "الموقع الرئيسي", value: "الرياض، المملكة العربية السعودية", color: "text-zinc-400" },
                { icon: <Mail size={24} />, label: "البريد الإلكتروني", value: "mahmoudhazemyassen@gmail.com", color: "text-zinc-400" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-[#eab308] group-hover:bg-[#eab308] group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-black text-zinc-600 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-bold text-white group-hover:text-[#eab308] transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 hover:text-[#eab308] hover:border-[#eab308]/30 transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-zinc-600 text-sm font-medium text-center">
            © {new Date().getFullYear()} كهربائي الرياض. صُنع بإتقان لتأمين منزلك.
          </p>
          <div className="flex items-center gap-3">
            <div className="bg-[#eab308] p-2 rounded-lg rotate-3">
              <Zap className="text-black" size={18} fill="black" />
            </div>
            <span className="font-black text-xl text-white tracking-tighter">كهربائي <span className="text-[#eab308]">الرياض</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;