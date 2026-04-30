import { motion } from 'motion/react';
import { Settings, Zap, Shield, Cpu, Wrench, Battery } from 'lucide-react';

const servicesList = [
  {
    title: 'Thiết kế tủ điện',
    desc: 'Thiết kế và lắp ráp hệ thống tủ bảng điện điều khiển, tủ điện động lực tiêu chuẩn IEC.',
    icon: <Settings className="text-brand-500 w-8 h-8" />,
    color: 'bg-blue-50'
  },
  {
    title: 'Bảo trì hệ thống',
    desc: 'Dịch vụ bảo dưỡng định kỳ hệ thống điện nhà máy, trạm biến áp và máy phát điện.',
    icon: <Wrench className="text-amber-500 w-8 h-8" />,
    color: 'bg-amber-50'
  },
  {
    title: 'Điện tự động hóa',
    desc: 'Giải pháp PLC, SCADA, biến tần cho dây chuyền sản xuất tự động hiện đại.',
    icon: <Cpu className="text-emerald-500 w-8 h-8" />,
    color: 'bg-emerald-50'
  },
  {
    title: 'Giải pháp tiết kiệm',
    desc: 'Tư vấn và triển khai các hệ thống tối ưu hóa điện năng tiêu thụ cho doanh nghiệp.',
    icon: <Zap className="text-purple-500 w-8 h-8" />,
    color: 'bg-purple-50'
  },
  {
    title: 'Hệ thống an toàn',
    desc: 'Lắp đặt hệ thống chống sét, báo cháy và giám sát an ninh công nghiệp.',
    icon: <Shield className="text-red-500 w-8 h-8" />,
    color: 'bg-red-50'
  },
  {
    title: 'Năng lượng dự phòng',
    desc: 'Cung cấp giải pháp UPS và máy phát điện dự phòng đảm bảo vận hành liên tục.',
    icon: <Battery className="text-cyan-500 w-8 h-8" />,
    color: 'bg-cyan-50'
  }
];

export default function Services() {
  return (
    <section id="dịch vụ" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-50 rounded-full blur-[100px] -mr-40 -mt-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-50 text-brand-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
          >
            LĨNH VỰC HOẠT ĐỘNG
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-brand-900 mb-6"
          >
            CHÚNG TÔI CUNG CẤP GIẢI PHÁP <br />
            <span className="text-brand-600">TOÀN DIỆN</span> NHẤT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang lại những giá trị thiết thực và chất lượng vượt trội cho mọi công trình.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4 group-hover:text-brand-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-light">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-brand-600 font-bold text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform">
                Xem chi tiết <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
