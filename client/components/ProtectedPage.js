import { useEffect } from 'react';
import { useRouter } from 'next/router';
import checkAuth from '../utils/auth';

const ProtectedPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Periksa autentikasi saat komponen dipasang atau setiap perubahan komponen
    const isAuthenticated = checkAuth();

    // Jika tidak ada autentikasi, arahkan pengguna ke halaman login
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, []);

  // Tampilkan konten halaman yang dilindungi di sini

  return <div>Protected Page</div>;
};

export default ProtectedPage;
