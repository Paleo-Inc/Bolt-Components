"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/playground",{

/***/ "./src/config/ControlTypes.ts":
/*!************************************!*\
  !*** ./src/config/ControlTypes.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n// Define an interface for the control types\n// Define the array with the specified interface\nconst controlTypes = [\n    {\n        type: \"text\"\n    },\n    {\n        type: \"number\"\n    },\n    {\n        type: \"email\"\n    },\n    {\n        type: \"password\"\n    },\n    {\n        type: \"textarea\"\n    },\n    {\n        type: \"url\"\n    },\n    {\n        type: \"checkbox\"\n    },\n    {\n        type: \"switch\"\n    },\n    {\n        type: \"color\"\n    },\n    {\n        type: \"select\"\n    },\n    {\n        type: \"range\"\n    },\n    {\n        type: \"file\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ControlTypes);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL0NvbnRyb2xUeXBlcy50cyIsIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBaUI1QyxnREFBZ0Q7QUFDaEQsTUFBTUEsZUFBOEI7SUFDbEM7UUFBRUMsTUFBTTtJQUFPO0lBQ2Y7UUFBRUEsTUFBTTtJQUFTO0lBQ2pCO1FBQUVBLE1BQU07SUFBUTtJQUNoQjtRQUFFQSxNQUFNO0lBQVc7SUFDbkI7UUFBRUEsTUFBTTtJQUFXO0lBQ25CO1FBQUVBLE1BQU07SUFBTTtJQUNkO1FBQUVBLE1BQU07SUFBVztJQUNuQjtRQUFFQSxNQUFNO0lBQVM7SUFDakI7UUFBRUEsTUFBTTtJQUFRO0lBQ2hCO1FBQUVBLE1BQU07SUFBUztJQUNqQjtRQUFFQSxNQUFNO0lBQVE7SUFDaEI7UUFBRUEsTUFBTTtJQUFPO0NBQ2hCO0FBRUQsK0RBQWVDLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZy9Db250cm9sVHlwZXMudHM/ZDFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmUgYW4gaW50ZXJmYWNlIGZvciB0aGUgY29udHJvbCB0eXBlc1xuaW50ZXJmYWNlIENvbnRyb2xUeXBlIHtcbiAgdHlwZTpcbiAgICB8IFwidGV4dFwiXG4gICAgfCBcIm51bWJlclwiXG4gICAgfCBcImVtYWlsXCJcbiAgICB8IFwicGFzc3dvcmRcIlxuICAgIHwgXCJ0ZXh0YXJlYVwiXG4gICAgfCBcInVybFwiXG4gICAgfCBcImNoZWNrYm94XCJcbiAgICB8IFwic3dpdGNoXCJcbiAgICB8IFwiY29sb3JcIlxuICAgIHwgXCJzZWxlY3RcIlxuICAgIHwgXCJyYW5nZVwiXG4gICAgfCBcImZpbGVcIjtcbn1cblxuLy8gRGVmaW5lIHRoZSBhcnJheSB3aXRoIHRoZSBzcGVjaWZpZWQgaW50ZXJmYWNlXG5jb25zdCBjb250cm9sVHlwZXM6IENvbnRyb2xUeXBlW10gPSBbXG4gIHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gIHsgdHlwZTogXCJlbWFpbFwiIH0sXG4gIHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gIHsgdHlwZTogXCJ0ZXh0YXJlYVwiIH0sXG4gIHsgdHlwZTogXCJ1cmxcIiB9LFxuICB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICB7IHR5cGU6IFwic3dpdGNoXCIgfSxcbiAgeyB0eXBlOiBcImNvbG9yXCIgfSxcbiAgeyB0eXBlOiBcInNlbGVjdFwiIH0sXG4gIHsgdHlwZTogXCJyYW5nZVwiIH0sXG4gIHsgdHlwZTogXCJmaWxlXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xUeXBlcztcbiJdLCJuYW1lcyI6WyJjb250cm9sVHlwZXMiLCJ0eXBlIiwiQ29udHJvbFR5cGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/ControlTypes.ts\n"));

/***/ })

});