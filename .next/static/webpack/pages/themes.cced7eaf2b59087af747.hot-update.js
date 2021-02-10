webpackHotUpdate_N_E("pages/themes",{

/***/ "./pages/themes/components/Tiers.jsx":
/*!*******************************************!*\
  !*** ./pages/themes/components/Tiers.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/Themes.module.scss */ \"./styles/Themes.module.scss\");\n/* harmony import */ var _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/patreon-carousel/pages/themes/components/Tiers.jsx\",\n    _this = undefined;\n\n\n\nvar TierBox = function TierBox(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tierBox,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: [\"Patron pays $\", details.price, \" per month\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = TierBox;\n\nvar Tiers = function Tiers(props) {\n  var tierData = props.data.tiers;\n  var tierBoxes = tierData.map(function (tier) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TierBox, {\n      details: tier\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tiers,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Get started now with fully customizable tiers and benefits\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"Start now and personalize later to make a membership your patrons will love.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.boxHolder,\n      children: tierBoxes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Tiers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tiers);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TierBox\");\n$RefreshReg$(_c2, \"Tiers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlbWVzL2NvbXBvbmVudHMvVGllcnMuanN4Pzc0NDciXSwibmFtZXMiOlsiVGllckJveCIsInByb3BzIiwic3R5bGVzIiwidGllckJveCIsImRldGFpbHMiLCJwcmljZSIsIlRpZXJzIiwidGllckRhdGEiLCJkYXRhIiwidGllcnMiLCJ0aWVyQm94ZXMiLCJtYXAiLCJ0aWVyIiwiYm94SG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBRXpCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxPQUF2QjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsa0NBQWtCQyxPQUFPLENBQUNDLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FURDs7S0FBTUwsTzs7QUFjTixJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTCxLQUFELEVBQVc7QUFFdkIsTUFBTU0sUUFBUSxHQUFHTixLQUFLLENBQUNPLElBQU4sQ0FBV0MsS0FBNUI7QUFFQSxNQUFNQyxTQUFTLEdBQUdILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUFDLElBQUksRUFBSTtBQUNyQyx3QkFBTyxxRUFBQyxPQUFEO0FBQVMsYUFBTyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRCxHQUZpQixDQUFsQjtBQUtBLHNCQUVFO0FBQUssYUFBUyxFQUFFVixpRUFBTSxDQUFDTyxLQUF2QjtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBRVAsaUVBQU0sQ0FBQ1csU0FBdkI7QUFBQSxnQkFDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFrQkQsQ0EzQkQ7O01BQU1KLEs7QUE2QlNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGhlbWVzL2NvbXBvbmVudHMvVGllcnMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvVGhlbWVzLm1vZHVsZS5zY3NzJztcblxuXG5jb25zdCBUaWVyQm94ID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpZXJCb3h9PlxuICAgICAgPGltZz48L2ltZz5cbiAgICAgIDxoMz5QYXRyb24gcGF5cyAke2RldGFpbHMucHJpY2V9IHBlciBtb250aDwvaDM+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuXG5jb25zdCBUaWVycyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHRpZXJEYXRhID0gcHJvcHMuZGF0YS50aWVyc1xuXG4gIGNvbnN0IHRpZXJCb3hlcyA9IHRpZXJEYXRhLm1hcCh0aWVyID0+IHtcbiAgICByZXR1cm4gPFRpZXJCb3ggZGV0YWlscz17dGllcn0vPlxuICB9KVxuXG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGllcnN9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkdldCBzdGFydGVkIG5vdyB3aXRoIGZ1bGx5IGN1c3RvbWl6YWJsZSB0aWVycyBhbmQgYmVuZWZpdHM8L2gxPlxuICAgICAgICA8aDM+U3RhcnQgbm93IGFuZCBwZXJzb25hbGl6ZSBsYXRlciB0byBtYWtlIGEgbWVtYmVyc2hpcCB5b3VyIHBhdHJvbnMgd2lsbCBsb3ZlLjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94SG9sZGVyfT5cbiAgICAgICAge3RpZXJCb3hlc31cbiAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGllcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/themes/components/Tiers.jsx\n");

/***/ })

})