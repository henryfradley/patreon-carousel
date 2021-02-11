webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/patreon-carousel/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var setClassName = function setClassName(num) {\n    if (num === index) {\n      return _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItemHover;\n    } else {\n      return _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem;\n    }\n  };\n\n  var convertUrl = function convertUrl(string) {\n    var url = string.split(' ').join('').toLowerCase();\n    return url;\n  };\n\n  var User = function User(props) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/themes/[id]\",\n        as: \"/themes/\".concat(convertUrl(props.value)),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: setClassName(props.num),\n          onMouseEnter: function onMouseEnter() {\n            setIndex(props.num);\n          },\n          children: props.value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var users = ['Podcasters', 'Video Creators', 'Musicians', 'Visual Artists', 'Communities', 'Writers & Journalists', 'Gaming Creators', 'Nonprofits', 'Tutorials and Education', 'Creators-of-all-kinds'];\n  var currentImage = \"https://henryportfolio.s3-us-west-2.amazonaws.com/\".concat(index, \".jpg\");\n  var userList = users.map(function (user) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(User, {\n      value: user,\n      num: users.indexOf(user)\n    }, users.indexOf(user), false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.head,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Who uses Patreon?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"If you\\u2019re ready to take your work to the next level and willing to open your heart to your audience, Patreon is for you.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carousel,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: currentImage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userList,\n        children: userList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"x2oTrUAHknTo02Ld7gcDOqaxQ8E=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4Iiwic2V0Q2xhc3NOYW1lIiwibnVtIiwic3R5bGVzIiwibGlzdEl0ZW1Ib3ZlciIsImxpc3RJdGVtIiwiY29udmVydFVybCIsInN0cmluZyIsInVybCIsInNwbGl0Iiwiam9pbiIsInRvTG93ZXJDYXNlIiwiVXNlciIsInByb3BzIiwidmFsdWUiLCJ1c2VycyIsImN1cnJlbnRJbWFnZSIsInVzZXJMaXN0IiwibWFwIiwidXNlciIsImluZGV4T2YiLCJoZWFkIiwiY2Fyb3VzZWwiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFFU0Msc0RBQVEsQ0FBQyxDQUFELENBRmpCO0FBQUEsTUFFVkMsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBS2pCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVNDLEdBQVQsRUFBYztBQUNqQyxRQUFJQSxHQUFHLEtBQUtILEtBQVosRUFBbUI7QUFDakIsYUFBT0ksK0RBQU0sQ0FBQ0MsYUFBZDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9ELCtEQUFNLENBQUNFLFFBQWQ7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsTUFBVCxFQUFpQjtBQUNsQyxRQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLElBQWxCLENBQXVCLEVBQXZCLEVBQTJCQyxXQUEzQixFQUFaO0FBQ0EsV0FBT0gsR0FBUDtBQUNELEdBSEQ7O0FBS0EsTUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLHdCQUNFO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsY0FBWDtBQUEwQixVQUFFLG9CQUFhUCxVQUFVLENBQUNPLEtBQUssQ0FBQ0MsS0FBUCxDQUF2QixDQUE1QjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRWIsWUFBWSxDQUFDWSxLQUFLLENBQUNYLEdBQVAsQ0FBMUI7QUFBdUMsc0JBQVksRUFBRSx3QkFBTTtBQUMzREYsb0JBQVEsQ0FBQ2EsS0FBSyxDQUFDWCxHQUFQLENBQVI7QUFBb0IsV0FEcEI7QUFBQSxvQkFDdUJXLEtBQUssQ0FBQ0M7QUFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFTRCxHQVZEOztBQVlBLE1BQU1DLEtBQUssR0FBRyxDQUFDLFlBQUQsRUFBZSxnQkFBZixFQUFpQyxXQUFqQyxFQUE4QyxnQkFBOUMsRUFBZ0UsYUFBaEUsRUFBK0UsdUJBQS9FLEVBQXdHLGlCQUF4RyxFQUEySCxZQUEzSCxFQUF5SSx5QkFBekksRUFBb0ssdUJBQXBLLENBQWQ7QUFFQSxNQUFNQyxZQUFZLCtEQUF3RGpCLEtBQXhELFNBQWxCO0FBRUEsTUFBTWtCLFFBQVEsR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLHdCQUM3QixxRUFBQyxJQUFEO0FBQU0sV0FBSyxFQUFFQSxJQUFiO0FBQW1CLFNBQUcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNELElBQWQ7QUFBeEIsT0FBa0RKLEtBQUssQ0FBQ0ssT0FBTixDQUFjRCxJQUFkLENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFENkI7QUFBQSxHQUFkLENBQWpCO0FBS0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRWhCLCtEQUFNLENBQUNrQixJQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBSyxlQUFTLEVBQUVsQiwrREFBTSxDQUFDbUIsUUFBdkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVuQiwrREFBTSxDQUFDb0IsS0FBdkI7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRVA7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSSxpQkFBUyxFQUFFYiwrREFBTSxDQUFDYyxRQUF0QjtBQUFBLGtCQUNDQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXZERDs7R0FBTXBCLEk7O0tBQUFBLEk7QUF5RFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKVxuXG5cbiAgY29uc3Qgc2V0Q2xhc3NOYW1lID0gZnVuY3Rpb24obnVtKSB7XG4gICAgaWYgKG51bSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBzdHlsZXMubGlzdEl0ZW1Ib3ZlclxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVzLmxpc3RJdGVtXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29udmVydFVybCA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIGNvbnN0IHVybCA9IHN0cmluZy5zcGxpdCgnICcpLmpvaW4oJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGNvbnN0IFVzZXIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPVwiL3RoZW1lcy9baWRdXCIgYXM9e2AvdGhlbWVzLyR7Y29udmVydFVybChwcm9wcy52YWx1ZSl9YH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzZXRDbGFzc05hbWUocHJvcHMubnVtKX0gb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SW5kZXgocHJvcHMubnVtKX19Pntwcm9wcy52YWx1ZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgdXNlcnMgPSBbJ1BvZGNhc3RlcnMnLCAnVmlkZW8gQ3JlYXRvcnMnLCAnTXVzaWNpYW5zJywgJ1Zpc3VhbCBBcnRpc3RzJywgJ0NvbW11bml0aWVzJywgJ1dyaXRlcnMgJiBKb3VybmFsaXN0cycsICdHYW1pbmcgQ3JlYXRvcnMnLCAnTm9ucHJvZml0cycsICdUdXRvcmlhbHMgYW5kIEVkdWNhdGlvbicsICdDcmVhdG9ycy1vZi1hbGwta2luZHMnXTtcblxuICBjb25zdCBjdXJyZW50SW1hZ2UgPSBgaHR0cHM6Ly9oZW5yeXBvcnRmb2xpby5zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS8ke2luZGV4fS5qcGdgXG5cbiAgY29uc3QgdXNlckxpc3QgPSB1c2Vycy5tYXAodXNlciA9PlxuICAgIDxVc2VyIHZhbHVlPXt1c2VyfSBudW09e3VzZXJzLmluZGV4T2YodXNlcil9IGtleT17dXNlcnMuaW5kZXhPZih1c2VyKX0gLz5cbiAgKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cbiAgICAgICAgPGgxPldobyB1c2VzIFBhdHJlb24/PC9oMT5cbiAgICAgICAgPGgzPklmIHlvdeKAmXJlIHJlYWR5IHRvIHRha2UgeW91ciB3b3JrIHRvIHRoZSBuZXh0IGxldmVsIGFuZCB3aWxsaW5nIHRvIG9wZW4geW91ciBoZWFydCB0byB5b3VyIGF1ZGllbmNlLCBQYXRyZW9uIGlzIGZvciB5b3UuPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50SW1hZ2V9PjwvaW1nPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0+XG4gICAgICAgIHt1c2VyTGlzdH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})