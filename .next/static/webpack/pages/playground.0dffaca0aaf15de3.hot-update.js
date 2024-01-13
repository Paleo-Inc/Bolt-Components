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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenderFilePreviews: function() { return /* binding */ RenderFilePreviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var feather_icons_react_build_FeatherIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons-react/build/FeatherIcon */ \"./node_modules/feather-icons-react/build/FeatherIcon.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n/* harmony import */ var _components_components_BoltModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components/BoltModal */ \"./src/components/components/BoltModal.js\");\n/* harmony import */ var _helpers_functions_Helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/functions/Helpers */ \"./src/helpers/functions/Helpers.js\");\n/* harmony import */ var _components_components_BoltTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components/BoltTooltip */ \"./src/components/components/BoltTooltip.js\");\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Carousel */ \"./node_modules/react-bootstrap/esm/Carousel.js\");\n/* harmony import */ var _config_Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/Config */ \"./src/config/Config.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import FileTypes from \"../../config/FileTypes\";\n\n\n\n\n\nconst config = new _config_Config__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nconst fileTypes = config.getFileTypes();\nfunction RenderFilePreviews(param) {\n    let { files } = param;\n    _s();\n    const [previewFile, setPreviewFile] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [fileUrls, setFileUrls] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [selectedFile, setSelectedFile] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [currentIndex, setCurrentIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newFileUrls = {};\n        files.forEach((file)=>{\n            if (file && file.type && file.type.startsWith(\"image/\")) {\n                newFileUrls[file.name] = URL.createObjectURL(file);\n            }\n        });\n        setFileUrls(newFileUrls);\n        return ()=>{\n            Object.values(newFileUrls).forEach((url)=>URL.revokeObjectURL(url));\n        };\n    }, [\n        files\n    ]);\n    const handleFileClick = (file, index)=>{\n        setPreviewFile(true);\n        setSelectedFile(file);\n        setCurrentIndex(index);\n    };\n    const renderCarouselItem = (file)=>{\n        if (file && file.type.startsWith(\"image/\")) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                className: \"rounded\",\n                fluid: true,\n                src: fileUrls[file.name]\n            }, void 0, false, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                lineNumber: 41,\n                columnNumber: 14\n            }, this);\n        } else {\n            // Render the default icon or based on the file type\n            const fileType = file.type;\n            const fileTypeInfo = fileTypes[fileType];\n            const icon = fileTypeInfo ? fileTypeInfo.icon : \"file\";\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center h-100 bg-light p-4 pb-5 rounded justify-content-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(feather_icons_react_build_FeatherIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            icon: icon,\n                            size: \"60\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: _helpers_functions_Helpers__WEBPACK_IMPORTED_MODULE_4__.Helpers.TruncateText(file.name, 32)\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: fileTypeInfo === null || fileTypeInfo === void 0 ? void 0 : fileTypeInfo.friendlyName\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: fileTypeInfo.description\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-column gap-2\",\n                children: files.map((mappedFile, index)=>{\n                    const fileType = mappedFile.type;\n                    const fileTypeInfo = fileTypes[fileType];\n                    const icon = fileTypeInfo ? fileTypeInfo.icon : \"file\";\n                    const extension = fileTypeInfo ? fileTypeInfo.extension : \"\";\n                    const isImage = mappedFile.type.startsWith(\"image/\");\n                    const tooltipId = \"tooltip-\".concat(index);\n                    const truncatedName = _helpers_functions_Helpers__WEBPACK_IMPORTED_MODULE_4__.Helpers.TruncateText(mappedFile.name, 18);\n                    const imageUrl = fileUrls[mappedFile.name];\n                    const tooltipData = [\n                        {\n                            title: \"Name\",\n                            value: mappedFile.name\n                        },\n                        {\n                            title: \"File type\",\n                            value: mappedFile.type\n                        },\n                        {\n                            title: \"Extension\",\n                            value: extension\n                        }\n                    ];\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components_BoltTooltip__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        delay: 2000,\n                        content: tooltipData,\n                        id: tooltipId,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex aic gap-2 border p-2 rounded\",\n                            onClick: ()=>handleFileClick(mappedFile, index),\n                            children: [\n                                isImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    width: 23,\n                                    height: 23,\n                                    alt: mappedFile.name,\n                                    src: imageUrl,\n                                    rounded: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 19\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(feather_icons_react_build_FeatherIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    icon: icon,\n                                    size: \"19\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"small\",\n                                    children: truncatedName\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components_BoltModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        interval: null,\n                        indicators: files.length < 2 ? false : true,\n                        controls: files.length < 2 ? false : true,\n                        activeIndex: currentIndex,\n                        onSelect: setCurrentIndex,\n                        children: files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n                                children: renderCarouselItem(file)\n                            }, index, false, {\n                                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                                lineNumber: 118,\n                                columnNumber: 17\n                            }, void 0))\n                    }, void 0, false, {\n                        fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, void 0)\n                }, void 0, false),\n                show: previewFile,\n                onHide: ()=>setPreviewFile(false)\n            }, void 0, false, {\n                fileName: \"/Users/maxpauwels/Desktop/GitHub.nosync/Bolt-Components/src/helpers/functions/RenderFilePreview.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RenderFilePreviews, \"bneW958FHbTdDXMSu4a42UbqYCI=\");\n_c = RenderFilePreviews;\n\nvar _c;\n$RefreshReg$(_c, \"RenderFilePreviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9mdW5jdGlvbnMvUmVuZGVyRmlsZVByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDdUI7QUFDdEI7QUFDMUMsa0RBQWtEO0FBQ1k7QUFDSjtBQUNRO0FBQ2xCO0FBQ1A7QUFFekMsTUFBTVMsU0FBUyxJQUFJRCxzREFBTUE7QUFDekIsTUFBTUUsWUFBWUQsT0FBT0UsWUFBWTtBQUVyQyxTQUFTQyxtQkFBbUIsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUMxQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2YscURBQWMsQ0FBQztJQUNyRCxNQUFNLENBQUNpQixVQUFVQyxZQUFZLEdBQUdsQixxREFBYyxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDbUIsY0FBY0MsZ0JBQWdCLEdBQUdwQixxREFBYyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ3FCLGNBQWNDLGdCQUFnQixHQUFHdEIscURBQWMsQ0FBQztJQUV2REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0IsY0FBYyxDQUFDO1FBQ3JCVixNQUFNVyxPQUFPLENBQUMsQ0FBQ0M7WUFDYixJQUFJQSxRQUFRQSxLQUFLQyxJQUFJLElBQUlELEtBQUtDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7Z0JBQ3ZESixXQUFXLENBQUNFLEtBQUtHLElBQUksQ0FBQyxHQUFHQyxJQUFJQyxlQUFlLENBQUNMO1lBQy9DO1FBQ0Y7UUFDQVAsWUFBWUs7UUFDWixPQUFPO1lBQ0xRLE9BQU9DLE1BQU0sQ0FBQ1QsYUFBYUMsT0FBTyxDQUFDLENBQUNTLE1BQVFKLElBQUlLLGVBQWUsQ0FBQ0Q7UUFDbEU7SUFDRixHQUFHO1FBQUNwQjtLQUFNO0lBRVYsTUFBTXNCLGtCQUFrQixDQUFDVixNQUFNVztRQUM3QnJCLGVBQWU7UUFDZkssZ0JBQWdCSztRQUNoQkgsZ0JBQWdCYztJQUNsQjtJQUVBLE1BQU1DLHFCQUFxQixDQUFDWjtRQUMxQixJQUFJQSxRQUFR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TTVELGVBQWU7Ozs7Ozs7O0FBSXJDO0dBcEhTSDtLQUFBQTtBQXNIcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlcnMvZnVuY3Rpb25zL1JlbmRlckZpbGVQcmV2aWV3LmpzPzM0NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXRoZXJJY29uIGZyb20gXCJmZWF0aGVyLWljb25zLXJlYWN0L2J1aWxkL0ZlYXRoZXJJY29uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiO1xuLy8gaW1wb3J0IEZpbGVUeXBlcyBmcm9tIFwiLi4vLi4vY29uZmlnL0ZpbGVUeXBlc1wiO1xuaW1wb3J0IEJvbHRNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL0JvbHRNb2RhbFwiO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9ucy9IZWxwZXJzXCI7XG5pbXBvcnQgQm9sdFRvb2x0aXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Cb2x0VG9vbHRpcFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWxcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9Db25maWdcIjtcblxuY29uc3QgY29uZmlnID0gbmV3IENvbmZpZygpO1xuY29uc3QgZmlsZVR5cGVzID0gY29uZmlnLmdldEZpbGVUeXBlcygpXG5cbmZ1bmN0aW9uIFJlbmRlckZpbGVQcmV2aWV3cyh7IGZpbGVzIH0pIHtcbiAgY29uc3QgW3ByZXZpZXdGaWxlLCBzZXRQcmV2aWV3RmlsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlVXJscywgc2V0RmlsZVVybHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0ZpbGVVcmxzID0ge307XG4gICAgZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgaWYgKGZpbGUgJiYgZmlsZS50eXBlICYmIGZpbGUudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG4gICAgICAgIG5ld0ZpbGVVcmxzW2ZpbGUubmFtZV0gPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldEZpbGVVcmxzKG5ld0ZpbGVVcmxzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgT2JqZWN0LnZhbHVlcyhuZXdGaWxlVXJscykuZm9yRWFjaCgodXJsKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCkpO1xuICAgIH07XG4gIH0sIFtmaWxlc10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVDbGljayA9IChmaWxlLCBpbmRleCkgPT4ge1xuICAgIHNldFByZXZpZXdGaWxlKHRydWUpO1xuICAgIHNldFNlbGVjdGVkRmlsZShmaWxlKTtcbiAgICBzZXRDdXJyZW50SW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNhcm91c2VsSXRlbSA9IChmaWxlKSA9PiB7XG4gICAgaWYgKGZpbGUgJiYgZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHtcbiAgICAgIHJldHVybiA8SW1hZ2UgY2xhc3NOYW1lPVwicm91bmRlZFwiIGZsdWlkIHNyYz17ZmlsZVVybHNbZmlsZS5uYW1lXX0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciB0aGUgZGVmYXVsdCBpY29uIG9yIGJhc2VkIG9uIHRoZSBmaWxlIHR5cGVcbiAgICAgIGNvbnN0IGZpbGVUeXBlID0gZmlsZS50eXBlO1xuICAgICAgY29uc3QgZmlsZVR5cGVJbmZvID0gZmlsZVR5cGVzW2ZpbGVUeXBlXTtcbiAgICAgIGNvbnN0IGljb24gPSBmaWxlVHlwZUluZm8gPyBmaWxlVHlwZUluZm8uaWNvbiA6IFwiZmlsZVwiO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoLTEwMCBiZy1saWdodCBwLTQgcGItNSByb3VuZGVkIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGZWF0aGVySWNvbiBpY29uPXtpY29ufSBzaXplPVwiNjBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e0hlbHBlcnMuVHJ1bmNhdGVUZXh0KGZpbGUubmFtZSwgMzIpfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e2ZpbGVUeXBlSW5mbz8uZnJpZW5kbHlOYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e2ZpbGVUeXBlSW5mby5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBnYXAtMlwiPlxuICAgICAgICB7ZmlsZXMubWFwKChtYXBwZWRGaWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVUeXBlID0gbWFwcGVkRmlsZS50eXBlO1xuICAgICAgICAgIGNvbnN0IGZpbGVUeXBlSW5mbyA9IGZpbGVUeXBlc1tmaWxlVHlwZV07XG4gICAgICAgICAgY29uc3QgaWNvbiA9IGZpbGVUeXBlSW5mbyA/IGZpbGVUeXBlSW5mby5pY29uIDogXCJmaWxlXCI7XG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZmlsZVR5cGVJbmZvID8gZmlsZVR5cGVJbmZvLmV4dGVuc2lvbiA6IFwiXCI7XG4gICAgICAgICAgY29uc3QgaXNJbWFnZSA9IG1hcHBlZEZpbGUudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpO1xuICAgICAgICAgIGNvbnN0IHRvb2x0aXBJZCA9IGB0b29sdGlwLSR7aW5kZXh9YDtcbiAgICAgICAgICBjb25zdCB0cnVuY2F0ZWROYW1lID0gSGVscGVycy5UcnVuY2F0ZVRleHQobWFwcGVkRmlsZS5uYW1lLCAxOCk7XG4gICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBmaWxlVXJsc1ttYXBwZWRGaWxlLm5hbWVdO1xuXG4gICAgICAgICAgY29uc3QgdG9vbHRpcERhdGEgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiBcIk5hbWVcIiwgdmFsdWU6IG1hcHBlZEZpbGUubmFtZSB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJGaWxlIHR5cGVcIiwgdmFsdWU6IG1hcHBlZEZpbGUudHlwZSB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJFeHRlbnNpb25cIiwgdmFsdWU6IGV4dGVuc2lvbiB9LFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvbHRUb29sdGlwXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGRlbGF5PXsyMDAwfVxuICAgICAgICAgICAgICBjb250ZW50PXt0b29sdGlwRGF0YX1cbiAgICAgICAgICAgICAgaWQ9e3Rvb2x0aXBJZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhaWMgZ2FwLTIgYm9yZGVyIHAtMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWxlQ2xpY2sobWFwcGVkRmlsZSwgaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lzSW1hZ2UgPyAoXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIzfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIzfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e21hcHBlZEZpbGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEZlYXRoZXJJY29uIGljb249e2ljb259IHNpemU9XCIxOVwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsXCI+e3RydW5jYXRlZE5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Cb2x0VG9vbHRpcD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEJvbHRNb2RhbFxuICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgIGludGVydmFsPXtudWxsfVxuICAgICAgICAgICAgICBpbmRpY2F0b3JzPXtmaWxlcy5sZW5ndGggPCAyID8gZmFsc2UgOiB0cnVlfVxuICAgICAgICAgICAgICBjb250cm9scz17ZmlsZXMubGVuZ3RoIDwgMiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgYWN0aXZlSW5kZXg9e2N1cnJlbnRJbmRleH1cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3NldEN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZmlsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJDYXJvdXNlbEl0ZW0oZmlsZSl9XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgICAgc2hvdz17cHJldmlld0ZpbGV9XG4gICAgICAgIG9uSGlkZT17KCkgPT4gc2V0UHJldmlld0ZpbGUoZmFsc2UpfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgUmVuZGVyRmlsZVByZXZpZXdzIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJGZWF0aGVySWNvbiIsIkltYWdlIiwiQm9sdE1vZGFsIiwiSGVscGVycyIsIkJvbHRUb29sdGlwIiwiQ2Fyb3VzZWwiLCJDb25maWciLCJjb25maWciLCJmaWxlVHlwZXMiLCJnZXRGaWxlVHlwZXMiLCJSZW5kZXJGaWxlUHJldmlld3MiLCJmaWxlcyIsInByZXZpZXdGaWxlIiwic2V0UHJldmlld0ZpbGUiLCJ1c2VTdGF0ZSIsImZpbGVVcmxzIiwic2V0RmlsZVVybHMiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJuZXdGaWxlVXJscyIsImZvckVhY2giLCJmaWxlIiwidHlwZSIsInN0YXJ0c1dpdGgiLCJuYW1lIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiT2JqZWN0IiwidmFsdWVzIiwidXJsIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRmlsZUNsaWNrIiwiaW5kZXgiLCJyZW5kZXJDYXJvdXNlbEl0ZW0iLCJjbGFzc05hbWUiLCJmbHVpZCIsInNyYyIsImZpbGVUeXBlIiwiZmlsZVR5cGVJbmZvIiwiaWNvbiIsImRpdiIsInNpemUiLCJUcnVuY2F0ZVRleHQiLCJmcmllbmRseU5hbWUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsIm1hcHBlZEZpbGUiLCJleHRlbnNpb24iLCJpc0ltYWdlIiwidG9vbHRpcElkIiwidHJ1bmNhdGVkTmFtZSIsImltYWdlVXJsIiwidG9vbHRpcERhdGEiLCJ0aXRsZSIsInZhbHVlIiwiZGVsYXkiLCJjb250ZW50IiwiaWQiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJyb3VuZGVkIiwiaW50ZXJ2YWwiLCJpbmRpY2F0b3JzIiwibGVuZ3RoIiwiY29udHJvbHMiLCJhY3RpdmVJbmRleCIsIm9uU2VsZWN0IiwiSXRlbSIsInNob3ciLCJvbkhpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/functions/RenderFilePreview.js\n"));

/***/ })

});