import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-600 p-2 rounded-lg">
            <Shield className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
            ĐIỆN CÔNG NGHIỆP <span className="text-brand-500 underline decoration-accent">BÌNH DƯƠNG</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Dịch vụ', 'Về chúng tôi', 'Dự án', 'Liên hệ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-brand-500 transition ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
              {item}
            </a>
          ))}
          <a href="tel:0900000000" className="flex items-center gap-2 bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition">
            <Phone size={16} />
            0900.XXX.XXX
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-brand-900">
          {mobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col gap-4 border-t"
          >
            {['Dịch vụ', 'Về chúng tôi', 'Dự án', 'Liên hệ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-slate-800" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <a href="tel:0900000000" className="flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-bold">
              <Phone size={18} />
              GỌI NGAY
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
