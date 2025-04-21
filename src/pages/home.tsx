import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../lib/supabase';  // Pastikan path ini sesuai
import Button from "../components/Button"; 
import Input from "../components/Input"; 

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Login gagal: " + error.message);
    } else {
      navigate("/dashboard", { state: { user: data.user } });
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Kiri - Form Login */}
      <div className="w-full md:w-1/2 p-10">
    
        <img 
          src="/logo.png" 
          alt="Logo Mediverse" 
          className="mb-8" 
          style={{ width: '120px', marginLeft: '10px' }} 
        />

        <h1 className="text-3xl font-bold mb-2">Selamat Datang</h1>
        <p className="mb-6 text-gray-600 text-sm">
          Masuk dan kelola dashboard Medpoint Anda sekarang
        </p>

        <div className="w-full max-w-sm">
          {/* Gunakan Input Komponen untuk Email */}
          <Input
          label="Email"
          type="email"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={error && !email ? 'Email is required' : ''}
/>

          {/* Gunakan Input Komponen untuk Password */}
          <Input
          label="Kata Sandi"
          type="password"
          placeholder="Masukkan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={error && !password ? 'Password is required' : ''}
/>

          <div className="text-right text-sm mb-6 text-purple-500 cursor-pointer">
            Lupa Kata Sandi?
          </div>

          {/* Tampilkan Error jika ada */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Button untuk Login */}
          <Button
            label="Masuk Sekarang"
            onClick={handleLogin}
            variant="primary"
            size="medium"
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          />
        </div>
      </div>

      {/* Kanan - Gambar (hanya tampil di layar md ke atas) */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-b from-purple-700 to-purple-500 rounded-l-[3rem] px-6">
        <div className="text-center">
          <img
            src="/login-side.png"
            alt="Healthcare Assistant"
            className="w-[300px] max-w-xs"
          />
          <h2 className="text-2xl font-semibold">Your Personal</h2>
          <p className="text-xl">Healthcare Assistant</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
