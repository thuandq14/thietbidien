import { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Shield, 
  User,
  Bell,
  Search,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-white font-bold uppercase tracking-widest text-xs">Đang kiểm tra quyền truy cập...</span>
        </div>
      </div>
    );
  }

  const menuItems = [
    { name: 'Tổng quan', icon: LayoutDashboard, path: '/admin' },
    { name: 'Cấu hình Web', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 bg-brand-900 text-white transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-20'} overflow-hidden flex flex-col`}>
        <div className="p-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-brand-600 p-2 rounded-xl flex-shrink-0">
              <Shield size={24} />
            </div>
            <AnimatePresence>
              {sidebarOpen && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="font-black text-lg tracking-tight whitespace-nowrap uppercase"
                >
                  ADMIN PANEL
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group ${isActive ? 'bg-brand-500 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
              >
                <item.icon size={22} className={isActive ? 'text-white' : 'group-hover:text-white'} />
                <AnimatePresence>
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="font-bold flex-1"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
                {sidebarOpen && isActive && <ChevronRight size={16} />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-400 hover:bg-red-400/10 transition-colors font-bold"
          >
            <LogOut size={22} />
            <AnimatePresence>
              {sidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  Đăng xuất
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-20'}`}>
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex justify-between items-center sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2 text-slate-400 gap-3 w-72">
              <Search size={18} />
              <input type="text" placeholder="Tìm kiếm nhanh..." className="bg-transparent outline-none text-sm w-full font-medium text-slate-700" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
              <Bell size={22} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-10 w-px bg-slate-200" />
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-slate-900">{user?.email?.split('@')[0].toUpperCase() || 'Admin'}</div>
                <div className="text-[10px] font-black text-brand-600 uppercase tracking-widest">Administrator</div>
              </div>
              <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 border border-brand-200 overflow-hidden">
                <User size={24} />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
