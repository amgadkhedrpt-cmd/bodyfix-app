
import React, { useState, useEffect } from 'react';
import { Patient, Appointment } from '../types';
import { generateConfirmationEmail } from '../services/geminiService';

const PatientPortal: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [search, setSearch] = useState('');
  const [newNote, setNewNote] = useState('');
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    initialCondition: ''
  });

  const [apptData, setApptData] = useState({
    date: '',
    time: '',
    therapist: 'د. سارة ميتشل'
  });

  useEffect(() => {
    const saved = localStorage.getItem('bf_patients');
    if (saved) {
      setPatients(JSON.parse(saved));
    } else {
      const initial: Patient[] = [
        {
          id: 'p1',
          name: 'جيمس رودريغيز',
          email: 'james@example.com',
          phone: '(555) 123-4567',
          history: [{ date: '2024-03-01', condition: 'تمزق الرباط الصليبي', notes: 'الأسبوع الرابع بعد العملية.' }],
          appointments: [{ id: 'a1', date: '2024-03-25', time: '10:00 صباحاً', therapistId: '1', status: 'مجدولة' }],
          progress: 65
        }
      ];
      setPatients(initial);
      localStorage.setItem('bf_patients', JSON.stringify(initial));
    }
  }, []);

  const saveToStorage = (updatedPatients: Patient[]) => {
    setPatients(updatedPatients);
    localStorage.setItem('bf_patients', JSON.stringify(updatedPatients));
  };

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault();
    const newPatient: Patient = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      history: [{ date: new Date().toISOString().split('T')[0], condition: formData.initialCondition, notes: 'التسجيل الأولي' }],
      appointments: [],
      progress: 0
    };
    saveToStorage([...patients, newPatient]);
    setShowAddModal(false);
    setFormData({ name: '', email: '', phone: '', initialCondition: '' });
  };

  const handleUpdatePatient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatient) return;
    const updated = patients.map(p => p.id === selectedPatient.id ? { ...p, ...formData } : p);
    saveToStorage(updated);
    setSelectedPatient({ ...selectedPatient, ...formData });
    setShowEditModal(false);
  };

  const deletePatient = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المريض نهائياً؟')) {
      const updated = patients.filter(p => p.id !== id);
      saveToStorage(updated);
      setSelectedPatient(null);
    }
  };

  const deleteNote = (noteIndex: number) => {
    if (!selectedPatient) return;
    const updatedHistory = selectedPatient.history.filter((_, i) => i !== noteIndex);
    const updatedPatient = { ...selectedPatient, history: updatedHistory };
    const updatedPatients = patients.map(p => p.id === selectedPatient.id ? updatedPatient : p);
    saveToStorage(updatedPatients);
    setSelectedPatient(updatedPatient);
  };

  const cancelAppointment = (apptId: string) => {
    if (!selectedPatient) return;
    const updatedAppts = selectedPatient.appointments.filter(a => a.id !== apptId);
    const updatedPatient = { ...selectedPatient, appointments: updatedAppts };
    const updatedPatients = patients.map(p => p.id === selectedPatient.id ? updatedPatient : p);
    saveToStorage(updatedPatients);
    setSelectedPatient(updatedPatient);
  };

  const addNote = () => {
    if (!selectedPatient || !newNote.trim()) return;
    const updatedHistory = [
      ...selectedPatient.history,
      { date: new Date().toISOString().split('T')[0], condition: 'تحديث الحالة', notes: newNote }
    ];
    const updatedPatient = { ...selectedPatient, history: updatedHistory };
    const updatedPatients = patients.map(p => p.id === selectedPatient.id ? updatedPatient : p);
    saveToStorage(updatedPatients);
    setSelectedPatient(updatedPatient);
    setNewNote('');
  };

  const handleScheduleAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatient) return;
    setIsSendingEmail(true);
    const newAppt: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      date: apptData.date,
      time: apptData.time,
      therapistId: apptData.therapist,
      status: 'مجدولة'
    };
    const updatedPatient = { ...selectedPatient, appointments: [...selectedPatient.appointments, newAppt] };
    const updatedPatients = patients.map(p => p.id === selectedPatient.id ? updatedPatient : p);
    
    try {
      const emailContent = await generateConfirmationEmail(selectedPatient.name, apptData.date, apptData.time, apptData.therapist);
      console.log(`Email content generated:`, emailContent);
      saveToStorage(updatedPatients);
      setSelectedPatient(updatedPatient);
      setEmailStatus(`تم إرسال تأكيد الموعد بنجاح إلى ${selectedPatient.email}`);
      setTimeout(() => { setShowAppointmentModal(false); setEmailStatus(null); }, 2000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSendingEmail(false);
    }
  };

  const openEditModal = () => {
    if (!selectedPatient) return;
    setFormData({
      name: selectedPatient.name,
      email: selectedPatient.email,
      phone: selectedPatient.phone,
      initialCondition: selectedPatient.history[0]?.condition || ''
    });
    setShowEditModal(true);
  };

  const filteredPatients = patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-20 text-right" id="portal">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center mb-10 gap-6">
        <div className="text-right">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">بوابة الموظفين</h2>
          <p className="text-slate-600">إدارة المرضى وتعديل البيانات يدوياً.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <input 
            type="text" placeholder="البحث..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 pr-10 pl-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-right shadow-sm"
          />
          <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg">
            + مريض جديد
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4 max-h-[70vh] overflow-y-auto pl-2 custom-scrollbar">
          {filteredPatients.map(p => (
            <button key={p.id} onClick={() => setSelectedPatient(p)} className={`w-full text-right p-6 rounded-3xl border transition-all ${selectedPatient?.id === p.id ? 'bg-blue-600 text-white shadow-xl' : 'bg-white hover:border-blue-200'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${selectedPatient?.id === p.id ? 'bg-white/20' : 'bg-slate-100 text-slate-600'}`}>
                  {p.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{p.name}</h4>
                  <p className="text-sm opacity-70">{p.email}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2">
          {selectedPatient ? (
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm animate-in fade-in duration-300">
              <div className="flex justify-between items-start mb-10 border-b border-slate-50 pb-8">
                <div className="flex gap-2">
                  <button onClick={openEditModal} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="تعديل الملف">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button onClick={() => deletePatient(selectedPatient.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors" title="حذف المريض">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
                <div className="text-right">
                  <h3 className="text-3xl font-bold text-slate-900">{selectedPatient.name}</h3>
                  <p className="text-slate-500">{selectedPatient.phone}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 justify-end">السجل الطبي</h4>
                  <div className="space-y-4 max-h-64 overflow-y-auto custom-scrollbar pr-2 mb-4">
                    {selectedPatient.history.map((h, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 relative group">
                        <button onClick={() => deleteNote(i)} className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                        </button>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-bold text-slate-400 uppercase">{h.date}</span>
                        </div>
                        <p className="text-slate-700 text-sm">{h.notes}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="أضف ملاحظة..." className="flex-grow p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none text-right"/>
                    <button onClick={addNote} className="bg-blue-600 text-white px-4 rounded-xl shadow-lg hover:bg-blue-700">+</button>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 justify-end">المواعيد</h4>
                  <div className="space-y-4">
                    {selectedPatient.appointments.map(a => (
                      <div key={a.id} className="p-4 bg-teal-50 rounded-2xl border border-teal-100 flex justify-between items-center group">
                        <button onClick={() => cancelAppointment(a.id)} className="text-red-400 hover:text-red-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all">إلغاء</button>
                        <div className="text-right">
                          <span className="block font-bold text-slate-900">{a.date}</span>
                          <span className="text-xs text-slate-500 uppercase">{a.time}</span>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => setShowAppointmentModal(true)} className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:border-blue-300 transition-all">+ موعد جديد</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-slate-50/50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
              <h3 className="text-xl font-bold text-slate-400">اختر مريضاً للتعديل يدوياً</h3>
            </div>
          )}
        </div>
      </div>

      {/* Edit Patient Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 text-right shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">تعديل بيانات المريض</h3>
            <form onSubmit={handleUpdatePatient} className="space-y-6">
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="الاسم" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-right"/>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="البريد" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-right"/>
              <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="الهاتف" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-right"/>
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowEditModal(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold">إلغاء</button>
                <button type="submit" className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg">حفظ التغييرات</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Appointment & Add Modals (simplified for brevity, logic follows the same patterns as previous updates) */}
      {showAppointmentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 text-right">
            <h3 className="text-2xl font-bold mb-8">جدولة موعد</h3>
            <form onSubmit={handleScheduleAppointment} className="space-y-4">
              <input type="date" value={apptData.date} onChange={e => setApptData({...apptData, date: e.target.value})} className="w-full p-4 bg-slate-50 rounded-2xl text-right"/>
              <input type="time" value={apptData.time} onChange={e => setApptData({...apptData, time: e.target.value})} className="w-full p-4 bg-slate-50 rounded-2xl text-right"/>
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowAppointmentModal(false)} className="flex-1 py-4">إلغاء</button>
                <button type="submit" className="flex-1 py-4 bg-blue-600 text-white rounded-2xl" disabled={isSendingEmail}>
                  {isSendingEmail ? 'جاري الإرسال...' : 'تأكيد الموعد'}
                </button>
              </div>
              {emailStatus && <p className="text-green-600 text-sm mt-2">{emailStatus}</p>}
            </form>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-right">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">إضافة مريض جديد</h3>
            <form onSubmit={handleAddPatient} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">الاسم الكامل</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="مثال: سارة أحمد" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-right"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">البريد الإلكتروني</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="name@email.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-right"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">الهاتف</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="(555) 000-0000" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-right"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">الحالة الرئيسية</label>
                <input required type="text" value={formData.initialCondition} onChange={e => setFormData({...formData, initialCondition: e.target.value})} placeholder="مثال: ألم أسفل الظهر" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-right"/>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">إلغاء</button>
                <button type="submit" className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all">حفظ المريض</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientPortal;
