import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../lib/supabase';// Pastikan path sesuai
import Input from "../components/Input";  // Mengimpor komponen Input
import Button from "../components/Button";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Memanggil API Supabase untuk registrasi pengguna baru
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError("Registrasi gagal: " + error.message); // Menampilkan error jika gagal
    } else {
      navigate("/rest/v1/login"); // Setelah berhasil, arahkan ke halaman login
    }

    setLoading(false); // Set loading selesai
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Create an Account</h1>

      <div className="w-full max-w-sm space-y-4">
        <form onSubmit={handleRegister}>
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
            label="Password"
            type="password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={error && !password ? 'Password is required' : ''}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Button untuk Register */}
          <Button
            label={loading ? "Registering..." : "Register"}
            type="submit"
            variant="primary"
            size="medium"
            disabled={loading}

            className="w-full bg-blue-500 text-white p-2 rounded" onClick={function (): void {
              throw new Error("Function not implemented.");
            } }          />
        </form>
      </div>
    </div>
  );
};

export default Register;
