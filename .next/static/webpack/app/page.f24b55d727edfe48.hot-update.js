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

/***/ "(app-pages-browser)/./src/containers/ProductsAndUsers/_components/PurchasedList/index.tsx":
/*!*****************************************************************************!*\
  !*** ./src/containers/ProductsAndUsers/_components/PurchasedList/index.tsx ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PurchasedList: function() { return /* binding */ PurchasedList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_purchaseCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/purchaseCard */ \"(app-pages-browser)/./src/components/purchaseCard/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ PurchasedList auto */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar PurchasedList = function() {\n    _s();\n    var purchaseList = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(redux) {\n        return redux.purchase;\n    }).purchaseList;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            role: \"list\",\n            className: \"-my-6 divide-y divide-gray-200\",\n            children: purchaseList.map(function(param) {\n                var id = param.id, title = param.title, image = param.image, price = param.price;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mt-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_purchaseCard__WEBPACK_IMPORTED_MODULE_1__.PurchaseCard, {\n                        title: title,\n                        imageSRC: image,\n                        price: price,\n                        id: id\n                    }, void 0, false, {\n                        fileName: \"/Users/faeze/Projects/shop/src/containers/ProductsAndUsers/_components/PurchasedList/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 88\n                    }, _this)\n                }, id, false, {\n                    fileName: \"/Users/faeze/Projects/shop/src/containers/ProductsAndUsers/_components/PurchasedList/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 57\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/faeze/Projects/shop/src/containers/ProductsAndUsers/_components/PurchasedList/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/faeze/Projects/shop/src/containers/ProductsAndUsers/_components/PurchasedList/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, _this);\n};\n_s(PurchasedList, \"ZIgv4czVfnde4/6x71WTc8SJQHU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = PurchasedList;\nvar _c;\n$RefreshReg$(_c, \"PurchasedList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250YWluZXJzL1Byb2R1Y3RzQW5kVXNlcnMvX2NvbXBvbmVudHMvUHVyY2hhc2VkTGlzdC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpRTtBQUV6QjtBQUVqQyxJQUFNRSxnQkFBYzs7SUFDekIsSUFBTSxlQUFpQkQsd0RBQVdBLENBQUMsU0FBQ0c7ZUFBVUEsTUFBTUMsUUFBUTtPQUFyREY7SUFHTCxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFFZiw0RUFBQ0M7WUFBR0MsTUFBSztZQUFPRixXQUFVO3NCQUV0QkosYUFBYU8sR0FBRyxDQUFDO29CQUFFQyxXQUFBQSxJQUFHQyxjQUFBQSxPQUFNQyxjQUFBQSxPQUFNQyxjQUFBQTtxQ0FBVSw4REFBQ0M7b0JBQUdSLFdBQVU7OEJBQWlCLDRFQUFDUCxrRUFBWUE7d0JBQUNZLE9BQU9BO3dCQUFPSSxVQUFVSDt3QkFBT0MsT0FBT0E7d0JBQU9ILElBQUlBOzs7Ozs7bUJBQXBFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRixFQUFDO0dBYllUOztRQUNZRCxvREFBV0E7OztLQUR2QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHJvZHVjdHNBbmRVc2Vycy9fY29tcG9uZW50cy9QdXJjaGFzZWRMaXN0L2luZGV4LnRzeD82MWEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQge1B1cmNoYXNlQ2FyZH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcHVyY2hhc2VDYXJkXCI7XG5cbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VkTGlzdD0oKT0+e1xuICBjb25zdCB7cHVyY2hhc2VMaXN0fSA9IHVzZVNlbGVjdG9yKChyZWR1eCkgPT4gcmVkdXgucHVyY2hhc2UpO1xuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBoLWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYmctd2hpdGUgcC02IHNoYWRvdy1tZCBtZDptdC0wIG1kOnctMS8zXCI+XG5cbiAgICAgICAgPHVsIHJvbGU9XCJsaXN0XCIgY2xhc3NOYW1lPVwiLW15LTYgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1cmNoYXNlTGlzdC5tYXAoKHtpZCx0aXRsZSxpbWFnZSxwcmljZSx9KT0+PGxpIGNsYXNzTmFtZT0nbXQtNicga2V5PXtpZH0gPjxQdXJjaGFzZUNhcmQgdGl0bGU9e3RpdGxlfSBpbWFnZVNSQz17aW1hZ2V9IHByaWNlPXtwcmljZX0gaWQ9e2lkfSAvPjwvbGk+KVxuICAgICAgICB9XG5cbiAgICAgICAgPC91bD48L2Rpdj4pXG59Il0sIm5hbWVzIjpbIlB1cmNoYXNlQ2FyZCIsInVzZVNlbGVjdG9yIiwiUHVyY2hhc2VkTGlzdCIsInB1cmNoYXNlTGlzdCIsInJlZHV4IiwicHVyY2hhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsInJvbGUiLCJtYXAiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJwcmljZSIsImxpIiwiaW1hZ2VTUkMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/containers/ProductsAndUsers/_components/PurchasedList/index.tsx\n"));

/***/ })

});