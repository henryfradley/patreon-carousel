webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/patreon-carousel/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var setClassName = function setClassName(num) {\n    if (num === index) {\n      return _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItemHover;\n    } else {\n      return _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem;\n    }\n  };\n\n  var convertUrl = function convertUrl(string) {\n    var url = string.split(' ').join('').toLowerCase().replace(/[^\\w\\s!?]/g, '');\n    return url;\n  };\n\n  var User = function User(props) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/themes/[id]\",\n        as: \"/themes/\".concat(convertUrl(props.value)),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: setClassName(props.num),\n          onMouseEnter: function onMouseEnter() {\n            setIndex(props.num);\n          },\n          children: props.value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var users = ['Podcasters', 'Video Creators', 'Musicians', 'Visual Artists', 'Communities', 'Writers & Journalists', 'Gaming Creators', 'Nonprofits', 'Tutorials and Education', 'Creators-of-all-kinds'];\n  var currentImage = \"https://henryportfolio.s3-us-west-2.amazonaws.com/\".concat(index, \".jpg\");\n  var userList = users.map(function (user) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(User, {\n      value: user,\n      num: users.indexOf(user)\n    }, users.indexOf(user), false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.head,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Who uses Patreon?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"If you\\u2019re ready to take your work to the next level and willing to open your heart to your audience, Patreon is for you.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carousel,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: currentImage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userList,\n        children: userList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"x2oTrUAHknTo02Ld7gcDOqaxQ8E=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4Iiwic2V0Q2xhc3NOYW1lIiwibnVtIiwic3R5bGVzIiwibGlzdEl0ZW1Ib3ZlciIsImxpc3RJdGVtIiwiY29udmVydFVybCIsInN0cmluZyIsInVybCIsInNwbGl0Iiwiam9pbiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIlVzZXIiLCJwcm9wcyIsInZhbHVlIiwidXNlcnMiLCJjdXJyZW50SW1hZ2UiLCJ1c2VyTGlzdCIsIm1hcCIsInVzZXIiLCJpbmRleE9mIiwiaGVhZCIsImNhcm91c2VsIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUMsQ0FBRCxDQUZqQjtBQUFBLE1BRVZDLEtBRlU7QUFBQSxNQUVIQyxRQUZHOztBQUtqQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTQyxHQUFULEVBQWM7QUFDakMsUUFBSUEsR0FBRyxLQUFLSCxLQUFaLEVBQW1CO0FBQ2pCLGFBQU9JLCtEQUFNLENBQUNDLGFBQWQ7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPRCwrREFBTSxDQUFDRSxRQUFkO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLE1BQVQsRUFBaUI7QUFDbEMsUUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxHQUFiLEVBQWtCQyxJQUFsQixDQUF1QixFQUF2QixFQUEyQkMsV0FBM0IsR0FBeUNDLE9BQXpDLENBQWlELFlBQWpELEVBQThELEVBQTlELENBQVo7QUFDQSxXQUFPSixHQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsd0JBQ0U7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLFVBQUUsb0JBQWFSLFVBQVUsQ0FBQ1EsS0FBSyxDQUFDQyxLQUFQLENBQXZCLENBQTVCO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFFZCxZQUFZLENBQUNhLEtBQUssQ0FBQ1osR0FBUCxDQUExQjtBQUF1QyxzQkFBWSxFQUFFLHdCQUFNO0FBQzNERixvQkFBUSxDQUFDYyxLQUFLLENBQUNaLEdBQVAsQ0FBUjtBQUFvQixXQURwQjtBQUFBLG9CQUN1QlksS0FBSyxDQUFDQztBQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVNELEdBVkQ7O0FBWUEsTUFBTUMsS0FBSyxHQUFHLENBQUMsWUFBRCxFQUFlLGdCQUFmLEVBQWlDLFdBQWpDLEVBQThDLGdCQUE5QyxFQUFnRSxhQUFoRSxFQUErRSx1QkFBL0UsRUFBd0csaUJBQXhHLEVBQTJILFlBQTNILEVBQXlJLHlCQUF6SSxFQUFvSyx1QkFBcEssQ0FBZDtBQUNBLE1BQU1DLFlBQVksK0RBQXdEbEIsS0FBeEQsU0FBbEI7QUFDQSxNQUFNbUIsUUFBUSxHQUFHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsd0JBQzdCLHFFQUFDLElBQUQ7QUFBTSxXQUFLLEVBQUVBLElBQWI7QUFBbUIsU0FBRyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0QsSUFBZDtBQUF4QixPQUFrREosS0FBSyxDQUFDSyxPQUFOLENBQWNELElBQWQsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQ2QjtBQUFBLEdBQWQsQ0FBakI7QUFLQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFakIsK0RBQU0sQ0FBQ21CLElBQXZCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBRW5CLCtEQUFNLENBQUNvQixRQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRXBCLCtEQUFNLENBQUNxQixLQUF2QjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFUDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFJLGlCQUFTLEVBQUVkLCtEQUFNLENBQUNlLFFBQXRCO0FBQUEsa0JBQ0NBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBckREOztHQUFNckIsSTs7S0FBQUEsSTtBQXVEU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApXG5cblxuICBjb25zdCBzZXRDbGFzc05hbWUgPSBmdW5jdGlvbihudW0pIHtcbiAgICBpZiAobnVtID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIHN0eWxlcy5saXN0SXRlbUhvdmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHlsZXMubGlzdEl0ZW1cbiAgICB9XG4gIH1cblxuICBjb25zdCBjb252ZXJ0VXJsID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsID0gc3RyaW5nLnNwbGl0KCcgJykuam9pbignJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd1xccyE/XS9nLCcnKTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgY29uc3QgVXNlciA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdGhlbWVzL1tpZF1cIiBhcz17YC90aGVtZXMvJHtjb252ZXJ0VXJsKHByb3BzLnZhbHVlKX1gfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3NldENsYXNzTmFtZShwcm9wcy5udW0pfSBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICBzZXRJbmRleChwcm9wcy5udW0pfX0+e3Byb3BzLnZhbHVlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICApXG4gIH1cblxuICBjb25zdCB1c2VycyA9IFsnUG9kY2FzdGVycycsICdWaWRlbyBDcmVhdG9ycycsICdNdXNpY2lhbnMnLCAnVmlzdWFsIEFydGlzdHMnLCAnQ29tbXVuaXRpZXMnLCAnV3JpdGVycyAmIEpvdXJuYWxpc3RzJywgJ0dhbWluZyBDcmVhdG9ycycsICdOb25wcm9maXRzJywgJ1R1dG9yaWFscyBhbmQgRWR1Y2F0aW9uJywgJ0NyZWF0b3JzLW9mLWFsbC1raW5kcyddO1xuICBjb25zdCBjdXJyZW50SW1hZ2UgPSBgaHR0cHM6Ly9oZW5yeXBvcnRmb2xpby5zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS8ke2luZGV4fS5qcGdgXG4gIGNvbnN0IHVzZXJMaXN0ID0gdXNlcnMubWFwKHVzZXIgPT5cbiAgICA8VXNlciB2YWx1ZT17dXNlcn0gbnVtPXt1c2Vycy5pbmRleE9mKHVzZXIpfSBrZXk9e3VzZXJzLmluZGV4T2YodXNlcil9IC8+XG4gIClcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XG4gICAgICAgIDxoMT5XaG8gdXNlcyBQYXRyZW9uPzwvaDE+XG4gICAgICAgIDxoMz5JZiB5b3XigJlyZSByZWFkeSB0byB0YWtlIHlvdXIgd29yayB0byB0aGUgbmV4dCBsZXZlbCBhbmQgd2lsbGluZyB0byBvcGVuIHlvdXIgaGVhcnQgdG8geW91ciBhdWRpZW5jZSwgUGF0cmVvbiBpcyBmb3IgeW91LjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cbiAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudEltYWdlfT48L2ltZz5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudXNlckxpc3R9PlxuICAgICAgICB7dXNlckxpc3R9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})