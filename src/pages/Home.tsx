import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { BadgeCheck, Users, Trophy, Factory } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

export default function Home() {
  const { settings } = useSettings();

  return (
    <div className="relative">
      <Header />
      <Hero />
      
      {/* Social Trust Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['Schneider', 'ABB', 'Siemens', 'Mitsubishi', 'LS'].map((logo) => (
              <span key={logo} className="text-2xl font-black tracking-tighter text-slate-800">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="về chúng tôi" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop" 
                  alt="Industrial Factory" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent flex items-end p-10">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full">
                    <div className="flex items-center gap-4 mb-2">
                      <BadgeCheck className="text-accent" />
                      <span className="text-white font-bold">Chất Lượng Được Kiểm Định</span>
                    </div>
                    <p className="text-slate-300 text-sm">Hơn 500 dự án lớn nhỏ tại Việt Nam tin dùng dịch vụ của chúng tôi.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-brand-50 text-brand-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
                VỀ CÔNG TY CHÚNG TÔI
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-900 mb-8 leading-tight">
                UY TÍN TẠO NÊN <br />
                <span className="text-brand-500 underline decoration-accent decoration-4">THƯƠNG HIỆU</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-light">
                Công ty Điện Công Nghiệp Bình Dương tự hào là đơn vị tiên phong trong việc cung cấp các giải pháp kỹ thuật điện chuyên sâu. Chúng tôi không chỉ bán sản phẩm, chúng tôi cung cấp giải pháp vận hành tối ưu cho nhà xưởng của bạn.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Users className="text-brand-600 mb-4" size={32} />
                  <h4 className="font-bold text-brand-900 mb-2">Đội ngũ kỹ sư</h4>
                  <p className="text-slate-500 text-sm font-light">Giàu kinh nghiệm, nhiệt huyết và tận tâm với công việc.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Trophy className="text-accent mb-4" size={32} />
                  <h4 className="font-bold text-brand-900 mb-2">Chất lượng</h4>
                  <p className="text-slate-500 text-sm font-light">Cam kết thiết bị chính hãng, bảo hành dài hạn.</p>
                </div>
              </div>

              <button className="flex items-center gap-2 text-brand-600 font-bold group">
                Tìm hiểu thêm về lịch sử công ty 
                <div className="h-0.5 w-10 bg-brand-600 group-hover:w-16 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-600" />
        <div className="absolute inset-0 industrial-grid opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight uppercase">
            SẴN SÀNG CHO DỰ ÁN <br />
            TIẾP THEO CỦA BẠN?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${settings.phone}`} className="bg-white text-brand-600 px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-tight">
              GỌI TƯ VẤN NGAY: {settings.phone}
            </a>
            <a href={`mailto:${settings.email}`} className="bg-brand-900 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:bg-black transition-colors uppercase tracking-tight">
              GỬI EMAIL YÊU CẦU
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
