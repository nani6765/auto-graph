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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ \"./component/const.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/jaewon/code/wps/component/LineChart15Sec.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LineChart15Sec(_ref) {\n  _s();\n  var autoUpdate = _ref.autoUpdate,\n    data = _ref.data;\n  var chartRef2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var currentTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(30),\n    maxLength = _useState[0],\n    setMaxLength = _useState[1];\n  var labels = Array.from(new Array(maxLength), function (_, index) {\n    var diffTime = (maxLength - 1 - index) * 5;\n    var diff = currentTime.subtract(diffTime, 's');\n    return diff.format('mm:ss');\n  });\n  var enqueueWidthAutoDequeue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    if (!chartRef2.current || !autoUpdate) {\n      return;\n    }\n    var chart = chartRef2.current;\n    var currentTime = [dayjs__WEBPACK_IMPORTED_MODULE_2___default()().subtract(10, 's').format('mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_2___default()().subtract(5, 's').format('mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('mm:ss')];\n    var fakeData = [_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    }), _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    }), _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.number[\"int\"]({\n      min: 0,\n      max: 1000\n    })];\n    console.log('chart.config.data.datasets[0] : ', chart.config.data.datasets[0]);\n    fakeData.forEach(function (data) {\n      console.log('data : ', data);\n      chart.config.data.datasets[0].data.push(data);\n      chart.config.data.datasets[0].data.shift();\n    });\n    currentTime.forEach(function (label) {\n      if (chart.config.data.labels) {\n        chart.config.data.labels.push(label);\n        chart.config.data.labels.shift();\n      }\n    });\n    chart.update();\n  }, [autoUpdate, chartRef2]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var interval = setInterval(function () {\n      console.log('i am fire??');\n      enqueueWidthAutoDequeue();\n    }, 15000);\n    return function () {\n      clearInterval(interval);\n    };\n  }, [enqueueWidthAutoDequeue]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"content\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Line, {\n      ref: chartRef2,\n      id: \"15sec\",\n      height: 70,\n      options: _const__WEBPACK_IMPORTED_MODULE_3__.options,\n      data: {\n        labels: labels,\n        datasets: [{\n          label: '15sec/3Data',\n          data: data,\n          borderColor: 'rgb(255, 99, 132)',\n          backgroundColor: 'rgba(255, 99, 132, 0.5)'\n        }]\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, this);\n}\n_s(LineChart15Sec, \"giIhUbPGQZ5DOsJJVQI+2fY/Y7M=\");\n_c = LineChart15Sec;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart15Sec);\nvar _c;\n$RefreshReg$(_c, \"LineChart15Sec\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDbkIsQ0FBQztNQUVMO0lBQUU7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQ0g7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FDQyxDQUFDO0FBRVY7QUFBQzlDLEVBQUEsQ0FqRlFGLGNBQWM7QUFBQWlELEVBQUEsR0FBZGpELGNBQWM7QUFtRnZCLCtEQUFlQSxjQUFjLEVBQUM7QUFBQSxJQUFBaUQsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0xpbmVDaGFydDE1U2VjLnRzeD9kNzBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi9jb25zdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGF1dG9VcGRhdGU6IGJvb2xlYW47XG4gIGRhdGE6IG51bWJlcltdO1xufTtcblxuZnVuY3Rpb24gTGluZUNoYXJ0MTVTZWMoeyBhdXRvVXBkYXRlLCBkYXRhIH06IFByb3BzKSB7XG4gIGNvbnN0IGNoYXJ0UmVmMiA9IHVzZVJlZjxDaGFydEpTPCdsaW5lJz4+KG51bGwpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGRheWpzKCk7XG4gIGNvbnN0IFttYXhMZW5ndGgsIHNldE1heExlbmd0aF0gPSB1c2VTdGF0ZSgzMCk7XG5cbiAgY29uc3QgbGFiZWxzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4TGVuZ3RoKSwgKF8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGlmZlRpbWUgPSAobWF4TGVuZ3RoIC0gMSAtIGluZGV4KSAqIDU7XG4gICAgY29uc3QgZGlmZiA9IGN1cnJlbnRUaW1lLnN1YnRyYWN0KGRpZmZUaW1lLCAncycpO1xuICAgIHJldHVybiBkaWZmLmZvcm1hdCgnbW06c3MnKTtcbiAgfSk7XG5cbiAgY29uc3QgZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjaGFydFJlZjIuY3VycmVudCB8fCAhYXV0b1VwZGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjaGFydCA9IGNoYXJ0UmVmMi5jdXJyZW50O1xuXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBbXG4gICAgICBkYXlqcygpLnN1YnRyYWN0KDEwLCAncycpLmZvcm1hdCgnbW06c3MnKSxcbiAgICAgIGRheWpzKCkuc3VidHJhY3QoNSwgJ3MnKS5mb3JtYXQoJ21tOnNzJyksXG4gICAgICBkYXlqcygpLmZvcm1hdCgnbW06c3MnKSxcbiAgICBdO1xuICAgIGNvbnN0IGZha2VEYXRhID0gW1xuICAgICAgZmFrZXIubnVtYmVyLmludCh7IG1pbjogMCwgbWF4OiAxMDAwIH0pLFxuICAgICAgZmFrZXIubnVtYmVyLmludCh7IG1pbjogMCwgbWF4OiAxMDAwIH0pLFxuICAgICAgZmFrZXIubnVtYmVyLmludCh7IG1pbjogMCwgbWF4OiAxMDAwIH0pLFxuICAgIF07XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdjaGFydC5jb25maWcuZGF0YS5kYXRhc2V0c1swXSA6ICcsXG4gICAgICBjaGFydC5jb25maWcuZGF0YS5kYXRhc2V0c1swXVxuICAgICk7XG5cbiAgICBmYWtlRGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZGF0YSA6ICcsIGRhdGEpO1xuICAgICAgY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbMF0uZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbMF0uZGF0YS5zaGlmdCgpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudFRpbWUuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgIGlmIChjaGFydC5jb25maWcuZGF0YS5sYWJlbHMpIHtcbiAgICAgICAgY2hhcnQuY29uZmlnLmRhdGEubGFiZWxzLnB1c2gobGFiZWwpO1xuICAgICAgICBjaGFydC5jb25maWcuZGF0YS5sYWJlbHMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoYXJ0LnVwZGF0ZSgpO1xuICB9LCBbYXV0b1VwZGF0ZSwgY2hhcnRSZWYyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdpIGFtIGZpcmU/PycpO1xuICAgICAgZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWUoKTtcbiAgICB9LCAxNTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW2VucXVldWVXaWR0aEF1dG9EZXF1ZXVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxMaW5lXG4gICAgICAgIHJlZj17Y2hhcnRSZWYyfVxuICAgICAgICBpZD1cIjE1c2VjXCJcbiAgICAgICAgaGVpZ2h0PXs3MH1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgZGF0YT17e1xuICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJzE1c2VjLzNEYXRhJyxcbiAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjUpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDE1U2VjO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJMaW5lIiwiZmFrZXIiLCJkYXlqcyIsIm9wdGlvbnMiLCJqc3hERVYiLCJfanN4REVWIiwiTGluZUNoYXJ0MTVTZWMiLCJfcmVmIiwiX3MiLCJhdXRvVXBkYXRlIiwiZGF0YSIsImNoYXJ0UmVmMiIsImN1cnJlbnRUaW1lIiwiX3VzZVN0YXRlIiwibWF4TGVuZ3RoIiwic2V0TWF4TGVuZ3RoIiwibGFiZWxzIiwiQXJyYXkiLCJmcm9tIiwiXyIsImluZGV4IiwiZGlmZlRpbWUiLCJkaWZmIiwic3VidHJhY3QiLCJmb3JtYXQiLCJlbnF1ZXVlV2lkdGhBdXRvRGVxdWV1ZSIsImN1cnJlbnQiLCJjaGFydCIsImZha2VEYXRhIiwibnVtYmVyIiwibWluIiwibWF4IiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsInB1c2giLCJzaGlmdCIsImxhYmVsIiwidXBkYXRlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInJlZiIsImlkIiwiaGVpZ2h0IiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/LineChart15Sec.tsx\n"));

/***/ })

});