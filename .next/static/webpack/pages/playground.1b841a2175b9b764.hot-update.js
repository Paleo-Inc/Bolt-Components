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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ControlTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlTypes */ \"./src/config/ControlTypes.ts\");\n\nclass Config {\n    // Getter method to access controlTypes\n    getControlTypes() {\n        return this.controlTypes;\n    }\n    constructor(){\n        this.controlTypes = _ControlTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL0NvbmZpZy50cyIsIm1hcHBpbmdzIjoiOztBQUEyRDtBQUczRCxNQUFNQztJQU9KLHVDQUF1QztJQUNoQ0Msa0JBQWlDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDQyxZQUFZO0lBQzFCO0lBUEFDLGFBQWM7UUFDWixJQUFJLENBQUNELFlBQVksR0FBR0gscURBQVlBO0lBQ2xDO0FBU0Y7QUFFQSwrREFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uZmlnL0NvbmZpZy50cz80Y2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sVHlwZXMsIHsgQ29udHJvbFR5cGUgfSBmcm9tIFwiLi9Db250cm9sVHlwZXNcIjtcbmltcG9ydCBpbnB1dFByb3BlcnRpZXMsIHsgSW5wdXRQcm9wZXJ0eSB9IGZyb20gXCIuL0lucHV0UHJvcGVydGllc1wiO1xuXG5jbGFzcyBDb25maWcge1xuICBjb250cm9sVHlwZXM6IENvbnRyb2xUeXBlW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250cm9sVHlwZXMgPSBDb250cm9sVHlwZXM7XG4gIH1cblxuICAvLyBHZXR0ZXIgbWV0aG9kIHRvIGFjY2VzcyBjb250cm9sVHlwZXNcbiAgcHVibGljIGdldENvbnRyb2xUeXBlcygpOiBDb250cm9sVHlwZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sVHlwZXM7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIG1ldGhvZHMgb3IgcHJvcGVydGllcyBpZiByZXF1aXJlZFxuICAvLyAuLi5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnO1xuIl0sIm5hbWVzIjpbIkNvbnRyb2xUeXBlcyIsIkNvbmZpZyIsImdldENvbnRyb2xUeXBlcyIsImNvbnRyb2xUeXBlcyIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/Config.ts\n"));

/***/ })

});