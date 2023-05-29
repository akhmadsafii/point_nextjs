import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import checkAuth from "../../utils/auth";
import Link from "next/link";
import {
    getAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
} from "../api/admins";
// import FormAdmin from "../../components/Admin/FormAdmin";

const Admin = () => {
    const [admins, setAdmins] = useState([]);
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = checkAuth();

        if (!isAuthenticated) {
            router.push("/login");
            toast.error("Terjadi kesalahan saat login. Mohon coba lagi.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            fetchAdmins();
        }
    }, [currentPage, perPage, search]);

    const fetchAdmins = async () => {
        try {
            const startIndex = (currentPage - 1) * perPage;
            const response = await getAdmins({
                perPage,
                search,
                page: currentPage,
            });
            setAdmins(response.data);
            setTotalPages(response.last_page);
        } catch (error) {
            console.error("Gagal mengambil daftar admin:", error);
            toast.error("Gagal mengambil daftar admin");
        }
    };

    const handleDeleteAdmin = async (adminId, event) => {
        try {
            // Tampilkan peringatan konfirmasi sebelum menghapus admin
            const confirmDelete = window.confirm(
                "Apakah Anda yakin ingin menghapus admin ini?"
            );
            if (!confirmDelete) {
                return; // Jika pengguna membatalkan penghapusan, keluar dari fungsi
            }

            const response = await deleteAdmin(adminId);
            if (response.status === 204) {
                toast.success("Admin berhasil dihapus", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                fetchAdmins();
            } else {
                toast.error("Gagal menghapus admin", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (error) {
            toast.error("Terjadi kesalahan saat menghapus admin", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handlePerPageChange = (event) => {
        setPerPage(event.target.value);
        setCurrentPage(1);
        fetchAdmins();
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        fetchAdmins();
    };

    const handleEditClick = (adminId) => {
        // console.log(adminId);
        localStorage.setItem('adminId', adminId);
        // console.log(localStorage.getItem("adminId"));
        router.push('/admins/form');
      };
    // const startPage = Math.max(1, currentPage - 2);
    // const endPage = Math.min(totalPages, currentPage + 2);

    return (
        <Layout>
            <div className="card">
                <div className="card-header border-0 pt-6">
                    <div className="card-title">
                        <div className="d-flex align-items-center position-relative my-1">
                            <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <rect
                                        opacity="0.5"
                                        x="17.0365"
                                        y="15.1223"
                                        width="8.15546"
                                        height="2"
                                        rx="1"
                                        transform="rotate(45 17.0365 15.1223)"
                                        fill="black"
                                    />
                                    <path
                                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearch}
                                className="form-control form-control-solid w-250px ps-15"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="card-toolbar">
                        <div
                            className="d-flex justify-content-end"
                            data-kt-customer-table-toolbar="base"
                        >
                            <button
                                type="button"
                                className="btn btn-light-primary me-3"
                            >
                                {/* begin::Svg Icon | path: icons/duotune/arrows/arr078.svg */}
                                <span className="svg-icon svg-icon-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <rect
                                            opacity="0.3"
                                            x="12.75"
                                            y="4.25"
                                            width="12"
                                            height="2"
                                            rx="1"
                                            transform="rotate(90 12.75 4.25)"
                                            fill="black"
                                        />
                                        <path
                                            d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                            fill="#C4C4C4"
                                        />
                                    </svg>
                                </span>
                                {/* end::Svg Icon */}Export
                            </button>
                            <Link href="/admins/form" passHref>
                                <button
                                    type="button"
                                    className="btn btn-light-primary"
                                >
                                    Tambah Admin
                                </button>
                            </Link>
                        </div>
                        <div
                            className="d-flex justify-content-end align-items-center d-none"
                            data-kt-customer-table-toolbar="selected"
                        >
                            <div className="fw-bolder me-5">
                                <span
                                    className="me-2"
                                    data-kt-customer-table-select="selected_count"
                                ></span>
                                Selected
                            </div>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-kt-customer-table-select="delete_selected"
                            >
                                Delete Selected
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0">
                    <div className="table-responsive">
                        <table
                            className="table align-middle table-row-dashed fs-6 gy-5"
                            id="kt_customers_table"
                        >
                            <thead>
                                <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                    <th className="w-10px pe-2">
                                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                data-kt-check="true"
                                                data-kt-check-target="#kt_customers_table .form-check-input"
                                                value="1"
                                            />
                                        </div>
                                    </th>
                                    <th className="min-w-125px">Nama</th>
                                    <th className="min-w-125px">Email</th>
                                    <th className="min-w-125px">Telepon</th>
                                    <th className="min-w-125px">Alamat</th>
                                    <th className="min-w-125px">
                                        Created Date
                                    </th>
                                    <th className="text-end min-w-70px">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="fw-bold text-gray-600">
                                {admins.map((admin) => (
                                    <tr key={admin.id}>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="1"
                                                />
                                            </div>
                                        </td>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                        <td>{admin.phone}</td>
                                        <td>{admin.address}</td>
                                        <td>{admin.created_at}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-sm btn-light btn-active-light-primary dropdown-toggle"
                                                    type="button"
                                                    id="actionsDropdown"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Actions
                                                </button>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="actionsDropdown"
                                                >
                                                    <li>
                                                        <a href="#"
                                                            onClick={() => handleEditClick(admin.id)}
                                                            className="dropdown-item"
                                                        >
                                                            Edit
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleDeleteAdmin(
                                                                    admin.id,
                                                                    e
                                                                );
                                                            }}
                                                        >
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                            <div
                                className="dataTables_length"
                                id="kt_customers_table_length"
                            >
                                <label>
                                    <select
                                        value={perPage}
                                        onChange={handlePerPageChange}
                                    >
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="200">200</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                            <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="kt_customers_table_paginate"
                            >
                                <ul className="pagination">
                                    <li
                                        className={`page-item ${
                                            currentPage === 1 ? "disabled" : ""
                                        }`}
                                    >
                                        <a
                                            href="#"
                                            className="page-link"
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage - 1
                                                )
                                            }
                                        >
                                            Previous
                                        </a>
                                    </li>
                                    {[...Array(totalPages)].map((_, index) => {
                                        const page = index + 1;
                                        const isCurrentPage =
                                            page === currentPage;
                                        const isWithinRange =
                                            Math.abs(page - currentPage) <= 2;

                                        if (
                                            page === 1 ||
                                            page === totalPages ||
                                            isCurrentPage ||
                                            isWithinRange
                                        ) {
                                            return (
                                                <li
                                                    key={page}
                                                    className={`page-item ${
                                                        isCurrentPage
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                >
                                                    <a
                                                        href="#"
                                                        className="page-link"
                                                        onClick={() =>
                                                            handlePageChange(
                                                                page
                                                            )
                                                        }
                                                    >
                                                        {page}
                                                    </a>
                                                </li>
                                            );
                                        }

                                        return null;
                                    })}
                                    <li
                                        className={`page-item ${
                                            currentPage === totalPages
                                                ? "disabled"
                                                : ""
                                        }`}
                                    >
                                        <a
                                            href="#"
                                            className="page-link"
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage + 1
                                                )
                                            }
                                        >
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Admin;
