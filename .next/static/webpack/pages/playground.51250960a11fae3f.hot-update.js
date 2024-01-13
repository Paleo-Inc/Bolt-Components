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

/***/ "./src/helpers/hooks/InputValidator.js":
/*!*********************************************!*\
  !*** ./src/helpers/hooks/InputValidator.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_ControlTypeParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/ControlTypeParameters */ \"./src/config/ControlTypeParameters.js\");\n/* harmony import */ var _Validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Validators */ \"./src/helpers/Validators.js\");\nvar _s = $RefreshSig$();\n\n\n\nconst InputValidator = function() {\n    let controlType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"text\", value = arguments.length > 1 ? arguments[1] : void 0, touched = arguments.length > 2 ? arguments[2] : void 0, setValidationCheck = arguments.length > 3 ? arguments[3] : void 0, setValidationMessages = arguments.length > 4 ? arguments[4] : void 0, isInvalid = arguments.length > 5 ? arguments[5] : void 0, showDefaultValidator = arguments.length > 6 ? arguments[6] : void 0;\n    _s();\n    const { validators } = InputParameter[controlType || null];\n    // Uncomment to see logs\n    // console.log(\"validators\", validators);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!showDefaultValidator) return;\n        let isValid = true;\n        let messages = [];\n        if (showDefaultValidator && touched && value && validators && Array.isArray(validators)) {\n            validators.forEach((validator)=>{\n                const validate = _Validators__WEBPACK_IMPORTED_MODULE_2__.Validators[validator];\n                if (typeof validate === \"function\") {\n                    const validationResult = validate(value);\n                    if (!validationResult.valid) {\n                        isValid = false;\n                        messages.push(validationResult.message);\n                    }\n                }\n            });\n        }\n        setValidationCheck(isValid);\n        isInvalid = true;\n        setValidationMessages(messages); // Set the array of messages\n    }, [\n        value,\n        touched,\n        validators,\n        setValidationCheck,\n        setValidationMessages,\n        isInvalid\n    ]);\n};\n_s(InputValidator, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = InputValidator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputValidator);\nvar _c;\n$RefreshReg$(_c, \"InputValidator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9ob29rcy9JbnB1dFZhbGlkYXRvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0M7QUFDeUM7QUFDaEM7QUFFM0MsTUFBTUcsaUJBQWlCO1FBQ3JCQywrRUFBYyxRQUNkQyxzREFDQUMsd0RBQ0FDLG1FQUNBQyxzRUFDQUMsMERBQ0FDOztJQUVBLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdDLGNBQWMsQ0FBQ1IsZUFBZSxLQUFLO0lBRTFELHdCQUF3QjtJQUN4Qix5Q0FBeUM7SUFFekNKLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDVSxzQkFBc0I7UUFDM0IsSUFBSUcsVUFBVTtRQUNkLElBQUlDLFdBQVcsRUFBRTtRQUVqQixJQUNFSix3QkFDQUosV0FDQUQsU0FDQU0sY0FDQUksTUFBTUMsT0FBTyxDQUFDTCxhQUNkO1lBQ0FBLFdBQVdNLE9BQU8sQ0FBQyxDQUFDQztnQkFDbEIsTUFBTUMsV0FBV2pCLG1EQUFVLENBQUNnQixVQUFVO2dCQUN0QyxJQUFJLE9BQU9DLGFBQWEsWUFBWTtvQkFDbEMsTUFBTUMsbUJBQW1CRCxTQUFTZDtvQkFDbEMsSUFBSSxDQUFDZSxpQkFBaUJDLEtBQUssRUFBRTt3QkFDM0JSLFVBQVU7d0JBQ1ZDLFNBQVNRLElBQUksQ0FBQ0YsaUJBQWlCRyxPQUFPO29CQUN4QztnQkFDRjtZQUNGO1FBQ0Y7UUFFQWhCLG1CQUFtQk07UUFDbkJKLFlBQVk7UUFDWkQsc0JBQXNCTSxXQUFXLDRCQUE0QjtJQUMvRCxHQUFHO1FBQ0RUO1FBQ0FDO1FBQ0FLO1FBQ0FKO1FBQ0FDO1FBQ0FDO0tBQ0Q7QUFDSDtHQWpETU47S0FBQUE7QUFtRE4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlcnMvaG9va3MvSW5wdXRWYWxpZGF0b3IuanM/YjliZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRyb2xUeXBlUGFyYW1ldGVycyB9IGZyb20gXCIuLi8uLi9jb25maWcvQ29udHJvbFR5cGVQYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSBcIi4uL1ZhbGlkYXRvcnNcIjtcblxuY29uc3QgSW5wdXRWYWxpZGF0b3IgPSAoXG4gIGNvbnRyb2xUeXBlID0gXCJ0ZXh0XCIsXG4gIHZhbHVlLFxuICB0b3VjaGVkLFxuICBzZXRWYWxpZGF0aW9uQ2hlY2ssXG4gIHNldFZhbGlkYXRpb25NZXNzYWdlcywgLy8gUmVuYW1lZCB0byBwbHVyYWxcbiAgaXNJbnZhbGlkLFxuICBzaG93RGVmYXVsdFZhbGlkYXRvclxuKSA9PiB7XG4gIGNvbnN0IHsgdmFsaWRhdG9ycyB9ID0gSW5wdXRQYXJhbWV0ZXJbY29udHJvbFR5cGUgfHwgbnVsbF07XG5cbiAgLy8gVW5jb21tZW50IHRvIHNlZSBsb2dzXG4gIC8vIGNvbnNvbGUubG9nKFwidmFsaWRhdG9yc1wiLCB2YWxpZGF0b3JzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2hvd0RlZmF1bHRWYWxpZGF0b3IpIHJldHVybjtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgbGV0IG1lc3NhZ2VzID0gW107XG5cbiAgICBpZiAoXG4gICAgICBzaG93RGVmYXVsdFZhbGlkYXRvciAmJlxuICAgICAgdG91Y2hlZCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIHZhbGlkYXRvcnMgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkodmFsaWRhdG9ycylcbiAgICApIHtcbiAgICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlID0gVmFsaWRhdG9yc1t2YWxpZGF0b3JdO1xuICAgICAgICBpZiAodHlwZW9mIHZhbGlkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGUodmFsdWUpO1xuICAgICAgICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC52YWxpZCkge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh2YWxpZGF0aW9uUmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VmFsaWRhdGlvbkNoZWNrKGlzVmFsaWQpO1xuICAgIGlzSW52YWxpZCA9IHRydWU7XG4gICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2VzKG1lc3NhZ2VzKTsgLy8gU2V0IHRoZSBhcnJheSBvZiBtZXNzYWdlc1xuICB9LCBbXG4gICAgdmFsdWUsXG4gICAgdG91Y2hlZCxcbiAgICB2YWxpZGF0b3JzLFxuICAgIHNldFZhbGlkYXRpb25DaGVjayxcbiAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZXMsXG4gICAgaXNJbnZhbGlkLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0VmFsaWRhdG9yO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkNvbnRyb2xUeXBlUGFyYW1ldGVycyIsIlZhbGlkYXRvcnMiLCJJbnB1dFZhbGlkYXRvciIsImNvbnRyb2xUeXBlIiwidmFsdWUiLCJ0b3VjaGVkIiwic2V0VmFsaWRhdGlvbkNoZWNrIiwic2V0VmFsaWRhdGlvbk1lc3NhZ2VzIiwiaXNJbnZhbGlkIiwic2hvd0RlZmF1bHRWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwiSW5wdXRQYXJhbWV0ZXIiLCJpc1ZhbGlkIiwibWVzc2FnZXMiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJ2YWxpZGF0aW9uUmVzdWx0IiwidmFsaWQiLCJwdXNoIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/hooks/InputValidator.js\n"));

/***/ })

});