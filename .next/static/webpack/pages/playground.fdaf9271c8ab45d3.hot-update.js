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

/***/ "./src/helpers/functions/ToKebabCase.js":
/*!**********************************************!*\
  !*** ./src/helpers/functions/ToKebabCase.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToKebabCase: function() { return /* binding */ ToKebabCase; }\n/* harmony export */ });\nfunction ToKebabCase(inputString) {\n    // Check if the inputString is undefined, null, or an empty string\n    if (inputString === undefined || inputString === null || inputString.trim() === \"\") {\n        return \"invalid-input\";\n    }\n    // Split the input string by spaces or hyphens\n    const words = inputString.trim().split(/[ -]/);\n    // Capitalize the first letter of each word (except the first one)\n    for(let i = 1; i < words.length; i++){\n        if (words[i]) {\n            words[i] = words[i][0].toUpperCase() + words[i].slice(1);\n        }\n    }\n    // Join the words back together with hyphens and convert to lowercase\n    return words.join(\"-\").toLowerCase();\n}\n_c = ToKebabCase;\n\nvar _c;\n$RefreshReg$(_c, \"ToKebabCase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9mdW5jdGlvbnMvVG9LZWJhYkNhc2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVNBLFlBQVlDLFdBQVc7SUFDOUIsa0VBQWtFO0lBQ2xFLElBQ0VBLGdCQUFnQkMsYUFDaEJELGdCQUFnQixRQUNoQkEsWUFBWUUsSUFBSSxPQUFPLElBQ3ZCO1FBQ0EsT0FBTztJQUNUO0lBRUEsOENBQThDO0lBQzlDLE1BQU1DLFFBQVFILFlBQVlFLElBQUksR0FBR0UsS0FBSyxDQUFDO0lBRXZDLGtFQUFrRTtJQUNsRSxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsTUFBTUcsTUFBTSxFQUFFRCxJQUFLO1FBQ3JDLElBQUlGLEtBQUssQ0FBQ0UsRUFBRSxFQUFFO1lBQ1pGLEtBQUssQ0FBQ0UsRUFBRSxHQUFHRixLQUFLLENBQUNFLEVBQUUsQ0FBQyxFQUFFLENBQUNFLFdBQVcsS0FBS0osS0FBSyxDQUFDRSxFQUFFLENBQUNHLEtBQUssQ0FBQztRQUN4RDtJQUNGO0lBRUEscUVBQXFFO0lBQ3JFLE9BQU9MLE1BQU1NLElBQUksQ0FBQyxLQUFLQyxXQUFXO0FBQ3BDO0tBdEJTWDtBQXdCYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9mdW5jdGlvbnMvVG9LZWJhYkNhc2UuanM/ZWEwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBUb0tlYmFiQ2FzZShpbnB1dFN0cmluZykge1xuICAvLyBDaGVjayBpZiB0aGUgaW5wdXRTdHJpbmcgaXMgdW5kZWZpbmVkLCBudWxsLCBvciBhbiBlbXB0eSBzdHJpbmdcbiAgaWYgKFxuICAgIGlucHV0U3RyaW5nID09PSB1bmRlZmluZWQgfHxcbiAgICBpbnB1dFN0cmluZyA9PT0gbnVsbCB8fFxuICAgIGlucHV0U3RyaW5nLnRyaW0oKSA9PT0gXCJcIlxuICApIHtcbiAgICByZXR1cm4gXCJpbnZhbGlkLWlucHV0XCI7XG4gIH1cblxuICAvLyBTcGxpdCB0aGUgaW5wdXQgc3RyaW5nIGJ5IHNwYWNlcyBvciBoeXBoZW5zXG4gIGNvbnN0IHdvcmRzID0gaW5wdXRTdHJpbmcudHJpbSgpLnNwbGl0KC9bIC1dLyk7XG5cbiAgLy8gQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggd29yZCAoZXhjZXB0IHRoZSBmaXJzdCBvbmUpXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAod29yZHNbaV0pIHtcbiAgICAgIHdvcmRzW2ldID0gd29yZHNbaV1bMF0udG9VcHBlckNhc2UoKSArIHdvcmRzW2ldLnNsaWNlKDEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEpvaW4gdGhlIHdvcmRzIGJhY2sgdG9nZXRoZXIgd2l0aCBoeXBoZW5zIGFuZCBjb252ZXJ0IHRvIGxvd2VyY2FzZVxuICByZXR1cm4gd29yZHMuam9pbihcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IHsgVG9LZWJhYkNhc2UgfTtcbiJdLCJuYW1lcyI6WyJUb0tlYmFiQ2FzZSIsImlucHV0U3RyaW5nIiwidW5kZWZpbmVkIiwidHJpbSIsIndvcmRzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/functions/ToKebabCase.js\n"));

/***/ })

});