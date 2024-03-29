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

/***/ "./component/LineChart15Sec.tsx":
/*!**************************************!*\
  !*** ./component/LineChart15Sec.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ \"./component/const.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/jaewon/code/wps/component/LineChart15Sec.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LineChart15Sec(_ref) {\n  _s();\n  var autoUpdate = _ref.autoUpdate;\n  var chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var currentTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(30),\n    maxLength = _useState[0],\n    setMaxLength = _useState[1];\n  var labels = Array.from(new Array(maxLength), function (_, index) {\n    var diffTime = (maxLength - 1 - index) * 5;\n    var diff = currentTime.subtract(diffTime, 's');\n    return diff.format('mm:ss');\n  });\n  var data = {\n    labels: labels,\n    datasets: [{\n      label: '15sec/3Data',\n      data: labels.map(function () {\n        return _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n          min: 0,\n          max: 1000\n        });\n      }),\n      borderColor: 'rgb(255, 99, 132)',\n      backgroundColor: 'rgba(255, 99, 132, 0.5)'\n    }]\n  };\n  var enqueueWidthAutoDequeue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    if (!chartRef.current) {\n      return;\n    }\n    var chart = chartRef.current;\n    var currentTime = [dayjs__WEBPACK_IMPORTED_MODULE_2___default()().subtract(10, 's').format('mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_2___default()().subtract(5, 's').format('mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('mm:ss')];\n    var fakeData = [_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    }), _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    }), _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    })];\n    fakeData.forEach(function (data) {\n      chart.config.data.datasets[0].data.push(data);\n      chart.config.data.datasets[0].data.shift();\n    });\n    currentTime.forEach(function (label) {\n      if (chart.config.data.labels) {\n        chart.config.data.labels.push(label);\n        chart.config.data.labels.shift();\n      }\n    });\n    if (autoUpdate) {\n      chart.update();\n    }\n  }, [autoUpdate, chartRef]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var interval = setInterval(function () {\n      enqueueWidthAutoDequeue();\n    }, 15000);\n    return function () {\n      clearInterval(interval);\n    };\n  }, [enqueueWidthAutoDequeue]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"content\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Chart, {\n      type: \"line\",\n      ref: chartRef,\n      height: 70,\n      options: _const__WEBPACK_IMPORTED_MODULE_3__.options,\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 5\n  }, this);\n}\n_s(LineChart15Sec, \"jHCttdoQTe68wjMBAeZ914ZwdGI=\");\n_c = LineChart15Sec;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart15Sec);\nvar _c;\n$RefreshReg$(_c, \"LineChart15Sec\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNDLENBQUM7QUFFVjtBQUFDN0MsRUFBQSxDQTlFUUYsY0FBYztBQUFBZ0QsRUFBQSxHQUFkaEQsY0FBYztBQWdGdkIsK0RBQWVBLGNBQWMsRUFBQztBQUFBLElBQUFnRCxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvTGluZUNoYXJ0MTVTZWMudHN4P2Q3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi9jb25zdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGF1dG9VcGRhdGU6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBMaW5lQ2hhcnQxNVNlYyh7IGF1dG9VcGRhdGUgfTogUHJvcHMpIHtcbiAgY29uc3QgY2hhcnRSZWYgPSB1c2VSZWY8Q2hhcnRKUzwnbGluZSc+PihudWxsKTtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBkYXlqcygpO1xuICBjb25zdCBbbWF4TGVuZ3RoLCBzZXRNYXhMZW5ndGhdID0gdXNlU3RhdGUoMzApO1xuXG4gIGNvbnN0IGxhYmVscyA9IEFycmF5LmZyb20obmV3IEFycmF5KG1heExlbmd0aCksIChfLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpZmZUaW1lID0gKG1heExlbmd0aCAtIDEgLSBpbmRleCkgKiA1O1xuICAgIGNvbnN0IGRpZmYgPSBjdXJyZW50VGltZS5zdWJ0cmFjdChkaWZmVGltZSwgJ3MnKTtcbiAgICByZXR1cm4gZGlmZi5mb3JtYXQoJ21tOnNzJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnMTVzZWMvM0RhdGEnLFxuICAgICAgICBkYXRhOiBsYWJlbHMubWFwKCgpID0+IGZha2VyLm51bWJlci5pbnQoeyBtaW46IDAsIG1heDogMTAwMCB9KSksXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMC41KScsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjaGFydFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoYXJ0ID0gY2hhcnRSZWYuY3VycmVudDtcblxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gW1xuICAgICAgZGF5anMoKS5zdWJ0cmFjdCgxMCwgJ3MnKS5mb3JtYXQoJ21tOnNzJyksXG4gICAgICBkYXlqcygpLnN1YnRyYWN0KDUsICdzJykuZm9ybWF0KCdtbTpzcycpLFxuICAgICAgZGF5anMoKS5mb3JtYXQoJ21tOnNzJyksXG4gICAgXTtcbiAgICBjb25zdCBmYWtlRGF0YSA9IFtcbiAgICAgIGZha2VyLm51bWJlci5pbnQoeyBtaW46IDAsIG1heDogMTAwMCB9KSxcbiAgICAgIGZha2VyLm51bWJlci5pbnQoeyBtaW46IDAsIG1heDogMTAwMCB9KSxcbiAgICAgIGZha2VyLm51bWJlci5pbnQoeyBtaW46IDAsIG1heDogMTAwMCB9KSxcbiAgICBdO1xuXG4gICAgZmFrZURhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbMF0uZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbMF0uZGF0YS5zaGlmdCgpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudFRpbWUuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgIGlmIChjaGFydC5jb25maWcuZGF0YS5sYWJlbHMpIHtcbiAgICAgICAgY2hhcnQuY29uZmlnLmRhdGEubGFiZWxzLnB1c2gobGFiZWwpO1xuICAgICAgICBjaGFydC5jb25maWcuZGF0YS5sYWJlbHMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChhdXRvVXBkYXRlKSB7XG4gICAgICBjaGFydC51cGRhdGUoKTtcbiAgICB9XG4gIH0sIFthdXRvVXBkYXRlLCBjaGFydFJlZl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBlbnF1ZXVlV2lkdGhBdXRvRGVxdWV1ZSgpO1xuICAgIH0sIDE1MDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgPENoYXJ0XG4gICAgICAgIHR5cGU9XCJsaW5lXCJcbiAgICAgICAgcmVmPXtjaGFydFJlZn1cbiAgICAgICAgaGVpZ2h0PXs3MH1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDE1U2VjO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJDaGFydCIsImZha2VyIiwiZGF5anMiLCJvcHRpb25zIiwianN4REVWIiwiX2pzeERFViIsIkxpbmVDaGFydDE1U2VjIiwiX3JlZiIsIl9zIiwiYXV0b1VwZGF0ZSIsImNoYXJ0UmVmIiwiY3VycmVudFRpbWUiLCJfdXNlU3RhdGUiLCJtYXhMZW5ndGgiLCJzZXRNYXhMZW5ndGgiLCJsYWJlbHMiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJkaWZmVGltZSIsImRpZmYiLCJzdWJ0cmFjdCIsImZvcm1hdCIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwibWFwIiwibnVtYmVyIiwibWluIiwibWF4IiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbnF1ZXVlV2lkdGhBdXRvRGVxdWV1ZSIsImN1cnJlbnQiLCJjaGFydCIsImZha2VEYXRhIiwiZm9yRWFjaCIsImNvbmZpZyIsInB1c2giLCJzaGlmdCIsInVwZGF0ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJ0eXBlIiwicmVmIiwiaGVpZ2h0IiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/LineChart15Sec.tsx\n"));

/***/ })

});