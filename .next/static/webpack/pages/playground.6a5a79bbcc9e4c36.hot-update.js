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

/***/ "./src/config/Config.ts":
/*!******************************!*\
  !*** ./src/config/Config.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ControlTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlTypes */ \"./src/config/ControlTypes.ts\");\n/* harmony import */ var _InputProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputProperties */ \"./src/config/InputProperties.ts\");\n\n\nclass Config {\n    // Getter method to access controlTypes\n    getControlTypes() {\n        return this.controlTypes;\n    }\n    constructor(){\n        this.controlTypes = _ControlTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        this.inputProperties = _InputProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL0NvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7QUFBMkQ7QUFDUTtBQUVuRSxNQUFNRTtJQVNKLHVDQUF1QztJQUNoQ0Msa0JBQWlDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDQyxZQUFZO0lBQzFCO0lBUkFDLGFBQWM7UUFDWixJQUFJLENBQUNELFlBQVksR0FBR0oscURBQVlBO1FBQ2hDLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSx3REFBZUE7SUFDeEM7QUFXRjtBQUVBLCtEQUFlQyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25maWcvQ29uZmlnLnRzPzRjZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xUeXBlcywgeyBDb250cm9sVHlwZSB9IGZyb20gXCIuL0NvbnRyb2xUeXBlc1wiO1xuaW1wb3J0IGlucHV0UHJvcGVydGllcywgeyBJbnB1dFByb3BlcnR5IH0gZnJvbSBcIi4vSW5wdXRQcm9wZXJ0aWVzXCI7XG5cbmNsYXNzIENvbmZpZyB7XG4gIGNvbnRyb2xUeXBlczogQ29udHJvbFR5cGVbXTtcbiAgICBpbnB1dFByb3BlcnRpZXM6IElucHV0UHJvcGVydHlbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRyb2xUeXBlcyA9IENvbnRyb2xUeXBlcztcbiAgICB0aGlzLmlucHV0UHJvcGVydGllcyA9IGlucHV0UHJvcGVydGllcztcbiAgfVxuXG4gIC8vIEdldHRlciBtZXRob2QgdG8gYWNjZXNzIGNvbnRyb2xUeXBlc1xuICBwdWJsaWMgZ2V0Q29udHJvbFR5cGVzKCk6IENvbnRyb2xUeXBlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xUeXBlcztcbiAgfVxuXG4gIHB1YmxpXG5cbiAgLy8gQWRkaXRpb25hbCBtZXRob2RzIG9yIHByb3BlcnRpZXMgaWYgcmVxdWlyZWRcbiAgLy8gLi4uXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcbiJdLCJuYW1lcyI6WyJDb250cm9sVHlwZXMiLCJpbnB1dFByb3BlcnRpZXMiLCJDb25maWciLCJnZXRDb250cm9sVHlwZXMiLCJjb250cm9sVHlwZXMiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/Config.ts\n"));

/***/ })

});