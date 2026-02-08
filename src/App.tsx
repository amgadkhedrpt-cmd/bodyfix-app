import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px', direction: 'rtl' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '3rem' }}>BODYFIX</h1>
      <h2 style={{ color: '#2563eb' }}>مركز بودي فيكس للعلاج الطبيعي</h2>
      <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>بإشراف د. أمجد خضر</p>
      <div style={{ marginTop: '30px', padding: '20px', background: '#f3f4f6', borderRadius: '15px' }}>
        <h3>خدماتنا:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ تأهيل إصابات الملاعب (ACL)</li>
          <li>✅ العلاج اليدوي المكثف</li>
          <li>✅ الاستشارات الأونلاين</li>
        </ul>
      </div>
      <p style={{ marginTop: '40px', fontWeight: 'bold' }}>قريباً.. التطبيق بالكامل على موبايلك!</p>
    </div>
  );
}

export default App;
