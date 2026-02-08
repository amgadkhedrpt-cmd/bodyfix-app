import React from 'react';
import { Activity, Users, Video, Calendar, ChevronRight, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dir-rtl" dir="rtl">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">BODYFIX</h1>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-blue-200">خدماتنا</a>
            <a href="#about" className="hover:text-blue-200">عن المركز</a>
            <a href="#contact" className="hover:text-blue-200">اتصل بنا</a>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg font-bold">احجز الآن</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-blue-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">صحح حركتك، استعد حياتك</h2>
          <p className="text-xl mb-8 opacity-90">مركز بودي فيكس للعلاج الطبيعي المتقدم - بإشراف د. أمجد خضر</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg shadow-xl">ابدأ رحلتك</button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">تخصصاتنا الاحترافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="text-blue-900 w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">تأهيل إصابات الملاعب</h4>
              <p className="text-gray-600">برامج متخصصة للرباط الصليبي وإصابات الركبة للعودة للملاعب سريعاً.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center border-t-4 border-blue-600">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-blue-900 w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">العلاج اليدوي المكثف</h4>
              <p className="text-gray-600">تقنيات حديثة لعلاج آلام الظهر والرقبة والعمود الفقري بدون جراحة.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="text-blue-900 w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">الاستشارات الأونلاين</h4>
              <p className="text-gray-600">خدمة المتابعة عن بعد والتمارين المنزلية المصورة بأحدث الوسائل.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2026 BODYFIX Center | د. أمجد خضر</p>
          <div className="flex justify-center gap-6">
            <Facebook className="cursor-pointer hover:text-blue-400" />
            <Instagram className="cursor-pointer hover:text-pink-400" />
            <Phone className="cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
