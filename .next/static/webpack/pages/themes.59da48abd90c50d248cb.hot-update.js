webpackHotUpdate_N_E("pages/themes",{

/***/ "./pages/themes/components/Creators.jsx":
/*!**********************************************!*\
  !*** ./pages/themes/components/Creators.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/Themes.module.scss */ \"./styles/Themes.module.scss\");\n/* harmony import */ var _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/patreon-carousel/pages/themes/components/Creators.jsx\",\n    _this = undefined;\n\n\n\nvar CreatorBox = function CreatorBox(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.creatorBox,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.data.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.data.about\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = CreatorBox;\n\nvar Creators = function Creators(props) {\n  var creators = props.data.creators;\n  var creatorList = creators.map(function (creator) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CreatorBox, {\n      data: creator\n    }, creators.indexOf(creator), false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.creators,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Creators using these benefits\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Themes_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.creatorList,\n      children: creatorList\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Creators;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Creators);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CreatorBox\");\n$RefreshReg$(_c2, \"Creators\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlbWVzL2NvbXBvbmVudHMvQ3JlYXRvcnMuanN4PzkyNzMiXSwibmFtZXMiOlsiQ3JlYXRvckJveCIsInByb3BzIiwic3R5bGVzIiwiY3JlYXRvckJveCIsImRhdGEiLCJuYW1lIiwiYWJvdXQiLCJDcmVhdG9ycyIsImNyZWF0b3JzIiwiY3JlYXRvckxpc3QiLCJtYXAiLCJjcmVhdG9yIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUU1QixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsVUFBdkI7QUFBQSw0QkFDRTtBQUFBLGdCQUFLRixLQUFLLENBQUNHLElBQU4sQ0FBV0M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSUosS0FBSyxDQUFDRyxJQUFOLENBQVdFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FSRDs7S0FBTU4sVTs7QUFZTixJQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDTixLQUFELEVBQVc7QUFJMUIsTUFBTU8sUUFBUSxHQUFHUCxLQUFLLENBQUNHLElBQU4sQ0FBV0ksUUFBNUI7QUFFQSxNQUFNQyxXQUFXLEdBQUdELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUFDLE9BQU8sRUFBSTtBQUMxQyx3QkFBTyxxRUFBQyxVQUFEO0FBQTRDLFVBQUksRUFBRUE7QUFBbEQsT0FBaUJILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkQsT0FBakIsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FGbUIsQ0FBcEI7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVQsaUVBQU0sQ0FBQ00sUUFBdkI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVOLGlFQUFNLENBQUNPLFdBQXZCO0FBQUEsZ0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FyQkQ7O01BQU1GLFE7QUF1QlNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGhlbWVzL2NvbXBvbmVudHMvQ3JlYXRvcnMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvVGhlbWVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ3JlYXRvckJveCA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdG9yQm94fT5cbiAgICAgIDxoMT57cHJvcHMuZGF0YS5uYW1lfTwvaDE+XG4gICAgICA8cD57cHJvcHMuZGF0YS5hYm91dH08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbmNvbnN0IENyZWF0b3JzID0gKHByb3BzKSA9PiB7XG5cblxuXG4gIGNvbnN0IGNyZWF0b3JzID0gcHJvcHMuZGF0YS5jcmVhdG9ycztcblxuICBjb25zdCBjcmVhdG9yTGlzdCA9IGNyZWF0b3JzLm1hcChjcmVhdG9yID0+IHtcbiAgICByZXR1cm4gPENyZWF0b3JCb3gga2V5PXtjcmVhdG9ycy5pbmRleE9mKGNyZWF0b3IpfSBkYXRhPXtjcmVhdG9yfSAvPlxuICB9KVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0b3JzfT5cbiAgICAgIDxoMT5DcmVhdG9ycyB1c2luZyB0aGVzZSBiZW5lZml0czwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0b3JMaXN0fT5cbiAgICAgICAge2NyZWF0b3JMaXN0fVxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0b3JzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/themes/components/Creators.jsx\n");

/***/ })

})