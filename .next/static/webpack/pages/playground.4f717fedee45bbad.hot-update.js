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

/***/ "./src/components/micro-components/InfoIcon.js":
/*!*****************************************************!*\
  !*** ./src/components/micro-components/InfoIcon.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!react-bootstrap */ \"__barrel_optimize__?names=Button!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_BoltTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BoltTooltip */ \"./src/components/components/BoltTooltip.js\");\n/* harmony import */ var _components_BoltModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BoltModal */ \"./src/components/components/BoltModal.js\");\n\nvar _s = $RefreshSig$();\n\n// import PropTypes from \"prop-types\";\n\n// import FeatherIcon from \"feather-icons-react\";\n\n\nconst InfoIcon = (param)=>{\n    let { tooltipText, modal, modalProps } = param;\n    _s();\n    console.log(\"INFO ICON -- tooltipText\", tooltipText, \"modal\", modal, \"modalProps\", modalProps);\n    const [modalVisible, setModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleIconClick = ()=>{\n        if (modal) {\n            setModalVisible(true);\n        }\n    };\n    const icon = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        variant: \"transparent\",\n        size: \"sm\",\n        className: \"p-0 px-1\",\n        onClick: handleIconClick\n    }, void 0, false, {\n        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/components/micro-components/InfoIcon.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex align-items-center\",\n                children: tooltipText ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BoltTooltip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    content: tooltipText,\n                    children: icon\n                }, void 0, false, {\n                    fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/components/micro-components/InfoIcon.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined) : icon\n            }, void 0, false, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/components/micro-components/InfoIcon.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            modal && modalVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BoltModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: tooltipText || \"\",\n                content: modal,\n                ...modalProps,\n                show: modalVisible,\n                onHide: ()=>setModalVisible(false),\n                children: modal\n            }, void 0, false, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/components/micro-components/InfoIcon.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(InfoIcon, \"eUChne/lYvkrgB29ku5PUEOQqyk=\");\n_c = InfoIcon;\n// InfoIcon.propTypes = {\n//   tooltipText: PropTypes.string,\n//   modal: PropTypes.element,\n//   modalProps: PropTypes.object,\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoIcon);\nvar _c;\n$RefreshReg$(_c, \"InfoIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9taWNyby1jb21wb25lbnRzL0luZm9JY29uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDeEMsc0NBQXNDO0FBQ0c7QUFDekMsaURBQWlEO0FBQ0c7QUFDSjtBQUVoRCxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRTs7SUFDbERDLFFBQVFDLEdBQUcsQ0FDVCw0QkFDQUosYUFDQSxTQUNBQyxPQUNBLGNBQ0FDO0lBRUYsTUFBTSxDQUFDRyxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUM7SUFDakQsTUFBTVksa0JBQWtCO1FBQ3RCLElBQUlOLE9BQU87WUFDVEssZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNRSxxQkFDSiw4REFBQ1osaUZBQU1BO1FBQ0xhLFNBQVE7UUFDUkMsTUFBSztRQUNMQyxXQUFVO1FBQ1ZDLFNBQVNMOzs7Ozs7SUFPYixxQkFDRTs7MEJBQ0UsOERBQUNNO2dCQUFJRixXQUFVOzBCQUNaWCw0QkFDQyw4REFBQ0gsK0RBQVdBO29CQUFDaUIsU0FBU2Q7OEJBQWNROzs7OztnQ0FFcENBOzs7Ozs7WUFHSFAsU0FBU0ksOEJBQ1IsOERBQUNQLDZEQUFTQTtnQkFDUmlCLE9BQU9mLGVBQWU7Z0JBQ3RCYyxTQUFTYjtnQkFDUixHQUFHQyxVQUFVO2dCQUNkYyxNQUFNWDtnQkFDTlksUUFBUSxJQUFNWCxnQkFBZ0I7MEJBRTdCTDs7Ozs7Ozs7QUFLWDtHQWxETUY7S0FBQUE7QUFvRE4seUJBQXlCO0FBQ3pCLG1DQUFtQztBQUNuQyw4QkFBOEI7QUFDOUIsa0NBQWtDO0FBQ2xDLEtBQUs7QUFFTCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9taWNyby1jb21wb25lbnRzL0luZm9JY29uLmpzPzBlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG4vLyBpbXBvcnQgRmVhdGhlckljb24gZnJvbSBcImZlYXRoZXItaWNvbnMtcmVhY3RcIjtcbmltcG9ydCBCb2x0VG9vbHRpcCBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb2x0VG9vbHRpcFwiO1xuaW1wb3J0IEJvbHRNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb2x0TW9kYWxcIjtcblxuY29uc3QgSW5mb0ljb24gPSAoeyB0b29sdGlwVGV4dCwgbW9kYWwsIG1vZGFsUHJvcHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICBcIklORk8gSUNPTiAtLSB0b29sdGlwVGV4dFwiLFxuICAgIHRvb2x0aXBUZXh0LFxuICAgIFwibW9kYWxcIixcbiAgICBtb2RhbCxcbiAgICBcIm1vZGFsUHJvcHNcIixcbiAgICBtb2RhbFByb3BzXG4gICk7XG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUljb25DbGljayA9ICgpID0+IHtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIHNldE1vZGFsVmlzaWJsZSh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaWNvbiA9IChcbiAgICA8QnV0dG9uXG4gICAgICB2YXJpYW50PVwidHJhbnNwYXJlbnRcIlxuICAgICAgc2l6ZT1cInNtXCJcbiAgICAgIGNsYXNzTmFtZT1cInAtMCBweC0xXCJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUljb25DbGlja31cbiAgICA+XG4gICAgICB7LyogLy9VbmNvbW1lbnQgaWYgZXJyb3IgaXMgZml4ZWQgKi99XG4gICAgICB7LyogPEZlYXRoZXJJY29uIGljb249XCJpbmZvXCIgc2l6ZT1cIjE2cHhcIiAvPiAqL31cbiAgICA8L0J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge3Rvb2x0aXBUZXh0ID8gKFxuICAgICAgICAgIDxCb2x0VG9vbHRpcCBjb250ZW50PXt0b29sdGlwVGV4dH0+e2ljb259PC9Cb2x0VG9vbHRpcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBpY29uXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHttb2RhbCAmJiBtb2RhbFZpc2libGUgJiYgKFxuICAgICAgICA8Qm9sdE1vZGFsXG4gICAgICAgICAgdGl0bGU9e3Rvb2x0aXBUZXh0IHx8IFwiXCJ9XG4gICAgICAgICAgY29udGVudD17bW9kYWx9XG4gICAgICAgICAgey4uLm1vZGFsUHJvcHN9XG4gICAgICAgICAgc2hvdz17bW9kYWxWaXNpYmxlfVxuICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHttb2RhbH1cbiAgICAgICAgPC9Cb2x0TW9kYWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuLy8gSW5mb0ljb24ucHJvcFR5cGVzID0ge1xuLy8gICB0b29sdGlwVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbi8vICAgbW9kYWw6IFByb3BUeXBlcy5lbGVtZW50LFxuLy8gICBtb2RhbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb0ljb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkJvbHRUb29sdGlwIiwiQm9sdE1vZGFsIiwiSW5mb0ljb24iLCJ0b29sdGlwVGV4dCIsIm1vZGFsIiwibW9kYWxQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJoYW5kbGVJY29uQ2xpY2siLCJpY29uIiwidmFyaWFudCIsInNpemUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwiY29udGVudCIsInRpdGxlIiwic2hvdyIsIm9uSGlkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/micro-components/InfoIcon.js\n"));

/***/ })

});