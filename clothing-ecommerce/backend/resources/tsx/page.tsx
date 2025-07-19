// resources/js/app.tsx (hoặc trong frontend project nếu tách riêng)

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/hello');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Lỗi gọi API:', error);
      setMessage('Có lỗi xảy ra!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>React trong Laravel</h1>
      <p>Chào mừng bạn đến với trang React!</p>
      <button onClick={handleClick}>Click để gọi Laravel API</button>

      {message && (
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</p>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('page')!);
root.render(<App />);
