webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SocialProfiles/Icons/Facebook.js":
/*!*****************************************************!*\
  !*** ./components/SocialProfiles/Icons/Facebook.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/egorshar/Desktop/egorshar/components/SocialProfiles/Icons/Facebook.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "Facebook",
    role: "img",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "512",
    height: "512",
    rx: "15%",
    fill: "#1877f2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/SocialProfiles/index.js":
/*!********************************************!*\
  !*** ./components/SocialProfiles/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icons_Instagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/Instagram */ "./components/SocialProfiles/Icons/Instagram.js");
/* harmony import */ var _Icons_Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/Facebook */ "./components/SocialProfiles/Icons/Facebook.js");
var _jsxFileName = "/Users/egorshar/Desktop/egorshar/components/SocialProfiles/index.js";





var socials = [{
  url: 'https://www.facebook.com/egorshar',
  name: 'Facebook',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Facebook__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })
}, {
  url: 'https://vk.com/egorshar',
  name: 'VK'
}, {
  url: 'https://github.com/egorshar',
  name: 'GitHub'
}, {
  url: 'https://www.linkedin.com/in/egor-sharapov-18a7a262/',
  name: 'Linked In'
}, {
  url: 'https://www.instagram.com/egorshar/',
  name: 'Instagram',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Instagram__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3158918276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "My social profiles:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3158918276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(socials, function (social) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: social.url,
      className: "jsx-3158918276",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: social.url,
      target: "_blank",
      rel: "nofollow noopener",
      className: "jsx-3158918276" + " " + "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3158918276" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, social.icon), social.name));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3158918276",
    __self: this
  }, ".social.jsx-3158918276{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon.jsx-3158918276{width:16px;height:16px;margin-right:5px;}.icon.jsx-3158918276 svg{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvU29jaWFsUHJvZmlsZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJnQixBQUc2QixBQUlULEFBS0EsV0FKQyxBQUtkLFlBSm1CLGlCQUNuQiw4REFOcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvU29jaWFsUHJvZmlsZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJy4vSWNvbnMvSW5zdGFncmFtJ1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuL0ljb25zL0ZhY2Vib29rJ1xuXG5jb25zdCBzb2NpYWxzID0gW1xuICB7IHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9lZ29yc2hhcicsIG5hbWU6ICdGYWNlYm9vaycsIGljb246IDxGYWNlYm9va0ljb24gLz4gfSxcbiAgeyB1cmw6ICdodHRwczovL3ZrLmNvbS9lZ29yc2hhcicsIG5hbWU6ICdWSycgfSxcbiAgeyB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZWdvcnNoYXInLCBuYW1lOiAnR2l0SHViJyB9LFxuICB7IHVybDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZ29yLXNoYXJhcG92LTE4YTdhMjYyLycsIG5hbWU6ICdMaW5rZWQgSW4nIH0sXG4gIHsgdXJsOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lZ29yc2hhci8nLCBuYW1lOiAnSW5zdGFncmFtJywgaWNvbjogPEluc3RhZ3JhbUljb24gLz4gfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8PlxuICAgIDxwPk15IHNvY2lhbCBwcm9maWxlczo8L3A+XG4gICAgPHVsPlxuICAgICAge21hcChzb2NpYWxzLCBzb2NpYWwgPT4gKFxuICAgICAgICA8bGkga2V5PXtzb2NpYWwudXJsfT5cbiAgICAgICAgICA8YSBocmVmPXtzb2NpYWwudXJsfSBjbGFzc05hbWU9XCJzb2NpYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvdyBub29wZW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPntzb2NpYWwuaWNvbn08L3NwYW4+e3NvY2lhbC5uYW1lfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNvY2lhbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICAgIC5pY29uIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4pO1xuXG4iXX0= */\n/*@ sourceURL=/Users/egorshar/Desktop/egorshar/components/SocialProfiles/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.83c445d308bbca5e2898.hot-update.js.map