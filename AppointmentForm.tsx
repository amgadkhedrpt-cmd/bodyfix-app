
import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center shadow-2xl text-right">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">تم استلام طلبك!</h3>
        <p className="text-slate-600">سيقوم منسقنا بالاتصال بك خلال ساعتي عمل لترتيب موعد جلستك.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-blue-600 font-bold hover:underline"
        >
          حجز موعد آخر
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-slate-900 text-right">
      <h3 className="text-2xl font-bold mb-8">اطلب جلسة</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">الاسم الكامل</label>
            <input 
              required
              type="text" 
              placeholder="محمد علي" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-right"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">البريد الإلكتروني</label>
            <input 
              required
              type="email" 
              placeholder="name@example.com" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-right"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">رقم الهاتف</label>
            <input 
              required
              type="tel" 
              placeholder="+966 50 000 0000" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-right"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">الاهتمام الرئيسي</label>
            <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-right">
              <option>إصابة رياضية</option>
              <option>ألم مزمن</option>
              <option>ما بعد الجراحة</option>
              <option>أخرى</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">رسالة (اختياري)</label>
          <textarea 
            rows={3}
            placeholder="أخبرنا المزيد عن حالتك..." 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-right"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
        >
          إرسال الطلب
        </button>
        <p className="text-center text-xs text-slate-400 mt-4">
          بالإرسال، فإنك توافق على سياسة الخصوصية وشروط الخدمة الخاصة بنا.
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;
