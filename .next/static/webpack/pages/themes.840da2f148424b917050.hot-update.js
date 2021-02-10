webpackHotUpdate_N_E("pages/themes",{

/***/ "./pages/themes/components/Tiers.jsx":
/*!*******************************************!*\
  !*** ./pages/themes/components/Tiers.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/Themes.module.scss */ \"./styles/Themes.module.scss\");\n/* harmony import */ var _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/patreon-carousel/pages/themes/components/Tiers.jsx\",\n    _this = undefined;\n\n\n\nvar Includes = function Includes(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.includes,\n    children: props.info\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Includes;\n\nvar TierBox = function TierBox(props) {\n  var includes = props.details.includes;\n  var includesList = includes.map(function (info) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Includes, {\n      info: info\n    }, includes.indexOf(info), false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tierBox,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [\"Patron pays $\", props.details.price, \" per month\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.details.info\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.includesList,\n      children: includesList\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = TierBox;\n\nvar Tiers = function Tiers(props) {\n  var tierData = props.data.tiers;\n  var tierBoxes = tierData.map(function (tier) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TierBox, {\n      details: tier\n    }, tierData.indexOf(tier), false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tiers,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Get started now with fully customizable tiers and benefits\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"Start now and personalize later to make a membership your patrons will love.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.boxHolder,\n      children: tierBoxes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = Tiers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tiers);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Includes\");\n$RefreshReg$(_c2, \"TierBox\");\n$RefreshReg$(_c3, \"Tiers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlbWVzL2NvbXBvbmVudHMvVGllcnMuanN4Pzc0NDciXSwibmFtZXMiOlsiSW5jbHVkZXMiLCJwcm9wcyIsInN0eWxlcyIsImluY2x1ZGVzIiwiaW5mbyIsIlRpZXJCb3giLCJkZXRhaWxzIiwiaW5jbHVkZXNMaXN0IiwibWFwIiwiaW5kZXhPZiIsInRpZXJCb3giLCJwcmljZSIsIlRpZXJzIiwidGllckRhdGEiLCJkYXRhIiwidGllcnMiLCJ0aWVyQm94ZXMiLCJ0aWVyIiwiYm94SG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxRQUF2QjtBQUFBLGNBQ0dGLEtBQUssQ0FBQ0c7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztLQUFNSixROztBQVVOLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNKLEtBQUQsRUFBVztBQUV6QixNQUFNRSxRQUFRLEdBQUdGLEtBQUssQ0FBQ0ssT0FBTixDQUFjSCxRQUEvQjtBQUNBLE1BQU1JLFlBQVksR0FBR0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQUosSUFBSSxFQUFJO0FBQ3hDLHdCQUFPLHFFQUFDLFFBQUQ7QUFBVSxVQUFJLEVBQUVBO0FBQWhCLE9BQTJCRCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJMLElBQWpCLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBRm9CLENBQXJCO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVGLGlFQUFNLENBQUNRLE9BQXZCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxrQ0FBa0JULEtBQUssQ0FBQ0ssT0FBTixDQUFjSyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUlWLEtBQUssQ0FBQ0ssT0FBTixDQUFjRjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFLLGVBQVMsRUFBRUYsaUVBQU0sQ0FBQ0ssWUFBdkI7QUFBQSxnQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWxCRDs7TUFBTUYsTzs7QUF1Qk4sSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ1gsS0FBRCxFQUFXO0FBRXZCLE1BQU1ZLFFBQVEsR0FBR1osS0FBSyxDQUFDYSxJQUFOLENBQVdDLEtBQTVCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSCxRQUFRLENBQUNMLEdBQVQsQ0FBYSxVQUFBUyxJQUFJLEVBQUk7QUFDckMsd0JBQU8scUVBQUMsT0FBRDtBQUFTLGFBQU8sRUFBRUE7QUFBbEIsT0FBNkJKLFFBQVEsQ0FBQ0osT0FBVCxDQUFpQlEsSUFBakIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FGaUIsQ0FBbEI7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWYsaUVBQU0sQ0FBQ2EsS0FBdkI7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBSyxlQUFTLEVBQUViLGlFQUFNLENBQUNnQixTQUF2QjtBQUFBLGdCQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBbkJEOztNQUFNSixLO0FBcUJTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3RoZW1lcy9jb21wb25lbnRzL1RpZXJzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL1RoZW1lcy5tb2R1bGUuc2Nzcyc7XG5cblxuXG5jb25zdCBJbmNsdWRlcyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5jbHVkZXN9PlxuICAgICAge3Byb3BzLmluZm99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbmNvbnN0IFRpZXJCb3ggPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBpbmNsdWRlcyA9IHByb3BzLmRldGFpbHMuaW5jbHVkZXNcbiAgY29uc3QgaW5jbHVkZXNMaXN0ID0gaW5jbHVkZXMubWFwKGluZm8gPT4ge1xuICAgIHJldHVybiA8SW5jbHVkZXMgaW5mbz17aW5mb30ga2V5PXtpbmNsdWRlcy5pbmRleE9mKGluZm8pfS8+XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpZXJCb3h9PlxuICAgICAgPGltZz48L2ltZz5cbiAgICAgIDxoMT5QYXRyb24gcGF5cyAke3Byb3BzLmRldGFpbHMucHJpY2V9IHBlciBtb250aDwvaDE+XG4gICAgICA8cD57cHJvcHMuZGV0YWlscy5pbmZvfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5jbHVkZXNMaXN0fT5cbiAgICAgICAge2luY2x1ZGVzTGlzdH1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cblxuY29uc3QgVGllcnMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB0aWVyRGF0YSA9IHByb3BzLmRhdGEudGllcnNcbiAgY29uc3QgdGllckJveGVzID0gdGllckRhdGEubWFwKHRpZXIgPT4ge1xuICAgIHJldHVybiA8VGllckJveCBkZXRhaWxzPXt0aWVyfSBrZXk9e3RpZXJEYXRhLmluZGV4T2YodGllcil9IC8+XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpZXJzfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5HZXQgc3RhcnRlZCBub3cgd2l0aCBmdWxseSBjdXN0b21pemFibGUgdGllcnMgYW5kIGJlbmVmaXRzPC9oMT5cbiAgICAgICAgPGgzPlN0YXJ0IG5vdyBhbmQgcGVyc29uYWxpemUgbGF0ZXIgdG8gbWFrZSBhIG1lbWJlcnNoaXAgeW91ciBwYXRyb25zIHdpbGwgbG92ZS48L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEhvbGRlcn0+XG4gICAgICAgIHt0aWVyQm94ZXN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGllcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/themes/components/Tiers.jsx\n");

/***/ })

})