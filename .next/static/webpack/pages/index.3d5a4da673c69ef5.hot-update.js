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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ \"./component/const.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/jaewon/code/wps/component/LineChart15Sec.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LineChart15Sec(_ref) {\n  _s();\n  var autoUpdate = _ref.autoUpdate,\n    data = _ref.data;\n  var chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var currentTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(30),\n    maxLength = _useState[0],\n    setMaxLength = _useState[1];\n  var labels = Array.from(new Array(maxLength), function (_, index) {\n    var diffTime = (maxLength - 1 - index) * 5;\n    var diff = currentTime.subtract(diffTime, 's');\n    return diff.format('mm:ss');\n  });\n  var enqueueWidthAutoDequeue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    if (!chartRef.current || !autoUpdate) {\n      return;\n    }\n    var chart = chartRef.current;\n    var currentTime = [dayjs__WEBPACK_IMPORTED_MODULE_2___default()().subtract(10, 's').format('mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_2___default()().subtract(5, 's').format('mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('mm:ss')];\n    var fakeData = [_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    }), _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    }), _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    })];\n    console.log('chart.config.data.datasets[0] : ', chart.config.data.datasets[0]);\n    fakeData.forEach(function (data) {\n      console.log('data : ', data);\n      chart.config.data.datasets[0].data.push(data);\n      chart.config.data.datasets[0].data.shift();\n    });\n    currentTime.forEach(function (label) {\n      if (chart.config.data.labels) {\n        chart.config.data.labels.push(label);\n        chart.config.data.labels.shift();\n      }\n    });\n    chart.update();\n  }, [autoUpdate, chartRef]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var interval = setInterval(function () {\n      console.log('i am fire??');\n      enqueueWidthAutoDequeue();\n    }, 15000);\n    return function () {\n      clearInterval(interval);\n    };\n  }, [enqueueWidthAutoDequeue]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"content\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Chart, {\n      id: \"15sec\",\n      type: \"line\",\n      ref: chartRef,\n      height: 70,\n      options: _const__WEBPACK_IMPORTED_MODULE_3__.options,\n      data: {\n        labels: labels,\n        datasets: [{\n          label: '15sec/3Data',\n          data: data,\n          borderColor: 'rgb(255, 99, 132)',\n          backgroundColor: 'rgba(255, 99, 132, 0.5)'\n        }]\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n_s(LineChart15Sec, \"jHCttdoQTe68wjMBAeZ914ZwdGI=\");\n_c = LineChart15Sec;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart15Sec);\nvar _c;\n$RefreshReg$(_c, \"LineChart15Sec\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CO1VBQ2hDQyxlQUFlLEVBQUU7UUFDbkIsQ0FBQztNQUVMO0lBQUU7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQ0g7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FDQyxDQUFDO0FBRVY7QUFBQy9DLEVBQUEsQ0FsRlFGLGNBQWM7QUFBQWtELEVBQUEsR0FBZGxELGNBQWM7QUFvRnZCLCtEQUFlQSxjQUFjLEVBQUM7QUFBQSxJQUFBa0QsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0xpbmVDaGFydDE1U2VjLnRzeD9kNzBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IHsgZmFrZXIgfSBmcm9tICdAZmFrZXItanMvZmFrZXInO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcblxuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJy4vY29uc3QnO1xuXG50eXBlIFByb3BzID0ge1xuICBhdXRvVXBkYXRlOiBib29sZWFuO1xuICBkYXRhOiBudW1iZXJbXTtcbn07XG5cbmZ1bmN0aW9uIExpbmVDaGFydDE1U2VjKHsgYXV0b1VwZGF0ZSwgZGF0YSB9OiBQcm9wcykge1xuICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZjxDaGFydEpTPCdsaW5lJz4+KG51bGwpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGRheWpzKCk7XG4gIGNvbnN0IFttYXhMZW5ndGgsIHNldE1heExlbmd0aF0gPSB1c2VTdGF0ZSgzMCk7XG5cbiAgY29uc3QgbGFiZWxzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4TGVuZ3RoKSwgKF8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGlmZlRpbWUgPSAobWF4TGVuZ3RoIC0gMSAtIGluZGV4KSAqIDU7XG4gICAgY29uc3QgZGlmZiA9IGN1cnJlbnRUaW1lLnN1YnRyYWN0KGRpZmZUaW1lLCAncycpO1xuICAgIHJldHVybiBkaWZmLmZvcm1hdCgnbW06c3MnKTtcbiAgfSk7XG5cbiAgY29uc3QgZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjaGFydFJlZi5jdXJyZW50IHx8ICFhdXRvVXBkYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoYXJ0ID0gY2hhcnRSZWYuY3VycmVudDtcblxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gW1xuICAgICAgZGF5anMoKS5zdWJ0cmFjdCgxMCwgJ3MnKS5mb3JtYXQoJ21tOnNzJyksXG4gICAgICBkYXlqcygpLnN1YnRyYWN0KDUsICdzJykuZm9ybWF0KCdtbTpzcycpLFxuICAgICAgZGF5anMoKS5mb3JtYXQoJ21tOnNzJyksXG4gICAgXTtcbiAgICBjb25zdCBmYWtlRGF0YSA9IFtcbiAgICAgIGZha2VyLm51bWJlci5pbnQoeyBtaW46IDAsIG1heDogMTAwMCB9KSxcbiAgICAgIGZha2VyLm51bWJlci5pbnQoeyBtaW46IDAsIG1heDogMTAwMCB9KSxcbiAgICAgIGZha2VyLm51bWJlci5pbnQoeyBtaW46IDAsIG1heDogMTAwMCB9KSxcbiAgICBdO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICAnY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbMF0gOiAnLFxuICAgICAgY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbMF1cbiAgICApO1xuXG4gICAgZmFrZURhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2RhdGEgOiAnLCBkYXRhKTtcbiAgICAgIGNoYXJ0LmNvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEucHVzaChkYXRhKTtcbiAgICAgIGNoYXJ0LmNvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEuc2hpZnQoKTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRUaW1lLmZvckVhY2goKGxhYmVsKSA9PiB7XG4gICAgICBpZiAoY2hhcnQuY29uZmlnLmRhdGEubGFiZWxzKSB7XG4gICAgICAgIGNoYXJ0LmNvbmZpZy5kYXRhLmxhYmVscy5wdXNoKGxhYmVsKTtcbiAgICAgICAgY2hhcnQuY29uZmlnLmRhdGEubGFiZWxzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGFydC51cGRhdGUoKTtcbiAgfSwgW2F1dG9VcGRhdGUsIGNoYXJ0UmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdpIGFtIGZpcmU/PycpO1xuICAgICAgZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWUoKTtcbiAgICB9LCAxNTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW2VucXVldWVXaWR0aEF1dG9EZXF1ZXVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxDaGFydFxuICAgICAgICBpZD1cIjE1c2VjXCJcbiAgICAgICAgdHlwZT1cImxpbmVcIlxuICAgICAgICByZWY9e2NoYXJ0UmVmfVxuICAgICAgICBoZWlnaHQ9ezcwfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBkYXRhPXt7XG4gICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiAnMTVzZWMvM0RhdGEnLFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNSknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0MTVTZWM7XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkNoYXJ0IiwiZmFrZXIiLCJkYXlqcyIsIm9wdGlvbnMiLCJqc3hERVYiLCJfanN4REVWIiwiTGluZUNoYXJ0MTVTZWMiLCJfcmVmIiwiX3MiLCJhdXRvVXBkYXRlIiwiZGF0YSIsImNoYXJ0UmVmIiwiY3VycmVudFRpbWUiLCJfdXNlU3RhdGUiLCJtYXhMZW5ndGgiLCJzZXRNYXhMZW5ndGgiLCJsYWJlbHMiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJkaWZmVGltZSIsImRpZmYiLCJzdWJ0cmFjdCIsImZvcm1hdCIsImVucXVldWVXaWR0aEF1dG9EZXF1ZXVlIiwiY3VycmVudCIsImNoYXJ0IiwiZmFrZURhdGEiLCJudW1iZXIiLCJtaW4iLCJtYXgiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwiZGF0YXNldHMiLCJmb3JFYWNoIiwicHVzaCIsInNoaWZ0IiwibGFiZWwiLCJ1cGRhdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaWQiLCJ0eXBlIiwicmVmIiwiaGVpZ2h0IiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/LineChart15Sec.tsx\n"));

/***/ })

});