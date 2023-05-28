import React from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sidebar = () => {
    const router = useRouter();

    const handleSignOut = () => {
        console.log("keluar");
        // Hapus token atau informasi autentikasi yang tersimpan
        localStorage.removeItem('token');

        // Mengarahkan pengguna ke halaman login
        router.push('/login');

        // Menampilkan Toast
        toast.success('Anda telah berhasil keluar!');
    };


    return (
        <div id="kt_aside" className="aside" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
            <div className="aside-toolbar flex-column-auto" id="kt_aside_toolbar">
                <div className="aside-user d-flex align-items-sm-center justify-content-center py-5">
                    <div className="symbol symbol-50px">
                        <img src="assets/media/150-26.jpg" alt="" />
                    </div>
                    <div className="aside-user-info flex-row-fluid flex-wrap ms-5">
                        <div className="d-flex">
                            <div className="flex-grow-1 me-2">
                                <a href="#" className="text-white text-hover-primary fs-6 fw-bold">Paul Melone</a>
                                <span className="text-gray-600 fw-bold d-block fs-8 mb-1">Python Dev</span>
                                <div className="d-flex align-items-center text-success fs-9">
                                    <span className="bullet bullet-dot bg-success me-1"></span>online</div>
                            </div>
                            <div className="me-n2">
                                <a href="#" className="btn btn-icon btn-sm btn-active-color-primary mt-n2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
                                    <span className="svg-icon svg-icon-muted svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="black" />
                                            <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="black" />
                                        </svg>
                                    </span>
                                </a>
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                                    <div className="menu-item px-3">
                                        <div className="menu-content d-flex align-items-center px-3">
                                            <div className="symbol symbol-50px me-5">
                                                <img alt="Logo" src="assets/media/avatars/150-26.jpg" />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <div className="fw-bolder d-flex align-items-center fs-5">Max Smith
                                                    <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                                                <a href="#" className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="separator my-2"></div>
                                    <div className="menu-item px-5">
                                        <a href="../../demo8/dist/account/overview.html" className="menu-link px-5">My Profile</a>
                                    </div>
                                    
                                    <div className="separator my-2"></div>

                                    <div className="menu-item px-5 my-1">
                                        <a href="../../demo8/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
                                    </div>
                                    <div className="menu-item px-5">
                                        <a className="menu-link px-5" onClick={handleSignOut}>Sign Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aside-menu flex-column-fluid">
                <div className="hover-scroll-overlay-y px-2 my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="5px">
                    <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
                        <div className="menu-item">
                            <div className="menu-content pb-2">
                                <span className="menu-section text-muted text-uppercase fs-8 ls-1">Dashboard</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <a className="menu-link" href="../../demo8/dist/index.html">
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                                            <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                                            <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                                            <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Default</span>
                            </a>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                            <span className="menu-link">
                                <span className="menu-icon">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                    <span className="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
                                            <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="menu-title">Account</span>
                                <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo8/dist/account/overview.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Admin</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo8/dist/account/settings.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Guru</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo8/dist/account/security.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Supervisor</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo8/dist/account/billing.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Siswa</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aside-footer flex-column-auto py-5" id="kt_aside_footer">
                <a href="../../demo8/dist/documentation/getting-started.html" className="btn btn-custom btn-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">
                    <span className="btn-label">Docs &amp; Components</span>
                    <span className="svg-icon btn-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z" fill="black" />
                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                        </svg>
                    </span>
                </a>
            </div>
            <ToastContainer />
        </div>
    );
};
export default Sidebar;