import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Main from '../components/Main';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = '/api/login';

    try {
      const response = await axios.post(apiUrl, { username, password });
      const token = response.data.token;

      // Simpan token di localStorage
      localStorage.setItem('token', token);
      setIsLoggedIn(true);

      // Arahkan pengguna ke halaman dashboard setelah berhasil login
      router.push('/dashboard');
    } catch (error) {
      toast.error('Terjadi kesalahan saat login. Mohon coba lagi.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // Cek jika pengguna sudah berhasil login sebelumnya, langsung arahkan ke halaman dashboard
  if (isLoggedIn) {
    router.push('/dashboard');
    return null;
  }

  return (
    <Main title="Login - Nama Proyek Anda">
      <div className="d-flex flex-column flex-root">
        <div
          className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
          style={{ backgroundImage: "url(/assets/media/illustrations/unitedpalms-1/14.png)" }}
        >
          <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <a href="../../demo13/dist/index.html" className="mb-12">
              <img alt="Logo" src="/assets/media/logo-1.svg" className="h-40px" />
            </a>
            <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              <div className="custom-form">
                <div className="text-center mb-10">
                  <h1 className="text-dark mb-3">Sign In to Metronic</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="fv-row mb-10">
                    <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                    <input
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      name="username"
                      autoComplete="off"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="fv-row mb-10">
                    <div className="d-flex flex-stack mb-2">
                      <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                      <a href="../../demo13/dist/authentication/flows/basic/password-reset.html" className="link-primary fs-6 fw-bolder">
                        Forgot Password ?
                      </a>
                    </div>
                    <input
                      className="form-control form-control-lg form-control-solid"
                      type="password"
                      name="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary w-100 mb-5"
                    >
                      <span className="indicator-label">Continue</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                    <div className="text-center text-muted text-uppercase fw-bolder mb-5">or</div>
                    <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                      <img alt="Logo" src="/assets/media/google-icon.svg" className="h-20px me-3" />
                      Continue with Google
                    </a>
                    <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                      <img alt="Logo" src="/assets/media/facebook-4.svg" className="h-20px me-3" />
                      Continue with Facebook
                    </a>
                    <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100">
                      <img alt="Logo" src="/assets/media/apple-black.svg" className="h-20px me-3" />
                      Continue with Apple
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Main>
  );
};

export default Login;
