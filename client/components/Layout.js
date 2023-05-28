import React from "react";
import Main from "./Main";
import Topnav from "./Topnav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const styles = {
    wrapper: {
      minHeight: '100vh',
      position: 'relative',
    },
    content: {
      flexGrow: 1,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
  };

const Layout = ({ children }) => {
    return (
        <Main title="Login - Nama Proyek Anda">

            <div className="page d-flex flex-row flex-column-fluid">
                <Sidebar />
                <div
                    className="wrapper d-flex flex-column flex-row-fluid"
                    id="kt_wrapper" style={styles.wrapper}
                >
                    <Topnav />

                    <div
                        className="content d-flex flex-column flex-column-fluid"
                        id="kt_content" style={styles.content}
                    >
                        <div
                            className="post d-flex flex-column-fluid"
                            id="kt_post"
                        >
                            <div
                                id="kt_content_container"
                                className="container-xxl"
                            >
                                {children}
                            </div>
                        </div>
                    </div>
                    <Footer style={styles.footer}  />
                </div>
            </div>
        </Main>
    );
};

export default Layout;
