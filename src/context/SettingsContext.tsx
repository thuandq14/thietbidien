import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface SiteSettings {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImageUrl?: string;
}

interface SettingsContextType {
  settings: SiteSettings;
  loading: boolean;
  refreshSettings: () => Promise<void>;
}

const defaultSettings: SiteSettings = {
  companyName: 'Công ty Điện Bình Dương',
  phone: '0900.XXX.XXX',
  email: 'info@diencongnghiepbd.com',
  address: 'KCN VSIP II-A, Tân Uyên, Bình Dương',
  heroTitle: 'KIẾN TẠO NĂNG LƯỢNG BỀN VỮNG',
  heroSubtitle: 'Cung cấp giải pháp thiết kế, lắp đặt và bảo trì hệ thống điện công nghiệp tiêu chuẩn quốc tế tại Bình Dương.',
  heroImageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);

  const refreshSettings = async () => {
    try {
      const { data, error } = await supabase.from('site_settings').select('key, value');
      if (error) throw error;

      if (data && data.length > 0) {
        const fetchedSettings = { ...defaultSettings };
        data.forEach((item: { key: string; value: string }) => {
          if (item.key in fetchedSettings) {
            // @ts-ignore
            fetchedSettings[item.key] = item.value;
          }
        });
        setSettings(fetchedSettings);
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading, refreshSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
