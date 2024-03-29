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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jaewon_code_wps_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ \"./component/const.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/jaewon/code/wps/component/LineChart15Sec.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LineChart15Sec(_ref) {\n  _s();\n  var autoUpdate = _ref.autoUpdate,\n    data = _ref.data;\n  var chartRef2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var currentTime = dayjs__WEBPACK_IMPORTED_MODULE_3___default()();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30),\n    maxLength = _useState[0],\n    setMaxLength = _useState[1];\n  var labels = Array.from(new Array(maxLength), function (_, index) {\n    var diffTime = (maxLength - 1 - index) * 5;\n    var diff = currentTime.subtract(diffTime, 's');\n    return diff.format('mm:ss');\n  });\n  var enqueueWidthAutoDequeue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (!chartRef2.current || !autoUpdate) {\n      return;\n    }\n    var chart = chartRef2.current;\n    var currentTime = [dayjs__WEBPACK_IMPORTED_MODULE_3___default()().subtract(10, 's').format('mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_3___default()().subtract(5, 's').format('mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('mm:ss')];\n    var fakeData = [_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.number[\"int\"]({\n      min: 0,\n      max: 10000\n    }), _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.number[\"int\"]({\n      min: 0,\n      max: 10000\n    }), _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.number[\"int\"]({\n      min: 0,\n      max: 10000\n    })];\n    fakeData.forEach(function (data) {\n      chart.config.data.datasets[0].data.push(data);\n      chart.config.data.datasets[0].data.shift();\n    });\n    currentTime.forEach(function (label) {\n      if (chart.config.data.labels) {\n        chart.config.data.labels.push(label);\n        chart.config.data.labels.shift();\n      }\n    });\n    chart.update();\n  }, [autoUpdate, chartRef2]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var interval = setInterval(function () {\n      enqueueWidthAutoDequeue();\n    }, 15000);\n    return function () {\n      clearInterval(interval);\n    };\n  }, [enqueueWidthAutoDequeue]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"content\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {\n      ref: chartRef2,\n      id: \"15sec\",\n      height: 70,\n      options: _const__WEBPACK_IMPORTED_MODULE_4__.options,\n      data: {\n        labels: labels,\n        datasets: [{\n          label: '15sec/3Data',\n          data: (0,_Users_jaewon_code_wps_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data),\n          borderColor: 'rgb(255, 99, 132)',\n          backgroundColor: 'rgba(255, 99, 132, 0.5)'\n        }]\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n_s(LineChart15Sec, \"giIhUbPGQZ5DOsJJVQI+2fY/Y7M=\");\n_c = LineChart15Sec;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart15Sec);\nvar _c;\n$RefreshReg$(_c, \"LineChart15Sec\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvTGluZUNoYXJ0MTVTZWMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBRTFCO0FBQ0M7QUFDZDtBQUVRO0FBQUE7QUFPbEMsU0FBU1UsY0FBY0EsQ0FBQUMsSUFBQSxFQUE4QjtFQUFBQyxFQUFBO0VBQUEsSUFBM0JDLFVBQVUsR0FBQUYsSUFBQSxDQUFWRSxVQUFVO0lBQUVDLElBQUksR0FBQUgsSUFBQSxDQUFKRyxJQUFJO0VBQ3hDLElBQU1DLFNBQVMsR0FBR1osNkNBQU0sQ0FBa0IsSUFBSSxDQUFDO0VBQy9DLElBQU1hLFdBQVcsR0FBR1YsNENBQUssQ0FBQyxDQUFDO0VBQzNCLElBQUFXLFNBQUEsR0FBa0NmLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQXZDZ0IsU0FBUyxHQUFBRCxTQUFBO0lBQUVFLFlBQVksR0FBQUYsU0FBQTtFQUU5QixJQUFNRyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUlELEtBQUssQ0FBQ0gsU0FBUyxDQUFDLEVBQUUsVUFBQ0ssQ0FBQyxFQUFFQyxLQUFLLEVBQUs7SUFDNUQsSUFBTUMsUUFBUSxHQUFHLENBQUNQLFNBQVMsR0FBRyxDQUFDLEdBQUdNLEtBQUssSUFBSSxDQUFDO0lBQzVDLElBQU1FLElBQUksR0FBR1YsV0FBVyxDQUFDVyxRQUFRLENBQUNGLFFBQVEsRUFBRSxHQUFHLENBQUM7SUFDaEQsT0FBT0MsSUFBSSxDQUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDO0VBQzdCLENBQUMsQ0FBQztFQUVGLElBQU1DLHVCQUF1QixHQUFHN0Isa0RBQVcsQ0FBQyxZQUFNO0lBQ2hELElBQUksQ0FBQ2UsU0FBUyxDQUFDZSxPQUFPLElBQUksQ0FBQ2pCLFVBQVUsRUFBRTtNQUNyQztJQUNGO0lBQ0EsSUFBTWtCLEtBQUssR0FBR2hCLFNBQVMsQ0FBQ2UsT0FBTztJQUUvQixJQUFNZCxXQUFXLEdBQUcsQ0FDbEJWLDRDQUFLLENBQUMsQ0FBQyxDQUFDcUIsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN6Q3RCLDRDQUFLLENBQUMsQ0FBQyxDQUFDcUIsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN4Q3RCLDRDQUFLLENBQUMsQ0FBQyxDQUFDc0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUN4QjtJQUNELElBQU1JLFFBQVEsR0FBRyxDQUNmM0Isa0RBQUssQ0FBQzRCLE1BQU0sT0FBSSxDQUFDO01BQUVDLEdBQUcsRUFBRSxDQUFDO01BQUVDLEdBQUcsRUFBRTtJQUFNLENBQUMsQ0FBQyxFQUN4QzlCLGtEQUFLLENBQUM0QixNQUFNLE9BQUksQ0FBQztNQUFFQyxHQUFHLEVBQUUsQ0FBQztNQUFFQyxHQUFHLEVBQUU7SUFBTSxDQUFDLENBQUMsRUFDeEM5QixrREFBSyxDQUFDNEIsTUFBTSxPQUFJLENBQUM7TUFBRUMsR0FBRyxFQUFFLENBQUM7TUFBRUMsR0FBRyxFQUFFO0lBQU0sQ0FBQyxDQUFDLENBQ3pDO0lBRURILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLFVBQUN0QixJQUFJLEVBQUs7TUFDekJpQixLQUFLLENBQUNNLE1BQU0sQ0FBQ3ZCLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3hCLElBQUksQ0FBQ3lCLElBQUksQ0FBQ3pCLElBQUksQ0FBQztNQUM3Q2lCLEtBQUssQ0FBQ00sTUFBTSxDQUFDdkIsSUFBSSxDQUFDd0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDeEIsSUFBSSxDQUFDMEIsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0lBRUZ4QixXQUFXLENBQUNvQixPQUFPLENBQUMsVUFBQ0ssS0FBSyxFQUFLO01BQzdCLElBQUlWLEtBQUssQ0FBQ00sTUFBTSxDQUFDdkIsSUFBSSxDQUFDTSxNQUFNLEVBQUU7UUFDNUJXLEtBQUssQ0FBQ00sTUFBTSxDQUFDdkIsSUFBSSxDQUFDTSxNQUFNLENBQUNtQixJQUFJLENBQUNFLEtBQUssQ0FBQztRQUNwQ1YsS0FBSyxDQUFDTSxNQUFNLENBQUN2QixJQUFJLENBQUNNLE1BQU0sQ0FBQ29CLEtBQUssQ0FBQyxDQUFDO01BQ2xDO0lBQ0YsQ0FBQyxDQUFDO0lBRUZULEtBQUssQ0FBQ1csTUFBTSxDQUFDLENBQUM7RUFDaEIsQ0FBQyxFQUFFLENBQUM3QixVQUFVLEVBQUVFLFNBQVMsQ0FBQyxDQUFDO0VBRTNCZCxnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFNMEMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUNqQ2YsdUJBQXVCLENBQUMsQ0FBQztJQUMzQixDQUFDLEVBQUUsS0FBSyxDQUFDO0lBRVQsT0FBTyxZQUFNO01BQ1hnQixhQUFhLENBQUNGLFFBQVEsQ0FBQztJQUN6QixDQUFDO0VBQ0gsQ0FBQyxFQUFFLENBQUNkLHVCQUF1QixDQUFDLENBQUM7RUFFN0Isb0JBQ0VwQiw2REFBQTtJQUFLcUMsU0FBUyxFQUFDLFNBQVM7SUFBQUMsUUFBQSxlQUN0QnRDLDZEQUFBLENBQUNMLGlEQUFJO01BQ0g0QyxHQUFHLEVBQUVqQyxTQUFVO01BQ2ZrQyxFQUFFLEVBQUMsT0FBTztNQUNWQyxNQUFNLEVBQUUsRUFBRztNQUNYM0MsT0FBTyxFQUFFQSwyQ0FBUTtNQUNqQk8sSUFBSSxFQUFFO1FBQ0pNLE1BQU0sRUFBTkEsTUFBTTtRQUNOa0IsUUFBUSxFQUFFLENBQ1I7VUFDRUcsS0FBSyxFQUFFLGFBQWE7VUFDcEIzQixJQUFJLEVBQUFxQyxpSkFBQSxDQUFNckMsSUFBSSxDQUFDO1VBQ2ZzQyxXQUFXLEVBQUUsbUJBQW1CO1VBQ2hDQyxlQUFlLEVBQUU7UUFDbkIsQ0FBQztNQUVMO0lBQUU7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQ0g7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FDQyxDQUFDO0FBRVY7QUFBQzdDLEVBQUEsQ0ExRVFGLGNBQWM7QUFBQWdELEVBQUEsR0FBZGhELGNBQWM7QUE0RXZCLCtEQUFlQSxjQUFjLEVBQUM7QUFBQSxJQUFBZ0QsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0xpbmVDaGFydDE1U2VjLnRzeD9kNzBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi9jb25zdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGF1dG9VcGRhdGU6IGJvb2xlYW47XG4gIGRhdGE6IG51bWJlcltdO1xufTtcblxuZnVuY3Rpb24gTGluZUNoYXJ0MTVTZWMoeyBhdXRvVXBkYXRlLCBkYXRhIH06IFByb3BzKSB7XG4gIGNvbnN0IGNoYXJ0UmVmMiA9IHVzZVJlZjxDaGFydEpTPCdsaW5lJz4+KG51bGwpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGRheWpzKCk7XG4gIGNvbnN0IFttYXhMZW5ndGgsIHNldE1heExlbmd0aF0gPSB1c2VTdGF0ZSgzMCk7XG5cbiAgY29uc3QgbGFiZWxzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4TGVuZ3RoKSwgKF8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGlmZlRpbWUgPSAobWF4TGVuZ3RoIC0gMSAtIGluZGV4KSAqIDU7XG4gICAgY29uc3QgZGlmZiA9IGN1cnJlbnRUaW1lLnN1YnRyYWN0KGRpZmZUaW1lLCAncycpO1xuICAgIHJldHVybiBkaWZmLmZvcm1hdCgnbW06c3MnKTtcbiAgfSk7XG5cbiAgY29uc3QgZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjaGFydFJlZjIuY3VycmVudCB8fCAhYXV0b1VwZGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjaGFydCA9IGNoYXJ0UmVmMi5jdXJyZW50O1xuXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBbXG4gICAgICBkYXlqcygpLnN1YnRyYWN0KDEwLCAncycpLmZvcm1hdCgnbW06c3MnKSxcbiAgICAgIGRheWpzKCkuc3VidHJhY3QoNSwgJ3MnKS5mb3JtYXQoJ21tOnNzJyksXG4gICAgICBkYXlqcygpLmZvcm1hdCgnbW06c3MnKSxcbiAgICBdO1xuICAgIGNvbnN0IGZha2VEYXRhID0gW1xuICAgICAgZmFrZXIubnVtYmVyLmludCh7IG1pbjogMCwgbWF4OiAxMDAwMCB9KSxcbiAgICAgIGZha2VyLm51bWJlci5pbnQoeyBtaW46IDAsIG1heDogMTAwMDAgfSksXG4gICAgICBmYWtlci5udW1iZXIuaW50KHsgbWluOiAwLCBtYXg6IDEwMDAwIH0pLFxuICAgIF07XG5cbiAgICBmYWtlRGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjaGFydC5jb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhLnB1c2goZGF0YSk7XG4gICAgICBjaGFydC5jb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhLnNoaWZ0KCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50VGltZS5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgICAgaWYgKGNoYXJ0LmNvbmZpZy5kYXRhLmxhYmVscykge1xuICAgICAgICBjaGFydC5jb25maWcuZGF0YS5sYWJlbHMucHVzaChsYWJlbCk7XG4gICAgICAgIGNoYXJ0LmNvbmZpZy5kYXRhLmxhYmVscy5zaGlmdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2hhcnQudXBkYXRlKCk7XG4gIH0sIFthdXRvVXBkYXRlLCBjaGFydFJlZjJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZW5xdWV1ZVdpZHRoQXV0b0RlcXVldWUoKTtcbiAgICB9LCAxNTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW2VucXVldWVXaWR0aEF1dG9EZXF1ZXVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxMaW5lXG4gICAgICAgIHJlZj17Y2hhcnRSZWYyfVxuICAgICAgICBpZD1cIjE1c2VjXCJcbiAgICAgICAgaGVpZ2h0PXs3MH1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgZGF0YT17e1xuICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJzE1c2VjLzNEYXRhJyxcbiAgICAgICAgICAgICAgZGF0YTogWy4uLmRhdGFdLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNSknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0MTVTZWM7XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkxpbmUiLCJmYWtlciIsImRheWpzIiwib3B0aW9ucyIsImpzeERFViIsIl9qc3hERVYiLCJMaW5lQ2hhcnQxNVNlYyIsIl9yZWYiLCJfcyIsImF1dG9VcGRhdGUiLCJkYXRhIiwiY2hhcnRSZWYyIiwiY3VycmVudFRpbWUiLCJfdXNlU3RhdGUiLCJtYXhMZW5ndGgiLCJzZXRNYXhMZW5ndGgiLCJsYWJlbHMiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJkaWZmVGltZSIsImRpZmYiLCJzdWJ0cmFjdCIsImZvcm1hdCIsImVucXVldWVXaWR0aEF1dG9EZXF1ZXVlIiwiY3VycmVudCIsImNoYXJ0IiwiZmFrZURhdGEiLCJudW1iZXIiLCJtaW4iLCJtYXgiLCJmb3JFYWNoIiwiY29uZmlnIiwiZGF0YXNldHMiLCJwdXNoIiwic2hpZnQiLCJsYWJlbCIsInVwZGF0ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZWYiLCJpZCIsImhlaWdodCIsIl90b0NvbnN1bWFibGVBcnJheSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/LineChart15Sec.tsx\n"));

/***/ })

});