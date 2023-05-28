import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const Main = ({ children, title }) => {
    return (
        <div className="d-flex flex-column flex-root">
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue &amp; Laravel versions. Grab your copy now and get life-time updates for free."
                />
                <meta
                    name="keywords"
                    content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="Metronic - Bootstrap 5 HTML, VueJS, React, Angular &amp; Laravel Admin Dashboard Theme"
                />
                <meta
                    property="og:url"
                    content="https://keenthemes.com/metronic"
                />
                <meta property="og:site_name" content="Keenthemes | Metronic" />
                <link
                    rel="canonical"
                    href="https://preview.keenthemes.com/metronic8"
                />
                <link rel="shortcut icon" href="assets/media/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
                />
                <link
                    href="/assets/css/plugins.bundle.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="/assets/css/style.bundle.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Head>
            {children}
            <script src="assets/js/plugins.bundle.js"></script>
            <script src="assets/js/scripts.bundle.js"></script>
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default Main;
