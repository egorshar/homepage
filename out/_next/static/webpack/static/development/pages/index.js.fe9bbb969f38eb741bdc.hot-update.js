webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SocialProfiles/Icons/Github.js":
/*!***************************************************!*\
  !*** ./components/SocialProfiles/Icons/Github.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/egorshar/Desktop/egorshar/components/SocialProfiles/Icons/Github.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "GitHub",
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
    fill: "#1B1817",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z",
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
/* harmony import */ var _Icons_Github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/Github */ "./components/SocialProfiles/Icons/Github.js");
/* harmony import */ var _Icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/LinkedIn */ "./components/SocialProfiles/Icons/LinkedIn.js");
/* harmony import */ var _Icons_VK__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icons/VK */ "./components/SocialProfiles/Icons/VK.js");
var _jsxFileName = "/Users/egorshar/Desktop/egorshar/components/SocialProfiles/index.js";








var socials = [{
  url: 'https://www.facebook.com/egorshar',
  name: 'Facebook',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Facebook__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })
}, {
  url: 'https://vk.com/egorshar',
  name: 'VK',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_VK__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })
}, {
  url: 'https://github.com/egorshar',
  name: 'GitHub',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Github__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })
}, {
  url: 'https://www.linkedin.com/in/egor-sharapov-18a7a262/',
  name: 'Linked In',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })
}, {
  url: 'https://www.instagram.com/egorshar/',
  name: 'Instagram',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Instagram__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3158918276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "My social profiles:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3158918276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(socials, function (social) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: social.url,
      className: "jsx-3158918276",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: social.url,
      target: "_blank",
      rel: "nofollow noopener",
      className: "jsx-3158918276" + " " + "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3158918276" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, social.icon), social.name));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3158918276",
    __self: this
  }, ".social.jsx-3158918276{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon.jsx-3158918276{width:16px;height:16px;margin-right:5px;}.icon.jsx-3158918276 svg{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvU29jaWFsUHJvZmlsZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUc2QixBQUlULEFBS0EsV0FKQyxBQUtkLFlBSm1CLGlCQUNuQiw4REFOcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvU29jaWFsUHJvZmlsZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJy4vSWNvbnMvSW5zdGFncmFtJ1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuL0ljb25zL0ZhY2Vib29rJ1xuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSAnLi9JY29ucy9HaXRodWInXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJy4vSWNvbnMvTGlua2VkSW4nXG5pbXBvcnQgVktJY29uIGZyb20gJy4vSWNvbnMvVksnXG5cbmNvbnN0IHNvY2lhbHMgPSBbXG4gIHsgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Vnb3JzaGFyJywgbmFtZTogJ0ZhY2Vib29rJywgaWNvbjogPEZhY2Vib29rSWNvbiAvPiB9LFxuICB7IHVybDogJ2h0dHBzOi8vdmsuY29tL2Vnb3JzaGFyJywgbmFtZTogJ1ZLJywgaWNvbjogPFZLSWNvbiAvPiB9LFxuICB7IHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lZ29yc2hhcicsIG5hbWU6ICdHaXRIdWInLCBpY29uOiA8R2l0aHViSWNvbiAvPiB9LFxuICB7IHVybDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZ29yLXNoYXJhcG92LTE4YTdhMjYyLycsIG5hbWU6ICdMaW5rZWQgSW4nLCBpY29uOiA8TGlua2VkSW5JY29uIC8+IH0sXG4gIHsgdXJsOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lZ29yc2hhci8nLCBuYW1lOiAnSW5zdGFncmFtJywgaWNvbjogPEluc3RhZ3JhbUljb24gLz4gfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8PlxuICAgIDxwPk15IHNvY2lhbCBwcm9maWxlczo8L3A+XG4gICAgPHVsPlxuICAgICAge21hcChzb2NpYWxzLCBzb2NpYWwgPT4gKFxuICAgICAgICA8bGkga2V5PXtzb2NpYWwudXJsfT5cbiAgICAgICAgICA8YSBocmVmPXtzb2NpYWwudXJsfSBjbGFzc05hbWU9XCJzb2NpYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvdyBub29wZW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPntzb2NpYWwuaWNvbn08L3NwYW4+e3NvY2lhbC5uYW1lfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNvY2lhbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICAgIC5pY29uIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4pO1xuXG4iXX0= */\n/*@ sourceURL=/Users/egorshar/Desktop/egorshar/components/SocialProfiles/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.fe9bbb969f38eb741bdc.hot-update.js.map