"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/purchaseCard/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/purchaseCard/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PurchaseCard: function() { return /* binding */ PurchaseCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _features_pruchaseSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/pruchaseSlice */ \"(app-pages-browser)/./src/features/pruchaseSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ PurchaseCard auto */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar PurchaseCard = function(param) {\n    var title = param.title, price = param.price, imageSRC = param.imageSRC, id = param.id;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var handleClickOnSelectedPurchase = function() {\n        dispatch((0,_features_pruchaseSlice__WEBPACK_IMPORTED_MODULE_2__.removeFromPurchase)(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex py-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-24 w-24 flex-shrink-0  overflow-hidden rounded-md border border-gray-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    width: 60,\n                    height: 60,\n                    src: imageSRC,\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-4 flex flex-1 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between text-base font-medium text-gray-900\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"ml-4\",\n                                    children: price\n                                }, void 0, false, {\n                                    fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-1 items-end justify-between text-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"font-medium text-indigo-600 hover:text-indigo-500\",\n                                onClick: handleClickOnSelectedPurchase,\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/faeze/Projects/shop/src/components/purchaseCard/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 12\n    }, _this);\n};\n_s(PurchaseCard, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = PurchaseCard;\nvar _c;\n$RefreshReg$(_c, \"PurchaseCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3B1cmNoYXNlQ2FyZC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFK0I7QUFDUztBQUN3QjtBQUV6RCxJQUFNRyxlQUFhO1FBQUVDLGNBQUFBLE9BQU1DLGNBQUFBLE9BQU1DLGlCQUFBQSxVQUFTQyxXQUFBQTs7SUFFakQsSUFBTUMsV0FBU1Asd0RBQVdBO0lBQ3RCLElBQU1RLGdDQUE4QjtRQUNoQ0QsU0FBU04sMkVBQWtCQSxDQUFDSztJQUNoQztJQUNBLHFCQUFPLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDbEIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDWCxrREFBS0E7b0JBQUNZLE9BQU87b0JBQUlDLFFBQVE7b0JBQUlDLEtBQUtSO29CQUM5QlMsS0FBS1g7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDTTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO2tDQUVHLDRFQUFDQTs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLOzhDQUNHLDRFQUFDQzt3Q0FBRUMsTUFBSztrREFBS2Q7Ozs7Ozs7Ozs7OzhDQUVqQiw4REFBQ2U7b0NBQUVSLFdBQVU7OENBQVFOOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJN0IsOERBQUNLO3dCQUFJQyxXQUFVO2tDQUVYLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ1M7Z0NBQU9DLE1BQUs7Z0NBQVNWLFdBQVU7Z0NBQW9EVyxTQUFTYjswQ0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEosRUFBQztHQWhDWU47O1FBRUVGLG9EQUFXQTs7O0tBRmJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3B1cmNoYXNlQ2FyZC9pbmRleC50c3g/NzRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7cmVtb3ZlRnJvbVB1cmNoYXNlfSBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvcHJ1Y2hhc2VTbGljZVwiO1xuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VDYXJkPSh7dGl0bGUscHJpY2UsaW1hZ2VTUkMsaWR9KT0+e1xuXG5jb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPblNlbGVjdGVkUHVyY2hhc2U9KCk9PntcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbVB1cmNoYXNlKGlkKSlcbiAgICB9XG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS02XCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMjQgdy0yNCBmbGV4LXNocmluay0wICBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezYwfSBoZWlnaHQ9ezYwfSBzcmM9e2ltYWdlU1JDfVxuICAgICAgICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBmbGV4IGZsZXgtMSBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC00XCI+e3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIiBvbkNsaWNrPXtoYW5kbGVDbGlja09uU2VsZWN0ZWRQdXJjaGFzZX0+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+PC9kaXY+KVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZURpc3BhdGNoIiwicmVtb3ZlRnJvbVB1cmNoYXNlIiwiUHVyY2hhc2VDYXJkIiwidGl0bGUiLCJwcmljZSIsImltYWdlU1JDIiwiaWQiLCJkaXNwYXRjaCIsImhhbmRsZUNsaWNrT25TZWxlY3RlZFB1cmNoYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJoMyIsImEiLCJocmVmIiwicCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/purchaseCard/index.tsx\n"));

/***/ })

});