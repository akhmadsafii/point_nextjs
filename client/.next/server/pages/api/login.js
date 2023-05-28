/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(api)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    // console.log(req);\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        // Ganti URL sesuai dengan endpoint login di backend Laravel Anda\n        const apiUrl = `${\"http://127.0.0.1:8000/api\"}/login`;\n        console.log(apiUrl);\n        try {\n            console.log(apiUrl);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(apiUrl, {\n                username,\n                password\n            });\n            // Simpan token atau data lain yang diperlukan untuk autentikasi\n            res.status(200).json(response.data);\n        } catch (error) {\n            res.status(400).json({\n                error: error.message\n            });\n        }\n    } else {\n        res.status(405).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ1E7QUFFaEMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLG9CQUFvQjtJQUNsQixJQUFJRCxJQUFJRSxXQUFXLFFBQVE7UUFDdkIsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRSxHQUFHSixJQUFJSztRQUVuQyxpRUFBaUU7UUFDakUsTUFBTUMsU0FBUyxDQUFDLEVBQUVDLDJCQUErQkUsQ0FBQyxNQUFNLENBQUM7UUFDekRDLFFBQVFDLElBQUlMO1FBR1osSUFBSTtZQUNGSSxRQUFRQyxJQUFJTDtZQUNWLE1BQU1NLFdBQVcsTUFBTWYsaURBQVVnQixDQUFDUCxRQUFRO2dCQUFFSDtnQkFBVUM7WUFBUztZQUUvRCxnRUFBZ0U7WUFFaEVILElBQUlhLE9BQU8sS0FBS0MsS0FBS0gsU0FBU0k7UUFDbEMsRUFBRSxPQUFPQyxPQUFPO1lBQ1poQixJQUFJYSxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVFLE9BQU9BLE1BQU1DO1lBQVE7UUFDaEQ7SUFDSixPQUFPO1FBQ0hqQixJQUFJYSxPQUFPLEtBQUtLO0lBQ3BCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vIGNvbnNvbGUubG9nKHJlcSk7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgICAgICAvLyBHYW50aSBVUkwgc2VzdWFpIGRlbmdhbiBlbmRwb2ludCBsb2dpbiBkaSBiYWNrZW5kIExhcmF2ZWwgQW5kYVxuICAgICAgICBjb25zdCBhcGlVcmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9sb2dpbmA7XG4gICAgICAgIGNvbnNvbGUubG9nKGFwaVVybCk7XG4gICAgICAgIFxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYXBpVXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChhcGlVcmwsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuXG4gICAgICAgICAgICAvLyBTaW1wYW4gdG9rZW4gYXRhdSBkYXRhIGxhaW4geWFuZyBkaXBlcmx1a2FuIHVudHVrIGF1dGVudGlrYXNpXG5cbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ0b2FzdCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsImFwaVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ }),

/***/ "(api)/./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();