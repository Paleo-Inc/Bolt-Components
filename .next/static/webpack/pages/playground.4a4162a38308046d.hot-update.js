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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ControlTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlTypes */ \"./src/config/ControlTypes.ts\");\n/* harmony import */ var _InputProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputProperties */ \"./src/config/InputProperties.ts\");\n/* harmony import */ var _FileTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileTypes */ \"./src/config/FileTypes.ts\");\n\n\n\nclass Config {\n    // Getter method to access controlTypes\n    getControlTypes() {\n        return this.controlTypes;\n    }\n    getInputProperties() {\n        return this.inputProperties;\n    }\n    getFileTypes() {\n        return this.fileTypes;\n    }\n    constructor(){\n        this.controlTypes = _ControlTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        this.inputProperties = _InputProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        this.fileTypes = _FileTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL0NvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQTJEO0FBQ1E7QUFDakI7QUFFbEQsTUFBTUc7SUFXSix1Q0FBdUM7SUFDaENDLGtCQUFpQztRQUN0QyxPQUFPLElBQUksQ0FBQ0MsWUFBWTtJQUMxQjtJQUVPQyxxQkFBc0M7UUFDM0MsT0FBTyxJQUFJLENBQUNMLGVBQWU7SUFDN0I7SUFFT00sZUFBaUM7UUFDdEMsT0FBTyxJQUFJLENBQUNDLFNBQVM7SUFDdkI7SUFqQkFDLGFBQWM7UUFDWixJQUFJLENBQUNKLFlBQVksR0FBR0wscURBQVlBO1FBQ2hDLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSx3REFBZUE7UUFDdEMsSUFBSSxDQUFDTyxTQUFTLEdBQUdOLGtEQUFTQTtJQUM1QjtBQWlCRjtBQUVBLCtEQUFlQyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25maWcvQ29uZmlnLnRzPzRjZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xUeXBlcywgeyBDb250cm9sVHlwZSB9IGZyb20gXCIuL0NvbnRyb2xUeXBlc1wiO1xuaW1wb3J0IGlucHV0UHJvcGVydGllcywgeyBJbnB1dFByb3BlcnR5IH0gZnJvbSBcIi4vSW5wdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgRmlsZVR5cGVzLCB7IEZpbGVUeXBlIH0gZnJvbSBcIi4vRmlsZVR5cGVzXCI7XG5cbmNsYXNzIENvbmZpZyB7XG4gIGNvbnRyb2xUeXBlczogQ29udHJvbFR5cGVbXTtcbiAgaW5wdXRQcm9wZXJ0aWVzOiBJbnB1dFByb3BlcnR5W107XG4gIGZpbGVUeXBlczogdHlwZW9mIEZpbGVUeXBlcztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRyb2xUeXBlcyA9IENvbnRyb2xUeXBlcztcbiAgICB0aGlzLmlucHV0UHJvcGVydGllcyA9IGlucHV0UHJvcGVydGllcztcbiAgICB0aGlzLmZpbGVUeXBlcyA9IEZpbGVUeXBlcztcbiAgfVxuXG4gIC8vIEdldHRlciBtZXRob2QgdG8gYWNjZXNzIGNvbnRyb2xUeXBlc1xuICBwdWJsaWMgZ2V0Q29udHJvbFR5cGVzKCk6IENvbnRyb2xUeXBlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xUeXBlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dFByb3BlcnRpZXMoKTogSW5wdXRQcm9wZXJ0eVtdIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dFByb3BlcnRpZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsZVR5cGVzKCk6IHR5cGVvZiBGaWxlVHlwZXMge1xuICAgIHJldHVybiB0aGlzLmZpbGVUeXBlcztcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgbWV0aG9kcyBvciBwcm9wZXJ0aWVzIGlmIHJlcXVpcmVkXG4gIC8vIC4uLlxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7XG4iXSwibmFtZXMiOlsiQ29udHJvbFR5cGVzIiwiaW5wdXRQcm9wZXJ0aWVzIiwiRmlsZVR5cGVzIiwiQ29uZmlnIiwiZ2V0Q29udHJvbFR5cGVzIiwiY29udHJvbFR5cGVzIiwiZ2V0SW5wdXRQcm9wZXJ0aWVzIiwiZ2V0RmlsZVR5cGVzIiwiZmlsZVR5cGVzIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/Config.ts\n"));

/***/ })

});