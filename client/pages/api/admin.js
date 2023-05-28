import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`; // Sesuaikan dengan URL backend Laravel Anda

// Mengambil daftar produk
export const getProducts = () => {
  return axios.get(`${API_URL}/admins`);
};

// Membuat produk baru
export const createProduct = (productData) => {
  return axios.post(`${API_URL}/admins`, productData);
};

// Memperbarui produk berdasarkan ID
export const updateProduct = (productId, productData) => {
  return axios.put(`${API_URL}/admins/${productId}`, productData);
};

// Menghapus produk berdasarkan ID
export const deleteProduct = (productId) => {
  return axios.delete(`${API_URL}/admins/${productId}`);
};