import axios from 'axios';

// Fungsi untuk menambahkan token ke header permintaan
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Fungsi untuk memeriksa apakah pengguna sudah login
const checkAuth = () => {
  // Periksa apakah ada token di localStorage atau di tempat penyimpanan lainnya
  const token = localStorage.getItem('token');

  // Setel token ke header permintaan
  setAuthToken(token);

  // Kembalikan true jika token ada, dan sebaliknya
  return !!token;
};

export default checkAuth;
