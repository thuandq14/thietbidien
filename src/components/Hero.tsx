import { motion } from 'motion/react';
import { ArrowRight, Settings, Zap } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

export default function Hero() {
  const { settings } = useSettings();

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-900">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-transparent" />
        <img 
          src={settings.heroImageUrl} 
          alt="Industrial Electrical" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 industrial-grid opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-bold tracking-widest text-sm uppercase">CHUYÊN GIA ĐIỆN CÔNG NGHIỆP</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 uppercase"
          >
            {settings.heroTitle?.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-brand-500' : ''}>
                {word} {i === 1 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-xl font-light mb-10 leading-relaxed"
          >
            {settings.heroSubtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Dịch Vụ Của Chúng Tôi
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold transition">
              Tư Vấn Ngay
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Counter (Floating) */}
      <div className="absolute bottom-10 right-6 hidden lg:flex gap-10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
        <div className="text-center">
          <div className="text-3xl font-black text-white mb-1">15+</div>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Năm Kinh Nghiệm</div>
        </div>
        <div className="h-10 w-px bg-white/10" />
        <div className="text-center">
          <div className="text-3xl font-black text-white mb-1">500+</div>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Dự Án Hoàn Thành</div>
        </div>
        <div className="h-10 w-px bg-white/10" />
        <div className="text-center">
          <div className="text-3xl font-black text-white mb-1">24/7</div>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Hỗ Trợ Kỹ Thuật</div>
        </div>
      </div>
    </section>
  );
}
