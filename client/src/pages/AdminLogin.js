import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Kullanıcı adı ve şifreyi doğrulama işlemi burada yapılmalıdır.
    if (username === 'admin' && password === 'adminpassword') {
      // Admin girişi başarılıysa yönlendirme yapabilirsiniz.
      // Örneğin, admin paneline yönlendirebilirsiniz.
      navigate('/')
    } else {
      alert('Hatalı kullanıcı adı veya şifre.');
    }
  };

  return (
    <div>
      <h2>Admin Girişi</h2>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
}
