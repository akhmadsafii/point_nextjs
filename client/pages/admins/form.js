import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { getAdminId, createAdmin, updateAdmin } from "../api/admins";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Form = ({ onSubmit }) => {
    const [adminData, setAdminData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (adminData.id) {
                // Proses update admin
                const updatedAdmin = await updateAdmin(adminData.id, adminData);
                console.log("Admin updated:", updatedAdmin);
                toast.success("Admin berhasil diperbarui");
            } else {
                // Proses create admin
                const createdAdmin = await createAdmin(adminData);
                console.log("Admin created:", createdAdmin);
                toast.success("Admin berhasil ditambahkan");
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            toast.error("Terjadi kesalahan saat memproses admin");
        }
        // Setelah pengiriman berhasil, Anda dapat mengarahkan pengguna ke halaman lain
        // router.push('/admins'); // Contoh penggunaan router.push untuk mengarahkan ke halaman daftar admin
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        const adminId = localStorage.getItem("adminId");
        if (adminId) {
            localStorage.removeItem("adminId");
            const getAdminData = async () => {
                try {
                    const response = await getAdminId(adminId);
                    const adminData = response.data;
                    console.log(adminData);
                    setAdminData(adminData);
                } catch (error) {
                    // console.log("Gagal mengambil data admin:", error);
                    toast.error("Gagal mengambil data admin:", error);
                }
            };

            getAdminData();
        }
    }, []);

    return (
        <Layout>
            <div className="card mb-5 mb-xl-10">
                <div
                    className="card-header border-0 cursor-pointer"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_account_profile_details"
                    aria-expanded="true"
                    aria-controls="kt_account_profile_details"
                >
                    <div className="card-title m-0">
                        <h3 className="fw-bolder m-0">Profile Details</h3>
                    </div>
                </div>
                <div id="kt_account_profile_details" className="collapse show">
                    <form
                        id="kt_account_profile_details_form"
                        className="form"
                        onSubmit={handleSubmit}
                    >
                        <div className="card-body border-top p-9">
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    Avatar
                                </label>
                                <div className="col-lg-8">
                                    <div
                                        className="image-input image-input-outline"
                                        data-kt-image-input="true"
                                        style={{
                                            backgroundImage:
                                                "url(/assets/media/blank.png)",
                                        }}
                                    >
                                        <div
                                            className="image-input-wrapper w-125px h-125px"
                                            style={{
                                                backgroundImage:
                                                    "url(/assets/media/150-26.jpg)",
                                            }}
                                        ></div>
                                        <label
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="change"
                                            data-bs-toggle="tooltip"
                                            title="Change avatar"
                                        >
                                            <i className="bi bi-pencil-fill fs-7"></i>
                                            <input
                                                type="file"
                                                name="avatar"
                                                accept=".png, .jpg, .jpeg"
                                            />
                                            <input
                                                type="hidden"
                                                name="avatar_remove"
                                            />
                                        </label>
                                        <span
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="cancel"
                                            data-bs-toggle="tooltip"
                                            title="Cancel avatar"
                                        >
                                            <i className="bi bi-x fs-2"></i>
                                        </span>
                                        <span
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="remove"
                                            data-bs-toggle="tooltip"
                                            title="Remove avatar"
                                        >
                                            <i className="bi bi-x fs-2"></i>
                                        </span>
                                    </div>
                                    <div className="form-text">
                                        Allowed file types: png, jpg, jpeg.
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-bold fs-6">
                                    Full Name
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control form-control-lg form-control-solid"
                                        placeholder="Nama Admin"
                                        value={adminData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-bold fs-6">
                                    Email
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control form-control-lg form-control-solid"
                                        placeholder="Email Admin"
                                        value={adminData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">
                                        Contact Phone
                                    </span>
                                    <i
                                        className="fas fa-exclamation-circle ms-1 fs-7"
                                        data-bs-toggle="tooltip"
                                        title="Phone number must be active"
                                    ></i>
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control form-control-lg form-control-solid"
                                        placeholder="Phone number"
                                        value={adminData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">
                                        Jenis Kelamin
                                    </span>
                                    <i
                                        className="fas fa-exclamation-circle ms-1 fs-7"
                                        data-bs-toggle="tooltip"
                                        title="gender"
                                    ></i>
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <select
                                        name="gender"
                                        data-placeholder="Pilih Kelamin..."
                                        className="form-select form-select-solid form-select-lg fw-bold"
                                        value={adminData.gender} // Menggunakan adminData.phone sebagai value
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Pilih Jenis Kelamin...
                                        </option>
                                        <option value="m">Laki - laki</option>
                                        <option value="f">Perempuan</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">Alamat</span>
                                    <i
                                        className="fas fa-exclamation-circle ms-1 fs-7"
                                        data-bs-toggle="tooltip"
                                        title="Phone number must be active"
                                    ></i>
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <textarea
                                        className="form-control form-control-lg form-control-solid"
                                        rows={3}
                                        name="address"
                                        value={adminData.address}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">Password</span>
                                    <i
                                        className="fas fa-exclamation-circle ms-1 fs-7"
                                        data-bs-toggle="tooltip"
                                        title="Password"
                                    ></i>
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <div className="input-group">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            className="form-control form-control-lg form-control-solid"
                                            placeholder="Password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <span
                                            className="input-group-text"
                                            onClick={toggleShowPassword}
                                        >
                                            <i
                                                className={`fas ${
                                                    showPassword
                                                        ? "fa-eye-slash"
                                                        : "fa-eye"
                                                }`}
                                            ></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-bold fs-6">
                                    Confirm Password
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        className="form-control form-control-lg form-control-solid"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                            <button
                                type="reset"
                                className="btn btn-light btn-active-light-primary me-2"
                            >
                                Discard
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                id="kt_account_profile_details_submit"
                            >
                                {adminData.id ? "Update" : "Save"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Form;
