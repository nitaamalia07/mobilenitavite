import { JSX, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase'; // Impor konfigurasi Supabase

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<any>(null); // State untuk menyimpan data user
  const navigate = useNavigate(); // Hook untuk navigasi

  useEffect(() => {
    const checkUser = async () => {
      // Ambil user yang sedang login menggunakan Supabase
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user); // Menyimpan user ke state

      // Jika tidak ada user, arahkan ke halaman login
      if (!user) {
        navigate('/login');
      }
    };

    checkUser(); // Panggil fungsi checkUser saat komponen pertama kali dimuat
  }, [navigate]); // Dependency array untuk memastikan effect dijalankan saat navigate berubah

  if (!user) {
    // Jika user belum login, tampilkan loading atau pesan
    return <div>Loading...</div>;
  }

  // Jika user sudah ada (login), render children (halaman yang dibungkus dengan PrivateRoute)
  return children;
};

export default PrivateRoute;
