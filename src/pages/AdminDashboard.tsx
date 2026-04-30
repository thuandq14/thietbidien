import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { 
  Building2, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Save, 
  Eye, 
  TrendingUp, 
  CheckCircle,
  Clock,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

export default function AdminDashboard() {
  const [settings, setSettings] = useState({
    companyName: 'Công ty Điện Bình Dương',
    phone: '0900.XXX.XXX',
    email: 'info@diencongnghiepbd.com',
    address: 'KCN VSIP II-A, Tân Uyên, Bình Dương'
  });

  const stats = [
    { label: 'Số lượt xem trang', value: '12,450', change: '+12%', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Tỷ lệ chuyển đổi', value: '3.2%', change: '+0.5%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Dự án đang chạy', value: '8', change: 'Mới +2', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Dịch vụ hoàn tất', value: '156', change: '+12', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2 uppercase">BẢNG ĐIỀU KHIỂN QUẢN TRỊ</h1>
            <p className="text-slate-500 font-medium">Chào mừng trở lại! Dưới đây là hiệu suất website của bạn.</p>
          </div>
          <button className="flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">
            <ExternalLink size={18} />
            Xem Trang Chủ
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{stat.change}</div>
              </div>
              <div className="text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Edit Settings */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[40px] shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-600 p-2 rounded-xl text-white">
                    <Building2 size={22} />
                  </div>
                  <h3 className="font-black text-lg text-slate-900 uppercase tracking-tight">THÔNG TIN CÔNG TY</h3>
                </div>
                <button className="text-brand-600 font-bold text-sm hover:underline">Chỉnh sửa nâng cao</button>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                      Tên Công Ty
                      <Building2 size={12} />
                    </label>
                    <input 
                      type="text" 
                      value={settings.companyName}
                      onChange={(e) => setSettings({...settings, companyName: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                      Hotline (Bình Dương)
                      <PhoneCall size={12} />
                    </label>
                    <input 
                      type="text" 
                      value={settings.phone}
                      onChange={(e) => setSettings({...settings, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                    Email Công Ty
                    <Mail size={12} />
                  </label>
                  <input 
                    type="email" 
                    value={settings.email}
                    onChange={(e) => setSettings({...settings, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                    Địa Chỉ Văn Phòng
                    <MapPin size={12} />
                  </label>
                  <input 
                    type="text" 
                    value={settings.address}
                    onChange={(e) => setSettings({...settings, address: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                  />
                </div>

                <button className="w-full bg-brand-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2 mt-4">
                  <Save size={20} />
                  Lưu Thay Đổi
                </button>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-brand-900 rounded-[40px] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 uppercase">Kết nối khách hàng?</h3>
                <p className="text-brand-300 font-medium">Kiểm tra các yêu cầu tư vấn mới từ Form liên hệ.</p>
              </div>
              <button className="relative z-10 bg-white text-brand-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Xem Yêu Cầu (0)
              </button>
            </div>
          </div>

          {/* Right Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-[40px] shadow-sm border border-slate-200 p-8">
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-6">TRẠNG THÁI WEBSITE</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-800">Đang hoạt động</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Server: Production</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                    <CheckCircle size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-800">Cơ sở dữ liệu</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Đã kết nối: Supabase</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                    <Shield size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-800">SSL Certificate</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hợp lệ - Bảo mật</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] shadow-sm border border-slate-200 p-8 text-center">
              <div className="w-20 h-20 bg-brand-50 rounded-full mx-auto flex items-center justify-center text-brand-600 mb-6">
                <TrendingUp size={32} />
              </div>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">TĂNG TRƯỞNG</h4>
              <p className="text-slate-500 text-sm mb-6">Lượt truy cập mới tăng 15% so với tháng trước tại khu vực Bình Dương.</p>
              <button className="text-brand-600 font-bold text-sm underline">Xem báo cáo SEO</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
