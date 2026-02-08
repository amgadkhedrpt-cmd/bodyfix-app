
import React, { useState, useEffect } from 'react';
import { Exercise } from '../types';

const MOCK_EXERCISES: Exercise[] = [
  {
    id: 'e1',
    name: 'تمرين القطة والجمل',
    category: 'الظهر',
    description: 'إطالة بسيطة لتحسين مرونة العمود الفقري.',
    reps: '10-15 مرة',
    benefits: 'يحسن القوام، مرونة العمود الفقري، وقوة الجذع.',
    instructions: [
      'ابدأ على يديك وركبتيك في وضعية المنضدة.',
      'استنشق، اخفض بطنك، وانظر للأعلى (وضعية البقرة).',
      'ازفر، قوس ظهرك للأعلى، واخفض ذقنك (وضعية القطة).'
    ],
    precautions: ['تجنب التمرين إذا كنت تعاني من إصابات حادة في الرقبة.', 'حافظ على بطء الحركة.'],
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=231ce863f8e03061405e3f396962f3396e94931f&profile_id=164&oauth2_token_id=57447761'
  },
  {
    id: 'e2',
    name: 'القرفصاء على الحائط',
    category: 'الركبة',
    description: 'تقوية عضلات الفخذ دون ضغط مفرط على المفاصل.',
    reps: '3 مجموعات من 10',
    benefits: 'تنشيط عضلات الفخذ والمؤخرة.',
    instructions: [
      'قف وظهرك مستند إلى الحائط.',
      'انزلق للأسفل حتى يصبح فخذاك موازيين للأرض.',
      'اثبت لمدة 5 ثوانٍ ثم انزلق للأعلى.'
    ],
    precautions: ['لا تنزل بزاوية أقل من 90 درجة.', 'حافظ على كعبيك مسطحين.'],
    videoUrl: 'https://player.vimeo.com/external/363991219.sd.mp4?s=d02e8633390f7f329241943d043d8396c0964175&profile_id=164&oauth2_token_id=57447761'
  },
  {
    id: 'e3',
    name: 'عصر لوح الكتف',
    category: 'الكتف',
    description: 'ضروري لصحة أعلى الظهر والكتفين.',
    reps: '15 مرة',
    benefits: 'يصحح الأكتاف المنحنية.',
    instructions: [
      'اجلس بوضعية مستقيمة مع استرخاء الكتفين.',
      'اضغط لوحي الكتف معاً كما لو كنت تمسك قلماً بينهما.',
      'اثبت لمدة 3 ثوانٍ ثم حررهما.'
    ],
    precautions: ['لا ترفع كتفيك للأعلى.', 'تجنب تقويس أسفل الظهر.'],
    videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27db1070622a59f5188f58c74f5d214c7764d25&profile_id=164&oauth2_token_id=57447761'
  }
];

const VideoLibrary: React.FC = () => {
  const [filter, setFilter] = useState<string>('الكل');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('bf_bookmarks');
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  const toggleBookmark = (id: string) => {
    const newBookmarks = bookmarks.includes(id) 
      ? bookmarks.filter(b => b !== id) 
      : [...bookmarks, id];
    setBookmarks(newBookmarks);
    localStorage.setItem('bf_bookmarks', JSON.stringify(newBookmarks));
  };

  const categories = ['الكل', 'الظهر', 'الركبة', 'الكتف', 'الكاحل', 'الرقبة'];
  const filteredExercises = filter === 'الكل' 
    ? MOCK_EXERCISES 
    : MOCK_EXERCISES.filter(ex => ex.category === filter);

  return (
    <div className="container mx-auto px-4 py-20 text-right" id="library">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">مكتبة فيديوهات التمارين</h2>
          <p className="text-slate-600">تصفح أدلة احترافية لرحلة تعافيك.</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                filter === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredExercises.map(ex => (
          <div key={ex.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col text-right">
            <div className="relative aspect-video bg-slate-100 cursor-pointer overflow-hidden" onClick={() => setSelectedExercise(ex)}>
               <video 
                src={ex.videoUrl} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                muted 
                loop 
                onMouseOver={e => (e.target as HTMLVideoElement).play()} 
                onMouseOut={e => (e.target as HTMLVideoElement).pause()}
              />
              <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600 shadow-lg">
                  <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{ex.category}</span>
                <button onClick={(e) => { e.stopPropagation(); toggleBookmark(ex.id); }} className={`transition-colors ${bookmarks.includes(ex.id) ? 'text-red-500' : 'text-slate-300 hover:text-red-300'}`}>
                  <svg className="w-6 h-6" fill={bookmarks.includes(ex.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                </button>
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">{ex.name}</h4>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">{ex.description}</p>
              <button 
                onClick={() => setSelectedExercise(ex)}
                className="mt-auto w-full py-2 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all border border-transparent hover:border-blue-100"
              >
                عرض التفاصيل
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedExercise && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col text-right">
            <div className="relative aspect-video bg-black">
              <video src={selectedExercise.videoUrl} controls autoPlay className="w-full h-full" />
              <button 
                onClick={() => setSelectedExercise(null)}
                className="absolute top-6 left-6 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto">
              <div className="flex flex-col md:flex-row-reverse justify-between gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedExercise.name}</h3>
                  <div className="flex gap-4 mb-8 justify-start">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">{selectedExercise.category}</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">{selectedExercise.reps}</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                        التعليمات خطوة بخطوة
                      </h5>
                      <ol className="space-y-3 mr-7">
                        {selectedExercise.instructions.map((step, i) => (
                          <li key={i} className="text-slate-600 leading-relaxed list-decimal pr-2">{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 space-y-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                      الفوائد
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">{selectedExercise.benefits}</p>
                  </div>
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <h5 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                      الاحتياطات
                    </h5>
                    <ul className="space-y-2 mr-5">
                      {selectedExercise.precautions.map((p, i) => (
                        <li key={i} className="text-red-600 text-sm list-disc">{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;
