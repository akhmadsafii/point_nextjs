import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`; // Sesuaikan dengan URL backend Laravel Anda

// Mengambil daftar admin
export const getAdmins = async ({ perPage, search, page }) => {
    try {
        const response = await axios.get(`${API_URL}/admins`, {
            params: {
                perPage,
                search,
                page,
            },
        });

        return {
            currentPage: response.data.current_page,
            data: response.data.data,
            per_page: response.data.per_page,
            total: response.data.total,
            last_page: response.data.last_page,
            // Informasi lainnya seperti first_page_url, last_page, dll.
        };
    } catch (error) {
        console.error("Gagal mengambil daftar admin:", error);
        throw new Error("Gagal mengambil daftar admin");
    }
};

// Membuat admin baru
export const createAdmin = (adminData) => {
    console.log(adminData);
    return axios.post(`${API_URL}/admins`, adminData);
};

// Memperbarui admin berdasarkan ID
export const updateAdmin = (adminId, adminData) => {
    console.log('proses update');
    return axios.put(`${API_URL}/admins/${adminId}`, adminData);
};

// Mendapatkan admin berdasarkan ID
export const getAdminId = (adminId) => {
    console.log(adminId);
    return axios.get(`${API_URL}/admins/${adminId}`);
};

// Menghapus admin berdasarkan ID
export const deleteAdmin = (adminId) => {
    return axios.delete(`${API_URL}/admins/${adminId}`);
};
