
import React, { useState } from 'react';
import { analyzeSymptoms } from '../services/geminiService';
import { AIResponse } from '../types';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await analyzeSymptoms(input);
      setResult(response);
    } catch (err) {
      setError('تعذر معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-right">
      <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
        <div className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="mb-10">
            <label className="block text-slate-700 font-semibold mb-4 text-lg">
              صف شعورك بعدم الراحة، هدفك، أو ابحث عن أقرب مركز (مثال: "ألم في الرقبة" أو "أين أقرب مركز؟")
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب هنا..."
                className="flex-grow p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 transition-all text-right"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    جاري المعالجة...
                  </>
                ) : (
                  'ابدأ الفحص'
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl mb-6 border border-red-100 animate-in fade-in duration-300">
              {error}
            </div>
          )}

          {result && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                  <h4 className="text-blue-700 font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {result.suggestedExercises.length > 0 ? 'ملخص التحليل' : 'معلومات الموقع'}
                  </h4>
                  <p className="text-slate-700 italic leading-relaxed whitespace-pre-wrap">"{result.summary}"</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <h4 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    {result.suggestedExercises.length > 0 ? 'المناطق المحتملة' : 'المواقع المتوفرة'}
                  </h4>
                  <ul className="flex flex-wrap gap-2 justify-start">
                    {result.potentialIssues.map((issue, idx) => (
                      <li key={idx} className="bg-white px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 border border-slate-200 shadow-sm">
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {result.suggestedExercises.length > 0 && (
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    تمارين أولية موصى بها
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {result.suggestedExercises.map((ex, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{ex.name}</h5>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{ex.reps}</span>
                        </div>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{ex.description}</p>
                        <div className="pt-4 border-t border-slate-100">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">الفوائد</span>
                          <p className="text-slate-700 text-sm mt-1">{ex.benefits}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-6 bg-slate-900 text-slate-300 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>
                <p className="text-sm italic leading-relaxed opacity-80 relative z-10">
                  <strong className="text-white block mb-2 underline">ملاحظة طبية هامة:</strong> {result.professionalAdvice}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
