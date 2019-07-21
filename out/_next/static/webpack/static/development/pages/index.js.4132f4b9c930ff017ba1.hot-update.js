webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_instagram__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/instagram */ "./utils/instagram.js");







var _jsxFileName = "/Users/egorshar/Desktop/egorshar/components/Gallery.js";









var InstagramPosts =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InstagramPosts, _Component);

  function InstagramPosts() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InstagramPosts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InstagramPosts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      posts: [],
      index: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InstagramPosts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_utils_instagram__WEBPACK_IMPORTED_MODULE_13__["default"])().then(function (posts) {
        return _this2.setState({
          posts: posts
        });
      });
    }
  }, {
    key: "loader",
    value: function loader() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        height: 580,
        width: 400,
        speed: 2,
        primaryColor: "#f3f3f3",
        secondaryColor: "#ecebeb",
        style: {
          width: 500
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        cx: "100",
        cy: "7",
        r: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("rect", {
        x: "1",
        y: "1",
        rx: "0",
        ry: "0",
        width: "416",
        height: "496",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("rect", {
        x: "1",
        y: "519",
        rx: "0",
        ry: "0",
        width: "272",
        height: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }, {
    key: "image",
    value: function image(children, post) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        key: post.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: Object(_utils_instagram__WEBPACK_IMPORTED_MODULE_13__["generatePostURL"])(post.shortcode),
        target: "_blank",
        rel: "nofollow noopener",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(post, 'edge_media_to_caption.edges[0].node.text', Object(_utils_instagram__WEBPACK_IMPORTED_MODULE_13__["generatePostURL"])(post.shortcode)))));
    }
  }, {
    key: "onImageClick",
    value: function onImageClick() {
      var _this$state = this.state,
          posts = _this$state.posts,
          index = _this$state.index;
      var nextIndex = index + 1;
      if (nextIndex > posts.length - 1) nextIndex = 0;
      this.setState({
        index: nextIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          posts = _this$state2.posts,
          index = _this$state2.index;

      if (!posts.length) {
        return this.loader();
      }

      var post = posts[index];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1933632973" + " " + "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        key: post.id,
        src: post.display_url,
        alt: "",
        className: "portrait",
        onClick: this.onImageClick.bind(this),
        container: function container(children) {
          return _this3.image(children, post);
        },
        loaderContainer: function loaderContainer(children) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, children);
        },
        loader: this.loader(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "jsx-1933632973" + " " + "next-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u23E9"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1933632973",
        __self: this
      }, ".gallery.jsx-1933632973{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.gallery.jsx-1933632973 img{width:500px;border-radius:4px;box-shadow:0px 0px 30px 0px rgba(0,0,0,0.15);cursor:e-resize;}.next-slide.jsx-1933632973{position:absolute;top:0;left:100%;height:calc(100% - 65px);padding:0;width:50px;border:0;background:none;box-shadow:none;}.next-slide.jsx-1933632973:active,.next-slide.jsx-1933632973:active.jsx-1933632973:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm9CLEFBR3lCLEFBT0EsQUFPTSxBQVdMLFlBeEJBLEFBT0ssQ0FtQnBCLEtBWlEsTUFDSSxNQVBtQyxJQVFwQix5QkFDZixVQUNDLE1BVEssS0FVUCxNQWxCYSxHQW1CTixFQVZsQixjQVdrQixnQkFDbEIsMkNBcEJvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2Vnb3JzaGFyL0Rlc2t0b3AvZWdvcnNoYXIvY29tcG9uZW50cy9HYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgeyBGcmFnbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tICdyZWFjdC1jb250ZW50LWxvYWRlcidcbmltcG9ydCBJbWcgZnJvbSAncmVhY3QtaW1hZ2UnXG5cbmltcG9ydCBnZXRJbnN0YWdyYW1Qb3N0cywgeyBnZW5lcmF0ZVBvc3RVUkwgfSBmcm9tICcuLi91dGlscy9pbnN0YWdyYW0nXG5cbmNsYXNzIEluc3RhZ3JhbVBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcG9zdHM6IFtdLFxuICAgIGluZGV4OiAwXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBnZXRJbnN0YWdyYW1Qb3N0cygpXG4gICAgICAudGhlbihwb3N0cyA9PiB0aGlzLnNldFN0YXRlKHsgcG9zdHMgfSkpXG4gIH1cblxuICBsb2FkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZW50TG9hZGVyXG4gICAgICAgIGhlaWdodD17NTgwfVxuICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICBzcGVlZD17Mn1cbiAgICAgICAgcHJpbWFyeUNvbG9yPVwiI2YzZjNmM1wiXG4gICAgICAgIHNlY29uZGFyeUNvbG9yPVwiI2VjZWJlYlwiXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6IDUwMH19XG4gICAgICA+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMDBcIiBjeT1cIjdcIiByPVwiMVwiIC8+XG4gICAgICAgIDxyZWN0IHg9XCIxXCIgeT1cIjFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjQxNlwiIGhlaWdodD1cIjQ5NlwiIC8+XG4gICAgICAgIDxyZWN0IHg9XCIxXCIgeT1cIjUxOVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjcyXCIgaGVpZ2h0PVwiMTZcIiAvPlxuICAgICAgPC9Db250ZW50TG9hZGVyPlxuICAgIClcbiAgfVxuXG4gIGltYWdlKGNoaWxkcmVuLCBwb3N0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudCBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICA8cD5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj17Z2VuZXJhdGVQb3N0VVJMKHBvc3Quc2hvcnRjb2RlKX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXJcIj5cbiAgICAgICAgICAgIHtnZXQocG9zdCwgJ2VkZ2VfbWVkaWFfdG9fY2FwdGlvbi5lZGdlc1swXS5ub2RlLnRleHQnLCBnZW5lcmF0ZVBvc3RVUkwocG9zdC5zaG9ydGNvZGUpKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG5cbiAgb25JbWFnZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgcG9zdHMsIGluZGV4IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgbmV4dEluZGV4ID0gaW5kZXggKyAxO1xuICAgIGlmIChuZXh0SW5kZXggPiBwb3N0cy5sZW5ndGggLSAxKSBuZXh0SW5kZXggPSAwXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IG5leHRJbmRleCB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcG9zdHMsIGluZGV4IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoIXBvc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBwb3N0ID0gcG9zdHNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPlxuICAgICAgICA8SW1nXG4gICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgIHNyYz17cG9zdC5kaXNwbGF5X3VybH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvcnRyYWl0XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uSW1hZ2VDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNvbnRhaW5lcj17Y2hpbGRyZW4gPT4gdGhpcy5pbWFnZShjaGlsZHJlbiwgcG9zdCl9XG4gICAgICAgICAgbG9hZGVyQ29udGFpbmVyPXtjaGlsZHJlbiA9PiAoXG4gICAgICAgICAgICA8PntjaGlsZHJlbn08Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIGxvYWRlcj17dGhpcy5sb2FkZXIoKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQtc2xpZGVcIj7ij6k8L2J1dHRvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmdhbGxlcnkge1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdhbGxlcnkgOmdsb2JhbChpbWcpIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIGN1cnNvcjogZS1yZXNpemU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5leHQtc2xpZGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5leHQtc2xpZGU6YWN0aXZlLCAubmV4dC1zbGlkZTphY3RpdmU6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhZ3JhbVBvc3RzO1xuIl19 */\n/*@ sourceURL=/Users/egorshar/Desktop/egorshar/components/Gallery.js */"));
    }
  }]);

  return InstagramPosts;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InstagramPosts);

/***/ })

})
//# sourceMappingURL=index.js.4132f4b9c930ff017ba1.hot-update.js.map