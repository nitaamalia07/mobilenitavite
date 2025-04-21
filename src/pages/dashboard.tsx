import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../lib/supabase';  // Pastikan path sesuai

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSession = async () => {
      // Menggunakan getSession() untuk mengambil session
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error("Error fetching session: ", error);
        navigate("/rest/v1/login");  // Jika ada error, arahkan ke halaman login
        return;
      }

      if (session) {
        setUser(session.user);  // Set user jika session ada
      } else {
        navigate("/rest/v1/login");  // Jika tidak ada user, arahkan ke halaman login
      }

      setLoading(false);  // Selesai mengambil session
    };

    fetchSession();  // Panggil fungsi untuk fetch session
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>);  // Menunggu data user selesai diambil
  }

  return (
    <div className="dashboard-container p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold">Welcome, {user?.email}</h1>  {/* Menampilkan email pengguna */}
      <div>
        <p>Welcome to the CMS Dashboard.</p>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            navigate("/rest/v1/login");  // Logout dan arahkan ke login
          }}
        
             className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
             
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
