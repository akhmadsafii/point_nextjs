import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;

        // Ganti URL sesuai dengan endpoint login di backend Laravel Anda
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;
        try {
          console.log(apiUrl);
            const response = await axios.post(apiUrl, { username, password });

            // Simpan token atau data lain yang diperlukan untuk autentikasi

            res.status(200).json(response.data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(405).end();
    }
}
