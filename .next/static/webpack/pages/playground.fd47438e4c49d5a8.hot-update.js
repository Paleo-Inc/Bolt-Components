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

/***/ "./src/helpers/functions/RenderFilePreview.js":
/*!****************************************************!*\
  !*** ./src/helpers/functions/RenderFilePreview.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenderFilePreviews: function() { return /* binding */ RenderFilePreviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var feather_icons_react_build_FeatherIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons-react/build/FeatherIcon */ \"./node_modules/feather-icons-react/build/FeatherIcon.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n/* harmony import */ var _config_FileTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/FileTypes */ \"./src/config/FileTypes.ts\");\n/* harmony import */ var _components_components_BoltModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components/BoltModal */ \"./src/components/components/BoltModal.js\");\n/* harmony import */ var _helpers_functions_Helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/functions/Helpers */ \"./src/helpers/functions/Helpers.js\");\n/* harmony import */ var _components_components_BoltTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components/BoltTooltip */ \"./src/components/components/BoltTooltip.js\");\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Carousel */ \"./node_modules/react-bootstrap/esm/Carousel.js\");\n/* harmony import */ var _config_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/Config */ \"./src/config/Config.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction RenderFilePreviews(param) {\n    let { files } = param;\n    _s();\n    const [previewFile, setPreviewFile] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [fileUrls, setFileUrls] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [selectedFile, setSelectedFile] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [currentIndex, setCurrentIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newFileUrls = {};\n        files.forEach((file)=>{\n            if (file && file.type && file.type.startsWith(\"image/\")) {\n                newFileUrls[file.name] = URL.createObjectURL(file);\n            }\n        });\n        setFileUrls(newFileUrls);\n        return ()=>{\n            Object.values(newFileUrls).forEach((url)=>URL.revokeObjectURL(url));\n        };\n    }, [\n        files\n    ]);\n    const handleFileClick = (file, index)=>{\n        setPreviewFile(true);\n        setSelectedFile(file);\n        setCurrentIndex(index);\n    };\n    const renderCarouselItem = (file)=>{\n        if (file && file.type.startsWith(\"image/\")) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                className: \"rounded\",\n                fluid: true,\n                src: fileUrls[file.name]\n            }, void 0, false, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                lineNumber: 38,\n                columnNumber: 14\n            }, this);\n        } else {\n            // Render the default icon or based on the file type\n            const fileType = file.type;\n            const fileTypeInfo = ConfigData.FileTypes[fileType];\n            const icon = fileTypeInfo ? fileTypeInfo.icon : \"file\";\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center h-100 bg-light p-4 pb-5 rounded justify-content-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(feather_icons_react_build_FeatherIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            icon: icon,\n                            size: \"60\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: _helpers_functions_Helpers__WEBPACK_IMPORTED_MODULE_5__.Helpers.TruncateText(file.name, 32)\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: fileTypeInfo.friendlyName\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: fileTypeInfo.description\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-column gap-2\",\n                children: files.map((mappedFile, index)=>{\n                    const fileType = mappedFile.type;\n                    const fileTypeInfo = ConfigData.FileTypes[fileType];\n                    const icon = fileTypeInfo ? fileTypeInfo.icon : \"file\";\n                    const extension = fileTypeInfo ? fileTypeInfo.extension : \"\";\n                    const isImage = mappedFile.type.startsWith(\"image/\");\n                    const tooltipId = \"tooltip-\".concat(index);\n                    const truncatedName = _helpers_functions_Helpers__WEBPACK_IMPORTED_MODULE_5__.Helpers.TruncateText(mappedFile.name, 18);\n                    const imageUrl = fileUrls[mappedFile.name];\n                    const tooltipData = [\n                        {\n                            title: \"Name\",\n                            value: mappedFile.name\n                        },\n                        {\n                            title: \"File type\",\n                            value: mappedFile.type\n                        },\n                        {\n                            title: \"Extension\",\n                            value: extension\n                        }\n                    ];\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components_BoltTooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        delay: 2000,\n                        content: tooltipData,\n                        id: tooltipId,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex aic gap-2 border p-2 rounded\",\n                            onClick: ()=>handleFileClick(mappedFile, index),\n                            children: [\n                                isImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    width: 23,\n                                    height: 23,\n                                    alt: mappedFile.name,\n                                    src: imageUrl,\n                                    rounded: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 19\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(feather_icons_react_build_FeatherIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    icon: icon,\n                                    size: \"19\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"small\",\n                                    children: truncatedName\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components_BoltModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        interval: null,\n                        indicators: files.length < 2 ? false : true,\n                        controls: files.length < 2 ? false : true,\n                        activeIndex: currentIndex,\n                        onSelect: setCurrentIndex,\n                        children: files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Item, {\n                                children: renderCarouselItem(file)\n                            }, index, false, {\n                                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                                lineNumber: 115,\n                                columnNumber: 17\n                            }, void 0))\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, void 0)\n                }, void 0, false),\n                show: previewFile,\n                onHide: ()=>setPreviewFile(false)\n            }, void 0, false, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RenderFilePreviews, \"bneW958FHbTdDXMSu4a42UbqYCI=\");\n_c = RenderFilePreviews;\n\nvar _c;\n$RefreshReg$(_c, \"RenderFilePreviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9mdW5jdGlvbnMvUmVuZGVyRmlsZVByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ3VCO0FBQ3RCO0FBQ0s7QUFDZTtBQUNKO0FBQ1E7QUFDbEI7QUFDUDtBQUV6QyxTQUFTVSxtQkFBbUIsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUMxQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2IscURBQWMsQ0FBQztJQUNyRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLHFEQUFjLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2xCLHFEQUFjLENBQUM7SUFDdkQsTUFBTSxDQUFDbUIsY0FBY0MsZ0JBQWdCLEdBQUdwQixxREFBYyxDQUFDO0lBRXZEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixjQUFjLENBQUM7UUFDckJWLE1BQU1XLE9BQU8sQ0FBQyxDQUFDQztZQUNiLElBQUlBLFFBQVFBLEtBQUtDLElBQUksSUFBSUQsS0FBS0MsSUFBSSxDQUFDQyxVQUFVLENBQUMsV0FBVztnQkFDdkRKLFdBQVcsQ0FBQ0UsS0FBS0csSUFBSSxDQUFDLEdBQUdDLElBQUlDLGVBQWUsQ0FBQ0w7WUFDL0M7UUFDRjtRQUNBUCxZQUFZSztRQUNaLE9BQU87WUFDTFEsT0FBT0MsTUFBTSxDQUFDVCxhQUFhQyxPQUFPLENBQUMsQ0FBQ1MsTUFBUUosSUFBSUssZUFBZSxDQUFDRDtRQUNsRTtJQUNGLEdBQUc7UUFBQ3BCO0tBQU07SUFFVixNQUFNc0Isa0JBQWtCLENBQUNWLE1BQU1XO1FBQzdCckIsZUFBZTtRQUNmSyxnQkFBZ0JLO1FBQ2hCSCxnQkFBZ0JjO0lBQ2xCO0lBRUEsTUFBTUMscUJBQXFCLENBQUNaO1FBQzFCLElBQUlBLFFBQVFBLEtBQUtDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7WUFDMUMscUJBQU8sOERBQUN0Qiw2REFBS0E7Z0JBQUNp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X0UvLi9zcmMvaGVscGVycy9mdW5jdGlvbnMvUmVuZGVyRmlsZVByZXZpZXcuanM/MzQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdGhlckljb24gZnJvbSBcImZlYXRoZXItaWNvbnMtcmVhY3QvYnVpbGQvRmVhdGhlckljb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCI7XG5pbXBvcnQgRmlsZVR5cGVzIGZyb20gXCIuLi8uLi9jb25maWcvRmlsZVR5cGVzXCI7XG5pbXBvcnQgQm9sdE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvQm9sdE1vZGFsXCI7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25zL0hlbHBlcnNcIjtcbmltcG9ydCBCb2x0VG9vbHRpcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL0JvbHRUb29sdGlwXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbFwiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL0NvbmZpZ1wiO1xuXG5mdW5jdGlvbiBSZW5kZXJGaWxlUHJldmlld3MoeyBmaWxlcyB9KSB7XG4gIGNvbnN0IFtwcmV2aWV3RmlsZSwgc2V0UHJldmlld0ZpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVVybHMsIHNldEZpbGVVcmxzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdGaWxlVXJscyA9IHt9O1xuICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGlmIChmaWxlICYmIGZpbGUudHlwZSAmJiBmaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkge1xuICAgICAgICBuZXdGaWxlVXJsc1tmaWxlLm5hbWVdID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRGaWxlVXJscyhuZXdGaWxlVXJscyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIE9iamVjdC52YWx1ZXMobmV3RmlsZVVybHMpLmZvckVhY2goKHVybCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpKTtcbiAgICB9O1xuICB9LCBbZmlsZXNdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2xpY2sgPSAoZmlsZSwgaW5kZXgpID0+IHtcbiAgICBzZXRQcmV2aWV3RmlsZSh0cnVlKTtcbiAgICBzZXRTZWxlY3RlZEZpbGUoZmlsZSk7XG4gICAgc2V0Q3VycmVudEluZGV4KGluZGV4KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJDYXJvdXNlbEl0ZW0gPSAoZmlsZSkgPT4ge1xuICAgIGlmIChmaWxlICYmIGZpbGUudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG4gICAgICByZXR1cm4gPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWRcIiBmbHVpZCBzcmM9e2ZpbGVVcmxzW2ZpbGUubmFtZV19IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgdGhlIGRlZmF1bHQgaWNvbiBvciBiYXNlZCBvbiB0aGUgZmlsZSB0eXBlXG4gICAgICBjb25zdCBmaWxlVHlwZSA9IGZpbGUudHlwZTtcbiAgICAgIGNvbnN0IGZpbGVUeXBlSW5mbyA9IENvbmZpZ0RhdGEuRmlsZVR5cGVzW2ZpbGVUeXBlXTtcbiAgICAgIGNvbnN0IGljb24gPSBmaWxlVHlwZUluZm8gPyBmaWxlVHlwZUluZm8uaWNvbiA6IFwiZmlsZVwiO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoLTEwMCBiZy1saWdodCBwLTQgcGItNSByb3VuZGVkIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGZWF0aGVySWNvbiBpY29uPXtpY29ufSBzaXplPVwiNjBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e0hlbHBlcnMuVHJ1bmNhdGVUZXh0KGZpbGUubmFtZSwgMzIpfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e2ZpbGVUeXBlSW5mby5mcmllbmRseU5hbWV9PC9kaXY+XG4gICAgICAgICAgPGRpdj57ZmlsZVR5cGVJbmZvLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGdhcC0yXCI+XG4gICAgICAgIHtmaWxlcy5tYXAoKG1hcHBlZEZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZVR5cGUgPSBtYXBwZWRGaWxlLnR5cGU7XG4gICAgICAgICAgY29uc3QgZmlsZVR5cGVJbmZvID0gQ29uZmlnRGF0YS5GaWxlVHlwZXNbZmlsZVR5cGVdO1xuICAgICAgICAgIGNvbnN0IGljb24gPSBmaWxlVHlwZUluZm8gPyBmaWxlVHlwZUluZm8uaWNvbiA6IFwiZmlsZVwiO1xuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGZpbGVUeXBlSW5mbyA/IGZpbGVUeXBlSW5mby5leHRlbnNpb24gOiBcIlwiO1xuICAgICAgICAgIGNvbnN0IGlzSW1hZ2UgPSBtYXBwZWRGaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKTtcbiAgICAgICAgICBjb25zdCB0b29sdGlwSWQgPSBgdG9vbHRpcC0ke2luZGV4fWA7XG4gICAgICAgICAgY29uc3QgdHJ1bmNhdGVkTmFtZSA9IEhlbHBlcnMuVHJ1bmNhdGVUZXh0KG1hcHBlZEZpbGUubmFtZSwgMTgpO1xuICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gZmlsZVVybHNbbWFwcGVkRmlsZS5uYW1lXTtcblxuICAgICAgICAgIGNvbnN0IHRvb2x0aXBEYXRhID0gW1xuICAgICAgICAgICAgeyB0aXRsZTogXCJOYW1lXCIsIHZhbHVlOiBtYXBwZWRGaWxlLm5hbWUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiRmlsZSB0eXBlXCIsIHZhbHVlOiBtYXBwZWRGaWxlLnR5cGUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiRXh0ZW5zaW9uXCIsIHZhbHVlOiBleHRlbnNpb24gfSxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb2x0VG9vbHRpcFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBkZWxheT17MjAwMH1cbiAgICAgICAgICAgICAgY29udGVudD17dG9vbHRpcERhdGF9XG4gICAgICAgICAgICAgIGlkPXt0b29sdGlwSWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWljIGdhcC0yIGJvcmRlciBwLTIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsZUNsaWNrKG1hcHBlZEZpbGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpc0ltYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyM31cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyM31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXttYXBwZWRGaWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxGZWF0aGVySWNvbiBpY29uPXtpY29ufSBzaXplPVwiMTlcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbFwiPnt0cnVuY2F0ZWROYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm9sdFRvb2x0aXA+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCb2x0TW9kYWxcbiAgICAgICAgY29udGVudD17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICBpbnRlcnZhbD17bnVsbH1cbiAgICAgICAgICAgICAgaW5kaWNhdG9ycz17ZmlsZXMubGVuZ3RoIDwgMiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgY29udHJvbHM9e2ZpbGVzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgIGFjdGl2ZUluZGV4PXtjdXJyZW50SW5kZXh9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtzZXRDdXJyZW50SW5kZXh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyQ2Fyb3VzZWxJdGVtKGZpbGUpfVxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIHNob3c9e3ByZXZpZXdGaWxlfVxuICAgICAgICBvbkhpZGU9eygpID0+IHNldFByZXZpZXdGaWxlKGZhbHNlKX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IFJlbmRlckZpbGVQcmV2aWV3cyB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRmVhdGhlckljb24iLCJJbWFnZSIsIkZpbGVUeXBlcyIsIkJvbHRNb2RhbCIsIkhlbHBlcnMiLCJCb2x0VG9vbHRpcCIsIkNhcm91c2VsIiwiQ29uZmlnIiwiUmVuZGVyRmlsZVByZXZpZXdzIiwiZmlsZXMiLCJwcmV2aWV3RmlsZSIsInNldFByZXZpZXdGaWxlIiwidXNlU3RhdGUiLCJmaWxlVXJscyIsInNldEZpbGVVcmxzIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwibmV3RmlsZVVybHMiLCJmb3JFYWNoIiwiZmlsZSIsInR5cGUiLCJzdGFydHNXaXRoIiwibmFtZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIk9iamVjdCIsInZhbHVlcyIsInVybCIsInJldm9rZU9iamVjdFVSTCIsImhhbmRsZUZpbGVDbGljayIsImluZGV4IiwicmVuZGVyQ2Fyb3VzZWxJdGVtIiwiY2xhc3NOYW1lIiwiZmx1aWQiLCJzcmMiLCJmaWxlVHlwZSIsImZpbGVUeXBlSW5mbyIsIkNvbmZpZ0RhdGEiLCJpY29uIiwiZGl2Iiwic2l6ZSIsIlRydW5jYXRlVGV4dCIsImZyaWVuZGx5TmFtZSIsImRlc2NyaXB0aW9uIiwibWFwIiwibWFwcGVkRmlsZSIsImV4dGVuc2lvbiIsImlzSW1hZ2UiLCJ0b29sdGlwSWQiLCJ0cnVuY2F0ZWROYW1lIiwiaW1hZ2VVcmwiLCJ0b29sdGlwRGF0YSIsInRpdGxlIiwidmFsdWUiLCJkZWxheSIsImNvbnRlbnQiLCJpZCIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInJvdW5kZWQiLCJpbnRlcnZhbCIsImluZGljYXRvcnMiLCJsZW5ndGgiLCJjb250cm9scyIsImFjdGl2ZUluZGV4Iiwib25TZWxlY3QiLCJJdGVtIiwic2hvdyIsIm9uSGlkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/functions/RenderFilePreview.js\n"));

/***/ })

});