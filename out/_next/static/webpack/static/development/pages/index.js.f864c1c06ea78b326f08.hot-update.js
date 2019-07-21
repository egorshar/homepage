webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SocialProfiles/Icons/LinkedIn.js":
/*!*****************************************************!*\
  !*** ./components/SocialProfiles/Icons/LinkedIn.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/egorshar/Desktop/egorshar/components/SocialProfiles/Icons/LinkedIn.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "LinkedIn",
    role: "img",
    viewBox: "0 0 512 512",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "512",
    height: "512",
    rx: "15%",
    fill: "#0077b5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "142",
    cy: "138",
    r: "37",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#fff",
    "stroke-width": "66",
    d: "M244 194v198M142 194v198",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
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
/* harmony import */ var _Icons_Facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/Facebook */ "./components/SocialProfiles/Icons/Facebook.js");
/* harmony import */ var _Icons_Instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/Instagram */ "./components/SocialProfiles/Icons/Instagram.js");
/* harmony import */ var _Icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/LinkedIn */ "./components/SocialProfiles/Icons/LinkedIn.js");
var _jsxFileName = "/Users/egorshar/Desktop/egorshar/components/SocialProfiles/index.js";






var socials = [{
  url: 'https://www.facebook.com/egorshar',
  name: 'Facebook',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Facebook__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
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
  name: 'Linked In',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })
}, {
  url: 'https://www.instagram.com/egorshar/',
  name: 'Instagram',
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Instagram__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3158918276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "My social profiles:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3158918276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(socials, function (social) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: social.url,
      className: "jsx-3158918276",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: social.url,
      target: "_blank",
      rel: "nofollow noopener",
      className: "jsx-3158918276" + " " + "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3158918276" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, social.icon), social.name));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3158918276",
    __self: this
  }, ".social.jsx-3158918276{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon.jsx-3158918276{width:16px;height:16px;margin-right:5px;}.icon.jsx-3158918276 svg{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvU29jaWFsUHJvZmlsZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUc2QixBQUlULEFBS0EsV0FKQyxBQUtkLFlBSm1CLGlCQUNuQiw4REFOcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvU29jaWFsUHJvZmlsZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cblxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuL0ljb25zL0ZhY2Vib29rJ1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnLi9JY29ucy9JbnN0YWdyYW0nXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJy4vSWNvbnMvTGlua2VkSW4nXG5cbmNvbnN0IHNvY2lhbHMgPSBbXG4gIHsgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Vnb3JzaGFyJywgbmFtZTogJ0ZhY2Vib29rJywgaWNvbjogPEZhY2Vib29rSWNvbiAvPiB9LFxuICB7IHVybDogJ2h0dHBzOi8vdmsuY29tL2Vnb3JzaGFyJywgbmFtZTogJ1ZLJyB9LFxuICB7IHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lZ29yc2hhcicsIG5hbWU6ICdHaXRIdWInIH0sXG4gIHsgdXJsOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Vnb3Itc2hhcmFwb3YtMThhN2EyNjIvJywgbmFtZTogJ0xpbmtlZCBJbicsIGljb246IDxMaW5rZWRJbkljb24gLz4gfSxcbiAgeyB1cmw6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Vnb3JzaGFyLycsIG5hbWU6ICdJbnN0YWdyYW0nLCBpY29uOiA8SW5zdGFncmFtSWNvbiAvPiB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDw+XG4gICAgPHA+TXkgc29jaWFsIHByb2ZpbGVzOjwvcD5cbiAgICA8dWw+XG4gICAgICB7bWFwKHNvY2lhbHMsIHNvY2lhbCA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3NvY2lhbC51cmx9PlxuICAgICAgICAgIDxhIGhyZWY9e3NvY2lhbC51cmx9IGNsYXNzTmFtZT1cInNvY2lhbFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+e3NvY2lhbC5pY29ufTwvc3Bhbj57c29jaWFsLm5hbWV9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc29jaWFsIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgICAgLmljb24gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbik7XG5cbiJdfQ== */\n/*@ sourceURL=/Users/egorshar/Desktop/egorshar/components/SocialProfiles/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.f864c1c06ea78b326f08.hot-update.js.map