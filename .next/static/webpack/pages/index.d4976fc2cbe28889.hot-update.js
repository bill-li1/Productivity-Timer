"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/quotes.tsx":
/*!*******************************!*\
  !*** ./components/quotes.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/quotes.json */ \"./util/quotes.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Quote = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        text: \"\",\n        author: \"\"\n    }), quote = ref[0], setQuotes = ref[1];\n    var getQuotes = function() {\n        var quoteIndex = Math.floor(Math.random() * _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        if (_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex].text !== null && _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex].author !== null) {\n            console.log(_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex]);\n            setQuotes(_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex]);\n        } else {\n            getQuotes;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getQuotes();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        __source: {\n            fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                onClick: getQuotes,\n                p: 3,\n                pb: 5,\n                textAlign: \"center\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"whiteAlpha.800\", \"whiteAlpha.300\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.text\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                onClick: getQuotes,\n                mr: 0,\n                ml: \"auto\",\n                pb: 2,\n                pt: 2,\n                maxW: \"250px\",\n                overflow: \"hidden\",\n                textOverflow: \"ellipsis\",\n                whiteSpace: \"nowrap\",\n                textAlign: \"center\",\n                transform: \"auto\",\n                translateY: \"-25%\",\n                translateX: \"-15%\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#FFDDCD\", \"#5C4033\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.author\n            })\n        ]\n    }));\n};\n_s(Quote, \"EV4mO7BVq2Yhqo546mBnzfLoVvk=\");\n_c = Quote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\nvar _c;\n$RefreshReg$(_c, \"Quote\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1b3Rlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlEO0FBQ2Q7QUFDQTs7O0FBRTNDLEdBQUssQ0FBQ0ssS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQzs7SUFDbkIsR0FBSyxDQUFzQkgsR0FHekIsR0FIeUJBLCtDQUFRLENBQVMsQ0FBQztRQUMzQ0ksSUFBSSxFQUFFLENBQUU7UUFDUkMsTUFBTSxFQUFFLENBQUU7SUFDWixDQUFDLEdBSE1DLEtBQUssR0FBZU4sR0FHekIsS0FIWU8sU0FBUyxHQUFJUCxHQUd6QjtJQUVGLEdBQUssQ0FBQ1EsU0FBUyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7UUFDdkIsR0FBSyxDQUFDQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sS0FBS1YscURBQWdCO1FBQzlELEVBQUUsRUFDQUEsOENBQVMsQ0FBQ08sVUFBVSxFQUFFTCxJQUFJLEtBQUssSUFBSSxJQUNuQ0YsOENBQVMsQ0FBQ08sVUFBVSxFQUFFSixNQUFNLEtBQUssSUFBSSxFQUNyQyxDQUFDO1lBQ0RTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYiw4Q0FBUyxDQUFDTyxVQUFVO1lBQ2hDRixTQUFTLENBQUNMLDhDQUFTLENBQUNPLFVBQVU7UUFDaEMsQ0FBQyxNQUFNLENBQUM7WUFDTkQsU0FBUztRQUNYLENBQUM7SUFDSCxDQUFDO0lBRURQLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZPLFNBQVM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSx1RUFDSFYsaURBQUc7Ozs7Ozs7O2lGQUNEQSxpREFBRztnQkFDRmtCLFlBQVksRUFBQyxDQUFJO2dCQUNqQkMsT0FBTyxFQUFFVCxTQUFTO2dCQUNsQlUsQ0FBQyxFQUFFLENBQUM7Z0JBQ0pDLEVBQUUsRUFBRSxDQUFDO2dCQUNMQyxTQUFTLEVBQUMsQ0FBUTtnQkFDbEJDLEVBQUUsRUFBRXRCLG1FQUFpQixDQUFDLENBQWdCLGlCQUFFLENBQWdCOzs7Ozs7OzBCQUV2RE8sS0FBSyxDQUFDRixJQUFJOztpRkFFWk4saURBQUc7Z0JBQ0ZrQixZQUFZLEVBQUMsQ0FBSTtnQkFDakJDLE9BQU8sRUFBRVQsU0FBUztnQkFDbEJjLEVBQUUsRUFBRSxDQUFDO2dCQUNMQyxFQUFFLEVBQUUsQ0FBTTtnQkFDVkosRUFBRSxFQUFFLENBQUM7Z0JBQ0xLLEVBQUUsRUFBRSxDQUFDO2dCQUNMQyxJQUFJLEVBQUMsQ0FBTztnQkFDWkMsUUFBUSxFQUFDLENBQVE7Z0JBQ2pCQyxZQUFZLEVBQUMsQ0FBVTtnQkFDdkJDLFVBQVUsRUFBQyxDQUFRO2dCQUNuQlIsU0FBUyxFQUFDLENBQVE7Z0JBQ2xCUyxTQUFTLEVBQUMsQ0FBTTtnQkFDaEJDLFVBQVUsRUFBQyxDQUFNO2dCQUNqQkMsVUFBVSxFQUFDLENBQU07Z0JBQ2pCVixFQUFFLEVBQUV0QixtRUFBaUIsQ0FBQyxDQUFTLFVBQUUsQ0FBUzs7Ozs7OzswQkFFekNPLEtBQUssQ0FBQ0QsTUFBTTs7OztBQUlyQixDQUFDO0dBeERLRixLQUFLO0tBQUxBLEtBQUs7QUErRFgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdW90ZXMudHN4PzE2YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFsbFF1b3RlcyBmcm9tIFwiLi4vdXRpbC9xdW90ZXMuanNvblwiXG5cbmNvbnN0IFF1b3RlID0gKCkgPT4ge1xuICBjb25zdCBbcXVvdGUsIHNldFF1b3Rlc10gPSB1c2VTdGF0ZTxJUXVvdGU+KHtcbiAgICB0ZXh0OiBcIlwiLFxuICAgIGF1dGhvcjogXCJcIixcbiAgfSlcblxuICBjb25zdCBnZXRRdW90ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcXVvdGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbFF1b3Rlcy5sZW5ndGgpXG4gICAgaWYgKFxuICAgICAgYWxsUXVvdGVzW3F1b3RlSW5kZXhdLnRleHQgIT09IG51bGwgJiZcbiAgICAgIGFsbFF1b3Rlc1txdW90ZUluZGV4XS5hdXRob3IgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKGFsbFF1b3Rlc1txdW90ZUluZGV4XSlcbiAgICAgIHNldFF1b3RlcyhhbGxRdW90ZXNbcXVvdGVJbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGdldFF1b3Rlc1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UXVvdGVzKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEJveFxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIG9uQ2xpY2s9e2dldFF1b3Rlc31cbiAgICAgICAgcD17M31cbiAgICAgICAgcGI9ezV9XG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlQWxwaGEuODAwXCIsIFwid2hpdGVBbHBoYS4zMDBcIil9XG4gICAgICA+XG4gICAgICAgIHtxdW90ZS50ZXh0fVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgb25DbGljaz17Z2V0UXVvdGVzfVxuICAgICAgICBtcj17MH1cbiAgICAgICAgbWw9e1wiYXV0b1wifVxuICAgICAgICBwYj17Mn1cbiAgICAgICAgcHQ9ezJ9XG4gICAgICAgIG1heFc9XCIyNTBweFwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgdGV4dE92ZXJmbG93PVwiZWxsaXBzaXNcIlxuICAgICAgICB3aGl0ZVNwYWNlPVwibm93cmFwXCJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgdHJhbnNmb3JtPVwiYXV0b1wiXG4gICAgICAgIHRyYW5zbGF0ZVk9XCItMjUlXCJcbiAgICAgICAgdHJhbnNsYXRlWD1cIi0xNSVcIlxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCIjRkZERENEXCIsIFwiIzVDNDAzM1wiKX1cbiAgICAgID5cbiAgICAgICAge3F1b3RlLmF1dGhvcn1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmludGVyZmFjZSBJUXVvdGUge1xuICB0ZXh0OiBTdHJpbmdcbiAgYXV0aG9yOiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVcbiJdLCJuYW1lcyI6WyJCb3giLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWxsUXVvdGVzIiwiUXVvdGUiLCJ0ZXh0IiwiYXV0aG9yIiwicXVvdGUiLCJzZXRRdW90ZXMiLCJnZXRRdW90ZXMiLCJxdW90ZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImJvcmRlclJhZGl1cyIsIm9uQ2xpY2siLCJwIiwicGIiLCJ0ZXh0QWxpZ24iLCJiZyIsIm1yIiwibWwiLCJwdCIsIm1heFciLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2xhdGVZIiwidHJhbnNsYXRlWCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/quotes.tsx\n");

/***/ })

});