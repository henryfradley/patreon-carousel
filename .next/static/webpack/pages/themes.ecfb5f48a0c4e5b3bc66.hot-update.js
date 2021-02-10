webpackHotUpdate_N_E("pages/themes",{

/***/ "./pages/themes/components/Benefits.jsx":
/*!**********************************************!*\
  !*** ./pages/themes/components/Benefits.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/Themes.module.scss */ \"./styles/Themes.module.scss\");\n/* harmony import */ var _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/patreon-carousel/pages/themes/components/Benefits.jsx\",\n    _this = undefined;\n\n\n\nvar BenefitsBox = function BenefitsBox(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.benefitsBox,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: props.data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.data.detail\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = BenefitsBox;\n\nvar Benefits = function Benefits(props) {\n  var benefits = props.data.benefits;\n  console.log(benefits);\n  var benefitsList = benefits.map(function (benefit) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BenefitsBox, {\n      data: benefit\n    }, benefits.indexOf(benefit), false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 12\n    }, _this);\n  });\n  return console.log(benefits), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.benefits,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Benefits in this kit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Easy to edit, customize, and personalize for your page. You can always edit your tiers even after you launch.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.benefitsList,\n      children: benefitsList\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Benefits;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Benefits);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BenefitsBox\");\n$RefreshReg$(_c2, \"Benefits\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlbWVzL2NvbXBvbmVudHMvQmVuZWZpdHMuanN4P2ZmMzEiXSwibmFtZXMiOlsiQmVuZWZpdHNCb3giLCJwcm9wcyIsInN0eWxlcyIsImJlbmVmaXRzQm94IiwiZGF0YSIsInRpdGxlIiwiZGV0YWlsIiwiQmVuZWZpdHMiLCJiZW5lZml0cyIsImNvbnNvbGUiLCJsb2ciLCJiZW5lZml0c0xpc3QiLCJtYXAiLCJiZW5lZml0IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsV0FBdkI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFLRixLQUFLLENBQUNHLElBQU4sQ0FBV0M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSxnQkFBSUosS0FBSyxDQUFDRyxJQUFOLENBQVdFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FSRDs7S0FBTU4sVzs7QUFVTixJQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDTixLQUFELEVBQVc7QUFFMUIsTUFBTU8sUUFBUSxHQUFHUCxLQUFLLENBQUNHLElBQU4sQ0FBV0ksUUFBNUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFHQSxNQUFNRyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUFDLE9BQU8sRUFBSTtBQUMzQyx3QkFBTyxxRUFBQyxXQUFEO0FBQWEsVUFBSSxFQUFFQTtBQUFuQixPQUFpQ0wsUUFBUSxDQUFDTSxPQUFULENBQWlCRCxPQUFqQixDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRCxHQUZvQixDQUFyQjtBQUlBLFNBQ0VKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaLGdCQUNBO0FBQUssYUFBUyxFQUFFTixpRUFBTSxDQUFDTSxRQUF2QjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUVOLGlFQUFNLENBQUNTLFlBQXZCO0FBQUEsZ0JBQ0NBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBV0QsQ0FyQkQ7O01BQU1KLFE7QUF1QlNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGhlbWVzL2NvbXBvbmVudHMvQmVuZWZpdHMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvVGhlbWVzLm1vZHVsZS5zY3NzJztcblxuXG5jb25zdCBCZW5lZml0c0JveCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmVuZWZpdHNCb3h9PlxuICAgICAgPGltZz48L2ltZz5cbiAgICAgIDxoMz57cHJvcHMuZGF0YS50aXRsZX08L2gzPlxuICAgICAgPHA+e3Byb3BzLmRhdGEuZGV0YWlsfTwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBCZW5lZml0cyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGJlbmVmaXRzID0gcHJvcHMuZGF0YS5iZW5lZml0cztcbiAgY29uc29sZS5sb2coYmVuZWZpdHMpXG5cblxuICBjb25zdCBiZW5lZml0c0xpc3QgPSBiZW5lZml0cy5tYXAoYmVuZWZpdCA9PiB7XG4gICAgcmV0dXJuIDxCZW5lZml0c0JveCBkYXRhPXtiZW5lZml0fSBrZXk9e2JlbmVmaXRzLmluZGV4T2YoYmVuZWZpdCl9Lz5cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIGNvbnNvbGUubG9nKGJlbmVmaXRzKSxcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJlbmVmaXRzfT5cbiAgICAgIDxoMT5CZW5lZml0cyBpbiB0aGlzIGtpdDwvaDE+XG4gICAgICA8aDM+RWFzeSB0byBlZGl0LCBjdXN0b21pemUsIGFuZCBwZXJzb25hbGl6ZSBmb3IgeW91ciBwYWdlLiBZb3UgY2FuIGFsd2F5cyBlZGl0IHlvdXIgdGllcnMgZXZlbiBhZnRlciB5b3UgbGF1bmNoLjwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJlbmVmaXRzTGlzdH0+XG4gICAgICB7YmVuZWZpdHNMaXN0fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCZW5lZml0czsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/themes/components/Benefits.jsx\n");

/***/ })

})