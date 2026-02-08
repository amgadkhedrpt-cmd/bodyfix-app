
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 text-right">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 justify-end">
              <span className="text-2xl font-bold tracking-tight brand text-slate-900">
                بودي فيكس
              </span>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold italic">BF</span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              إعادة تعريف العلاج الطبيعي ببروتوكولات عالية الأداء ورعاية متخصصة. رحلة تعافيك تبدأ من هنا.
            </p>
            <div className="flex gap-4 justify-end">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-20 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-blue-600 transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-blue-600 transition-colors">خدماتنا</a></li>
              <li><a href="#ai-fix" className="text-slate-500 hover:text-blue-600 transition-colors">مساعد الذكاء الاصطناعي</a></li>
              <li><a href="#therapists" className="text-slate-500 hover:text-blue-600 transition-colors">فريقنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">الخدمات</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">تأهيل رياضي</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ألم مزمن</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">رعاية ما بعد الجراحة</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ميكانيكا حيوية</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">النشرة البريدية</h4>
            <p className="text-slate-500 text-sm mb-4">ابق على اطلاع بأحدث نصائح الصحة والتأهيل.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-right"
              />
              <button className="w-full p-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © 2024 مركز بودي فيكس. الموقع: bodyfixcenters.com
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 text-sm hover:text-slate-600">سياسة الخصوصية</a>
            <a href="#" className="text-slate-400 text-sm hover:text-slate-600">شروط الخدمة</a>
            <a href="#" className="text-slate-400 text-sm hover:text-slate-600">ملفات التعريف</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
