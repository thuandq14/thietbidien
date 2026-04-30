import { Mail, MapPin, Phone, Shield, Facebook, Youtube, Linkedin } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

export default function Footer() {
  const { settings } = useSettings();

  return (
    <footer className="bg-brand-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 underline-offset-4">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Shield className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                {settings.companyName.split(' ')[0]} <br />
                <span className="text-brand-500">{settings.companyName.split(' ').slice(1).join(' ')}</span>
              </span>
            </div>
            <p className="text-slate-400 font-light mb-8 leading-relaxed">
              Dẫn đầu trong lĩnh vực cung cấp thiết bị và giải pháp điện công nghiệp chuyên nghiệp tại khu vực {settings.address.split(',').pop()}.
            </p>
            <div className="flex gap-4">
              {[Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-600 transition group">
                  <Icon size={18} className="text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 relative">
              Dịch vụ
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-500 rounded-full" />
            </h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><a href="#" className="hover:text-white transition">Lắp đặt tủ điện</a></li>
              <li><a href="#" className="hover:text-white transition">Bảo trì hệ thống</a></li>
              <li><a href="#" className="hover:text-white transition">Điện tự động hóa</a></li>
              <li><a href="#" className="hover:text-white transition">Tư vấn tiết kiệm điện</a></li>
              <li><a href="#" className="hover:text-white transition">Thiết bị chính hãng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 relative">
              Liên kết nhanh
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-500 rounded-full" />
            </h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><a href="#" className="hover:text-white transition">Trang chủ</a></li>
              <li><a href="#" className="hover:text-white transition">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-white transition">Tất cả dự án</a></li>
              <li><a href="#" className="hover:text-white transition">Tin tức & Sự kiện</a></li>
              <li><a href="/login" className="hover:text-white transition">Đăng nhập Admin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 relative">
              Thông tin liên hệ
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-500 rounded-full" />
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 bg-white/5 p-2 rounded-lg"><MapPin size={18} className="text-brand-500" /></div>
                <span className="text-slate-400 font-light leading-relaxed">{settings.address}</span>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 bg-white/5 p-2 rounded-lg"><Phone size={18} className="text-brand-500" /></div>
                <span className="text-slate-400 font-light">{settings.phone}</span>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 bg-white/5 p-2 rounded-lg"><Mail size={18} className="text-brand-500" /></div>
                <span className="text-slate-400 font-light">{settings.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 {settings.companyName}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
