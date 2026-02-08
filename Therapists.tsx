
import React from 'react';
import { Therapist } from '../types';

const therapists: Therapist[] = [
  {
    id: '1',
    name: 'د. سارة ميتشل',
    specialty: 'أخصائية عظام',
    experience: 'أكثر من 12 عاماً من الخبرة',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'د. ماركوس تشن',
    specialty: 'الأداء الرياضي',
    experience: '8 سنوات من الخبرة',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'د. إيلينا رودريغيز',
    specialty: 'خبيرة العلاج اليدوي',
    experience: '15 عاماً من الخبرة',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'د. ديفيد ويلسون',
    specialty: 'تأهيل عصبي',
    experience: '10 سنوات من الخبرة',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
  }
];

const Therapists: React.FC = () => {
  return (
    <div className="container mx-auto px-4 text-right">
      <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-12 gap-6">
        <div className="text-right">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">فريقنا</h2>
          <h3 className="text-4xl font-bold text-slate-900">تعرف على خبرائنا</h3>
        </div>
        <p className="text-slate-600 max-w-md text-right">
          أطباؤنا محترفون على مستوى الدكتوراه مكرسون لإعادتك إلى ذروة أدائك.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {therapists.map((t) => (
          <div key={t.id} className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] shadow-lg">
            <img 
              src={t.image} 
              alt={t.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-right">
              <h4 className="text-white text-xl font-bold mb-1">{t.name}</h4>
              <p className="text-blue-400 font-semibold text-sm mb-2">{t.specialty}</p>
              <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-slate-300 text-xs uppercase tracking-wider mb-4">{t.experience}</p>
                <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
                  عرض الملف الشخصي
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Therapists;
