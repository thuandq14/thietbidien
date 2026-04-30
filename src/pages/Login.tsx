import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -ml-40 -mb-40" />
      <div className="absolute inset-0 industrial-grid opacity-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-white/20">
          <div className="text-center mb-10">
            <div className="inline-flex bg-brand-600 p-4 rounded-3xl mb-6 shadow-lg shadow-brand-500/30">
              <Shield className="text-white w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black text-brand-900 mb-2 uppercase tracking-tight">HỆ THỐNG ADMIN</h1>
            <p className="text-slate-500 font-light text-sm">Vui lòng đăng nhập để quản trị website</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-medium mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Đăng Nhập</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-brand-600 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                  placeholder="admin@diencongnghiepbd.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Mật Khẩu</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-brand-600 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-900 hover:bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest transition shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Đăng Nhập Ngay
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <button 
            onClick={() => navigate('/')}
            className="w-full mt-8 text-slate-400 hover:text-brand-600 transition text-sm font-bold flex items-center justify-center gap-2"
          >
            ← Quay lại Trang Chủ
          </button>
        </div>
        
        <p className="text-center mt-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
          Phát triển bởi <span className="text-white">AIS Industrial Solution</span>
        </p>
      </motion.div>
    </div>
  );
}
