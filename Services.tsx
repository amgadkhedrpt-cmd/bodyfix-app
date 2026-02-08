
import React from 'react';

const services = [
  {
    title: 'تأهيل الإصابات الرياضية',
    desc: 'عد إلى الملاعب بشكل أسرع مع بروتوكولات تعافي مخصصة للرياضيين.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-blue-500'
  },
  {
    title: 'العلاج اليدوي',
    desc: 'تقنيات يدوية لاستعادة الحركة وتخفيف الآلام المزمنة.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 013 0m-6 3V11m0-5.5a1.5 1.5 0 013 0v1" />
      </svg>
    ),
    color: 'bg-teal-500'
  },
  {
    title: 'التعافي بعد الجراحة',
    desc: 'تأهيل موجه بعد العمليات الجراحية لضمان الشفاء والقوة الأمثل.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'bg-indigo-500'
  },
  {
    title: 'تصحيح القوام',
    desc: 'أعد محاذاة جسمك وقلل من التوتر الناتج عن أنماط الحياة المستقرة.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'bg-emerald-500'
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">ماذا نقدم</h2>
        <h3 className="text-4xl font-bold text-slate-900 mb-4">رعاية قائمة على العلم</h3>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 text-right">
            <div className={`w-14 h-14 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform mr-0 ml-auto`}>
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
            <a href="#book" className="text-blue-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              اقرأ المزيد
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
