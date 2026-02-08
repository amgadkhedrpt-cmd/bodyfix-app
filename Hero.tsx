
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-slate-900/90 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-right">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">المركز الأول للعلاج الطبيعي</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            صحح حركتك، <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">استعد حياتك.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
            برامج تعافي مخصصة تعتمد على البيانات، الميكانيكا الحيوية، ونخبة من الأخصائيين. اختبر المستوى التالي من التأهيل في بودي فيكس.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a 
              href="#book" 
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 text-center"
            >
              ابدأ رحلة التعافي
            </a>
            <a 
              href="#ai-fix" 
              className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              جرب فحص الأعراض بالذكاء الاصطناعي
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 justify-start">
            <div className="flex -space-x-3 space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-12 h-12 rounded-full border-4 border-slate-900" 
                  src={`https://picsum.photos/100?random=${i}`} 
                  alt="عميل" 
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-400 text-sm font-medium mt-1">موثوق من قبل أكثر من 2000 مريض</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
