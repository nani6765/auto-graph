"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/LineChart5Sec.tsx":
/*!*************************************!*\
  !*** ./component/LineChart5Sec.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ \"./component/const.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/jaewon/code/wps/component/LineChart5Sec.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LineChart5Sec(_ref) {\n  _s();\n  var autoUpdate = _ref.autoUpdate,\n    data = _ref.data;\n  var chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var currentTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(30),\n    maxLength = _useState[0],\n    setMaxLength = _useState[1];\n  var labels = Array.from(new Array(maxLength), function (_, index) {\n    var diffTime = (maxLength - 1 - index) * 5;\n    var diff = currentTime.subtract(diffTime, 's');\n    return diff.format('mm:ss');\n  });\n  var enqueueWidthAutoDequeue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    if (!chartRef.current || !autoUpdate) {\n      return;\n    }\n    var chart = chartRef.current;\n    var label = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('mm:ss');\n    var data = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    });\n    chart.config.data.datasets[0].data.push(data);\n    chart.config.data.datasets[0].data.shift();\n    if (chart.config.data.labels) {\n      chart.config.data.labels.push(label);\n      chart.config.data.labels.shift();\n    }\n    chart.update();\n  }, [autoUpdate, chartRef]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var interval = setInterval(function () {\n      enqueueWidthAutoDequeue();\n    }, 5000);\n    return function () {\n      clearInterval(interval);\n    };\n  }, [enqueueWidthAutoDequeue]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"content\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Chart, {\n      id: \"5sec\",\n      type: \"line\",\n      ref: chartRef,\n      height: 70,\n      options: _const__WEBPACK_IMPORTED_MODULE_3__.options,\n      data: {\n        labels: labels,\n        datasets: [{\n          label: '5sec/1Data',\n          data: data,\n          borderColor: 'rgb(132, 99, 255)',\n          backgroundColor: 'rgba(132, 99, 255, 0.5)'\n        }]\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, this);\n}\n_s(LineChart5Sec, \"jHCttdoQTe68wjMBAeZ914ZwdGI=\");\n_c = LineChart5Sec;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart5Sec);\nvar _c;\n$RefreshReg$(_c, \"LineChart5Sec\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLEVBQUMsTUFBTTtNQUNYQyxHQUFHLEVBQUVqQyxRQUFTO01BQ2RrQyxNQUFNLEVBQUUsRUFBRztNQUNYMUMsT0FBTyxFQUFFQSwyQ0FBUTtNQUNqQk8sSUFBSSxFQUFFO1FBQ0pNLE1BQU0sRUFBTkEsTUFBTTtRQUNOaUIsUUFBUSxFQUFFLENBQ1I7VUFDRUwsS0FBSyxFQUFFLFlBQVk7VUFDbkJsQixJQUFJLEVBQUpBLElBQUk7VUFDSm9DLFdBQVcsRUFBRSxtQkFBbUI7VUFDaENDLGVBQWUsRUFBRTtRQUNuQixDQUFDO01BRUw7SUFBRTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDSDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNDLENBQUM7QUFFVjtBQUFDM0MsRUFBQSxDQTlEUUYsYUFBYTtBQUFBOEMsRUFBQSxHQUFiOUMsYUFBYTtBQWdFdEIsK0RBQWVBLGFBQWEsRUFBQztBQUFBLElBQUE4QyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvTGluZUNoYXJ0NVNlYy50c3g/M2RkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUyB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcbmltcG9ydCB7IGZha2VyIH0gZnJvbSAnQGZha2VyLWpzL2Zha2VyJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5cbmltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICcuL2NvbnN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgYXV0b1VwZGF0ZTogYm9vbGVhbjtcbiAgZGF0YTogbnVtYmVyW107XG59O1xuXG5mdW5jdGlvbiBMaW5lQ2hhcnQ1U2VjKHsgYXV0b1VwZGF0ZSwgZGF0YSB9OiBQcm9wcykge1xuICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZjxDaGFydEpTPCdsaW5lJz4+KG51bGwpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGRheWpzKCk7XG4gIGNvbnN0IFttYXhMZW5ndGgsIHNldE1heExlbmd0aF0gPSB1c2VTdGF0ZSgzMCk7XG5cbiAgY29uc3QgbGFiZWxzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4TGVuZ3RoKSwgKF8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGlmZlRpbWUgPSAobWF4TGVuZ3RoIC0gMSAtIGluZGV4KSAqIDU7XG4gICAgY29uc3QgZGlmZiA9IGN1cnJlbnRUaW1lLnN1YnRyYWN0KGRpZmZUaW1lLCAncycpO1xuICAgIHJldHVybiBkaWZmLmZvcm1hdCgnbW06c3MnKTtcbiAgfSk7XG5cbiAgY29uc3QgZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjaGFydFJlZi5jdXJyZW50IHx8ICFhdXRvVXBkYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoYXJ0ID0gY2hhcnRSZWYuY3VycmVudDtcbiAgICBjb25zdCBsYWJlbCA9IGRheWpzKCkuZm9ybWF0KCdtbTpzcycpO1xuICAgIGNvbnN0IGRhdGEgPSBmYWtlci5udW1iZXIuaW50KHsgbWluOiAwLCBtYXg6IDEwMDAgfSk7XG5cbiAgICBjaGFydC5jb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhLnB1c2goZGF0YSk7XG4gICAgY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbMF0uZGF0YS5zaGlmdCgpO1xuXG4gICAgaWYgKGNoYXJ0LmNvbmZpZy5kYXRhLmxhYmVscykge1xuICAgICAgY2hhcnQuY29uZmlnLmRhdGEubGFiZWxzLnB1c2gobGFiZWwpO1xuICAgICAgY2hhcnQuY29uZmlnLmRhdGEubGFiZWxzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgY2hhcnQudXBkYXRlKCk7XG4gIH0sIFthdXRvVXBkYXRlLCBjaGFydFJlZl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBlbnF1ZXVlV2lkdGhBdXRvRGVxdWV1ZSgpO1xuICAgIH0sIDUwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtlbnF1ZXVlV2lkdGhBdXRvRGVxdWV1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8Q2hhcnRcbiAgICAgICAgaWQ9XCI1c2VjXCJcbiAgICAgICAgdHlwZT1cImxpbmVcIlxuICAgICAgICByZWY9e2NoYXJ0UmVmfVxuICAgICAgICBoZWlnaHQ9ezcwfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBkYXRhPXt7XG4gICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiAnNXNlYy8xRGF0YScsXG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDEzMiwgOTksIDI1NSknLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEzMiwgOTksIDI1NSwgMC41KScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQ1U2VjO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaGFydCIsImZha2VyIiwiZGF5anMiLCJvcHRpb25zIiwianN4REVWIiwiX2pzeERFViIsIkxpbmVDaGFydDVTZWMiLCJfcmVmIiwiX3MiLCJhdXRvVXBkYXRlIiwiZGF0YSIsImNoYXJ0UmVmIiwiY3VycmVudFRpbWUiLCJfdXNlU3RhdGUiLCJtYXhMZW5ndGgiLCJzZXRNYXhMZW5ndGgiLCJsYWJlbHMiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJkaWZmVGltZSIsImRpZmYiLCJzdWJ0cmFjdCIsImZvcm1hdCIsImVucXVldWVXaWR0aEF1dG9EZXF1ZXVlIiwiY3VycmVudCIsImNoYXJ0IiwibGFiZWwiLCJudW1iZXIiLCJtaW4iLCJtYXgiLCJjb25maWciLCJkYXRhc2V0cyIsInB1c2giLCJzaGlmdCIsInVwZGF0ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJpZCIsInR5cGUiLCJyZWYiLCJoZWlnaHQiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/LineChart5Sec.tsx\n"));

/***/ })

});