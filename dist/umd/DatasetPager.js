function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
(function(global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.DatasetPager = factory());
})(this, function() {
  "use strict";
  var MORE_PAGES = "...";
  var render = function __render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("ul", {
      staticClass: "pagination"
    }, [_c("li", {
      class: ["page-item", _vm.disabledPrevious && "disabled"]
    }, [_c("a", {
      staticClass: "page-link",
      attrs: {
        "href": "#",
        "tabindex": _vm.disabledPrevious && "-1",
        "aria-disabled": _vm.disabledPrevious && "true"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.setActive(_vm.dsPage !== 1 && _vm.dsPagecount !== 0 ? _vm.dsPage - 1 : _vm.dsPage);
        }
      }
    }, [_vm._v(" " + _vm._s(_vm.datasetI18n.previous) + " ")])]), _vm._l(_vm.dsPages, function(item, index) {
      return [_c("li", {
        key: index,
        class: ["page-item", item === _vm.dsPage && "active", item === _vm.morePages && "disabled"]
      }, [item !== _vm.morePages ? _c("a", {
        staticClass: "page-link",
        attrs: {
          "href": "#"
        },
        on: {
          "click": function click($event) {
            $event.preventDefault();
            return _vm.setActive(item);
          }
        }
      }, [_vm._v(" " + _vm._s(item) + " ")]) : _c("span", {
        staticClass: "page-link"
      }, [_vm._v(" " + _vm._s(item) + " ")])])];
    }), _c("li", {
      class: ["page-item", _vm.disabledNext && "disabled"]
    }, [_c("a", {
      staticClass: "page-link",
      attrs: {
        "href": "#",
        "tabindex": _vm.disabledNext && "-1",
        "aria-disabled": _vm.disabledNext && "true"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.setActive(_vm.dsPage !== _vm.dsPagecount && _vm.dsPagecount !== 0 ? _vm.dsPage + 1 : _vm.dsPage);
        }
      }
    }, [_vm._v(" " + _vm._s(_vm.datasetI18n.next) + " ")])])], 2);
  };
  var staticRenderFns = [];
  function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render2) {
      options.render = render2;
      options.staticRenderFns = staticRenderFns2;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function hook2(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  var __vue2_script = {
    inject: ["datasetI18n", "setActive", "rdsPages", "rdsPagecount", "rdsPage"],
    data: function data() {
      return {
        morePages: MORE_PAGES
      };
    },
    computed: {
      dsPages: function dsPages() {
        return this.rdsPages();
      },
      dsPagecount: function dsPagecount() {
        return this.rdsPagecount();
      },
      dsPage: function dsPage() {
        return this.rdsPage();
      },
      disabledPrevious: function disabledPrevious() {
        return this.dsPage === 1;
      },
      disabledNext: function disabledNext() {
        return this.dsPage === this.dsPagecount || this.dsPagecount === 0;
      }
    }
  };
  var __cssModules = {};
  var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
  function __vue2_injectStyles(context) {
    for (var o in __cssModules) {
      this[o] = __cssModules[o];
    }
  }
  var DatasetPager = /* @__PURE__ */ function() {
    return __component__.exports;
  }();
  return DatasetPager;
});
//# sourceMappingURL=DatasetPager.js.map
