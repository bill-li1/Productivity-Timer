"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layouts/main.tsx":
/*!*************************************!*\
  !*** ./components/layouts/main.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar */ \"./components/navbar.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar Main = function(param) {\n    var children = param.children, router = param.router;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        as: \"main\",\n        border: \"3px solid blue\",\n        h: \"100%\",\n        __source: {\n            fileName: \"/Users/bill.li/Projects/ts/components/layouts/main.tsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/layouts/main.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\",\n                        __source: {\n                            fileName: \"/Users/bill.li/Projects/ts/components/layouts/main.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        border: \"3px solid blue\",\n                        __source: {\n                            fileName: \"/Users/bill.li/Projects/ts/components/layouts/main.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \" Pomdoro Timer - Homepage \"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                path: router.asPath,\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/layouts/main.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                maxW: \"container.md\",\n                pt: 14,\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/layouts/main.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: children\n            })\n        ]\n    }));\n};\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvbWFpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFDbUI7O0FBRWpELEdBQUssQ0FBQ0ksSUFBSSxHQUFHLFFBQVEsUUFBa0IsQ0FBQztRQUF4QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTtJQUM5QixNQUFNLHVFQUNISixpREFBRztRQUFDSyxFQUFFLEVBQUMsQ0FBTTtRQUFDQyxNQUFNLEVBQUMsQ0FBZ0I7UUFBQ0MsQ0FBQyxFQUFDLENBQU07Ozs7Ozs7O2tGQUM1Q1Qsa0RBQUk7Ozs7Ozs7O3lGQUNGVSxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFDLENBQXFDOzs7Ozs7Ozt5RkFDbEVDLENBQUs7d0JBQUNMLE1BQU0sRUFBQyxDQUFnQjs7Ozs7OztrQ0FBQyxDQUEwQjs7OztpRkFHMURQLCtDQUFNO2dCQUFDYSxJQUFJLEVBQUVSLE1BQU0sQ0FBQ1MsTUFBTTs7Ozs7Ozs7aUZBRTFCWix1REFBUztnQkFBQ2EsSUFBSSxFQUFDLENBQWM7Z0JBQUNDLEVBQUUsRUFBRSxFQUFFOzs7Ozs7OzBCQUNsQ1osUUFBUTs7OztBQUlqQixDQUFDO0tBZktELElBQUk7QUFpQlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL21haW4udHN4P2Y4NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9uYXZiYXJcIlxuaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5cbmNvbnN0IE1haW4gPSAoeyBjaGlsZHJlbiwgcm91dGVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwibWFpblwiIGJvcmRlcj1cIjNweCBzb2xpZCBibHVlXCIgaD1cIjEwMCVcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8dGl0bGUgYm9yZGVyPVwiM3B4IHNvbGlkIGJsdWVcIj4gUG9tZG9ybyBUaW1lciAtIEhvbWVwYWdlIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxOYXZiYXIgcGF0aD17cm91dGVyLmFzUGF0aH0gLz5cblxuICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLm1kXCIgcHQ9ezE0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJCb3giLCJDb250YWluZXIiLCJNYWluIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJhcyIsImJvcmRlciIsImgiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInBhdGgiLCJhc1BhdGgiLCJtYXhXIiwicHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/main.tsx\n");

/***/ })

});