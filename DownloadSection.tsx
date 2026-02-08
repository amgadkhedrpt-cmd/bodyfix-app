
import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 relative flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-blue-600/20">
          {/* Background Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="md:w-1/2 text-right relative z-10">
            <h2 className="text-white font-bold tracking-widest uppercase text-sm mb-4">احمل صحتك في جيبك</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              حمل تطبيق بودي فيكس <br /> وابدأ تعافيك اليوم
            </h3>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              احصل على وصول فوري إلى مكتبة التمارين، وتواصل مع أخصائيك، وتتبع تقدمك في أي وقت ومن أي مكان. ذكاء اصطناعي متخصص في العلاج الطبيعي معك دائماً.
            </p>

            <div className="flex flex-wrap gap-4 justify-end">
              {/* App Store Button */}
              <a href="#" className="bg-slate-900 text-white px-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl">
                <div className="text-right">
                  <span className="block text-[10px] opacity-70">تحميل من</span>
                  <span className="block text-lg font-bold leading-none">App Store</span>
                </div>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              </a>

              {/* Google Play Button */}
              <a href="#" className="bg-slate-900 text-white px-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl">
                <div className="text-right">
                  <span className="block text-[10px] opacity-70">تحميل من</span>
                  <span className="block text-lg font-bold leading-none">Google Play</span>
                </div>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.7c15.4-8.9 25.9-24.5 25.9-42.2 0-17.6-10.3-33.1-27.2-44zm-116.8 61.9l-280.8 161.2 220.7-220.7 60.1 59.5z"/></svg>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 justify-end">
              <div className="p-2 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-slate-100 flex items-center justify-center rounded-lg border-2 border-slate-50">
                  <svg className="w-12 h-12 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <p className="text-blue-100 text-sm font-medium max-w-[150px]">امسح الكود لتنزيل التطبيق فوراً على هاتفك</p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-64 md:w-80 h-[500px] md:h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
              {/* Screen Content Mockup */}
              <div className="absolute inset-0 bg-white p-6 pt-12">
                <div className="w-12 h-12 bg-blue-600 rounded-xl mb-4"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    <div className="h-24 bg-blue-50 rounded-2xl"></div>
                    <div className="h-24 bg-teal-50 rounded-2xl"></div>
                  </div>
                  <div className="h-40 bg-slate-50 rounded-2xl mt-4"></div>
                </div>
              </div>
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
