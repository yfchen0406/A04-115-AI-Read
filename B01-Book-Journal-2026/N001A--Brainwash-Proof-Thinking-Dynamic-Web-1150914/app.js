var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  "use strict";
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  var react = { exports: {} };
  var react_production_min = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
  function A$1(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = z$1 && a2[z$1] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var B$1 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C$1 = Object.assign, D$1 = {};
  function E$1(a2, b2, e) {
    this.props = a2;
    this.context = b2;
    this.refs = D$1;
    this.updater = e || B$1;
  }
  E$1.prototype.isReactComponent = {};
  E$1.prototype.setState = function(a2, b2) {
    if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  E$1.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E$1.prototype;
  function G$1(a2, b2, e) {
    this.props = a2;
    this.context = b2;
    this.refs = D$1;
    this.updater = e || B$1;
  }
  var H$1 = G$1.prototype = new F();
  H$1.constructor = G$1;
  C$1(H$1, E$1.prototype);
  H$1.isPureReactComponent = true;
  var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
  function M$1(a2, b2, e) {
    var d, c2 = {}, k2 = null, h = null;
    if (null != b2) for (d in void 0 !== b2.ref && (h = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J.call(b2, d) && !L$1.hasOwnProperty(d) && (c2[d] = b2[d]);
    var g = arguments.length - 2;
    if (1 === g) c2.children = e;
    else if (1 < g) {
      for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a2 && a2.defaultProps) for (d in g = a2.defaultProps, g) void 0 === c2[d] && (c2[d] = g[d]);
    return { $$typeof: l$1, type: a2, key: k2, ref: h, props: c2, _owner: K$1.current };
  }
  function N$1(a2, b2) {
    return { $$typeof: l$1, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
  }
  function O$1(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$1;
  }
  function escape(a2) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var P$1 = /\/+/g;
  function Q$1(a2, b2) {
    return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
  }
  function R$1(a2, b2, e, d, c2) {
    var k2 = typeof a2;
    if ("undefined" === k2 || "boolean" === k2) a2 = null;
    var h = false;
    if (null === a2) h = true;
    else switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$1:
          case n$1:
            h = true;
        }
    }
    if (h) return h = a2, c2 = c2(h), a2 = "" === d ? "." + Q$1(h, 0) : d, I$1(c2) ? (e = "", null != a2 && (e = a2.replace(P$1, "$&/") + "/"), R$1(c2, b2, e, "", function(a3) {
      return a3;
    })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e + (!c2.key || h && h.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a2)), b2.push(c2)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I$1(a2)) for (var g = 0; g < a2.length; g++) {
      k2 = a2[g];
      var f2 = d + Q$1(k2, g);
      h += R$1(k2, b2, e, f2, c2);
    }
    else if (f2 = A$1(a2), "function" === typeof f2) for (a2 = f2.call(a2), g = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b2, e, f2, c2);
    else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S$1(a2, b2, e) {
    if (null == a2) return a2;
    var d = [], c2 = 0;
    R$1(a2, d, "", "", function(a3) {
      return b2.call(e, a3, c2++);
    });
    return d;
  }
  function T$1(a2) {
    if (-1 === a2._status) {
      var b2 = a2._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
      }, function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
      });
      -1 === a2._status && (a2._status = 0, a2._result = b2);
    }
    if (1 === a2._status) return a2._result.default;
    throw a2._result;
  }
  var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
  function X$1() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S$1, forEach: function(a2, b2, e) {
    S$1(a2, function() {
      b2.apply(this, arguments);
    }, e);
  }, count: function(a2) {
    var b2 = 0;
    S$1(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return S$1(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!O$1(a2)) throw Error("React.Children.only expected to receive a single React element child.");
    return a2;
  } };
  react_production_min.Component = E$1;
  react_production_min.Fragment = p$2;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G$1;
  react_production_min.StrictMode = q$1;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
  react_production_min.act = X$1;
  react_production_min.cloneElement = function(a2, b2, e) {
    if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
    var d = C$1({}, a2.props), c2 = a2.key, k2 = a2.ref, h = a2._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h = K$1.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a2.type && a2.type.defaultProps) var g = a2.type.defaultProps;
      for (f2 in b2) J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2) d.children = e;
    else if (1 < f2) {
      g = Array(f2);
      for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
      d.children = g;
    }
    return { $$typeof: l$1, type: a2.type, key: c2, ref: k2, props: d, _owner: h };
  };
  react_production_min.createContext = function(a2) {
    a2 = { $$typeof: u, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a2.Provider = { $$typeof: t, _context: a2 };
    return a2.Consumer = a2;
  };
  react_production_min.createElement = M$1;
  react_production_min.createFactory = function(a2) {
    var b2 = M$1.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a2) {
    return { $$typeof: v$1, render: a2 };
  };
  react_production_min.isValidElement = O$1;
  react_production_min.lazy = function(a2) {
    return { $$typeof: y, _payload: { _status: -1, _result: a2 }, _init: T$1 };
  };
  react_production_min.memo = function(a2, b2) {
    return { $$typeof: x, type: a2, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a2) {
    var b2 = V$1.transition;
    V$1.transition = {};
    try {
      a2();
    } finally {
      V$1.transition = b2;
    }
  };
  react_production_min.unstable_act = X$1;
  react_production_min.useCallback = function(a2, b2) {
    return U$1.current.useCallback(a2, b2);
  };
  react_production_min.useContext = function(a2) {
    return U$1.current.useContext(a2);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a2) {
    return U$1.current.useDeferredValue(a2);
  };
  react_production_min.useEffect = function(a2, b2) {
    return U$1.current.useEffect(a2, b2);
  };
  react_production_min.useId = function() {
    return U$1.current.useId();
  };
  react_production_min.useImperativeHandle = function(a2, b2, e) {
    return U$1.current.useImperativeHandle(a2, b2, e);
  };
  react_production_min.useInsertionEffect = function(a2, b2) {
    return U$1.current.useInsertionEffect(a2, b2);
  };
  react_production_min.useLayoutEffect = function(a2, b2) {
    return U$1.current.useLayoutEffect(a2, b2);
  };
  react_production_min.useMemo = function(a2, b2) {
    return U$1.current.useMemo(a2, b2);
  };
  react_production_min.useReducer = function(a2, b2, e) {
    return U$1.current.useReducer(a2, b2, e);
  };
  react_production_min.useRef = function(a2) {
    return U$1.current.useRef(a2);
  };
  react_production_min.useState = function(a2) {
    return U$1.current.useState(a2);
  };
  react_production_min.useSyncExternalStore = function(a2, b2, e) {
    return U$1.current.useSyncExternalStore(a2, b2, e);
  };
  react_production_min.useTransition = function() {
    return U$1.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  {
    react.exports = react_production_min;
  }
  var reactExports = react.exports;
  const React14 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
  function q(c2, a2, g) {
    var b2, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a2.key && (e = "" + a2.key);
    void 0 !== a2.ref && (h = a2.ref);
    for (b2 in a2) m$1.call(a2, b2) && !p$1.hasOwnProperty(b2) && (d[b2] = a2[b2]);
    if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d[b2] && (d[b2] = a2[b2]);
    return { $$typeof: k, type: c2, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var reactDom = { exports: {} };
  var reactDom_production_min = {};
  var scheduler = { exports: {} };
  var scheduler_production_min = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(exports) {
    function f2(a2, b2) {
      var c2 = a2.length;
      a2.push(b2);
      a: for (; 0 < c2; ) {
        var d = c2 - 1 >>> 1, e = a2[d];
        if (0 < g(e, b2)) a2[d] = b2, a2[c2] = e, c2 = d;
        else break a;
      }
    }
    function h(a2) {
      return 0 === a2.length ? null : a2[0];
    }
    function k2(a2) {
      if (0 === a2.length) return null;
      var b2 = a2[0], c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a: for (var d = 0, e = a2.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g(C2, c2)) n2 < e && 0 > g(x2, C2) ? (a2[d] = x2, a2[n2] = c2, d = n2) : (a2[d] = C2, a2[m2] = c2, d = m2);
          else if (n2 < e && 0 > g(x2, c2)) a2[d] = x2, a2[n2] = c2, d = n2;
          else break a;
        }
      }
      return b2;
    }
    function g(a2, b2) {
      var c2 = a2.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a2.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a2) {
      for (var b2 = h(t2); null !== b2; ) {
        if (null === b2.callback) k2(t2);
        else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
        else break;
        b2 = h(t2);
      }
    }
    function H2(a2) {
      B2 = false;
      G2(a2);
      if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
      else {
        var b2 = h(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
    }
    function J2(a2, b2) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
          var d = v2.callback;
          if ("function" === typeof d) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e = d(v2.expirationTime <= b2);
            b2 = exports.unstable_now();
            "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
            G2(b2);
          } else k2(r2);
          v2 = h(r2);
        }
        if (null !== v2) var w2 = true;
        else {
          var m2 = h(t2);
          null !== m2 && K2(H2, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a2 = exports.unstable_now();
        Q2 = a2;
        var b2 = true;
        try {
          b2 = O2(true, a2);
        } finally {
          b2 ? S2() : (N2 = false, O2 = null);
        }
      } else N2 = false;
    }
    var S2;
    if ("function" === typeof F2) S2 = function() {
      F2(R2);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else S2 = function() {
      D2(R2, 0);
    };
    function I2(a2) {
      O2 = a2;
      N2 || (N2 = true, S2());
    }
    function K2(a2, b2) {
      L2 = D2(function() {
        a2(exports.unstable_now());
      }, b2);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r2);
    };
    exports.unstable_next = function(a2) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c2 = y2;
      y2 = a2;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b2, c2) {
      var d = exports.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d + c2 : d) : c2 = d;
      switch (a2) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c2 + e;
      a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e, sortIndex: -1 };
      c2 > d ? (a2.sortIndex = c2, f2(t2, a2), null === h(r2) && a2 === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d))) : (a2.sortIndex = e, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
      return a2;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a2) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  {
    scheduler.exports = scheduler_production_min;
  }
  var schedulerExports = scheduler.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var aa = reactExports, ca = schedulerExports;
  function p(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a2, b2) {
    ha(a2, b2);
    ha(a2 + "Capture", b2);
  }
  function ha(a2, b2) {
    ea[a2] = b2;
    for (a2 = 0; a2 < b2.length; a2++) da.add(b2[a2]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a2) {
    if (ja.call(ma, a2)) return true;
    if (ja.call(la, a2)) return false;
    if (ka.test(a2)) return ma[a2] = true;
    la[a2] = true;
    return false;
  }
  function pa(a2, b2, c2, d) {
    if (null !== c2 && 0 === c2.type) return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d) return false;
        if (null !== c2) return !c2.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return "data-" !== a2 && "aria-" !== a2;
      default:
        return false;
    }
  }
  function qa(a2, b2, c2, d) {
    if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d)) return true;
    if (d) return false;
    if (null !== c2) switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
    return false;
  }
  function v(a2, b2, c2, d, e, f2, g) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c2;
    this.propertyName = a2;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    z[a2] = new v(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b2 = a2[0];
    z[b2] = new v(b2, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    z[a2] = new v(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    z[a2] = new v(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    z[a2] = new v(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    z[a2] = new v(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    z[a2] = new v(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    z[a2] = new v(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    z[a2] = new v(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b2 = a2.replace(
      ra,
      sa
    );
    z[b2] = new v(b2, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z[b2] = new v(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z[b2] = new v(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    z[a2] = new v(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    z[a2] = new v(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function ta(a2, b2, c2, d) {
    var e = z.hasOwnProperty(b2) ? z[b2] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e, d) && (c2 = null), d || null === e ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e.mustUseProperty ? a2[e.propertyName] = null === c2 ? 3 === e.type ? false : "" : c2 : (b2 = e.attributeName, d = e.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e = e.type, c2 = 3 === e || 4 === e && true === c2 ? "" : "" + c2, d ? a2.setAttributeNS(d, b2, c2) : a2.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = Ja && a2[Ja] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var A = Object.assign, La;
  function Ma(a2) {
    if (void 0 === La) try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
    return "\n" + La + a2;
  }
  var Na = false;
  function Oa(a2, b2) {
    if (!a2 || Na) return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2) if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d = l2;
        }
        a2.call(b2.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l2) {
          d = l2;
        }
        a2();
      }
    } catch (l2) {
      if (l2 && d && "string" === typeof l2.stack) {
        for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
  }
  function Pa(a2) {
    switch (a2.tag) {
      case 5:
        return Ma(a2.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Oa(a2.type, false), a2;
      case 11:
        return a2 = Oa(a2.type.render, false), a2;
      case 1:
        return a2 = Oa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Qa(a2) {
    if (null == a2) return null;
    if ("function" === typeof a2) return a2.displayName || a2.name || null;
    if ("string" === typeof a2) return a2;
    switch (a2) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a2) switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
    return null;
  }
  function Ra(a2) {
    var b2 = a2.type;
    switch (a2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b2) return b2.displayName || b2.name || null;
        if ("string" === typeof b2) return b2;
    }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a2;
      case "object":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b2 = a2.type;
    return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a2) {
    var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d = "" + a2[b2];
    if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e = c2.get, f2 = c2.set;
      Object.defineProperty(a2, b2, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a3) {
        d = "" + a3;
        f2.call(this, a3);
      } });
      Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a3) {
        d = "" + a3;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2) return false;
    var b2 = a2._valueTracker;
    if (!b2) return true;
    var c2 = b2.getValue();
    var d = "";
    a2 && (d = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d;
    return a2 !== c2 ? (b2.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a2) return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b2) {
      return a2.body;
    }
  }
  function Ya(a2, b2) {
    var c2 = b2.checked;
    return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
  }
  function Za(a2, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a2._wrapperState = { initialChecked: d, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a2, b2) {
    b2 = b2.checked;
    null != b2 && ta(a2, "checked", b2, false);
  }
  function bb(a2, b2) {
    ab(a2, b2);
    var c2 = Sa(b2.value), d = b2.type;
    if (null != c2) if ("number" === d) {
      if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
    } else a2.value !== "" + c2 && (a2.value = "" + c2);
    else if ("submit" === d || "reset" === d) {
      a2.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
  }
  function db(a2, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d = b2.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value)) return;
      b2 = "" + a2._wrapperState.initialValue;
      c2 || b2 === a2.value || (a2.value = b2);
      a2.defaultValue = b2;
    }
    c2 = a2.name;
    "" !== c2 && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    "" !== c2 && (a2.name = c2);
  }
  function cb(a2, b2, c2) {
    if ("number" !== b2 || Xa(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a2, b2, c2, d) {
    a2 = a2.options;
    if (b2) {
      b2 = {};
      for (var e = 0; e < c2.length; e++) b2["$" + c2[e]] = true;
      for (c2 = 0; c2 < a2.length; c2++) e = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e && (a2[c2].selected = e), e && d && (a2[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e = 0; e < a2.length; e++) {
        if (a2[e].value === c2) {
          a2[e].selected = true;
          d && (a2[e].defaultSelected = true);
          return;
        }
        null !== b2 || a2[e].disabled || (b2 = a2[e]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a2, b2) {
    if (null != b2.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2) throw Error(p(92));
        if (eb(c2)) {
          if (1 < c2.length) throw Error(p(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a2._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a2, b2) {
    var c2 = Sa(b2.value), d = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
    null != d && (a2.defaultValue = "" + d);
  }
  function jb(a2) {
    var b2 = a2.textContent;
    b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
  }
  function kb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a2, b2) {
    return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var mb, nb = function(a2) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b2, c2, d, e);
      });
    } : a2;
  }(function(a2, b2) {
    if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
      for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
    }
  });
  function ob(a2, b2) {
    if (b2) {
      var c2 = a2.firstChild;
      if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a2.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a2) {
    qb.forEach(function(b2) {
      b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
      pb[b2] = pb[a2];
    });
  });
  function rb(a2, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a2, b2) {
    a2 = a2.style;
    for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
      var d = 0 === c2.indexOf("--"), e = rb(c2, b2[c2], d);
      "float" === c2 && (c2 = "cssFloat");
      d ? a2.setProperty(c2, e) : a2[c2] = e;
    }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a2, b2) {
    if (b2) {
      if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p(137, a2));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children) throw Error(p(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (null != b2.style && "object" !== typeof b2.style) throw Error(p(62));
    }
  }
  function vb(a2, b2) {
    if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return 3 === a2.nodeType ? a2.parentNode : a2;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if ("function" !== typeof yb) throw Error(p(280));
      var b2 = a2.stateNode;
      b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
    }
  }
  function Gb(a2, b2) {
    return a2(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a2, b2, c2) {
    if (Ib) return a2(b2, c2);
    Ib = true;
    try {
      return Gb(a2, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a2, b2) {
    var c2 = a2.stateNode;
    if (null === c2) return null;
    var d = Db(c2);
    if (null === d) return null;
    c2 = d[b2];
    a: switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a2 = a2.type, d = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d;
        break a;
      default:
        a2 = false;
    }
    if (a2) return null;
    if (c2 && "function" !== typeof c2) throw Error(p(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
  function Nb(a2, b2, c2, d, e, f2, g, h, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
    Ob = true;
    Pb = a2;
  } };
  function Tb(a2, b2, c2, d, e, f2, g, h, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a2, b2, c2, d, e, f2, g, h, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a2) {
    var b2 = a2, c2 = a2;
    if (a2.alternate) for (; b2.return; ) b2 = b2.return;
    else {
      a2 = b2;
      do
        b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
      while (a2);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a2) {
    if (13 === a2.tag) {
      var b2 = a2.memoizedState;
      null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
      if (null !== b2) return b2.dehydrated;
    }
    return null;
  }
  function Xb(a2) {
    if (Vb(a2) !== a2) throw Error(p(188));
  }
  function Yb(a2) {
    var b2 = a2.alternate;
    if (!b2) {
      b2 = Vb(a2);
      if (null === b2) throw Error(p(188));
      return b2 !== a2 ? null : a2;
    }
    for (var c2 = a2, d = b2; ; ) {
      var e = c2.return;
      if (null === e) break;
      var f2 = e.alternate;
      if (null === f2) {
        d = e.return;
        if (null !== d) {
          c2 = d;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child; f2; ) {
          if (f2 === c2) return Xb(e), a2;
          if (f2 === d) return Xb(e), b2;
          f2 = f2.sibling;
        }
        throw Error(p(188));
      }
      if (c2.return !== d.return) c2 = e, d = f2;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c2) {
            g = true;
            c2 = e;
            d = f2;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c2 = f2;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f2.child; h; ) {
            if (h === c2) {
              g = true;
              c2 = f2;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f2;
              c2 = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(p(189));
        }
      }
      if (c2.alternate !== d) throw Error(p(190));
    }
    if (3 !== c2.tag) throw Error(p(188));
    return c2.stateNode.current === c2 ? a2 : b2;
  }
  function Zb(a2) {
    a2 = Yb(a2);
    return null !== a2 ? $b(a2) : null;
  }
  function $b(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2;
    for (a2 = a2.child; null !== a2; ) {
      var b2 = $b(a2);
      if (null !== b2) return b2;
      a2 = a2.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a2) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a2) {
    a2 >>>= 0;
    return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a2) {
    switch (a2 & -a2) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a2 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a2 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a2;
    }
  }
  function uc(a2, b2) {
    var c2 = a2.pendingLanes;
    if (0 === c2) return 0;
    var d = 0, e = a2.suspendedLanes, f2 = a2.pingedLanes, g = c2 & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
    } else g = c2 & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
    if (0 === d) return 0;
    if (0 !== b2 && b2 !== d && 0 === (b2 & e) && (e = d & -d, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b2;
    0 !== (d & 4) && (d |= c2 & 16);
    b2 = a2.entangledLanes;
    if (0 !== b2) for (a2 = a2.entanglements, b2 &= d; 0 < b2; ) c2 = 31 - oc(b2), e = 1 << c2, d |= a2[c2], b2 &= ~e;
    return d;
  }
  function vc(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a2, b2) {
    for (var c2 = a2.suspendedLanes, d = a2.pingedLanes, e = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
      var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
      if (-1 === k2) {
        if (0 === (h & c2) || 0 !== (h & d)) e[g] = vc(h, b2);
      } else k2 <= b2 && (a2.expiredLanes |= h);
      f2 &= ~h;
    }
  }
  function xc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a2 = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a2;
  }
  function zc(a2) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
    return b2;
  }
  function Ac(a2, b2, c2) {
    a2.pendingLanes |= b2;
    536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
    a2 = a2.eventTimes;
    b2 = 31 - oc(b2);
    a2[b2] = c2;
  }
  function Bc(a2, b2) {
    var c2 = a2.pendingLanes & ~b2;
    a2.pendingLanes = b2;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= b2;
    a2.mutableReadLanes &= b2;
    a2.entangledLanes &= b2;
    b2 = a2.entanglements;
    var d = a2.eventTimes;
    for (a2 = a2.expirationTimes; 0 < c2; ) {
      var e = 31 - oc(c2), f2 = 1 << e;
      b2[e] = 0;
      d[e] = -1;
      a2[e] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a2, b2) {
    var c2 = a2.entangledLanes |= b2;
    for (a2 = a2.entanglements; c2; ) {
      var d = 31 - oc(c2), e = 1 << d;
      e & b2 | a2[d] & b2 && (a2[d] |= b2);
      c2 &= ~e;
    }
  }
  var C = 0;
  function Dc(a2) {
    a2 &= -a2;
    return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a2, b2) {
    switch (a2) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a2, b2, c2, d, e, f2) {
    if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
    a2.eventSystemFlags |= d;
    b2 = a2.targetContainers;
    null !== e && -1 === b2.indexOf(e) && b2.push(e);
    return a2;
  }
  function Uc(a2, b2, c2, d, e) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a2, b2, c2, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a2, b2, c2, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a2, b2, c2, d, e), true;
      case "pointerover":
        var f2 = e.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d, e));
        return true;
      case "gotpointercapture":
        return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d, e)), true;
    }
    return false;
  }
  function Vc(a2) {
    var b2 = Wc(a2.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a2.blockedOn = b2;
            Ic(a2.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function Xc(a2) {
    if (null !== a2.blockedOn) return false;
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (null === c2) {
        c2 = a2.nativeEvent;
        var d = new c2.constructor(c2.type, c2);
        wb = d;
        c2.target.dispatchEvent(d);
        wb = null;
      } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a2, b2, c2) {
    Xc(a2) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a2, b2) {
    a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a2) {
    function b2(b3) {
      return ad(b3, a2);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a2);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d = Kc[c2];
        d.blockedOn === a2 && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a2);
    null !== Mc && ad(Mc, a2);
    null !== Nc && ad(Nc, a2);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++) d = Qc[c2], d.blockedOn === a2 && (d.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a2, b2, c2, d) {
    var e = C, f2 = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a2, b2, c2, d);
    } finally {
      C = e, cd.transition = f2;
    }
  }
  function gd(a2, b2, c2, d) {
    var e = C, f2 = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a2, b2, c2, d);
    } finally {
      C = e, cd.transition = f2;
    }
  }
  function fd(a2, b2, c2, d) {
    if (dd) {
      var e = Yc(a2, b2, c2, d);
      if (null === e) hd(a2, b2, d, id, c2), Sc(a2, d);
      else if (Uc(e, a2, b2, c2, d)) d.stopPropagation();
      else if (Sc(a2, d), b2 & 4 && -1 < Rc.indexOf(a2)) {
        for (; null !== e; ) {
          var f2 = Cb(e);
          null !== f2 && Ec(f2);
          f2 = Yc(a2, b2, c2, d);
          null === f2 && hd(a2, b2, d, id, c2);
          if (f2 === e) break;
          e = f2;
        }
        null !== e && d.stopPropagation();
      } else hd(a2, b2, d, null, c2);
    }
  }
  var id = null;
  function Yc(a2, b2, c2, d) {
    id = null;
    a2 = xb(d);
    a2 = Wc(a2);
    if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2) return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else b2 !== a2 && (a2 = null);
    id = a2;
    return null;
  }
  function jd(a2) {
    switch (a2) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a2, b2 = ld, c2 = b2.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
    for (a2 = 0; a2 < c2 && b2[a2] === e[a2]; a2++) ;
    var g = c2 - a2;
    for (d = 1; d <= g && b2[c2 - d] === e[f2 - d]; d++) ;
    return md = e.slice(a2, 1 < d ? 1 - d : void 0);
  }
  function od(a2) {
    var b2 = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
    10 === a2 && (a2 = 13);
    return 32 <= a2 || 13 === a2 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b2(b3, d, e, f2, g) {
      this._reactName = b3;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f2;
      this.target = g;
      this.currentTarget = null;
      for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a3 = this.nativeEvent;
      a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a3 = this.nativeEvent;
      a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2) return a2.movementX;
    a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if ("Unidentified" !== b2) return b2;
    }
    return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return "keypress" === a2.type ? od(a2) : 0;
  }, keyCode: function(a2) {
    return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  }, which: function(a2) {
    return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a2, b2) {
    switch (a2) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a2) {
    a2 = a2.detail;
    return "object" === typeof a2 && "data" in a2 ? a2.data : null;
  }
  var ie = false;
  function je(a2, b2) {
    switch (a2) {
      case "compositionend":
        return he(b2);
      case "keypress":
        if (32 !== b2.which) return null;
        fe = true;
        return ee;
      case "textInput":
        return a2 = b2.data, a2 === ee && fe ? null : a2;
      default:
        return null;
    }
  }
  function ke(a2, b2) {
    if (ie) return "compositionend" === a2 || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length) return b2.char;
          if (b2.which) return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return "input" === b2 ? !!le[a2.type] : "textarea" === b2 ? true : false;
  }
  function ne(a2, b2, c2, d) {
    Eb(d);
    b2 = oe(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d), a2.push({ event: c2, listeners: b2 }));
  }
  var pe = null, qe = null;
  function re(a2) {
    se(a2, 0);
  }
  function te(a2) {
    var b2 = ue(a2);
    if (Wa(b2)) return a2;
  }
  function ve(a2, b2) {
    if ("change" === a2) return b2;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a2) {
    if ("value" === a2.propertyName && te(qe)) {
      var b2 = [];
      ne(b2, qe, a2, xb(a2));
      Jb(re, b2);
    }
  }
  function Ce(a2, b2, c2) {
    "focusin" === a2 ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae();
  }
  function De(a2) {
    if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te(qe);
  }
  function Ee(a2, b2) {
    if ("click" === a2) return te(b2);
  }
  function Fe(a2, b2) {
    if ("input" === a2 || "change" === a2) return te(b2);
  }
  function Ge(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a2, b2) {
    if (He(a2, b2)) return true;
    if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
    var c2 = Object.keys(a2), d = Object.keys(b2);
    if (c2.length !== d.length) return false;
    for (d = 0; d < c2.length; d++) {
      var e = c2[d];
      if (!ja.call(b2, e) || !He(a2[e], b2[e])) return false;
    }
    return true;
  }
  function Je(a2) {
    for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
    return a2;
  }
  function Ke(a2, b2) {
    var c2 = Je(a2);
    a2 = 0;
    for (var d; c2; ) {
      if (3 === c2.nodeType) {
        d = a2 + c2.textContent.length;
        if (a2 <= b2 && d >= b2) return { node: c2, offset: b2 - a2 };
        a2 = d;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je(c2);
    }
  }
  function Le(a2, b2) {
    return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me() {
    for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d) {
        c2 = false;
      }
      if (c2) a2 = b2.contentWindow;
      else break;
      b2 = Xa(a2.document);
    }
    return b2;
  }
  function Ne(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
  }
  function Oe(a2) {
    var b2 = Me(), c2 = a2.focusedElem, d = a2.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
      if (null !== d && Ne(c2)) {
        if (b2 = d.start, a2 = d.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
        else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
          a2 = a2.getSelection();
          var e = c2.textContent.length, f2 = Math.min(d.start, e);
          d = void 0 === d.end ? f2 : Math.min(d.end, e);
          !a2.extend && f2 > d && (e = d, d = f2, f2 = e);
          e = Ke(c2, f2);
          var g = Ke(
            c2,
            d
          );
          e && g && (1 !== a2.rangeCount || a2.anchorNode !== e.node || a2.anchorOffset !== e.offset || a2.focusNode !== g.node || a2.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a2.removeAllRanges(), f2 > d ? (a2.addRange(b2), a2.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a2.addRange(b2)));
        }
      }
      b2 = [];
      for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a2, b2, c2) {
    var d = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d }), b2.target = Qe)));
  }
  function Ve(a2, b2) {
    var c2 = {};
    c2[a2.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a2] = "webkit" + b2;
    c2["Moz" + a2] = "moz" + b2;
    return c2;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a2) {
    if (Xe[a2]) return Xe[a2];
    if (!We[a2]) return a2;
    var b2 = We[a2], c2;
    for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a2] = b2[c2];
    return a2;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a2, b2) {
    df.set(a2, b2);
    fa(b2, [a2]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a2, b2, c2) {
    var d = a2.type || "unknown-event";
    a2.currentTarget = c2;
    Ub(d, b2, void 0, a2);
    a2.currentTarget = null;
  }
  function se(a2, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a2.length; c2++) {
      var d = a2[c2], e = d.event;
      d = d.listeners;
      a: {
        var f2 = void 0;
        if (b2) for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped()) break a;
          nf(e, h, l2);
          f2 = k2;
        }
        else for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped()) break a;
          nf(e, h, l2);
          f2 = k2;
        }
      }
    }
    if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
  }
  function D(a2, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d = a2 + "__bubble";
    c2.has(d) || (pf(b2, a2, 2, false), c2.add(d));
  }
  function qf(a2, b2, c2) {
    var d = 0;
    b2 && (d |= 4);
    pf(c2, a2, d, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a2) {
    if (!a2[rf]) {
      a2[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
      });
      var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a2, b2, c2, d) {
    switch (jd(b2)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c2 = e.bind(null, b2, c2, a2);
    e = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
    d ? void 0 !== e ? a2.addEventListener(b2, c2, { capture: true, passive: e }) : a2.addEventListener(b2, c2, true) : void 0 !== e ? a2.addEventListener(b2, c2, { passive: e }) : a2.addEventListener(b2, c2, false);
  }
  function hd(a2, b2, c2, d, e) {
    var f2 = d;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d) a: for (; ; ) {
      if (null === d) return;
      var g = d.tag;
      if (3 === g || 4 === g) {
        var h = d.stateNode.containerInfo;
        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
        if (4 === g) for (g = d.return; null !== g; ) {
          var k2 = g.tag;
          if (3 === k2 || 4 === k2) {
            if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
          }
          g = g.return;
        }
        for (; null !== h; ) {
          g = Wc(h);
          if (null === g) return;
          k2 = g.tag;
          if (5 === k2 || 6 === k2) {
            d = f2 = g;
            continue a;
          }
          h = h.parentNode;
        }
      }
      d = d.return;
    }
    Jb(function() {
      var d2 = f2, e2 = xb(c2), g2 = [];
      a: {
        var h2 = df.get(a2);
        if (void 0 !== h2) {
          var k3 = td, n2 = a2;
          switch (a2) {
            case "keypress":
              if (0 === od(c2)) break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
          t2 = [];
          for (var w2 = d2, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2) break;
            w2 = w2.return;
          }
          0 < t2.length && (h2 = new k3(h2, n2, null, c2, e2), g2.push({ event: h2, listeners: t2 }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h2 = "mouseover" === a2 || "pointerover" === a2;
          k3 = "mouseout" === a2 || "pointerout" === a2;
          if (h2 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
          if (k3 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k3) {
              if (n2 = c2.relatedTarget || c2.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
            } else k3 = null, n2 = d2;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h2 : ue(k3);
              u2 = null == n2 ? h2 : ue(n2);
              h2 = new t2(F2, w2 + "leave", k3, c2, e2);
              h2.target = J2;
              h2.relatedTarget = u2;
              F2 = null;
              Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c2, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2) b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2)) w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2)) u2++;
                for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
              else t2 = null;
              null !== k3 && wf(g2, h2, k3, t2, false);
              null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k3 = h2.nodeName && h2.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
          else if (me(h2)) if (we) na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
          else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
          if (na && (na = na(a2, d2))) {
            ne(g2, na, c2, e2);
            break a;
          }
          xa && xa(a2, h2, d2);
          "focusout" === a2 && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a2) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c2, e2);
            break;
          case "selectionchange":
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g2, c2, e2);
        }
        var $a;
        if (ae) b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie ? ge(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a2, c2) : ke(a2, c2)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b2);
    });
  }
  function tf(a2, b2, c2) {
    return { instance: a2, listener: b2, currentTarget: c2 };
  }
  function oe(a2, b2) {
    for (var c2 = b2 + "Capture", d = []; null !== a2; ) {
      var e = a2, f2 = e.stateNode;
      5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a2, c2), null != f2 && d.unshift(tf(a2, f2, e)), f2 = Kb(a2, b2), null != f2 && d.push(tf(a2, f2, e)));
      a2 = a2.return;
    }
    return d;
  }
  function vf(a2) {
    if (null === a2) return null;
    do
      a2 = a2.return;
    while (a2 && 5 !== a2.tag);
    return a2 ? a2 : null;
  }
  function wf(a2, b2, c2, d, e) {
    for (var f2 = b2._reactName, g = []; null !== c2 && c2 !== d; ) {
      var h = c2, k2 = h.alternate, l2 = h.stateNode;
      if (null !== k2 && k2 === d) break;
      5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c2, f2), null != k2 && g.unshift(tf(c2, k2, h))) : e || (k2 = Kb(c2, f2), null != k2 && g.push(tf(c2, k2, h))));
      c2 = c2.return;
    }
    0 !== g.length && a2.push({ event: b2, listeners: g });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a2) {
    return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
  }
  function Af(a2, b2, c2) {
    b2 = zf(b2);
    if (zf(a2) !== b2 && c2) throw Error(p(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a2, b2) {
    return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
    return Hf.resolve(null).then(a2).catch(If);
  } : Ff;
  function If(a2) {
    setTimeout(function() {
      throw a2;
    });
  }
  function Kf(a2, b2) {
    var c2 = b2, d = 0;
    do {
      var e = c2.nextSibling;
      a2.removeChild(c2);
      if (e && 8 === e.nodeType) if (c2 = e.data, "/$" === c2) {
        if (0 === d) {
          a2.removeChild(e);
          bd(b2);
          return;
        }
        d--;
      } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d++;
      c2 = e;
    } while (c2);
    bd(b2);
  }
  function Lf(a2) {
    for (; null != a2; a2 = a2.nextSibling) {
      var b2 = a2.nodeType;
      if (1 === b2 || 3 === b2) break;
      if (8 === b2) {
        b2 = a2.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
        if ("/$" === b2) return null;
      }
    }
    return a2;
  }
  function Mf(a2) {
    a2 = a2.previousSibling;
    for (var b2 = 0; a2; ) {
      if (8 === a2.nodeType) {
        var c2 = a2.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2) return a2;
          b2--;
        } else "/$" === c2 && b2++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a2) {
    var b2 = a2[Of];
    if (b2) return b2;
    for (var c2 = a2.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of]) return c2;
          a2 = Mf(a2);
        }
        return b2;
      }
      a2 = c2;
      c2 = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[Of] || a2[uf];
    return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
  }
  function ue(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
    throw Error(p(33));
  }
  function Db(a2) {
    return a2[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a2) {
    return { current: a2 };
  }
  function E(a2) {
    0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a2, b2) {
    Tf++;
    Sf[Tf] = a2.current;
    a2.current = b2;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a2, b2) {
    var c2 = a2.type.contextTypes;
    if (!c2) return Vf;
    var d = a2.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c2) e[f2] = b2[f2];
    d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a2) {
    a2 = a2.childContextTypes;
    return null !== a2 && void 0 !== a2;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a2, b2, c2) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b2);
    G(Wf, c2);
  }
  function bg(a2, b2, c2) {
    var d = a2.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c2;
    d = d.getChildContext();
    for (var e in d) if (!(e in b2)) throw Error(p(108, Ra(a2) || "Unknown", e));
    return A({}, c2, d);
  }
  function cg(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a2);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a2, b2, c2) {
    var d = a2.stateNode;
    if (!d) throw Error(p(169));
    c2 ? (a2 = bg(a2, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a2, E(Wf), E(H), G(H, a2)) : E(Wf);
    G(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a2) {
    null === eg ? eg = [a2] : eg.push(a2);
  }
  function ig(a2) {
    fg = true;
    hg(a2);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a2 = 0, b2 = C;
      try {
        var c2 = eg;
        for (C = 1; a2 < c2.length; a2++) {
          var d = c2[a2];
          do
            d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e;
      } finally {
        C = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a2, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a2;
    ng = b2;
  }
  function ug(a2, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a2;
    var d = rg;
    a2 = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c2 += 1;
    var f2 = 32 - oc(b2) + e;
    if (30 < f2) {
      var g = e - e % 5;
      f2 = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b2) + e | c2 << e | d;
      sg = f2 + a2;
    } else rg = 1 << f2 | c2 << e | d, sg = a2;
  }
  function vg(a2) {
    null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
  }
  function wg(a2) {
    for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a2, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a2;
    b2 = a2.deletions;
    null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
  }
  function Cg(a2, b2) {
    switch (a2.tag) {
      case 5:
        var c2 = a2.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a2) {
    return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
  }
  function Eg(a2) {
    if (I) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a2, b2)) {
          if (Dg(a2)) throw Error(p(418));
          b2 = Lf(c2.nextSibling);
          var d = xg;
          b2 && Cg(a2, b2) ? Ag(d, c2) : (a2.flags = a2.flags & -4097 | 2, I = false, xg = a2);
        }
      } else {
        if (Dg(a2)) throw Error(p(418));
        a2.flags = a2.flags & -4097 | 2;
        I = false;
        xg = a2;
      }
    }
  }
  function Fg(a2) {
    for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
    xg = a2;
  }
  function Gg(a2) {
    if (a2 !== xg) return false;
    if (!I) return Fg(a2), I = true, false;
    var b2;
    (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a2)) throw Hg(), Error(p(418));
      for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a2);
    if (13 === a2.tag) {
      a2 = a2.memoizedState;
      a2 = null !== a2 ? a2.dehydrated : null;
      if (!a2) throw Error(p(317));
      a: {
        a2 = a2.nextSibling;
        for (b2 = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a2.nextSibling);
                break a;
              }
              b2--;
            } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a2 = a2.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a2) {
    null === zg ? zg = [a2] : zg.push(a2);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a2, b2, c2) {
    a2 = c2.ref;
    if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag) throw Error(p(309));
          var d = c2.stateNode;
        }
        if (!d) throw Error(p(147, a2));
        var e = d, f2 = "" + a2;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
        b2 = function(a3) {
          var b3 = e.refs;
          null === a3 ? delete b3[f2] : b3[f2] = a3;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a2) throw Error(p(284));
      if (!c2._owner) throw Error(p(290, a2));
    }
    return a2;
  }
  function Mg(a2, b2) {
    a2 = Object.prototype.toString.call(b2);
    throw Error(p(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
  }
  function Ng(a2) {
    var b2 = a2._init;
    return b2(a2._payload);
  }
  function Og(a2) {
    function b2(b3, c3) {
      if (a2) {
        var d2 = b3.deletions;
        null === d2 ? (b3.deletions = [c3], b3.flags |= 16) : d2.push(c3);
      }
    }
    function c2(c3, d2) {
      if (!a2) return null;
      for (; null !== d2; ) b2(c3, d2), d2 = d2.sibling;
      return null;
    }
    function d(a3, b3) {
      for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
      return a3;
    }
    function e(a3, b3) {
      a3 = Pg(a3, b3);
      a3.index = 0;
      a3.sibling = null;
      return a3;
    }
    function f2(b3, c3, d2) {
      b3.index = d2;
      if (!a2) return b3.flags |= 1048576, c3;
      d2 = b3.alternate;
      if (null !== d2) return d2 = d2.index, d2 < c3 ? (b3.flags |= 2, c3) : d2;
      b3.flags |= 2;
      return c3;
    }
    function g(b3) {
      a2 && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h(a3, b3, c3, d2) {
      if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d2), b3.return = a3, b3;
      b3 = e(b3, c3);
      b3.return = a3;
      return b3;
    }
    function k2(a3, b3, c3, d2) {
      var f3 = c3.type;
      if (f3 === ya) return m2(a3, b3, c3.props.children, d2, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d2 = e(b3, c3.props), d2.ref = Lg(a3, b3, c3), d2.return = a3, d2;
      d2 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d2);
      d2.ref = Lg(a3, b3, c3);
      d2.return = a3;
      return d2;
    }
    function l2(a3, b3, c3, d2) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d2), b3.return = a3, b3;
      b3 = e(b3, c3.children || []);
      b3.return = a3;
      return b3;
    }
    function m2(a3, b3, c3, d2, f3) {
      if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d2, f3), b3.return = a3, b3;
      b3 = e(b3, c3);
      b3.return = a3;
      return b3;
    }
    function q2(a3, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
          case wa:
            return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
          case Ha:
            var d2 = b3._init;
            return q2(a3, d2(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
        Mg(a3, b3);
      }
      return null;
    }
    function r2(a3, b3, c3, d2) {
      var e2 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e2 ? null : h(a3, b3, "" + c3, d2);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e2 ? k2(a3, b3, c3, d2) : null;
          case wa:
            return c3.key === e2 ? l2(a3, b3, c3, d2) : null;
          case Ha:
            return e2 = c3._init, r2(
              a3,
              b3,
              e2(c3._payload),
              d2
            );
        }
        if (eb(c3) || Ka(c3)) return null !== e2 ? null : m2(a3, b3, c3, d2, null);
        Mg(a3, c3);
      }
      return null;
    }
    function y2(a3, b3, c3, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a3 = a3.get(c3) || null, h(b3, a3, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return a3 = a3.get(null === d2.key ? c3 : d2.key) || null, k2(b3, a3, d2, e2);
          case wa:
            return a3 = a3.get(null === d2.key ? c3 : d2.key) || null, l2(b3, a3, d2, e2);
          case Ha:
            var f3 = d2._init;
            return y2(a3, b3, c3, f3(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2)) return a3 = a3.get(c3) || null, m2(b3, a3, d2, e2, null);
        Mg(b3, d2);
      }
      return null;
    }
    function n2(e2, g2, h2, k3) {
      for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e2, u2, h2[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a2 && u2 && null === n3.alternate && b2(e2, u2);
        g2 = f2(n3, g2, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h2.length) return c2(e2, u2), I && tg(e2, w2), l3;
      if (null === u2) {
        for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I && tg(e2, w2);
        return l3;
      }
      for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a2 && u2.forEach(function(a3) {
        return b2(e2, a3);
      });
      I && tg(e2, w2);
      return l3;
    }
    function t2(e2, g2, h2, k3) {
      var l3 = Ka(h2);
      if ("function" !== typeof l3) throw Error(p(150));
      h2 = l3.call(h2);
      if (null == h2) throw Error(p(151));
      for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r2(e2, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a2 && m3 && null === t3.alternate && b2(e2, m3);
        g2 = f2(t3, g2, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done) return c2(
        e2,
        m3
      ), I && tg(e2, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I && tg(e2, w2);
        return l3;
      }
      for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a2 && m3.forEach(function(a3) {
        return b2(e2, a3);
      });
      I && tg(e2, w2);
      return l3;
    }
    function J2(a3, d2, f3, h2) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a3, l3.sibling);
                      d2 = e(l3, f3.props.children);
                      d2.return = a3;
                      a3 = d2;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                    c2(a3, l3.sibling);
                    d2 = e(l3, f3.props);
                    d2.ref = Lg(a3, l3, f3);
                    d2.return = a3;
                    a3 = d2;
                    break a;
                  }
                  c2(a3, l3);
                  break;
                } else b2(a3, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d2 = Tg(f3.props.children, a3.mode, h2, f3.key), d2.return = a3, a3 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h2), h2.ref = Lg(a3, d2, f3), h2.return = a3, a3 = h2);
            }
            return g(a3);
          case wa:
            a: {
              for (l3 = f3.key; null !== d2; ) {
                if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c2(a3, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a3;
                  a3 = d2;
                  break a;
                } else {
                  c2(a3, d2);
                  break;
                }
                else b2(a3, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f3, a3.mode, h2);
              d2.return = a3;
              a3 = d2;
            }
            return g(a3);
          case Ha:
            return l3 = f3._init, J2(a3, d2, l3(f3._payload), h2);
        }
        if (eb(f3)) return n2(a3, d2, f3, h2);
        if (Ka(f3)) return t2(a3, d2, f3, h2);
        Mg(a3, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c2(a3, d2.sibling), d2 = e(d2, f3), d2.return = a3, a3 = d2) : (c2(a3, d2), d2 = Qg(f3, a3.mode, h2), d2.return = a3, a3 = d2), g(a3)) : c2(a3, d2);
    }
    return J2;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a2) {
    var b2 = Wg.current;
    E(Wg);
    a2._currentValue = b2;
  }
  function bh(a2, b2, c2) {
    for (; null !== a2; ) {
      var d = a2.alternate;
      (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
      if (a2 === c2) break;
      a2 = a2.return;
    }
  }
  function ch(a2, b2) {
    Xg = a2;
    Zg = Yg = null;
    a2 = a2.dependencies;
    null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
  }
  function eh(a2) {
    var b2 = a2._currentValue;
    if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
      if (null === Xg) throw Error(p(308));
      Yg = a2;
      Xg.dependencies = { lanes: 0, firstContext: a2 };
    } else Yg = Yg.next = a2;
    return b2;
  }
  var fh = null;
  function gh(a2) {
    null === fh ? fh = [a2] : fh.push(a2);
  }
  function hh(a2, b2, c2, d) {
    var e = b2.interleaved;
    null === e ? (c2.next = c2, gh(b2)) : (c2.next = e.next, e.next = c2);
    b2.interleaved = c2;
    return ih(a2, d);
  }
  function ih(a2, b2) {
    a2.lanes |= b2;
    var c2 = a2.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a2;
    for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var jh = false;
  function kh(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a2, b2) {
    a2 = a2.updateQueue;
    b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function mh(a2, b2) {
    return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a2, b2, c2) {
    var d = a2.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
      d.pending = b2;
      return ih(a2, c2);
    }
    e = d.interleaved;
    null === e ? (b2.next = b2, gh(d)) : (b2.next = e.next, e.next = b2);
    d.interleaved = b2;
    return ih(a2, c2);
  }
  function oh(a2, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d = b2.lanes;
      d &= a2.pendingLanes;
      c2 |= d;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  function ph(a2, b2) {
    var c2 = a2.updateQueue, d = a2.alternate;
    if (null !== d && (d = d.updateQueue, c2 === d)) {
      var e = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e = f2 = g : f2 = f2.next = g;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
      } else e = f2 = b2;
      c2 = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
      a2.updateQueue = c2;
      return;
    }
    a2 = c2.lastBaseUpdate;
    null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function qh(a2, b2, c2, d) {
    var e = a2.updateQueue;
    jh = false;
    var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k2 = h, l2 = k2.next;
      k2.next = null;
      null === g ? f2 = l2 : g.next = l2;
      g = k2;
      var m2 = a2.alternate;
      null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e.baseState;
      g = 0;
      m2 = l2 = k2 = null;
      h = f2;
      do {
        var r2 = h.lane, y2 = h.eventTime;
        if ((d & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n2 = a2, t2 = h;
            r2 = b2;
            y2 = c2;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                if (null === r2 || void 0 === r2) break a;
                q2 = A({}, q2, r2);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a2.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
        } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;
        else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e.baseState = k2;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m2;
      b2 = e.shared.interleaved;
      if (null !== b2) {
        e = b2;
        do
          g |= e.lane, e = e.next;
        while (e !== b2);
      } else null === f2 && (e.shared.lanes = 0);
      rh |= g;
      a2.lanes = g;
      a2.memoizedState = q2;
    }
  }
  function sh(a2, b2, c2) {
    a2 = b2.effects;
    b2.effects = null;
    if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
      var d = a2[b2], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c2;
        if ("function" !== typeof e) throw Error(p(191, e));
        e.call(d);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a2) {
    if (a2 === th) throw Error(p(174));
    return a2;
  }
  function yh(a2, b2) {
    G(wh, b2);
    G(vh, a2);
    G(uh, th);
    a2 = b2.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
    }
    E(uh);
    G(uh, b2);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a2) {
    xh(wh.current);
    var b2 = xh(uh.current);
    var c2 = lb(b2, a2.type);
    b2 !== c2 && (G(vh, a2), G(uh, c2));
  }
  function Bh(a2) {
    vh.current === a2 && (E(uh), E(vh));
  }
  var L = Uf(0);
  function Ch(a2) {
    for (var b2 = a2; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128)) return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p(321));
  }
  function Mh(a2, b2) {
    if (null === b2) return false;
    for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He(a2[c2], b2[c2])) return false;
    return true;
  }
  function Nh(a2, b2, c2, d, e, f2) {
    Hh = f2;
    M = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
    a2 = c2(d, e);
    if (Jh) {
      f2 = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f2) throw Error(p(301));
        f2 += 1;
        O = N = null;
        b2.updateQueue = null;
        Fh.current = Qh;
        a2 = c2(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b2 = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b2) throw Error(p(300));
    return a2;
  }
  function Sh() {
    var a2 = 0 !== Kh;
    Kh = 0;
    return a2;
  }
  function Th() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a2 : O = O.next = a2;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a2 = M.alternate;
      a2 = null !== a2 ? a2.memoizedState : null;
    } else a2 = N.next;
    var b2 = null === O ? M.memoizedState : O.next;
    if (null !== b2) O = b2, N = a2;
    else {
      if (null === a2) throw Error(p(310));
      N = a2;
      a2 = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a2 : O = O.next = a2;
    }
    return O;
  }
  function Vh(a2, b2) {
    return "function" === typeof b2 ? b2(a2) : b2;
  }
  function Wh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p(311));
    c2.lastRenderedReducer = a2;
    var d = N, e = d.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e) {
        var g = e.next;
        e.next = f2.next;
        f2.next = g;
      }
      d.baseQueue = e = f2;
      c2.pending = null;
    }
    if (null !== e) {
      f2 = e.next;
      d = d.baseState;
      var h = g = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a2(d, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
          M.lanes |= m2;
          rh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g = d : k2.next = h;
      He(d, b2.memoizedState) || (dh = true);
      b2.memoizedState = d;
      b2.baseState = g;
      b2.baseQueue = k2;
      c2.lastRenderedState = d;
    }
    a2 = c2.interleaved;
    if (null !== a2) {
      e = a2;
      do
        f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
      while (e !== a2);
    } else null === e && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function Xh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p(311));
    c2.lastRenderedReducer = a2;
    var d = c2.dispatch, e = c2.pending, f2 = b2.memoizedState;
    if (null !== e) {
      c2.pending = null;
      var g = e = e.next;
      do
        f2 = a2(f2, g.action), g = g.next;
      while (g !== e);
      He(f2, b2.memoizedState) || (dh = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d];
  }
  function Yh() {
  }
  function Zh(a2, b2) {
    var c2 = M, d = Uh(), e = b2(), f2 = !He(d.memoizedState, e);
    f2 && (d.memoizedState = e, dh = true);
    d = d.queue;
    $h(ai.bind(null, c2, d, a2), [a2]);
    if (d.getSnapshot !== b2 || f2 || null !== O && O.memoizedState.tag & 1) {
      c2.flags |= 2048;
      bi(9, ci.bind(null, c2, d, e, b2), void 0, null);
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(c2, b2, e);
    }
    return e;
  }
  function di(a2, b2, c2) {
    a2.flags |= 16384;
    a2 = { getSnapshot: b2, value: c2 };
    b2 = M.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
  }
  function ci(a2, b2, c2, d) {
    b2.value = c2;
    b2.getSnapshot = d;
    ei(b2) && fi(a2);
  }
  function ai(a2, b2, c2) {
    return c2(function() {
      ei(b2) && fi(a2);
    });
  }
  function ei(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var c2 = b2();
      return !He(a2, c2);
    } catch (d) {
      return true;
    }
  }
  function fi(a2) {
    var b2 = ih(a2, 1);
    null !== b2 && gi(b2, a2, 1, -1);
  }
  function hi(a2) {
    var b2 = Th();
    "function" === typeof a2 && (a2 = a2());
    b2.memoizedState = b2.baseState = a2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
    b2.queue = a2;
    a2 = a2.dispatch = ii.bind(null, M, a2);
    return [b2.memoizedState, a2];
  }
  function bi(a2, b2, c2, d) {
    a2 = { tag: a2, create: b2, destroy: c2, deps: d, next: null };
    b2 = M.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d = c2.next, c2.next = a2, a2.next = d, b2.lastEffect = a2));
    return a2;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a2, b2, c2, d) {
    var e = Th();
    M.flags |= a2;
    e.memoizedState = bi(1 | b2, c2, void 0, void 0 === d ? null : d);
  }
  function li(a2, b2, c2, d) {
    var e = Uh();
    d = void 0 === d ? null : d;
    var f2 = void 0;
    if (null !== N) {
      var g = N.memoizedState;
      f2 = g.destroy;
      if (null !== d && Mh(d, g.deps)) {
        e.memoizedState = bi(b2, c2, f2, d);
        return;
      }
    }
    M.flags |= a2;
    e.memoizedState = bi(1 | b2, c2, f2, d);
  }
  function mi(a2, b2) {
    return ki(8390656, 8, a2, b2);
  }
  function $h(a2, b2) {
    return li(2048, 8, a2, b2);
  }
  function ni(a2, b2) {
    return li(4, 2, a2, b2);
  }
  function oi(a2, b2) {
    return li(4, 4, a2, b2);
  }
  function pi(a2, b2) {
    if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
      b2(null);
    };
    if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
  }
  function qi(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return li(4, 4, pi.bind(null, b2, a2), c2);
  }
  function ri() {
  }
  function si(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d = c2.memoizedState;
    if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ti(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d = c2.memoizedState;
    if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ui(a2, b2, c2) {
    if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
    He(c2, b2) || (c2 = yc(), M.lanes |= c2, rh |= c2, a2.baseState = true);
    return b2;
  }
  function vi(a2, b2) {
    var c2 = C;
    C = 0 !== c2 && 4 > c2 ? c2 : 4;
    a2(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a2(false), b2();
    } finally {
      C = c2, Gh.transition = d;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a2, b2, c2) {
    var d = yi(a2);
    c2 = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a2)) Ai(b2, c2);
    else if (c2 = hh(a2, b2, c2, d), null !== c2) {
      var e = R();
      gi(c2, a2, d, e);
      Bi(c2, b2, d);
    }
  }
  function ii(a2, b2, c2) {
    var d = yi(a2), e = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a2)) Ai(b2, e);
    else {
      var f2 = a2.alternate;
      if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
        var g = b2.lastRenderedState, h = f2(g, c2);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k2 = b2.interleaved;
          null === k2 ? (e.next = e, gh(b2)) : (e.next = k2.next, k2.next = e);
          b2.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
      c2 = hh(a2, b2, e, d);
      null !== c2 && (e = R(), gi(c2, a2, d, e), Bi(c2, b2, d));
    }
  }
  function zi(a2) {
    var b2 = a2.alternate;
    return a2 === M || null !== b2 && b2 === M;
  }
  function Ai(a2, b2) {
    Jh = Ih = true;
    var c2 = a2.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
  function Bi(a2, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d = b2.lanes;
      d &= a2.pendingLanes;
      c2 |= d;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
    Th().memoizedState = [a2, void 0 === b2 ? null : b2];
    return a2;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b2, a2),
      c2
    );
  }, useLayoutEffect: function(a2, b2) {
    return ki(4194308, 4, a2, b2);
  }, useInsertionEffect: function(a2, b2) {
    return ki(4, 2, a2, b2);
  }, useMemo: function(a2, b2) {
    var c2 = Th();
    b2 = void 0 === b2 ? null : b2;
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }, useReducer: function(a2, b2, c2) {
    var d = Th();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d.memoizedState = d.baseState = b2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
    d.queue = a2;
    a2 = a2.dispatch = xi.bind(null, M, a2);
    return [d.memoizedState, a2];
  }, useRef: function(a2) {
    var b2 = Th();
    a2 = { current: a2 };
    return b2.memoizedState = a2;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
    return Th().memoizedState = a2;
  }, useTransition: function() {
    var a2 = hi(false), b2 = a2[0];
    a2 = vi.bind(null, a2[1]);
    Th().memoizedState = a2;
    return [b2, a2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a2, b2, c2) {
    var d = M, e = Th();
    if (I) {
      if (void 0 === c2) throw Error(p(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(d, b2, c2);
    }
    e.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e.queue = f2;
    mi(ai.bind(
      null,
      d,
      f2,
      a2
    ), [a2]);
    d.flags |= 2048;
    bi(9, ci.bind(null, d, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a2 = Th(), b2 = Q.identifierPrefix;
    if (I) {
      var c2 = sg;
      var d = rg;
      c2 = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Kh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a2.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a2) {
      var b2 = Uh();
      return ui(b2, N.memoizedState, a2);
    },
    useTransition: function() {
      var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
      return [a2, b2];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a2) {
    var b2 = Uh();
    return null === N ? b2.memoizedState = a2 : ui(b2, N.memoizedState, a2);
  }, useTransition: function() {
    var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a2, b2) {
    if (a2 && a2.defaultProps) {
      b2 = A({}, b2);
      a2 = a2.defaultProps;
      for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
      return b2;
    }
    return b2;
  }
  function Di(a2, b2, c2, d) {
    b2 = a2.memoizedState;
    c2 = c2(d, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
    a2.memoizedState = c2;
    0 === a2.lanes && (a2.updateQueue.baseState = c2);
  }
  var Ei = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d = R(), e = yi(a2), f2 = mh(d, e);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e);
    null !== b2 && (gi(b2, a2, e, d), oh(b2, a2, e));
  }, enqueueReplaceState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d = R(), e = yi(a2), f2 = mh(d, e);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e);
    null !== b2 && (gi(b2, a2, e, d), oh(b2, a2, e));
  }, enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c2 = R(), d = yi(a2), e = mh(c2, d);
    e.tag = 2;
    void 0 !== b2 && null !== b2 && (e.callback = b2);
    b2 = nh(a2, e, d);
    null !== b2 && (gi(b2, a2, d, c2), oh(b2, a2, d));
  } };
  function Fi(a2, b2, c2, d, e, f2, g) {
    a2 = a2.stateNode;
    return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d) || !Ie(e, f2) : true;
  }
  function Gi(a2, b2, c2) {
    var d = false, e = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b2) ? Xf : H.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a2, e) : Vf);
    b2 = new b2(c2, f2);
    a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = Ei;
    a2.stateNode = b2;
    b2._reactInternals = a2;
    d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e, a2.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function Hi(a2, b2, c2, d) {
    a2 = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d);
    b2.state !== a2 && Ei.enqueueReplaceState(b2, b2.state, null);
  }
  function Ii(a2, b2, c2, d) {
    var e = a2.stateNode;
    e.props = c2;
    e.state = a2.memoizedState;
    e.refs = {};
    kh(a2);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b2) ? Xf : H.current, e.context = Yf(a2, f2));
    e.state = a2.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (Di(a2, b2, f2, c2), e.state = a2.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a2, c2, e, d), e.state = a2.memoizedState);
    "function" === typeof e.componentDidMount && (a2.flags |= 4194308);
  }
  function Ji(a2, b2) {
    try {
      var c2 = "", d = b2;
      do
        c2 += Pa(d), d = d.return;
      while (d);
      var e = c2;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a2, source: b2, stack: e, digest: null };
  }
  function Ki(a2, b2, c2) {
    return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Li(a2, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d = b2.value;
    c2.callback = function() {
      Oi || (Oi = true, Pi = d);
      Li(a2, b2);
    };
    return c2;
  }
  function Qi(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    var d = a2.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b2.value;
      c2.payload = function() {
        return d(e);
      };
      c2.callback = function() {
        Li(a2, b2);
      };
    }
    var f2 = a2.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Li(a2, b2);
      "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Si(a2, b2, c2) {
    var d = a2.pingCache;
    if (null === d) {
      d = a2.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d.set(b2, e);
    } else e = d.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b2, e));
    e.has(c2) || (e.add(c2), a2 = Ti.bind(null, a2, b2, c2), b2.then(a2, a2));
  }
  function Ui(a2) {
    do {
      var b2;
      if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2) return a2;
      a2 = a2.return;
    } while (null !== a2);
    return null;
  }
  function Vi(a2, b2, c2, d, e) {
    if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
    a2.flags |= 65536;
    a2.lanes = e;
    return a2;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a2, b2, c2, d) {
    b2.child = null === a2 ? Vg(b2, null, c2, d) : Ug(b2, a2.child, c2, d);
  }
  function Yi(a2, b2, c2, d, e) {
    c2 = c2.render;
    var f2 = b2.ref;
    ch(b2, e);
    d = Nh(a2, b2, c2, d, f2, e);
    c2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e, Zi(a2, b2, e);
    I && c2 && vg(b2);
    b2.flags |= 1;
    Xi(a2, b2, d, e);
    return b2.child;
  }
  function $i(a2, b2, c2, d, e) {
    if (null === a2) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d, e);
      a2 = Rg(c2.type, null, d, b2, b2.mode, e);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    f2 = a2.child;
    if (0 === (a2.lanes & e)) {
      var g = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie;
      if (c2(g, d) && a2.ref === b2.ref) return Zi(a2, b2, e);
    }
    b2.flags |= 1;
    a2 = Pg(f2, d);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  function bj(a2, b2, c2, d, e) {
    if (null !== a2) {
      var f2 = a2.memoizedProps;
      if (Ie(f2, d) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d = f2, 0 !== (a2.lanes & e)) 0 !== (a2.flags & 131072) && (dh = true);
      else return b2.lanes = a2.lanes, Zi(a2, b2, e);
    }
    return cj(a2, b2, c2, d, e);
  }
  function dj(a2, b2, c2) {
    var d = b2.pendingProps, e = d.children, f2 = null !== a2 ? a2.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c2;
    else {
      if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G(ej, fj), fj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c2;
      G(ej, fj);
      fj |= d;
    }
    else null !== f2 ? (d = f2.baseLanes | c2, b2.memoizedState = null) : d = c2, G(ej, fj), fj |= d;
    Xi(a2, b2, e, c2);
    return b2.child;
  }
  function gj(a2, b2) {
    var c2 = b2.ref;
    if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
  }
  function cj(a2, b2, c2, d, e) {
    var f2 = Zf(c2) ? Xf : H.current;
    f2 = Yf(b2, f2);
    ch(b2, e);
    c2 = Nh(a2, b2, c2, d, f2, e);
    d = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e, Zi(a2, b2, e);
    I && d && vg(b2);
    b2.flags |= 1;
    Xi(a2, b2, c2, e);
    return b2.child;
  }
  function hj(a2, b2, c2, d, e) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else f2 = false;
    ch(b2, e);
    if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d), Ii(b2, c2, d, e), d = true;
    else if (null === a2) {
      var g = b2.stateNode, h = b2.memoizedProps;
      g.props = h;
      var k2 = g.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b2, g, d, l2);
      jh = false;
      var r2 = b2.memoizedState;
      g.state = r2;
      qh(b2, d, g, e);
      k2 = b2.memoizedState;
      h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d), k2 = b2.memoizedState), (h = jh || Fi(b2, c2, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
    } else {
      g = b2.stateNode;
      lh(a2, b2);
      h = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h : Ci(b2.type, h);
      g.props = l2;
      q2 = b2.pendingProps;
      r2 = g.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b2, g, d, k2);
      jh = false;
      r2 = b2.memoizedState;
      g.state = r2;
      qh(b2, d, g, e);
      var n2 = b2.memoizedState;
      h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d = false);
    }
    return jj(a2, b2, c2, d, f2, e);
  }
  function jj(a2, b2, c2, d, e, f2) {
    gj(a2, b2);
    var g = 0 !== (b2.flags & 128);
    if (!d && !g) return e && dg(b2, c2, false), Zi(a2, b2, f2);
    d = b2.stateNode;
    Wi.current = b2;
    var h = g && "function" !== typeof c2.getDerivedStateFromError ? null : d.render();
    b2.flags |= 1;
    null !== a2 && g ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h, f2)) : Xi(a2, b2, h, f2);
    b2.memoizedState = d.state;
    e && dg(b2, c2, true);
    return b2.child;
  }
  function kj(a2) {
    var b2 = a2.stateNode;
    b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
    yh(a2, b2.containerInfo);
  }
  function lj(a2, b2, c2, d, e) {
    Ig();
    Jg(e);
    b2.flags |= 256;
    Xi(a2, b2, c2, d);
    return b2.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a2) {
    return { baseLanes: a2, cachePool: null, transitions: null };
  }
  function oj(a2, b2, c2) {
    var d = b2.pendingProps, e = L.current, f2 = false, g = 0 !== (b2.flags & 128), h;
    (h = g) || (h = null !== a2 && null === a2.memoizedState ? false : 0 !== (e & 2));
    if (h) f2 = true, b2.flags &= -129;
    else if (null === a2 || null !== a2.memoizedState) e |= 1;
    G(L, e & 1);
    if (null === a2) {
      Eg(b2);
      a2 = b2.memoizedState;
      if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g = d.children;
      a2 = d.fallback;
      return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a2 = Tg(a2, d, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g);
    }
    e = a2.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return rj(a2, b2, g, d, h, e, c2);
    if (f2) {
      f2 = d.fallback;
      g = b2.mode;
      e = a2.child;
      h = e.sibling;
      var k2 = { mode: "hidden", children: d.children };
      0 === (g & 1) && b2.child !== e ? (d = b2.child, d.childLanes = 0, d.pendingProps = k2, b2.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c2, null), f2.flags |= 2);
      f2.return = b2;
      d.return = b2;
      d.sibling = f2;
      b2.child = d;
      d = f2;
      f2 = b2.child;
      g = a2.child.memoizedState;
      g = null === g ? nj(c2) : { baseLanes: g.baseLanes | c2, cachePool: null, transitions: g.transitions };
      f2.memoizedState = g;
      f2.childLanes = a2.childLanes & ~c2;
      b2.memoizedState = mj;
      return d;
    }
    f2 = a2.child;
    a2 = f2.sibling;
    d = Pg(f2, { mode: "visible", children: d.children });
    0 === (b2.mode & 1) && (d.lanes = c2);
    d.return = b2;
    d.sibling = null;
    null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
    b2.child = d;
    b2.memoizedState = null;
    return d;
  }
  function qj(a2, b2) {
    b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
    b2.return = a2;
    return a2.child = b2;
  }
  function sj(a2, b2, c2, d) {
    null !== d && Jg(d);
    Ug(b2, a2.child, null, c2);
    a2 = qj(b2, b2.pendingProps.children);
    a2.flags |= 2;
    b2.memoizedState = null;
    return a2;
  }
  function rj(a2, b2, c2, d, e, f2, g) {
    if (c2) {
      if (b2.flags & 256) return b2.flags &= -257, d = Ki(Error(p(422))), sj(a2, b2, g, d);
      if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
      f2 = d.fallback;
      e = b2.mode;
      d = pj({ mode: "visible", children: d.children }, e, 0, null);
      f2 = Tg(f2, e, g, null);
      f2.flags |= 2;
      d.return = b2;
      f2.return = b2;
      d.sibling = f2;
      b2.child = d;
      0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g);
      b2.child.memoizedState = nj(g);
      b2.memoizedState = mj;
      return f2;
    }
    if (0 === (b2.mode & 1)) return sj(a2, b2, g, null);
    if ("$!" === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d) var h = d.dgst;
      d = h;
      f2 = Error(p(419));
      d = Ki(f2, d, void 0);
      return sj(a2, b2, g, d);
    }
    h = 0 !== (g & a2.childLanes);
    if (dh || h) {
      d = Q;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a2, e), gi(d, a2, e, -1));
      }
      tj();
      d = Ki(Error(p(421)));
      return sj(a2, b2, g, d);
    }
    if ("$?" === e.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e._reactRetry = b2, null;
    a2 = f2.treeContext;
    yg = Lf(e.nextSibling);
    xg = b2;
    I = true;
    zg = null;
    null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
    b2 = qj(b2, d.children);
    b2.flags |= 4096;
    return b2;
  }
  function vj(a2, b2, c2) {
    a2.lanes |= b2;
    var d = a2.alternate;
    null !== d && (d.lanes |= b2);
    bh(a2.return, b2, c2);
  }
  function wj(a2, b2, c2, d, e) {
    var f2 = a2.memoizedState;
    null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c2, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c2, f2.tailMode = e);
  }
  function xj(a2, b2, c2) {
    var d = b2.pendingProps, e = d.revealOrder, f2 = d.tail;
    Xi(a2, b2, d.children, c2);
    d = L.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
        if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
        else if (19 === a2.tag) vj(a2, c2, b2);
        else if (null !== a2.child) {
          a2.child.return = a2;
          a2 = a2.child;
          continue;
        }
        if (a2 === b2) break a;
        for (; null === a2.sibling; ) {
          if (null === a2.return || a2.return === b2) break a;
          a2 = a2.return;
        }
        a2.sibling.return = a2.return;
        a2 = a2.sibling;
      }
      d &= 1;
    }
    G(L, d);
    if (0 === (b2.mode & 1)) b2.memoizedState = null;
    else switch (e) {
      case "forwards":
        c2 = b2.child;
        for (e = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e = c2), c2 = c2.sibling;
        c2 = e;
        null === c2 ? (e = b2.child, b2.child = null) : (e = c2.sibling, c2.sibling = null);
        wj(b2, false, e, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e = b2.child;
        for (b2.child = null; null !== e; ) {
          a2 = e.alternate;
          if (null !== a2 && null === Ch(a2)) {
            b2.child = e;
            break;
          }
          a2 = e.sibling;
          e.sibling = c2;
          c2 = e;
          e = a2;
        }
        wj(b2, true, c2, null, f2);
        break;
      case "together":
        wj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
    return b2.child;
  }
  function ij(a2, b2) {
    0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function Zi(a2, b2, c2) {
    null !== a2 && (b2.dependencies = a2.dependencies);
    rh |= b2.lanes;
    if (0 === (c2 & b2.childLanes)) return null;
    if (null !== a2 && b2.child !== a2.child) throw Error(p(153));
    if (null !== b2.child) {
      a2 = b2.child;
      c2 = Pg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function yj(a2, b2, c2) {
    switch (b2.tag) {
      case 3:
        kj(b2);
        Ig();
        break;
      case 5:
        Ah(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        yh(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d = b2.type._context, e = b2.memoizedProps.value;
        G(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b2.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return G(L, L.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
          G(L, L.current & 1);
          a2 = Zi(a2, b2, c2);
          return null !== a2 ? a2.sibling : null;
        }
        G(L, L.current & 1);
        break;
      case 19:
        d = 0 !== (c2 & b2.childLanes);
        if (0 !== (a2.flags & 128)) {
          if (d) return xj(a2, b2, c2);
          b2.flags |= 128;
        }
        e = b2.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(L, L.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return b2.lanes = 0, dj(a2, b2, c2);
    }
    return Zi(a2, b2, c2);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a2, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2) break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2) return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a2, b2, c2, d) {
    var e = a2.memoizedProps;
    if (e !== d) {
      a2 = b2.stateNode;
      xh(uh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e = Ya(a2, e);
          d = Ya(a2, d);
          f2 = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e = gb(a2, e);
          d = gb(a2, d);
          f2 = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a2.onclick = Bf);
      }
      ub(c2, d);
      var g;
      c2 = null;
      for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
        var h = e[l2];
        for (g in h) h.hasOwnProperty(g) && (c2 || (c2 = {}), c2[g] = "");
      } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d) {
        var k2 = d[l2];
        h = null != e ? e[l2] : void 0;
        if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
          for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c2 || (c2 = {}), c2[g] = "");
          for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c2 || (c2 = {}), c2[g] = k2[g]);
        } else c2 || (f2 || (f2 = []), f2.push(
          l2,
          c2
        )), c2 = k2;
        else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a2), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2) b2.flags |= 4;
    }
  };
  Cj = function(a2, b2, c2, d) {
    c2 !== d && (b2.flags |= 4);
  };
  function Dj(a2, b2) {
    if (!I) switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d = null; null !== c2; ) null !== c2.alternate && (d = c2), c2 = c2.sibling;
        null === d ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d.sibling = null;
    }
  }
  function S(a2) {
    var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d = 0;
    if (b2) for (var e = a2.child; null !== e; ) c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a2, e = e.sibling;
    else for (e = a2.child; null !== e; ) c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a2, e = e.sibling;
    a2.subtreeFlags |= d;
    a2.childLanes = c2;
    return b2;
  }
  function Ej(a2, b2, c2) {
    var d = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S(b2), null;
      case 3:
        d = b2.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a2, b2);
        S(b2);
        return null;
      case 5:
        Bh(b2);
        var e = xh(wh.current);
        c2 = b2.type;
        if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d, e), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d) {
            if (null === b2.stateNode) throw Error(p(166));
            S(b2);
            return null;
          }
          a2 = xh(uh.current);
          if (Gg(b2)) {
            d = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d[Of] = b2;
            d[Pf] = f2;
            a2 = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D("cancel", d);
                D("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], d);
                break;
              case "source":
                D("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d
                );
                D("load", d);
                break;
              case "details":
                D("toggle", d);
                break;
              case "input":
                Za(d, f2);
                D("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f2.multiple };
                D("invalid", d);
                break;
              case "textarea":
                hb(d, f2), D("invalid", d);
            }
            ub(c2, f2);
            e = null;
            for (var g in f2) if (f2.hasOwnProperty(g)) {
              var h = f2[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a2), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a2
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
            switch (c2) {
              case "input":
                Va(d);
                db(d, f2, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d.onclick = Bf);
            }
            d = e;
            b2.updateQueue = d;
            null !== d && (b2.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
            "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d.is ? a2 = g.createElement(c2, { is: d.is }) : (a2 = g.createElement(c2), "select" === c2 && (g = a2, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a2 = g.createElementNS(a2, c2);
            a2[Of] = b2;
            a2[Pf] = d;
            zj(a2, b2, false, false);
            b2.stateNode = a2;
            a: {
              g = vb(c2, d);
              switch (c2) {
                case "dialog":
                  D("cancel", a2);
                  D("close", a2);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a2);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], a2);
                  e = d;
                  break;
                case "source":
                  D("error", a2);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a2
                  );
                  D("load", a2);
                  e = d;
                  break;
                case "details":
                  D("toggle", a2);
                  e = d;
                  break;
                case "input":
                  Za(a2, d);
                  e = Ya(a2, d);
                  D("invalid", a2);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a2._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D("invalid", a2);
                  break;
                case "textarea":
                  hb(a2, d);
                  e = gb(a2, d);
                  D("invalid", a2);
                  break;
                default:
                  e = d;
              }
              ub(c2, e);
              h = e;
              for (f2 in h) if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a2) : null != k2 && ta(a2, f2, k2, g));
              }
              switch (c2) {
                case "input":
                  Va(a2);
                  db(a2, d, false);
                  break;
                case "textarea":
                  Va(a2);
                  jb(a2);
                  break;
                case "option":
                  null != d.value && a2.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a2.multiple = !!d.multiple;
                  f2 = d.value;
                  null != f2 ? fb(a2, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                    a2,
                    !!d.multiple,
                    d.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a2.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S(b2);
        return null;
      case 6:
        if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b2.stateNode) throw Error(p(166));
          c2 = xh(wh.current);
          xh(uh.current);
          if (Gg(b2)) {
            d = b2.stateNode;
            c2 = b2.memoizedProps;
            d[Of] = b2;
            if (f2 = d.nodeValue !== c2) {
              if (a2 = xg, null !== a2) switch (a2.tag) {
                case 3:
                  Af(d.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c2, 0 !== (a2.mode & 1));
              }
            }
            f2 && (b2.flags |= 4);
          } else d = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
        }
        S(b2);
        return null;
      case 13:
        E(L);
        d = b2.memoizedState;
        if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
            if (null === a2) {
              if (!f2) throw Error(p(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2) throw Error(p(317));
              f2[Of] = b2;
            } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S(b2);
            f2 = false;
          } else null !== zg && (Fj(zg), zg = null), f2 = true;
          if (!f2) return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
        d = null !== d;
        d !== (null !== a2 && null !== a2.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S(b2);
        return null;
      case 4:
        return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S(b2), null;
      case 10:
        return ah(b2.type._context), S(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S(b2), null;
      case 19:
        E(L);
        f2 = b2.memoizedState;
        if (null === f2) return S(b2), null;
        d = 0 !== (b2.flags & 128);
        g = f2.rendering;
        if (null === g) if (d) Dj(f2, false);
        else {
          if (0 !== T || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
            g = Ch(a2);
            if (null !== g) {
              b2.flags |= 128;
              Dj(f2, false);
              d = g.updateQueue;
              null !== d && (b2.updateQueue = d, b2.flags |= 4);
              b2.subtreeFlags = 0;
              d = c2;
              for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a2 = g.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
              G(L, L.current & 1 | 2);
              return b2.child;
            }
            a2 = a2.sibling;
          }
          null !== f2.tail && B() > Gj && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
        }
        else {
          if (!d) if (a2 = Ch(g), null !== a2) {
            if (b2.flags |= 128, d = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b2), null;
          } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c2 = f2.last, null !== c2 ? c2.sibling = g : b2.child = g, f2.last = g);
        }
        if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = L.current, G(L, d ? c2 & 1 | 2 : c2 & 1), b2;
        S(b2);
        return null;
      case 22:
      case 23:
        return Hj(), d = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, b2.tag));
  }
  function Ij(a2, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 3:
        return zh(), E(Wf), E(H), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 5:
        return Bh(b2), null;
      case 13:
        E(L);
        a2 = b2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          if (null === b2.alternate) throw Error(p(340));
          Ig();
        }
        a2 = b2.flags;
        return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 19:
        return E(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b2.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Lj(a2, b2) {
    var c2 = a2.ref;
    if (null !== c2) if ("function" === typeof c2) try {
      c2(null);
    } catch (d) {
      W(a2, b2, d);
    }
    else c2.current = null;
  }
  function Mj(a2, b2, c2) {
    try {
      c2();
    } catch (d) {
      W(a2, b2, d);
    }
  }
  var Nj = false;
  function Oj(a2, b2) {
    Cf = dd;
    a2 = Me();
    if (Ne(a2)) {
      if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
      else a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d = c2.getSelection && c2.getSelection();
        if (d && 0 !== d.rangeCount) {
          c2 = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b: for (; ; ) {
            for (var y2; ; ) {
              q2 !== c2 || 0 !== e && 3 !== q2.nodeType || (h = g + e);
              q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
              3 === q2.nodeType && (g += q2.nodeValue.length);
              if (null === (y2 = q2.firstChild)) break;
              r2 = q2;
              q2 = y2;
            }
            for (; ; ) {
              if (q2 === a2) break b;
              r2 === c2 && ++l2 === e && (h = g);
              r2 === f2 && ++m2 === d && (k2 = g);
              if (null !== (y2 = q2.nextSibling)) break;
              q2 = r2;
              r2 = q2.parentNode;
            }
            q2 = y2;
          }
          c2 = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else c2 = null;
      }
      c2 = c2 || { start: 0, end: 0 };
    } else c2 = null;
    Df = { focusedElem: a2, selectionRange: c2 };
    dd = false;
    for (V = b2; null !== V; ) if (b2 = V, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V = a2;
    else for (; null !== V; ) {
      b2 = V;
      try {
        var n2 = b2.alternate;
        if (0 !== (b2.flags & 1024)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n2) {
              var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
              x2.__reactInternalSnapshotBeforeUpdate = w2;
            }
            break;
          case 3:
            var u2 = b2.stateNode.containerInfo;
            1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (F2) {
        W(b2, b2.return, F2);
      }
      a2 = b2.sibling;
      if (null !== a2) {
        a2.return = b2.return;
        V = a2;
        break;
      }
      V = b2.return;
    }
    n2 = Nj;
    Nj = false;
    return n2;
  }
  function Pj(a2, b2, c2) {
    var d = b2.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a2) === a2) {
          var f2 = e.destroy;
          e.destroy = void 0;
          void 0 !== f2 && Mj(b2, c2, f2);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Qj(a2, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a2) === a2) {
          var d = c2.create;
          c2.destroy = d();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Rj(a2) {
    var b2 = a2.ref;
    if (null !== b2) {
      var c2 = a2.stateNode;
      switch (a2.tag) {
        case 5:
          a2 = c2;
          break;
        default:
          a2 = c2;
      }
      "function" === typeof b2 ? b2(a2) : b2.current = a2;
    }
  }
  function Sj(a2) {
    var b2 = a2.alternate;
    null !== b2 && (a2.alternate = null, Sj(b2));
    a2.child = null;
    a2.deletions = null;
    a2.sibling = null;
    5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a2.stateNode = null;
    a2.return = null;
    a2.dependencies = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.stateNode = null;
    a2.updateQueue = null;
  }
  function Tj(a2) {
    return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
  }
  function Uj(a2) {
    a: for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Tj(a2.return)) return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2) continue a;
        if (null === a2.child || 4 === a2.tag) continue a;
        else a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2)) return a2.stateNode;
    }
  }
  function Vj(a2, b2, c2) {
    var d = a2.tag;
    if (5 === d || 6 === d) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
  }
  function Wj(a2, b2, c2) {
    var d = a2.tag;
    if (5 === d || 6 === d) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
    else if (4 !== d && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
  }
  var X = null, Xj = false;
  function Yj(a2, b2, c2) {
    for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
  }
  function Zj(a2, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h) {
    }
    switch (c2.tag) {
      case 5:
        U || Lj(c2, b2);
      case 6:
        var d = X, e = Xj;
        X = null;
        Yj(a2, b2, c2);
        X = d;
        Xj = e;
        null !== X && (Xj ? (a2 = X, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X && (Xj ? (a2 = X, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X, c2.stateNode));
        break;
      case 4:
        d = X;
        e = Xj;
        X = c2.stateNode.containerInfo;
        Xj = true;
        Yj(a2, b2, c2);
        X = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d = c2.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f2 = e, g = f2.destroy;
            f2 = f2.tag;
            void 0 !== g && (0 !== (f2 & 2) ? Mj(c2, b2, g) : 0 !== (f2 & 4) && Mj(c2, b2, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a2, b2, c2);
        break;
      case 1:
        if (!U && (Lj(c2, b2), d = c2.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c2.memoizedProps, d.state = c2.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c2, b2, h);
        }
        Yj(a2, b2, c2);
        break;
      case 21:
        Yj(a2, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U = (d = U) || null !== c2.memoizedState, Yj(a2, b2, c2), U = d) : Yj(a2, b2, c2);
        break;
      default:
        Yj(a2, b2, c2);
    }
  }
  function ak(a2) {
    var b2 = a2.updateQueue;
    if (null !== b2) {
      a2.updateQueue = null;
      var c2 = a2.stateNode;
      null === c2 && (c2 = a2.stateNode = new Kj());
      b2.forEach(function(b3) {
        var d = bk.bind(null, a2, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d, d));
      });
    }
  }
  function ck(a2, b2) {
    var c2 = b2.deletions;
    if (null !== c2) for (var d = 0; d < c2.length; d++) {
      var e = c2[d];
      try {
        var f2 = a2, g = b2, h = g;
        a: for (; null !== h; ) {
          switch (h.tag) {
            case 5:
              X = h.stateNode;
              Xj = false;
              break a;
            case 3:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h = h.return;
        }
        if (null === X) throw Error(p(160));
        Zj(f2, g, e);
        X = null;
        Xj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b2, l2);
      }
    }
    if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
  }
  function dk(a2, b2) {
    var c2 = a2.alternate, d = a2.flags;
    switch (a2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b2, a2);
        ek(a2);
        if (d & 4) {
          try {
            Pj(3, a2, a2.return), Qj(3, a2);
          } catch (t2) {
            W(a2, a2.return, t2);
          }
          try {
            Pj(5, a2, a2.return);
          } catch (t2) {
            W(a2, a2.return, t2);
          }
        }
        break;
      case 1:
        ck(b2, a2);
        ek(a2);
        d & 512 && null !== c2 && Lj(c2, c2.return);
        break;
      case 5:
        ck(b2, a2);
        ek(a2);
        d & 512 && null !== c2 && Lj(c2, c2.return);
        if (a2.flags & 32) {
          var e = a2.stateNode;
          try {
            ob(e, "");
          } catch (t2) {
            W(a2, a2.return, t2);
          }
        }
        if (d & 4 && (e = a2.stateNode, null != e)) {
          var f2 = a2.memoizedProps, g = null !== c2 ? c2.memoizedProps : f2, h = a2.type, k2 = a2.updateQueue;
          a2.updateQueue = null;
          if (null !== k2) try {
            "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h, g);
            var l2 = vb(h, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a2, a2.return, t2);
          }
        }
        break;
      case 6:
        ck(b2, a2);
        ek(a2);
        if (d & 4) {
          if (null === a2.stateNode) throw Error(p(162));
          e = a2.stateNode;
          f2 = a2.memoizedProps;
          try {
            e.nodeValue = f2;
          } catch (t2) {
            W(a2, a2.return, t2);
          }
        }
        break;
      case 3:
        ck(b2, a2);
        ek(a2);
        if (d & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
          bd(b2.containerInfo);
        } catch (t2) {
          W(a2, a2.return, t2);
        }
        break;
      case 4:
        ck(b2, a2);
        ek(a2);
        break;
      case 13:
        ck(b2, a2);
        ek(a2);
        e = a2.child;
        e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d & 4 && ak(a2);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a2.mode & 1 ? (U = (l2 = U) || m2, ck(b2, a2), U = l2) : ck(b2, a2);
        ek(a2);
        if (d & 8192) {
          l2 = null !== a2.memoizedState;
          if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r2, r2.return);
                  break;
                case 1:
                  Lj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c2 = r2.return;
                    try {
                      b2 = d, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Lj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    gk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
            }
            m2 = m2.sibling;
          }
          a: for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2) try {
                q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
              } catch (t2) {
                W(a2, a2.return, t2);
              }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2) break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2) break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        }
        break;
      case 19:
        ck(b2, a2);
        ek(a2);
        d & 4 && ak(a2);
        break;
      case 21:
        break;
      default:
        ck(
          b2,
          a2
        ), ek(a2);
    }
  }
  function ek(a2) {
    var b2 = a2.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a2.return; null !== c2; ) {
            if (Tj(c2)) {
              var d = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f2 = Uj(a2);
            Wj(a2, f2, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Uj(a2);
            Vj(a2, h, g);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k2) {
        W(a2, a2.return, k2);
      }
      a2.flags &= -3;
    }
    b2 & 4096 && (a2.flags &= -4097);
  }
  function hk(a2, b2, c2) {
    V = a2;
    ik(a2);
  }
  function ik(a2, b2, c2) {
    for (var d = 0 !== (a2.mode & 1); null !== V; ) {
      var e = V, f2 = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Jj;
        if (!g) {
          var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
          h = Jj;
          var l2 = U;
          Jj = g;
          if ((U = k2) && !l2) for (V = e; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
          for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
          V = e;
          Jj = h;
          U = l2;
        }
        kk(a2);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a2);
    }
  }
  function kk(a2) {
    for (; null !== V; ) {
      var b2 = V;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, b2);
              break;
            case 1:
              var d = b2.stateNode;
              if (b2.flags & 4 && !U) if (null === c2) d.componentDidMount();
              else {
                var e = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
                d.componentDidUpdate(e, c2.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b2.updateQueue;
              null !== f2 && sh(b2, f2, d);
              break;
            case 3:
              var g = b2.updateQueue;
              if (null !== g) {
                c2 = null;
                if (null !== b2.child) switch (b2.child.tag) {
                  case 5:
                    c2 = b2.child.stateNode;
                    break;
                  case 1:
                    c2 = b2.child.stateNode;
                }
                sh(b2, g, c2);
              }
              break;
            case 5:
              var h = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          U || b2.flags & 512 && Rj(b2);
        } catch (r2) {
          W(b2, b2.return, r2);
        }
      }
      if (b2 === a2) {
        V = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V = c2;
        break;
      }
      V = b2.return;
    }
  }
  function gk(a2) {
    for (; null !== V; ) {
      var b2 = V;
      if (b2 === a2) {
        V = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V = c2;
        break;
      }
      V = b2.return;
    }
  }
  function jk(a2) {
    for (; null !== V; ) {
      var b2 = V;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Qj(4, b2);
            } catch (k2) {
              W(b2, c2, k2);
            }
            break;
          case 1:
            var d = b2.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b2.return;
              try {
                d.componentDidMount();
              } catch (k2) {
                W(b2, e, k2);
              }
            }
            var f2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W(b2, f2, k2);
            }
            break;
          case 5:
            var g = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W(b2, g, k2);
            }
        }
      } catch (k2) {
        W(b2, b2.return, k2);
      }
      if (b2 === a2) {
        V = null;
        break;
      }
      var h = b2.sibling;
      if (null !== h) {
        h.return = b2.return;
        V = h;
        break;
      }
      V = b2.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a2) {
    if (0 === (a2.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a2 = C;
    if (0 !== a2) return a2;
    a2 = window.event;
    a2 = void 0 === a2 ? 16 : jd(a2.type);
    return a2;
  }
  function gi(a2, b2, c2, d) {
    if (50 < yk) throw yk = 0, zk = null, Error(p(185));
    Ac(a2, c2, d);
    if (0 === (K & 2) || a2 !== Q) a2 === Q && (0 === (K & 2) && (qk |= c2), 4 === T && Ck(a2, Z)), Dk(a2, d), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a2, b2) {
    var c2 = a2.callbackNode;
    wc(a2, b2);
    var d = uc(a2, a2 === Q ? Z : 0);
    if (0 === d) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
    else if (b2 = d & -d, a2.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
        0 === (K & 6) && jg();
      }), c2 = null;
      else {
        switch (Dc(d)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Fk(c2, Gk.bind(null, a2));
      }
      a2.callbackPriority = b2;
      a2.callbackNode = c2;
    }
  }
  function Gk(a2, b2) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c2 = a2.callbackNode;
    if (Hk() && a2.callbackNode !== c2) return null;
    var d = uc(a2, a2 === Q ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a2.expiredLanes) || b2) b2 = Ik(a2, d);
    else {
      b2 = d;
      var e = K;
      K |= 2;
      var f2 = Jk();
      if (Q !== a2 || Z !== b2) uk = null, Gj = B() + 500, Kk(a2, b2);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a2, h);
        }
      while (1);
      $g();
      mk.current = f2;
      K = e;
      null !== Y ? b2 = 0 : (Q = null, Z = 0, b2 = T);
    }
    if (0 !== b2) {
      2 === b2 && (e = xc(a2), 0 !== e && (d = e, b2 = Nk(a2, e)));
      if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d), Dk(a2, B()), c2;
      if (6 === b2) Ck(a2, d);
      else {
        e = a2.current.alternate;
        if (0 === (d & 30) && !Ok(e) && (b2 = Ik(a2, d), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d), Dk(a2, B()), c2;
        a2.finishedWork = e;
        a2.finishedLanes = d;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Pk(a2, tk, uk);
            break;
          case 3:
            Ck(a2, d);
            if ((d & 130023424) === d && (b2 = fk + 500 - B(), 10 < b2)) {
              if (0 !== uc(a2, 0)) break;
              e = a2.suspendedLanes;
              if ((e & d) !== d) {
                R();
                a2.pingedLanes |= a2.suspendedLanes & e;
                break;
              }
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
              break;
            }
            Pk(a2, tk, uk);
            break;
          case 4:
            Ck(a2, d);
            if ((d & 4194240) === d) break;
            b2 = a2.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f2 = 1 << g;
              g = b2[g];
              g > e && (e = g);
              d &= ~f2;
            }
            d = e;
            d = B() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d);
              break;
            }
            Pk(a2, tk, uk);
            break;
          case 5:
            Pk(a2, tk, uk);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    Dk(a2, B());
    return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
  }
  function Nk(a2, b2) {
    var c2 = sk;
    a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
    a2 = Ik(a2, b2);
    2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
    return a2;
  }
  function Fj(a2) {
    null === tk ? tk = a2 : tk.push.apply(tk, a2);
  }
  function Ok(a2) {
    for (var b2 = a2; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d = 0; d < c2.length; d++) {
          var e = c2[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e)) return false;
          } catch (g) {
            return false;
          }
        }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
      else {
        if (b2 === a2) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a2) return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Ck(a2, b2) {
    b2 &= ~rk;
    b2 &= ~qk;
    a2.suspendedLanes |= b2;
    a2.pingedLanes &= ~b2;
    for (a2 = a2.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d = 1 << c2;
      a2[c2] = -1;
      b2 &= ~d;
    }
  }
  function Ek(a2) {
    if (0 !== (K & 6)) throw Error(p(327));
    Hk();
    var b2 = uc(a2, 0);
    if (0 === (b2 & 1)) return Dk(a2, B()), null;
    var c2 = Ik(a2, b2);
    if (0 !== a2.tag && 2 === c2) {
      var d = xc(a2);
      0 !== d && (b2 = d, c2 = Nk(a2, d));
    }
    if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B()), c2;
    if (6 === c2) throw Error(p(345));
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b2;
    Pk(a2, tk, uk);
    Dk(a2, B());
    return null;
  }
  function Qk(a2, b2) {
    var c2 = K;
    K |= 1;
    try {
      return a2(b2);
    } finally {
      K = c2, 0 === K && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a2) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b2 = K;
    K |= 1;
    var c2 = ok.transition, d = C;
    try {
      if (ok.transition = null, C = 1, a2) return a2();
    } finally {
      C = d, ok.transition = c2, K = b2, 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a2, b2) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c2 = a2.timeoutHandle;
    -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
    if (null !== Y) for (c2 = Y.return; null !== c2; ) {
      var d = c2;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          zh();
          E(Wf);
          E(H);
          Eh();
          break;
        case 5:
          Bh(d);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L);
          break;
        case 19:
          E(L);
          break;
        case 10:
          ah(d.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c2 = c2.return;
    }
    Q = a2;
    Y = a2 = Pg(a2.current, null);
    Z = fj = b2;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d = c2.interleaved, null !== d) {
        c2.interleaved = null;
        var e = d.next, f2 = c2.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c2.pending = d;
      }
      fh = null;
    }
    return a2;
  }
  function Mk(a2, b2) {
    do {
      var c2 = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c2 || null === c2.return) {
          T = 1;
          pk = b2;
          Y = null;
          break;
        }
        a: {
          var f2 = a2, g = c2.return, h = c2, k2 = b2;
          b2 = Z;
          h.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Ui(g);
            if (null !== y2) {
              y2.flags &= -257;
              Vi(y2, g, h, f2, b2);
              y2.mode & 1 && Si(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n2 = b2.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b2.updateQueue = t2;
              } else n2.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Si(f2, l2, b2);
                tj();
                break a;
              }
              k2 = Error(p(426));
            }
          } else if (I && h.mode & 1) {
            var J2 = Ui(g);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Vi(J2, g, h, f2, b2);
              Jg(Ji(k2, h));
              break a;
            }
          }
          f2 = k2 = Ji(k2, h);
          4 !== T && (T = 2);
          null === sk ? sk = [f2] : sk.push(f2);
          f2 = g;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x2 = Ni(f2, k2, b2);
                ph(f2, x2);
                break a;
              case 1:
                h = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F2 = Qi(f2, h, b2);
                  ph(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Sk(c2);
      } catch (na) {
        b2 = na;
        Y === c2 && null !== c2 && (Y = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a2 = mk.current;
    mk.current = Rh;
    return null === a2 ? Rh : a2;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
  }
  function Ik(a2, b2) {
    var c2 = K;
    K |= 2;
    var d = Jk();
    if (Q !== a2 || Z !== b2) uk = null, Kk(a2, b2);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a2, e);
      }
    while (1);
    $g();
    K = c2;
    mk.current = d;
    if (null !== Y) throw Error(p(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; ) Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); ) Uk(Y);
  }
  function Uk(a2) {
    var b2 = Vk(a2.alternate, a2, fj);
    a2.memoizedProps = a2.pendingProps;
    null === b2 ? Sk(a2) : Y = b2;
    nk.current = null;
  }
  function Sk(a2) {
    var b2 = a2;
    do {
      var c2 = b2.alternate;
      a2 = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Ej(c2, b2, fj), null !== c2) {
          Y = c2;
          return;
        }
      } else {
        c2 = Ij(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y = c2;
          return;
        }
        if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y = b2;
        return;
      }
      Y = b2 = a2;
    } while (null !== b2);
    0 === T && (T = 5);
  }
  function Pk(a2, b2, c2) {
    var d = C, e = ok.transition;
    try {
      ok.transition = null, C = 1, Wk(a2, b2, c2, d);
    } finally {
      ok.transition = e, C = d;
    }
    return null;
  }
  function Wk(a2, b2, c2, d) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K & 6)) throw Error(p(327));
    c2 = a2.finishedWork;
    var e = a2.finishedLanes;
    if (null === c2) return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c2 === a2.current) throw Error(p(177));
    a2.callbackNode = null;
    a2.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a2, f2);
    a2 === Q && (Y = Q = null, Z = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = ok.transition;
      ok.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      nk.current = null;
      Oj(a2, c2);
      dk(c2, a2);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a2.current = c2;
      hk(c2);
      dc();
      K = h;
      C = g;
      ok.transition = f2;
    } else a2.current = c2;
    vk && (vk = false, wk = a2, xk = e);
    f2 = a2.pendingLanes;
    0 === f2 && (Ri = null);
    mc(c2.stateNode);
    Dk(a2, B());
    if (null !== b2) for (d = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e = b2[c2], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a2 = Pi, Pi = null, a2;
    0 !== (xk & 1) && 0 !== a2.tag && Hk();
    f2 = a2.pendingLanes;
    0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a2 = Dc(xk), b2 = ok.transition, c2 = C;
      try {
        ok.transition = null;
        C = 16 > a2 ? 16 : a2;
        if (null === wk) var d = false;
        else {
          a2 = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6)) throw Error(p(331));
          var e = K;
          K |= 4;
          for (V = a2.current; null !== V; ) {
            var f2 = V, g = f2.child;
            if (0 !== (V.flags & 16)) {
              var h = f2.deletions;
              if (null !== h) {
                for (var k2 = 0; k2 < h.length; k2++) {
                  var l2 = h[k2];
                  for (V = l2; null !== V; ) {
                    var m2 = V;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2) q2.return = m2, V = q2;
                    else for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Sj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
            else b: for (; null !== V; ) {
              f2 = V;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f2, f2.return);
              }
              var x2 = f2.sibling;
              if (null !== x2) {
                x2.return = f2.return;
                V = x2;
                break b;
              }
              V = f2.return;
            }
          }
          var w2 = a2.current;
          for (V = w2; null !== V; ) {
            g = V;
            var u2 = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
            else b: for (g = w2; null !== V; ) {
              h = V;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h);
                }
              } catch (na) {
                W(h, h.return, na);
              }
              if (h === g) {
                V = null;
                break b;
              }
              var F2 = h.sibling;
              if (null !== F2) {
                F2.return = h.return;
                V = F2;
                break b;
              }
              V = h.return;
            }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
          d = true;
        }
        return d;
      } finally {
        C = c2, ok.transition = b2;
      }
    }
    return false;
  }
  function Xk(a2, b2, c2) {
    b2 = Ji(c2, b2);
    b2 = Ni(a2, b2, 1);
    a2 = nh(a2, b2, 1);
    b2 = R();
    null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
  }
  function W(a2, b2, c2) {
    if (3 === a2.tag) Xk(a2, a2, c2);
    else for (; null !== b2; ) {
      if (3 === b2.tag) {
        Xk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
          a2 = Ji(c2, a2);
          a2 = Qi(b2, a2, 1);
          b2 = nh(b2, a2, 1);
          a2 = R();
          null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
  }
  function Ti(a2, b2, c2) {
    var d = a2.pingCache;
    null !== d && d.delete(b2);
    b2 = R();
    a2.pingedLanes |= a2.suspendedLanes & c2;
    Q === a2 && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a2, 0) : rk |= c2);
    Dk(a2, b2);
  }
  function Yk(a2, b2) {
    0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = R();
    a2 = ih(a2, b2);
    null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
  }
  function uj(a2) {
    var b2 = a2.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Yk(a2, c2);
  }
  function bk(a2, b2) {
    var c2 = 0;
    switch (a2.tag) {
      case 13:
        var d = a2.stateNode;
        var e = a2.memoizedState;
        null !== e && (c2 = e.retryLane);
        break;
      case 19:
        d = a2.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    null !== d && d.delete(b2);
    Yk(a2, c2);
  }
  var Vk;
  Vk = function(a2, b2, c2) {
    if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
      dh = 0 !== (a2.flags & 131072) ? true : false;
    }
    else dh = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d = b2.type;
        ij(a2, b2);
        a2 = b2.pendingProps;
        var e = Yf(b2, H.current);
        ch(b2, c2);
        e = Nh(null, b2, d, a2, e, c2);
        var f2 = Sh();
        b2.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b2), e.updater = Ei, b2.stateNode = e, e._reactInternals = b2, Ii(b2, d, a2, c2), b2 = jj(null, b2, d, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Xi(null, b2, e, c2), b2 = b2.child);
        return b2;
      case 16:
        d = b2.elementType;
        a: {
          ij(a2, b2);
          a2 = b2.pendingProps;
          e = d._init;
          d = e(d._payload);
          b2.type = d;
          e = b2.tag = Zk(d);
          a2 = Ci(d, a2);
          switch (e) {
            case 0:
              b2 = cj(null, b2, d, a2, c2);
              break a;
            case 1:
              b2 = hj(null, b2, d, a2, c2);
              break a;
            case 11:
              b2 = Yi(null, b2, d, a2, c2);
              break a;
            case 14:
              b2 = $i(null, b2, d, Ci(d.type, a2), c2);
              break a;
          }
          throw Error(p(
            306,
            d,
            ""
          ));
        }
        return b2;
      case 0:
        return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Ci(d, e), cj(a2, b2, d, e, c2);
      case 1:
        return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Ci(d, e), hj(a2, b2, d, e, c2);
      case 3:
        a: {
          kj(b2);
          if (null === a2) throw Error(p(387));
          d = b2.pendingProps;
          f2 = b2.memoizedState;
          e = f2.element;
          lh(a2, b2);
          qh(b2, d, null, c2);
          var g = b2.memoizedState;
          d = g.element;
          if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e = Ji(Error(p(423)), b2);
            b2 = lj(a2, b2, d, c2, e);
            break a;
          } else if (d !== e) {
            e = Ji(Error(p(424)), b2);
            b2 = lj(a2, b2, d, c2, e);
            break a;
          } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Vg(b2, null, d, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d === e) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
            Xi(a2, b2, d, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Ah(b2), null === a2 && Eg(b2), d = b2.type, e = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), gj(a2, b2), Xi(a2, b2, g, c2), b2.child;
      case 6:
        return null === a2 && Eg(b2), null;
      case 13:
        return oj(a2, b2, c2);
      case 4:
        return yh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d, c2) : Xi(a2, b2, d, c2), b2.child;
      case 11:
        return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Ci(d, e), Yi(a2, b2, d, e, c2);
      case 7:
        return Xi(a2, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d = b2.type._context;
          e = b2.pendingProps;
          f2 = b2.memoizedProps;
          g = e.value;
          G(Wg, d._currentValue);
          d._currentValue = g;
          if (null !== f2) if (He(f2.value, g)) {
            if (f2.children === e.children && !Wf.current) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
          } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
            var h = f2.dependencies;
            if (null !== h) {
              g = f2.child;
              for (var k2 = h.firstContext; null !== k2; ) {
                if (k2.context === d) {
                  if (1 === f2.tag) {
                    k2 = mh(-1, c2 & -c2);
                    k2.tag = 2;
                    var l2 = f2.updateQueue;
                    if (null !== l2) {
                      l2 = l2.shared;
                      var m2 = l2.pending;
                      null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                      l2.pending = k2;
                    }
                  }
                  f2.lanes |= c2;
                  k2 = f2.alternate;
                  null !== k2 && (k2.lanes |= c2);
                  bh(
                    f2.return,
                    c2,
                    b2
                  );
                  h.lanes |= c2;
                  break;
                }
                k2 = k2.next;
              }
            } else if (10 === f2.tag) g = f2.type === b2.type ? null : f2.child;
            else if (18 === f2.tag) {
              g = f2.return;
              if (null === g) throw Error(p(341));
              g.lanes |= c2;
              h = g.alternate;
              null !== h && (h.lanes |= c2);
              bh(g, c2, b2);
              g = f2.sibling;
            } else g = f2.child;
            if (null !== g) g.return = f2;
            else for (g = f2; null !== g; ) {
              if (g === b2) {
                g = null;
                break;
              }
              f2 = g.sibling;
              if (null !== f2) {
                f2.return = g.return;
                g = f2;
                break;
              }
              g = g.return;
            }
            f2 = g;
          }
          Xi(a2, b2, e.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e = b2.type, d = b2.pendingProps.children, ch(b2, c2), e = eh(e), d = d(e), b2.flags |= 1, Xi(a2, b2, d, c2), b2.child;
      case 14:
        return d = b2.type, e = Ci(d, b2.pendingProps), e = Ci(d.type, e), $i(a2, b2, d, e, c2);
      case 15:
        return bj(a2, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Ci(d, e), ij(a2, b2), b2.tag = 1, Zf(d) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d, e), Ii(b2, d, e, c2), jj(null, b2, d, true, a2, c2);
      case 19:
        return xj(a2, b2, c2);
      case 22:
        return dj(a2, b2, c2);
    }
    throw Error(p(156, b2.tag));
  };
  function Fk(a2, b2) {
    return ac(a2, b2);
  }
  function $k(a2, b2, c2, d) {
    this.tag = a2;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a2, b2, c2, d) {
    return new $k(a2, b2, c2, d);
  }
  function aj(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function Zk(a2) {
    if ("function" === typeof a2) return aj(a2) ? 1 : 0;
    if (void 0 !== a2 && null !== a2) {
      a2 = a2.$$typeof;
      if (a2 === Da) return 11;
      if (a2 === Ga) return 14;
    }
    return 2;
  }
  function Pg(a2, b2) {
    var c2 = a2.alternate;
    null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a2.flags & 14680064;
    c2.childLanes = a2.childLanes;
    c2.lanes = a2.lanes;
    c2.child = a2.child;
    c2.memoizedProps = a2.memoizedProps;
    c2.memoizedState = a2.memoizedState;
    c2.updateQueue = a2.updateQueue;
    b2 = a2.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a2.sibling;
    c2.index = a2.index;
    c2.ref = a2.ref;
    return c2;
  }
  function Rg(a2, b2, c2, d, e, f2) {
    var g = 2;
    d = a2;
    if ("function" === typeof a2) aj(a2) && (g = 1);
    else if ("string" === typeof a2) g = 5;
    else a: switch (a2) {
      case ya:
        return Tg(c2.children, e, f2, b2);
      case za:
        g = 8;
        e |= 8;
        break;
      case Aa:
        return a2 = Bg(12, c2, b2, e | 2), a2.elementType = Aa, a2.lanes = f2, a2;
      case Ea:
        return a2 = Bg(13, c2, b2, e), a2.elementType = Ea, a2.lanes = f2, a2;
      case Fa:
        return a2 = Bg(19, c2, b2, e), a2.elementType = Fa, a2.lanes = f2, a2;
      case Ia:
        return pj(c2, e, f2, b2);
      default:
        if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
          case Ba:
            g = 10;
            break a;
          case Ca:
            g = 9;
            break a;
          case Da:
            g = 11;
            break a;
          case Ga:
            g = 14;
            break a;
          case Ha:
            g = 16;
            d = null;
            break a;
        }
        throw Error(p(130, null == a2 ? a2 : typeof a2, ""));
    }
    b2 = Bg(g, c2, b2, e);
    b2.elementType = a2;
    b2.type = d;
    b2.lanes = f2;
    return b2;
  }
  function Tg(a2, b2, c2, d) {
    a2 = Bg(7, a2, d, b2);
    a2.lanes = c2;
    return a2;
  }
  function pj(a2, b2, c2, d) {
    a2 = Bg(22, a2, d, b2);
    a2.elementType = Ia;
    a2.lanes = c2;
    a2.stateNode = { isHidden: false };
    return a2;
  }
  function Qg(a2, b2, c2) {
    a2 = Bg(6, a2, null, b2);
    a2.lanes = c2;
    return a2;
  }
  function Sg(a2, b2, c2) {
    b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b2;
  }
  function al(a2, b2, c2, d, e) {
    this.tag = b2;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a2, b2, c2, d, e, f2, g, h, k2) {
    a2 = new al(a2, b2, c2, h, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a2.current = f2;
    f2.stateNode = a2;
    f2.memoizedState = { element: d, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f2);
    return a2;
  }
  function cl(a2, b2, c2) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d ? null : "" + d, children: a2, containerInfo: b2, implementation: c2 };
  }
  function dl(a2) {
    if (!a2) return Vf;
    a2 = a2._reactInternals;
    a: {
      if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p(170));
      var b2 = a2;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p(171));
    }
    if (1 === a2.tag) {
      var c2 = a2.type;
      if (Zf(c2)) return bg(a2, c2, b2);
    }
    return b2;
  }
  function el(a2, b2, c2, d, e, f2, g, h, k2) {
    a2 = bl(c2, d, true, a2, e, f2, g, h, k2);
    a2.context = dl(null);
    c2 = a2.current;
    d = R();
    e = yi(c2);
    f2 = mh(d, e);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    nh(c2, f2, e);
    a2.current.lanes = e;
    Ac(a2, e, d);
    Dk(a2, d);
    return a2;
  }
  function fl(a2, b2, c2, d) {
    var e = b2.current, f2 = R(), g = yi(e);
    c2 = dl(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = mh(f2, g);
    b2.payload = { element: a2 };
    d = void 0 === d ? null : d;
    null !== d && (b2.callback = d);
    a2 = nh(e, b2, g);
    null !== a2 && (gi(a2, e, g, f2), oh(a2, e, g));
    return g;
  }
  function gl(a2) {
    a2 = a2.current;
    if (!a2.child) return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function hl(a2, b2) {
    a2 = a2.memoizedState;
    if (null !== a2 && null !== a2.dehydrated) {
      var c2 = a2.retryLane;
      a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function il(a2, b2) {
    hl(a2, b2);
    (a2 = a2.alternate) && hl(a2, b2);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a2) {
    console.error(a2);
  };
  function ll(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.render = ll.prototype.render = function(a2) {
    var b2 = this._internalRoot;
    if (null === b2) throw Error(p(409));
    fl(a2, b2, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a2 = this._internalRoot;
    if (null !== a2) {
      this._internalRoot = null;
      var b2 = a2.containerInfo;
      Rk(function() {
        fl(null, a2, null, null);
      });
      b2[uf] = null;
    }
  };
  function ml(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.unstable_scheduleHydration = function(a2) {
    if (a2) {
      var b2 = Hc();
      a2 = { blockedOn: null, target: a2, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
      Qc.splice(c2, 0, a2);
      0 === c2 && Vc(a2);
    }
  };
  function nl(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
  }
  function ol(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
  }
  function pl() {
  }
  function ql(a2, b2, c2, d, e) {
    if (e) {
      if ("function" === typeof d) {
        var f2 = d;
        d = function() {
          var a3 = gl(g);
          f2.call(a3);
        };
      }
      var g = el(b2, d, a2, 0, null, false, false, "", pl);
      a2._reactRootContainer = g;
      a2[uf] = g.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Rk();
      return g;
    }
    for (; e = a2.lastChild; ) a2.removeChild(e);
    if ("function" === typeof d) {
      var h = d;
      d = function() {
        var a3 = gl(k2);
        h.call(a3);
      };
    }
    var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
    a2._reactRootContainer = k2;
    a2[uf] = k2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk(function() {
      fl(b2, k2, c2, d);
    });
    return k2;
  }
  function rl(a2, b2, c2, d, e) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g = f2;
      if ("function" === typeof e) {
        var h = e;
        e = function() {
          var a3 = gl(g);
          h.call(a3);
        };
      }
      fl(b2, g, a2, e);
    } else g = ql(c2, b2, a2, e, d);
    return gl(g);
  }
  Ec = function(a2) {
    switch (a2.tag) {
      case 3:
        var b2 = a2.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b3 = ih(a2, 1);
          if (null !== b3) {
            var c3 = R();
            gi(b3, a2, 1, c3);
          }
        }), il(a2, 1);
    }
  };
  Fc = function(a2) {
    if (13 === a2.tag) {
      var b2 = ih(a2, 134217728);
      if (null !== b2) {
        var c2 = R();
        gi(b2, a2, 134217728, c2);
      }
      il(a2, 134217728);
    }
  };
  Gc = function(a2) {
    if (13 === a2.tag) {
      var b2 = yi(a2), c2 = ih(a2, b2);
      if (null !== c2) {
        var d = R();
        gi(c2, a2, b2, d);
      }
      il(a2, b2);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a2, b2) {
    var c2 = C;
    try {
      return C = a2, b2();
    } finally {
      C = c2;
    }
  };
  yb = function(a2, b2, c2) {
    switch (b2) {
      case "input":
        bb(a2, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d = c2[b2];
            if (d !== a2 && d.form === a2.form) {
              var e = Db(d);
              if (!e) throw Error(p(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = Zb(a2);
    return null === a2 ? null : a2.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a2) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a2, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b2)) throw Error(p(200));
    return cl(a2, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a2, b2) {
    if (!nl(a2)) throw Error(p(299));
    var c2 = false, d = "", e = kl;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
    b2 = bl(a2, 1, false, null, null, c2, false, d, e);
    a2[uf] = b2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    return new ll(b2);
  };
  reactDom_production_min.findDOMNode = function(a2) {
    if (null == a2) return null;
    if (1 === a2.nodeType) return a2;
    var b2 = a2._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a2.render) throw Error(p(188));
      a2 = Object.keys(a2).join(",");
      throw Error(p(268, a2));
    }
    a2 = Zb(b2);
    a2 = null === a2 ? null : a2.stateNode;
    return a2;
  };
  reactDom_production_min.flushSync = function(a2) {
    return Rk(a2);
  };
  reactDom_production_min.hydrate = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p(200));
    return rl(null, a2, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
    if (!nl(a2)) throw Error(p(405));
    var d = null != c2 && c2.hydratedSources || null, e = false, f2 = "", g = kl;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g = c2.onRecoverableError));
    b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e, false, f2, g);
    a2[uf] = b2.current;
    sf(a2);
    if (d) for (a2 = 0; a2 < d.length; a2++) c2 = d[a2], e = c2._getVersion, e = e(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e] : b2.mutableSourceEagerHydrationData.push(
      c2,
      e
    );
    return new ml(b2);
  };
  reactDom_production_min.render = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p(200));
    return rl(null, a2, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a2) {
    if (!ol(a2)) throw Error(p(40));
    return a2._reactRootContainer ? (Rk(function() {
      rl(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d) {
    if (!ol(c2)) throw Error(p(200));
    if (null == a2 || void 0 === a2._reactInternals) throw Error(p(38));
    return rl(a2, b2, c2, false, d);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = reactDom_production_min;
  }
  var reactDomExports = reactDom.exports;
  var createRoot;
  var m = reactDomExports;
  {
    createRoot = m.createRoot;
    m.hydrateRoot;
  }
  var __defProp2 = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, {
        get: all[name],
        enumerable: true,
        configurable: true,
        set: (newValue) => all[name] = () => newValue
      });
  };
  if (typeof reactExports.createContext !== "function") {
    const err = [
      'Remotion requires React.createContext, but it is "undefined".',
      'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
      "",
      "Before:",
      '  import {useCurrentFrame} from "remotion";',
      "",
      "After:",
      '  "use client";',
      '  import {useCurrentFrame} from "remotion";'
    ];
    throw new Error(err.join(`
`));
  }
  var CanUseRemotionHooks = reactExports.createContext(false);
  var CanUseRemotionHooksProvider = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CanUseRemotionHooks.Provider, {
      value: true,
      children
    });
  };
  var CompositionRenderErrorContext = reactExports.createContext({
    setError: () => {
    },
    clearError: () => {
    }
  });
  var getHot = () => {
    try {
      if (typeof __webpack_module__ === "undefined") {
        return null;
      }
      return __webpack_module__.hot ?? null;
    } catch {
      return null;
    }
  };
  class CompositionErrorBoundary extends React14.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", { hasError: false });
      __publicField(this, "hmrStatusHandler", null);
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch(error2) {
      this.props.onError(error2);
      this.subscribeToHmrReset();
    }
    componentDidMount() {
      if (!this.state.hasError) {
        this.props.onClear();
      }
    }
    componentDidUpdate(_prevProps, prevState) {
      if (prevState.hasError && !this.state.hasError) {
        this.props.onClear();
      }
    }
    componentWillUnmount() {
      this.unsubscribeFromHmrReset();
    }
    subscribeToHmrReset() {
      if (this.hmrStatusHandler) {
        return;
      }
      const hot = getHot();
      if (!hot) {
        return;
      }
      const handler = (status) => {
        if (status !== "idle") {
          return;
        }
        this.unsubscribeFromHmrReset();
        this.setState({ hasError: false });
      };
      this.hmrStatusHandler = handler;
      hot.addStatusHandler(handler);
    }
    unsubscribeFromHmrReset() {
      const handler = this.hmrStatusHandler;
      if (!handler) {
        return;
      }
      this.hmrStatusHandler = null;
      const hot = getHot();
      if (!hot) {
        return;
      }
      hot.removeStatusHandler(handler);
    }
    render() {
      if (this.state.hasError) {
        return null;
      }
      return this.props.children;
    }
  }
  var getAssetPreviewCompositionId = (asset) => `asset:${asset}`;
  var CompositionManager = reactExports.createContext({
    compositions: [],
    folders: [],
    currentCompositionMetadata: null,
    currentAssetMetadata: null,
    canvasContent: null
  });
  var CompositionSetters = reactExports.createContext({
    registerComposition: () => {
      return;
    },
    unregisterComposition: () => {
      return;
    },
    registerFolder: () => {
      return;
    },
    unregisterFolder: () => {
      return;
    },
    setCanvasContent: () => {
      return;
    },
    setCurrentAssetMetadata: () => {
      return;
    },
    onlyRenderComposition: null
  });
  var componentsToAddStacksTo = [];
  var sequenceComponent = null;
  var stacksByControls = /* @__PURE__ */ new WeakMap();
  var componentIdentityResolver = null;
  var REMOTION_INTERNAL_STACK_PROP = "_remotionInternalStack";
  var getComponentsToAddStacksTo = () => componentsToAddStacksTo;
  var addSequenceStackTraces = (component) => {
    componentsToAddStacksTo.push(component);
  };
  var setSequenceComponent = (component) => {
    sequenceComponent = component;
  };
  var getSequenceComponent = () => sequenceComponent;
  var setComponentIdentityResolver = (resolver) => {
    componentIdentityResolver = resolver;
  };
  var resolveComponentIdentity = (component) => {
    return (componentIdentityResolver == null ? void 0 : componentIdentityResolver(component)) ?? component;
  };
  var setStackForControls = (controls, stack) => {
    if (stack === void 0) {
      stacksByControls.delete(controls);
      return;
    }
    stacksByControls.set(controls, stack);
  };
  var getStackForControls = (controls) => {
    return stacksByControls.get(controls) ?? null;
  };
  var getSingleChildComponent = (children) => {
    const mountedChildren = React14.Children.toArray(children);
    if (mountedChildren.length !== 1) {
      return null;
    }
    const child = mountedChildren[0];
    if (!React14.isValidElement(child)) {
      return null;
    }
    if (typeof child.type !== "function" && typeof child.type !== "object") {
      return null;
    }
    return resolveComponentIdentity(child.type);
  };
  var SEQUENCE_ORDER_MARKER = Symbol.for("remotion.sequence-order-marker");
  var SEQUENCE_MANAGER_ORDER_MARKER = Symbol.for("remotion.sequence-manager-order-marker");
  var COMPOSITION_ORDER_MARKER = Symbol.for("remotion.composition-order-marker");
  var FOLDER_ORDER_MARKER = Symbol.for("remotion.folder-order-marker");
  var COMPOSITION_MANAGER_ORDER_MARKER = Symbol.for("remotion.composition-manager-order-marker");
  var COMMIT_ORDER_EVENT = "remotion:commit-order";
  var getCompositionAndFolderOrderKey = (item) => `${item.type}:${item.id}`;
  var getFolderOrderId = ({
    name,
    parent
  }) => [parent, name].filter(Boolean).join("/");
  var SequenceOrderMarker = ({ children }) => children;
  Object.defineProperty(SequenceOrderMarker, SEQUENCE_ORDER_MARKER, {
    value: true
  });
  var SequenceManagerOrderMarker = ({ children }) => children;
  Object.defineProperty(SequenceManagerOrderMarker, SEQUENCE_MANAGER_ORDER_MARKER, {
    value: true
  });
  var CompositionOrderMarker = ({ children }) => children;
  Object.defineProperty(CompositionOrderMarker, COMPOSITION_ORDER_MARKER, {
    value: true
  });
  var FolderOrderMarker = ({ children }) => children;
  Object.defineProperty(FolderOrderMarker, FOLDER_ORDER_MARKER, {
    value: true
  });
  var CompositionManagerOrderMarker = ({ children }) => children;
  Object.defineProperty(CompositionManagerOrderMarker, COMPOSITION_MANAGER_ORDER_MARKER, { value: true });
  var CommitOrderInternals = {
    compositionManagerMarker: COMPOSITION_MANAGER_ORDER_MARKER,
    compositionMarker: COMPOSITION_ORDER_MARKER,
    folderMarker: FOLDER_ORDER_MARKER,
    sequenceManagerMarker: SEQUENCE_MANAGER_ORDER_MARKER,
    sequenceMarker: SEQUENCE_ORDER_MARKER,
    eventName: COMMIT_ORDER_EVENT
  };
  function truthy(value) {
    return Boolean(value);
  }
  function getNodeEnvString() {
    return ["NOD", "E_EN", "V"].join("");
  }
  var getEnvString = () => {
    return ["e", "nv"].join("");
  };
  var getRemotionEnvironment = () => {
    const isPlayer = typeof window !== "undefined" && window.remotion_isPlayer;
    const isRendering = typeof window !== "undefined" && typeof window.process !== "undefined" && typeof window.process.env !== "undefined" && (window.process[getEnvString()][getNodeEnvString()] === "test" || window.process[getEnvString()][getNodeEnvString()] === "production" && typeof window !== "undefined" && typeof window.remotion_puppeteerTimeout !== "undefined");
    const isStudio = typeof window !== "undefined" && window.remotion_isStudio;
    const isReadOnlyStudio = typeof window !== "undefined" && window.remotion_isReadOnlyStudio;
    return {
      isStudio,
      isRendering,
      isPlayer,
      isReadOnlyStudio,
      isClientSideRendering: false
    };
  };
  var RemotionEnvironmentContext = React14.createContext(null);
  var useRemotionEnvironment = () => {
    const context = reactExports.useContext(RemotionEnvironmentContext);
    const [env] = reactExports.useState(() => getRemotionEnvironment());
    return context ?? env;
  };
  var getRegex = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
  var isFolderNameValid = (name) => name.match(getRegex());
  var validateFolderName = (name) => {
    if (name === void 0 || name === null) {
      throw new TypeError("You must pass a name to a <Folder />.");
    }
    if (typeof name !== "string") {
      throw new TypeError(`The "name" you pass into <Folder /> must be a string. Got: ${typeof name}`);
    }
    if (!isFolderNameValid(name)) {
      throw new Error(`Folder name can only contain a-z, A-Z, 0-9 and -. You passed ${name}`);
    }
  };
  var invalidFolderNameErrorMessage = `Folder name must match ${String(getRegex())}`;
  var FolderContext = reactExports.createContext({
    folderName: null,
    parentName: null
  });
  var Folder = (props) => {
    const { name, children } = props;
    const parent = reactExports.useContext(FolderContext);
    const { registerFolder, unregisterFolder } = reactExports.useContext(CompositionSetters);
    const environment = useRemotionEnvironment();
    const stack = props._remotionInternalStack ?? null;
    validateFolderName(name);
    const parentNameArr = [parent.parentName, parent.folderName].filter(truthy);
    const parentName = parentNameArr.length === 0 ? null : parentNameArr.join("/");
    const value = reactExports.useMemo(() => {
      return {
        folderName: name,
        parentName
      };
    }, [name, parentName]);
    reactExports.useEffect(() => {
      registerFolder(name, parentName, stack);
      return () => {
        unregisterFolder(name, parentName);
      };
    }, [
      name,
      parent.folderName,
      parentName,
      registerFolder,
      unregisterFolder,
      stack
    ]);
    const folder = /* @__PURE__ */ jsxRuntimeExports.jsx(FolderContext.Provider, {
      value,
      children
    });
    return environment.isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOrderMarker, {
      folderId: getFolderOrderId({ name, parent: parentName }),
      children: folder
    }) : folder;
  };
  var DATE_TOKEN = "remotion-date:";
  var FILE_TOKEN = "remotion-file:";
  var serializeJSONWithSpecialTypes = ({
    data,
    indent,
    staticBase
  }) => {
    let customDateUsed = false;
    let customFileUsed = false;
    let mapUsed = false;
    let setUsed = false;
    try {
      const serializedString = JSON.stringify(data, function(key, value) {
        const item = this[key];
        if (item instanceof Date) {
          customDateUsed = true;
          return `${DATE_TOKEN}${item.toISOString()}`;
        }
        if (item instanceof Map) {
          mapUsed = true;
          return value;
        }
        if (item instanceof Set) {
          setUsed = true;
          return value;
        }
        if (typeof item === "string" && staticBase !== null && staticBase !== "" && item.startsWith(staticBase)) {
          customFileUsed = true;
          return `${FILE_TOKEN}${item.replace(staticBase + "/", "")}`;
        }
        return value;
      }, indent);
      return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
    } catch (err) {
      throw new Error("Could not serialize the passed input props to JSON: " + err.message);
    }
  };
  var resolveFileTokenToUrl = (value) => {
    var _a;
    const encodedName = value.replace(FILE_TOKEN, "");
    let name = encodedName;
    try {
      name = encodedName.split("/").map(decodeURIComponent).join("/");
    } catch {
    }
    const matchingStaticFile = (_a = window.remotion_staticFiles) == null ? void 0 : _a.find((file) => file.name === name);
    if (matchingStaticFile) {
      return matchingStaticFile.src;
    }
    return `${window.remotion_staticBase}/${encodedName}`;
  };
  var deserializeJSONWithSpecialTypes = (data) => {
    return JSON.parse(data, (_, value) => {
      if (typeof value === "string" && value.startsWith(DATE_TOKEN)) {
        return new Date(value.replace(DATE_TOKEN, ""));
      }
      if (typeof value === "string" && value.startsWith(FILE_TOKEN)) {
        return resolveFileTokenToUrl(value);
      }
      return value;
    });
  };
  var serializeThenDeserialize = (props) => {
    return deserializeJSONWithSpecialTypes(serializeJSONWithSpecialTypes({
      data: props,
      indent: 2,
      staticBase: window.remotion_staticBase
    }).serializedString);
  };
  var serializeThenDeserializeInStudio = (props) => {
    if (getRemotionEnvironment().isStudio) {
      return serializeThenDeserialize(props);
    }
    return props;
  };
  var IsPlayerContext = reactExports.createContext(false);
  var IsPlayerContextProvider = ({
    children
  }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(IsPlayerContext.Provider, {
      value: true,
      children
    });
  };
  var useIsPlayer = () => {
    return reactExports.useContext(IsPlayerContext);
  };
  var hasTailwindClassName = ({
    className: className2,
    classPrefix,
    type
  }) => {
    if (!className2) {
      return false;
    }
    if (type === "exact") {
      const split = className2.split(" ");
      return classPrefix.some((token) => {
        return split.some((part) => {
          return part.trim() === token || part.trim().endsWith(`:${token}`) || part.trim().endsWith(`!${token}`);
        });
      });
    }
    return classPrefix.some((prefix) => {
      return className2.startsWith(prefix) || className2.includes(` ${prefix}`) || className2.includes(`!${prefix}`) || className2.includes(`:${prefix}`);
    });
  };
  var AbsoluteFillElementRefForwarding = (props, ref) => {
    const { style: style2, ...other } = props;
    const actualStyle = reactExports.useMemo(() => {
      return {
        position: "absolute",
        top: hasTailwindClassName({
          className: other.className,
          classPrefix: ["top-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        left: hasTailwindClassName({
          className: other.className,
          classPrefix: ["left-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        right: hasTailwindClassName({
          className: other.className,
          classPrefix: ["right-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        bottom: hasTailwindClassName({
          className: other.className,
          classPrefix: ["bottom-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        width: hasTailwindClassName({
          className: other.className,
          classPrefix: ["w-"],
          type: "prefix"
        }) ? void 0 : "100%",
        height: hasTailwindClassName({
          className: other.className,
          classPrefix: ["h-"],
          type: "prefix"
        }) ? void 0 : "100%",
        display: hasTailwindClassName({
          className: other.className,
          classPrefix: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden"
          ],
          type: "exact"
        }) ? void 0 : "flex",
        flexDirection: hasTailwindClassName({
          className: other.className,
          classPrefix: [
            "flex-row",
            "flex-col",
            "flex-row-reverse",
            "flex-col-reverse"
          ],
          type: "exact"
        }) ? void 0 : "column",
        ...style2
      };
    }, [other.className, style2]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref,
      style: actualStyle,
      ...other
    });
  };
  var AbsoluteFillElement = reactExports.forwardRef(AbsoluteFillElementRefForwarding);
  var _portalNode = null;
  var portalNodeCurrentScale = 1;
  var portalNodeCurrentScaleListeners = [];
  var getPortalNodeCurrentScale = () => portalNodeCurrentScale;
  var subscribeToPortalNodeCurrentScale = (listener) => {
    portalNodeCurrentScaleListeners.push(listener);
    return () => {
      portalNodeCurrentScaleListeners = portalNodeCurrentScaleListeners.filter((currentListener) => currentListener !== listener);
    };
  };
  var setPortalNodeCurrentScale = (scale) => {
    if (portalNodeCurrentScale === scale) {
      return;
    }
    portalNodeCurrentScale = scale;
    for (const listener of portalNodeCurrentScaleListeners) {
      listener();
    }
  };
  var portalNode = () => {
    if (!_portalNode) {
      if (typeof document === "undefined") {
        throw new Error("Tried to call an API that only works in the browser from outside the browser");
      }
      _portalNode = document.createElement("div");
      _portalNode.style.position = "absolute";
      _portalNode.style.top = "0px";
      _portalNode.style.left = "0px";
      _portalNode.style.right = "0px";
      _portalNode.style.bottom = "0px";
      _portalNode.style.width = "100%";
      _portalNode.style.height = "100%";
      _portalNode.style.display = "flex";
      _portalNode.style.flexDirection = "column";
      const containerNode = document.createElement("div");
      containerNode.style.position = "fixed";
      containerNode.style.top = "-999999px";
      containerNode.appendChild(_portalNode);
      document.body.appendChild(containerNode);
    }
    return _portalNode;
  };
  var SequenceContext = reactExports.createContext(null);
  var getKey = () => {
    return `remotion_inputPropsOverride` + window.location.origin;
  };
  var getInputPropsOverride = () => {
    if (typeof localStorage === "undefined")
      return null;
    const override = localStorage.getItem(getKey());
    if (!override)
      return null;
    return JSON.parse(override);
  };
  var setInputPropsOverride = (override) => {
    if (typeof localStorage === "undefined")
      return;
    if (override === null) {
      localStorage.removeItem(getKey());
      return;
    }
    localStorage.setItem(getKey(), JSON.stringify(override));
  };
  var didWarnSSRImport = false;
  var warnOnceSSRImport = () => {
    if (didWarnSSRImport) {
      return;
    }
    didWarnSSRImport = true;
    console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object.");
    console.warn("To hide this warning, don't call this function on the server:");
    console.warn("  typeof window === 'undefined' ? {} : getInputProps()");
  };
  var getInputProps = () => {
    if (typeof window === "undefined") {
      warnOnceSSRImport();
      return {};
    }
    if (getRemotionEnvironment().isPlayer) {
      throw new Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");
    }
    const override = getInputPropsOverride();
    if (override) {
      return override;
    }
    if (typeof window === "undefined" || typeof window.remotion_inputProps === "undefined") {
      throw new Error("Cannot call `getInputProps()` - window.remotion_inputProps is not set. This API is only available if you are in the Studio, or while you are rendering server-side.");
    }
    const param = window.remotion_inputProps;
    if (!param) {
      return {};
    }
    const parsed = deserializeJSONWithSpecialTypes(param);
    return parsed;
  };
  var EditorPropsContext = reactExports.createContext({
    props: {},
    updateProps: () => {
      throw new Error("Not implemented");
    }
  });
  var timeValueRef = React14.createRef();
  var EditorPropsProvider = ({ children }) => {
    const [props, setProps] = React14.useState({});
    const updateProps = reactExports.useCallback(({
      defaultProps,
      id: id2,
      newProps
    }) => {
      setProps((prev) => {
        return {
          ...prev,
          [id2]: typeof newProps === "function" ? newProps(prev[id2] ?? defaultProps) : newProps
        };
      });
    }, []);
    const ctx = reactExports.useMemo(() => {
      return { props, updateProps };
    }, [props, updateProps]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EditorPropsContext.Provider, {
      value: ctx,
      children
    });
  };
  function validateDimension$2(amount, nameOfProp, location) {
    if (typeof amount !== "number") {
      throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
    }
    if (isNaN(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
    }
    if (!Number.isFinite(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
    }
    if (amount % 1 !== 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
    }
    if (amount <= 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
    }
  }
  function validateDurationInFrames$2(durationInFrames, options) {
    const { allowFloats, component } = options;
    if (typeof durationInFrames === "undefined") {
      throw new Error(`The "durationInFrames" prop ${component} is missing.`);
    }
    if (typeof durationInFrames !== "number") {
      throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
    }
    if (!allowFloats && durationInFrames % 1 !== 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
    }
    if (!Number.isFinite(durationInFrames)) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
    }
  }
  function validateFps$2(fps, location, isGif) {
    if (typeof fps !== "number") {
      throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
    }
    if (!Number.isFinite(fps)) {
      throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
    }
    if (isNaN(fps)) {
      throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
    }
    if (fps <= 0) {
      throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
    }
  }
  var ResolveCompositionContext = reactExports.createContext(null);
  var resolveCompositionsRef = reactExports.createRef();
  var needsResolution = (composition) => {
    return Boolean(composition.calculateMetadata);
  };
  var useResolvedVideoConfig = (preferredCompositionId) => {
    const context = reactExports.useContext(ResolveCompositionContext);
    const { props: allEditorProps } = reactExports.useContext(EditorPropsContext);
    const {
      compositions,
      canvasContent,
      currentCompositionMetadata,
      currentAssetMetadata
    } = reactExports.useContext(CompositionManager);
    const currentComposition = (canvasContent == null ? void 0 : canvasContent.type) === "composition" ? canvasContent.compositionId : null;
    const compositionId = preferredCompositionId ?? currentComposition;
    const composition = compositions.find((c2) => c2.id === compositionId);
    const selectedEditorProps = reactExports.useMemo(() => {
      return composition ? allEditorProps[composition.id] ?? {} : {};
    }, [allEditorProps, composition]);
    const env = useRemotionEnvironment();
    return reactExports.useMemo(() => {
      if (preferredCompositionId === null && (canvasContent == null ? void 0 : canvasContent.type) === "asset" && (currentAssetMetadata == null ? void 0 : currentAssetMetadata.asset) === canvasContent.asset) {
        return {
          type: "success",
          metadataSource: null,
          result: {
            ...currentAssetMetadata,
            id: getAssetPreviewCompositionId(canvasContent.asset),
            defaultProps: {}
          }
        };
      }
      if (!composition) {
        return null;
      }
      if (currentCompositionMetadata) {
        return {
          type: "success",
          metadataSource: null,
          result: {
            ...currentCompositionMetadata,
            id: composition.id,
            defaultProps: composition.defaultProps ?? {}
          }
        };
      }
      if (!needsResolution(composition)) {
        validateDurationInFrames$2(composition.durationInFrames, {
          allowFloats: false,
          component: `in <Composition id="${composition.id}">`
        });
        validateFps$2(composition.fps, `in <Composition id="${composition.id}">`);
        validateDimension$2(composition.width, "width", `in <Composition id="${composition.id}">`);
        validateDimension$2(composition.height, "height", `in <Composition id="${composition.id}">`);
        return {
          type: "success",
          metadataSource: null,
          result: {
            width: composition.width,
            height: composition.height,
            fps: composition.fps,
            id: composition.id,
            durationInFrames: composition.durationInFrames,
            defaultProps: composition.defaultProps ?? {},
            props: {
              ...composition.defaultProps ?? {},
              ...selectedEditorProps ?? {},
              ...typeof window === "undefined" || env.isPlayer || !window.remotion_inputProps ? {} : getInputProps() ?? {}
            },
            defaultCodec: null,
            defaultOutName: null,
            defaultVideoImageFormat: null,
            defaultPixelFormat: null,
            defaultProResProfile: null,
            defaultSampleRate: null
          }
        };
      }
      if (!context) {
        return null;
      }
      if (!context[composition.id]) {
        return null;
      }
      return context[composition.id];
    }, [
      composition,
      canvasContent,
      context,
      currentAssetMetadata,
      currentCompositionMetadata,
      preferredCompositionId,
      selectedEditorProps,
      env.isPlayer
    ]);
  };
  var AssetPreviewComposition = () => null;
  var useVideo = () => {
    const {
      canvasContent,
      compositions,
      currentCompositionMetadata,
      currentAssetMetadata
    } = reactExports.useContext(CompositionManager);
    const selected = compositions.find((c2) => {
      return (canvasContent == null ? void 0 : canvasContent.type) === "composition" && c2.id === canvasContent.compositionId;
    });
    const resolved = useResolvedVideoConfig((selected == null ? void 0 : selected.id) ?? null);
    return reactExports.useMemo(() => {
      if ((canvasContent == null ? void 0 : canvasContent.type) === "asset" && (currentAssetMetadata == null ? void 0 : currentAssetMetadata.asset) === canvasContent.asset) {
        return {
          ...currentAssetMetadata,
          id: getAssetPreviewCompositionId(canvasContent.asset),
          defaultProps: {},
          component: AssetPreviewComposition
        };
      }
      if (!resolved) {
        return null;
      }
      if (resolved.type === "error") {
        return null;
      }
      if (resolved.type === "loading") {
        return null;
      }
      if (!selected) {
        return null;
      }
      return {
        ...resolved.result,
        defaultProps: selected.defaultProps ?? {},
        id: selected.id,
        ...currentCompositionMetadata ?? {},
        component: selected.component
      };
    }, [
      canvasContent,
      currentAssetMetadata,
      currentCompositionMetadata,
      resolved,
      selected
    ]);
  };
  var useUnsafeVideoConfig = () => {
    const context = reactExports.useContext(SequenceContext);
    const ctxWidth = (context == null ? void 0 : context.width) ?? null;
    const ctxHeight = (context == null ? void 0 : context.height) ?? null;
    const ctxDuration = (context == null ? void 0 : context.durationInFrames) ?? null;
    const video = useVideo();
    return reactExports.useMemo(() => {
      if (!video) {
        return null;
      }
      const {
        id: id2,
        durationInFrames,
        fps,
        height,
        width,
        defaultProps,
        props,
        defaultCodec,
        defaultOutName,
        defaultVideoImageFormat,
        defaultPixelFormat,
        defaultProResProfile,
        defaultSampleRate
      } = video;
      return {
        id: id2,
        width: ctxWidth ?? width,
        height: ctxHeight ?? height,
        fps,
        durationInFrames: ctxDuration ?? durationInFrames,
        defaultProps,
        props,
        defaultCodec,
        defaultOutName,
        defaultVideoImageFormat,
        defaultPixelFormat,
        defaultProResProfile,
        defaultSampleRate
      };
    }, [ctxDuration, ctxHeight, ctxWidth, video]);
  };
  var CurrentScaleContext = React14.createContext(null);
  var PreviewSizeContext = reactExports.createContext({
    setSize: () => {
      return;
    },
    size: { size: "auto", translation: { x: 0, y: 0 } }
  });
  var calculateScale = ({
    canvasSize,
    compositionHeight,
    compositionWidth,
    previewSize
  }) => {
    const heightRatio = canvasSize.height / compositionHeight;
    const widthRatio = canvasSize.width / compositionWidth;
    const ratio = Math.min(heightRatio, widthRatio);
    if (previewSize === "auto") {
      if (ratio === 0) {
        return 1;
      }
      return ratio;
    }
    return Number(previewSize);
  };
  var useCurrentScale = (options) => {
    const hasContext = React14.useContext(CurrentScaleContext);
    const zoomContext = React14.useContext(PreviewSizeContext);
    const config = useUnsafeVideoConfig();
    useRemotionEnvironment();
    const [portalScale, setPortalScale] = React14.useState(getPortalNodeCurrentScale);
    React14.useEffect(() => {
      const update = () => setPortalScale(getPortalNodeCurrentScale());
      update();
      return subscribeToPortalNodeCurrentScale(update);
    }, []);
    if (hasContext === null || config === null || zoomContext === null) {
      {
        return 1;
      }
    }
    if (hasContext.type === "scale") {
      return hasContext.scale;
    }
    return portalScale;
  };
  var rotate = {
    transform: `rotate(90deg)`
  };
  var ICON_SIZE$1 = 40;
  var LABEL_SIZE = 14;
  var label$1 = {
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "sans-serif"
  };
  var container = {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2428"
  };
  var content = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    animation: "anim 2s",
    animationFillMode: "forwards"
  };
  var Loading = () => {
    const scale = useCurrentScale();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(AbsoluteFillElement, {
      style: container,
      id: "remotion-comp-loading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", {
          type: "text/css",
          children: `
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
			`
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          id: "remotion-comp-loading-content",
          style: content,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
              width: ICON_SIZE$1 / scale,
              height: ICON_SIZE$1 / scale,
              viewBox: "-100 -100 400 400",
              style: rotate,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
                fill: "#555",
                stroke: "#555",
                strokeWidth: "100",
                strokeLinejoin: "round",
                d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
              })
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
              style: { ...label$1, fontSize: LABEL_SIZE / scale },
              children: [
                "Resolving ",
                "<Suspense>",
                "..."
              ]
            })
          ]
        })
      ]
    });
  };
  var getErrorStackWithMessage = (error2) => {
    const stack = error2.stack ?? "";
    return stack.startsWith("Error:") ? stack : `${error2.message}
${stack}`;
  };
  var isErrorLike = (err) => {
    if (err instanceof Error) {
      return true;
    }
    if (err === null) {
      return false;
    }
    if (typeof err !== "object") {
      return false;
    }
    if (!("stack" in err)) {
      return false;
    }
    if (typeof err.stack !== "string") {
      return false;
    }
    if (!("message" in err)) {
      return false;
    }
    if (typeof err.message !== "string") {
      return false;
    }
    return true;
  };
  function cancelRenderInternal(scope, err) {
    let error2;
    if (isErrorLike(err)) {
      error2 = err;
      if (!error2.stack) {
        error2.stack = new Error(error2.message).stack;
      }
    } else if (typeof err === "string") {
      error2 = Error(err);
    } else {
      error2 = Error("Rendering was cancelled");
    }
    if (scope) {
      scope.remotion_cancelledError = getErrorStackWithMessage(error2);
    }
    throw error2;
  }
  function cancelRender(err) {
    return cancelRenderInternal(typeof window !== "undefined" ? window : void 0, err);
  }
  var DELAY_RENDER_CALLSTACK_TOKEN = "The delayRender was called:";
  var DELAY_RENDER_RETRIES_LEFT = "Retries left: ";
  var DELAY_RENDER_RETRY_TOKEN = "- Rendering the frame will be retried.";
  var DELAY_RENDER_CLEAR_TOKEN = "handle was cleared after";
  var logLevels = ["trace", "verbose", "info", "warn", "error"];
  var getNumberForLogLevel = (level) => {
    return logLevels.indexOf(level);
  };
  var isEqualOrBelowLogLevel = (currentLevel, level) => {
    return getNumberForLogLevel(currentLevel) <= getNumberForLogLevel(level);
  };
  var transformArgs = ({
    args,
    logLevel,
    tag
  }) => {
    const arr = [...args];
    if (getRemotionEnvironment().isRendering && !getRemotionEnvironment().isClientSideRendering) {
      arr.unshift(Symbol.for(`__remotion_level_${logLevel}`));
    }
    if (tag && getRemotionEnvironment().isRendering && !getRemotionEnvironment().isClientSideRendering) {
      arr.unshift(Symbol.for(`__remotion_tag_${tag}`));
    }
    return arr;
  };
  var verbose = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "verbose")) {
      return console.debug(...transformArgs({ args, logLevel: "verbose", tag: options.tag }));
    }
  };
  var trace = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "trace")) {
      return console.debug(...transformArgs({ args, logLevel: "trace", tag: options.tag }));
    }
  };
  var info = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "info")) {
      return console.log(...transformArgs({ args, logLevel: "info", tag: options.tag }));
    }
  };
  var warn = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "warn")) {
      return console.warn(...transformArgs({ args, logLevel: "warn", tag: options.tag }));
    }
  };
  var error = (options, ...args) => {
    return console.error(...transformArgs({ args, logLevel: "error", tag: options.tag }));
  };
  var Log = {
    trace,
    verbose,
    info,
    warn,
    error
  };
  if (typeof window !== "undefined") {
    window.remotion_renderReady = false;
    if (!window.remotion_delayRenderTimeouts) {
      window.remotion_delayRenderTimeouts = {};
    }
    window.remotion_delayRenderHandles = [];
  }
  var defaultTimeout = 3e4;
  var delayRenderInternal = ({
    scope,
    environment,
    label: label2,
    options
  }) => {
    var _a;
    if (typeof label2 !== "string" && label2 !== null) {
      throw new Error("The label parameter of delayRender() must be a string or undefined, got: " + JSON.stringify(label2));
    }
    const handle = Math.random();
    scope.remotion_delayRenderHandles.push(handle);
    const called = ((_a = Error().stack) == null ? void 0 : _a.replace(/^Error/g, "")) ?? "";
    if (environment.isRendering) {
      const timeoutToUse = ((options == null ? void 0 : options.timeoutInMilliseconds) ?? scope.remotion_puppeteerTimeout ?? defaultTimeout) - 2e3;
      const retriesLeft = ((options == null ? void 0 : options.retries) ?? 0) - (scope.remotion_attempt - 1);
      scope.remotion_delayRenderTimeouts[handle] = {
        label: label2 ?? null,
        startTime: Date.now(),
        timeout: setTimeout(() => {
          const message = [
            `A delayRender()`,
            label2 ? `"${label2}"` : null,
            `was called but not cleared after ${timeoutToUse}ms. See https://remotion.dev/docs/timeout for help.`,
            retriesLeft > 0 ? DELAY_RENDER_RETRIES_LEFT + retriesLeft : null,
            retriesLeft > 0 ? DELAY_RENDER_RETRY_TOKEN : null,
            DELAY_RENDER_CALLSTACK_TOKEN,
            called
          ].filter(truthy).join(" ");
          if (environment.isClientSideRendering) {
            scope.remotion_cancelledError = getErrorStackWithMessage(Error(message));
          } else {
            cancelRenderInternal(scope, Error(message));
          }
        }, timeoutToUse)
      };
    }
    scope.remotion_renderReady = false;
    return handle;
  };
  var continueRenderInternal = ({
    scope,
    handle,
    environment,
    logLevel
  }) => {
    if (typeof handle === "undefined") {
      throw new TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");
    }
    if (typeof handle !== "number") {
      throw new TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: " + JSON.stringify(handle));
    }
    const handleExists = scope.remotion_delayRenderHandles.includes(handle);
    const timeoutEntry = scope.remotion_delayRenderTimeouts[handle];
    if (handleExists && environment.isRendering && timeoutEntry) {
      const { label: label2, startTime, timeout } = timeoutEntry;
      clearTimeout(timeout);
      const message = [
        label2 ? `"${label2}"` : "A handle",
        DELAY_RENDER_CLEAR_TOKEN,
        `${Date.now() - startTime}ms`
      ].filter(truthy).join(" ");
      Log.verbose({ logLevel, tag: "delayRender()" }, message);
      delete scope.remotion_delayRenderTimeouts[handle];
    }
    scope.remotion_delayRenderHandles = scope.remotion_delayRenderHandles.filter((h) => h !== handle);
    if (scope.remotion_delayRenderHandles.length === 0) {
      scope.remotion_renderReady = true;
    }
  };
  var LogLevelContext = reactExports.createContext({
    logLevel: "info",
    mountTime: 0
  });
  var useLogLevel = () => {
    const { logLevel } = reactExports.useContext(LogLevelContext);
    if (logLevel === null) {
      throw new Error("useLogLevel must be used within a LogLevelProvider");
    }
    return logLevel;
  };
  var useMountTime = () => {
    const { mountTime } = reactExports.useContext(LogLevelContext);
    if (mountTime === null) {
      throw new Error("useMountTime must be used within a LogLevelProvider");
    }
    return mountTime;
  };
  var DelayRenderContextType = reactExports.createContext(null);
  var useDelayRender = () => {
    const environment = useRemotionEnvironment();
    const scope = reactExports.useContext(DelayRenderContextType) ?? (typeof window !== "undefined" ? window : void 0);
    const logLevel = useLogLevel();
    const delayRender2 = reactExports.useCallback((label2, options) => {
      if (!scope) {
        return Math.random();
      }
      return delayRenderInternal({
        scope,
        environment,
        label: label2 ?? null,
        options: options ?? {}
      });
    }, [environment, scope]);
    const continueRender2 = reactExports.useCallback((handle) => {
      if (!scope) {
        return;
      }
      continueRenderInternal({
        scope,
        handle,
        environment,
        logLevel
      });
    }, [environment, logLevel, scope]);
    const cancelRender2 = reactExports.useCallback((err) => {
      return cancelRenderInternal(scope ?? (typeof window !== "undefined" ? window : void 0), err);
    }, [scope]);
    return { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 };
  };
  var useLazyComponent = ({
    compProps,
    componentName,
    noSuspense
  }) => {
    const componentRef = reactExports.useRef(null);
    if ("component" in compProps) {
      componentRef.current = compProps.component;
    }
    const lazy = reactExports.useMemo(() => {
      if ("component" in compProps) {
        if (typeof document === "undefined" || noSuspense) {
          return compProps.component;
        }
        if (typeof compProps.component === "undefined") {
          throw new Error(`A value of \`undefined\` was passed to the \`component\` prop. Check the value you are passing to the <${componentName}/> component.`);
        }
        const Wrapper = (props) => {
          const Comp = componentRef.current;
          return React14.createElement(Comp, props);
        };
        return Wrapper;
      }
      if ("lazyComponent" in compProps && typeof compProps.lazyComponent !== "undefined") {
        if (typeof compProps.lazyComponent === "undefined") {
          throw new Error(`A value of \`undefined\` was passed to the \`lazyComponent\` prop. Check the value you are passing to the <${componentName}/> component.`);
        }
        return React14.lazy(compProps.lazyComponent);
      }
      throw new Error("You must pass either 'component' or 'lazyComponent'");
    }, [compProps.lazyComponent]);
    return lazy;
  };
  var getRegex2 = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
  var isCompositionIdValid = (id2) => id2.match(getRegex2());
  var validateCompositionId = (id2) => {
    if (!isCompositionIdValid(id2)) {
      throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${id2}`);
    }
  };
  var invalidCompositionErrorMessage = `Composition ID must match ${String(getRegex2())}`;
  var validateDefaultAndInputProps$2 = (defaultProps, name, compositionId) => {
    if (!defaultProps) {
      return;
    }
    if (typeof defaultProps !== "object") {
      throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
    }
    if (Array.isArray(defaultProps)) {
      throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ""}`);
    }
  };
  var Fallback = () => {
    const { continueRender: continueRender2, delayRender: delayRender2 } = useDelayRender();
    reactExports.useEffect(() => {
      const fallback = delayRender2("Waiting for Root component to unsuspend");
      return () => continueRender2(fallback);
    }, [continueRender2, delayRender2]);
    return null;
  };
  var InnerComposition = ({
    width,
    height,
    fps,
    durationInFrames,
    id: id2,
    defaultProps,
    schema,
    ...compProps
  }) => {
    const compManager = reactExports.useContext(CompositionSetters);
    const { registerComposition, unregisterComposition } = compManager;
    const video = useVideo();
    const lazy = useLazyComponent({
      compProps,
      componentName: "Composition",
      noSuspense: false
    });
    const isPlayer = useIsPlayer();
    const environment = useRemotionEnvironment();
    const canUseComposition = reactExports.useContext(CanUseRemotionHooks);
    if (typeof window !== "undefined") {
      window.remotion_seenCompositionIds = Array.from(/* @__PURE__ */ new Set([...window.remotion_seenCompositionIds ?? [], id2]));
    }
    if (canUseComposition) {
      if (isPlayer) {
        throw new Error("<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help.");
      }
      throw new Error("<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");
    }
    const { folderName, parentName } = reactExports.useContext(FolderContext);
    const stack = compProps._remotionInternalStack ?? null;
    const componentFromProps = "component" in compProps ? resolveComponentIdentity(compProps.component) : null;
    reactExports.useEffect(() => {
      if (!id2) {
        throw new Error("No id for composition passed.");
      }
      validateCompositionId(id2);
      validateDefaultAndInputProps$2(defaultProps, "defaultProps", id2);
      registerComposition({
        durationInFrames: durationInFrames ?? void 0,
        fps: fps ?? void 0,
        height: height ?? void 0,
        width: width ?? void 0,
        id: id2,
        folderName,
        component: lazy,
        defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
        order: null,
        parentFolderName: parentName,
        componentFromProps,
        schema: schema ?? null,
        calculateMetadata: compProps.calculateMetadata ?? null,
        stack
      });
      return () => {
        unregisterComposition(id2);
      };
    }, [
      durationInFrames,
      fps,
      height,
      lazy,
      id2,
      folderName,
      defaultProps,
      width,
      parentName,
      componentFromProps,
      schema,
      compProps.calculateMetadata,
      stack,
      registerComposition,
      unregisterComposition
    ]);
    const resolved = useResolvedVideoConfig(id2);
    const { setError, clearError } = reactExports.useContext(CompositionRenderErrorContext);
    const onError = reactExports.useCallback((error2) => {
      setError(error2);
    }, [setError]);
    const onClear = reactExports.useCallback(() => {
      clearError();
    }, [clearError]);
    if (environment.isStudio && video && video.component === lazy && video.id === id2) {
      const Comp = lazy;
      if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
        return null;
      }
      return reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(CanUseRemotionHooksProvider, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompositionErrorBoundary, {
          onError,
          onClear,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {}),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, {
              ...resolved.result.props ?? {}
            })
          })
        })
      }), portalNode());
    }
    if (environment.isRendering && video && video.component === lazy && video.id === id2) {
      const Comp = lazy;
      if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
        return null;
      }
      return reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(CanUseRemotionHooksProvider, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Fallback, {}),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, {
            ...resolved.result.props ?? {}
          })
        })
      }), portalNode());
    }
    return null;
  };
  var Composition = (props) => {
    const { onlyRenderComposition } = reactExports.useContext(CompositionSetters);
    const environment = useRemotionEnvironment();
    if (onlyRenderComposition && onlyRenderComposition !== props.id) {
      return null;
    }
    const composition = /* @__PURE__ */ jsxRuntimeExports.jsx(InnerComposition, {
      ...props
    });
    return environment.isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(CompositionOrderMarker, {
      compositionId: props.id,
      children: composition
    }) : composition;
  };
  var VERSION = "4.0.524";
  var checkMultipleRemotionVersions = () => {
    if (typeof globalThis === "undefined") {
      return;
    }
    const set = () => {
      globalThis.remotion_imported = VERSION;
      if (typeof window !== "undefined") {
        window.remotion_imported = VERSION;
      }
    };
    const alreadyImported = globalThis.remotion_imported || typeof window !== "undefined" && window.remotion_imported;
    if (alreadyImported) {
      if (alreadyImported === VERSION) {
        return;
      }
      if (typeof alreadyImported === "string" && alreadyImported.includes("webcodecs")) {
        set();
        return;
      }
      throw new TypeError(`🚨 Multiple versions of Remotion detected: ${[
        VERSION,
        typeof alreadyImported === "string" ? alreadyImported : "an older version"
      ].filter(truthy).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`);
    }
    set();
  };
  var exports_timeline_position_state = {};
  __export(exports_timeline_position_state, {
    useTimelineSetFrame: () => useTimelineSetFrame,
    useTimelinePosition: () => useTimelinePosition,
    useTimelineContext: () => useTimelineContext,
    usePlaying: () => usePlaying,
    usePlaybackRate: () => usePlaybackRate,
    useBuffering: () => useBuffering,
    useAbsoluteTimelinePosition: () => useAbsoluteTimelinePosition,
    persistCurrentFrame: () => persistCurrentFrame,
    getInitialFrameState: () => getInitialFrameState,
    getFrameForComposition: () => getFrameForComposition,
    clampFrameToCompositionRange: () => clampFrameToCompositionRange
  });
  var createRuntimeValueStore = (initialSnapshot) => {
    let snapshot = initialSnapshot;
    const listeners2 = /* @__PURE__ */ new Set();
    const store = {
      getSnapshot: () => snapshot,
      subscribe: (listener) => {
        listeners2.add(listener);
        return () => {
          listeners2.delete(listener);
        };
      }
    };
    return {
      store,
      setSnapshot: (newSnapshot) => {
        if (snapshot === newSnapshot) {
          return;
        }
        snapshot = newSnapshot;
        for (const listener of listeners2) {
          listener(snapshot);
        }
      }
    };
  };
  var missingSetTimelineContext = () => {
    throw new Error("SetTimelineContext is missing. This is likely caused by a Remotion version mismatch.");
  };
  var SetTimelineContext = reactExports.createContext({
    setFrame: missingSetTimelineContext,
    setPlaying: missingSetTimelineContext,
    setBuffering: missingSetTimelineContext,
    subscribePlaying: () => () => {
      return;
    },
    subscribeBuffering: () => () => {
      return;
    },
    isPlaying: () => false,
    isBuffering: missingSetTimelineContext,
    frameRef: { current: {} },
    audioAndVideoTags: { current: [] }
  });
  var TimelineContext = reactExports.createContext(null);
  var PlaybackRateContext = reactExports.createContext(null);
  var AbsoluteTimeContext = reactExports.createContext(null);
  var TimelineContextProvider = ({ children, frameState }) => {
    const playingStore = reactExports.useMemo(() => createRuntimeValueStore({ playing: false }), []);
    const bufferingStore = reactExports.useMemo(() => createRuntimeValueStore({ buffering: false }), []);
    const [playbackRate, setPlaybackRate] = reactExports.useState(1);
    const audioAndVideoTags = reactExports.useRef([]);
    const [_frame, setFrame] = reactExports.useState(() => getInitialFrameState());
    const frame = frameState ?? _frame;
    const frameRef = reactExports.useRef(frame);
    frameRef.current = frame;
    const readIsPlaying = reactExports.useCallback(() => playingStore.store.getSnapshot().playing, [playingStore]);
    const readIsBuffering = reactExports.useCallback(() => bufferingStore.store.getSnapshot().buffering, [bufferingStore]);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    if (typeof window !== "undefined") {
      reactExports.useLayoutEffect(() => {
        window.remotion_setFrame = (f2, composition, attempt) => {
          window.remotion_attempt = attempt;
          const id2 = delayRender2(`Setting the current frame to ${f2}`);
          let asyncUpdate = true;
          setFrame((s) => {
            const currentFrame = s[composition] ?? window.remotion_initialFrame;
            if (currentFrame === f2) {
              asyncUpdate = false;
              return s;
            }
            return {
              ...s,
              [composition]: f2
            };
          });
          if (asyncUpdate) {
            requestAnimationFrame(() => continueRender2(id2));
          } else {
            continueRender2(id2);
          }
        };
        window.remotion_isPlayer = false;
      }, [continueRender2, delayRender2]);
    }
    const timelineContextValue = reactExports.useMemo(() => {
      return {
        frame,
        isPlaying: readIsPlaying,
        audioAndVideoTags
      };
    }, [frame, readIsPlaying]);
    const playbackRateContextValue = reactExports.useMemo(() => {
      return {
        playbackRate,
        setPlaybackRate
      };
    }, [playbackRate]);
    const setTimelineContextValue = reactExports.useMemo(() => {
      return {
        setFrame,
        setPlaying: (updater) => {
          const current = playingStore.store.getSnapshot().playing;
          const next = typeof updater === "function" ? updater(current) : updater;
          if (current !== next) {
            playingStore.setSnapshot({ playing: next });
          }
        },
        setBuffering: (buffering) => {
          if (readIsBuffering() !== buffering) {
            bufferingStore.setSnapshot({ buffering });
          }
        },
        subscribePlaying: playingStore.store.subscribe,
        subscribeBuffering: bufferingStore.store.subscribe,
        isPlaying: readIsPlaying,
        isBuffering: readIsBuffering,
        frameRef,
        audioAndVideoTags
      };
    }, [bufferingStore, playingStore, readIsBuffering, readIsPlaying]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AbsoluteTimeContext.Provider, {
      value: timelineContextValue,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlaybackRateContext.Provider, {
        value: playbackRateContextValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContext.Provider, {
          value: timelineContextValue,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SetTimelineContext.Provider, {
            value: setTimelineContextValue,
            children
          })
        })
      })
    });
  };
  var objectIs = typeof Object.is === "function" ? Object.is : (first, second) => first === second && (first !== 0 || 1 / first === 1 / second) || Number.isNaN(first) && Number.isNaN(second);
  var checkIfSnapshotChanged = (instance) => {
    try {
      return !objectIs(instance.value, instance.getSnapshot());
    } catch {
      return true;
    }
  };
  var useSyncExternalStoreShimClient = (subscribe, getSnapshot) => {
    const value = getSnapshot();
    const [{ instance }, forceUpdate] = reactExports.useState({
      instance: { value, getSnapshot }
    });
    reactExports.useLayoutEffect(() => {
      instance.value = value;
      instance.getSnapshot = getSnapshot;
      if (checkIfSnapshotChanged(instance)) {
        forceUpdate({ instance });
      }
    }, [getSnapshot, instance, subscribe, value]);
    reactExports.useEffect(() => {
      if (checkIfSnapshotChanged(instance)) {
        forceUpdate({ instance });
      }
      return subscribe(() => {
        if (checkIfSnapshotChanged(instance)) {
          forceUpdate({ instance });
        }
      });
    }, [instance, subscribe]);
    reactExports.useDebugValue(value);
    return value;
  };
  var useSyncExternalStoreShimServer = (_subscribe, getSnapshot) => getSnapshot();
  var shim = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? useSyncExternalStoreShimServer : useSyncExternalStoreShimClient;
  var useSyncExternalStore2 = reactExports.useSyncExternalStore ?? shim;
  var usePlaying = () => {
    const { isPlaying } = useTimelineContext();
    const { subscribePlaying } = reactExports.useContext(SetTimelineContext);
    return useSyncExternalStore2(subscribePlaying, isPlaying, isPlaying);
  };
  var useBuffering = () => {
    const { isBuffering, subscribeBuffering } = reactExports.useContext(SetTimelineContext);
    return useSyncExternalStore2(subscribeBuffering, isBuffering, isBuffering);
  };
  var makeKey = () => {
    return `remotion.time-all`;
  };
  var persistCurrentFrame = (time) => {
    localStorage.setItem(makeKey(), JSON.stringify(time));
  };
  var getInitialFrameState = () => {
    const item = localStorage.getItem(makeKey()) ?? "{}";
    const obj = JSON.parse(item);
    return obj;
  };
  var getFrameForComposition = (composition) => {
    const item = localStorage.getItem(makeKey()) ?? "{}";
    const obj = JSON.parse(item);
    if (obj[composition] !== void 0) {
      return Number(obj[composition]);
    }
    if (typeof window === "undefined") {
      return 0;
    }
    return window.remotion_initialFrame ?? 0;
  };
  var clampFrameToCompositionRange = (frame, durationInFrames) => {
    return Math.max(0, Math.min(Math.max(0, durationInFrames - 1), frame));
  };
  var useTimelinePositionFromContext = (state) => {
    const videoConfig = useVideo();
    const env = useRemotionEnvironment();
    if (!videoConfig) {
      return typeof window === "undefined" ? 0 : window.remotion_initialFrame ?? 0;
    }
    const unclamped = state.frame[videoConfig.id] ?? (env.isPlayer ? 0 : getFrameForComposition(videoConfig.id));
    return clampFrameToCompositionRange(unclamped, videoConfig.durationInFrames);
  };
  var useTimelineContext = () => {
    const state = reactExports.useContext(TimelineContext);
    if (state === null) {
      throw new Error("TimelineContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
    }
    return state;
  };
  var usePlaybackRate = () => {
    const state = reactExports.useContext(PlaybackRateContext);
    if (state === null) {
      throw new Error("PlaybackRateContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
    }
    return state;
  };
  var useTimelinePosition = () => {
    const state = useTimelineContext();
    return useTimelinePositionFromContext(state);
  };
  var useAbsoluteTimelinePosition = () => {
    const state = reactExports.useContext(AbsoluteTimeContext);
    if (state === null) {
      throw new Error("AbsoluteTimeContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
    }
    return useTimelinePositionFromContext(state);
  };
  var useTimelineSetFrame = () => {
    const { setFrame } = reactExports.useContext(SetTimelineContext);
    return setFrame;
  };
  var useCurrentFrame = () => {
    const canUseRemotionHooks = reactExports.useContext(CanUseRemotionHooks);
    const env = useRemotionEnvironment();
    if (!canUseRemotionHooks) {
      if (env.isPlayer) {
        throw new Error(`useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples`);
      }
      throw new Error(`useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions`);
    }
    const frame = useTimelinePosition();
    const context = reactExports.useContext(SequenceContext);
    const contextOffset = context ? context.cumulatedFrom + context.relativeFrom : 0;
    return frame - contextOffset;
  };
  var useVideoConfig = () => {
    const videoConfig = useUnsafeVideoConfig();
    const context = reactExports.useContext(CanUseRemotionHooks);
    const isPlayer = useIsPlayer();
    if (!videoConfig) {
      if (typeof window !== "undefined" && window.remotion_isPlayer || isPlayer) {
        throw new Error([
          "No video config found. Likely reasons:",
          "- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.",
          "- You have multiple versions of Remotion installed which causes the React context to get lost."
        ].join("-"));
      }
      throw new Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");
    }
    if (!context) {
      throw new Error("Called useVideoConfig() outside a Remotion composition.");
    }
    return videoConfig;
  };
  var Freeze = ({
    frame: frameToFreeze,
    children,
    active = true
  }) => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();
    if (typeof frameToFreeze === "undefined") {
      throw new Error(`The <Freeze /> component requires a 'frame' prop, but none was passed.`);
    }
    if (typeof frameToFreeze !== "number") {
      throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof frameToFreeze}`);
    }
    if (Number.isNaN(frameToFreeze)) {
      throw new Error(`The 'frame' prop of <Freeze /> must be a real number, but it is NaN.`);
    }
    if (!Number.isFinite(frameToFreeze)) {
      throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${frameToFreeze}.`);
    }
    const isActive = reactExports.useMemo(() => {
      if (typeof active === "boolean") {
        return active;
      }
      if (typeof active === "function") {
        return active(frame);
      }
    }, [active, frame]);
    const timelineContext = useTimelineContext();
    const sequenceContext = reactExports.useContext(SequenceContext);
    const relativeFrom = (sequenceContext == null ? void 0 : sequenceContext.relativeFrom) ?? 0;
    const timelineValue = reactExports.useMemo(() => {
      if (!isActive) {
        return timelineContext;
      }
      return {
        ...timelineContext,
        isPlaying: () => false,
        frame: {
          [videoConfig.id]: frameToFreeze + relativeFrom
        }
      };
    }, [isActive, timelineContext, videoConfig.id, frameToFreeze, relativeFrom]);
    const newSequenceContext = reactExports.useMemo(() => {
      if (!sequenceContext) {
        return null;
      }
      if (!isActive) {
        return sequenceContext;
      }
      return {
        ...sequenceContext,
        cumulatedFrom: 0
      };
    }, [sequenceContext, isActive]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContext.Provider, {
      value: timelineValue,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceContext.Provider, {
        value: newSequenceContext,
        children
      })
    });
  };
  var captionsSchema = {
    captions: {
      type: "remotion-captions",
      default: void 0,
      description: "Captions",
      keyframable: false
    }
  };
  var transformSchema$1 = {
    "style.transformOrigin": {
      type: "transform-origin",
      step: 1,
      default: "50% 50%",
      description: "Transform origin"
    },
    "style.translate": {
      type: "translate",
      step: 1,
      default: "0px 0px",
      description: "Offset"
    },
    "style.scale": {
      type: "scale",
      max: 100,
      step: 0.01,
      default: 1,
      description: "Scale",
      defaultKeyframeOutput: "perceptual-scale"
    },
    "style.rotate": {
      type: "rotation-css",
      step: 1,
      default: "0deg",
      description: "Rotation"
    },
    "style.opacity": {
      type: "number",
      min: 0,
      max: 1,
      step: 0.01,
      default: 1,
      description: "Opacity",
      hiddenFromList: false
    }
  };
  var sequenceVisualStyleSchema = transformSchema$1;
  var textSchema = {
    "style.color": {
      type: "color",
      default: void 0,
      description: "Color"
    },
    "style.fontFamily": {
      type: "font-family",
      default: void 0,
      description: "Font family",
      keyframable: false
    },
    "style.fontSize": {
      type: "number",
      default: void 0,
      min: 0,
      step: 1,
      description: "Font size",
      hiddenFromList: false
    },
    "style.lineHeight": {
      type: "number",
      default: void 0,
      min: 0,
      step: 0.05,
      description: "Line height",
      hiddenFromList: false
    },
    "style.fontWeight": {
      type: "font-weight",
      default: 400,
      description: "Font weight",
      keyframable: false
    },
    "style.fontStyle": {
      type: "enum",
      default: "normal",
      description: "Font style",
      variants: {
        normal: {},
        italic: {},
        oblique: {}
      }
    },
    "style.textAlign": {
      type: "enum",
      default: "left",
      description: "Text align",
      variants: {
        left: {},
        center: {},
        right: {},
        justify: {},
        start: {},
        end: {}
      }
    },
    "style.letterSpacing": {
      type: "number",
      default: void 0,
      step: 0.1,
      description: "Letter spacing",
      hiddenFromList: false
    }
  };
  var borderSchema$1 = {
    "style.borderWidth": {
      type: "number",
      default: void 0,
      min: 0,
      step: 1,
      description: "Border width",
      hiddenFromList: false
    },
    "style.borderStyle": {
      type: "enum",
      default: "none",
      description: "Border style",
      variants: {
        none: {},
        hidden: {},
        solid: {},
        dashed: {},
        dotted: {},
        double: {},
        groove: {},
        ridge: {},
        inset: {},
        outset: {}
      }
    },
    "style.borderColor": {
      type: "color",
      default: void 0,
      description: "Border color"
    }
  };
  var borderRadiusSchema$1 = {
    "style.borderRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Border radius",
      hiddenFromList: false,
      keyframable: true
    },
    "style.borderTopLeftRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Top left radius",
      hiddenFromList: false
    },
    "style.borderTopRightRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Top right radius",
      hiddenFromList: false
    },
    "style.borderBottomRightRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Bottom right radius",
      hiddenFromList: false
    },
    "style.borderBottomLeftRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Bottom left radius",
      hiddenFromList: false
    }
  };
  var backgroundSchema$1 = {
    "style.backgroundColor": {
      type: "color",
      default: "transparent",
      description: "Color"
    }
  };
  var svgColorSchema = {
    color: {
      type: "color",
      default: void 0,
      description: "Current color"
    }
  };
  var svgStrokeSchema = {
    ...svgColorSchema,
    stroke: {
      type: "color",
      default: "none",
      description: "Stroke"
    },
    strokeWidth: {
      type: "number",
      default: 1,
      description: "Stroke width",
      min: 0,
      step: 1,
      hiddenFromList: false
    }
  };
  var svgPaintSchema = {
    fill: {
      type: "color",
      default: void 0,
      description: "Fill"
    },
    ...svgStrokeSchema
  };
  var textContentSchema = {
    children: {
      type: "text-content",
      default: "",
      description: "Text",
      keyframable: false
    }
  };
  var premountSchema$1 = {
    premountFor: {
      type: "number",
      default: 0,
      description: "Premount For",
      min: 0,
      step: 1,
      hiddenFromList: false,
      keyframable: false
    },
    postmountFor: {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      hiddenFromList: true,
      keyframable: false
    }
  };
  var sequencePremountSchema$1 = {
    ...premountSchema$1
  };
  var cropSchema$1 = {
    cropLeft: {
      type: "number",
      default: 0,
      description: "Crop left",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropRight: {
      type: "number",
      default: 0,
      description: "Crop right",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropTop: {
      type: "number",
      default: 0,
      description: "Crop top",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropBottom: {
      type: "number",
      default: 0,
      description: "Crop bottom",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    }
  };
  var sequenceCropSchema$1 = cropSchema$1;
  var sequenceStyleSchema$1 = {
    ...sequenceCropSchema$1,
    ...transformSchema$1,
    ...backgroundSchema$1,
    ...borderSchema$1,
    ...borderRadiusSchema$1,
    ...sequencePremountSchema$1
  };
  var hiddenField = {
    type: "boolean",
    default: false,
    description: "Hidden"
  };
  var showInTimelineField = {
    type: "hidden"
  };
  var sequenceNameField = {
    type: "hidden"
  };
  var extendSchemaWithSequenceName = (schema) => {
    return {
      name: sequenceNameField,
      ...schema
    };
  };
  var durationInFramesField = {
    type: "number",
    default: void 0,
    min: 1,
    step: 1,
    hiddenFromList: true
  };
  var fromField = {
    type: "number",
    default: 0,
    step: 1,
    hiddenFromList: true
  };
  var trimBeforeField = {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    hiddenFromList: true
  };
  var freezeField = {
    type: "number",
    default: null,
    step: 1,
    hiddenFromList: true
  };
  var baseSchema = {
    durationInFrames: durationInFramesField,
    from: fromField,
    trimBefore: trimBeforeField,
    freeze: freezeField,
    hidden: hiddenField,
    name: sequenceNameField,
    showInTimeline: showInTimelineField
  };
  var sequenceSchema$1 = {
    ...baseSchema,
    layout: {
      type: "enum",
      default: "absolute-fill",
      description: "Layout",
      variants: {
        "absolute-fill": sequenceStyleSchema$1,
        none: {}
      }
    }
  };
  var baseSchemaWithoutFrom = {
    durationInFrames: durationInFramesField,
    trimBefore: trimBeforeField,
    freeze: freezeField,
    hidden: hiddenField,
    name: sequenceNameField,
    showInTimeline: showInTimelineField
  };
  var sequenceSchemaWithoutFrom = {
    ...baseSchemaWithoutFrom,
    layout: sequenceSchema$1.layout
  };
  var sequenceSchemaDefaultLayoutNone = {
    ...sequenceSchema$1,
    layout: {
      ...sequenceSchema$1.layout,
      default: "none"
    }
  };
  var clampCrop = (value) => {
    return Math.min(1, Math.max(0, value ?? 0));
  };
  var resolveAxis = (start, end) => {
    const resolvedStart = clampCrop(start);
    const resolvedEnd = clampCrop(end);
    if (resolvedStart + resolvedEnd > 1) {
      return [0.5, 0.5];
    }
    return [resolvedStart, resolvedEnd];
  };
  var resolveSequenceCrop = ({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom
  }) => {
    const [left, right] = resolveAxis(cropLeft, cropRight);
    const [top, bottom] = resolveAxis(cropTop, cropBottom);
    return { left, right, top, bottom };
  };
  var getSequenceCropClipPath = ({
    left,
    right,
    top,
    bottom,
    style: style2
  }) => {
    if (left === 0 && right === 0 && top === 0 && bottom === 0) {
      return null;
    }
    const serializeRadius = (radius) => typeof radius === "number" ? `${radius}px` : radius;
    const shorthand = serializeRadius(style2 == null ? void 0 : style2.borderRadius);
    const longhands = [
      style2 == null ? void 0 : style2.borderTopLeftRadius,
      style2 == null ? void 0 : style2.borderTopRightRadius,
      style2 == null ? void 0 : style2.borderBottomRightRadius,
      style2 == null ? void 0 : style2.borderBottomLeftRadius
    ];
    const serializedBorderRadius = shorthand || (longhands.some((radius) => radius !== void 0) ? longhands.map((radius) => serializeRadius(radius) ?? "0px").join(" ") : void 0);
    const rounded = serializedBorderRadius ? ` round ${serializedBorderRadius}` : "";
    return `inset(${top * 100}% ${right * 100}% ${bottom * 100}% ${left * 100}%${rounded})`;
  };
  var validateSequenceCrop = (crop, componentName = "<Sequence />") => {
    for (const [name, value] of Object.entries(crop)) {
      if (value === void 0) {
        continue;
      }
      if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new TypeError(`The "${name}" prop of ${componentName} must be a finite number, but got ${String(value)}.`);
      }
      if (value > 100) {
        throw new RangeError(`The "${name}" prop of ${componentName} must be between 0 and 1, but got ${value}. The crop range is 0 to 1, not 0 to 100.`);
      }
    }
  };
  var useIsomorphicLayoutEffect = typeof window === "undefined" ? React14.useEffect : React14.useLayoutEffect;
  var SequenceManager = React14.createContext({
    registerSequence: () => {
      throw new Error("SequenceManagerContext not initialized");
    },
    updateSequence: null,
    unregisterSequence: () => {
      throw new Error("SequenceManagerContext not initialized");
    },
    sequences: []
  });
  var SequenceManagerRefContext = React14.createContext({
    current: []
  });
  var SequenceRegistrationContext = React14.createContext(false);
  var makeSequencePropsSubscriptionKey = (key) => {
    return `${key.absolutePath}\0${key.nodePath.join(".")}\0${key.sequenceKeys.join(".")}\0${key.effectKeys.map((keys) => keys.join(".")).join(".")}`;
  };
  var VisualModePropStatusesContext = React14.createContext({
    propStatuses: {}
  });
  var VisualModePropStatusesRefContext = React14.createContext({
    current: {}
  });
  var VisualModeDragOverridesContext = React14.createContext({
    getDragOverrides: () => {
      throw new Error("VisualModeDragOverridesContext not initialized");
    },
    getEffectDragOverrides: () => {
      throw new Error("VisualModeDragOverridesContext not initialized");
    }
  });
  var VisualModeSettersContext = React14.createContext({
    setDragOverrides: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    clearDragOverrides: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    setEffectDragOverrides: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    clearEffectDragOverrides: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    setPropStatuses: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    remapPropStatuses: () => {
      throw new Error("VisualModeSettersContext not initialized");
    }
  });
  var effectDragOverridesKey = (nodePath, effectIndex) => `${makeSequencePropsSubscriptionKey(nodePath)}.effects.${effectIndex}`;
  var SequenceManagerProvider = ({ children }) => {
    const { isStudio } = useRemotionEnvironment();
    const [sequenceManagerId] = reactExports.useState(() => String(Math.random()));
    const committedOrderRef = reactExports.useRef(null);
    const committedOrderIdsRef = reactExports.useRef(null);
    const [sequences, setSequences] = reactExports.useState([]);
    const sequencesRef = reactExports.useRef(sequences);
    sequencesRef.current = sequences;
    const [dragOverrides, setControlOverrides] = reactExports.useState({});
    const controlOverridesRef = reactExports.useRef(dragOverrides);
    controlOverridesRef.current = dragOverrides;
    const [effectDragOverridesState, setEffectDragOverridesState] = reactExports.useState({});
    const [propStatuses, setPropStatusesMapState] = reactExports.useState({});
    const propStatusesRef = reactExports.useRef(propStatuses);
    propStatusesRef.current = propStatuses;
    const setDragOverrides = reactExports.useCallback((nodePath, key, value) => {
      setControlOverrides((prev) => ({
        ...prev,
        [makeSequencePropsSubscriptionKey(nodePath)]: {
          ...prev[makeSequencePropsSubscriptionKey(nodePath)],
          [key]: value
        }
      }));
    }, []);
    const clearDragOverrides = reactExports.useCallback((nodePath) => {
      setControlOverrides((prev) => {
        const key = makeSequencePropsSubscriptionKey(nodePath);
        if (!prev[key]) {
          return prev;
        }
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }, []);
    const setEffectDragOverrides = reactExports.useCallback((nodePath, effectIndex, key, value) => {
      setEffectDragOverridesState((prev) => {
        const mapKey = effectDragOverridesKey(nodePath, effectIndex);
        return {
          ...prev,
          [mapKey]: {
            ...prev[mapKey],
            [key]: value
          }
        };
      });
    }, []);
    const clearEffectDragOverrides = reactExports.useCallback((nodePath, effectIndex) => {
      setEffectDragOverridesState((prev) => {
        const mapKey = effectDragOverridesKey(nodePath, effectIndex);
        if (!prev[mapKey]) {
          return prev;
        }
        const next = { ...prev };
        delete next[mapKey];
        return next;
      });
    }, []);
    const setPropStatuses = reactExports.useCallback((nodePath, values) => {
      setPropStatusesMapState((prev) => {
        const key = makeSequencePropsSubscriptionKey(nodePath);
        const prevKey = prev[key];
        const newKey = values(prevKey);
        if (prevKey === newKey) {
          return prev;
        }
        return { ...prev, [key]: newKey };
      });
    }, []);
    const remapPropStatuses = reactExports.useCallback((remappings) => {
      setPropStatusesMapState((prev) => {
        const next = { ...prev };
        for (const remapping of remappings) {
          delete next[makeSequencePropsSubscriptionKey(remapping.previousNodePath)];
        }
        for (const remapping of remappings) {
          if (remapping.nodePath !== null && remapping.result !== null) {
            next[makeSequencePropsSubscriptionKey(remapping.nodePath)] = remapping.result;
          }
        }
        return next;
      });
    }, []);
    useIsomorphicLayoutEffect(() => {
      if (!isStudio) {
        return;
      }
      let unmounted = false;
      const onCommitOrder = (event) => {
        const { detail } = event;
        const managerOrder = detail.sequenceManagers.find((item) => item.managerId === sequenceManagerId);
        if (!managerOrder) {
          return;
        }
        const previousOrder = committedOrderIdsRef.current;
        if (previousOrder !== null && previousOrder.length === managerOrder.sequenceIds.length && previousOrder.every((sequenceId, index) => sequenceId === managerOrder.sequenceIds[index])) {
          return;
        }
        const order = new Map(managerOrder.sequenceIds.map((sequenceId, index) => [
          sequenceId,
          index
        ]));
        committedOrderIdsRef.current = managerOrder.sequenceIds;
        committedOrderRef.current = order;
        queueMicrotask(() => {
          if (unmounted) {
            return;
          }
          setSequences((currentSequences) => {
            let changed = false;
            const nextSequences = currentSequences.map((sequence) => {
              const timelineOrder = order.get(sequence.id) ?? null;
              if (sequence.timelineOrder === timelineOrder) {
                return sequence;
              }
              changed = true;
              return { ...sequence, timelineOrder };
            });
            return changed ? nextSequences : currentSequences;
          });
        });
      };
      window.addEventListener(COMMIT_ORDER_EVENT, onCommitOrder);
      return () => {
        unmounted = true;
        window.removeEventListener(COMMIT_ORDER_EVENT, onCommitOrder);
      };
    }, [isStudio, sequenceManagerId]);
    const registerSequence = reactExports.useCallback((seq) => {
      setSequences((seqs) => {
        var _a;
        return [
          ...seqs,
          {
            ...seq,
            timelineOrder: ((_a = committedOrderRef.current) == null ? void 0 : _a.get(seq.id)) ?? null
          }
        ];
      });
    }, []);
    const updateSequence = reactExports.useCallback((seq) => {
      setSequences((seqs) => {
        var _a;
        const index = seqs.findIndex((item) => item.id === seq.id);
        if (index === -1) {
          return seqs;
        }
        const next = [...seqs];
        next[index] = {
          ...seq,
          timelineOrder: ((_a = committedOrderRef.current) == null ? void 0 : _a.get(seq.id)) ?? null
        };
        return next;
      });
    }, []);
    const unregisterSequence = reactExports.useCallback((seq) => {
      setSequences((seqs) => seqs.filter((s) => s.id !== seq));
    }, []);
    const sequenceContext = reactExports.useMemo(() => {
      return {
        registerSequence,
        sequences,
        updateSequence,
        unregisterSequence
      };
    }, [registerSequence, sequences, unregisterSequence, updateSequence]);
    const getDragOverrides = reactExports.useCallback((nodePath) => {
      return dragOverrides[makeSequencePropsSubscriptionKey(nodePath)] ?? {};
    }, [dragOverrides]);
    const getEffectDragOverrides = reactExports.useCallback((nodePath, effectIndex) => {
      return effectDragOverridesState[effectDragOverridesKey(nodePath, effectIndex)] ?? {};
    }, [effectDragOverridesState]);
    const propStatusesContext = reactExports.useMemo(() => {
      return {
        propStatuses
      };
    }, [propStatuses]);
    const dragOverridesContext = reactExports.useMemo(() => {
      return {
        getDragOverrides,
        getEffectDragOverrides
      };
    }, [getDragOverrides, getEffectDragOverrides]);
    const settersContext = reactExports.useMemo(() => {
      return {
        setDragOverrides,
        clearDragOverrides,
        setEffectDragOverrides,
        clearEffectDragOverrides,
        setPropStatuses,
        remapPropStatuses
      };
    }, [
      setDragOverrides,
      clearDragOverrides,
      setEffectDragOverrides,
      clearEffectDragOverrides,
      setPropStatuses,
      remapPropStatuses
    ]);
    const providers = /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceManagerRefContext.Provider, {
      value: sequencesRef,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceManager.Provider, {
        value: sequenceContext,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualModePropStatusesRefContext.Provider, {
          value: propStatusesRef,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualModePropStatusesContext.Provider, {
            value: propStatusesContext,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualModeDragOverridesContext.Provider, {
              value: dragOverridesContext,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualModeSettersContext.Provider, {
                value: settersContext,
                children
              })
            })
          })
        })
      })
    });
    return isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceManagerOrderMarker, {
      managerId: sequenceManagerId,
      children: providers
    }) : providers;
  };
  var IsInsideSeriesContext = reactExports.createContext(false);
  var IsInsideSeriesContainer = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(IsInsideSeriesContext.Provider, {
      value: true,
      children
    });
  };
  var IsNotInsideSeriesProvider = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(IsInsideSeriesContext.Provider, {
      value: false,
      children
    });
  };
  var useRequireToBeInsideSeries = () => {
    const isInsideSeries = React14.useContext(IsInsideSeriesContext);
    if (!isInsideSeries) {
      throw new Error("This component must be inside a <Series /> component.");
    }
  };
  var PremountContext = reactExports.createContext({
    premountFramesRemaining: 0
  });
  var ENABLE_V5_BREAKING_CHANGES = false;
  var resolveV5Default = (value) => {
    return value ?? ENABLE_V5_BREAKING_CHANGES;
  };
  var usePremounting = ({
    from,
    durationInFrames,
    premountFor,
    postmountFor,
    style: style2,
    styleWhilePremounted,
    styleWhilePostmounted,
    hideWhilePremounted
  }) => {
    const parentPremountContext = reactExports.useContext(PremountContext);
    const frame = useCurrentFrame() - parentPremountContext.premountFramesRemaining;
    const environment = useRemotionEnvironment();
    const { fps } = useVideoConfig();
    const effectivePremountFor = premountFor ?? 0;
    const effectivePostmountFor = postmountFor ?? 0;
    const endThreshold = Math.ceil(from + durationInFrames - 1);
    const premountingActive = !environment.isRendering && frame < from && frame >= from - effectivePremountFor;
    const postmountingActive = !environment.isRendering && frame > endThreshold && frame <= endThreshold + effectivePostmountFor;
    const isPremountingOrPostmounting = premountingActive || postmountingActive;
    const freezeFrame = premountingActive ? from : postmountingActive ? from + durationInFrames - 1 : 0;
    const premountingStyle = reactExports.useMemo(() => {
      if (!isPremountingOrPostmounting) {
        return style2;
      }
      return {
        ...style2,
        ...hideWhilePremounted === "opacity" ? { opacity: 0 } : { display: "none" },
        pointerEvents: "none",
        ...premountingActive ? styleWhilePremounted : {},
        ...postmountingActive ? styleWhilePostmounted : {}
      };
    }, [
      isPremountingOrPostmounting,
      hideWhilePremounted,
      postmountingActive,
      premountingActive,
      style2,
      styleWhilePostmounted,
      styleWhilePremounted
    ]);
    return {
      effectivePremountFor,
      effectivePostmountFor,
      premountingActive,
      postmountingActive,
      isPremountingOrPostmounting,
      freezeFrame,
      premountingStyle
    };
  };
  var useSequenceRegistration = ({
    getSequence,
    id: id2
  }) => {
    const { registerSequence, unregisterSequence, updateSequence } = reactExports.useContext(SequenceManager);
    const getSequenceRef = reactExports.useRef(getSequence);
    getSequenceRef.current = getSequence;
    const lastRegisteredGetterRef = reactExports.useRef(null);
    const registrationEnabled = getSequence !== null;
    reactExports.useEffect(() => {
      if (!registrationEnabled) {
        return;
      }
      const currentGetter = getSequenceRef.current;
      if (currentGetter === null) {
        throw new Error("Expected a sequence registration getter");
      }
      registerSequence(currentGetter());
      lastRegisteredGetterRef.current = currentGetter;
      return () => {
        lastRegisteredGetterRef.current = null;
        unregisterSequence(id2);
      };
    }, [id2, registerSequence, registrationEnabled, unregisterSequence]);
    reactExports.useEffect(() => {
      if (getSequence === null || updateSequence === null || lastRegisteredGetterRef.current === getSequence) {
        return;
      }
      updateSequence(getSequence());
      lastRegisteredGetterRef.current = getSequence;
    }, [getSequence, updateSequence]);
  };
  var deleteNestedKey = (obj, keysToRemove) => {
    for (const key of keysToRemove) {
      const parts = key.split(".");
      const parents = [obj];
      let current = obj;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        const next = current[part];
        if (next === void 0 || next === null) {
          current = null;
          break;
        }
        current = next;
        parents.push(current);
      }
      if (current === null) {
        continue;
      }
      delete current[parts[parts.length - 1]];
      for (let i = parents.length - 1; i > 0; i--) {
        const parent = parents[i];
        if (Object.keys(parent).length === 0) {
          const parentKey = parts[i - 1];
          delete parents[i - 1][parentKey];
        } else {
          break;
        }
      }
    }
    return obj;
  };
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 1e-3;
  var SUBDIVISION_PRECISION = 1e-7;
  var SUBDIVISION_MAX_ITERATIONS = 10;
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  var float32ArraySupported = typeof Float32Array === "function";
  function a(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function b(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function c(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((a(aA1, aA2) * aT + b(aA1, aA2)) * aT + c(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * a(aA1, aA2) * aT * aT + 2 * b(aA1, aA2) * aT + c(aA1);
  }
  function binarySubdivide({
    aX,
    _aA,
    _aB,
    mX1,
    mX2
  }) {
    let currentX;
    let currentT;
    let i = 0;
    let aA = _aA;
    let aB = _aB;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
    let aGuessT = _aGuessT;
    for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
      const currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function bezier(mX1, mY1, mX2, mY2) {
    if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (let i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }
    function getTForX(aX) {
      let intervalStart = 0;
      let currentSample = 1;
      const lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      const guessForT = intervalStart + dist * kSampleStepSize;
      const initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      }
      if (initialSlope === 0) {
        return guessForT;
      }
      return binarySubdivide({
        aX,
        _aA: intervalStart,
        _aB: intervalStart + kSampleStepSize,
        mX1,
        mX2
      });
    }
    return function(x2) {
      const clampedX = Math.min(1, Math.max(0, x2));
      if (mX1 === mY1 && mX2 === mY2) {
        return clampedX;
      }
      if (clampedX === 0) {
        return 0;
      }
      if (clampedX === 1) {
        return 1;
      }
      return calcBezier(getTForX(clampedX), mY1, mY2);
    };
  }
  var normalizeNumber = (value) => {
    return Math.round(value * 1e6) / 1e6;
  };
  var angleUnits = /* @__PURE__ */ new Set(["deg", "rad", "grad", "turn"]);
  var lengthUnits = /* @__PURE__ */ new Set([
    "%",
    "cap",
    "ch",
    "cm",
    "cqb",
    "cqh",
    "cqi",
    "cqmax",
    "cqmin",
    "cqw",
    "dvh",
    "dvw",
    "em",
    "ex",
    "ic",
    "in",
    "lh",
    "lvh",
    "lvw",
    "mm",
    "pc",
    "pt",
    "px",
    "q",
    "rem",
    "rlh",
    "svh",
    "svw",
    "vb",
    "vh",
    "vi",
    "vmax",
    "vmin",
    "vw"
  ]);
  var cssNumberRegex = /^([+-]?(?:\d+\.?\d*|\.\d+))([a-zA-Z%]+)?$/;
  var transformOriginKeywords = /* @__PURE__ */ new Set([
    "left",
    "center",
    "right",
    "top",
    "bottom"
  ]);
  var transformOriginKeywordOptions = (keyword) => {
    if (keyword === "left") {
      return [{ axis: "x", value: { value: 0, unit: "%" } }];
    }
    if (keyword === "right") {
      return [{ axis: "x", value: { value: 100, unit: "%" } }];
    }
    if (keyword === "top") {
      return [{ axis: "y", value: { value: 0, unit: "%" } }];
    }
    if (keyword === "bottom") {
      return [{ axis: "y", value: { value: 100, unit: "%" } }];
    }
    return [
      { axis: "x", value: { value: 50, unit: "%" } },
      { axis: "y", value: { value: 50, unit: "%" } }
    ];
  };
  var transformOriginCenter = { value: 50, unit: "%" };
  var stringifyNumber = (value) => {
    return String(normalizeNumber(value));
  };
  class UnsupportedStringInterpolationValueError extends TypeError {
  }
  var parseStringInterpolationComponent = (component, value) => {
    const match = cssNumberRegex.exec(component);
    if (match === null) {
      throw new UnsupportedStringInterpolationValueError(`Cannot interpolate "${value}" because "${component}" is not a supported scale, translate, or rotate value`);
    }
    const unit = match[2] ?? null;
    const numberValue = Number(match[1]);
    if (!Number.isFinite(numberValue)) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
    }
    if (unit === null) {
      return { kind: "scale", value: numberValue, unit: null };
    }
    if (angleUnits.has(unit)) {
      return { kind: "rotate", value: numberValue, unit };
    }
    if (lengthUnits.has(unit)) {
      return { kind: "translate", value: numberValue, unit };
    }
    throw new TypeError(`Cannot interpolate "${value}" because "${unit}" is not a supported translate or rotate unit`);
  };
  var parseTransformOriginLengthPercentage = ({
    component,
    value,
    allowPercentage
  }) => {
    const match = cssNumberRegex.exec(component);
    if (match === null) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
    }
    const unit = match[2] ?? null;
    const numberValue = Number(match[1]);
    if (!Number.isFinite(numberValue)) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
    }
    if (unit === null || !lengthUnits.has(unit) || !allowPercentage && unit === "%") {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
    }
    return { value: numberValue, unit };
  };
  var parseTransformOriginToken = (component, value) => {
    const lower = component.toLowerCase();
    if (transformOriginKeywords.has(lower)) {
      return { type: "keyword", keyword: lower };
    }
    return {
      type: "length-percentage",
      parsed: parseTransformOriginLengthPercentage({
        component,
        value,
        allowPercentage: true
      })
    };
  };
  var parseTwoTransformOriginKeywords = (first, second, value) => {
    const candidates = [];
    for (const firstOption of transformOriginKeywordOptions(first)) {
      for (const secondOption of transformOriginKeywordOptions(second)) {
        if (firstOption.axis === secondOption.axis) {
          continue;
        }
        candidates.push(firstOption.axis === "x" ? [firstOption.value, secondOption.value] : [secondOption.value, firstOption.value]);
      }
    }
    if (candidates.length === 0) {
      throw new TypeError(`Cannot interpolate "${value}" because "${first} ${second}" is not a valid transform-origin keyword pair`);
    }
    return candidates[0];
  };
  var parseTransformOriginXY = (parts, value) => {
    if (parts.length === 1) {
      const token = parseTransformOriginToken(parts[0], value);
      if (token.type === "length-percentage") {
        return [token.parsed, transformOriginCenter];
      }
      if (token.keyword === "top" || token.keyword === "bottom") {
        return [
          transformOriginCenter,
          transformOriginKeywordOptions(token.keyword)[0].value
        ];
      }
      return [
        transformOriginKeywordOptions(token.keyword)[0].value,
        transformOriginCenter
      ];
    }
    const first = parseTransformOriginToken(parts[0], value);
    const second = parseTransformOriginToken(parts[1], value);
    if (first.type === "length-percentage" && second.type === "length-percentage") {
      return [first.parsed, second.parsed];
    }
    if (first.type === "keyword" && second.type === "keyword") {
      return parseTwoTransformOriginKeywords(first.keyword, second.keyword, value);
    }
    const keyword = first.type === "keyword" ? first : second.type === "keyword" ? second : null;
    const length = first.type === "length-percentage" ? first.parsed : second.type === "length-percentage" ? second.parsed : null;
    if (keyword === null || length === null) {
      throw new Error("Expected a keyword and a length-percentage value");
    }
    const keywordIsFirst = first.type === "keyword";
    if (keyword.keyword === "left" || keyword.keyword === "right") {
      if (!keywordIsFirst) {
        throw new TypeError(`Cannot interpolate "${value}" because horizontal transform-origin keywords must come before a length-percentage value`);
      }
      return [transformOriginKeywordOptions(keyword.keyword)[0].value, length];
    }
    if (keyword.keyword === "top" || keyword.keyword === "bottom") {
      return [length, transformOriginKeywordOptions(keyword.keyword)[0].value];
    }
    return keywordIsFirst ? [transformOriginCenter, length] : [length, transformOriginCenter];
  };
  var parseTransformOriginValue = (output, parts) => {
    const [x2, y2] = parseTransformOriginXY(parts.slice(0, 2), output);
    const z2 = parts[2] === void 0 ? { value: 0, unit: null } : parseTransformOriginLengthPercentage({
      component: parts[2],
      value: output,
      allowPercentage: false
    });
    return {
      kind: "translate",
      values: [x2.value, y2.value, z2.value, 0],
      units: [x2.unit, y2.unit, z2.unit, null],
      dimensions: parts[2] === void 0 ? 2 : 3,
      axisRotation: false
    };
  };
  var parseAxisRotationValue = (output) => {
    const parts = output.trim().split(/\s+/);
    const keywordAxis = parts.length === 2 ? parts[0].toLowerCase() : null;
    if (keywordAxis === "x" || keywordAxis === "y" || keywordAxis === "z") {
      const keywordAngle = parseStringInterpolationComponent(parts[1], output);
      if (keywordAngle.kind !== "rotate") {
        return null;
      }
      return {
        kind: "rotate",
        values: keywordAxis === "x" ? [1, 0, 0, keywordAngle.value] : keywordAxis === "y" ? [0, 1, 0, keywordAngle.value] : [0, 0, 1, keywordAngle.value],
        units: [null, null, null, keywordAngle.unit],
        dimensions: 4,
        axisRotation: true
      };
    }
    if (parts.length !== 4) {
      return null;
    }
    const axis = parts.slice(0, 3).map(Number);
    if (!axis.every(Number.isFinite)) {
      return null;
    }
    const vectorAngle = parseStringInterpolationComponent(parts[3], output);
    if (vectorAngle.kind !== "rotate") {
      return null;
    }
    return {
      kind: "rotate",
      values: [axis[0], axis[1], axis[2], vectorAngle.value],
      units: [null, null, null, vectorAngle.unit],
      dimensions: 4,
      axisRotation: true
    };
  };
  var parseStringInterpolationValue = (output) => {
    var _a, _b, _c, _d, _e, _f;
    if (typeof output === "number") {
      if (!Number.isFinite(output)) {
        throw new Error(`outputRange must contain only finite numbers, but got [${output}]`);
      }
      return {
        kind: "scale",
        values: [output, output, 1, 0],
        units: [null, null, null, null],
        dimensions: 1,
        axisRotation: false
      };
    }
    const axisRotation = parseAxisRotationValue(output);
    if (axisRotation !== null) {
      return axisRotation;
    }
    const parts = output.trim().split(/\s+/);
    if (parts.length < 1 || parts.length > 3 || parts[0] === "") {
      throw new TypeError(`String outputRange values must contain 1 to 3 components, but got "${output}"`);
    }
    if (parts.some((part) => transformOriginKeywords.has(part.toLowerCase()))) {
      return parseTransformOriginValue(output, parts);
    }
    const parsed = parts.map((part) => parseStringInterpolationComponent(part, output));
    const [{ kind }] = parsed;
    for (const part of parsed) {
      if (part.kind !== kind) {
        throw new TypeError(`Cannot interpolate "${output}" because it mixes ${kind} and ${part.kind} values`);
      }
    }
    if (kind === "scale") {
      const x2 = parsed[0].value;
      const y2 = ((_a = parsed[1]) == null ? void 0 : _a.value) ?? x2;
      const z2 = ((_b = parsed[2]) == null ? void 0 : _b.value) ?? 1;
      return {
        kind,
        values: [x2, y2, z2, 0],
        units: [null, null, null, null],
        dimensions: parsed.length,
        axisRotation: false
      };
    }
    return {
      kind,
      values: [parsed[0].value, ((_c = parsed[1]) == null ? void 0 : _c.value) ?? 0, ((_d = parsed[2]) == null ? void 0 : _d.value) ?? 0, 0],
      units: [
        parsed[0].unit,
        ((_e = parsed[1]) == null ? void 0 : _e.unit) ?? null,
        ((_f = parsed[2]) == null ? void 0 : _f.unit) ?? null,
        null
      ],
      dimensions: parsed.length,
      axisRotation: false
    };
  };
  var serializeStringInterpolationValue = ({
    kind,
    values,
    units,
    dimensions,
    axisRotation
  }) => {
    if (axisRotation) {
      return `${stringifyNumber(values[0])} ${stringifyNumber(values[1])} ${stringifyNumber(values[2])} ${stringifyNumber(values[3])}${units[3]}`;
    }
    if (kind === "scale") {
      return values.slice(0, dimensions).map((value) => stringifyNumber(value)).join(" ");
    }
    return values.slice(0, dimensions).map((value, index) => `${stringifyNumber(value)}${units[index]}`).join(" ");
  };
  var toSignedArea = (scale) => {
    if (scale === 0) {
      return 0;
    }
    return Math.sign(scale) * scale * scale;
  };
  var fromSignedArea = (area) => {
    if (area === 0) {
      return 0;
    }
    return Math.sign(area) * Math.sqrt(Math.abs(area));
  };
  function interpolateFunction(input, inputRange, outputRange, options) {
    const { extrapolateLeft, extrapolateRight, easing, output } = options;
    let result = input;
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    if (result < inputMin) {
      if (extrapolateLeft === "identity") {
        return result;
      }
      if (extrapolateLeft === "clamp") {
        result = inputMin;
      } else if (extrapolateLeft === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else ;
    }
    if (result > inputMax) {
      if (extrapolateRight === "identity") {
        return result;
      }
      if (extrapolateRight === "clamp") {
        result = inputMax;
      } else if (extrapolateRight === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else ;
    }
    if (outputMin === outputMax) {
      return outputMin;
    }
    result = (result - inputMin) / (inputMax - inputMin);
    result = easing(result);
    if (output === "perceptual-scale") {
      const signedAreaMin = toSignedArea(outputMin);
      const signedAreaMax = toSignedArea(outputMax);
      result = fromSignedArea(result * (signedAreaMax - signedAreaMin) + signedAreaMin);
    } else {
      result = result * (outputMax - outputMin) + outputMin;
    }
    return result;
  }
  function findRange(input, inputRange) {
    let i;
    for (i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) {
        break;
      }
    }
    return i - 1;
  }
  var defaultEasing = (num) => num;
  var resolveOutputOption = (output) => {
    return output ?? "linear";
  };
  var shouldExtendRightForEasing = (easing) => {
    return easing.remotionShouldExtendRight === true;
  };
  var resolveEasingForSegment = ({
    easing,
    segmentIndex
  }) => {
    if (easing === void 0) {
      return defaultEasing;
    }
    if (typeof easing === "function") {
      return easing;
    }
    return easing[segmentIndex];
  };
  var interpolateSegment = ({
    input,
    inputRange,
    outputRange,
    easing,
    extrapolateLeft,
    extrapolateRight,
    output
  }) => {
    return interpolateFunction(input, inputRange, outputRange, {
      easing,
      extrapolateLeft,
      extrapolateRight: input > inputRange[1] && extrapolateRight === "clamp" && shouldExtendRightForEasing(easing) ? "extend" : extrapolateRight,
      output
    });
  };
  var interpolateNumber = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    const output = resolveOutputOption(options == null ? void 0 : options.output);
    if (inputRange.length === 1) {
      return outputRange[0];
    }
    const easingOption = options == null ? void 0 : options.easing;
    let extrapolateLeft = "extend";
    if ((options == null ? void 0 : options.extrapolateLeft) !== void 0) {
      extrapolateLeft = options.extrapolateLeft;
    }
    let extrapolateRight = "extend";
    if ((options == null ? void 0 : options.extrapolateRight) !== void 0) {
      extrapolateRight = options.extrapolateRight;
    }
    const posterizedInput = (options == null ? void 0 : options.posterize) === void 0 ? input : Math.floor(input / options.posterize) * options.posterize;
    const range = findRange(posterizedInput, inputRange);
    const easing = resolveEasingForSegment({
      easing: easingOption,
      segmentIndex: range
    });
    let result = interpolateSegment({
      input: posterizedInput,
      inputRange: [inputRange[range], inputRange[range + 1]],
      outputRange: [outputRange[range], outputRange[range + 1]],
      easing,
      extrapolateLeft,
      extrapolateRight,
      output
    });
    for (let segmentIndex = 0; segmentIndex < range; segmentIndex++) {
      const previousEasing = resolveEasingForSegment({
        easing: easingOption,
        segmentIndex
      });
      if (!shouldExtendRightForEasing(previousEasing)) {
        continue;
      }
      const previousSegmentEnd = inputRange[segmentIndex + 1];
      if (posterizedInput <= previousSegmentEnd) {
        continue;
      }
      const continuedSegmentValue = interpolateSegment({
        input: posterizedInput,
        inputRange: [inputRange[segmentIndex], previousSegmentEnd],
        outputRange: [outputRange[segmentIndex], outputRange[segmentIndex + 1]],
        easing: previousEasing,
        extrapolateLeft,
        extrapolateRight: "extend",
        output
      });
      result += continuedSegmentValue - outputRange[segmentIndex + 1];
    }
    return result;
  };
  var interpolateString = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    var _a;
    const initiallyParsedOutputRange = outputRange.map(parseStringInterpolationValue);
    const hasAxisRotation = initiallyParsedOutputRange.some((parsed) => parsed.axisRotation);
    const posterizedInput = (options == null ? void 0 : options.posterize) === void 0 ? input : Math.floor(input / options.posterize) * options.posterize;
    const segmentIndex = inputRange.length === 1 ? 0 : findRange(posterizedInput, inputRange);
    const parsedOutputRange = hasAxisRotation ? initiallyParsedOutputRange.map((parsed, index) => {
      if (parsed.kind !== "rotate") {
        return parsed;
      }
      if (parsed.axisRotation) {
        return parsed;
      }
      if (parsed.dimensions !== 1) {
        throw new TypeError("Cannot interpolate a multi-angle rotate value with an axis rotation");
      }
      const adjacentAxisRotation = parsed.values[0] === 0 ? index === 0 ? initiallyParsedOutputRange.find((candidate) => candidate.axisRotation) : index === initiallyParsedOutputRange.length - 1 ? [...initiallyParsedOutputRange].reverse().find((candidate) => candidate.axisRotation) : index === segmentIndex ? initiallyParsedOutputRange[index + 1] : index === segmentIndex + 1 ? initiallyParsedOutputRange[index - 1] : void 0 : void 0;
      const axis = (adjacentAxisRotation == null ? void 0 : adjacentAxisRotation.axisRotation) ? adjacentAxisRotation.values : [0, 0, 1];
      return {
        kind: "rotate",
        values: [axis[0], axis[1], axis[2], parsed.values[0]],
        units: [null, null, null, parsed.units[0]],
        dimensions: 4,
        axisRotation: true
      };
    }) : initiallyParsedOutputRange;
    const kind = (_a = parsedOutputRange[0]) == null ? void 0 : _a.kind;
    if (kind === void 0) {
      throw new Error("outputRange must have at least 1 element");
    }
    for (const parsed of parsedOutputRange) {
      if (parsed.kind !== kind) {
        throw new TypeError(`Cannot interpolate ${kind} values with ${parsed.kind} values`);
      }
    }
    const dimensions = Math.max(...parsedOutputRange.map((parsed) => parsed.dimensions));
    const units = [
      null,
      null,
      null,
      null
    ];
    if (kind !== "scale") {
      for (let axis = 0; axis < dimensions; axis++) {
        if (hasAxisRotation && axis < 3) {
          continue;
        }
        for (const parsed of parsedOutputRange) {
          const unit = parsed.units[axis];
          if (unit === null) {
            continue;
          }
          if (units[axis] === null) {
            units[axis] = unit;
            continue;
          }
          if (units[axis] !== unit) {
            throw new TypeError(`Cannot interpolate ${kind} values with different units on axis ${axis + 1}: ${units[axis]} and ${unit}`);
          }
        }
        if (units[axis] === null) {
          throw new TypeError(`Cannot interpolate ${kind} values because axis ${axis + 1} has no unit`);
        }
      }
    }
    const values = [0, 0, 0, 0];
    for (let axis = 0; axis < dimensions; axis++) {
      values[axis] = interpolateNumber({
        input,
        inputRange,
        outputRange: parsedOutputRange.map((parsed) => parsed.values[axis]),
        options
      });
    }
    return serializeStringInterpolationValue({
      kind,
      values,
      units,
      dimensions,
      axisRotation: hasAxisRotation
    });
  };
  var interpolateDiscreteString = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    if (inputRange.length === 1) {
      return outputRange[0];
    }
    for (let segmentIndex = 0; segmentIndex < inputRange.length - 1; segmentIndex++) {
      if (resolveEasingForSegment({
        easing: options == null ? void 0 : options.easing,
        segmentIndex
      }) !== Easing.step1) {
        throw new TypeError("Non-numeric strings can only be interpolated using Easing.step1");
      }
    }
    const posterizedInput = (options == null ? void 0 : options.posterize) === void 0 ? input : Math.floor(input / options.posterize) * options.posterize;
    const inputMin = inputRange[0];
    const inputMax = inputRange[inputRange.length - 1];
    let resolvedInput = posterizedInput;
    if (resolvedInput < inputMin) {
      if ((options == null ? void 0 : options.extrapolateLeft) === "identity") {
        throw new TypeError('extrapolateLeft: "identity" is not supported for non-numeric strings');
      }
      if ((options == null ? void 0 : options.extrapolateLeft) === "wrap") {
        const wrapRange = inputMax - inputMin;
        resolvedInput = ((resolvedInput - inputMin) % wrapRange + wrapRange) % wrapRange + inputMin;
      } else {
        return outputRange[0];
      }
    }
    if (resolvedInput > inputMax) {
      if ((options == null ? void 0 : options.extrapolateRight) === "identity") {
        throw new TypeError('extrapolateRight: "identity" is not supported for non-numeric strings');
      }
      if ((options == null ? void 0 : options.extrapolateRight) === "wrap") {
        const wrapRange = inputMax - inputMin;
        resolvedInput = ((resolvedInput - inputMin) % wrapRange + wrapRange) % wrapRange + inputMin;
      } else {
        return outputRange[outputRange.length - 1];
      }
    }
    const range = findRange(resolvedInput, inputRange);
    return resolvedInput >= inputRange[range + 1] ? outputRange[range + 1] : outputRange[range];
  };
  var validateTupleOutputRange = (outputRange) => {
    var _a;
    const dimensions = (_a = outputRange[0]) == null ? void 0 : _a.length;
    if (dimensions === void 0) {
      throw new Error("outputRange must have at least 1 element");
    }
    if (dimensions === 0) {
      throw new TypeError("outputRange tuples must contain at least 1 number");
    }
    for (const output of outputRange) {
      if (output.length !== dimensions) {
        throw new TypeError(`outputRange tuples must all have the same length, but got ${dimensions} and ${output.length}`);
      }
      for (const value of output) {
        if (typeof value !== "number" || !Number.isFinite(value)) {
          throw new TypeError(`outputRange tuples must contain only finite numbers, but got [${output.join(",")}]`);
        }
      }
    }
    return dimensions;
  };
  var interpolateTuple = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    const dimensions = validateTupleOutputRange(outputRange);
    return new Array(dimensions).fill(true).map((_, axis) => interpolateNumber({
      input,
      inputRange,
      outputRange: outputRange.map((output) => output[axis]),
      options
    }));
  };
  function checkValidInputRange(arr) {
    for (let i = 1; i < arr.length; ++i) {
      if (!(arr[i] > arr[i - 1])) {
        throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
      }
    }
  }
  function checkInfiniteRange(name, arr) {
    if (arr.length < 1) {
      throw new Error(name + " must have at least 1 element");
    }
    for (const element of arr) {
      if (typeof element !== "number") {
        throw new Error(`${name} must contain only numbers`);
      }
      if (!Number.isFinite(element)) {
        throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
      }
    }
  }
  function assertValidInterpolateEasingOption(easing, inputRangeLength) {
    if (easing === void 0) {
      return;
    }
    if (typeof easing === "function") {
      return;
    }
    const expectedLength = inputRangeLength - 1;
    if (easing.length !== expectedLength) {
      throw new Error(`When easing is an array, it must have one entry per segment between keyframes (length inputRange.length - 1 = ${expectedLength}), but got length ${easing.length}`);
    }
    for (let i = 0; i < easing.length; i++) {
      if (typeof easing[i] !== "function") {
        throw new Error(`easing[${i}] must be a function`);
      }
    }
  }
  function assertValidInterpolatePosterizeOption(posterize) {
    if (posterize === void 0) {
      return;
    }
    if (typeof posterize !== "number" || !Number.isFinite(posterize) || posterize <= 0) {
      throw new Error(`posterize must be a positive finite number, but got ${posterize}`);
    }
  }
  function assertValidInterpolateOutputOption(output) {
    if (output === void 0 || output === "linear" || output === "perceptual-scale") {
      return;
    }
    throw new Error(`output must be "linear" or "perceptual-scale", but got ${String(output)}`);
  }
  function interpolate(input, inputRange, outputRange, options) {
    if (typeof input === "undefined") {
      throw new Error("input can not be undefined");
    }
    if (typeof inputRange === "undefined") {
      throw new Error("inputRange can not be undefined");
    }
    if (typeof outputRange === "undefined") {
      throw new Error("outputRange can not be undefined");
    }
    if (inputRange.length !== outputRange.length) {
      throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
    }
    checkInfiniteRange("inputRange", inputRange);
    checkValidInputRange(inputRange);
    assertValidInterpolateEasingOption(options == null ? void 0 : options.easing, inputRange.length);
    assertValidInterpolatePosterizeOption(options == null ? void 0 : options.posterize);
    assertValidInterpolateOutputOption(options == null ? void 0 : options.output);
    if (typeof input !== "number") {
      throw new TypeError("Cannot interpolate an input which is not a number");
    }
    if (!Array.isArray(outputRange)) {
      throw new Error("outputRange must contain only numbers");
    }
    const hasStringOutput = outputRange.some((output) => typeof output === "string");
    if (hasStringOutput) {
      if (!outputRange.every((output) => typeof output === "string" || typeof output === "number")) {
        throw new TypeError("outputRange must contain only numbers, or supported scale, translate, and rotate strings");
      }
      try {
        return interpolateString({ input, inputRange, outputRange, options });
      } catch (error2) {
        if (!outputRange.every((output) => typeof output === "string")) {
          throw error2;
        }
        const hasNonNumericString = outputRange.some((output) => {
          try {
            parseStringInterpolationValue(output);
            return false;
          } catch (parseError) {
            return parseError instanceof UnsupportedStringInterpolationValueError;
          }
        });
        if (!hasNonNumericString) {
          throw error2;
        }
        return interpolateDiscreteString({
          input,
          inputRange,
          outputRange,
          options
        });
      }
    }
    if (outputRange.every((output) => Array.isArray(output))) {
      return interpolateTuple({ input, inputRange, outputRange, options });
    }
    if (!outputRange.every((output) => typeof output === "number")) {
      throw new TypeError("outputRange must contain only numbers, numeric tuples, or supported scale, translate, and rotate strings");
    }
    checkInfiniteRange("outputRange", outputRange);
    return interpolateNumber({ input, inputRange, outputRange, options });
  }
  var validateFrame = ({
    allowFloats,
    durationInFrames,
    frame
  }) => {
    if (typeof frame === "undefined") {
      throw new TypeError(`Argument missing for parameter "frame"`);
    }
    if (typeof frame !== "number") {
      throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
    }
    if (!Number.isFinite(frame)) {
      throw new RangeError(`Frame ${frame} is not finite`);
    }
    if (frame < 0 && frame < -durationInFrames) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
    }
    if (frame > durationInFrames - 1) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
    }
  };
  var validateSpringDuration = (dur) => {
    if (typeof dur === "undefined") {
      return;
    }
    if (typeof dur !== "number") {
      throw new TypeError(`A "duration" of a spring must be a "number" but is "${typeof dur}"`);
    }
    if (Number.isNaN(dur)) {
      throw new TypeError('A "duration" of a spring is NaN, which it must not be');
    }
    if (!Number.isFinite(dur)) {
      throw new TypeError('A "duration" of a spring must be finite, but is ' + dur);
    }
    if (dur <= 0) {
      throw new TypeError('A "duration" of a spring must be positive, but is ' + dur);
    }
  };
  var defaultSpringConfig = {
    damping: 10,
    mass: 1,
    stiffness: 100,
    overshootClamping: false
  };
  var advanceCache = {};
  function advance({
    animation,
    now,
    config
  }) {
    const { toValue, lastTimestamp, current, velocity } = animation;
    const deltaTime = Math.min(now - lastTimestamp, 64);
    if (config.damping <= 0) {
      throw new Error("Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.");
    }
    const c2 = config.damping;
    const m2 = config.mass;
    const k2 = config.stiffness;
    const cacheKey = [
      toValue,
      lastTimestamp,
      current,
      velocity,
      c2,
      m2,
      k2,
      now
    ].join("-");
    if (advanceCache[cacheKey]) {
      return advanceCache[cacheKey];
    }
    const v0 = -velocity;
    const x0 = toValue - current;
    const zeta = c2 / (2 * Math.sqrt(k2 * m2));
    const omega0 = Math.sqrt(k2 / m2);
    const omega1 = omega0 * Math.sqrt(1 - zeta ** 2);
    const t2 = deltaTime / 1e3;
    const sin1 = Math.sin(omega1 * t2);
    const cos1 = Math.cos(omega1 * t2);
    const underDampedEnvelope = Math.exp(-zeta * omega0 * t2);
    const underDampedFrag1 = underDampedEnvelope * (sin1 * ((v0 + zeta * omega0 * x0) / omega1) + x0 * cos1);
    const underDampedPosition = toValue - underDampedFrag1;
    const underDampedVelocity = zeta * omega0 * underDampedFrag1 - underDampedEnvelope * (cos1 * (v0 + zeta * omega0 * x0) - omega1 * x0 * sin1);
    const criticallyDampedEnvelope = Math.exp(-omega0 * t2);
    const criticallyDampedPosition = toValue - criticallyDampedEnvelope * (x0 + (v0 + omega0 * x0) * t2);
    const criticallyDampedVelocity = criticallyDampedEnvelope * (v0 * (t2 * omega0 - 1) + t2 * x0 * omega0 * omega0);
    const animationNode = {
      toValue,
      prevPosition: current,
      lastTimestamp: now,
      current: zeta < 1 ? underDampedPosition : criticallyDampedPosition,
      velocity: zeta < 1 ? underDampedVelocity : criticallyDampedVelocity
    };
    advanceCache[cacheKey] = animationNode;
    return animationNode;
  }
  var calculationCache = {};
  function springCalculation({
    frame,
    fps,
    config = {}
  }) {
    const from = 0;
    const to = 1;
    const cacheKey = [
      frame,
      fps,
      config.damping,
      config.mass,
      config.overshootClamping,
      config.stiffness
    ].join("-");
    if (calculationCache[cacheKey]) {
      return calculationCache[cacheKey];
    }
    let animation = {
      lastTimestamp: 0,
      current: from,
      toValue: to,
      velocity: 0,
      prevPosition: 0
    };
    const frameClamped = Math.max(0, frame);
    const unevenRest = frameClamped % 1;
    for (let f2 = 0; f2 <= Math.floor(frameClamped); f2++) {
      const time = f2 / fps * 1e3;
      animation = advance({
        animation,
        now: time,
        config: {
          ...defaultSpringConfig,
          ...config
        }
      });
    }
    if (unevenRest > 0) {
      animation = advance({
        animation,
        now: frameClamped / fps * 1e3,
        config: {
          ...defaultSpringConfig,
          ...config
        }
      });
    }
    calculationCache[cacheKey] = animation;
    return animation;
  }
  var cache = /* @__PURE__ */ new Map();
  function measureSpring({
    fps,
    config = {},
    threshold = 5e-3
  }) {
    if (typeof threshold !== "number") {
      throw new TypeError(`threshold must be a number, got ${threshold} of type ${typeof threshold}`);
    }
    if (threshold === 0) {
      return Infinity;
    }
    if (threshold === 1) {
      return 0;
    }
    if (isNaN(threshold)) {
      throw new TypeError("Threshold is NaN");
    }
    if (!Number.isFinite(threshold)) {
      throw new TypeError("Threshold is not finite");
    }
    if (threshold < 0) {
      throw new TypeError("Threshold is below 0");
    }
    const cacheKey = [
      fps,
      config.damping,
      config.mass,
      config.overshootClamping,
      config.stiffness,
      threshold
    ].join("-");
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    validateFps$2(fps, "to the measureSpring() function");
    let frame = 0;
    let finishedFrame = 0;
    const calc = () => {
      return springCalculation({
        fps,
        frame,
        config
      });
    };
    let animation = calc();
    const calcDifference = () => {
      return Math.abs(animation.current - animation.toValue);
    };
    let difference = calcDifference();
    while (difference >= threshold) {
      frame++;
      animation = calc();
      difference = calcDifference();
    }
    finishedFrame = frame;
    for (let i = 0; i < 20; i++) {
      frame++;
      animation = calc();
      difference = calcDifference();
      if (difference >= threshold) {
        i = 0;
        finishedFrame = frame + 1;
      }
    }
    cache.set(cacheKey, finishedFrame);
    return finishedFrame;
  }
  function spring({
    frame: passedFrame,
    fps,
    config = {},
    from = 0,
    to = 1,
    durationInFrames: passedDurationInFrames,
    durationRestThreshold,
    delay: delay2 = 0,
    reverse = false
  }) {
    validateSpringDuration(passedDurationInFrames);
    validateFrame({
      frame: passedFrame,
      durationInFrames: Infinity,
      allowFloats: true
    });
    validateFps$2(fps, "to spring()");
    const needsToCalculateNaturalDuration = reverse || typeof passedDurationInFrames !== "undefined";
    const naturalDuration = needsToCalculateNaturalDuration ? measureSpring({
      fps,
      config,
      threshold: durationRestThreshold
    }) : void 0;
    const naturalDurationGetter = needsToCalculateNaturalDuration ? {
      get: () => naturalDuration
    } : {
      get: () => {
        throw new Error("did not calculate natural duration, this is an error with Remotion. Please report");
      }
    };
    const reverseProcessed = reverse ? (passedDurationInFrames ?? naturalDurationGetter.get()) - passedFrame : passedFrame;
    const delayProcessed = reverseProcessed + (reverse ? delay2 : -delay2);
    const durationProcessed = passedDurationInFrames === void 0 ? delayProcessed : delayProcessed / (passedDurationInFrames / naturalDurationGetter.get());
    if (passedDurationInFrames && delayProcessed > passedDurationInFrames) {
      return to;
    }
    const spr = springCalculation({
      fps,
      frame: durationProcessed,
      config
    });
    const inner = config.overshootClamping ? to >= from ? Math.min(spr.current, to) : Math.max(spr.current, to) : spr.current;
    const interpolated = from === 0 && to === 1 ? inner : interpolate(inner, [0, 1], [from, to]);
    return interpolated;
  }
  var clampUnit = (t2) => Math.min(1, Math.max(0, t2));
  var springEasingDurationInFrames = 30;
  class Easing {
    static step0(n2) {
      return n2 > 0 ? 1 : 0;
    }
    static step1(n2) {
      return n2 >= 1 ? 1 : 0;
    }
    static linear(t2) {
      return t2;
    }
    static ease(t2) {
      return Easing.bezier(0.42, 0, 1, 1)(t2);
    }
    static quad(t2) {
      return t2 * t2;
    }
    static cubic(t2) {
      return t2 * t2 * t2;
    }
    static poly(n2) {
      return (t2) => t2 ** n2;
    }
    static sin(t2) {
      return 1 - Math.cos(t2 * Math.PI / 2);
    }
    static circle(t2) {
      const u2 = clampUnit(t2);
      return 1 - Math.sqrt(1 - u2 * u2);
    }
    static exp(t2) {
      return 2 ** (10 * (t2 - 1));
    }
    static elastic(bounciness = 1) {
      const p2 = bounciness * Math.PI;
      return (t2) => 1 - Math.cos(t2 * Math.PI / 2) ** 3 * Math.cos(t2 * p2);
    }
    static back(s = 1.70158) {
      return (t2) => t2 * t2 * ((s + 1) * t2 - s);
    }
    static spring({
      allowTail = false,
      durationRestThreshold,
      ...config
    } = {}) {
      const easing = (t2) => {
        if (t2 <= 0) {
          return 0;
        }
        if (!allowTail && t2 >= 1) {
          return 1;
        }
        if (allowTail) {
          return spring({
            fps: springEasingDurationInFrames,
            frame: t2 * measureSpring({
              fps: springEasingDurationInFrames,
              config,
              threshold: durationRestThreshold
            }),
            config
          });
        }
        return spring({
          fps: springEasingDurationInFrames,
          frame: t2 * springEasingDurationInFrames,
          config,
          durationInFrames: springEasingDurationInFrames,
          durationRestThreshold
        });
      };
      return Object.assign(easing, {
        remotionShouldExtendRight: allowTail
      });
    }
    static bounce(t2) {
      const u2 = clampUnit(t2);
      if (u2 < 1 / 2.75) {
        return 7.5625 * u2 * u2;
      }
      if (u2 < 2 / 2.75) {
        const t2_ = u2 - 1.5 / 2.75;
        return 7.5625 * t2_ * t2_ + 0.75;
      }
      if (u2 < 2.5 / 2.75) {
        const t2_ = u2 - 2.25 / 2.75;
        return 7.5625 * t2_ * t2_ + 0.9375;
      }
      const t22 = u2 - 2.625 / 2.75;
      return 7.5625 * t22 * t22 + 0.984375;
    }
    static bezier(x1, y1, x2, y2) {
      return bezier(x1, y1, x2, y2);
    }
    static in(easing) {
      return easing;
    }
    static out(easing) {
      return (t2) => 1 - easing(1 - t2);
    }
    static inOut(easing) {
      return (t2) => {
        if (t2 < 0.5) {
          return easing(t2 * 2) / 2;
        }
        return 1 - easing((1 - t2) * 2) / 2;
      };
    }
  }
  var NUMBER = "[-+]?\\d*\\.?\\d+";
  var PERCENTAGE = NUMBER + "%";
  function call(...args) {
    return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  var MODERN_VALUE = "(?:none|[-+]?\\d*\\.?\\d+(?:%|deg|rad|grad|turn)?)";
  function modernColorCall(name) {
    return new RegExp(name + "\\(\\s*(" + MODERN_VALUE + ")\\s+(" + MODERN_VALUE + ")\\s+(" + MODERN_VALUE + ")(?:\\s*\\/\\s*(" + MODERN_VALUE + "))?\\s*\\)");
  }
  function getMatchers() {
    const cachedMatchers = {
      rgb: void 0,
      rgba: void 0,
      hsl: void 0,
      hsla: void 0,
      hex3: void 0,
      hex4: void 0,
      hex5: void 0,
      hex6: void 0,
      hex8: void 0,
      oklch: void 0,
      oklab: void 0,
      lab: void 0,
      lch: void 0,
      hwb: void 0
    };
    if (cachedMatchers.rgb === void 0) {
      cachedMatchers.rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
      cachedMatchers.rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
      cachedMatchers.hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
      cachedMatchers.hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
      cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      cachedMatchers.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
      cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
      cachedMatchers.oklch = modernColorCall("oklch");
      cachedMatchers.oklab = modernColorCall("oklab");
      cachedMatchers.lab = modernColorCall("lab");
      cachedMatchers.lch = modernColorCall("lch");
      cachedMatchers.hwb = modernColorCall("hwb");
    }
    return cachedMatchers;
  }
  function hue2rgb(p2, q2, t2) {
    if (t2 < 0) {
      t2 += 1;
    }
    if (t2 > 1) {
      t2 -= 1;
    }
    if (t2 < 1 / 6) {
      return p2 + (q2 - p2) * 6 * t2;
    }
    if (t2 < 1 / 2) {
      return q2;
    }
    if (t2 < 2 / 3) {
      return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
    }
    return p2;
  }
  function hslToRgb(h, s, l2) {
    const q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    const p2 = 2 * l2 - q2;
    const r2 = hue2rgb(p2, q2, h + 1 / 3);
    const g = hue2rgb(p2, q2, h);
    const b2 = hue2rgb(p2, q2, h - 1 / 3);
    return Math.round(r2 * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b2 * 255) << 8;
  }
  function parse255(str) {
    const int = Number.parseInt(str, 10);
    if (int < 0) {
      return 0;
    }
    if (int > 255) {
      return 255;
    }
    return int;
  }
  function parse360(str) {
    const int = Number.parseFloat(str);
    return (int % 360 + 360) % 360 / 360;
  }
  function parse1(str) {
    const num = Number.parseFloat(str);
    if (num < 0) {
      return 0;
    }
    if (num > 1) {
      return 255;
    }
    return Math.round(num * 255);
  }
  function parsePercentage(str) {
    const int = Number.parseFloat(str);
    if (int < 0) {
      return 0;
    }
    if (int > 100) {
      return 1;
    }
    return int / 100;
  }
  function parseModernComponent(str, percentScale) {
    if (str === "none")
      return 0;
    if (str.endsWith("%")) {
      return Number.parseFloat(str) / 100 * percentScale;
    }
    return Number.parseFloat(str);
  }
  function parseHueAngle(str) {
    if (str === "none")
      return 0;
    if (str.endsWith("rad")) {
      return Number.parseFloat(str) * 180 / Math.PI;
    }
    if (str.endsWith("grad"))
      return Number.parseFloat(str) * 0.9;
    if (str.endsWith("turn"))
      return Number.parseFloat(str) * 360;
    return Number.parseFloat(str);
  }
  function parseModernAlpha(str) {
    if (str === void 0 || str === "none")
      return 1;
    if (str.endsWith("%")) {
      return Math.max(0, Math.min(1, Number.parseFloat(str) / 100));
    }
    return Math.max(0, Math.min(1, Number.parseFloat(str)));
  }
  function linearToSrgb(c2) {
    if (c2 <= 31308e-7)
      return 12.92 * c2;
    return 1.055 * c2 ** (1 / 2.4) - 0.055;
  }
  function clamp01(v2) {
    return Math.max(0, Math.min(1, v2));
  }
  function rgbFloatToInt(r2, g, b2, alpha) {
    const ri2 = Math.round(clamp01(r2) * 255);
    const gi2 = Math.round(clamp01(g) * 255);
    const bi2 = Math.round(clamp01(b2) * 255);
    const ai2 = Math.round(clamp01(alpha) * 255);
    return (ri2 << 24 | gi2 << 16 | bi2 << 8 | ai2) >>> 0;
  }
  function oklabToSrgb(L2, a2, b2) {
    const l_ = L2 + 0.3963377774 * a2 + 0.2158037573 * b2;
    const m_ = L2 - 0.1055613458 * a2 - 0.0638541728 * b2;
    const s_ = L2 - 0.0894841775 * a2 - 1.291485548 * b2;
    const l2 = l_ * l_ * l_;
    const m2 = m_ * m_ * m_;
    const s = s_ * s_ * s_;
    const rLin = 4.0767416621 * l2 - 3.3077115913 * m2 + 0.2309699292 * s;
    const gLin = -1.2684380046 * l2 + 2.6097574011 * m2 - 0.3413193965 * s;
    const bLin = -0.0041960863 * l2 - 0.7034186147 * m2 + 1.707614701 * s;
    return [linearToSrgb(rLin), linearToSrgb(gLin), linearToSrgb(bLin)];
  }
  function labToSrgb(L2, a2, b2) {
    const epsilon = 216 / 24389;
    const kappa = 24389 / 27;
    const Xn = 0.95047;
    const Yn = 1;
    const Zn = 1.08883;
    const fy = (L2 + 16) / 116;
    const fx = a2 / 500 + fy;
    const fz = fy - b2 / 200;
    const fx3 = fx * fx * fx;
    const fz3 = fz * fz * fz;
    const xr = fx3 > epsilon ? fx3 : (116 * fx - 16) / kappa;
    const yr = L2 > kappa * epsilon ? ((L2 + 16) / 116) ** 3 : L2 / kappa;
    const zr = fz3 > epsilon ? fz3 : (116 * fz - 16) / kappa;
    const X2 = xr * Xn;
    const Y2 = yr * Yn;
    const Z2 = zr * Zn;
    const rLin = 3.2404542 * X2 - 1.5371385 * Y2 - 0.4985314 * Z2;
    const gLin = -0.969266 * X2 + 1.8760108 * Y2 + 0.041556 * Z2;
    const bLin = 0.0556434 * X2 - 0.2040259 * Y2 + 1.0572252 * Z2;
    return [linearToSrgb(rLin), linearToSrgb(gLin), linearToSrgb(bLin)];
  }
  function hwbToSrgb(h, w2, bk2) {
    if (w2 + bk2 >= 1) {
      const gray = w2 / (w2 + bk2);
      return [gray, gray, gray];
    }
    const q2 = 1;
    const p2 = 0;
    const r2 = hue2rgb(p2, q2, h + 1 / 3);
    const g = hue2rgb(p2, q2, h);
    const bl2 = hue2rgb(p2, q2, h - 1 / 3);
    const factor = 1 - w2 - bk2;
    return [r2 * factor + w2, g * factor + w2, bl2 * factor + w2];
  }
  var colorNames = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
  };
  function normalizeColor(color) {
    const matchers = getMatchers();
    let match;
    if (matchers.hex6) {
      if (match = matchers.hex6.exec(color)) {
        return Number.parseInt(match[1] + "ff", 16) >>> 0;
      }
    }
    if (colorNames[color] !== void 0) {
      return colorNames[color];
    }
    if (matchers.rgb) {
      if (match = matchers.rgb.exec(color)) {
        return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
      }
    }
    if (matchers.rgba) {
      if (match = matchers.rgba.exec(color)) {
        return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
      }
    }
    if (matchers.hex3) {
      if (match = matchers.hex3.exec(color)) {
        return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
      }
    }
    if (matchers.hex8) {
      if (match = matchers.hex8.exec(color)) {
        return Number.parseInt(match[1], 16) >>> 0;
      }
    }
    if (matchers.hex4) {
      if (match = matchers.hex4.exec(color)) {
        return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
      }
    }
    if (matchers.hsl) {
      if (match = matchers.hsl.exec(color)) {
        return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
      }
    }
    if (matchers.hsla) {
      if (match = matchers.hsla.exec(color)) {
        return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
      }
    }
    if (matchers.oklch) {
      if (match = matchers.oklch.exec(color)) {
        const L2 = parseModernComponent(match[1], 1);
        const C2 = parseModernComponent(match[2], 0.4);
        const H2 = parseHueAngle(match[3]);
        const alpha = parseModernAlpha(match[4]);
        const hRad = H2 * Math.PI / 180;
        const [r2, g, b2] = oklabToSrgb(L2, C2 * Math.cos(hRad), C2 * Math.sin(hRad));
        return rgbFloatToInt(r2, g, b2, alpha);
      }
    }
    if (matchers.oklab) {
      if (match = matchers.oklab.exec(color)) {
        const L2 = parseModernComponent(match[1], 1);
        const a2 = parseModernComponent(match[2], 0.4);
        const b2 = parseModernComponent(match[3], 0.4);
        const alpha = parseModernAlpha(match[4]);
        const [r2, g, bl2] = oklabToSrgb(L2, a2, b2);
        return rgbFloatToInt(r2, g, bl2, alpha);
      }
    }
    if (matchers.lab) {
      if (match = matchers.lab.exec(color)) {
        const L2 = parseModernComponent(match[1], 100);
        const a2 = parseModernComponent(match[2], 125);
        const b2 = parseModernComponent(match[3], 125);
        const alpha = parseModernAlpha(match[4]);
        const [r2, g, bl2] = labToSrgb(L2, a2, b2);
        return rgbFloatToInt(r2, g, bl2, alpha);
      }
    }
    if (matchers.lch) {
      if (match = matchers.lch.exec(color)) {
        const L2 = parseModernComponent(match[1], 100);
        const C2 = parseModernComponent(match[2], 150);
        const H2 = parseHueAngle(match[3]);
        const alpha = parseModernAlpha(match[4]);
        const hRad = H2 * Math.PI / 180;
        const [r2, g, bl2] = labToSrgb(L2, C2 * Math.cos(hRad), C2 * Math.sin(hRad));
        return rgbFloatToInt(r2, g, bl2, alpha);
      }
    }
    if (matchers.hwb) {
      if (match = matchers.hwb.exec(color)) {
        const H2 = parseHueAngle(match[1]);
        const W2 = parseModernComponent(match[2], 1);
        const B2 = parseModernComponent(match[3], 1);
        const alpha = parseModernAlpha(match[4]);
        const [r2, g, bl2] = hwbToSrgb(H2 / 360, W2, B2);
        return rgbFloatToInt(r2, g, bl2, alpha);
      }
    }
    throw new Error(`invalid color string ${color} provided`);
  }
  var opacity = (c2) => {
    return (c2 >> 24 & 255) / 255;
  };
  var red = (c2) => {
    return c2 >> 16 & 255;
  };
  var green = (c2) => {
    return c2 >> 8 & 255;
  };
  var blue = (c2) => {
    return c2 & 255;
  };
  var rgbaColor = (r2, g, b2, alpha) => {
    return `rgba(${r2}, ${g}, ${b2}, ${alpha})`;
  };
  function processColor(color) {
    const normalizedColor = normalizeColor(color);
    return (normalizedColor << 24 | normalizedColor >>> 8) >>> 0;
  }
  var interpolateColorsRGB = (value, inputRange, colors, options) => {
    const [r2, g, b2, a2] = [red, green, blue, opacity].map((f2) => {
      const unrounded = interpolate(value, inputRange, colors.map((c2) => f2(c2)), {
        easing: options == null ? void 0 : options.easing,
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        posterize: options == null ? void 0 : options.posterize
      });
      if (f2 === opacity) {
        return Number(unrounded.toFixed(3));
      }
      return Math.round(unrounded);
    });
    return rgbaColor(r2, g, b2, a2);
  };
  var interpolateColors = (input, inputRange, outputRange, options) => {
    if (typeof input === "undefined") {
      throw new TypeError("input can not be undefined");
    }
    if (typeof inputRange === "undefined") {
      throw new TypeError("inputRange can not be undefined");
    }
    if (typeof outputRange === "undefined") {
      throw new TypeError("outputRange can not be undefined");
    }
    if (inputRange.length !== outputRange.length) {
      throw new TypeError("inputRange (" + inputRange.length + " values provided) and outputRange (" + outputRange.length + " values provided) must have the same length");
    }
    const processedOutputRange = outputRange.map((c2) => processColor(c2));
    return interpolateColorsRGB(input, inputRange, processedOutputRange, options);
  };
  var easingToFn = ({
    easing,
    forceSpringAllowTail
  }) => {
    switch (easing.type) {
      case "linear":
        return Easing.linear;
      case "step1":
        return Easing.step1;
      case "spring":
        return Easing.spring({
          allowTail: forceSpringAllowTail ?? easing.allowTail ?? void 0,
          damping: easing.damping,
          durationRestThreshold: easing.durationRestThreshold ?? void 0,
          mass: easing.mass,
          overshootClamping: easing.overshootClamping,
          stiffness: easing.stiffness
        });
      case "bezier":
        return bezier(easing.x1, easing.y1, easing.x2, easing.y2);
      default:
        throw new TypeError(`Unsupported easing: ${JSON.stringify(easing)}`);
    }
  };
  var interpolateKeyframedStatus = ({
    frame,
    forceSpringAllowTail,
    status
  }) => {
    const { keyframes, easing, clamping, interpolationFunction } = status;
    if (keyframes.length === 0) {
      return null;
    }
    const sortedKeyframes = [...keyframes].sort((a2, b2) => a2.frame - b2.frame);
    const inputRange = sortedKeyframes.map((k2) => k2.frame);
    const outputs = sortedKeyframes.map((k2) => k2.value);
    if (interpolationFunction === "interpolateColors") {
      if (!outputs.every((v2) => typeof v2 === "string")) {
        return null;
      }
      if (keyframes.length === 1) {
        return outputs[0];
      }
      try {
        return interpolateColors(frame, inputRange, outputs, {
          easing: easing.map((e) => easingToFn({ easing: e, forceSpringAllowTail })),
          posterize: status.posterize
        });
      } catch {
        return null;
      }
    }
    if (interpolationFunction !== "interpolate") {
      return null;
    }
    try {
      return interpolate(frame, inputRange, outputs, {
        easing: easing.map((e) => easingToFn({ easing: e, forceSpringAllowTail })),
        extrapolateLeft: clamping.left,
        extrapolateRight: clamping.right,
        output: status.output,
        posterize: status.posterize
      });
    } catch {
      return null;
    }
  };
  var getFrameInKeyframedStatusClock = ({
    frame,
    status
  }) => frame - (status.keyframeDisplayOffsetAdjustment ?? 0);
  var resolveDragOverrideValue = ({
    dragOverrideValue,
    frame
  }) => {
    if (dragOverrideValue === void 0) {
      return { type: "none" };
    }
    if (dragOverrideValue.type === "static") {
      return { type: "resolved", value: dragOverrideValue.value };
    }
    if (frame === null) {
      return { type: "none" };
    }
    const interpolated = interpolateKeyframedStatus({
      forceSpringAllowTail: null,
      frame: getFrameInKeyframedStatusClock({
        frame,
        status: dragOverrideValue.status
      }),
      status: dragOverrideValue.status
    });
    if (interpolated === null) {
      return { type: "none" };
    }
    return { type: "resolved", value: interpolated };
  };
  var getEffectiveVisualModeValue = ({
    propStatus,
    dragOverrideValue,
    defaultValue,
    frame = null,
    shouldResortToDefaultValueIfUndefined = false
  }) => {
    const dragOverride = resolveDragOverrideValue({
      dragOverrideValue,
      frame
    });
    if (dragOverride.type === "resolved" && dragOverride.value !== void 0) {
      return dragOverride.value;
    }
    if (propStatus.status === "keyframed") {
      if (frame !== null) {
        return interpolateKeyframedStatus({
          forceSpringAllowTail: null,
          frame: getFrameInKeyframedStatusClock({ frame, status: propStatus }),
          status: propStatus
        });
      }
      return shouldResortToDefaultValueIfUndefined ? defaultValue : void 0;
    }
    if (propStatus.codeValue === void 0 && shouldResortToDefaultValueIfUndefined) {
      return defaultValue;
    }
    return propStatus.codeValue;
  };
  var OverrideIdsToNodePathsGettersContext = reactExports.createContext({
    overrideIdToNodePathMappings: {}
  });
  var OverrideIdsToNodePathsSettersContext = reactExports.createContext({
    setOverrideIdToNodePath: () => {
      throw new Error("OverrideIdsToNodePathsSettersContext not initialized");
    }
  });
  var mergeOverrides = ({
    descriptor,
    propStatusOverrides,
    dragOverrides,
    frame
  }) => {
    if (!propStatusOverrides && !dragOverrides) {
      return { params: descriptor.params, effectKey: descriptor.effectKey };
    }
    const merged = {
      ...descriptor.params
    };
    if (propStatusOverrides) {
      for (const [key, value] of Object.entries(propStatusOverrides)) {
        if (value !== void 0) {
          merged[key] = value;
        }
      }
    }
    if (dragOverrides) {
      for (const [key, value] of Object.entries(dragOverrides)) {
        const resolved = resolveDragOverrideValue({
          dragOverrideValue: value,
          frame
        });
        if (resolved.type === "resolved") {
          merged[key] = resolved.value;
        }
      }
    }
    return {
      params: merged,
      effectKey: descriptor.definition.calculateKey(merged)
    };
  };
  var resolvePropStatusOverrides = (propStatus, frame) => {
    if (!propStatus) {
      return null;
    }
    const out = {};
    let hasAny = false;
    for (const [key, status] of Object.entries(propStatus)) {
      if (status.status === "static") {
        out[key] = status.codeValue;
        hasAny = true;
        continue;
      }
      if (status.status === "keyframed") {
        const value = interpolateKeyframedStatus({
          forceSpringAllowTail: null,
          frame,
          status
        });
        if (value !== null) {
          out[key] = value;
          hasAny = true;
        }
      }
    }
    return hasAny ? out : null;
  };
  var useMemoizedEffectDefinitions = (effects) => {
    const previousRef = reactExports.useRef(null);
    const definitions = effects.map((descriptor) => descriptor.definition);
    const previous = previousRef.current;
    const isSame = previous !== null && previous.definitions.length === definitions.length && previous.definitions.every((definition, i) => definition === definitions[i]);
    const controllers = isSame ? previous.controllers : effects.map((effect) => createRuntimeValueStore(effect.params));
    const stableDefinitions = isSame ? previous.definitions : definitions;
    reactExports.useLayoutEffect(() => {
      stableDefinitions.forEach((_definition, index) => {
        var _a;
        const snapshot = (_a = effects[index]) == null ? void 0 : _a.params;
        controllers[index].setSnapshot(snapshot);
      });
    }, [controllers, effects, stableDefinitions]);
    previousRef.current = { definitions: stableDefinitions, controllers };
    return Object.assign(stableDefinitions, {
      runtimeValues: controllers.map((controller) => controller.store)
    });
  };
  var getEffectPropStatusesCtx = ({
    propStatuses,
    nodePath,
    effectIndex
  }) => {
    const status = propStatuses[makeSequencePropsSubscriptionKey(nodePath)];
    if (!status) {
      return { type: "cannot-update-sequence", reason: "not-found" };
    }
    if (!status.canUpdate) {
      return { type: "cannot-update-sequence", reason: status.reason };
    }
    const effect = status.effects.find((e) => e.effectIndex === effectIndex);
    if (!effect) {
      return { type: "cannot-update-effect", reason: "not-found" };
    }
    if (!effect.canUpdate) {
      return { type: "cannot-update-effect", reason: effect.reason };
    }
    return { type: "can-update-effect", props: effect.props };
  };
  var getPropStatusesCtx = (propStatuses, nodePath) => {
    const status = propStatuses[makeSequencePropsSubscriptionKey(nodePath)];
    if (!status) {
      return;
    }
    if (!status.canUpdate) {
      return;
    }
    return status.props;
  };
  var useMemoizedEffects = ({
    effects,
    overrideId
  }) => {
    const previousRef = reactExports.useRef(null);
    const { propStatuses } = reactExports.useContext(VisualModePropStatusesContext);
    const { getEffectDragOverrides } = reactExports.useContext(VisualModeDragOverridesContext);
    const frame = useCurrentFrame();
    const { overrideIdToNodePathMappings } = reactExports.useContext(OverrideIdsToNodePathsGettersContext);
    const previous = previousRef.current;
    const nodePath = overrideId ? overrideIdToNodePathMappings[overrideId] ?? null : null;
    const resolved = effects.map((descriptor, index) => {
      if (nodePath === null) {
        return {
          descriptor,
          params: descriptor.params,
          effectKey: descriptor.effectKey
        };
      }
      const effectStatus = getEffectPropStatusesCtx({
        propStatuses,
        nodePath,
        effectIndex: index
      });
      const propStatusOverrides = effectStatus.type === "can-update-effect" ? resolvePropStatusOverrides(effectStatus.props, frame) : null;
      const dragOverridesMap = getEffectDragOverrides(nodePath, index);
      const dragOverrides = Object.keys(dragOverridesMap).length === 0 ? null : dragOverridesMap;
      const { params, effectKey } = mergeOverrides({
        descriptor,
        propStatusOverrides,
        dragOverrides,
        frame
      });
      return { descriptor, params, effectKey };
    });
    const isSame = previous !== null && previous.length === resolved.length && previous.every((p2, i) => p2.definition === resolved[i].descriptor.definition && p2.effectKey === resolved[i].effectKey);
    if (isSame) {
      return previous;
    }
    const next = resolved.map(({ descriptor, params, effectKey }) => ({
      definition: descriptor.definition,
      effectKey,
      params,
      memoized: true
    }));
    previousRef.current = next;
    return next;
  };
  var flattenActiveSchema = (schema, resolve) => {
    const out = {};
    for (const key of Object.keys(schema)) {
      const field = schema[key];
      if (field.type === "hidden") {
        continue;
      } else if (field.type === "enum") {
        out[key] = field;
        const current = resolve(key) ?? field.default;
        const variant = field.variants[current];
        if (variant) {
          Object.assign(out, flattenActiveSchema(variant, resolve));
        }
      } else {
        out[key] = field;
      }
    }
    return out;
  };
  var getFlatSchemaWithAllKeys = (schema) => {
    const out = {};
    const addKey = (key, field) => {
      if (key in out) {
        return;
      }
      out[key] = field;
    };
    for (const key of Object.keys(schema)) {
      const field = schema[key];
      addKey(key, field);
      if (field.type === "enum") {
        for (const variant of Object.values(field.variants)) {
          const flatVariant = getFlatSchemaWithAllKeys(variant);
          for (const variantKey of Object.keys(flatVariant)) {
            addKey(variantKey, flatVariant[variantKey]);
          }
        }
      }
    }
    return out;
  };
  var findPropsToDelete = ({
    schema,
    key,
    value
  }) => {
    const fieldSchema = schema[key];
    if (!fieldSchema) {
      throw new Error("Key " + JSON.stringify(key) + " not found in schema");
    }
    if (typeof value !== "string") {
      throw new Error("Value must be a string, but is " + JSON.stringify(value));
    }
    if (fieldSchema.type !== "enum") {
      throw new Error("Key " + JSON.stringify(key) + " is not an enum");
    }
    const currentVariant = fieldSchema.variants[value];
    if (!currentVariant) {
      throw new Error("Value for " + JSON.stringify(key) + " must be one of " + Object.keys(fieldSchema.variants).map((v2) => JSON.stringify(v2)).join(", ") + ", got " + JSON.stringify(value));
    }
    const otherVariants = Object.keys(fieldSchema.variants).filter((v2) => v2 !== value);
    const otherKeys = /* @__PURE__ */ new Set();
    for (const variant of otherVariants) {
      const otherVariant = fieldSchema.variants[variant];
      const keys = Object.keys(otherVariant);
      for (const k2 of keys) {
        otherKeys.add(k2);
      }
    }
    return [...otherKeys];
  };
  var DEFAULT_LINEAR_EASING = {
    type: "linear"
  };
  var getEasingIndexToDuplicate = ({
    insertedKeyframeIndex,
    easingLength,
    keyframeCount
  }) => {
    const isSplittingExistingSegment = insertedKeyframeIndex > 0 && insertedKeyframeIndex < keyframeCount - 1;
    if (!isSplittingExistingSegment || easingLength === 0) {
      return null;
    }
    return Math.min(insertedKeyframeIndex - 1, easingLength - 1);
  };
  var makeStaticDragOverride = (value) => {
    return { type: "static", value };
  };
  var makeKeyframedDragOverride = ({
    status,
    frame,
    value,
    defaultEasing: defaultEasing2 = DEFAULT_LINEAR_EASING
  }) => {
    const existingIndex = status.keyframes.findIndex((keyframe) => keyframe.frame === frame);
    const keyframes = existingIndex === -1 ? [...status.keyframes, { frame, value }].sort((first, second) => first.frame - second.frame) : status.keyframes.map((keyframe, index) => index === existingIndex ? { frame, value } : keyframe);
    const easing = [...status.easing];
    if (existingIndex === -1) {
      const insertedKeyframeIndex = keyframes.findIndex((keyframe) => keyframe.frame === frame);
      const easingIndexToDuplicate = getEasingIndexToDuplicate({
        insertedKeyframeIndex,
        easingLength: easing.length,
        keyframeCount: keyframes.length
      });
      const easingToDuplicate = easingIndexToDuplicate === null ? defaultEasing2 : easing[easingIndexToDuplicate];
      easing.splice(insertedKeyframeIndex, 0, easingToDuplicate);
    }
    while (easing.length < keyframes.length - 1) {
      easing.push(defaultEasing2);
    }
    if (easing.length > keyframes.length - 1) {
      easing.length = keyframes.length - 1;
    }
    return {
      type: "keyframed",
      status: {
        ...status,
        keyframes,
        easing
      }
    };
  };
  var getStaticDragOverrideValue = (dragOverrideValue) => {
    if ((dragOverrideValue == null ? void 0 : dragOverrideValue.type) !== "static") {
      return;
    }
    return dragOverrideValue.value;
  };
  var isKeyframedStatus = (status) => {
    return status !== null && status.status === "keyframed";
  };
  var findFieldInSchema = (schema, key) => {
    if (key in schema) {
      return schema[key];
    }
    for (const field of Object.values(schema)) {
      if (field.type !== "enum") {
        continue;
      }
      for (const variant of Object.values(field.variants)) {
        const found = findFieldInSchema(variant, key);
        if (found) {
          return found;
        }
      }
    }
    return;
  };
  var computeEffectiveSchemaValuesDotNotation = ({
    schema,
    currentValue,
    overrideValues,
    propStatus,
    frame
  }) => {
    var _a;
    const merged = {};
    const propsToDelete = /* @__PURE__ */ new Set();
    for (const key of Object.keys(currentValue)) {
      const status = (propStatus == null ? void 0 : propStatus[key]) ?? null;
      const field = findFieldInSchema(schema, key);
      if ((field == null ? void 0 : field.type) === "hidden") {
        continue;
      }
      let value;
      if (status === null) {
        value = currentValue[key];
      } else if (isKeyframedStatus(status)) {
        if ((field == null ? void 0 : field.type) === "array" || (field == null ? void 0 : field.keyframable) === false) {
          value = currentValue[key];
        } else {
          const dragOverride = resolveDragOverrideValue({
            dragOverrideValue: overrideValues[key],
            frame
          });
          if (dragOverride.type === "resolved") {
            value = dragOverride.value;
          } else if (frame !== null) {
            const interpolated = interpolateKeyframedStatus({
              forceSpringAllowTail: null,
              frame: getFrameInKeyframedStatusClock({ frame, status }),
              status
            });
            value = interpolated ?? currentValue[key];
          } else {
            value = currentValue[key];
          }
        }
      } else if (status.status === "computed") {
        value = currentValue[key];
      } else {
        value = getEffectiveVisualModeValue({
          propStatus: status,
          dragOverrideValue: overrideValues[key],
          defaultValue: field == null ? void 0 : field.default,
          frame,
          shouldResortToDefaultValueIfUndefined: false
        });
      }
      if ((field == null ? void 0 : field.type) === "asset" && typeof value === "string" && value.startsWith(FILE_TOKEN)) {
        value = resolveFileTokenToUrl(value);
      }
      if (value === void 0) {
        propsToDelete.add(key);
      }
      merged[key] = value;
    }
    for (const key of Object.keys(overrideValues)) {
      if (((_a = schema[key]) == null ? void 0 : _a.type) === "enum") {
        const propsToDeleteForKey = findPropsToDelete({
          schema,
          key,
          value: merged[key]
        });
        for (const propToDelete of propsToDeleteForKey) {
          propsToDelete.add(propToDelete);
        }
      }
    }
    return { merged, propsToDelete };
  };
  var getNestedValue = (obj, key) => {
    const parts = key.split(".");
    let current = obj;
    for (const part of parts) {
      if (current === null || current === void 0 || typeof current !== "object")
        return;
      current = current[part];
    }
    return current;
  };
  var getRuntimeValueForSchemaKey = ({
    flatSchema,
    key,
    props
  }) => {
    var _a;
    const value = getNestedValue(props, key);
    if (((_a = flatSchema[key]) == null ? void 0 : _a.type) === "text-content" && typeof value !== "string") {
      return;
    }
    return value;
  };
  var readValuesFromProps = (props, keys, flatSchema) => {
    const out = {};
    for (const key of keys) {
      out[key] = flatSchema ? getRuntimeValueForSchemaKey({ flatSchema, key, props }) : getNestedValue(props, key);
    }
    return out;
  };
  var selectActiveKeys = (schema, values) => {
    return Object.keys(flattenActiveSchema(schema, (key) => values[key]));
  };
  var mergeValues = ({
    flatSchema,
    props,
    valuesDotNotation,
    schemaKeys,
    propsToDelete
  }) => {
    var _a;
    const merged = { ...props };
    for (const key of schemaKeys) {
      const value = valuesDotNotation[key];
      if (((_a = flatSchema[key]) == null ? void 0 : _a.type) === "text-content" && value === void 0) {
        continue;
      }
      const parts = key.split(".");
      if (parts.length === 1) {
        merged[key] = value;
        continue;
      }
      let current = merged;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (typeof current[part] === "object" && current[part] !== null) {
          current[part] = { ...current[part] };
        } else {
          current[part] = {};
        }
        current = current[part];
      }
      current[parts[parts.length - 1]] = value;
    }
    const propsToDeleteWithoutTextContent = new Set([...propsToDelete].filter((key) => {
      var _a2;
      return !(((_a2 = flatSchema[key]) == null ? void 0 : _a2.type) === "text-content" && valuesDotNotation[key] === void 0);
    }));
    deleteNestedKey(merged, propsToDeleteWithoutTextContent);
    return merged;
  };
  var stackToOverrideMap = {};
  var DisableInteractivityContext = reactExports.createContext(false);
  var DisableInteractivityProvider = ({ children }) => {
    return React14.createElement(DisableInteractivityContext.Provider, { value: true }, children);
  };
  var withInteractivitySchema = ({
    Component,
    componentName,
    componentIdentity = null,
    schema,
    supportsEffects
  }) => {
    const schemaWithSequenceName = extendSchemaWithSequenceName(schema);
    const flatSchema = getFlatSchemaWithAllKeys(schemaWithSequenceName);
    const flatKeys = Object.keys(flatSchema);
    const Wrapped = reactExports.forwardRef((props, ref) => {
      const {
        _remotionInternalStack: internalStack,
        ...propsWithoutInternalStack
      } = props;
      const cleanProps = propsWithoutInternalStack;
      const env = useRemotionEnvironment();
      const canUseRemotionHooks = reactExports.useContext(CanUseRemotionHooks);
      const disableInteractivity = reactExports.useContext(DisableInteractivityContext);
      if (!env.isStudio || env.isRendering || !canUseRemotionHooks || disableInteractivity) {
        return React14.createElement(Component, {
          ...cleanProps,
          controls: null,
          ref
        });
      }
      const { propStatuses } = reactExports.useContext(VisualModePropStatusesContext);
      const { getDragOverrides } = reactExports.useContext(VisualModeDragOverridesContext);
      const nodePathMapping = reactExports.useContext(OverrideIdsToNodePathsGettersContext);
      const frame = useCurrentFrame();
      const videoConfig = useUnsafeVideoConfig();
      const durationInFrames = videoConfig == null ? void 0 : videoConfig.durationInFrames;
      const fps = videoConfig == null ? void 0 : videoConfig.fps;
      const height = videoConfig == null ? void 0 : videoConfig.height;
      const width = videoConfig == null ? void 0 : videoConfig.width;
      const videoConfigValues = reactExports.useMemo(() => durationInFrames === void 0 || fps === void 0 || height === void 0 || width === void 0 ? null : {
        durationInFrames,
        fps,
        height,
        width
      }, [durationInFrames, fps, height, width]);
      if (cleanProps.controls) {
        const passedControls = cleanProps.controls;
        if (getStackForControls(passedControls) === null) {
          setStackForControls(passedControls, internalStack);
        }
        return React14.createElement(Component, {
          ...cleanProps,
          ref
        });
      }
      const [overrideId] = reactExports.useState(() => {
        if (!internalStack) {
          return String(Math.random());
        }
        const existingOverrideId = stackToOverrideMap[internalStack];
        if (existingOverrideId) {
          return existingOverrideId;
        }
        const newOverrideId = String(Math.random());
        stackToOverrideMap[internalStack] = newOverrideId;
        return newOverrideId;
      });
      const nodePath = env.isReadOnlyStudio ? null : nodePathMapping.overrideIdToNodePathMappings[overrideId] ?? null;
      const runtimeValues = flatKeys.map((key) => getRuntimeValueForSchemaKey({
        flatSchema,
        key,
        props: cleanProps
      }));
      const currentRuntimeValueDotNotation = reactExports.useMemo(() => readValuesFromProps(cleanProps, flatKeys, flatSchema), runtimeValues);
      const [runtimeValueStore] = reactExports.useState(() => createRuntimeValueStore(currentRuntimeValueDotNotation));
      reactExports.useLayoutEffect(() => {
        runtimeValueStore.setSnapshot(currentRuntimeValueDotNotation);
      }, [currentRuntimeValueDotNotation, runtimeValueStore]);
      const controls = reactExports.useMemo(() => {
        return {
          schema: schemaWithSequenceName,
          currentRuntimeValueDotNotation,
          runtimeValues: runtimeValueStore.store,
          videoConfigValues,
          overrideId,
          supportsEffects,
          componentIdentity,
          componentName
        };
      }, [
        currentRuntimeValueDotNotation,
        overrideId,
        runtimeValueStore.store,
        videoConfigValues
      ]);
      setStackForControls(controls, internalStack);
      const { merged: valuesDotNotation, propsToDelete } = reactExports.useMemo(() => {
        return computeEffectiveSchemaValuesDotNotation({
          schema: schemaWithSequenceName,
          currentValue: currentRuntimeValueDotNotation,
          overrideValues: nodePath === null ? {} : getDragOverrides(nodePath),
          propStatus: nodePath === null ? void 0 : getPropStatusesCtx(propStatuses, nodePath),
          frame
        });
      }, [
        currentRuntimeValueDotNotation,
        getDragOverrides,
        nodePath,
        propStatuses,
        frame
      ]);
      const activeKeys = selectActiveKeys(schemaWithSequenceName, valuesDotNotation);
      const mergedProps = mergeValues({
        flatSchema,
        props: cleanProps,
        valuesDotNotation,
        schemaKeys: activeKeys,
        propsToDelete
      });
      return React14.createElement(Component, {
        ...mergedProps,
        controls,
        ref
      });
    });
    Wrapped.displayName = `withInteractivitySchema(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
  };
  var EMPTY_EFFECTS = [];
  var RegularSequenceRefForwardingFunction = ({
    from = 0,
    trimBefore = 0,
    freeze,
    durationInFrames = Infinity,
    children,
    name,
    height,
    width,
    showInTimeline = true,
    hidden = false,
    controls,
    _remotionInternalEffects,
    _remotionInternalLoopDisplay: loopDisplay,
    _remotionInternalStack: stack,
    _remotionInternalDocumentationLink: documentationLink,
    _remotionInternalSingleChildComponent: singleChildComponent,
    _remotionInternalPremountDisplay: premountDisplay,
    _remotionInternalPostmountDisplay: postmountDisplay,
    _remotionInternalIsMedia: isMedia,
    outlineRef: passedRefForOutline,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    ...other
  }, ref) => {
    const { layout = "absolute-fill" } = other;
    const [id2] = reactExports.useState(() => String(Math.random()));
    const parentSequence = reactExports.useContext(SequenceContext);
    const cumulatedFrom = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
    if (layout !== "absolute-fill" && layout !== "none") {
      throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${layout}`);
    }
    const cropProps = { cropLeft, cropRight, cropTop, cropBottom };
    const hasCropProp = Object.values(cropProps).some((value) => value !== void 0);
    if (layout === "none" && hasCropProp) {
      throw new TypeError('The cropLeft, cropRight, cropTop and cropBottom props of <Sequence /> are only supported with layout="absolute-fill".');
    }
    validateSequenceCrop(cropProps);
    const {
      left: resolvedCropLeft,
      right: resolvedCropRight,
      top: resolvedCropTop,
      bottom: resolvedCropBottom
    } = resolveSequenceCrop(cropProps);
    if (layout === "none" && typeof other.style !== "undefined") {
      throw new TypeError('If layout="none", you may not pass a style. Passed: ' + JSON.stringify(other.style));
    }
    if (typeof durationInFrames !== "number") {
      throw new TypeError(`You passed to durationInFrames an argument of type ${typeof durationInFrames}, but it must be a number.`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`durationInFrames must be positive, but got ${durationInFrames}`);
    }
    if (typeof from !== "number") {
      throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof from}, but it must be a number.`);
    }
    if (!Number.isFinite(from)) {
      throw new TypeError(`The "from" prop of a sequence must be finite, but got ${from}.`);
    }
    if (typeof trimBefore !== "number") {
      throw new TypeError(`You passed to the "trimBefore" prop of your <Sequence> an argument of type ${typeof trimBefore}, but it must be a number.`);
    }
    if (trimBefore < 0) {
      throw new TypeError(`The "trimBefore" prop of <Sequence /> must be greater than or equal to 0, but got ${trimBefore}.`);
    }
    if (Number.isNaN(trimBefore)) {
      throw new TypeError('The "trimBefore" prop of <Sequence /> must be a real number, but it is NaN.');
    }
    if (!Number.isFinite(trimBefore)) {
      throw new TypeError(`The "trimBefore" prop of <Sequence /> must be finite, but it is ${trimBefore}.`);
    }
    if (typeof freeze !== "undefined" && freeze !== null) {
      if (typeof freeze !== "number") {
        throw new TypeError(`The "freeze" prop of <Sequence /> must be a number, but is of type ${typeof freeze}.`);
      }
      if (Number.isNaN(freeze)) {
        throw new TypeError(`The "freeze" prop of <Sequence /> must be a real number, but it is NaN.`);
      }
      if (!Number.isFinite(freeze)) {
        throw new TypeError(`The "freeze" prop of <Sequence /> must be finite, but it is ${freeze}.`);
      }
    }
    const absoluteFrame = useTimelinePosition();
    const videoConfig = useVideoConfig();
    const effectiveRelativeFrom = from - trimBefore;
    const absoluteFrom = ((parentSequence == null ? void 0 : parentSequence.absoluteFrom) ?? 0) + effectiveRelativeFrom;
    const parentSequenceDuration = parentSequence ? Math.min(parentSequence.durationInFrames - effectiveRelativeFrom, durationInFrames) : durationInFrames;
    const actualDurationInFrames = Math.max(0, Math.min(videoConfig.durationInFrames - from, parentSequenceDuration));
    const sequenceRegistrationEnabled = reactExports.useContext(SequenceRegistrationContext);
    const wrapperRefForOutline = reactExports.useRef(null);
    const refForOutline = other.layout === "none" ? passedRefForOutline ?? null : passedRefForOutline ?? wrapperRefForOutline;
    const premounting = reactExports.useMemo(() => {
      return (parentSequence == null ? void 0 : parentSequence.premounting) || Boolean(other._remotionInternalIsPremounting);
    }, [other._remotionInternalIsPremounting, parentSequence == null ? void 0 : parentSequence.premounting]);
    const postmounting = reactExports.useMemo(() => {
      return (parentSequence == null ? void 0 : parentSequence.postmounting) || Boolean(other._remotionInternalIsPostmounting);
    }, [other._remotionInternalIsPostmounting, parentSequence == null ? void 0 : parentSequence.postmounting]);
    const currentSequenceStart = cumulatedFrom + effectiveRelativeFrom;
    const parentSequenceStart = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
    const parentFirstFrame = parentSequence ? parentSequenceStart - parentSequence.cumulatedNegativeFrom : 0;
    const firstFrame = Math.max(0, parentFirstFrame, currentSequenceStart);
    const cumulatedNegativeFrom = currentSequenceStart - firstFrame;
    const contextValue = reactExports.useMemo(() => {
      return {
        absoluteFrom,
        cumulatedFrom,
        relativeFrom: effectiveRelativeFrom,
        cumulatedNegativeFrom,
        durationInFrames: actualDurationInFrames,
        parentFrom: (parentSequence == null ? void 0 : parentSequence.relativeFrom) ?? 0,
        id: id2,
        height: height ?? (parentSequence == null ? void 0 : parentSequence.height) ?? null,
        width: width ?? (parentSequence == null ? void 0 : parentSequence.width) ?? null,
        premounting,
        postmounting,
        premountDisplay: premountDisplay ?? null,
        postmountDisplay: postmountDisplay ?? null
      };
    }, [
      cumulatedFrom,
      absoluteFrom,
      effectiveRelativeFrom,
      actualDurationInFrames,
      parentSequence,
      id2,
      height,
      width,
      premounting,
      postmounting,
      premountDisplay,
      postmountDisplay,
      cumulatedNegativeFrom
    ]);
    const timelineClipName = reactExports.useMemo(() => {
      return name ?? "";
    }, [name]);
    const resolvedDocumentationLink = documentationLink ?? "https://www.remotion.dev/docs/sequence";
    const env = useRemotionEnvironment();
    const isInsideSeries = reactExports.useContext(IsInsideSeriesContext);
    const stackRef = reactExports.useRef(null);
    stackRef.current = controls ? getStackForControls(controls) ?? stack ?? null : stack ?? null;
    const registeredFrozenFrame = typeof freeze === "number" ? freeze : null;
    const registeredTrimBefore = trimBefore === 0 ? null : trimBefore;
    const parentCumulatedNegativeFrom = (parentSequence == null ? void 0 : parentSequence.cumulatedNegativeFrom) ?? 0;
    const startMediaFrom = isMedia && isMedia.type !== "image" ? isMedia.data.startMediaFrom + parentCumulatedNegativeFrom - cumulatedNegativeFrom : null;
    const mediaFrameAtSequenceZero = isMedia && isMedia.type !== "image" ? isMedia.data.startMediaFrom + parentCumulatedNegativeFrom : null;
    const frozenMediaFrame = isMedia && isMedia.type !== "image" && mediaFrameAtSequenceZero !== null ? registeredFrozenFrame === null ? null : mediaFrameAtSequenceZero + (loopDisplay ? registeredFrozenFrame % loopDisplay.durationInFrames : registeredFrozenFrame) * isMedia.data.playbackRate : null;
    const controlsSchema = controls == null ? void 0 : controls.schema;
    const controlsRuntimeValues = controls == null ? void 0 : controls.runtimeValues;
    const controlsOverrideId = controls == null ? void 0 : controls.overrideId;
    const controlsSupportsEffects = controls == null ? void 0 : controls.supportsEffects;
    const controlsComponentIdentity = controls == null ? void 0 : controls.componentIdentity;
    const controlsComponentName = controls == null ? void 0 : controls.componentName;
    const controlsVideoConfigValues = controls == null ? void 0 : controls.videoConfigValues;
    const effectRuntimeValues = reactExports.useMemo(() => (_remotionInternalEffects == null ? void 0 : _remotionInternalEffects.runtimeValues) ?? null, [_remotionInternalEffects]);
    const registrationControls = reactExports.useMemo(() => {
      if (controlsSchema === void 0 || controlsRuntimeValues === void 0 || controlsOverrideId === void 0 || controlsSupportsEffects === void 0 || controlsComponentIdentity === void 0 || controlsComponentName === void 0 || controlsVideoConfigValues === void 0) {
        return null;
      }
      return {
        schema: controlsSchema,
        runtimeValues: controlsRuntimeValues,
        overrideId: controlsOverrideId,
        supportsEffects: controlsSupportsEffects,
        componentIdentity: controlsComponentIdentity,
        componentName: controlsComponentName,
        videoConfigValues: controlsVideoConfigValues
      };
    }, [
      controlsComponentIdentity,
      controlsComponentName,
      controlsVideoConfigValues,
      controlsOverrideId,
      controlsRuntimeValues,
      controlsSchema,
      controlsSupportsEffects
    ]);
    const getSequenceForRegistration = reactExports.useCallback(() => {
      if (isMedia) {
        if (isMedia.type === "image") {
          return {
            type: "image",
            controls: registrationControls,
            effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
            effectRuntimeValues,
            displayName: timelineClipName,
            documentationLink: resolvedDocumentationLink,
            duration: actualDurationInFrames,
            from,
            trimBefore: registeredTrimBefore,
            id: id2,
            loopDisplay,
            parent: (parentSequence == null ? void 0 : parentSequence.id) ?? null,
            postmountDisplay: postmountDisplay ?? null,
            premountDisplay: premountDisplay ?? null,
            showInTimeline,
            timelineOrder: null,
            src: isMedia.src,
            getStack: () => stackRef.current,
            refForOutline: refForOutline ?? null,
            isInsideSeries,
            frozenFrame: registeredFrozenFrame,
            singleChildComponent: singleChildComponent ?? null
          };
        }
        return {
          type: isMedia.type,
          controls: registrationControls,
          effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
          effectRuntimeValues,
          displayName: timelineClipName,
          documentationLink: resolvedDocumentationLink,
          doesVolumeChange: isMedia.data.doesVolumeChange,
          duration: actualDurationInFrames,
          from,
          trimBefore: registeredTrimBefore,
          id: id2,
          loopDisplay,
          parent: (parentSequence == null ? void 0 : parentSequence.id) ?? null,
          playbackRate: isMedia.data.playbackRate,
          postmountDisplay: postmountDisplay ?? null,
          premountDisplay: premountDisplay ?? null,
          showInTimeline,
          timelineOrder: null,
          src: isMedia.data.src,
          getStack: () => stackRef.current,
          startMediaFrom: startMediaFrom ?? isMedia.data.startMediaFrom,
          mediaFrameAtSequenceZero,
          volume: isMedia.data.volumes,
          muted: isMedia.data.muted,
          refForOutline: refForOutline ?? null,
          isInsideSeries,
          frozenFrame: registeredFrozenFrame,
          frozenMediaFrame,
          singleChildComponent: singleChildComponent ?? null
        };
      }
      return {
        from,
        trimBefore: registeredTrimBefore,
        duration: actualDurationInFrames,
        id: id2,
        displayName: timelineClipName,
        documentationLink: resolvedDocumentationLink,
        parent: (parentSequence == null ? void 0 : parentSequence.id) ?? null,
        type: "sequence",
        showInTimeline,
        timelineOrder: null,
        loopDisplay,
        getStack: () => stackRef.current,
        premountDisplay: premountDisplay ?? null,
        postmountDisplay: postmountDisplay ?? null,
        controls: registrationControls,
        effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
        effectRuntimeValues,
        refForOutline: refForOutline ?? null,
        isInsideSeries,
        frozenFrame: registeredFrozenFrame,
        singleChildComponent: singleChildComponent ?? null
      };
    }, [
      id2,
      timelineClipName,
      parentSequence == null ? void 0 : parentSequence.id,
      actualDurationInFrames,
      from,
      registeredTrimBefore,
      showInTimeline,
      loopDisplay,
      premountDisplay,
      postmountDisplay,
      registrationControls,
      _remotionInternalEffects,
      effectRuntimeValues,
      isMedia,
      resolvedDocumentationLink,
      refForOutline,
      isInsideSeries,
      registeredFrozenFrame,
      startMediaFrom,
      mediaFrameAtSequenceZero,
      frozenMediaFrame,
      singleChildComponent
    ]);
    useSequenceRegistration({
      getSequence: env.isStudio || sequenceRegistrationEnabled ? getSequenceForRegistration : null,
      id: id2
    });
    const endThreshold = Math.ceil(cumulatedFrom + from + durationInFrames - 1);
    const content2 = absoluteFrame < cumulatedFrom + from ? null : absoluteFrame > endThreshold ? null : children;
    const frozenContent = content2 === null || typeof freeze === "undefined" || freeze === null ? content2 : /* @__PURE__ */ jsxRuntimeExports.jsx(Freeze, {
      frame: freeze,
      children: content2
    });
    const styleIfThere = other.layout === "none" ? void 0 : other.style;
    const cropClipPath = getSequenceCropClipPath({
      left: resolvedCropLeft,
      right: resolvedCropRight,
      top: resolvedCropTop,
      bottom: resolvedCropBottom,
      style: styleIfThere
    });
    const sequenceRef = reactExports.useCallback((node) => {
      wrapperRefForOutline.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    const defaultStyle = reactExports.useMemo(() => {
      return {
        flexDirection: void 0,
        ...width ? { width } : {},
        ...height ? { height } : {},
        ...styleIfThere ?? {},
        ...cropClipPath ? {
          clipPath: cropClipPath
        } : {}
      };
    }, [cropClipPath, height, styleIfThere, width]);
    if (ref !== null && layout === "none") {
      throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');
    }
    if (hidden) {
      return env.isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceOrderMarker, {
        sequenceId: id2,
        children: null
      }) : null;
    }
    const sequence = /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceContext.Provider, {
      value: contextValue,
      children: frozenContent === null ? null : other.layout === "none" ? frozenContent : /* @__PURE__ */ jsxRuntimeExports.jsx(AbsoluteFillElement, {
        ref: sequenceRef,
        style: defaultStyle,
        className: other.className,
        children: frozenContent
      })
    });
    return env.isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceOrderMarker, {
      sequenceId: id2,
      children: sequence
    }) : sequence;
  };
  var RegularSequence = reactExports.forwardRef(RegularSequenceRefForwardingFunction);
  var PremountedPostmountedSequenceRefForwardingFunction = (props, ref) => {
    if (props.layout === "none") {
      throw new Error('`<Sequence>` with `premountFor` and `postmountFor` props does not support layout="none"');
    }
    const {
      style: passedStyle,
      from = 0,
      durationInFrames = Infinity,
      premountFor = 0,
      postmountFor = 0,
      styleWhilePremounted,
      styleWhilePostmounted,
      ...otherProps
    } = props;
    const {
      freezeFrame,
      isPremountingOrPostmounting,
      postmountingActive,
      premountingActive,
      premountingStyle
    } = usePremounting({
      from,
      durationInFrames,
      premountFor,
      postmountFor,
      style: passedStyle ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "opacity"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceInner, {
        ref,
        from,
        durationInFrames,
        style: premountingStyle ?? void 0,
        _remotionInternalPremountDisplay: premountFor,
        _remotionInternalPostmountDisplay: postmountFor,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        ...otherProps
      })
    });
  };
  var PremountedPostmountedSequence = reactExports.forwardRef(PremountedPostmountedSequenceRefForwardingFunction);
  var SequenceRefForwardingFunction = (props, ref) => {
    const env = useRemotionEnvironment();
    const { fps } = useVideoConfig();
    if (props.layout !== "none" && !env.isRendering) {
      const effectivePremountFor = props.premountFor;
      if (effectivePremountFor || props.postmountFor) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PremountedPostmountedSequence, {
          ref,
          ...props,
          premountFor: effectivePremountFor
        });
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RegularSequence, {
      ...props,
      ref
    });
  };
  var SequenceInner = reactExports.forwardRef(SequenceRefForwardingFunction);
  var SequenceWithoutSchema = SequenceInner;
  var Sequence = withInteractivitySchema({
    Component: SequenceInner,
    componentName: "<Sequence>",
    componentIdentity: "dev.remotion.remotion.Sequence",
    schema: sequenceSchema$1,
    supportsEffects: false
  });
  withInteractivitySchema({
    Component: SequenceInner,
    componentName: "<Sequence>",
    componentIdentity: null,
    schema: sequenceSchemaWithoutFrom,
    supportsEffects: false
  });
  var absoluteFillSchema = {
    ...baseSchema,
    ...transformSchema$1,
    ...backgroundSchema$1,
    ...borderSchema$1,
    ...borderRadiusSchema$1,
    ...textSchema,
    ...textContentSchema
  };
  var setRef = (ref, value) => {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  };
  var AbsoluteFillInner = ({
    ref,
    from,
    trimBefore,
    freeze,
    durationInFrames,
    hidden,
    name,
    showInTimeline,
    stack,
    controls,
    children,
    ...divProps
  }) => {
    const videoConfig = useUnsafeVideoConfig();
    const refForOutline = reactExports.useRef(null);
    const callbackRef = reactExports.useCallback((element) => {
      refForOutline.current = element;
      setRef(ref, element);
    }, [ref]);
    if (videoConfig === null) {
      return hidden ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(AbsoluteFillElement, {
        ref: callbackRef,
        ...divProps,
        children
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
      layout: "none",
      from: from ?? 0,
      trimBefore,
      freeze,
      durationInFrames: durationInFrames ?? Infinity,
      hidden,
      name: name ?? "<AbsoluteFill>",
      showInTimeline: showInTimeline ?? true,
      controls,
      _remotionInternalStack: stack,
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/absolute-fill",
      outlineRef: refForOutline,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AbsoluteFillElement, {
        ref: callbackRef,
        ...divProps,
        children
      })
    });
  };
  var AbsoluteFill = withInteractivitySchema({
    Component: AbsoluteFillInner,
    componentName: "<AbsoluteFill>",
    componentIdentity: "dev.remotion.remotion.AbsoluteFill",
    schema: absoluteFillSchema,
    supportsEffects: false
  });
  addSequenceStackTraces(AbsoluteFill);
  var useCropStyle = ({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    style: style2,
    componentName
  }) => {
    validateSequenceCrop({ cropLeft, cropRight, cropTop, cropBottom }, componentName);
    return reactExports.useMemo(() => {
      const cropClipPath = getSequenceCropClipPath({
        ...resolveSequenceCrop({ cropLeft, cropRight, cropTop, cropBottom }),
        style: style2
      });
      if (cropClipPath === null) {
        return style2;
      }
      return { ...style2, clipPath: cropClipPath };
    }, [cropBottom, cropLeft, cropRight, cropTop, style2]);
  };
  var calculateImageFit = (fit, imageSize, canvasSize) => {
    switch (fit) {
      case "fill": {
        return [
          0,
          0,
          imageSize.width,
          imageSize.height,
          0,
          0,
          canvasSize.width,
          canvasSize.height
        ];
      }
      case "contain": {
        const ratio = Math.min(canvasSize.width / imageSize.width, canvasSize.height / imageSize.height);
        const centerX = (canvasSize.width - imageSize.width * ratio) / 2;
        const centerY = (canvasSize.height - imageSize.height * ratio) / 2;
        return [
          0,
          0,
          imageSize.width,
          imageSize.height,
          centerX,
          centerY,
          imageSize.width * ratio,
          imageSize.height * ratio
        ];
      }
      case "cover": {
        const ratio = Math.max(canvasSize.width / imageSize.width, canvasSize.height / imageSize.height);
        const centerX = (canvasSize.width - imageSize.width * ratio) / 2;
        const centerY = (canvasSize.height - imageSize.height * ratio) / 2;
        return [
          0,
          0,
          imageSize.width,
          imageSize.height,
          centerX,
          centerY,
          imageSize.width * ratio,
          imageSize.height * ratio
        ];
      }
      default:
        throw new Error("Unknown fit: " + fit);
    }
  };
  var WEBGL_CONTEXT_DOCS_URL = "https://remotion.dev/docs/troubleshooting/webgl2-context";
  var webGlContextErrorMessage = (versionLabel, effectName) => `Failed to acquire ${versionLabel} context for ${effectName}. Pass --gl=angle when using the CLI, set chromiumOptions: { gl: "angle" } when using SSR APIs, or set "OpenGL render backend" to "angle" in the Advanced section when rendering in the Studio. See ${WEBGL_CONTEXT_DOCS_URL}`;
  var createWebGLContextError = (effectName) => new Error(webGlContextErrorMessage("WebGL", effectName));
  var createWebGL2ContextError = (effectName) => new Error(webGlContextErrorMessage("WebGL2", effectName));
  class CanvasPool {
    constructor(width, height) {
      __publicField(this, "width");
      __publicField(this, "height");
      __publicField(this, "pairs", /* @__PURE__ */ new Map());
      __publicField(this, "lostContexts", /* @__PURE__ */ new Set());
      this.width = width;
      this.height = height;
    }
    getPair(backend) {
      const existing = this.pairs.get(backend);
      if (existing) {
        return existing;
      }
      const pair = [
        this.allocateCanvas(backend),
        this.allocateCanvas(backend)
      ];
      this.pairs.set(backend, pair);
      return pair;
    }
    assertContextNotLost(canvas) {
      if (this.lostContexts.has(canvas)) {
        throw new Error("WebGL context was lost during canvas effect rendering. This typically happens in headless or memory-constrained environments (e.g. Remotion Lambda). Try reducing concurrency or increasing the Lambda function memory.");
      }
    }
    allocateCanvas(backend) {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      switch (backend) {
        case "2d": {
          const ctx = canvas.getContext("2d", {
            colorSpace: "srgb"
          });
          if (!ctx) {
            throw new Error("Failed to acquire 2D context for canvas effect");
          }
          return canvas;
        }
        case "webgl2": {
          const ctx = canvas.getContext("webgl2", {
            premultipliedAlpha: true,
            alpha: true,
            preserveDrawingBuffer: true
          });
          if (!ctx) {
            throw createWebGL2ContextError("canvas effect");
          }
          canvas.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            this.lostContexts.add(canvas);
          });
          canvas.addEventListener("webglcontextrestored", () => {
            this.lostContexts.delete(canvas);
          });
          ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
          return canvas;
        }
        case "webgpu": {
          if (typeof navigator === "undefined" || !("gpu" in navigator)) {
            throw new Error("WebGPU is not available in this environment for canvas effect");
          }
          return canvas;
        }
        default: {
          const exhaustive = backend;
          throw new Error(`Unknown effect backend: ${exhaustive}`);
        }
      }
    }
  }
  var groupByBackend = (effects) => {
    const runs = [];
    let current = [];
    let currentBackend = null;
    for (const eff of effects) {
      const { backend } = eff.definition;
      if (currentBackend === null || backend === currentBackend) {
        current.push(eff);
        currentBackend = backend;
      } else {
        runs.push({ backend: currentBackend, effects: current });
        current = [eff];
        currentBackend = backend;
      }
    }
    if (currentBackend !== null && current.length > 0) {
      runs.push({ backend: currentBackend, effects: current });
    }
    return runs;
  };
  var devicePromise = null;
  var getGpuDevice = () => {
    if (devicePromise) {
      return devicePromise;
    }
    devicePromise = (async () => {
      if (typeof navigator === "undefined" || !("gpu" in navigator)) {
        throw new Error("WebGPU is not available in this environment");
      }
      const { gpu } = navigator;
      const adapter = await gpu.requestAdapter();
      if (!adapter) {
        throw new Error("No WebGPU adapter available");
      }
      return adapter.requestDevice();
    })();
    return devicePromise;
  };
  var createEffectChainState = (width, height) => ({
    pool: new CanvasPool(width, height),
    setupCache: /* @__PURE__ */ new WeakMap(),
    cleanupRegistry: [],
    currentRunId: 0
  });
  var cleanupEffectChainState = (state) => {
    state.currentRunId++;
    for (const entry of state.cleanupRegistry) {
      entry.definition.cleanup(entry.state);
    }
  };
  var ensureSetup = (state, def, target) => {
    const widened = def;
    let cacheForDefinition = state.setupCache.get(widened);
    if (!cacheForDefinition) {
      cacheForDefinition = /* @__PURE__ */ new WeakMap();
      state.setupCache.set(widened, cacheForDefinition);
    }
    if (cacheForDefinition.has(target)) {
      return cacheForDefinition.get(target);
    }
    const setupState = def.setup(target);
    cacheForDefinition.set(target, setupState);
    state.cleanupRegistry.push({ definition: widened, state: setupState });
    return setupState;
  };
  var runEffectChain = async ({
    state,
    source,
    effects,
    output,
    width,
    height
  }) => {
    const runId = ++state.currentRunId;
    const isCancelled = () => state.currentRunId !== runId;
    const enabledEffects = effects.filter((e) => !e.params.disabled);
    const runs = groupByBackend(enabledEffects);
    let currentImage = source;
    let lastTarget = null;
    if (runs.length === 0) {
      if (source === output) {
        return true;
      }
      const ctx = output.getContext("2d");
      if (!ctx) {
        throw new Error("Failed to acquire 2D context for output canvas");
      }
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(currentImage, 0, 0, width, height);
      return true;
    }
    let needsGpuDevice = false;
    for (const run of runs) {
      if (run.backend === "webgpu") {
        needsGpuDevice = true;
        break;
      }
    }
    const gpuDevice = needsGpuDevice ? await getGpuDevice() : null;
    if (isCancelled()) {
      return false;
    }
    let flipWebGLSourceY = true;
    for (let runIndex = 0; runIndex < runs.length; runIndex++) {
      const run = runs[runIndex];
      const [a2, b2] = state.pool.getPair(run.backend);
      let dst = a2;
      for (const eff of run.effects) {
        const def = eff.definition;
        const setupState = ensureSetup(state, def, dst);
        def.apply({
          source: currentImage,
          target: dst,
          state: setupState,
          params: eff.params,
          width,
          height,
          gpuDevice,
          flipSourceY: run.backend === "webgl2" ? flipWebGLSourceY : false
        });
        if (run.backend === "webgl2") {
          flipWebGLSourceY = true;
          state.pool.assertContextNotLost(dst);
        }
        currentImage = dst;
        dst = dst === a2 ? b2 : a2;
      }
      lastTarget = currentImage ?? lastTarget;
      const nextRun = runs[runIndex + 1];
      if (nextRun && nextRun.backend !== run.backend && lastTarget) {
        if (run.backend === "2d" && nextRun.backend === "webgl2") {
          currentImage = lastTarget;
          flipWebGLSourceY = true;
        } else {
          const bitmap = await createImageBitmap(lastTarget);
          if (isCancelled()) {
            bitmap.close();
            return false;
          }
          currentImage = bitmap;
          if (nextRun.backend === "webgl2") {
            flipWebGLSourceY = false;
          }
        }
      }
    }
    if (!lastTarget) {
      return true;
    }
    const outCtx = output.getContext("2d");
    if (!outCtx) {
      throw new Error("Failed to acquire 2D context for output canvas");
    }
    outCtx.clearRect(0, 0, width, height);
    outCtx.drawImage(lastTarget, 0, 0, width, height);
    return true;
  };
  var useEffectChainState = () => {
    const chainStateRef = reactExports.useRef(null);
    const sizeRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
      return () => {
        if (chainStateRef.current) {
          cleanupEffectChainState(chainStateRef.current);
        }
      };
    }, []);
    return reactExports.useMemo(() => ({
      get: (width, height) => {
        if (!sizeRef.current || sizeRef.current.width !== width || sizeRef.current.height !== height) {
          if (chainStateRef.current) {
            cleanupEffectChainState(chainStateRef.current);
          }
          chainStateRef.current = createEffectChainState(width, height);
          sizeRef.current = { width, height };
        }
        return chainStateRef.current;
      }
    }), []);
  };
  var CanvasRefForwardingFunction = ({ width, height, fit, className: className2, style: style2, effects, ...props }, ref) => {
    const canvasRef = reactExports.useRef(null);
    const chainState = useEffectChainState();
    const sourceCanvas = reactExports.useMemo(() => {
      if (typeof document === "undefined") {
        return null;
      }
      return document.createElement("canvas");
    }, []);
    const draw = reactExports.useCallback((imageData) => {
      const canvas = canvasRef.current;
      const canvasWidth = width ?? imageData.displayWidth;
      const canvasHeight = height ?? imageData.displayHeight;
      if (!canvas) {
        throw new Error("Canvas ref is not set");
      }
      if (!sourceCanvas) {
        throw new Error("Source canvas is not available");
      }
      sourceCanvas.width = canvasWidth;
      sourceCanvas.height = canvasHeight;
      const sourceCtx = sourceCanvas.getContext("2d");
      if (!sourceCtx) {
        throw new Error("Could not get 2d context for source canvas");
      }
      sourceCtx.drawImage(imageData, ...calculateImageFit(fit, {
        height: imageData.displayHeight,
        width: imageData.displayWidth
      }, {
        width: canvasWidth,
        height: canvasHeight
      }));
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      return runEffectChain({
        state: chainState.get(canvasWidth, canvasHeight),
        source: sourceCanvas,
        effects,
        output: canvas,
        width: canvasWidth,
        height: canvasHeight
      });
    }, [chainState, effects, fit, height, sourceCanvas, width]);
    reactExports.useImperativeHandle(ref, () => {
      return {
        draw,
        getCanvas: () => {
          if (!canvasRef.current) {
            throw new Error("Canvas ref is not set");
          }
          return canvasRef.current;
        },
        clear: () => {
          var _a;
          const ctx = (_a = canvasRef.current) == null ? void 0 : _a.getContext("2d");
          if (!ctx) {
            throw new Error("Could not get 2d context");
          }
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
    }, [draw]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", {
      ref: canvasRef,
      className: className2,
      style: style2,
      ...props
    });
  };
  var Canvas = React14.forwardRef(CanvasRefForwardingFunction);
  var createImageDecoder = async ({
    resolvedSrc,
    signal,
    requestInit,
    contentType
  }) => {
    if (typeof ImageDecoder === "undefined") {
      throw new Error("Your browser does not support the WebCodecs ImageDecoder API.");
    }
    const response = await fetch(resolvedSrc, { ...requestInit, signal });
    const { body } = response;
    if (!body) {
      throw new Error("Got no body");
    }
    const decoder = new ImageDecoder({
      data: body,
      type: contentType ?? response.headers.get("Content-Type") ?? "image/gif"
    });
    await Promise.all([decoder.completed, decoder.tracks.ready]);
    const { selectedTrack } = decoder.tracks;
    if (!selectedTrack) {
      decoder.close();
      throw new Error("No selected track");
    }
    return { decoder, selectedTrack };
  };
  var CACHE_SIZE = 5;
  var getActualTime = ({
    loopBehavior,
    durationFound,
    timeInSec
  }) => {
    return loopBehavior === "loop" ? durationFound ? timeInSec % durationFound : timeInSec : Math.min(timeInSec, durationFound || Infinity);
  };
  var decodeImage = async ({
    resolvedSrc,
    signal,
    requestInit,
    currentTime,
    initialLoopBehavior
  }) => {
    const { decoder, selectedTrack } = await createImageDecoder({
      resolvedSrc,
      signal,
      requestInit,
      contentType: null
    });
    const cache2 = [];
    let durationFound = null;
    const getFrameByIndex = async (frameIndex) => {
      const foundInCache = cache2.find((c2) => c2.frameIndex === frameIndex);
      if (foundInCache && foundInCache.frame) {
        return foundInCache;
      }
      const frame = await decoder.decode({
        frameIndex,
        completeFramesOnly: true
      });
      if (foundInCache) {
        foundInCache.frame = frame.image;
      } else {
        cache2.push({
          frame: frame.image,
          frameIndex,
          timeInSeconds: frame.image.timestamp / 1e6
        });
      }
      return {
        frame: frame.image,
        frameIndex,
        timeInSeconds: frame.image.timestamp / 1e6
      };
    };
    const clearCache = (closeToTimeInSec) => {
      const itemsInCache = cache2.filter((c2) => c2.frame);
      const sortByClosestToCurrentTime = itemsInCache.sort((a2, b2) => {
        const aDiff = Math.abs(a2.timeInSeconds - closeToTimeInSec);
        const bDiff = Math.abs(b2.timeInSeconds - closeToTimeInSec);
        return aDiff - bDiff;
      });
      for (let i = 0; i < sortByClosestToCurrentTime.length; i++) {
        if (i < CACHE_SIZE) {
          continue;
        }
        const item = sortByClosestToCurrentTime[i];
        item.frame = null;
      }
    };
    const ensureFrameBeforeAndAfter = async ({
      timeInSec,
      loopBehavior
    }) => {
      const actualTimeInSec = getActualTime({
        durationFound,
        loopBehavior,
        timeInSec
      });
      const framesBefore = cache2.filter((c2) => c2.timeInSeconds <= actualTimeInSec);
      const biggestIndex = framesBefore.map((c2) => c2.frameIndex).reduce((a2, b2) => Math.max(a2, b2), 0);
      let i = biggestIndex;
      while (true) {
        const f2 = await getFrameByIndex(i);
        i++;
        if (!f2.frame) {
          throw new Error("No frame found");
        }
        if (!f2.frame.duration) {
          break;
        }
        if (i === selectedTrack.frameCount && durationFound === null) {
          const duration2 = (f2.frame.timestamp + f2.frame.duration) / 1e6;
          durationFound = duration2;
        }
        if (f2.timeInSeconds > actualTimeInSec || i === selectedTrack.frameCount) {
          break;
        }
      }
      if (selectedTrack.frameCount - biggestIndex < 3 && loopBehavior === "loop") {
        await getFrameByIndex(0);
      }
      clearCache(actualTimeInSec);
    };
    await ensureFrameBeforeAndAfter({
      timeInSec: currentTime,
      loopBehavior: initialLoopBehavior
    });
    await ensureFrameBeforeAndAfter({
      timeInSec: currentTime,
      loopBehavior: initialLoopBehavior
    });
    const getFrame = async (timeInSec, loopBehavior) => {
      if (durationFound !== null && timeInSec > durationFound && loopBehavior === "clear-after-finish") {
        return null;
      }
      const actualTimeInSec = getActualTime({
        loopBehavior,
        durationFound,
        timeInSec
      });
      await ensureFrameBeforeAndAfter({ timeInSec: actualTimeInSec, loopBehavior });
      const itemsInCache = cache2.filter((c2) => c2.frame);
      const closest = itemsInCache.reduce((a2, b2) => {
        const aDiff = Math.abs(a2.timeInSeconds - actualTimeInSec);
        const bDiff = Math.abs(b2.timeInSeconds - actualTimeInSec);
        return aDiff < bDiff ? a2 : b2;
      });
      if (!closest.frame) {
        throw new Error("No frame found");
      }
      return closest;
    };
    return {
      close: () => {
        var _a;
        for (const item of cache2) {
          (_a = item.frame) == null ? void 0 : _a.close();
          item.frame = null;
        }
        decoder.close();
      },
      getFrame,
      frameCount: selectedTrack.frameCount
    };
  };
  var getCurrentTime = ({
    frame,
    playbackRate,
    fps
  }) => {
    return frame * playbackRate / fps;
  };
  var serializeRequestInit = (requestInit) => {
    if (!requestInit) {
      return null;
    }
    const requestInitWithoutSignal = { ...requestInit };
    delete requestInitWithoutSignal.signal;
    const { headers, ...rest } = requestInitWithoutSignal;
    return JSON.stringify({
      ...rest,
      headers: headers ? Array.from(new Headers(headers).entries()) : null
    });
  };
  var resolveAnimatedImageSource = (src) => {
    if (typeof window === "undefined") {
      return src;
    }
    return new URL(src, window.origin).href;
  };
  var animatedImageSchema = {
    src: {
      type: "asset",
      assetType: "image",
      default: void 0,
      description: "Source",
      keyframable: false
    },
    ...baseSchema,
    ...cropSchema$1,
    ...premountSchema$1,
    playbackRate: {
      type: "number",
      min: 0,
      max: 10,
      step: 0.1,
      default: 1,
      description: "Playback rate",
      hiddenFromList: false,
      keyframable: false
    },
    ...transformSchema$1,
    ...backgroundSchema$1,
    ...borderSchema$1,
    ...borderRadiusSchema$1
  };
  var getCanvasPropsFromSequenceProps = (props) => {
    const canvasProps = {};
    const mutableCanvasProps = canvasProps;
    for (const key in props) {
      if (Object.prototype.hasOwnProperty.call(props, key) && (key.startsWith("data-") || key.startsWith("aria-"))) {
        mutableCanvasProps[key] = props[key];
      }
    }
    return canvasProps;
  };
  var AnimatedImageContent = reactExports.forwardRef(({
    src,
    width,
    height,
    onError,
    loopBehavior = "loop",
    playbackRate = 1,
    fit = "fill",
    requestInit,
    effects,
    controls,
    ...props
  }, canvasRef) => {
    const resolvedSrc = resolveAnimatedImageSource(src);
    const [imageDecoder, setImageDecoder] = reactExports.useState(null);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const [decodeHandle] = reactExports.useState(() => delayRender2(`Rendering <AnimatedImage/> with src="${resolvedSrc}"`));
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const currentTime = getCurrentTime({ frame, playbackRate, fps });
    const currentTimeRef = reactExports.useRef(currentTime);
    currentTimeRef.current = currentTime;
    const requestInitKey = serializeRequestInit(requestInit);
    const requestInitRef = reactExports.useRef(requestInit);
    requestInitRef.current = requestInit;
    const ref = reactExports.useRef(null);
    const memoizedEffects = useMemoizedEffects({
      effects,
      overrideId: (controls == null ? void 0 : controls.overrideId) ?? null
    });
    reactExports.useImperativeHandle(canvasRef, () => {
      var _a;
      const c2 = (_a = ref.current) == null ? void 0 : _a.getCanvas();
      if (!c2) {
        throw new Error("Canvas ref is not set");
      }
      return c2;
    }, []);
    const [initialLoopBehavior] = reactExports.useState(() => loopBehavior);
    reactExports.useEffect(() => {
      const controller = new AbortController();
      let cancelled = false;
      let continued = false;
      const continueRenderOnce = () => {
        if (continued) {
          return;
        }
        continued = true;
        continueRender2(decodeHandle);
      };
      decodeImage({
        resolvedSrc,
        signal: controller.signal,
        requestInit: requestInitRef.current,
        currentTime: currentTimeRef.current,
        initialLoopBehavior
      }).then((d) => {
        if (cancelled) {
          d.close();
          return;
        }
        setImageDecoder(d);
        continueRenderOnce();
      }).catch((err) => {
        if (cancelled) {
          return;
        }
        if (err.name === "AbortError") {
          continueRenderOnce();
          return;
        }
        if (onError) {
          onError == null ? void 0 : onError(err);
          continueRenderOnce();
        } else {
          cancelRender(err);
        }
      });
      return () => {
        cancelled = true;
        controller.abort();
        continueRenderOnce();
      };
    }, [
      resolvedSrc,
      decodeHandle,
      onError,
      requestInitKey,
      initialLoopBehavior,
      continueRender2
    ]);
    reactExports.useEffect(() => {
      return () => {
        imageDecoder == null ? void 0 : imageDecoder.close();
      };
    }, [imageDecoder]);
    reactExports.useLayoutEffect(() => {
      if (!imageDecoder) {
        return;
      }
      const delay2 = delayRender2(`Rendering frame at ${currentTime} of <AnimatedImage src="${src}"/>`);
      let cancelled = false;
      imageDecoder.getFrame(currentTime, loopBehavior).then(async (videoFrame) => {
        var _a, _b;
        if (cancelled) {
          return;
        }
        if (videoFrame === null) {
          (_a = ref.current) == null ? void 0 : _a.clear();
          continueRender2(delay2);
          return;
        }
        const completed = await ((_b = ref.current) == null ? void 0 : _b.draw(videoFrame.frame));
        if (completed && !cancelled) {
          continueRender2(delay2);
        }
      }).catch((err) => {
        if (cancelled) {
          return;
        }
        if (onError) {
          onError(err);
          continueRender2(delay2);
        } else {
          cancelRender(err);
        }
      });
      return () => {
        cancelled = true;
        continueRender2(delay2);
      };
    }, [
      currentTime,
      imageDecoder,
      loopBehavior,
      onError,
      src,
      continueRender2,
      delayRender2,
      memoizedEffects,
      fit,
      width,
      height
    ]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, {
      ref,
      width,
      height,
      fit,
      effects: memoizedEffects,
      ...props
    });
  });
  AnimatedImageContent.displayName = "AnimatedImageContent";
  var AnimatedImageInner = ({
    src,
    width,
    height,
    onError,
    fit,
    playbackRate,
    loopBehavior,
    id: id2,
    className: className2,
    style: style2,
    durationInFrames,
    from,
    premountFor,
    postmountFor,
    styleWhilePremounted,
    styleWhilePostmounted,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    requestInit,
    effects = [],
    controls,
    ref,
    ...sequenceProps
  }) => {
    const actualRef = reactExports.useRef(null);
    const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
    reactExports.useImperativeHandle(ref, () => {
      return actualRef.current;
    }, []);
    const {
      effectivePostmountFor,
      effectivePremountFor,
      freezeFrame,
      isPremountingOrPostmounting,
      postmountingActive,
      premountingActive,
      premountingStyle
    } = usePremounting({
      from: from ?? 0,
      durationInFrames: durationInFrames ?? Infinity,
      premountFor: premountFor ?? null,
      postmountFor: postmountFor ?? null,
      style: style2 ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "display-none"
    });
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: premountingStyle,
      componentName: "<AnimatedImage />"
    });
    const canvasProps = getCanvasPropsFromSequenceProps(sequenceProps);
    const animatedImageProps = {
      src,
      width,
      height,
      onError,
      fit,
      playbackRate,
      loopBehavior,
      id: id2,
      className: className2,
      style: croppedStyle ?? void 0,
      requestInit,
      ...canvasProps
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
        layout: "none",
        from: from ?? 0,
        durationInFrames: durationInFrames ?? Infinity,
        name: "<AnimatedImage>",
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/animatedimage",
        controls,
        _remotionInternalEffects: memoizedEffectDefinitions,
        _remotionInternalPremountDisplay: effectivePremountFor || null,
        _remotionInternalPostmountDisplay: effectivePostmountFor || null,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        ...sequenceProps,
        outlineRef: actualRef,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedImageContent, {
          ...animatedImageProps,
          ref: actualRef,
          effects,
          controls
        })
      })
    });
  };
  var AnimatedImage = withInteractivitySchema({
    Component: AnimatedImageInner,
    componentName: "<AnimatedImage>",
    componentIdentity: "dev.remotion.remotion.AnimatedImage",
    schema: animatedImageSchema,
    supportsEffects: true
  });
  AnimatedImage.displayName = "AnimatedImage";
  addSequenceStackTraces(AnimatedImage);
  var disabledEffectField = {
    type: "boolean",
    default: false,
    description: "Disabled"
  };
  var createEffect = (definition) => {
    const { calculateKey: userCalculateKey, validateParams } = definition;
    const widened = {
      ...definition,
      documentationLink: definition.documentationLink ?? null,
      calculateKey: (params) => {
        const disabled = params.disabled ?? false;
        return `${userCalculateKey(params)}-disabled-${disabled}`;
      },
      schema: {
        disabled: disabledEffectField,
        ...definition.schema
      }
    };
    const factory = (params = {}) => {
      validateParams(params);
      return {
        definition: widened,
        params,
        effectKey: widened.calculateKey(params),
        memoized: false
      };
    };
    return factory;
  };
  var validateArtifactFilename = (filename) => {
    if (typeof filename !== "string") {
      throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof filename}`);
    }
    if (filename.trim() === "") {
      throw new Error("The `filename` must not be empty");
    }
    if (!filename.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g)) {
      throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.');
    }
  };
  var validateContent = (content2) => {
    if (typeof content2 !== "string" && !(content2 instanceof Uint8Array)) {
      throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof content2}`);
    }
    if (typeof content2 === "string" && content2.trim() === "") {
      throw new Error("The `content` must not be empty");
    }
  };
  var validateRenderAsset = (artifact) => {
    if (artifact.type !== "artifact") {
      return;
    }
    validateArtifactFilename(artifact.filename);
    if (artifact.contentType === "thumbnail") {
      return;
    }
    validateContent(artifact.content);
  };
  var RenderAssetManager = reactExports.createContext({
    registerRenderAsset: () => {
      return;
    },
    unregisterRenderAsset: () => {
      return;
    },
    renderAssets: []
  });
  var RenderAssetManagerProvider = ({ children, collectAssets }) => {
    const [renderAssets, setRenderAssets] = reactExports.useState([]);
    const renderAssetsRef = reactExports.useRef([]);
    const registerRenderAsset = reactExports.useCallback((renderAsset) => {
      validateRenderAsset(renderAsset);
      renderAssetsRef.current = [...renderAssetsRef.current, renderAsset];
      setRenderAssets(renderAssetsRef.current);
    }, []);
    if (collectAssets) {
      reactExports.useImperativeHandle(collectAssets, () => {
        return {
          collectAssets: () => {
            const assets = renderAssetsRef.current;
            renderAssetsRef.current = [];
            setRenderAssets([]);
            return assets;
          }
        };
      }, []);
    }
    const unregisterRenderAsset = reactExports.useCallback((id2) => {
      renderAssetsRef.current = renderAssetsRef.current.filter((a2) => a2.id !== id2);
      setRenderAssets(renderAssetsRef.current);
    }, []);
    reactExports.useLayoutEffect(() => {
      if (typeof window !== "undefined") {
        window.remotion_collectAssets = () => {
          const assets = renderAssetsRef.current;
          renderAssetsRef.current = [];
          setRenderAssets([]);
          return assets;
        };
      }
    }, []);
    const contextValue = reactExports.useMemo(() => {
      return {
        registerRenderAsset,
        unregisterRenderAsset,
        renderAssets
      };
    }, [renderAssets, registerRenderAsset, unregisterRenderAsset]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RenderAssetManager.Provider, {
      value: contextValue,
      children
    });
  };
  var getAbsoluteSrc = (relativeSrc) => {
    if (typeof window === "undefined") {
      return relativeSrc;
    }
    if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
      return relativeSrc;
    }
    return new URL(relativeSrc, window.origin).href;
  };
  var calculateMediaDuration = ({
    trimAfter,
    mediaDurationInFrames,
    playbackRate,
    trimBefore
  }) => {
    let duration2 = mediaDurationInFrames;
    if (typeof trimAfter !== "undefined") {
      duration2 = trimAfter;
    }
    if (typeof trimBefore !== "undefined") {
      duration2 -= trimBefore;
    }
    const actualDuration = duration2 / playbackRate;
    return Number(actualDuration.toFixed(10));
  };
  var LoopContext = reactExports.createContext(null);
  var useLoop = () => {
    return React14.useContext(LoopContext);
  };
  var Loop = ({
    durationInFrames,
    times = Infinity,
    children,
    name,
    showInTimeline,
    ...props
  }) => {
    const currentFrame = useCurrentFrame();
    const { durationInFrames: compDuration } = useVideoConfig();
    validateDurationInFrames$2(durationInFrames, {
      component: "of the <Loop /> component",
      allowFloats: true
    });
    if (typeof times !== "number") {
      throw new TypeError(`You passed to "times" an argument of type ${typeof times}, but it must be a number.`);
    }
    if (times !== Infinity && times % 1 !== 0) {
      throw new TypeError(`The "times" prop of a loop must be an integer, but got ${times}.`);
    }
    if (times < 0) {
      throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${times}`);
    }
    const maxTimes = Math.ceil(compDuration / durationInFrames);
    const actualTimes = Math.min(maxTimes, times);
    const style2 = props.layout === "none" ? void 0 : props.style;
    const maxFrame = durationInFrames * (actualTimes - 1);
    const iteration = Math.floor(currentFrame / durationInFrames);
    const start = iteration * durationInFrames;
    const from = Math.min(start, maxFrame);
    const loopDisplay = reactExports.useMemo(() => {
      return {
        numberOfTimes: Math.min(compDuration / durationInFrames, times),
        startOffset: -from,
        durationInFrames
      };
    }, [compDuration, durationInFrames, from, times]);
    const loopContext = reactExports.useMemo(() => {
      return {
        iteration: Math.floor(currentFrame / durationInFrames),
        durationInFrames
      };
    }, [currentFrame, durationInFrames]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoopContext.Provider, {
      value: loopContext,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
        durationInFrames,
        from,
        name: name ?? "<Loop>",
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/loop",
        _remotionInternalLoopDisplay: loopDisplay,
        layout: props.layout,
        style: style2,
        showInTimeline,
        children
      })
    });
  };
  Loop.useLoop = useLoop;
  var playbackLogging = ({
    logLevel,
    tag,
    message,
    mountTime
  }) => {
    const tags = [mountTime ? Date.now() - mountTime + "ms " : null, tag].filter(Boolean).join(" ");
    Log.trace({ logLevel, tag: null }, `[${tags}]`, message);
  };
  var PreloadContext = reactExports.createContext({});
  var preloads = {};
  var updaters = [];
  var PrefetchProvider = ({ children }) => {
    const [_preloads, _setPreloads] = reactExports.useState(() => preloads);
    reactExports.useEffect(() => {
      const updaterFunction = () => {
        _setPreloads(preloads);
      };
      updaters.push(updaterFunction);
      return () => {
        updaters = updaters.filter((u2) => u2 !== updaterFunction);
      };
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PreloadContext.Provider, {
      value: _preloads,
      children
    });
  };
  var removeAndGetHashFragment = (src) => {
    const hashIndex = src.indexOf("#");
    if (hashIndex === -1) {
      return null;
    }
    return hashIndex;
  };
  var getSrcWithoutHash = (src) => {
    const hashIndex = removeAndGetHashFragment(src);
    if (hashIndex === null) {
      return src;
    }
    return src.slice(0, hashIndex);
  };
  var usePreload = (src) => {
    const preloads2 = reactExports.useContext(PreloadContext);
    const hashFragmentIndex = removeAndGetHashFragment(src);
    const withoutHashFragment = getSrcWithoutHash(src);
    if (!preloads2[withoutHashFragment]) {
      return src;
    }
    if (hashFragmentIndex !== null) {
      return preloads2[withoutHashFragment] + src.slice(hashFragmentIndex);
    }
    return preloads2[withoutHashFragment];
  };
  var validateMediaProps = (props, component) => {
    if (typeof props.volume !== "number" && typeof props.volume !== "function" && typeof props.volume !== "undefined") {
      throw new TypeError(`You have passed a volume of type ${typeof props.volume} to your <${component} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);
    }
    if (typeof props.volume === "number" && props.volume < 0) {
      throw new TypeError(`You have passed a volume below 0 to your <${component} /> component. Volume must be between 0 and 1`);
    }
    if (typeof props.playbackRate !== "number" && typeof props.playbackRate !== "undefined") {
      throw new TypeError(`You have passed a playbackRate of type ${typeof props.playbackRate} to your <${component} /> component. Playback rate must a real number or undefined.`);
    }
    if (typeof props.playbackRate === "number" && (isNaN(props.playbackRate) || !Number.isFinite(props.playbackRate) || props.playbackRate <= 0)) {
      throw new TypeError(`You have passed a playbackRate of ${props.playbackRate} to your <${component} /> component. Playback rate must be a real number above 0.`);
    }
    if (typeof props.preservePitch !== "boolean" && typeof props.preservePitch !== "undefined") {
      throw new TypeError(`'preservePitch' must be a boolean or undefined but got '${typeof props.preservePitch}' instead`);
    }
  };
  var validateStartFromProps = (startFrom, endAt) => {
    if (typeof startFrom !== "undefined") {
      if (typeof startFrom !== "number") {
        throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof startFrom}.`);
      }
      if (isNaN(startFrom) || startFrom === Infinity) {
        throw new TypeError("startFrom prop can not be NaN or Infinity.");
      }
      if (startFrom < 0) {
        throw new TypeError(`startFrom must be greater than equal to 0 instead got ${startFrom}.`);
      }
    }
    if (typeof endAt !== "undefined") {
      if (typeof endAt !== "number") {
        throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof endAt}.`);
      }
      if (isNaN(endAt)) {
        throw new TypeError("endAt prop can not be NaN.");
      }
      if (endAt <= 0) {
        throw new TypeError(`endAt must be a positive number, instead got ${endAt}.`);
      }
    }
    if (endAt < startFrom) {
      throw new TypeError("endAt prop must be greater than startFrom prop.");
    }
  };
  var validateTrimProps = (trimBefore, trimAfter) => {
    if (typeof trimBefore !== "undefined") {
      if (typeof trimBefore !== "number") {
        throw new TypeError(`type of trimBefore prop must be a number, instead got type ${typeof trimBefore}.`);
      }
      if (isNaN(trimBefore) || trimBefore === Infinity) {
        throw new TypeError("trimBefore prop can not be NaN or Infinity.");
      }
      if (trimBefore < 0) {
        throw new TypeError(`trimBefore must be greater than equal to 0 instead got ${trimBefore}.`);
      }
    }
    if (typeof trimAfter !== "undefined") {
      if (typeof trimAfter !== "number") {
        throw new TypeError(`type of trimAfter prop must be a number, instead got type ${typeof trimAfter}.`);
      }
      if (isNaN(trimAfter)) {
        throw new TypeError("trimAfter prop can not be NaN.");
      }
      if (trimAfter <= 0) {
        throw new TypeError(`trimAfter must be a positive number, instead got ${trimAfter}.`);
      }
    }
    if (trimAfter <= trimBefore) {
      throw new TypeError("trimAfter prop must be greater than trimBefore prop.");
    }
  };
  var validateMediaTrimProps = ({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  }) => {
    if (typeof startFrom !== "undefined" && typeof trimBefore !== "undefined") {
      throw new TypeError("Cannot use both startFrom and trimBefore props. Use trimBefore instead as startFrom is deprecated.");
    }
    if (typeof endAt !== "undefined" && typeof trimAfter !== "undefined") {
      throw new TypeError("Cannot use both endAt and trimAfter props. Use trimAfter instead as endAt is deprecated.");
    }
    const hasNewProps = typeof trimBefore !== "undefined" || typeof trimAfter !== "undefined";
    const hasOldProps = typeof startFrom !== "undefined" || typeof endAt !== "undefined";
    if (hasNewProps) {
      validateTrimProps(trimBefore, trimAfter);
    } else if (hasOldProps) {
      validateStartFromProps(startFrom, endAt);
    }
  };
  var resolveTrimProps = ({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  }) => {
    const trimBeforeValue = trimBefore ?? startFrom ?? void 0;
    const trimAfterValue = trimAfter ?? endAt ?? void 0;
    return { trimBeforeValue, trimAfterValue };
  };
  var durationReducer = (state, action) => {
    switch (action.type) {
      case "got-duration": {
        const absoluteSrc = getAbsoluteSrc(action.src);
        if (state[absoluteSrc] === action.durationInSeconds) {
          return state;
        }
        return {
          ...state,
          [absoluteSrc]: action.durationInSeconds
        };
      }
      default:
        return state;
    }
  };
  var DurationsContext = reactExports.createContext({
    durations: {},
    setDurations: () => {
      throw new Error("context missing");
    }
  });
  var DurationsContextProvider = ({ children }) => {
    const [durations, setDurations] = reactExports.useReducer(durationReducer, {});
    const value = reactExports.useMemo(() => {
      return {
        durations,
        setDurations
      };
    }, [durations]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DurationsContext.Provider, {
      value,
      children
    });
  };
  var getCrossOriginValue = ({
    crossOrigin,
    requestsVideoFrame,
    isClientSideRendering
  }) => {
    if (crossOrigin !== void 0 && crossOrigin !== null) {
      return crossOrigin;
    }
    if (isClientSideRendering) {
      return "anonymous";
    }
    if (requestsVideoFrame) {
      return "anonymous";
    }
    return;
  };
  function mulberry32(a2) {
    let t2 = a2 + 1831565813;
    t2 = Math.imul(t2 ^ t2 >>> 15, t2 | 1);
    t2 ^= t2 + Math.imul(t2 ^ t2 >>> 7, t2 | 61);
    return ((t2 ^ t2 >>> 14) >>> 0) / 4294967296;
  }
  function hashCode(str) {
    let i = 0;
    let chr = 0;
    let hash = 0;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  }
  var random = (seed, dummy) => {
    if (seed === null) {
      return Math.random();
    }
    if (typeof seed === "string") {
      return mulberry32(hashCode(seed));
    }
    if (typeof seed === "number") {
      return mulberry32(seed * 1e10);
    }
    throw new Error("random() argument must be a number or a string");
  };
  var playAndHandleNotAllowedError = ({
    mediaRef,
    mediaType,
    onAutoPlayError,
    logLevel,
    mountTime,
    reason,
    isPlayer
  }) => {
    const { current } = mediaRef;
    if (!current) {
      return;
    }
    playbackLogging({
      logLevel,
      tag: "play",
      message: `Attempting to play ${current.src}. Reason: ${reason}`,
      mountTime
    });
    const prom = current.play();
    if (!prom.catch) {
      return;
    }
    prom.catch((err) => {
      if (!current) {
        return;
      }
      if (err.message.includes("request was interrupted by a call to pause")) {
        return;
      }
      if (err.message.includes("The operation was aborted.")) {
        return;
      }
      if (err.message.includes("The fetching process for the media resource was aborted by the user agent")) {
        return;
      }
      if (err.message.includes("request was interrupted by a new load request")) {
        return;
      }
      if (err.message.includes("because the media was removed from the document")) {
        return;
      }
      if (err.message.includes("user didn't interact with the document") && current.muted) {
        return;
      }
      console.log(`Could not play ${mediaType} due to following error: `, err);
      if (!current.muted) {
        if (onAutoPlayError) {
          onAutoPlayError();
          return;
        }
        if (mediaType === "video" && isPlayer) {
          Log.info({ logLevel, tag: "<" + mediaType + ">" }, `The video will be muted and we'll retry playing it.`);
          Log.info({ logLevel, tag: "<" + mediaType + ">" }, "Use onAutoPlayError() to handle this error yourself.");
          current.muted = true;
          current.play();
        }
      }
    });
  };
  var makeSharedElementSourceNode = ({
    audioContext,
    ref
  }) => {
    let connected = null;
    let disposed = false;
    let currentAudioContext = audioContext;
    return {
      setAudioContext: (newAudioContext) => {
        currentAudioContext = newAudioContext;
      },
      attemptToConnect: () => {
        if (disposed) {
          throw new Error("SharedElementSourceNode has been disposed");
        }
        if (!connected && ref.current && currentAudioContext) {
          const mediaElementSourceNode = currentAudioContext.createMediaElementSource(ref.current);
          connected = mediaElementSourceNode;
        }
      },
      get: () => {
        if (!connected) {
          throw new Error("Audio element not connected");
        }
        return connected;
      },
      cleanup: () => {
        if (connected) {
          connected.disconnect();
          connected = null;
        }
        disposed = true;
      }
    };
  };
  var warned = false;
  var warnOnce = (logLevel) => {
    if (warned) {
      return;
    }
    warned = true;
    if (typeof window !== "undefined") {
      Log.warn({ logLevel, tag: null }, "AudioContext is not supported in this browser");
    }
  };
  var useSingletonAudioContext = ({
    logLevel,
    latencyHint,
    audioEnabled,
    sampleRate
  }) => {
    const env = useRemotionEnvironment();
    const initialSampleRate = reactExports.useRef(sampleRate);
    if (sampleRate !== initialSampleRate.current) {
      throw new Error(`Changing the AudioContext sample rate dynamically is not supported. The sample rate was initialized with ${initialSampleRate.current} Hz, but ${sampleRate} Hz was passed later.`);
    }
    const context = reactExports.useMemo(() => {
      if (env.isRendering) {
        return null;
      }
      if (!audioEnabled) {
        return null;
      }
      if (typeof AudioContext === "undefined") {
        warnOnce(logLevel);
        return null;
      }
      const audioContext = new AudioContext({
        latencyHint,
        sampleRate
      });
      const gainNode = audioContext.createGain();
      gainNode.connect(audioContext.destination);
      Log.trace({ logLevel, tag: "audio" }, "Creating new audio context");
      audioContext.suspend();
      let transitionTarget = null;
      const getState = () => {
        const nativeState = audioContext.state;
        if (transitionTarget === "running" && nativeState !== "running") {
          return "suspended-to-running";
        }
        if (transitionTarget === "suspended" && nativeState !== "suspended") {
          return "running-to-suspended";
        }
        return nativeState;
      };
      const resume = () => {
        transitionTarget = "running";
        const promise = audioContext.resume();
        promise.finally(() => {
          if (transitionTarget === "running") {
            transitionTarget = null;
          }
        });
        return promise;
      };
      const suspend = () => {
        transitionTarget = "suspended";
        const promise = audioContext.suspend();
        promise.finally(() => {
          if (transitionTarget === "suspended") {
            transitionTarget = null;
          }
        });
        return promise;
      };
      return {
        audioContext,
        gainNode,
        getState,
        resume,
        suspend
      };
    }, [logLevel, latencyHint, env.isRendering, audioEnabled, sampleRate]);
    return context;
  };
  var RESUME_WAIT_TIMEOUT = 1e3;
  var waitUntilActuallyResumed = (audioContext, logLevel, signal, isAutoPlayAttempt) => {
    return new Promise((resolve) => {
      const startCurrentTime = audioContext.currentTime;
      const start = audioContext.getOutputTimestamp();
      const startOutputPerformanceTime = start.performanceTime;
      const startWallClock = performance.now();
      let animationFrame = null;
      let timeout = null;
      let settled = false;
      let onAbort = () => {
        return;
      };
      const finish = (result) => {
        if (settled) {
          return;
        }
        settled = true;
        if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
        }
        if (timeout !== null) {
          clearTimeout(timeout);
        }
        signal.removeEventListener("abort", onAbort);
        resolve(result);
      };
      onAbort = () => finish("cancelled");
      const hasAudiblyStarted = (startPerformanceTime) => {
        const outputTimestamp = audioContext.getOutputTimestamp();
        return startPerformanceTime !== void 0 && outputTimestamp.performanceTime !== void 0 && outputTimestamp.performanceTime > startPerformanceTime && outputTimestamp.contextTime !== void 0 && outputTimestamp.contextTime > startCurrentTime;
      };
      const check = () => {
        var _a, _b;
        animationFrame = null;
        const { currentTime } = audioContext;
        const outputTimestamp = audioContext.getOutputTimestamp();
        const elapsedWallClock = performance.now() - startWallClock;
        if (hasAudiblyStarted(startOutputPerformanceTime)) {
          Log.verbose({ logLevel, tag: "audio" }, `waitUntilActuallyResumed: getOutputTimestamp.performanceTime advanced from ${startOutputPerformanceTime.toFixed(6)} to ${(_a = outputTimestamp.performanceTime) == null ? void 0 : _a.toFixed(6)} after ${elapsedWallClock.toFixed(1)}ms. currentTime=${currentTime.toFixed(6)} (advanced by ${(currentTime - startCurrentTime).toFixed(6)}), getOutputTimestamp.performanceTime=${((_b = outputTimestamp.performanceTime) == null ? void 0 : _b.toFixed(1)) ?? "undefined"}`);
          finish("resumed");
          return;
        }
        animationFrame = requestAnimationFrame(check);
      };
      if (signal.aborted) {
        finish("cancelled");
        return;
      }
      signal.addEventListener("abort", onAbort, { once: true });
      if (isAutoPlayAttempt) {
        timeout = setTimeout(() => {
          if (hasAudiblyStarted(startOutputPerformanceTime)) {
            finish("resumed");
            return;
          }
          Log.warn({ logLevel, tag: "audio" }, "WARNING: You enabled autoPlay on an unmuted <Player /> and the browser did not allow the video to be started. Remotion muted the <Player /> so it can play. To properly handle this, either set the `muted` prop or remove the `autoPlay` prop");
          finish("failed");
        }, RESUME_WAIT_TIMEOUT);
      }
      animationFrame = requestAnimationFrame(check);
    });
  };
  var EMPTY_AUDIO = "data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
  var compareProps = (obj1, obj2) => {
    const keysA = Object.keys(obj1).sort();
    const keysB = Object.keys(obj2).sort();
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let i = 0; i < keysA.length; i++) {
      if (keysA[i] !== keysB[i]) {
        return false;
      }
      if (obj1[keysA[i]] !== obj2[keysB[i]]) {
        return false;
      }
    }
    return true;
  };
  var didPropChange = (key, newProp, prevProp) => {
    if (key === "src" && !prevProp.startsWith("data:") && !newProp.startsWith("data:")) {
      return new URL(prevProp, window.origin).toString() !== new URL(newProp, window.origin).toString();
    }
    if (prevProp === newProp) {
      return false;
    }
    return true;
  };
  var SharedAudioContext = reactExports.createContext(null);
  var SharedAudioTagsContext = reactExports.createContext(null);
  var shouldSaveForLater = (state) => {
    if (state === "suspended" || state === "running-to-suspended" || state === "interrupted") {
      return true;
    }
    if (state === "running" || state === "suspended-to-running") {
      return false;
    }
    throw new Error(`Unexpected audio context state: ${state}`);
  };
  var SharedAudioContextProvider = ({
    children,
    audioLatencyHint,
    audioEnabled,
    previewSampleRate,
    _experimentalKeepAudioContextAlive
  }) => {
    const logLevel = useLogLevel();
    const sampleRate = previewSampleRate ?? 48e3;
    const ctxAndGain = useSingletonAudioContext({
      logLevel,
      latencyHint: audioLatencyHint,
      audioEnabled,
      sampleRate
    });
    const audioContextIsPlayingEventually = reactExports.useRef(false);
    const initialExperimentalKeepAudioContextAlive = reactExports.useRef(_experimentalKeepAudioContextAlive);
    if (initialExperimentalKeepAudioContextAlive.current !== _experimentalKeepAudioContextAlive) {
      throw new Error("`_experimentalKeepAudioContextAlive` cannot be changed dynamically.");
    }
    const isResuming = reactExports.useRef(null);
    const nextResumeAttemptId = reactExports.useRef(0);
    const nextResumeIsAutoPlayAttempt = reactExports.useRef(false);
    const audioSyncAnchor = reactExports.useMemo(() => ({ value: 0 }), []);
    const audioSyncAnchorListeners = reactExports.useRef([]);
    const audioSyncAnchorEmitter = reactExports.useMemo(() => {
      return {
        dispatch: (event) => {
          audioSyncAnchorListeners.current.forEach((l2) => l2(event));
        },
        subscribe: (listener) => {
          audioSyncAnchorListeners.current.push(listener);
          return {
            remove: () => {
              audioSyncAnchorListeners.current = audioSyncAnchorListeners.current.filter((l2) => l2 !== listener);
            }
          };
        }
      };
    }, []);
    const prevEndTimes = reactExports.useRef({ scheduledEndTime: null, mediaEndTime: null });
    const nodesToResume = reactExports.useRef(/* @__PURE__ */ new Map());
    const unscheduleAudioNode = reactExports.useCallback((node) => {
      nodesToResume.current.delete(node);
    }, []);
    const scheduleAudioNode = reactExports.useMemo(() => {
      return ({
        node,
        mediaTimestamp,
        sourceOffset,
        scheduledTime,
        duration: duration2,
        offset,
        originalUnloopedMediaTimestamp
      }) => {
        if (!ctxAndGain) {
          throw new Error("Audio context not found");
        }
        const currentState = ctxAndGain.getState();
        if (currentState === "closed") {
          return {
            type: "not-started",
            reason: "audio context is closed"
          };
        }
        const saveForLater = shouldSaveForLater(currentState) || _experimentalKeepAudioContextAlive && !audioContextIsPlayingEventually.current;
        if (duration2 > 0) {
          if (saveForLater) {
            nodesToResume.current.set(node, {
              scheduledTime,
              offset,
              duration: duration2
            });
          } else {
            node.start(scheduledTime, offset, duration2);
          }
        }
        const scheduledEndTime = scheduledTime + duration2 / node.playbackRate.value;
        const mediaTime = mediaTimestamp + offset - sourceOffset;
        const mediaEndTime = mediaTime + duration2;
        const latency = ctxAndGain.audioContext.baseLatency + ctxAndGain.audioContext.outputLatency;
        const timeDiff = scheduledTime - ctxAndGain.audioContext.currentTime;
        const prev = prevEndTimes.current;
        const scheduledMismatch = prev.scheduledEndTime !== null && Math.abs(scheduledTime - prev.scheduledEndTime) > 1e-3;
        const mediaMismatch = prev.mediaEndTime !== null && Math.abs(mediaTime - prev.mediaEndTime) > 1e-3;
        Log.verbose({ logLevel, tag: "audio-scheduling" }, "scheduled %c%s%c %s %c%s%c %s %c%s%c %s %s %s %s %s", scheduledMismatch ? "color: red; font-weight: bold" : "", scheduledTime.toFixed(4), "", scheduledEndTime.toFixed(4), mediaMismatch ? "color: red; font-weight: bold" : "", mediaTime.toFixed(4), "", mediaEndTime.toFixed(4), duration2 < 0 ? "color: red; font-weight: bold" : timeDiff < 0 ? "color: red; font-weight: bold" : "color: blue; font-weight: bold", duration2 < 0 ? "missed " + Math.abs(offset).toFixed(2) + "s" : Math.abs(timeDiff).toFixed(2) + (timeDiff < 0 ? " delay" : " ahead"), "", "current=" + ctxAndGain.audioContext.currentTime.toFixed(4), "offset=" + offset.toFixed(4), "latency=" + latency.toFixed(4), "state=" + ctxAndGain.audioContext.state, originalUnloopedMediaTimestamp !== mediaTime ? "original_ts=" + originalUnloopedMediaTimestamp.toFixed(4) : "", "action=" + (saveForLater ? "schedule" : "start"), "");
        prev.scheduledEndTime = scheduledEndTime;
        prev.mediaEndTime = mediaEndTime;
        return duration2 > 0 ? {
          type: "started",
          scheduledTime
        } : {
          type: "not-started",
          reason: "missed " + Math.abs(offset).toFixed(2) + "s"
        };
      };
    }, [ctxAndGain, _experimentalKeepAudioContextAlive, logLevel]);
    const resume = reactExports.useCallback(() => {
      const isAutoPlayAttempt = nextResumeIsAutoPlayAttempt.current;
      nextResumeIsAutoPlayAttempt.current = false;
      if (!ctxAndGain) {
        return Promise.resolve();
      }
      if (audioContextIsPlayingEventually.current) {
        return Promise.resolve();
      }
      audioContextIsPlayingEventually.current = true;
      ctxAndGain.gainNode.gain.cancelScheduledValues(ctxAndGain.audioContext.currentTime);
      ctxAndGain.gainNode.gain.setValueAtTime(0, ctxAndGain.audioContext.currentTime);
      ctxAndGain.gainNode.gain.linearRampToValueAtTime(1, ctxAndGain.audioContext.currentTime + 0.03);
      nodesToResume.current.forEach((r2, node) => {
        node.start(r2.scheduledTime, r2.offset, r2.duration);
      });
      nodesToResume.current.clear();
      if (_experimentalKeepAudioContextAlive && ctxAndGain.audioContext.state === "running") {
        return Promise.resolve();
      }
      const resumePromise = ctxAndGain.resume();
      const abortController = new AbortController();
      const resumeAttemptId = nextResumeAttemptId.current++;
      const waitPromise = new Promise((resolve) => {
        waitUntilActuallyResumed(ctxAndGain.audioContext, logLevel, abortController.signal, isAutoPlayAttempt).then(resolve);
        resumePromise.catch((err) => {
          Log.warn({ logLevel, tag: "audio" }, "AudioContext resume rejected, muting playback and continuing without audio", err);
          abortController.abort();
          resolve("failed");
        });
      }).finally(() => {
        var _a;
        if (((_a = isResuming.current) == null ? void 0 : _a.id) === resumeAttemptId) {
          isResuming.current = null;
        }
      });
      isResuming.current = {
        abortController,
        id: resumeAttemptId,
        promise: waitPromise
      };
      return resumePromise.catch(() => {
      });
    }, [ctxAndGain, _experimentalKeepAudioContextAlive, logLevel]);
    const resumeAsAutoPlay = reactExports.useCallback(() => {
      nextResumeIsAutoPlayAttempt.current = true;
      return resume();
    }, [resume]);
    const getIsResumingAudioContext = reactExports.useCallback(() => {
      var _a;
      return ((_a = isResuming.current) == null ? void 0 : _a.promise) ?? null;
    }, []);
    const suspend = reactExports.useCallback(() => {
      var _a;
      (_a = isResuming.current) == null ? void 0 : _a.abortController.abort();
      if (!ctxAndGain) {
        return Promise.resolve();
      }
      if (!audioContextIsPlayingEventually.current) {
        return Promise.resolve();
      }
      audioContextIsPlayingEventually.current = false;
      if (_experimentalKeepAudioContextAlive) {
        ctxAndGain.gainNode.gain.cancelScheduledValues(ctxAndGain.audioContext.currentTime);
        ctxAndGain.gainNode.gain.setValueAtTime(0, ctxAndGain.audioContext.currentTime);
        return Promise.resolve();
      }
      return ctxAndGain.suspend();
    }, [ctxAndGain, _experimentalKeepAudioContextAlive]);
    reactExports.useEffect(() => {
      if (!_experimentalKeepAudioContextAlive) {
        return;
      }
      if (!ctxAndGain) {
        return;
      }
      if (typeof window === "undefined") {
        return;
      }
      const wake = () => {
        if (ctxAndGain.audioContext.state === "running") {
          return;
        }
        ctxAndGain.resume().catch(() => {
        });
      };
      wake();
      window.addEventListener("pointerdown", wake, {
        capture: true,
        passive: true
      });
      window.addEventListener("keydown", wake, { capture: true, passive: true });
      return () => {
        window.removeEventListener("pointerdown", wake, { capture: true });
        window.removeEventListener("keydown", wake, { capture: true });
        ctxAndGain.suspend().catch(() => {
        });
      };
    }, [ctxAndGain, _experimentalKeepAudioContextAlive]);
    const audioContextValue = reactExports.useMemo(() => {
      return {
        sampleRate,
        audioContext: (ctxAndGain == null ? void 0 : ctxAndGain.audioContext) ?? null,
        getAudioContextState: () => (ctxAndGain == null ? void 0 : ctxAndGain.getState()) ?? null,
        gainNode: (ctxAndGain == null ? void 0 : ctxAndGain.gainNode) ?? null,
        audioSyncAnchor,
        audioSyncAnchorEmitter,
        scheduleAudioNode,
        resume,
        resumeAsAutoPlay,
        suspend,
        getIsResumingAudioContext,
        unscheduleAudioNode,
        _experimentalKeepAudioContextAlive
      };
    }, [
      sampleRate,
      ctxAndGain,
      audioSyncAnchor,
      audioSyncAnchorEmitter,
      scheduleAudioNode,
      resume,
      resumeAsAutoPlay,
      suspend,
      getIsResumingAudioContext,
      unscheduleAudioNode,
      _experimentalKeepAudioContextAlive
    ]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SharedAudioContext.Provider, {
      value: audioContextValue,
      children
    });
  };
  var SharedAudioTagsContextProvider = ({ children, numberOfAudioTags }) => {
    const audios = reactExports.useRef([]);
    const [initialNumberOfAudioTags] = reactExports.useState(numberOfAudioTags);
    if (numberOfAudioTags !== initialNumberOfAudioTags) {
      throw new Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");
    }
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const env = useRemotionEnvironment();
    const audioCtx = reactExports.useContext(SharedAudioContext);
    const audioContext = (audioCtx == null ? void 0 : audioCtx.audioContext) ?? null;
    const resume = audioCtx == null ? void 0 : audioCtx.resume;
    const [refs] = reactExports.useState(() => {
      return new Array(numberOfAudioTags).fill(true).map(() => {
        const ref = reactExports.createRef();
        return {
          id: Math.random(),
          ref,
          mediaElementSourceNode: makeSharedElementSourceNode({
            audioContext,
            ref
          })
        };
      });
    });
    for (const { mediaElementSourceNode } of refs) {
      mediaElementSourceNode == null ? void 0 : mediaElementSourceNode.setAudioContext(audioContext);
    }
    const effectToUse = React14.useInsertionEffect ?? React14.useLayoutEffect;
    effectToUse(() => {
      return () => {
        requestAnimationFrame(() => {
          refs.forEach(({ mediaElementSourceNode }) => {
            mediaElementSourceNode == null ? void 0 : mediaElementSourceNode.cleanup();
          });
        });
      };
    }, [refs]);
    const takenAudios = reactExports.useRef(new Array(numberOfAudioTags).fill(false));
    const rerenderAudios = reactExports.useCallback(() => {
      refs.forEach(({ ref, id: id2 }) => {
        var _a;
        const data = (_a = audios.current) == null ? void 0 : _a.find((a2) => a2.id === id2);
        const { current } = ref;
        if (!current) {
          return;
        }
        if (data === void 0) {
          if (current.src !== EMPTY_AUDIO) {
            current.src = EMPTY_AUDIO;
          }
          return;
        }
        if (!data) {
          throw new TypeError("Expected audio data to be there");
        }
        Object.keys(data.props).forEach((key) => {
          if (didPropChange(key, data.props[key], current[key])) {
            current[key] = data.props[key];
          }
        });
      });
    }, [refs]);
    const registerAudio = reactExports.useCallback((options) => {
      var _a, _b;
      const { aud, audioId, premounting, postmounting } = options;
      const found = (_a = audios.current) == null ? void 0 : _a.find((a2) => a2.audioId === audioId);
      if (found) {
        return found;
      }
      const firstFreeAudio = takenAudios.current.findIndex((a2) => a2 === false);
      if (firstFreeAudio === -1) {
        throw new Error(`Tried to simultaneously mount ${numberOfAudioTags + 1} <Html5Audio /> tags at the same time. With the current settings, the maximum amount of <Html5Audio /> tags is limited to ${numberOfAudioTags} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#using-the-numberofsharedaudiotags-prop for more information on how to increase this limit.`);
      }
      const { id: id2, ref, mediaElementSourceNode } = refs[firstFreeAudio];
      const cloned = [...takenAudios.current];
      cloned[firstFreeAudio] = id2;
      takenAudios.current = cloned;
      const newElem = {
        props: aud,
        id: id2,
        el: ref,
        audioId,
        mediaElementSourceNode,
        premounting,
        audioMounted: Boolean(ref.current),
        postmounting,
        cleanupOnMediaTagUnmount: () => {
        }
      };
      (_b = audios.current) == null ? void 0 : _b.push(newElem);
      rerenderAudios();
      return newElem;
    }, [numberOfAudioTags, refs, rerenderAudios]);
    const unregisterAudio = reactExports.useCallback((id2) => {
      var _a;
      const cloned = [...takenAudios.current];
      const index = refs.findIndex((r2) => r2.id === id2);
      if (index === -1) {
        throw new TypeError(`Unknown audio ref ${id2}; refs: ${refs.map((r2) => r2.id).join(", ")}`);
      }
      cloned[index] = false;
      takenAudios.current = cloned;
      audios.current = (_a = audios.current) == null ? void 0 : _a.filter((a2) => a2.id !== id2);
      rerenderAudios();
    }, [refs, rerenderAudios]);
    const updateAudio = reactExports.useCallback(({
      aud,
      audioId,
      id: id2,
      premounting,
      postmounting
    }) => {
      var _a;
      let changed = false;
      audios.current = (_a = audios.current) == null ? void 0 : _a.map((prevA) => {
        const audioMounted = Boolean(prevA.el.current);
        if (prevA.audioMounted !== audioMounted) {
          changed = true;
        }
        if (prevA.id === id2) {
          const isTheSame = compareProps(aud, prevA.props) && prevA.premounting === premounting && prevA.postmounting === postmounting;
          if (isTheSame) {
            return prevA.audioMounted === audioMounted ? prevA : { ...prevA, audioMounted };
          }
          changed = true;
          return {
            ...prevA,
            props: aud,
            premounting,
            postmounting,
            audioId,
            audioMounted
          };
        }
        return prevA.audioMounted === audioMounted ? prevA : { ...prevA, audioMounted };
      });
      if (changed) {
        rerenderAudios();
      }
    }, [rerenderAudios]);
    const playAllAudios = reactExports.useCallback(() => {
      refs.forEach((ref) => {
        const audio = audios.current.find((a2) => a2.el === ref.ref);
        if (audio == null ? void 0 : audio.premounting) {
          return;
        }
        playAndHandleNotAllowedError({
          mediaRef: ref.ref,
          mediaType: "audio",
          onAutoPlayError: null,
          logLevel,
          mountTime,
          reason: "playing all audios",
          isPlayer: env.isPlayer
        });
      });
      resume == null ? void 0 : resume();
    }, [logLevel, mountTime, refs, env.isPlayer, resume]);
    const audioTagsValue = reactExports.useMemo(() => {
      return {
        registerAudio,
        unregisterAudio,
        updateAudio,
        playAllAudios,
        numberOfAudioTags
      };
    }, [
      numberOfAudioTags,
      playAllAudios,
      registerAudio,
      unregisterAudio,
      updateAudio
    ]);
    const sharedAudioTagElements = reactExports.useMemo(() => {
      return refs.map(({ id: id2, ref }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("audio", {
          ref,
          preload: "metadata",
          src: EMPTY_AUDIO
        }, id2);
      });
    }, [refs]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SharedAudioTagsContext.Provider, {
      value: audioTagsValue,
      children: [
        sharedAudioTagElements,
        children
      ]
    });
  };
  var useSharedAudio = ({
    aud,
    audioId,
    premounting,
    postmounting
  }) => {
    var _a;
    const audioCtx = reactExports.useContext(SharedAudioContext);
    const tagsCtx = reactExports.useContext(SharedAudioTagsContext);
    const [elem] = reactExports.useState(() => {
      if (tagsCtx && tagsCtx.numberOfAudioTags > 0) {
        return tagsCtx.registerAudio({ aud, audioId, premounting, postmounting });
      }
      const el2 = React14.createRef();
      const mediaElementSourceNode = makeSharedElementSourceNode({
        audioContext: (audioCtx == null ? void 0 : audioCtx.audioContext) ?? null,
        ref: el2
      });
      return {
        el: el2,
        id: Math.random(),
        props: aud,
        audioId,
        mediaElementSourceNode,
        premounting,
        audioMounted: Boolean(el2.current),
        postmounting,
        cleanupOnMediaTagUnmount: () => {
          mediaElementSourceNode == null ? void 0 : mediaElementSourceNode.cleanup();
        }
      };
    });
    (_a = elem.mediaElementSourceNode) == null ? void 0 : _a.setAudioContext((audioCtx == null ? void 0 : audioCtx.audioContext) ?? null);
    const effectToUse = React14.useInsertionEffect ?? React14.useLayoutEffect;
    if (typeof document !== "undefined") {
      effectToUse(() => {
        if (tagsCtx && tagsCtx.numberOfAudioTags > 0) {
          tagsCtx.updateAudio({
            id: elem.id,
            aud,
            audioId,
            premounting,
            postmounting
          });
        }
      }, [aud, tagsCtx, elem.id, audioId, premounting, postmounting]);
      effectToUse(() => {
        return () => {
          if (tagsCtx && tagsCtx.numberOfAudioTags > 0) {
            tagsCtx.unregisterAudio(elem.id);
          }
        };
      }, [tagsCtx, elem.id]);
    }
    return elem;
  };
  var FLOATING_POINT_ERROR_THRESHOLD = 1e-5;
  var isApproximatelyTheSame = (num1, num2) => {
    return Math.abs(num1 - num2) < FLOATING_POINT_ERROR_THRESHOLD;
  };
  var toSeconds = (time, fps) => {
    return Math.round(time / fps * 100) / 100;
  };
  var isSafari = () => {
    if (typeof window === "undefined") {
      return false;
    }
    const isAppleWebKit = /AppleWebKit/.test(window.navigator.userAgent);
    if (!isAppleWebKit) {
      return false;
    }
    const isNotChrome = !window.navigator.userAgent.includes("Chrome/");
    return isNotChrome;
  };
  var isIosSafari = () => {
    if (typeof window === "undefined") {
      return false;
    }
    const { userAgent, platform, maxTouchPoints } = window.navigator;
    const isIpadIPodIPhone = /iP(ad|od|hone)/i.test(userAgent);
    const isIpadOsDesktopMode = platform === "MacIntel" && maxTouchPoints > 1;
    return (isIpadIPodIPhone || isIpadOsDesktopMode) && isSafari();
  };
  var isIOSSafariAndBlob = (actualSrc) => {
    return isIosSafari() && actualSrc.startsWith("blob:");
  };
  var getVideoFragmentStart = ({
    actualFrom,
    fps
  }) => {
    return toSeconds(Math.max(0, -actualFrom), fps);
  };
  var getVideoFragmentEnd = ({
    duration: duration2,
    fps
  }) => {
    return toSeconds(duration2, fps);
  };
  var appendVideoFragment = ({
    actualSrc,
    actualFrom,
    duration: duration2,
    fps
  }) => {
    if (isIOSSafariAndBlob(actualSrc)) {
      return actualSrc;
    }
    if (actualSrc.startsWith("data:")) {
      return actualSrc;
    }
    const existingHash = Boolean(new URL(actualSrc, (typeof window === "undefined" ? null : window.location.href) ?? "http://localhost:3000").hash);
    if (existingHash) {
      return actualSrc;
    }
    if (!Number.isFinite(actualFrom)) {
      return actualSrc;
    }
    const withStartHash = `${actualSrc}#t=${getVideoFragmentStart({ actualFrom, fps })}`;
    if (!Number.isFinite(duration2)) {
      return withStartHash;
    }
    return `${withStartHash},${getVideoFragmentEnd({ duration: duration2, fps })}`;
  };
  var isSubsetOfDuration = ({
    prevStartFrom,
    newStartFrom,
    prevDuration,
    newDuration,
    fps
  }) => {
    const previousFrom = getVideoFragmentStart({ actualFrom: prevStartFrom, fps });
    const newFrom = getVideoFragmentStart({ actualFrom: newStartFrom, fps });
    const previousEnd = getVideoFragmentEnd({ duration: prevDuration, fps });
    const newEnd = getVideoFragmentEnd({ duration: newDuration, fps });
    if (newFrom < previousFrom) {
      return false;
    }
    if (newEnd > previousEnd) {
      return false;
    }
    return true;
  };
  var useAppendVideoFragment = ({
    actualSrc: initialActualSrc,
    actualFrom: initialActualFrom,
    duration: initialDuration,
    fps
  }) => {
    const actualFromRef = reactExports.useRef(initialActualFrom);
    const actualDuration = reactExports.useRef(initialDuration);
    const actualSrc = reactExports.useRef(initialActualSrc);
    if (!isSubsetOfDuration({
      prevStartFrom: actualFromRef.current,
      newStartFrom: initialActualFrom,
      prevDuration: actualDuration.current,
      newDuration: initialDuration,
      fps
    }) || initialActualSrc !== actualSrc.current) {
      actualFromRef.current = initialActualFrom;
      actualDuration.current = initialDuration;
      actualSrc.current = initialActualSrc;
    }
    const appended = appendVideoFragment({
      actualSrc: actualSrc.current,
      actualFrom: actualFromRef.current,
      duration: actualDuration.current,
      fps
    });
    return appended;
  };
  var warned2 = false;
  var warnSafariOnce = (logLevel) => {
    if (warned2) {
      return;
    }
    warned2 = true;
    Log.warn({ logLevel, tag: null }, "In Safari, setting a volume and a playback rate at the same time is buggy.");
    Log.warn({ logLevel, tag: null }, "In Desktop Safari, only volumes <= 1 will be applied.");
    Log.warn({ logLevel, tag: null }, logLevel, "In Mobile Safari, the volume will be ignored and set to 1 if a playbackRate is set.");
  };
  var useVolume = ({
    mediaRef,
    volume,
    logLevel,
    source,
    shouldUseWebAudioApi
  }) => {
    var _a, _b, _c;
    const audioStuffRef = reactExports.useRef(null);
    const currentVolumeRef = reactExports.useRef(volume);
    currentVolumeRef.current = volume;
    const sharedAudioContext = reactExports.useContext(SharedAudioContext);
    if (!sharedAudioContext) {
      throw new Error("useAmplification must be used within a SharedAudioContext");
    }
    const { audioContext, gainNode: masterGainNode } = sharedAudioContext;
    if (typeof window !== "undefined") {
      reactExports.useLayoutEffect(() => {
        var _a2, _b2;
        if (!audioContext) {
          return;
        }
        if (!mediaRef.current) {
          return;
        }
        if (!shouldUseWebAudioApi) {
          return;
        }
        if (mediaRef.current.playbackRate !== 1 && isSafari()) {
          warnSafariOnce(logLevel);
          return;
        }
        if (!source) {
          return;
        }
        if (!masterGainNode) {
          return;
        }
        const gainNode = new GainNode(audioContext, {
          gain: currentVolumeRef.current
        });
        source.attemptToConnect();
        source.get().connect(gainNode);
        gainNode.connect(masterGainNode);
        audioStuffRef.current = {
          gainNode
        };
        Log.trace({ logLevel, tag: null }, `Starting to amplify ${(_a2 = mediaRef.current) == null ? void 0 : _a2.src}. Gain = ${currentVolumeRef.current}, playbackRate = ${(_b2 = mediaRef.current) == null ? void 0 : _b2.playbackRate}`);
        return () => {
          audioStuffRef.current = null;
          gainNode.disconnect();
          source.get().disconnect();
        };
      }, [
        logLevel,
        mediaRef,
        audioContext,
        source,
        shouldUseWebAudioApi,
        masterGainNode
      ]);
    }
    if (audioStuffRef.current) {
      const valueToSet = volume;
      if (!isApproximatelyTheSame(audioStuffRef.current.gainNode.gain.value, valueToSet)) {
        audioStuffRef.current.gainNode.gain.value = valueToSet;
        Log.trace({ logLevel, tag: null }, `Setting gain to ${valueToSet} for ${(_a = mediaRef.current) == null ? void 0 : _a.src}`);
      }
    }
    const safariCase = isSafari() && mediaRef.current && ((_b = mediaRef.current) == null ? void 0 : _b.playbackRate) !== 1;
    const shouldUseTraditionalVolume = safariCase || !shouldUseWebAudioApi;
    if (shouldUseTraditionalVolume && mediaRef.current && !isApproximatelyTheSame(volume, (_c = mediaRef.current) == null ? void 0 : _c.volume)) {
      mediaRef.current.volume = Math.min(volume, 1);
    }
    return audioStuffRef;
  };
  var useMediaStartsAt = () => {
    const parentSequence = reactExports.useContext(SequenceContext);
    return (parentSequence == null ? void 0 : parentSequence.cumulatedNegativeFrom) ?? 0;
  };
  var useFrameForVolumeProp = (behavior) => {
    const loop = Loop.useLoop();
    const frame = useCurrentFrame();
    const startsAt = useMediaStartsAt();
    if (behavior === "repeat" || loop === null) {
      return frame + startsAt;
    }
    return frame + startsAt + loop.durationInFrames * loop.iteration;
  };
  var getAssetDisplayName = (filename) => {
    var _a;
    if (filename.startsWith("data:")) {
      return "Data URL";
    }
    if (filename.startsWith("blob:")) {
      const staticFile = typeof window === "undefined" ? void 0 : (_a = window.remotion_staticFiles) == null ? void 0 : _a.find((file) => file.src === filename);
      return staticFile ? getAssetDisplayName(staticFile.name) : "Blob URL";
    }
    const splitted = filename.split("/").map((s) => s.split("\\")).flat(1);
    return splitted[splitted.length - 1];
  };
  var getTimelineDuration = ({
    compositionDurationInFrames,
    playbackRate,
    trimBefore,
    trimAfter,
    parentSequenceDurationInFrames,
    loop
  }) => {
    if (loop) {
      return compositionDurationInFrames;
    }
    const mediaDuration = calculateMediaDuration({
      mediaDurationInFrames: compositionDurationInFrames * playbackRate + (trimBefore ?? 0),
      playbackRate,
      trimBefore,
      trimAfter
    });
    if (parentSequenceDurationInFrames !== null) {
      const cappedDuration = Math.min(parentSequenceDurationInFrames, mediaDuration);
      return Number(cappedDuration.toFixed(10));
    }
    return mediaDuration;
  };
  var evaluateVolume = ({
    frame,
    volume,
    mediaVolume = 1
  }) => {
    if (typeof volume === "number") {
      return volume * mediaVolume;
    }
    if (typeof volume === "undefined") {
      return Number(mediaVolume);
    }
    const evaluated = volume(frame) * mediaVolume;
    if (typeof evaluated !== "number") {
      throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof evaluated} for frame ${frame}`);
    }
    if (Number.isNaN(evaluated)) {
      throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${frame}.`);
    }
    if (!Number.isFinite(evaluated)) {
      throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${frame}.`);
    }
    return Math.max(0, evaluated);
  };
  var didWarn = {};
  var warnOnce2 = (message) => {
    if (didWarn[message]) {
      return;
    }
    console.warn(message);
    didWarn[message] = true;
  };
  var useBasicMediaInTimeline = ({
    volume,
    mediaVolume,
    mediaType,
    src,
    displayName,
    trimBefore,
    trimAfter,
    playbackRate,
    sequenceDurationInFrames,
    mediaStartsAt,
    loop,
    muted
  }) => {
    if (!src) {
      throw new Error("No src passed");
    }
    const parentSequence = reactExports.useContext(SequenceContext);
    const [initialVolume] = reactExports.useState(() => volume);
    const duration2 = getTimelineDuration({
      compositionDurationInFrames: sequenceDurationInFrames,
      playbackRate,
      trimBefore,
      trimAfter,
      parentSequenceDurationInFrames: (parentSequence == null ? void 0 : parentSequence.durationInFrames) ?? null,
      loop
    });
    const volumes = reactExports.useMemo(() => {
      if (typeof volume === "number") {
        return volume;
      }
      if (typeof volume !== "function") {
        return evaluateVolume({
          frame: 0,
          volume,
          mediaVolume
        });
      }
      return new Array(Math.floor(Math.max(0, duration2 + mediaStartsAt))).fill(true).map((_, i) => {
        return evaluateVolume({
          frame: i + mediaStartsAt,
          volume,
          mediaVolume
        });
      }).join(",");
    }, [duration2, mediaStartsAt, volume, mediaVolume]);
    reactExports.useEffect(() => {
      if (typeof volume === "number" && volume !== initialVolume) {
        warnOnce2(`Remotion: The ${mediaType} with src ${src} has changed it's volume. Prefer the callback syntax for setting volume to get better timeline display: https://www.remotion.dev/docs/audio/volume`);
      }
    }, [initialVolume, mediaType, src, volume]);
    const doesVolumeChange = typeof volume === "function";
    const startMediaFrom = 0 - mediaStartsAt + (trimBefore ?? 0);
    const memoizedResult = reactExports.useMemo(() => {
      return {
        volumes,
        duration: duration2,
        doesVolumeChange,
        finalDisplayName: displayName ?? getAssetDisplayName(src),
        startMediaFrom,
        src,
        playbackRate,
        muted
      };
    }, [
      volumes,
      duration2,
      doesVolumeChange,
      displayName,
      src,
      startMediaFrom,
      playbackRate,
      muted
    ]);
    return memoizedResult;
  };
  var useMediaInTimeline = ({
    volume,
    mediaVolume,
    src,
    mediaType,
    playbackRate,
    displayName,
    id: id2,
    getStack,
    showInTimeline,
    premountDisplay,
    postmountDisplay,
    loopDisplay,
    documentationLink,
    refForOutline,
    muted
  }) => {
    var _a, _b;
    const parentSequence = reactExports.useContext(SequenceContext);
    const startsAt = useMediaStartsAt();
    const sequenceRegistrationEnabled = reactExports.useContext(SequenceRegistrationContext);
    const { durationInFrames } = useVideoConfig();
    const mediaStartsAt = useMediaStartsAt();
    const { volumes, duration: duration2, doesVolumeChange, finalDisplayName } = useBasicMediaInTimeline({
      volume,
      mediaVolume,
      mediaType,
      src,
      displayName,
      trimAfter: void 0,
      trimBefore: void 0,
      playbackRate,
      sequenceDurationInFrames: durationInFrames,
      mediaStartsAt,
      loop: false,
      muted
    });
    const { isStudio } = useRemotionEnvironment();
    const getSequenceForRegistration = reactExports.useCallback(() => {
      if (!src) {
        throw new Error("No src passed");
      }
      return {
        effectRuntimeValues: null,
        type: mediaType,
        src,
        id: id2,
        duration: duration2,
        from: 0,
        trimBefore: null,
        parent: (parentSequence == null ? void 0 : parentSequence.id) ?? null,
        displayName: finalDisplayName,
        documentationLink,
        volume: volumes,
        muted,
        showInTimeline: true,
        timelineOrder: null,
        startMediaFrom: 0 - startsAt,
        mediaFrameAtSequenceZero: null,
        doesVolumeChange,
        loopDisplay,
        playbackRate,
        getStack,
        premountDisplay,
        postmountDisplay,
        controls: null,
        effects: [],
        refForOutline,
        isInsideSeries: false,
        frozenFrame: null,
        frozenMediaFrame: null
      };
    }, [
      duration2,
      id2,
      parentSequence,
      src,
      volumes,
      doesVolumeChange,
      mediaType,
      startsAt,
      playbackRate,
      getStack,
      premountDisplay,
      postmountDisplay,
      loopDisplay,
      documentationLink,
      finalDisplayName,
      refForOutline,
      muted
    ]);
    const registrationEnabled = isStudio || sequenceRegistrationEnabled || typeof window !== "undefined" && ((_b = (_a = window.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV) === "test";
    useSequenceRegistration({
      getSequence: registrationEnabled && showInTimeline ? getSequenceForRegistration : null,
      id: id2
    });
  };
  var useBufferManager = (logLevel, mountTime, setBuffering, isBuffering) => {
    const [blockCount, setBlockCount] = reactExports.useState(0);
    const env = useRemotionEnvironment();
    const rendering = env.isRendering;
    const addBlock = reactExports.useCallback(() => {
      if (rendering) {
        return {
          unblock: () => {
            return;
          }
        };
      }
      let unblocked = false;
      setBlockCount((count) => count + 1);
      return {
        unblock: () => {
          if (unblocked) {
            return;
          }
          unblocked = true;
          setBlockCount((count) => count - 1);
        }
      };
    }, [rendering]);
    reactExports.useEffect(() => {
      if (rendering) {
        return;
      }
      if (blockCount > 0 && !isBuffering()) {
        setBuffering(true);
        playbackLogging({
          logLevel,
          message: "Player is entering buffer state",
          mountTime,
          tag: "player"
        });
      }
    }, [blockCount]);
    if (typeof window !== "undefined") {
      reactExports.useLayoutEffect(() => {
        if (rendering) {
          return;
        }
        if (blockCount === 0 && isBuffering()) {
          setBuffering(false);
          playbackLogging({
            logLevel,
            message: "Player is exiting buffer state",
            mountTime,
            tag: "player"
          });
        }
      }, [blockCount]);
    }
    return reactExports.useMemo(() => ({ addBlock }), [addBlock]);
  };
  var BufferingContextReact = React14.createContext(null);
  var BufferingProvider = ({ children }) => {
    const { logLevel, mountTime } = reactExports.useContext(LogLevelContext);
    const { isBuffering, setBuffering } = reactExports.useContext(SetTimelineContext);
    const bufferManager = useBufferManager(logLevel ?? "info", mountTime, setBuffering, isBuffering);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(BufferingContextReact.Provider, {
      value: bufferManager,
      children
    });
  };
  var useBufferState = () => {
    const buffer = reactExports.useContext(BufferingContextReact);
    const logLevel = useLogLevel();
    const addBlock = buffer ? buffer.addBlock : null;
    return reactExports.useMemo(() => ({
      delayPlayback: () => {
        if (!addBlock) {
          throw new Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");
        }
        Log.trace({ logLevel, tag: "[buffer-state]" }, "Adding buffer handle", new Error().stack);
        const { unblock } = addBlock();
        let unblocked = false;
        return {
          unblock: () => {
            if (unblocked) {
              return;
            }
            unblocked = true;
            Log.trace({ logLevel, tag: "[buffer-state]" }, "Removing buffer handle");
            unblock();
          }
        };
      }
    }), [addBlock, logLevel]);
  };
  var isSafariWebkit = () => {
    const isSafari2 = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
    return isSafari2;
  };
  var useBufferUntilFirstFrame = ({
    mediaRef,
    mediaType,
    onVariableFpsVideoDetected,
    pauseWhenBuffering,
    logLevel,
    mountTime
  }) => {
    const bufferingRef = reactExports.useRef(false);
    const { delayPlayback } = useBufferState();
    const bufferUntilFirstFrame = reactExports.useCallback((requestedTime) => {
      var _a;
      if (mediaType !== "video") {
        return;
      }
      if (!pauseWhenBuffering) {
        return;
      }
      const current = mediaRef.current;
      if (!current) {
        return;
      }
      if (current.readyState >= current.HAVE_FUTURE_DATA && !isSafariWebkit()) {
        playbackLogging({
          logLevel,
          message: `Not using buffer until first frame, because readyState is ${current.readyState} and is not Safari or Desktop Chrome`,
          mountTime,
          tag: "buffer"
        });
        return;
      }
      if (!current.requestVideoFrameCallback) {
        playbackLogging({
          logLevel,
          message: `Not using buffer until first frame, because requestVideoFrameCallback is not supported`,
          mountTime,
          tag: "buffer"
        });
        return;
      }
      bufferingRef.current = true;
      playbackLogging({
        logLevel,
        message: `Buffering ${(_a = mediaRef.current) == null ? void 0 : _a.src} until the first frame is received`,
        mountTime,
        tag: "buffer"
      });
      const playback = delayPlayback();
      const unblock = () => {
        playback.unblock();
        current.removeEventListener("ended", unblock, {
          once: true
        });
        current.removeEventListener("pause", unblock, {
          once: true
        });
        bufferingRef.current = false;
      };
      const onEndedOrPauseOrCanPlay = () => {
        unblock();
      };
      current.requestVideoFrameCallback((_, info2) => {
        const differenceFromRequested = Math.abs(info2.mediaTime - requestedTime);
        if (differenceFromRequested > 0.5) {
          onVariableFpsVideoDetected();
        }
        unblock();
      });
      current.addEventListener("ended", onEndedOrPauseOrCanPlay, { once: true });
      current.addEventListener("pause", onEndedOrPauseOrCanPlay, { once: true });
      current.addEventListener("canplay", onEndedOrPauseOrCanPlay, {
        once: true
      });
    }, [
      delayPlayback,
      logLevel,
      mediaRef,
      mediaType,
      mountTime,
      onVariableFpsVideoDetected,
      pauseWhenBuffering
    ]);
    return reactExports.useMemo(() => {
      return {
        isBuffering: () => bufferingRef.current,
        bufferUntilFirstFrame
      };
    }, [bufferUntilFirstFrame]);
  };
  var getMediaSyncAction = (input) => {
    const {
      duration: duration2,
      currentTime,
      paused,
      ended,
      desiredUnclampedTime,
      mediaTagTime,
      mediaTagLastUpdate,
      rvcTime,
      rvcLastUpdate,
      isVariableFpsVideo,
      acceptableTimeShift,
      lastSeekDueToShift,
      playing,
      playbackRate,
      mediaTagBufferingOrStalled,
      playerBuffering,
      absoluteFrame,
      onlyWarnForMediaSeekingError,
      isPremounting,
      isPostmounting,
      pauseWhenBuffering
    } = input;
    const shouldBeTime = !Number.isNaN(duration2) && Number.isFinite(duration2) ? Math.min(duration2, desiredUnclampedTime) : desiredUnclampedTime;
    const timeShiftMediaTag = Math.abs(shouldBeTime - mediaTagTime);
    const timeShiftRvcTag = rvcTime ? Math.abs(shouldBeTime - rvcTime) : null;
    const mostRecentTimeshift = rvcLastUpdate && rvcTime > mediaTagLastUpdate ? timeShiftRvcTag : timeShiftMediaTag;
    const timeShift = timeShiftRvcTag && !isVariableFpsVideo ? mostRecentTimeshift : timeShiftMediaTag;
    if (timeShift > acceptableTimeShift && lastSeekDueToShift !== shouldBeTime) {
      return {
        type: "seek-due-to-shift",
        shouldBeTime,
        why: `because time shift is too big. shouldBeTime = ${shouldBeTime}, isTime = ${mediaTagTime}, requestVideoCallbackTime = ${rvcTime}, timeShift = ${timeShift}${isVariableFpsVideo ? ", isVariableFpsVideo = true" : ""}, isPremounting = ${isPremounting}, isPostmounting = ${isPostmounting}, pauseWhenBuffering = ${pauseWhenBuffering}`,
        bufferUntilFirstFrame: playing && playbackRate > 0,
        playReason: playing && paused ? "player is playing but media tag is paused, and just seeked" : null,
        warnAboutNonSeekable: !onlyWarnForMediaSeekingError
      };
    }
    const seekThreshold = playing ? 0.15 : 0.01;
    const makesSenseToSeek = Math.abs(currentTime - shouldBeTime) > seekThreshold;
    const isSomethingElseBuffering = playerBuffering && !mediaTagBufferingOrStalled;
    if (!playing || isSomethingElseBuffering) {
      return {
        type: "seek-if-not-playing",
        shouldBeTime,
        why: makesSenseToSeek ? `not playing or something else is buffering. time offset is over seek threshold (${seekThreshold})` : null
      };
    }
    if (!playing || playerBuffering) {
      return { type: "none" };
    }
    const pausedCondition = paused && !ended;
    const firstFrameCondition = absoluteFrame === 0;
    if (pausedCondition || firstFrameCondition) {
      const reason = pausedCondition ? "media tag is paused" : "absolute frame is 0";
      return {
        type: "play-and-seek",
        shouldBeTime,
        why: makesSenseToSeek ? `is over timeshift threshold (threshold = ${seekThreshold}) and ${reason}` : null,
        playReason: `player is playing and ${reason}`,
        bufferUntilFirstFrame: !isVariableFpsVideo && playbackRate > 0
      };
    }
    return { type: "none" };
  };
  var useCurrentTimeOfMediaTagWithUpdateTimeStamp = (mediaRef) => {
    var _a, _b;
    const lastUpdate = React14.useRef({
      time: ((_a = mediaRef.current) == null ? void 0 : _a.currentTime) ?? 0,
      lastUpdate: performance.now()
    });
    const nowCurrentTime = ((_b = mediaRef.current) == null ? void 0 : _b.currentTime) ?? null;
    if (nowCurrentTime !== null) {
      if (lastUpdate.current.time !== nowCurrentTime) {
        lastUpdate.current.time = nowCurrentTime;
        lastUpdate.current.lastUpdate = performance.now();
      }
    }
    return lastUpdate;
  };
  var seek = ({
    mediaRef,
    time,
    logLevel,
    why,
    mountTime
  }) => {
    const timeToSet = isIosSafari() ? Number(time.toFixed(1)) : time;
    playbackLogging({
      logLevel,
      tag: "seek",
      message: `Seeking from ${mediaRef.currentTime} to ${timeToSet}. src= ${mediaRef.src} Reason: ${why}`,
      mountTime
    });
    mediaRef.currentTime = timeToSet;
    return timeToSet;
  };
  var useMediaBuffering = ({
    element,
    shouldBuffer,
    isPremounting,
    isPostmounting,
    logLevel,
    mountTime,
    src
  }) => {
    const buffer = useBufferState();
    const [isBuffering, setIsBuffering] = reactExports.useState(false);
    reactExports.useEffect(() => {
      let cleanupFns = [];
      const { current } = element;
      if (!current) {
        return;
      }
      if (!shouldBuffer) {
        return;
      }
      if (isPremounting || isPostmounting) {
        if ((isPremounting || isPostmounting) && current.readyState < current.HAVE_FUTURE_DATA) {
          if (!navigator.userAgent.includes("Firefox/")) {
            playbackLogging({
              logLevel,
              message: `Calling .load() on ${current.src} because readyState is ${current.readyState} and it is not Firefox. Element is premounted ${current.playbackRate}`,
              tag: "load",
              mountTime
            });
            const previousPlaybackRate = current.playbackRate;
            current.load();
            current.playbackRate = previousPlaybackRate;
          }
        }
        return;
      }
      const cleanup = (reason) => {
        let didDoSomething = false;
        cleanupFns.forEach((fn) => {
          fn(reason);
          didDoSomething = true;
        });
        cleanupFns = [];
        setIsBuffering((previous) => {
          if (previous) {
            didDoSomething = true;
          }
          return false;
        });
        if (didDoSomething) {
          playbackLogging({
            logLevel,
            message: `Unmarking as buffering: ${current.src}. Reason: ${reason}`,
            tag: "buffer",
            mountTime
          });
        }
      };
      const blockMedia = (reason) => {
        setIsBuffering(true);
        playbackLogging({
          logLevel,
          message: `Marking as buffering: ${current.src}. Reason: ${reason}`,
          tag: "buffer",
          mountTime
        });
        const { unblock } = buffer.delayPlayback();
        const onCanPlay = () => {
          cleanup('"canplay" was fired');
          init();
        };
        const onError = () => {
          cleanup('"error" event was occurred');
          init();
        };
        current.addEventListener("canplay", onCanPlay, {
          once: true
        });
        cleanupFns.push(() => {
          current.removeEventListener("canplay", onCanPlay);
        });
        current.addEventListener("error", onError, {
          once: true
        });
        cleanupFns.push(() => {
          current.removeEventListener("error", onError);
        });
        cleanupFns.push((cleanupReason) => {
          playbackLogging({
            logLevel,
            message: `Unblocking ${current.src} from buffer. Reason: ${cleanupReason}`,
            tag: "buffer",
            mountTime
          });
          unblock();
        });
      };
      const init = () => {
        if (current.readyState < current.HAVE_FUTURE_DATA) {
          blockMedia(`readyState is ${current.readyState}, which is less than HAVE_FUTURE_DATA`);
          if (!navigator.userAgent.includes("Firefox/")) {
            playbackLogging({
              logLevel,
              message: `Calling .load() on ${src} because readyState is ${current.readyState} and it is not Firefox. ${current.playbackRate}`,
              tag: "load",
              mountTime
            });
            const previousPlaybackRate = current.playbackRate;
            current.load();
            current.playbackRate = previousPlaybackRate;
          }
        } else {
          const onWaiting = () => {
            blockMedia('"waiting" event was fired');
          };
          current.addEventListener("waiting", onWaiting);
          cleanupFns.push(() => {
            current.removeEventListener("waiting", onWaiting);
          });
        }
      };
      init();
      return () => {
        cleanup("element was unmounted or prop changed");
      };
    }, [
      buffer,
      src,
      element,
      isPremounting,
      isPostmounting,
      logLevel,
      shouldBuffer,
      mountTime
    ]);
    return isBuffering;
  };
  var useRequestVideoCallbackTime = ({
    mediaRef,
    mediaType,
    lastSeek,
    onVariableFpsVideoDetected
  }) => {
    const currentTime = reactExports.useRef(null);
    reactExports.useEffect(() => {
      const { current } = mediaRef;
      if (current) {
        currentTime.current = {
          time: current.currentTime,
          lastUpdate: performance.now()
        };
      } else {
        currentTime.current = null;
        return;
      }
      if (mediaType !== "video") {
        currentTime.current = null;
        return;
      }
      const videoTag = current;
      if (!videoTag.requestVideoFrameCallback) {
        return;
      }
      let cancel = () => {
        return;
      };
      const request = () => {
        if (!videoTag) {
          return;
        }
        const cb2 = videoTag.requestVideoFrameCallback((_, info2) => {
          if (currentTime.current !== null) {
            const difference = Math.abs(currentTime.current.time - info2.mediaTime);
            const differenceToLastSeek = Math.abs(lastSeek.current === null ? Infinity : info2.mediaTime - lastSeek.current);
            if (difference > 0.5 && differenceToLastSeek > 0.5 && info2.mediaTime > currentTime.current.time) {
              onVariableFpsVideoDetected();
            }
          }
          currentTime.current = {
            time: info2.mediaTime,
            lastUpdate: performance.now()
          };
          request();
        });
        cancel = () => {
          videoTag.cancelVideoFrameCallback(cb2);
          cancel = () => {
            return;
          };
        };
      };
      request();
      return () => {
        cancel();
      };
    }, [lastSeek, mediaRef, mediaType, onVariableFpsVideoDetected]);
    return currentTime;
  };
  var getExpectedMediaFrameUncorrected = ({
    frame,
    playbackRate,
    startFrom
  }) => {
    return interpolate(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
  };
  var getMediaTime = ({
    fps,
    frame,
    playbackRate,
    startFrom
  }) => {
    const expectedFrame = getExpectedMediaFrameUncorrected({
      frame,
      playbackRate,
      startFrom
    });
    const msPerFrame = 1e3 / fps;
    return expectedFrame * msPerFrame / 1e3;
  };
  var alreadyWarned = {};
  var warnAboutNonSeekableMedia = (ref, type) => {
    if (ref === null) {
      return;
    }
    if (ref.seekable.length === 0) {
      return;
    }
    if (ref.seekable.length > 1) {
      return;
    }
    if (alreadyWarned[ref.src]) {
      return;
    }
    const range = { start: ref.seekable.start(0), end: ref.seekable.end(0) };
    if (range.start === 0 && range.end === 0) {
      const msg = [
        `The media ${ref.src} cannot be seeked. This could be one of few reasons:`,
        "1) The media resource was replaced while the video is playing but it was not loaded yet.",
        "2) The media does not support seeking.",
        "3) The media was loaded with security headers prventing it from being included.",
        "Please see https://remotion.dev/docs/non-seekable-media for assistance."
      ].join(`
`);
      {
        console.error(msg);
      }
      alreadyWarned[ref.src] = true;
    }
  };
  var DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION = 0.65;
  var getPauseReason = ({
    reason,
    isPremounting,
    isPostmounting
  }) => {
    if (reason === "buffering") {
      return "player is buffering but media tag is not";
    }
    if (isPremounting) {
      return "media is premounting";
    }
    if (isPostmounting) {
      return "media is postmounting";
    }
    return "Player is not playing";
  };
  var useMediaPlayback = ({
    mediaRef,
    src,
    mediaType,
    playbackRate: localPlaybackRate,
    preservePitch = true,
    onlyWarnForMediaSeekingError,
    acceptableTimeshift,
    pauseWhenBuffering,
    isPremounting,
    isPostmounting,
    onAutoPlayError
  }) => {
    const { playbackRate: globalPlaybackRate } = usePlaybackRate();
    const frame = useCurrentFrame();
    const absoluteFrame = useTimelinePosition();
    const playing = usePlaying();
    const playerBuffering = useBuffering();
    const { fps } = useVideoConfig();
    const mediaStartsAt = useMediaStartsAt();
    const lastSeekDueToShift = reactExports.useRef(null);
    const lastSeek = reactExports.useRef(null);
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const isVariableFpsVideoMap = reactExports.useRef({});
    const onVariableFpsVideoDetected = reactExports.useCallback(() => {
      if (!src) {
        return;
      }
      if (isVariableFpsVideoMap.current[src]) {
        return;
      }
      Log.verbose({ logLevel, tag: null }, `Detected ${src} as a variable FPS video. Disabling buffering while seeking.`);
      isVariableFpsVideoMap.current[src] = true;
    }, [logLevel, src]);
    const rvcCurrentTime = useRequestVideoCallbackTime({
      mediaRef,
      mediaType,
      lastSeek,
      onVariableFpsVideoDetected
    });
    const mediaTagCurrentTime = useCurrentTimeOfMediaTagWithUpdateTimeStamp(mediaRef);
    const desiredUnclampedTime = getMediaTime({
      frame,
      playbackRate: localPlaybackRate,
      startFrom: -mediaStartsAt,
      fps
    });
    const isMediaTagBuffering = useMediaBuffering({
      element: mediaRef,
      shouldBuffer: pauseWhenBuffering,
      isPremounting,
      isPostmounting,
      logLevel,
      mountTime,
      src: src ?? null
    });
    const { bufferUntilFirstFrame, isBuffering } = useBufferUntilFirstFrame({
      mediaRef,
      mediaType,
      onVariableFpsVideoDetected,
      pauseWhenBuffering,
      logLevel,
      mountTime
    });
    const playbackRate = localPlaybackRate * globalPlaybackRate;
    const acceptableTimeShiftButLessThanDuration = (() => {
      var _a;
      if ((_a = mediaRef.current) == null ? void 0 : _a.duration) {
        return Math.min(mediaRef.current.duration, acceptableTimeshift ?? DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION);
      }
      return acceptableTimeshift ?? DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION;
    })();
    const env = useRemotionEnvironment();
    reactExports.useLayoutEffect(() => {
      const playbackRateToSet = Math.max(0, playbackRate);
      if (mediaRef.current && mediaRef.current.defaultPlaybackRate !== playbackRateToSet) {
        mediaRef.current.defaultPlaybackRate = playbackRateToSet;
      }
      if (mediaRef.current && mediaRef.current.playbackRate !== playbackRateToSet) {
        mediaRef.current.playbackRate = playbackRateToSet;
      }
      if (mediaRef.current && mediaRef.current.preservesPitch !== preservePitch) {
        mediaRef.current.preservesPitch = preservePitch;
      }
    }, [mediaRef, playbackRate, preservePitch]);
    reactExports.useEffect(() => {
      var _a, _b;
      const tagName = mediaType === "audio" ? "<Html5Audio>" : "<Html5Video>";
      if (!mediaRef.current) {
        throw new Error(`No ${mediaType} ref found`);
      }
      if (!src) {
        throw new Error(`No 'src' attribute was passed to the ${tagName} element.`);
      }
      const { current } = mediaRef;
      const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
      let pauseReason = null;
      if (!playing) {
        pauseReason = "not-playing";
      } else if (playerBuffering && !isMediaTagBufferingOrStalled) {
        pauseReason = "buffering";
      }
      if (!current.paused && pauseReason !== null) {
        playbackLogging({
          logLevel,
          tag: "pause",
          message: `Pausing ${current.src} because ${getPauseReason({
            reason: pauseReason,
            isPremounting,
            isPostmounting
          })}`,
          mountTime
        });
        current.pause();
      }
      const action = getMediaSyncAction({
        duration: current.duration,
        currentTime: current.currentTime,
        paused: current.paused,
        ended: current.ended,
        desiredUnclampedTime,
        mediaTagTime: mediaTagCurrentTime.current.time,
        mediaTagLastUpdate: mediaTagCurrentTime.current.lastUpdate,
        rvcTime: ((_a = rvcCurrentTime.current) == null ? void 0 : _a.time) ?? null,
        rvcLastUpdate: ((_b = rvcCurrentTime.current) == null ? void 0 : _b.lastUpdate) ?? null,
        isVariableFpsVideo: Boolean(isVariableFpsVideoMap.current[src]),
        acceptableTimeShift: acceptableTimeShiftButLessThanDuration,
        lastSeekDueToShift: lastSeekDueToShift.current,
        playing,
        playbackRate,
        mediaTagBufferingOrStalled: isMediaTagBufferingOrStalled,
        playerBuffering,
        absoluteFrame,
        onlyWarnForMediaSeekingError,
        isPremounting,
        isPostmounting,
        pauseWhenBuffering
      });
      if (action.type === "none") {
        return;
      }
      if (action.type === "seek-due-to-shift") {
        lastSeek.current = seek({
          mediaRef: current,
          time: action.shouldBeTime,
          logLevel,
          why: action.why,
          mountTime
        });
        lastSeekDueToShift.current = lastSeek.current;
        if (action.bufferUntilFirstFrame) {
          bufferUntilFirstFrame(action.shouldBeTime);
        }
        if (action.playReason !== null) {
          playAndHandleNotAllowedError({
            mediaRef,
            mediaType,
            onAutoPlayError,
            logLevel,
            mountTime,
            reason: action.playReason,
            isPlayer: env.isPlayer
          });
        }
        if (action.warnAboutNonSeekable) {
          warnAboutNonSeekableMedia(current);
        }
        return;
      }
      if (action.type === "seek-if-not-playing") {
        if (action.why !== null) {
          lastSeek.current = seek({
            mediaRef: current,
            time: action.shouldBeTime,
            logLevel,
            why: action.why,
            mountTime
          });
        }
        return;
      }
      if (action.why !== null) {
        lastSeek.current = seek({
          mediaRef: current,
          time: action.shouldBeTime,
          logLevel,
          why: action.why,
          mountTime
        });
      }
      playAndHandleNotAllowedError({
        mediaRef,
        mediaType,
        onAutoPlayError,
        logLevel,
        mountTime,
        reason: action.playReason,
        isPlayer: env.isPlayer
      });
      if (action.bufferUntilFirstFrame) {
        bufferUntilFirstFrame(action.shouldBeTime);
      }
    }, [
      absoluteFrame,
      acceptableTimeShiftButLessThanDuration,
      bufferUntilFirstFrame,
      rvcCurrentTime,
      logLevel,
      desiredUnclampedTime,
      isBuffering,
      isMediaTagBuffering,
      mediaRef,
      mediaType,
      onlyWarnForMediaSeekingError,
      playbackRate,
      playerBuffering,
      playing,
      src,
      onAutoPlayError,
      isPremounting,
      isPostmounting,
      pauseWhenBuffering,
      mountTime,
      mediaTagCurrentTime,
      env.isPlayer
    ]);
  };
  var useMediaTag = ({
    mediaRef,
    id: id2,
    mediaType,
    onAutoPlayError,
    isPremounting,
    isPostmounting
  }) => {
    const { audioAndVideoTags, isPlaying } = useTimelineContext();
    const { subscribePlaying } = reactExports.useContext(SetTimelineContext);
    const isPlayingRef = reactExports.useRef(isPlaying);
    isPlayingRef.current = isPlaying;
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const env = useRemotionEnvironment();
    reactExports.useEffect(() => {
      const tag = {
        id: id2,
        play: (reason) => {
          if (!isPlayingRef.current()) {
            return;
          }
          if (isPremounting || isPostmounting) {
            return;
          }
          return playAndHandleNotAllowedError({
            mediaRef,
            mediaType,
            onAutoPlayError,
            logLevel,
            mountTime,
            reason,
            isPlayer: env.isPlayer
          });
        }
      };
      audioAndVideoTags.current.push(tag);
      const unsubscribe = subscribePlaying((state) => {
        if (state.playing) {
          return;
        }
        const media = mediaRef.current;
        if (!media || media.paused) {
          return;
        }
        playbackLogging({
          logLevel,
          tag: "pause",
          message: `Pausing ${media.src} because Player is not playing`,
          mountTime
        });
        media.pause();
      });
      return () => {
        unsubscribe();
        audioAndVideoTags.current = audioAndVideoTags.current.filter((a2) => a2.id !== id2);
      };
    }, [
      audioAndVideoTags,
      id2,
      mediaRef,
      mediaType,
      onAutoPlayError,
      isPremounting,
      isPostmounting,
      logLevel,
      mountTime,
      env.isPlayer,
      subscribePlaying
    ]);
  };
  var MediaVolumeContext = reactExports.createContext({
    playerMuted: false,
    mediaVolume: 1
  });
  var SetMediaVolumeContext = reactExports.createContext({
    setPlayerMuted: () => {
      throw new Error("default");
    },
    setMediaVolume: () => {
      throw new Error("default");
    }
  });
  var useMediaVolumeState = () => {
    const { mediaVolume } = reactExports.useContext(MediaVolumeContext);
    const { setMediaVolume } = reactExports.useContext(SetMediaVolumeContext);
    return reactExports.useMemo(() => {
      return [mediaVolume, setMediaVolume];
    }, [mediaVolume, setMediaVolume]);
  };
  var usePlayerMutedState = () => {
    const { playerMuted } = reactExports.useContext(MediaVolumeContext);
    const { setPlayerMuted } = reactExports.useContext(SetMediaVolumeContext);
    return reactExports.useMemo(() => {
      return [playerMuted, setPlayerMuted];
    }, [playerMuted, setPlayerMuted]);
  };
  var warnAboutTooHighVolume = (volume) => {
    if (volume >= 100) {
      throw new Error(`Volume was set to ${volume}, but regular volume is 1, not 100. Did you forget to divide by 100? Set a volume of less than 100 to dismiss this error.`);
    }
  };
  var AudioForDevelopmentForwardRefFunction = (props, ref) => {
    const [initialShouldPreMountAudioElements] = reactExports.useState(props.shouldPreMountAudioTags);
    if (props.shouldPreMountAudioTags !== initialShouldPreMountAudioElements) {
      throw new Error("Cannot change the behavior for pre-mounting audio tags dynamically.");
    }
    const logLevel = useLogLevel();
    const {
      volume,
      muted,
      playbackRate,
      preservePitch,
      shouldPreMountAudioTags,
      src,
      onDuration,
      acceptableTimeShiftInSeconds,
      _remotionInternalNeedsDurationCalculation,
      _remotionInternalNativeLoopPassed,
      _remotionInternalStack,
      allowAmplificationDuringRender,
      name,
      pauseWhenBuffering,
      showInTimeline,
      loopVolumeCurveBehavior,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      toneFrequency,
      useWebAudioApi,
      onError,
      onNativeError,
      audioStreamIndex,
      ...nativeProps
    } = props;
    const [mediaVolume] = useMediaVolumeState();
    const [playerMuted] = usePlayerMutedState();
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    if (!src) {
      throw new TypeError("No 'src' was passed to <Html5Audio>.");
    }
    const preloadedSrc = usePreload(src);
    const sequenceContext = reactExports.useContext(SequenceContext);
    const { isStudio } = useRemotionEnvironment();
    const [timelineId] = reactExports.useState(() => String(Math.random()));
    const userPreferredVolume = evaluateVolume({
      frame: volumePropFrame,
      volume,
      mediaVolume
    });
    warnAboutTooHighVolume(userPreferredVolume);
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: false,
      isClientSideRendering: false
    });
    const propsToPass = reactExports.useMemo(() => {
      return {
        muted: muted || playerMuted || userPreferredVolume <= 0,
        src: preloadedSrc,
        loop: _remotionInternalNativeLoopPassed,
        crossOrigin: crossOriginValue,
        ...nativeProps
      };
    }, [
      _remotionInternalNativeLoopPassed,
      playerMuted,
      muted,
      nativeProps,
      preloadedSrc,
      userPreferredVolume,
      crossOriginValue
    ]);
    const id2 = reactExports.useMemo(() => `audio-${random(src ?? "")}-${sequenceContext == null ? void 0 : sequenceContext.relativeFrom}-${sequenceContext == null ? void 0 : sequenceContext.cumulatedFrom}-${sequenceContext == null ? void 0 : sequenceContext.durationInFrames}-muted:${props.muted}-loop:${props.loop}`, [
      src,
      sequenceContext == null ? void 0 : sequenceContext.relativeFrom,
      sequenceContext == null ? void 0 : sequenceContext.cumulatedFrom,
      sequenceContext == null ? void 0 : sequenceContext.durationInFrames,
      props.muted,
      props.loop
    ]);
    const {
      el: audioRef,
      mediaElementSourceNode,
      cleanupOnMediaTagUnmount
    } = useSharedAudio({
      aud: propsToPass,
      audioId: id2,
      premounting: Boolean(sequenceContext == null ? void 0 : sequenceContext.premounting),
      postmounting: Boolean(sequenceContext == null ? void 0 : sequenceContext.postmounting)
    });
    const getStack = reactExports.useCallback(() => {
      return _remotionInternalStack ?? null;
    }, [_remotionInternalStack]);
    useMediaInTimeline({
      volume,
      mediaVolume,
      src,
      mediaType: "audio",
      playbackRate: playbackRate ?? 1,
      displayName: name ?? null,
      id: timelineId,
      getStack,
      showInTimeline,
      premountDisplay: (sequenceContext == null ? void 0 : sequenceContext.premountDisplay) ?? null,
      postmountDisplay: (sequenceContext == null ? void 0 : sequenceContext.postmountDisplay) ?? null,
      loopDisplay: void 0,
      documentationLink: "https://www.remotion.dev/docs/html5-audio",
      refForOutline: null,
      muted: muted ?? false
    });
    useMediaPlayback({
      mediaRef: audioRef,
      src,
      mediaType: "audio",
      playbackRate: playbackRate ?? 1,
      preservePitch,
      onlyWarnForMediaSeekingError: false,
      acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
      isPremounting: Boolean(sequenceContext == null ? void 0 : sequenceContext.premounting),
      isPostmounting: Boolean(sequenceContext == null ? void 0 : sequenceContext.postmounting),
      pauseWhenBuffering,
      onAutoPlayError: null
    });
    useMediaTag({
      id: timelineId,
      isPostmounting: Boolean(sequenceContext == null ? void 0 : sequenceContext.postmounting),
      isPremounting: Boolean(sequenceContext == null ? void 0 : sequenceContext.premounting),
      mediaRef: audioRef,
      mediaType: "audio",
      onAutoPlayError: null
    });
    useVolume({
      logLevel,
      mediaRef: audioRef,
      source: mediaElementSourceNode,
      volume: userPreferredVolume,
      shouldUseWebAudioApi: useWebAudioApi ?? false
    });
    const effectToUse = React14.useInsertionEffect ?? React14.useLayoutEffect;
    effectToUse(() => {
      return () => {
        requestAnimationFrame(() => {
          cleanupOnMediaTagUnmount();
        });
      };
    }, [cleanupOnMediaTagUnmount]);
    reactExports.useImperativeHandle(ref, () => {
      return audioRef.current;
    }, [audioRef]);
    const currentOnDurationCallback = reactExports.useRef(onDuration);
    currentOnDurationCallback.current = onDuration;
    reactExports.useEffect(() => {
      var _a;
      const { current } = audioRef;
      if (!current) {
        return;
      }
      if (current.duration) {
        (_a = currentOnDurationCallback.current) == null ? void 0 : _a.call(currentOnDurationCallback, current.src, current.duration);
        return;
      }
      const onLoadedMetadata = () => {
        var _a2;
        (_a2 = currentOnDurationCallback.current) == null ? void 0 : _a2.call(currentOnDurationCallback, current.src, current.duration);
      };
      current.addEventListener("loadedmetadata", onLoadedMetadata);
      return () => {
        current.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }, [audioRef, src]);
    if (initialShouldPreMountAudioElements) {
      return isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceOrderMarker, {
        sequenceId: timelineId,
        children: null
      }) : null;
    }
    const audio = /* @__PURE__ */ jsxRuntimeExports.jsx("audio", {
      ref: audioRef,
      preload: "metadata",
      crossOrigin: crossOriginValue,
      ...propsToPass
    });
    return isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceOrderMarker, {
      sequenceId: timelineId,
      children: audio
    }) : audio;
  };
  var AudioForPreview = reactExports.forwardRef(AudioForDevelopmentForwardRefFunction);
  var AudioForRenderingRefForwardingFunction = (props, ref) => {
    const audioRef = reactExports.useRef(null);
    const {
      volume: volumeProp,
      playbackRate,
      allowAmplificationDuringRender,
      onDuration,
      toneFrequency,
      _remotionInternalNeedsDurationCalculation,
      _remotionInternalNativeLoopPassed,
      acceptableTimeShiftInSeconds,
      name,
      onNativeError,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      loopVolumeCurveBehavior,
      pauseWhenBuffering,
      audioStreamIndex,
      preservePitch: _preservePitch,
      ...nativeProps
    } = props;
    const absoluteFrame = useTimelinePosition();
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const frame = useCurrentFrame();
    const sequenceContext = reactExports.useContext(SequenceContext);
    const { registerRenderAsset, unregisterRenderAsset } = reactExports.useContext(RenderAssetManager);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const id2 = reactExports.useMemo(() => `audio-${random(props.src ?? "")}-${sequenceContext == null ? void 0 : sequenceContext.relativeFrom}-${sequenceContext == null ? void 0 : sequenceContext.cumulatedFrom}-${sequenceContext == null ? void 0 : sequenceContext.durationInFrames}`, [
      props.src,
      sequenceContext == null ? void 0 : sequenceContext.relativeFrom,
      sequenceContext == null ? void 0 : sequenceContext.cumulatedFrom,
      sequenceContext == null ? void 0 : sequenceContext.durationInFrames
    ]);
    const volume = evaluateVolume({
      volume: volumeProp,
      frame: volumePropFrame,
      mediaVolume: 1
    });
    warnAboutTooHighVolume(volume);
    reactExports.useImperativeHandle(ref, () => {
      return audioRef.current;
    }, []);
    reactExports.useEffect(() => {
      if (!props.src) {
        throw new Error("No src passed");
      }
      if (!window.remotion_audioEnabled) {
        return;
      }
      if (props.muted) {
        return;
      }
      if (volume <= 0) {
        return;
      }
      registerRenderAsset({
        type: "audio",
        src: getAbsoluteSrc(props.src),
        id: id2,
        frame: absoluteFrame,
        volume,
        mediaFrame: frame,
        playbackRate: props.playbackRate ?? 1,
        toneFrequency: toneFrequency ?? 1,
        audioStartFrame: Math.max(0, -((sequenceContext == null ? void 0 : sequenceContext.cumulatedNegativeFrom) ?? 0)),
        audioStreamIndex: audioStreamIndex ?? 0
      });
      return () => unregisterRenderAsset(id2);
    }, [
      props.muted,
      props.src,
      registerRenderAsset,
      absoluteFrame,
      id2,
      unregisterRenderAsset,
      volume,
      volumePropFrame,
      frame,
      playbackRate,
      props.playbackRate,
      toneFrequency,
      sequenceContext == null ? void 0 : sequenceContext.cumulatedNegativeFrom,
      audioStreamIndex
    ]);
    const { src } = props;
    const needsToRenderAudioTag = ref || _remotionInternalNeedsDurationCalculation;
    reactExports.useLayoutEffect(() => {
      var _a, _b;
      if (((_b = (_a = window.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV) === "test") {
        return;
      }
      if (!needsToRenderAudioTag) {
        return;
      }
      const newHandle = delayRender2("Loading <Html5Audio> duration with src=" + src, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      const { current } = audioRef;
      const didLoad = () => {
        if (current == null ? void 0 : current.duration) {
          onDuration(current.src, current.duration);
        }
        continueRender2(newHandle);
      };
      if (current == null ? void 0 : current.duration) {
        onDuration(current.src, current.duration);
        continueRender2(newHandle);
      } else {
        current == null ? void 0 : current.addEventListener("loadedmetadata", didLoad, { once: true });
      }
      return () => {
        current == null ? void 0 : current.removeEventListener("loadedmetadata", didLoad);
        continueRender2(newHandle);
      };
    }, [
      src,
      onDuration,
      needsToRenderAudioTag,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      continueRender2,
      delayRender2
    ]);
    if (!needsToRenderAudioTag) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("audio", {
      ref: audioRef,
      ...nativeProps,
      onError: onNativeError
    });
  };
  var AudioForRendering = reactExports.forwardRef(AudioForRenderingRefForwardingFunction);
  var AudioRefForwardingFunction = (props, ref) => {
    const audioTagsContext = reactExports.useContext(SharedAudioTagsContext);
    const propsWithFreeze = props;
    const {
      startFrom,
      endAt,
      trimBefore,
      trimAfter,
      name,
      _remotionInternalStack,
      pauseWhenBuffering,
      showInTimeline,
      onError: onRemotionError,
      freeze,
      ...otherProps
    } = propsWithFreeze;
    const { loop, freeze: _freeze, ...propsOtherThanLoop } = propsWithFreeze;
    const { fps } = useVideoConfig();
    const environment = useRemotionEnvironment();
    const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
    if (environment.isClientSideRendering) {
      throw new Error("<Html5Audio> is not supported in @remotion/web-renderer. Use <Audio> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
    }
    if (typeof freeze !== "undefined") {
      throw new TypeError('The "freeze" prop is not supported on <Html5Audio />. Use <Sequence freeze={...}> to freeze media playback.');
    }
    const { durations, setDurations } = reactExports.useContext(DurationsContext);
    if (typeof props.src !== "string") {
      throw new TypeError(`The \`<Html5Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
    }
    const preloadedSrc = usePreload(props.src);
    const onError = reactExports.useCallback((e) => {
      console.log(e.currentTarget.error);
      const errMessage = `Could not play audio with src ${preloadedSrc}: ${e.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;
      if (loop) {
        if (onRemotionError) {
          onRemotionError(new Error(errMessage));
          return;
        }
        cancelRender(new Error(errMessage));
      } else {
        onRemotionError == null ? void 0 : onRemotionError(new Error(errMessage));
        console.warn(errMessage);
      }
    }, [loop, onRemotionError, preloadedSrc]);
    const onDuration = reactExports.useCallback((src, durationInSeconds) => {
      setDurations({ type: "got-duration", durationInSeconds, src });
    }, [setDurations]);
    const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props.src)];
    validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
    const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
      startFrom,
      endAt,
      trimBefore,
      trimAfter
    });
    if (loop && durationFetched !== void 0) {
      if (!Number.isFinite(durationFetched)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Html5Audio, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalNativeLoopPassed: true
        });
      }
      const duration2 = durationFetched * fps;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Loop, {
        layout: "none",
        durationInFrames: calculateMediaDuration({
          trimAfter: trimAfterValue,
          mediaDurationInFrames: duration2,
          playbackRate: props.playbackRate ?? 1,
          trimBefore: trimBeforeValue
        }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Html5Audio, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalNativeLoopPassed: true
        })
      });
    }
    if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: trimAfterValue,
        name,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Html5Audio, {
          _remotionInternalNeedsDurationCalculation: Boolean(loop),
          pauseWhenBuffering: shouldPauseWhenBuffering,
          ...otherProps,
          ref
        })
      });
    }
    validateMediaProps({
      playbackRate: props.playbackRate,
      preservePitch: props.preservePitch,
      volume: props.volume
    }, "Html5Audio");
    if (environment.isRendering) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AudioForRendering, {
        onDuration,
        ...props,
        ref,
        onNativeError: onError,
        _remotionInternalNeedsDurationCalculation: Boolean(loop)
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AudioForPreview, {
      _remotionInternalNativeLoopPassed: props._remotionInternalNativeLoopPassed ?? false,
      _remotionInternalStack: _remotionInternalStack ?? null,
      shouldPreMountAudioTags: audioTagsContext !== null && audioTagsContext.numberOfAudioTags > 0,
      ...props,
      ref,
      onNativeError: onError,
      onDuration,
      pauseWhenBuffering: shouldPauseWhenBuffering,
      _remotionInternalNeedsDurationCalculation: Boolean(loop),
      showInTimeline: showInTimeline ?? true
    });
  };
  var Html5Audio = reactExports.forwardRef(AudioRefForwardingFunction);
  addSequenceStackTraces(Html5Audio);
  var resolveSolidPixelDensity = (pixelDensity) => {
    if (pixelDensity === void 0) {
      return 1;
    }
    if (typeof pixelDensity !== "number" || !Number.isFinite(pixelDensity) || pixelDensity <= 0) {
      throw new Error(`<Solid>: \`pixelDensity\` must be a positive finite number. Received: ${String(pixelDensity)}.`);
    }
    return pixelDensity;
  };
  var solidSchema = {
    ...baseSchema,
    color: {
      type: "color",
      default: "transparent",
      description: "Color"
    },
    width: {
      type: "number",
      min: 1,
      step: 1,
      default: 1920,
      description: "Width",
      hiddenFromList: false
    },
    height: {
      type: "number",
      min: 1,
      step: 1,
      default: 1080,
      description: "Height",
      hiddenFromList: false
    },
    pixelDensity: {
      type: "number",
      min: 1,
      max: 3,
      step: 0.1,
      default: 1,
      description: "Pixel density",
      hiddenFromList: false
    },
    ...transformSchema$1,
    ...backgroundSchema$1,
    ...borderSchema$1,
    ...borderRadiusSchema$1,
    ...cropSchema$1
  };
  var SolidInner = ({
    color,
    width,
    height,
    effects = [],
    className: className2,
    style: style2,
    pixelDensity,
    overrideId,
    reference
  }) => {
    const { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 } = useDelayRender();
    const resolvedPixelDensity = resolveSolidPixelDensity(pixelDensity);
    const canvasWidth = Math.ceil(width * resolvedPixelDensity);
    const canvasHeight = Math.ceil(height * resolvedPixelDensity);
    const [outputCanvas, setOutputCanvas] = reactExports.useState(null);
    const memoizedEffects = useMemoizedEffects({
      effects,
      overrideId: overrideId ?? null
    });
    const sourceCanvas = reactExports.useMemo(() => {
      if (typeof document === "undefined") {
        return null;
      }
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      return canvas;
    }, []);
    const chainState = useEffectChainState();
    const canvasRef = reactExports.useCallback((canvas) => {
      setOutputCanvas(canvas);
      if (typeof reference === "function") {
        reference(canvas);
      } else if (reference) {
        reference.current = canvas;
      }
    }, [reference]);
    reactExports.useEffect(() => {
      if (!outputCanvas || !sourceCanvas) {
        return;
      }
      const handle = delayRender2("Solid effect chain");
      if (!chainState) {
        continueRender2(handle);
        return () => {
          continueRender2(handle);
        };
      }
      const ctx = sourceCanvas.getContext("2d", { colorSpace: "srgb" });
      if (!ctx) {
        cancelRender2(new Error("Failed to acquire 2D context for <Solid> source"));
        return;
      }
      ctx.clearRect(0, 0, 1, 1);
      if (color !== void 0) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 1, 1);
      }
      runEffectChain({
        state: chainState.get(canvasWidth, canvasHeight),
        source: sourceCanvas,
        effects: memoizedEffects,
        output: outputCanvas,
        width: canvasWidth,
        height: canvasHeight
      }).then((completed) => {
        if (completed) {
          continueRender2(handle);
        }
      }).catch((err) => {
        cancelRender2(err);
      });
      return () => {
        continueRender2(handle);
      };
    }, [
      color,
      outputCanvas,
      sourceCanvas,
      chainState,
      canvasWidth,
      canvasHeight,
      delayRender2,
      continueRender2,
      cancelRender2,
      memoizedEffects
    ]);
    const canvasStyle = reactExports.useMemo(() => {
      return {
        width,
        height,
        ...style2 ?? {}
      };
    }, [height, style2, width]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", {
      ref: canvasRef,
      width: canvasWidth,
      height: canvasHeight,
      className: className2,
      style: canvasStyle
    });
  };
  var SolidOuter = reactExports.forwardRef(({
    effects = [],
    controls,
    color,
    height,
    width,
    className: className2,
    durationInFrames,
    style: style2,
    name,
    from,
    trimBefore,
    freeze,
    hidden,
    showInTimeline,
    pixelDensity,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    ...props2
  }, ref) => {
    const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
    const actualRef = reactExports.useRef(null);
    reactExports.useImperativeHandle(ref, () => {
      return actualRef.current;
    }, []);
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: style2 ?? null,
      componentName: "<Solid />"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
      layout: "none",
      from,
      trimBefore,
      freeze,
      hidden,
      showInTimeline,
      controls,
      _remotionInternalEffects: memoizedEffectDefinitions,
      durationInFrames,
      name: name ?? "<Solid>",
      outlineRef: actualRef,
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/solid",
      ...props2,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SolidInner, {
        reference: actualRef,
        overrideId: (controls == null ? void 0 : controls.overrideId) ?? null,
        color,
        height,
        width,
        className: className2,
        style: croppedStyle ?? void 0,
        effects,
        pixelDensity
      })
    });
  });
  var Solid = withInteractivitySchema({
    Component: SolidOuter,
    componentName: "<Solid>",
    componentIdentity: "dev.remotion.remotion.Solid",
    schema: solidSchema,
    supportsEffects: true
  });
  Solid.displayName = "Solid";
  addSequenceStackTraces(Solid);
  var transferredOffscreenCanvases = /* @__PURE__ */ new WeakMap();
  var getTransferredOffscreenCanvas = (canvas) => {
    const existing = transferredOffscreenCanvases.get(canvas);
    if (existing) {
      return existing;
    }
    const offscreen = canvas.transferControlToOffscreen();
    transferredOffscreenCanvases.set(canvas, offscreen);
    return offscreen;
  };
  var cachedSupport = null;
  var isHtmlInCanvasSupported = () => {
    if (cachedSupport !== null) {
      return cachedSupport;
    }
    if (typeof document === "undefined") {
      return false;
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    cachedSupport = typeof (ctx == null ? void 0 : ctx.drawElementImage) === "function" && typeof canvas.requestPaint === "function" && typeof canvas.captureElementImage === "function" && "transferControlToOffscreen" in HTMLCanvasElement.prototype;
    return cachedSupport;
  };
  var HTML_IN_CANVAS_UNSUPPORTED_MESSAGE = "HTML in Canvas is not supported. Two common causes: Chrome is older than version 148 (update Chrome), or the HTML-in-Canvas flag is disabled at chrome://flags/#canvas-draw-element (enable it and restart Chrome).";
  function assertHtmlInCanvasDimensions(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
      throw new Error(`HtmlInCanvas: \`width\` and \`height\` must be numbers. Received width=${String(width)}, height=${String(height)}.`);
    }
    if (!Number.isInteger(width) || width <= 0) {
      throw new Error(`HtmlInCanvas: \`width\` must be a positive integer. Received: ${String(width)}.`);
    }
    if (!Number.isInteger(height) || height <= 0) {
      throw new Error(`HtmlInCanvas: \`height\` must be a positive integer. Received: ${String(height)}.`);
    }
  }
  function resolveHtmlInCanvasPixelDensity(pixelDensity) {
    if (pixelDensity === void 0) {
      return 1;
    }
    if (typeof pixelDensity !== "number" || !Number.isFinite(pixelDensity) || pixelDensity <= 0) {
      throw new Error(`HtmlInCanvas: \`pixelDensity\` must be a positive finite number. Received: ${String(pixelDensity)}.`);
    }
    return pixelDensity;
  }
  var isMissingPaintRecordError = (error2) => {
    return error2 instanceof DOMException && error2.name === "InvalidStateError";
  };
  var missingPaintRecordMessage = "HtmlInCanvas: Expected the element to be inside the viewport during rendering, but Chrome had no cached paint record for it.";
  var resizePaintTarget = ({
    target,
    width,
    height
  }) => {
    if (target.width !== width) {
      target.width = width;
    }
    if (target.height !== height) {
      target.height = height;
    }
  };
  var defaultOnPaint = ({
    canvas,
    element,
    elementImage
  }) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to acquire 2D context for <HtmlInCanvas> canvas");
    }
    ctx.reset();
    const transform = ctx.drawElementImage(elementImage, 0, 0);
    element.style.transform = transform.toString();
  };
  var HtmlInCanvasAncestorContext = reactExports.createContext(false);
  var HtmlInCanvasContent = reactExports.forwardRef(({
    width,
    height,
    effects,
    children,
    onPaint,
    onInit,
    pixelDensity,
    controls,
    style: style2
  }, ref) => {
    const isInsideAncestorHtmlInCanvas = reactExports.useContext(HtmlInCanvasAncestorContext);
    assertHtmlInCanvasDimensions(width, height);
    if (isInsideAncestorHtmlInCanvas) {
      throw new Error("<HtmlInCanvas> components cannot be nested. Chrome does not reliably render nested HTML-in-canvas subtrees. Consider merging the effects into one <HtmlInCanvas> if you can.");
    }
    const resolvedPixelDensity = resolveHtmlInCanvasPixelDensity(pixelDensity);
    const canvasWidth = Math.ceil(width * resolvedPixelDensity);
    const canvasHeight = Math.ceil(height * resolvedPixelDensity);
    const { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 } = useDelayRender();
    const { isClientSideRendering, isRendering } = useRemotionEnvironment();
    const canRetryMissingPaintRecord = !isRendering || isClientSideRendering;
    const usesDirectLayoutCanvas = onPaint === void 0 && onInit === void 0;
    if (!isHtmlInCanvasSupported()) {
      cancelRender2(new Error(HTML_IN_CANVAS_UNSUPPORTED_MESSAGE));
    }
    const canvas2dRef = reactExports.useRef(null);
    const paintTargetRef = reactExports.useRef(null);
    const divRef = reactExports.useRef(null);
    const canvasSizeKey = `${width}x${height}@${resolvedPixelDensity}-${usesDirectLayoutCanvas ? "direct" : "offscreen"}`;
    const setLayoutCanvasRef = reactExports.useCallback((node) => {
      canvas2dRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    const chainState = useEffectChainState();
    const memoizedEffects = useMemoizedEffects({
      effects,
      overrideId: (controls == null ? void 0 : controls.overrideId) ?? null
    });
    const effectsRef = reactExports.useRef(memoizedEffects);
    effectsRef.current = memoizedEffects;
    const onPaintRef = reactExports.useRef(onPaint);
    onPaintRef.current = onPaint;
    const onInitRef = reactExports.useRef(onInit);
    onInitRef.current = onInit;
    const initializedRef = reactExports.useRef(false);
    const onInitCleanupRef = reactExports.useRef(null);
    const unmountedRef = reactExports.useRef(false);
    const onPaintCb = reactExports.useCallback(async () => {
      const element = divRef.current;
      if (!element) {
        throw new Error("Canvas or scene element not found");
      }
      const paintTarget = paintTargetRef.current;
      if (!paintTarget) {
        throw new Error("HtmlInCanvas: paint target is not ready because the canvas is remounting");
      }
      resizePaintTarget({
        target: paintTarget,
        width: canvasWidth,
        height: canvasHeight
      });
      try {
        const placeholderCanvas = canvas2dRef.current;
        if (!placeholderCanvas) {
          throw new Error("Canvas not found");
        }
        const handle = delayRender2("onPaint");
        if (!initializedRef.current) {
          const currentOnInit = onInitRef.current;
          if (!currentOnInit) {
            initializedRef.current = true;
          } else {
            let initImage;
            try {
              initImage = placeholderCanvas.captureElementImage(element);
            } catch (error2) {
              if (isMissingPaintRecordError(error2) && canRetryMissingPaintRecord) {
                continueRender2(handle);
                return;
              }
              if (isMissingPaintRecordError(error2)) {
                throw new Error(missingPaintRecordMessage);
              }
              throw error2;
            }
            initializedRef.current = true;
            try {
              if (paintTarget instanceof HTMLCanvasElement) {
                throw new Error("HtmlInCanvas: onInit requires an OffscreenCanvas paint target");
              }
              const cleanup = await currentOnInit({
                canvas: paintTarget,
                element,
                elementImage: initImage,
                pixelDensity: resolvedPixelDensity
              });
              if (typeof cleanup !== "function") {
                throw new Error("HtmlInCanvas: when `onInit` is provided, it must return a cleanup function, or a Promise that resolves to one.");
              }
              if (unmountedRef.current) {
                cleanup();
              } else {
                onInitCleanupRef.current = cleanup;
              }
            } finally {
              initImage.close();
            }
          }
        }
        let elImage;
        try {
          elImage = placeholderCanvas.captureElementImage(element);
        } catch (error2) {
          if (isMissingPaintRecordError(error2) && canRetryMissingPaintRecord) {
            continueRender2(handle);
            return;
          }
          if (isMissingPaintRecordError(error2)) {
            throw new Error(missingPaintRecordMessage);
          }
          throw error2;
        }
        try {
          const currentOnPaint = onPaintRef.current;
          if (currentOnPaint) {
            if (paintTarget instanceof HTMLCanvasElement) {
              throw new Error("HtmlInCanvas: onPaint requires an OffscreenCanvas paint target");
            }
            const paintResult = currentOnPaint({
              canvas: paintTarget,
              element,
              elementImage: elImage,
              pixelDensity: resolvedPixelDensity
            });
            if (paintResult) {
              await paintResult;
            }
          } else {
            defaultOnPaint({
              canvas: paintTarget,
              element,
              elementImage: elImage,
              pixelDensity: resolvedPixelDensity
            });
          }
          await runEffectChain({
            state: chainState.get(canvasWidth, canvasHeight),
            source: paintTarget,
            effects: effectsRef.current,
            output: paintTarget,
            width: canvasWidth,
            height: canvasHeight
          });
        } finally {
          elImage.close();
        }
        continueRender2(handle);
      } catch (error2) {
        cancelRender2(error2);
      }
    }, [
      canvasHeight,
      canvasWidth,
      chainState,
      continueRender2,
      cancelRender2,
      delayRender2,
      resolvedPixelDensity,
      canRetryMissingPaintRecord
    ]);
    reactExports.useLayoutEffect(() => {
      const placeholder = canvas2dRef.current;
      if (!placeholder) {
        throw new Error("Canvas not found");
      }
      placeholder.layoutSubtree = true;
      const paintTarget = usesDirectLayoutCanvas ? placeholder : getTransferredOffscreenCanvas(placeholder);
      paintTargetRef.current = paintTarget;
      resizePaintTarget({
        target: paintTarget,
        width: canvasWidth,
        height: canvasHeight
      });
      initializedRef.current = false;
      unmountedRef.current = false;
      placeholder.addEventListener("paint", onPaintCb);
      return () => {
        var _a;
        placeholder.removeEventListener("paint", onPaintCb);
        paintTargetRef.current = null;
        initializedRef.current = false;
        unmountedRef.current = true;
        (_a = onInitCleanupRef.current) == null ? void 0 : _a.call(onInitCleanupRef);
        onInitCleanupRef.current = null;
      };
    }, [
      onPaintCb,
      cancelRender2,
      canvasWidth,
      canvasHeight,
      usesDirectLayoutCanvas
    ]);
    const onPaintChangedRef = reactExports.useRef(false);
    reactExports.useLayoutEffect(() => {
      var _a;
      if (!onPaintChangedRef.current) {
        onPaintChangedRef.current = true;
        return;
      }
      const canvas = canvas2dRef.current;
      if (!canvas) {
        return;
      }
      (_a = canvas.requestPaint) == null ? void 0 : _a.call(canvas);
    }, [onPaint, memoizedEffects]);
    reactExports.useLayoutEffect(() => {
      const canvas = canvas2dRef.current;
      if (!canvas) {
        return;
      }
      const handle = delayRender2("waiting for first paint after canvas resize");
      canvas.addEventListener("paint", () => {
        continueRender2(handle);
      }, { once: true });
      return () => {
        continueRender2(handle);
      };
    }, [width, height, continueRender2, delayRender2, canvasSizeKey]);
    const innerStyle = reactExports.useMemo(() => {
      return {
        width,
        height
      };
    }, [width, height]);
    const canvasStyle = reactExports.useMemo(() => {
      return {
        width,
        height,
        ...style2 ?? {}
      };
    }, [height, style2, width]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HtmlInCanvasAncestorContext.Provider, {
      value: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", {
        ref: setLayoutCanvasRef,
        width: canvasWidth,
        height: canvasHeight,
        style: canvasStyle,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          ref: divRef,
          style: innerStyle,
          children
        })
      }, canvasSizeKey)
    });
  });
  HtmlInCanvasContent.displayName = "HtmlInCanvasContent";
  var HtmlInCanvasInner = reactExports.forwardRef(({
    width,
    height,
    effects = [],
    children,
    onPaint,
    onInit,
    pixelDensity,
    controls,
    style: style2,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    durationInFrames,
    name,
    ...sequenceProps
  }, ref) => {
    const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
    const actualRef = reactExports.useRef(null);
    const setCanvasRef = reactExports.useCallback((node) => {
      actualRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: style2 ?? null,
      componentName: "<HtmlInCanvas />"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
      durationInFrames,
      name: name ?? "<HtmlInCanvas>",
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/remotion/html-in-canvas",
      controls,
      _remotionInternalEffects: memoizedEffectDefinitions,
      outlineRef: actualRef,
      layout: "none",
      ...sequenceProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(HtmlInCanvasContent, {
        ref: setCanvasRef,
        width,
        height,
        effects,
        onPaint,
        onInit,
        pixelDensity,
        controls,
        style: croppedStyle ?? void 0,
        children
      })
    });
  });
  HtmlInCanvasInner.displayName = "HtmlInCanvas";
  var htmlInCanvasSchema = {
    ...baseSchema,
    pixelDensity: {
      type: "number",
      min: 1,
      max: 3,
      step: 0.1,
      default: 1,
      description: "Pixel density",
      hiddenFromList: false
    },
    ...transformSchema$1,
    ...backgroundSchema$1,
    ...borderSchema$1,
    ...borderRadiusSchema$1,
    ...cropSchema$1
  };
  var HtmlInCanvasWrapped = withInteractivitySchema({
    Component: HtmlInCanvasInner,
    componentName: "<HtmlInCanvas>",
    componentIdentity: "dev.remotion.remotion.HtmlInCanvas",
    schema: htmlInCanvasSchema,
    supportsEffects: true
  });
  var HtmlInCanvas = Object.assign(HtmlInCanvasWrapped, {
    isSupported: isHtmlInCanvasSupported
  });
  HtmlInCanvas.displayName = "HtmlInCanvas";
  addSequenceStackTraces(HtmlInCanvas);
  function truncateSrcForLabel(src) {
    if (typeof src !== "string") {
      return String(src);
    }
    if (src.length > 100 && (src.startsWith("data:") || src.startsWith("blob:"))) {
      return src.slice(0, 60) + "...[" + src.length + " chars total]";
    }
    return src;
  }
  var canvasImageSchema = {
    src: {
      type: "asset",
      assetType: "image",
      default: void 0,
      description: "Source",
      keyframable: false
    },
    ...baseSchema,
    ...cropSchema$1,
    ...premountSchema$1,
    fit: {
      type: "enum",
      default: "fill",
      description: "Fit",
      variants: {
        fill: {},
        contain: {},
        cover: {}
      }
    },
    ...transformSchema$1,
    ...backgroundSchema$1,
    ...borderSchema$1,
    ...borderRadiusSchema$1
  };
  var makeAbortError = () => {
    if (typeof DOMException !== "undefined") {
      return new DOMException("Image loading was aborted", "AbortError");
    }
    const error2 = new Error("Image loading was aborted");
    error2.name = "AbortError";
    return error2;
  };
  var loadImage = ({
    src,
    signal
  }) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      let settled = false;
      function cleanup() {
        image.onload = null;
        image.onerror = null;
      }
      function settle(callback) {
        if (settled) {
          return;
        }
        settled = true;
        cleanup();
        callback();
      }
      function onAbort() {
        settle(() => reject(makeAbortError()));
      }
      image.onload = () => {
        var _a;
        Promise.resolve((_a = image.decode) == null ? void 0 : _a.call(image)).catch(() => {
          return;
        }).then(() => {
          const imageWidth = image.naturalWidth || image.width;
          const imageHeight = image.naturalHeight || image.height;
          if (imageWidth <= 0 || imageHeight <= 0) {
            settle(() => reject(new Error(`Could not determine dimensions for <CanvasImage> with src="${truncateSrcForLabel(src)}"`)));
            return;
          }
          settle(() => resolve({ element: image, width: imageWidth, height: imageHeight }));
        });
      };
      image.onerror = () => {
        settle(() => reject(new Error(`Could not load <CanvasImage> with src="${truncateSrcForLabel(src)}"`)));
      };
      signal.addEventListener("abort", onAbort, { once: true });
      if (signal.aborted) {
        onAbort();
        return;
      }
      image.crossOrigin = "anonymous";
      image.src = src;
    });
  };
  function exponentialBackoff(errorCount) {
    return 1e3 * 2 ** (errorCount - 1);
  }
  var waitForNextFrame = ({
    onFrame
  }) => {
    if (typeof requestAnimationFrame === "undefined") {
      onFrame();
      return () => {
        return;
      };
    }
    const frame = requestAnimationFrame(onFrame);
    return () => cancelAnimationFrame(frame);
  };
  var CanvasImageContent = reactExports.forwardRef(({
    src,
    width,
    height,
    fit = "fill",
    effects,
    controls,
    onError,
    className: className2,
    style: style2,
    id: id2,
    pauseWhenLoading,
    maxRetries = 2,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    refForOutline,
    ...canvasProps
  }, ref) => {
    const { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 } = useDelayRender();
    const { delayPlayback } = useBufferState();
    const [outputCanvas, setOutputCanvas] = reactExports.useState(null);
    const [loadedImage, setLoadedImage] = reactExports.useState(null);
    const actualSrc = usePreload(src);
    const chainState = useEffectChainState();
    const memoizedEffects = useMemoizedEffects({
      effects,
      overrideId: (controls == null ? void 0 : controls.overrideId) ?? null
    });
    const sequenceContext = reactExports.useContext(SequenceContext);
    const pendingLoadDelayRef = reactExports.useRef(null);
    const [isLoadPending, setIsLoadPending] = reactExports.useState(false);
    const isPremounting = Boolean(sequenceContext == null ? void 0 : sequenceContext.premounting);
    const isPostmounting = Boolean(sequenceContext == null ? void 0 : sequenceContext.postmounting);
    const continuePendingLoadDelay = reactExports.useCallback(({ markAsReady }) => {
      const pending = pendingLoadDelayRef.current;
      if (!pending || pending.continued) {
        return;
      }
      pending.continued = true;
      if (markAsReady) {
        setIsLoadPending(false);
      }
      continueRender2(pending.handle);
      pendingLoadDelayRef.current = null;
    }, [continueRender2]);
    const sourceCanvas = reactExports.useMemo(() => {
      if (typeof document === "undefined") {
        return null;
      }
      return document.createElement("canvas");
    }, []);
    const canvasRef = reactExports.useCallback((canvas) => {
      setOutputCanvas(canvas);
      if (refForOutline) {
        refForOutline.current = canvas;
      }
      if (typeof ref === "function") {
        ref(canvas);
      } else if (ref) {
        ref.current = canvas;
      }
    }, [ref, refForOutline]);
    reactExports.useLayoutEffect(() => {
      if (!pauseWhenLoading || !isLoadPending || isPremounting || isPostmounting) {
        return;
      }
      return delayPlayback().unblock;
    }, [
      delayPlayback,
      isLoadPending,
      isPostmounting,
      isPremounting,
      pauseWhenLoading
    ]);
    reactExports.useLayoutEffect(() => {
      const handle = delayRender2(`Rendering <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}"`, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      const controller = new AbortController();
      let cancelled = false;
      let errorCount = 0;
      let timeoutId = null;
      setLoadedImage(null);
      setIsLoadPending(true);
      pendingLoadDelayRef.current = {
        handle,
        continued: false
      };
      const attemptLoad = () => {
        loadImage({ src: actualSrc, signal: controller.signal }).then((image) => {
          if (cancelled) {
            return;
          }
          setLoadedImage(image);
        }).catch((err) => {
          if (err.name === "AbortError") {
            continuePendingLoadDelay({ markAsReady: false });
            return;
          }
          errorCount++;
          if (errorCount <= maxRetries) {
            const backoff = exponentialBackoff(errorCount);
            console.warn(`Could not load <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}", retrying in ${backoff}ms`);
            timeoutId = setTimeout(() => {
              if (!cancelled) {
                attemptLoad();
              }
            }, backoff);
          } else if (onError) {
            onError(err);
            continuePendingLoadDelay({ markAsReady: true });
          } else {
            cancelRender2(err);
          }
        });
      };
      attemptLoad();
      return () => {
        cancelled = true;
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
        controller.abort();
        continuePendingLoadDelay({ markAsReady: false });
      };
    }, [
      actualSrc,
      cancelRender2,
      continuePendingLoadDelay,
      delayRender2,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      maxRetries,
      onError
    ]);
    reactExports.useLayoutEffect(() => {
      if (!loadedImage || !outputCanvas || !sourceCanvas) {
        return;
      }
      const handle = delayRender2(`Applying effects to <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}"`);
      let cancelled = false;
      let continued = false;
      let cancelWaitForNextFrame = () => {
        return;
      };
      const continueRenderOnce = () => {
        if (continued) {
          return;
        }
        continued = true;
        continueRender2(handle);
      };
      const canvasWidth = width ?? loadedImage.width;
      const canvasHeight = height ?? loadedImage.height;
      const sourceContext = sourceCanvas.getContext("2d", {
        colorSpace: "srgb"
      });
      if (!sourceContext) {
        cancelRender2(new Error("Could not get 2D context for <CanvasImage> source canvas"));
        continueRenderOnce();
        return () => {
          continueRenderOnce();
        };
      }
      sourceCanvas.width = canvasWidth;
      sourceCanvas.height = canvasHeight;
      outputCanvas.width = canvasWidth;
      outputCanvas.height = canvasHeight;
      sourceContext.clearRect(0, 0, canvasWidth, canvasHeight);
      sourceContext.drawImage(loadedImage.element, ...calculateImageFit(fit, { width: loadedImage.width, height: loadedImage.height }, { width: canvasWidth, height: canvasHeight }));
      runEffectChain({
        state: chainState.get(canvasWidth, canvasHeight),
        source: sourceCanvas,
        effects: memoizedEffects,
        output: outputCanvas,
        width: canvasWidth,
        height: canvasHeight
      }).then((completed) => {
        if (completed && !cancelled) {
          cancelWaitForNextFrame = waitForNextFrame({
            onFrame: () => {
              if (cancelled) {
                return;
              }
              continueRenderOnce();
              continuePendingLoadDelay({ markAsReady: true });
            }
          });
        }
      }).catch((err) => {
        if (cancelled) {
          return;
        }
        if (onError) {
          onError(err);
          continueRenderOnce();
          continuePendingLoadDelay({ markAsReady: true });
        } else {
          cancelRender2(err);
        }
      });
      return () => {
        cancelled = true;
        cancelWaitForNextFrame();
        continueRenderOnce();
      };
    }, [
      actualSrc,
      cancelRender2,
      chainState,
      continueRender2,
      continuePendingLoadDelay,
      delayRender2,
      fit,
      height,
      loadedImage,
      memoizedEffects,
      onError,
      outputCanvas,
      sourceCanvas,
      width
    ]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", {
      ...canvasProps,
      ref: canvasRef,
      width,
      height,
      className: className2,
      style: style2,
      id: id2
    });
  });
  CanvasImageContent.displayName = "CanvasImageContent";
  var CanvasImageInner = reactExports.forwardRef(({
    src,
    width,
    height,
    fit,
    effects = [],
    className: className2,
    style: style2,
    id: id2,
    onError,
    pauseWhenLoading,
    maxRetries,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    durationInFrames,
    from,
    trimBefore,
    freeze,
    premountFor,
    postmountFor,
    styleWhilePremounted,
    styleWhilePostmounted,
    hidden,
    name,
    showInTimeline,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    controls,
    _remotionInternalDocumentationLink,
    _remotionInternalCropComponentName,
    outlineRef,
    ...canvasProps
  }, ref) => {
    if (!src) {
      throw new Error('No "src" prop was passed to <CanvasImage>.');
    }
    const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
    const actualRef = reactExports.useRef(null);
    reactExports.useImperativeHandle(ref, () => {
      return actualRef.current;
    }, []);
    const {
      effectivePostmountFor,
      effectivePremountFor,
      freezeFrame,
      isPremountingOrPostmounting,
      postmountingActive,
      premountingActive,
      premountingStyle
    } = usePremounting({
      from: from ?? 0,
      durationInFrames: durationInFrames ?? Infinity,
      premountFor: premountFor ?? null,
      postmountFor: postmountFor ?? null,
      style: style2 ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "display-none"
    });
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: premountingStyle,
      componentName: _remotionInternalCropComponentName ?? "<CanvasImage />"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
        layout: "none",
        from: from ?? 0,
        trimBefore,
        durationInFrames: durationInFrames ?? Infinity,
        freeze,
        hidden,
        showInTimeline: showInTimeline ?? true,
        name: name ?? "<CanvasImage>",
        _remotionInternalDocumentationLink: _remotionInternalDocumentationLink ?? "https://www.remotion.dev/docs/canvasimage",
        controls,
        _remotionInternalEffects: memoizedEffectDefinitions,
        _remotionInternalIsMedia: { type: "image", src },
        _remotionInternalPremountDisplay: effectivePremountFor || null,
        _remotionInternalPostmountDisplay: effectivePostmountFor || null,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        outlineRef: outlineRef ?? actualRef,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CanvasImageContent, {
          ref: actualRef,
          src,
          width,
          height,
          fit,
          effects,
          controls,
          className: className2,
          style: croppedStyle ?? void 0,
          id: id2,
          onError,
          pauseWhenLoading,
          maxRetries,
          delayRenderRetries,
          delayRenderTimeoutInMilliseconds,
          refForOutline: outlineRef ?? null,
          ...canvasProps
        })
      })
    });
  });
  var CanvasImage = withInteractivitySchema({
    Component: CanvasImageInner,
    componentName: "<CanvasImage>",
    componentIdentity: "dev.remotion.remotion.CanvasImage",
    schema: canvasImageSchema,
    supportsEffects: true
  });
  CanvasImage.displayName = "CanvasImage";
  addSequenceStackTraces(CanvasImage);
  var IFrameRefForwarding = ({
    onLoad,
    onError,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    ...props2
  }, ref) => {
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const [handle] = reactExports.useState(() => delayRender2(`Loading <IFrame> with source ${props2.src}`, {
      retries: delayRenderRetries ?? void 0,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
    }));
    const didLoad = reactExports.useCallback((e) => {
      continueRender2(handle);
      onLoad == null ? void 0 : onLoad(e);
    }, [handle, onLoad, continueRender2]);
    const didGetError = reactExports.useCallback((e) => {
      continueRender2(handle);
      if (onError) {
        onError(e);
      } else {
        console.error("Error loading iframe:", e, "Handle the event using the onError() prop to make this message disappear.");
      }
    }, [handle, onError, continueRender2]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", {
      referrerPolicy: "strict-origin-when-cross-origin",
      ...props2,
      ref,
      onError: didGetError,
      onLoad: didLoad
    });
  };
  reactExports.forwardRef(IFrameRefForwarding);
  function exponentialBackoff2(errorCount) {
    return 1e3 * 2 ** (errorCount - 1);
  }
  var ImgContent = ({
    onError,
    maxRetries = 2,
    src,
    pauseWhenLoading,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onImageFrame,
    crossOrigin,
    decoding,
    ref,
    refForOutline,
    ...props2
  }) => {
    const imageRef = reactExports.useRef(null);
    const errors = reactExports.useRef({});
    const { delayPlayback } = useBufferState();
    const sequenceContext = reactExports.useContext(SequenceContext);
    const [isLoading, setIsLoading] = reactExports.useState(false);
    const imageCallbackRef = reactExports.useCallback((img) => {
      imageRef.current = img;
      refForOutline.current = img;
      if (typeof ref === "function") {
        ref(img);
      } else if (ref) {
        ref.current = img;
      }
    }, [ref, refForOutline]);
    const actualSrc = usePreload(src);
    const retryIn = reactExports.useCallback((timeout) => {
      if (!imageRef.current) {
        return;
      }
      const currentSrc = imageRef.current.src;
      setTimeout(() => {
        var _a;
        if (!imageRef.current) {
          return;
        }
        const newSrc = (_a = imageRef.current) == null ? void 0 : _a.src;
        if (newSrc !== currentSrc) {
          return;
        }
        imageRef.current.removeAttribute("src");
        imageRef.current.setAttribute("src", newSrc);
      }, timeout);
    }, []);
    const { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 } = useDelayRender();
    const isPremounting = Boolean(sequenceContext == null ? void 0 : sequenceContext.premounting);
    const isPostmounting = Boolean(sequenceContext == null ? void 0 : sequenceContext.postmounting);
    const didGetError = reactExports.useCallback((e) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (!errors.current) {
        return;
      }
      errors.current[(_a = imageRef.current) == null ? void 0 : _a.src] = (errors.current[(_b = imageRef.current) == null ? void 0 : _b.src] ?? 0) + 1;
      if (onError && (errors.current[(_c = imageRef.current) == null ? void 0 : _c.src] ?? 0) > maxRetries) {
        onError(e);
        return;
      }
      if ((errors.current[(_d = imageRef.current) == null ? void 0 : _d.src] ?? 0) <= maxRetries) {
        const backoff = exponentialBackoff2(errors.current[(_e = imageRef.current) == null ? void 0 : _e.src] ?? 0);
        console.warn(`Could not load image with source ${truncateSrcForLabel((_f = imageRef.current) == null ? void 0 : _f.src)}, retrying again in ${backoff}ms`);
        retryIn(backoff);
        return;
      }
      try {
        cancelRender2("Error loading image with src: " + truncateSrcForLabel((_g = imageRef.current) == null ? void 0 : _g.src));
      } catch {
      }
    }, [cancelRender2, maxRetries, onError, retryIn]);
    if (typeof window !== "undefined") {
      reactExports.useLayoutEffect(() => {
        if (!pauseWhenLoading || !isLoading || isPremounting || isPostmounting) {
          return;
        }
        return delayPlayback().unblock;
      }, [
        delayPlayback,
        isLoading,
        isPostmounting,
        isPremounting,
        pauseWhenLoading
      ]);
      reactExports.useLayoutEffect(() => {
        var _a, _b;
        if (((_b = (_a = window.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV) === "test") {
          if (imageRef.current) {
            imageRef.current.src = actualSrc;
          }
          return;
        }
        const { current } = imageRef;
        if (!current) {
          return;
        }
        setIsLoading(true);
        const newHandle = delayRender2("Loading <Img> with src=" + truncateSrcForLabel(actualSrc), {
          retries: delayRenderRetries ?? void 0,
          timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
        });
        let unmounted = false;
        const onComplete = () => {
          var _a2, _b2, _c;
          if (unmounted) {
            continueRender2(newHandle);
            return;
          }
          if ((errors.current[(_a2 = imageRef.current) == null ? void 0 : _a2.src] ?? 0) > 0) {
            delete errors.current[(_b2 = imageRef.current) == null ? void 0 : _b2.src];
            console.info(`Retry successful - ${truncateSrcForLabel((_c = imageRef.current) == null ? void 0 : _c.src)} is now loaded`);
          }
          if (current) {
            onImageFrame == null ? void 0 : onImageFrame(current);
          }
          setIsLoading(false);
          continueRender2(newHandle);
        };
        if (!imageRef.current) {
          onComplete();
          return;
        }
        current.src = actualSrc;
        current.decode().then(onComplete).catch((err) => {
          console.warn(err);
          if (current.complete && current.naturalWidth > 0 && current.naturalHeight > 0) {
            onComplete();
          } else {
            current.addEventListener("load", onComplete);
          }
        });
        return () => {
          unmounted = true;
          current.removeEventListener("load", onComplete);
          continueRender2(newHandle);
        };
      }, [
        actualSrc,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        onImageFrame,
        continueRender2,
        delayRender2
      ]);
    }
    const { isClientSideRendering, isRendering } = useRemotionEnvironment();
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: false,
      isClientSideRendering
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
      ...props2,
      ref: imageCallbackRef,
      crossOrigin: crossOriginValue,
      onError: didGetError,
      decoding: isRendering ? "sync" : decoding
    });
  };
  var NativeImgInner = ({
    hidden,
    name,
    showInTimeline,
    src,
    from,
    trimBefore,
    durationInFrames,
    freeze,
    premountFor,
    postmountFor,
    style: style2,
    styleWhilePremounted,
    styleWhilePostmounted,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    controls,
    outlineRef: refForOutline,
    ...props2
  }) => {
    if (!src) {
      throw new Error('No "src" prop was passed to <Img>.');
    }
    const {
      effectivePostmountFor,
      effectivePremountFor,
      freezeFrame,
      isPremountingOrPostmounting,
      postmountingActive,
      premountingActive,
      premountingStyle
    } = usePremounting({
      from: from ?? 0,
      durationInFrames: durationInFrames ?? Infinity,
      premountFor: premountFor ?? null,
      postmountFor: postmountFor ?? null,
      style: style2 ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "display-none"
    });
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: premountingStyle,
      componentName: "<Img />"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
        layout: "none",
        from: from ?? 0,
        trimBefore,
        durationInFrames: durationInFrames ?? Infinity,
        freeze,
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/img",
        _remotionInternalIsMedia: { type: "image", src },
        _remotionInternalPremountDisplay: effectivePremountFor || null,
        _remotionInternalPostmountDisplay: effectivePostmountFor || null,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        name: name ?? "<Img>",
        controls,
        showInTimeline: showInTimeline ?? true,
        hidden,
        outlineRef: refForOutline,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImgContent, {
          src,
          refForOutline,
          style: croppedStyle ?? void 0,
          ...props2
        })
      })
    });
  };
  var CanvasImageWithPrivateProps = CanvasImage;
  var imgSchema = {
    src: {
      type: "asset",
      assetType: "image",
      default: void 0,
      description: "Source",
      keyframable: false
    },
    ...baseSchema,
    ...cropSchema$1,
    ...premountSchema$1,
    ...transformSchema$1,
    ...backgroundSchema$1,
    ...borderSchema$1,
    ...borderRadiusSchema$1
  };
  var imgCanvasFallbackIncompatibleProps = /* @__PURE__ */ new Set([
    "alt",
    "crossOrigin",
    "decoding",
    "fetchPriority",
    "loading",
    "onError",
    "onImageFrame",
    "onLoad",
    "sizes",
    "srcSet",
    "useMap"
  ]);
  var getIncompatiblePropNames = (props2) => Object.keys(props2).filter((key) => props2[key] !== void 0 && imgCanvasFallbackIncompatibleProps.has(key));
  var formatPropList = (props2) => {
    return props2.map((prop) => `"${prop}"`).join(", ");
  };
  var validateCanvasImageFallbackProps = ({
    props: props2,
    ref,
    width,
    height
  }) => {
    if (typeof width === "string" || typeof height === "string") {
      throw new Error('The "width" and "height" props must be numbers on <Img> when effects are passed, because <Img> renders a <CanvasImage>. Use numeric props or CSS dimensions in "style".');
    }
    const conflictingProps = getIncompatiblePropNames(props2);
    if (ref !== null && ref !== void 0) {
      conflictingProps.unshift("ref");
    }
    if (conflictingProps.length === 0) {
      return;
    }
    throw new Error(`The ${formatPropList(conflictingProps)} prop${conflictingProps.length === 1 ? "" : "s"} cannot be used on <Img> when effects are passed, because <Img> renders a <canvas> instead of a native <img>. Remove ${conflictingProps.length === 1 ? "this prop" : "these props"}.`);
  };
  var getFitFromObjectFit = (style2) => {
    const objectFit = style2 == null ? void 0 : style2.objectFit;
    if (objectFit === "fill" || objectFit === "contain" || objectFit === "cover") {
      return objectFit;
    }
    return;
  };
  var ImgInner = ({
    effects = [],
    ref,
    hidden,
    name,
    showInTimeline,
    src,
    from,
    trimBefore,
    durationInFrames,
    freeze,
    premountFor,
    postmountFor,
    styleWhilePremounted,
    styleWhilePostmounted,
    controls,
    width,
    height,
    className: className2,
    style: style2,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    id: id2,
    pauseWhenLoading,
    maxRetries,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    ...props2
  }) => {
    const refForOutline = reactExports.useRef(null);
    const shouldPauseWhenLoading = resolveV5Default(pauseWhenLoading);
    if (effects.length === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(NativeImgInner, {
        ...props2,
        ref,
        hidden,
        name,
        showInTimeline,
        src,
        from,
        trimBefore,
        durationInFrames,
        freeze,
        premountFor,
        postmountFor,
        styleWhilePremounted,
        styleWhilePostmounted,
        controls,
        width,
        height,
        className: className2,
        style: style2,
        cropLeft,
        cropRight,
        cropTop,
        cropBottom,
        id: id2,
        pauseWhenLoading: shouldPauseWhenLoading,
        maxRetries,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        outlineRef: refForOutline
      });
    }
    if (!src) {
      throw new Error('No "src" prop was passed to <Img>.');
    }
    validateCanvasImageFallbackProps({
      props: props2,
      ref,
      width,
      height
    });
    const canvasWidth = typeof width === "number" ? width : void 0;
    const canvasHeight = typeof height === "number" ? height : void 0;
    const canvasProps = props2;
    const canvasFit = getFitFromObjectFit(style2) ?? "fill";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CanvasImageWithPrivateProps, {
      src,
      width: canvasWidth,
      height: canvasHeight,
      fit: canvasFit,
      effects,
      className: className2,
      style: style2,
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      id: id2,
      pauseWhenLoading: shouldPauseWhenLoading,
      maxRetries,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      from,
      trimBefore,
      durationInFrames,
      freeze,
      premountFor,
      postmountFor,
      styleWhilePremounted,
      styleWhilePostmounted,
      hidden,
      name: name ?? "<Img>",
      showInTimeline,
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/img",
      _remotionInternalCropComponentName: "<Img />",
      controls,
      outlineRef: refForOutline,
      ...canvasProps
    });
  };
  var Img = withInteractivitySchema({
    Component: ImgInner,
    componentName: "<Img>",
    componentIdentity: "dev.remotion.remotion.Img",
    schema: imgSchema,
    supportsEffects: true
  });
  addSequenceStackTraces(Img);
  var sourcePathToIdentityPrefix = (packageName) => {
    if (packageName === "remotion") {
      return "dev.remotion.remotion";
    }
    if (packageName.startsWith("@remotion/")) {
      const normalizedPackageName = packageName.slice("@remotion/".length).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      return `dev.remotion.${normalizedPackageName}`;
    }
    throw new Error(`Unsupported Remotion package name: ${packageName}`);
  };
  var makeRemotionComponentIdentity = ({
    packageName,
    componentName
  }) => {
    return `${sourcePathToIdentityPrefix(packageName)}.${componentName}`;
  };
  var interactiveElementSchema = {
    ...baseSchema,
    ...transformSchema$1,
    ...cropSchema$1
  };
  var interactiveBackgroundElementSchema = {
    ...interactiveElementSchema,
    ...backgroundSchema$1
  };
  var interactiveBorderElementSchema = {
    ...interactiveBackgroundElementSchema,
    ...borderSchema$1,
    ...borderRadiusSchema$1
  };
  var interactiveTextElementSchema = {
    ...interactiveBorderElementSchema,
    ...textSchema,
    ...textContentSchema
  };
  var interactiveSvgTextElementSchema = {
    ...interactiveElementSchema,
    ...svgPaintSchema,
    ...textSchema,
    ...textContentSchema
  };
  var interactiveSvgElementSchema = {
    ...interactiveElementSchema,
    ...svgPaintSchema
  };
  var interactiveSvgStrokeElementSchema = {
    ...interactiveElementSchema,
    ...svgStrokeSchema
  };
  var interactiveSvgRootElementSchema = {
    ...interactiveBorderElementSchema,
    ...svgPaintSchema
  };
  var setRef2 = (ref, value) => {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  };
  var withSchema = (options) => {
    const Wrapped = withInteractivitySchema(options);
    addSequenceStackTraces(Wrapped);
    return Wrapped;
  };
  var makeInteractiveElement = (tag, displayName, schema) => {
    const Inner = reactExports.forwardRef((propsWithControls, ref) => {
      const {
        durationInFrames,
        from,
        trimBefore,
        freeze,
        hidden,
        name,
        showInTimeline,
        controls,
        cropLeft,
        cropRight,
        cropTop,
        cropBottom,
        style: style2,
        ...props2
      } = propsWithControls;
      const croppedStyle = useCropStyle({
        cropLeft,
        cropRight,
        cropTop,
        cropBottom,
        style: style2 ?? null,
        componentName: displayName
      });
      const refForOutline = reactExports.useRef(null);
      const callbackRef = reactExports.useCallback((element) => {
        refForOutline.current = element;
        setRef2(ref, element);
      }, [ref]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
        layout: "none",
        from: from ?? 0,
        trimBefore,
        durationInFrames: durationInFrames ?? Infinity,
        freeze,
        hidden,
        name: name ?? displayName,
        showInTimeline: showInTimeline ?? true,
        controls,
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/interactive",
        outlineRef: refForOutline,
        children: React14.createElement(tag, {
          ...props2,
          style: croppedStyle ?? void 0,
          ref: callbackRef
        })
      });
    });
    Inner.displayName = displayName;
    const Wrapped = withSchema({
      Component: Inner,
      componentName: displayName,
      componentIdentity: makeRemotionComponentIdentity({
        packageName: "remotion",
        componentName: displayName.slice(1, -1)
      }),
      schema,
      supportsEffects: false
    });
    Wrapped.displayName = displayName;
    return Wrapped;
  };
  var makeInteractiveTextElement = (tag, displayName) => {
    return makeInteractiveElement(tag, displayName, interactiveTextElementSchema);
  };
  var makeInteractiveSvgElement = (tag, displayName) => {
    return makeInteractiveElement(tag, displayName, interactiveSvgElementSchema);
  };
  var makeInteractiveSvgStrokeElement = (tag, displayName) => {
    return makeInteractiveElement(tag, displayName, interactiveSvgStrokeElementSchema);
  };
  var Interactive = {
    baseSchema,
    captionsSchema,
    transformSchema: transformSchema$1,
    textSchema,
    backgroundSchema: backgroundSchema$1,
    borderSchema: borderSchema$1,
    borderRadiusSchema: borderRadiusSchema$1,
    cropSchema: cropSchema$1,
    svgPaintSchema,
    svgStrokeSchema,
    premountSchema: premountSchema$1,
    sequenceSchema: sequenceSchema$1,
    withSchema,
    _internalMakeRemotionComponentIdentity: makeRemotionComponentIdentity,
    A: makeInteractiveTextElement("a", "<Interactive.A>"),
    Article: makeInteractiveTextElement("article", "<Interactive.Article>"),
    Aside: makeInteractiveTextElement("aside", "<Interactive.Aside>"),
    Button: makeInteractiveTextElement("button", "<Interactive.Button>"),
    Circle: makeInteractiveSvgElement("circle", "<Interactive.Circle>"),
    Code: makeInteractiveTextElement("code", "<Interactive.Code>"),
    Div: makeInteractiveTextElement("div", "<Interactive.Div>"),
    Ellipse: makeInteractiveSvgElement("ellipse", "<Interactive.Ellipse>"),
    Em: makeInteractiveTextElement("em", "<Interactive.Em>"),
    Footer: makeInteractiveTextElement("footer", "<Interactive.Footer>"),
    G: makeInteractiveSvgElement("g", "<Interactive.G>"),
    H1: makeInteractiveTextElement("h1", "<Interactive.H1>"),
    H2: makeInteractiveTextElement("h2", "<Interactive.H2>"),
    H3: makeInteractiveTextElement("h3", "<Interactive.H3>"),
    H4: makeInteractiveTextElement("h4", "<Interactive.H4>"),
    H5: makeInteractiveTextElement("h5", "<Interactive.H5>"),
    H6: makeInteractiveTextElement("h6", "<Interactive.H6>"),
    Header: makeInteractiveTextElement("header", "<Interactive.Header>"),
    Label: makeInteractiveTextElement("label", "<Interactive.Label>"),
    Li: makeInteractiveTextElement("li", "<Interactive.Li>"),
    Line: makeInteractiveSvgStrokeElement("line", "<Interactive.Line>"),
    Main: makeInteractiveTextElement("main", "<Interactive.Main>"),
    Nav: makeInteractiveTextElement("nav", "<Interactive.Nav>"),
    Ol: makeInteractiveTextElement("ol", "<Interactive.Ol>"),
    P: makeInteractiveTextElement("p", "<Interactive.P>"),
    Path: makeInteractiveSvgElement("path", "<Interactive.Path>"),
    Pre: makeInteractiveTextElement("pre", "<Interactive.Pre>"),
    Rect: makeInteractiveSvgElement("rect", "<Interactive.Rect>"),
    Section: makeInteractiveTextElement("section", "<Interactive.Section>"),
    Small: makeInteractiveTextElement("small", "<Interactive.Small>"),
    Span: makeInteractiveTextElement("span", "<Interactive.Span>"),
    Strong: makeInteractiveTextElement("strong", "<Interactive.Strong>"),
    Svg: makeInteractiveElement("svg", "<Interactive.Svg>", interactiveSvgRootElementSchema),
    Text: makeInteractiveElement("text", "<Interactive.Text>", interactiveSvgTextElementSchema),
    Ul: makeInteractiveTextElement("ul", "<Interactive.Ul>")
  };
  var getAnimatedImageDurationInSeconds = async ({
    resolvedSrc,
    signal,
    requestInit,
    contentType
  }) => {
    const { decoder, selectedTrack } = await createImageDecoder({
      resolvedSrc,
      signal,
      requestInit,
      contentType
    });
    try {
      const { image } = await decoder.decode({
        frameIndex: selectedTrack.frameCount - 1,
        completeFramesOnly: true
      });
      try {
        if (image.duration === null) {
          throw new Error("Could not determine animated image duration");
        }
        return (image.timestamp + image.duration) / 1e6;
      } finally {
        image.close();
      }
    } finally {
      decoder.close();
    }
  };
  var compositionsRef = React14.createRef();
  var useIsomorphicLayoutEffect2 = typeof window === "undefined" ? reactExports.useEffect : reactExports.useLayoutEffect;
  var CompositionManagerProvider = ({
    children,
    onlyRenderComposition,
    currentCompositionMetadata,
    initialCompositions,
    initialCanvasContent
  }) => {
    const { isStudio } = useRemotionEnvironment();
    const [compositionManagerId] = reactExports.useState(() => String(Math.random()));
    const committedOrderRef = reactExports.useRef(null);
    const committedOrderIdsRef = reactExports.useRef(null);
    const internalOrderRef = reactExports.useRef(new Map(initialCompositions.map((composition, index) => [
      getCompositionAndFolderOrderKey({
        type: "composition",
        id: composition.id
      }),
      index
    ])));
    const nextInternalOrderRef = reactExports.useRef(initialCompositions.length);
    const [folders, setFolders] = reactExports.useState([]);
    const [canvasContent, setCanvasContent] = reactExports.useState(initialCanvasContent);
    const [currentAssetMetadata, setCurrentAssetMetadata] = reactExports.useState(null);
    const [compositions, setCompositions] = reactExports.useState(() => initialCompositions.map((composition, order) => ({ ...composition, order })));
    const currentcompositionsRef = reactExports.useRef(compositions);
    const updateCompositions = reactExports.useCallback((updateComps) => {
      setCompositions((comps) => {
        const updated = updateComps(comps);
        currentcompositionsRef.current = updated;
        return updated;
      });
    }, []);
    const registerComposition = reactExports.useCallback((comp) => {
      const orderKey = getCompositionAndFolderOrderKey({
        type: "composition",
        id: comp.id
      });
      const internalOrder = nextInternalOrderRef.current++;
      internalOrderRef.current.set(orderKey, internalOrder);
      updateCompositions((comps) => {
        var _a;
        if (comps.find((c2) => c2.id === comp.id)) {
          throw new Error(`Multiple composition with id ${comp.id} are registered.`);
        }
        return [
          ...comps,
          {
            ...comp,
            order: ((_a = committedOrderRef.current) == null ? void 0 : _a.get(orderKey)) ?? internalOrder
          }
        ];
      });
    }, [updateCompositions]);
    const unregisterComposition = reactExports.useCallback((id2) => {
      internalOrderRef.current.delete(getCompositionAndFolderOrderKey({ type: "composition", id: id2 }));
      setCompositions((comps) => {
        return comps.filter((c2) => c2.id !== id2);
      });
    }, []);
    const registerFolder = reactExports.useCallback((name, parent, stack) => {
      const orderKey = getCompositionAndFolderOrderKey({
        type: "folder",
        id: getFolderOrderId({ name, parent })
      });
      const internalOrder = nextInternalOrderRef.current++;
      internalOrderRef.current.set(orderKey, internalOrder);
      setFolders((prevFolders) => {
        var _a;
        return [
          ...prevFolders,
          {
            name,
            parent,
            order: ((_a = committedOrderRef.current) == null ? void 0 : _a.get(orderKey)) ?? internalOrder,
            stack
          }
        ];
      });
    }, []);
    const unregisterFolder = reactExports.useCallback((name, parent) => {
      internalOrderRef.current.delete(getCompositionAndFolderOrderKey({
        type: "folder",
        id: getFolderOrderId({ name, parent })
      }));
      setFolders((prevFolders) => {
        return prevFolders.filter((p2) => !(p2.name === name && p2.parent === parent));
      });
    }, []);
    useIsomorphicLayoutEffect2(() => {
      if (!isStudio) {
        return;
      }
      let unmounted = false;
      const onCommitOrder = (event) => {
        const { detail } = event;
        const managerOrder = detail.compositionManagers.find((item) => item.managerId === compositionManagerId);
        if (!managerOrder) {
          return;
        }
        const orderIds = managerOrder.compositionAndFolderOrder.map(getCompositionAndFolderOrderKey);
        const previousOrder = committedOrderIdsRef.current;
        if (previousOrder !== null && previousOrder.length === orderIds.length && previousOrder.every((id2, index) => id2 === orderIds[index])) {
          return;
        }
        const order = new Map(orderIds.map((id2, index) => [id2, index]));
        committedOrderIdsRef.current = orderIds;
        committedOrderRef.current = order;
        queueMicrotask(() => {
          if (unmounted) {
            return;
          }
          updateCompositions((currentCompositions) => {
            let changed = false;
            const nextCompositions = currentCompositions.map((composition) => {
              const nextOrder = order.get(getCompositionAndFolderOrderKey({
                type: "composition",
                id: composition.id
              })) ?? internalOrderRef.current.get(getCompositionAndFolderOrderKey({
                type: "composition",
                id: composition.id
              })) ?? composition.order;
              if (nextOrder === composition.order) {
                return composition;
              }
              changed = true;
              return { ...composition, order: nextOrder };
            });
            return changed ? nextCompositions : currentCompositions;
          });
          setFolders((currentFolders) => {
            let changed = false;
            const nextFolders = currentFolders.map((folder) => {
              const nextOrder = order.get(getCompositionAndFolderOrderKey({
                type: "folder",
                id: getFolderOrderId(folder)
              })) ?? internalOrderRef.current.get(getCompositionAndFolderOrderKey({
                type: "folder",
                id: getFolderOrderId(folder)
              })) ?? folder.order;
              if (nextOrder === folder.order) {
                return folder;
              }
              changed = true;
              return { ...folder, order: nextOrder };
            });
            return changed ? nextFolders : currentFolders;
          });
        });
      };
      window.addEventListener(COMMIT_ORDER_EVENT, onCommitOrder);
      return () => {
        unmounted = true;
        window.removeEventListener(COMMIT_ORDER_EVENT, onCommitOrder);
      };
    }, [compositionManagerId, isStudio, updateCompositions]);
    reactExports.useImperativeHandle(compositionsRef, () => {
      return {
        getCompositions: () => currentcompositionsRef.current
      };
    }, []);
    const compositionManagerSetters = reactExports.useMemo(() => {
      return {
        registerComposition,
        unregisterComposition,
        registerFolder,
        unregisterFolder,
        setCanvasContent,
        setCurrentAssetMetadata,
        onlyRenderComposition
      };
    }, [
      registerComposition,
      registerFolder,
      unregisterComposition,
      unregisterFolder,
      onlyRenderComposition
    ]);
    const compositionManagerContextValue = reactExports.useMemo(() => {
      return {
        compositions,
        folders,
        currentCompositionMetadata,
        currentAssetMetadata,
        canvasContent
      };
    }, [
      compositions,
      folders,
      currentCompositionMetadata,
      currentAssetMetadata,
      canvasContent
    ]);
    const providers = /* @__PURE__ */ jsxRuntimeExports.jsx(CompositionManager.Provider, {
      value: compositionManagerContextValue,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompositionSetters.Provider, {
        value: compositionManagerSetters,
        children
      })
    });
    return isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(CompositionManagerOrderMarker, {
      managerId: compositionManagerId,
      children: providers
    }) : providers;
  };
  var exports_default_css = {};
  __export(exports_default_css, {
    makeDefaultPreviewCSS: () => makeDefaultPreviewCSS,
    injectCSS: () => injectCSS,
    OBJECTFIT_CONTAIN_CLASS_NAME: () => OBJECTFIT_CONTAIN_CLASS_NAME
  });
  var injected = {};
  var injectCSS = (css) => {
    if (typeof document === "undefined") {
      return () => {
      };
    }
    if (injected[css]) {
      return () => {
      };
    }
    const head = document.head || document.getElementsByTagName("head")[0];
    const style2 = document.createElement("style");
    style2.appendChild(document.createTextNode(css));
    head.prepend(style2);
    injected[css] = style2;
    return () => {
      const styleElement = injected[css];
      if (styleElement) {
        if (styleElement.parentNode) {
          styleElement.parentNode.removeChild(styleElement);
        }
        delete injected[css];
      }
    };
  };
  var OBJECTFIT_CONTAIN_CLASS_NAME = "__remotion_objectfitcontain";
  var makeDefaultPreviewCSS = (scope, backgroundColor) => {
    if (!scope) {
      return `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${backgroundColor};
    }
    .${OBJECTFIT_CONTAIN_CLASS_NAME} {
      object-fit: contain;
    }
    `;
    }
    return `
    ${scope} * {
      box-sizing: border-box;
    }
    ${scope} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${scope} .${OBJECTFIT_CONTAIN_CLASS_NAME} {
      object-fit: contain;
    }
  `;
  };
  var REMOTION_STUDIO_CONTAINER_ELEMENT = "__remotion-studio-container";
  var getPreviewDomElement = () => {
    return document.getElementById(REMOTION_STUDIO_CONTAINER_ELEMENT);
  };
  var MaxMediaCacheSizeContext = React14.createContext(null);
  var disposeResource = (resource) => {
    if (resource.disposed) {
      return;
    }
    resource.disposed = true;
    resource.values.clear();
    resource.dispose();
  };
  var makeMediaResourceManager = () => {
    const resources = /* @__PURE__ */ new Map();
    let disposed = false;
    return {
      acquire: ({
        key,
        create
      }) => {
        if (disposed) {
          throw new Error("Media resource manager has already been disposed");
        }
        let entry = resources.get(key);
        if (!entry) {
          const created = create();
          entry = {
            resource: created.resource,
            dispose: created.dispose,
            refCount: 0,
            disposeGeneration: 0,
            disposed: false,
            values: /* @__PURE__ */ new Map()
          };
          resources.set(key, entry);
        }
        entry.refCount++;
        entry.disposeGeneration++;
        let released = false;
        return {
          resource: entry.resource,
          getOrCreateValue: (valueKey, createValue) => {
            if (entry.values.has(valueKey)) {
              return entry.values.get(valueKey);
            }
            const value = createValue();
            entry.values.set(valueKey, value);
            return value;
          },
          release: () => {
            if (released) {
              return;
            }
            released = true;
            entry.refCount--;
            if (entry.refCount !== 0) {
              return;
            }
            const disposeGeneration = ++entry.disposeGeneration;
            queueMicrotask(() => {
              if (entry.refCount !== 0 || entry.disposeGeneration !== disposeGeneration) {
                return;
              }
              if (resources.get(key) === entry) {
                resources.delete(key);
              }
              disposeResource(entry);
            });
          }
        };
      },
      invalidate: (key) => {
        const entry = resources.get(key);
        if (!entry) {
          return;
        }
        resources.delete(key);
        entry.disposeGeneration++;
        if (entry.refCount === 0) {
          disposeResource(entry);
        }
      },
      dispose: () => {
        if (disposed) {
          return;
        }
        disposed = true;
        const entries = Array.from(resources.values());
        resources.clear();
        let firstError = null;
        for (const entry of entries) {
          try {
            disposeResource(entry);
          } catch (error2) {
            firstError ?? (firstError = error2);
          }
        }
        if (firstError !== null) {
          throw firstError;
        }
      }
    };
  };
  var getMediabunnyInputResourceKey = ({
    src,
    credentials,
    requestInitFingerprint,
    revision
  }) => JSON.stringify([
    "mediabunny-input",
    src,
    credentials,
    requestInitFingerprint,
    revision
  ]);
  var MEDIABUNNY_DURATION_VALUE_KEY = "mediabunny-duration";
  var globalMediaResourceManager = makeMediaResourceManager();
  var Root = null;
  var listeners = [];
  var getRoot = () => {
    return Root;
  };
  var waitForRoot = (fn) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((l2) => l2 !== fn);
    };
  };
  var MediaEnabledContext = reactExports.createContext(null);
  var useVideoEnabled = () => {
    const context = reactExports.useContext(MediaEnabledContext);
    if (!context) {
      return window.remotion_videoEnabled;
    }
    if (context.videoEnabled === null) {
      return window.remotion_videoEnabled;
    }
    return context.videoEnabled;
  };
  var useAudioEnabled = () => {
    const context = reactExports.useContext(MediaEnabledContext);
    if (!context) {
      return window.remotion_audioEnabled;
    }
    if (context.audioEnabled === null) {
      return window.remotion_audioEnabled;
    }
    return context.audioEnabled;
  };
  var MediaEnabledProvider = ({
    children,
    videoEnabled,
    audioEnabled
  }) => {
    const value = reactExports.useMemo(() => ({ videoEnabled, audioEnabled }), [videoEnabled, audioEnabled]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MediaEnabledContext.Provider, {
      value,
      children
    });
  };
  var RemotionRootContexts = ({
    children,
    numberOfAudioTags,
    logLevel,
    audioLatencyHint,
    previewSampleRate,
    videoEnabled,
    audioEnabled,
    frameState,
    _experimentalKeepAudioContextAlive
  }) => {
    const logging = reactExports.useMemo(() => {
      return { logLevel, mountTime: Date.now() };
    }, [logLevel]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LogLevelContext.Provider, {
      value: logging,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContextProvider, {
        frameState,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MediaEnabledProvider, {
          videoEnabled,
          audioEnabled,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditorPropsProvider, {
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrefetchProvider, {
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceManagerProvider, {
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(DurationsContextProvider, {
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(BufferingProvider, {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SharedAudioContextProvider, {
                      audioLatencyHint,
                      audioEnabled,
                      previewSampleRate,
                      _experimentalKeepAudioContextAlive,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SharedAudioTagsContextProvider, {
                        numberOfAudioTags,
                        children
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var makeRenderResourceManager = () => {
    const resources = /* @__PURE__ */ new Map();
    let disposed = false;
    return {
      getOrCreateResource: ({
        key,
        create
      }) => {
        if (disposed) {
          throw new Error("Render resource manager has already been disposed");
        }
        const existing = resources.get(key);
        if (existing) {
          return existing.resource;
        }
        const created = create();
        resources.set(key, created);
        return created.resource;
      },
      dispose: () => {
        if (disposed) {
          return;
        }
        disposed = true;
        const resourcesToDispose = Array.from(resources.values());
        resources.clear();
        let firstError = null;
        for (const resource of resourcesToDispose) {
          try {
            resource.dispose();
          } catch (error2) {
            firstError ?? (firstError = error2);
          }
        }
        if (firstError !== null) {
          throw firstError;
        }
      }
    };
  };
  var RenderResourceManagerContext = React14.createContext(null);
  var validCodecs = [
    "h264",
    "h265",
    "vp8",
    "vp9",
    "av1",
    "mp3",
    "aac",
    "wav",
    "prores",
    "h264-mkv",
    "h264-ts",
    "gif"
  ];
  function validateCodec(defaultCodec, location, name) {
    if (typeof defaultCodec === "undefined") {
      return;
    }
    if (typeof defaultCodec !== "string") {
      throw new TypeError(`The "${name}" prop ${location} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
    }
    if (!validCodecs.includes(defaultCodec)) {
      throw new Error(`The "${name}" prop ${location} must be one of ${validCodecs.join(", ")}, but you passed ${defaultCodec}.`);
    }
  }
  var validateCalculated = ({
    calculated,
    compositionId,
    compositionFps,
    compositionHeight,
    compositionWidth,
    compositionDurationInFrames
  }) => {
    const calculateMetadataErrorLocation = `calculated by calculateMetadata() for the composition "${compositionId}"`;
    const defaultErrorLocation = `of the "<Composition />" component with the id "${compositionId}"`;
    const width = (calculated == null ? void 0 : calculated.width) ?? compositionWidth ?? void 0;
    validateDimension$2(width, "width", (calculated == null ? void 0 : calculated.width) ? calculateMetadataErrorLocation : defaultErrorLocation);
    const height = (calculated == null ? void 0 : calculated.height) ?? compositionHeight ?? void 0;
    validateDimension$2(height, "height", (calculated == null ? void 0 : calculated.height) ? calculateMetadataErrorLocation : defaultErrorLocation);
    const fps = (calculated == null ? void 0 : calculated.fps) ?? compositionFps ?? null;
    validateFps$2(fps, (calculated == null ? void 0 : calculated.fps) ? calculateMetadataErrorLocation : defaultErrorLocation);
    const durationInFrames = (calculated == null ? void 0 : calculated.durationInFrames) ?? compositionDurationInFrames ?? null;
    validateDurationInFrames$2(durationInFrames, {
      allowFloats: false,
      component: `of the "<Composition />" component with the id "${compositionId}"`
    });
    const defaultCodec = calculated == null ? void 0 : calculated.defaultCodec;
    validateCodec(defaultCodec, calculateMetadataErrorLocation, "defaultCodec");
    const defaultOutName = calculated == null ? void 0 : calculated.defaultOutName;
    const defaultVideoImageFormat = calculated == null ? void 0 : calculated.defaultVideoImageFormat;
    const defaultPixelFormat = calculated == null ? void 0 : calculated.defaultPixelFormat;
    const defaultProResProfile = calculated == null ? void 0 : calculated.defaultProResProfile;
    const defaultSampleRate = calculated == null ? void 0 : calculated.defaultSampleRate;
    return {
      width,
      height,
      fps,
      durationInFrames,
      defaultCodec,
      defaultOutName,
      defaultVideoImageFormat,
      defaultPixelFormat,
      defaultProResProfile,
      defaultSampleRate
    };
  };
  var makeVideoConfigWithMetadata = ({
    calculated,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionId,
    compositionWidth,
    defaultProps,
    originalProps
  }) => {
    const data = validateCalculated({
      calculated,
      compositionDurationInFrames,
      compositionFps,
      compositionHeight,
      compositionWidth,
      compositionId
    });
    return {
      metadataSource: {
        durationInFrames: (calculated == null ? void 0 : calculated.durationInFrames) === void 0 ? "composition" : "calculate-metadata",
        fps: (calculated == null ? void 0 : calculated.fps) === void 0 ? "composition" : "calculate-metadata",
        height: (calculated == null ? void 0 : calculated.height) === void 0 ? "composition" : "calculate-metadata",
        width: (calculated == null ? void 0 : calculated.width) === void 0 ? "composition" : "calculate-metadata"
      },
      videoConfig: {
        ...data,
        id: compositionId,
        defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
        props: serializeThenDeserializeInStudio((calculated == null ? void 0 : calculated.props) ?? originalProps),
        defaultCodec: data.defaultCodec ?? null,
        defaultOutName: data.defaultOutName ?? null,
        defaultVideoImageFormat: data.defaultVideoImageFormat ?? null,
        defaultPixelFormat: data.defaultPixelFormat ?? null,
        defaultProResProfile: data.defaultProResProfile ?? null,
        defaultSampleRate: data.defaultSampleRate ?? null
      }
    };
  };
  var resolveVideoConfigWithMetadata = ({
    calculateMetadata,
    signal,
    defaultProps,
    inputProps: originalProps,
    compositionId,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionWidth
  }) => {
    const calculatedProm = calculateMetadata ? calculateMetadata({
      defaultProps,
      props: originalProps,
      abortSignal: signal,
      compositionId,
      isRendering: getRemotionEnvironment().isRendering
    }) : null;
    if (calculatedProm !== null && typeof calculatedProm === "object" && "then" in calculatedProm) {
      return calculatedProm.then((c2) => {
        return makeVideoConfigWithMetadata({
          calculated: c2,
          compositionDurationInFrames,
          compositionFps,
          compositionHeight,
          compositionWidth,
          compositionId,
          defaultProps,
          originalProps
        });
      });
    }
    return makeVideoConfigWithMetadata({
      calculated: calculatedProm,
      compositionDurationInFrames,
      compositionFps,
      compositionHeight,
      compositionWidth,
      compositionId,
      defaultProps,
      originalProps
    });
  };
  var resolveVideoConfig = (params) => {
    const resolved = resolveVideoConfigWithMetadata(params);
    if (typeof resolved === "object" && "then" in resolved) {
      return resolved.then(({ videoConfig }) => videoConfig);
    }
    return resolved.videoConfig;
  };
  var resolveVideoConfigWithMetadataOrCatch = (params) => {
    try {
      return {
        type: "success",
        result: resolveVideoConfigWithMetadata(params)
      };
    } catch (err) {
      return {
        type: "error",
        error: err
      };
    }
  };
  var resolveVideoConfigOrCatch = (params) => {
    try {
      const promiseOrReturnValue = resolveVideoConfig(params);
      return {
        type: "success",
        result: promiseOrReturnValue
      };
    } catch (err) {
      return {
        type: "error",
        error: err
      };
    }
  };
  var SequenceStackTracesUpdateContext = React14.createContext(() => {
  });
  var getEnvVariables = () => {
    if (getRemotionEnvironment().isRendering) {
      const param = window.remotion_envVariables;
      if (!param) {
        return {};
      }
      return { ...JSON.parse(param), NODE_ENV: "production" };
    }
    return {
      NODE_ENV: "production"
    };
  };
  var setupEnvVariables = () => {
    const env = getEnvVariables();
    if (!window.process) {
      window.process = {};
    }
    if (!window.process.env) {
      window.process.env = {};
    }
    Object.keys(env).forEach((key) => {
      window.process.env[key] = env[key];
    });
  };
  var PixelDensityContext = React14.createContext(null);
  var getOffthreadVideoSource = ({
    src,
    transparent,
    currentTime,
    toneMapped
  }) => {
    return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(getAbsoluteSrc(src))}&time=${encodeURIComponent(Math.max(0, currentTime))}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
  };
  var OffthreadVideoForRendering = ({
    onError,
    volume: volumeProp,
    playbackRate,
    src,
    muted,
    allowAmplificationDuringRender,
    transparent,
    toneMapped,
    toneFrequency,
    name,
    loopVolumeCurveBehavior,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onVideoFrame,
    crossOrigin,
    audioStreamIndex,
    preservePitch: _preservePitch,
    ...props2
  }) => {
    const absoluteFrame = useTimelinePosition();
    const frame = useCurrentFrame();
    const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior);
    const videoConfig = useUnsafeVideoConfig();
    const sequenceContext = reactExports.useContext(SequenceContext);
    const mediaStartsAt = useMediaStartsAt();
    const { registerRenderAsset, unregisterRenderAsset } = reactExports.useContext(RenderAssetManager);
    if (!src) {
      throw new TypeError("No `src` was passed to <OffthreadVideo>.");
    }
    const id2 = reactExports.useMemo(() => `offthreadvideo-${random(src)}-${sequenceContext == null ? void 0 : sequenceContext.cumulatedFrom}-${sequenceContext == null ? void 0 : sequenceContext.relativeFrom}-${sequenceContext == null ? void 0 : sequenceContext.durationInFrames}`, [
      src,
      sequenceContext == null ? void 0 : sequenceContext.cumulatedFrom,
      sequenceContext == null ? void 0 : sequenceContext.relativeFrom,
      sequenceContext == null ? void 0 : sequenceContext.durationInFrames
    ]);
    if (!videoConfig) {
      throw new Error("No video config found");
    }
    const volume = evaluateVolume({
      volume: volumeProp,
      frame: volumePropsFrame,
      mediaVolume: 1
    });
    warnAboutTooHighVolume(volume);
    reactExports.useEffect(() => {
      if (!src) {
        throw new Error("No src passed");
      }
      if (!window.remotion_audioEnabled) {
        return;
      }
      if (muted) {
        return;
      }
      if (volume <= 0) {
        return;
      }
      registerRenderAsset({
        type: "video",
        src: getAbsoluteSrc(src),
        id: id2,
        frame: absoluteFrame,
        volume,
        mediaFrame: frame,
        playbackRate,
        toneFrequency,
        audioStartFrame: Math.max(0, -((sequenceContext == null ? void 0 : sequenceContext.cumulatedNegativeFrom) ?? 0)),
        audioStreamIndex
      });
      return () => unregisterRenderAsset(id2);
    }, [
      muted,
      src,
      registerRenderAsset,
      id2,
      unregisterRenderAsset,
      volume,
      frame,
      absoluteFrame,
      playbackRate,
      toneFrequency,
      sequenceContext == null ? void 0 : sequenceContext.cumulatedNegativeFrom,
      audioStreamIndex
    ]);
    const currentTime = reactExports.useMemo(() => {
      return getExpectedMediaFrameUncorrected({
        frame,
        playbackRate: playbackRate || 1,
        startFrom: -mediaStartsAt
      }) / videoConfig.fps;
    }, [frame, mediaStartsAt, playbackRate, videoConfig.fps]);
    const actualSrc = reactExports.useMemo(() => {
      return getOffthreadVideoSource({
        src,
        currentTime,
        transparent,
        toneMapped
      });
    }, [toneMapped, currentTime, src, transparent]);
    const [imageSrc, setImageSrc] = reactExports.useState(null);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    reactExports.useLayoutEffect(() => {
      if (!window.remotion_videoEnabled) {
        return;
      }
      const cleanup = [];
      setImageSrc(null);
      const controller = new AbortController();
      const newHandle = delayRender2(`Fetching ${actualSrc} from server`, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      const execute = async () => {
        try {
          const res = await fetch(actualSrc, {
            signal: controller.signal,
            cache: "no-store"
          });
          if (res.status !== 200) {
            if (res.status === 500) {
              const json = await res.json();
              if (json.error) {
                const cleanedUpErrorMessage = json.error.replace(/^Error: /, "");
                throw new Error(cleanedUpErrorMessage);
              }
            }
            throw new Error(`Server returned status ${res.status} while fetching ${actualSrc}`);
          }
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
          cleanup.push(() => URL.revokeObjectURL(url));
          setImageSrc({
            src: url,
            handle: newHandle
          });
        } catch (err) {
          if (err.message.includes("aborted")) {
            continueRender2(newHandle);
            return;
          }
          if (controller.signal.aborted) {
            continueRender2(newHandle);
            return;
          }
          if (err.message.includes("Failed to fetch")) {
            err = new Error(`Failed to fetch ${actualSrc}. This could be caused by Chrome rejecting the request because the disk space is low. Consider increasing the disk size of your environment.`, { cause: err });
          }
          if (onError) {
            onError(err);
          } else {
            cancelRender(err);
          }
        }
      };
      execute();
      cleanup.push(() => {
        if (controller.signal.aborted) {
          return;
        }
        controller.abort();
      });
      return () => {
        cleanup.forEach((c2) => c2());
      };
    }, [
      actualSrc,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      onError,
      continueRender2,
      delayRender2
    ]);
    const onErr = reactExports.useCallback(() => {
      if (onError) {
        onError == null ? void 0 : onError(new Error("Failed to load image with src " + imageSrc));
      } else {
        cancelRender("Failed to load image with src " + imageSrc);
      }
    }, [imageSrc, onError]);
    const className2 = reactExports.useMemo(() => {
      return [OBJECTFIT_CONTAIN_CLASS_NAME, props2.className].filter(truthy).join(" ");
    }, [props2.className]);
    const onImageFrame = reactExports.useCallback((img) => {
      if (onVideoFrame) {
        onVideoFrame(img);
      }
    }, [onVideoFrame]);
    if (!imageSrc || !window.remotion_videoEnabled) {
      return null;
    }
    continueRender2(imageSrc.handle);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Img, {
      src: imageSrc.src,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      onImageFrame,
      ...props2,
      onError: onErr,
      className: className2
    });
  };
  var useEmitVideoFrame = ({
    ref,
    onVideoFrame
  }) => {
    reactExports.useEffect(() => {
      const { current } = ref;
      if (!current) {
        return;
      }
      if (!onVideoFrame) {
        return;
      }
      let handle = 0;
      const callback = (_now, metadata) => {
        if (!ref.current) {
          return;
        }
        onVideoFrame(ref.current, _now, metadata);
        handle = ref.current.requestVideoFrameCallback(callback);
      };
      onVideoFrame(current);
      if (!current.requestVideoFrameCallback) {
        return;
      }
      handle = current.requestVideoFrameCallback(callback);
      return () => {
        if (handle) {
          current.cancelVideoFrameCallback(handle);
        }
      };
    }, [onVideoFrame, ref]);
  };
  class MediaPlaybackError extends Error {
    constructor({ message, src }) {
      super(message);
      __publicField(this, "src");
      this.name = "MediaPlaybackError";
      this.src = src;
    }
  }
  var VideoForDevelopmentRefForwardingFunction = (props2, ref) => {
    const context = reactExports.useContext(SharedAudioContext);
    if (!context) {
      throw new Error("SharedAudioContext not found");
    }
    const videoRef = reactExports.useRef(null);
    const sharedSource = reactExports.useMemo(() => {
      if (!context.audioContext) {
        return null;
      }
      return makeSharedElementSourceNode({
        audioContext: context.audioContext,
        ref: videoRef
      });
    }, [context.audioContext]);
    const effectToUse = React14.useInsertionEffect ?? React14.useLayoutEffect;
    effectToUse(() => {
      return () => {
        requestAnimationFrame(() => {
          sharedSource == null ? void 0 : sharedSource.cleanup();
        });
      };
    }, [sharedSource]);
    const {
      volume,
      muted,
      playbackRate,
      preservePitch,
      onlyWarnForMediaSeekingError,
      src,
      onDuration,
      acceptableTimeShift,
      acceptableTimeShiftInSeconds,
      toneFrequency,
      name,
      _remotionInternalNativeLoopPassed,
      _remotionInternalStack,
      style: style2,
      pauseWhenBuffering,
      showInTimeline,
      loopVolumeCurveBehavior,
      onError,
      onAutoPlayError,
      onVideoFrame,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      allowAmplificationDuringRender,
      useWebAudioApi,
      audioStreamIndex,
      ...nativeProps
    } = props2;
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const { fps, durationInFrames } = useVideoConfig();
    const parentSequence = reactExports.useContext(SequenceContext);
    const { isStudio } = useRemotionEnvironment();
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const [timelineId] = reactExports.useState(() => String(Math.random()));
    if (typeof acceptableTimeShift !== "undefined") {
      throw new Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");
    }
    const [mediaVolume] = useMediaVolumeState();
    const [playerMuted] = usePlayerMutedState();
    const userPreferredVolume = evaluateVolume({
      frame: volumePropFrame,
      volume,
      mediaVolume
    });
    warnAboutTooHighVolume(userPreferredVolume);
    const getStack = reactExports.useCallback(() => {
      return _remotionInternalStack ?? null;
    }, [_remotionInternalStack]);
    useMediaInTimeline({
      volume,
      mediaVolume,
      mediaType: "video",
      src,
      playbackRate: props2.playbackRate ?? 1,
      displayName: name ?? null,
      id: timelineId,
      getStack,
      showInTimeline,
      premountDisplay: (parentSequence == null ? void 0 : parentSequence.premountDisplay) ?? null,
      postmountDisplay: (parentSequence == null ? void 0 : parentSequence.postmountDisplay) ?? null,
      loopDisplay: void 0,
      documentationLink: onlyWarnForMediaSeekingError ? "https://www.remotion.dev/docs/offthreadvideo" : "https://www.remotion.dev/docs/html5-video",
      refForOutline: videoRef,
      muted: muted ?? false
    });
    useMediaPlayback({
      mediaRef: videoRef,
      src,
      mediaType: "video",
      playbackRate: props2.playbackRate ?? 1,
      preservePitch,
      onlyWarnForMediaSeekingError,
      acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
      isPremounting: Boolean(parentSequence == null ? void 0 : parentSequence.premounting),
      isPostmounting: Boolean(parentSequence == null ? void 0 : parentSequence.postmounting),
      pauseWhenBuffering,
      onAutoPlayError: onAutoPlayError ?? null
    });
    useMediaTag({
      id: timelineId,
      isPostmounting: Boolean(parentSequence == null ? void 0 : parentSequence.postmounting),
      isPremounting: Boolean(parentSequence == null ? void 0 : parentSequence.premounting),
      mediaRef: videoRef,
      mediaType: "video",
      onAutoPlayError: onAutoPlayError ?? null
    });
    useVolume({
      logLevel,
      mediaRef: videoRef,
      volume: userPreferredVolume,
      source: sharedSource,
      shouldUseWebAudioApi: useWebAudioApi ?? false
    });
    const actualFrom = parentSequence ? parentSequence.relativeFrom : 0;
    const duration2 = parentSequence ? Math.min(parentSequence.durationInFrames, durationInFrames) : durationInFrames;
    const preloadedSrc = usePreload(src);
    const actualSrc = useAppendVideoFragment({
      actualSrc: preloadedSrc,
      actualFrom,
      duration: duration2,
      fps
    });
    reactExports.useImperativeHandle(ref, () => {
      return videoRef.current;
    }, []);
    reactExports.useState(() => playbackLogging({
      logLevel,
      message: `Mounting video with source = ${actualSrc}, v=${VERSION}, user agent=${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
      tag: "video",
      mountTime
    }));
    reactExports.useEffect(() => {
      const { current } = videoRef;
      if (!current) {
        return;
      }
      const errorHandler = () => {
        var _a;
        if (current.error) {
          console.error("Error occurred in video", current == null ? void 0 : current.error);
          if (onError) {
            const err = new MediaPlaybackError({
              message: `Code ${current.error.code}: ${current.error.message}`,
              src
            });
            onError(err);
            return;
          }
          throw new MediaPlaybackError({
            message: `The browser threw an error while playing the video ${src}: Code ${current.error.code} - ${(_a = current == null ? void 0 : current.error) == null ? void 0 : _a.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`,
            src
          });
        } else {
          if (onError) {
            const err = new MediaPlaybackError({
              message: `The browser threw an error while playing the video ${src}`,
              src
            });
            onError(err);
            return;
          }
          throw new MediaPlaybackError({
            message: "The browser threw an error while playing the video",
            src
          });
        }
      };
      current.addEventListener("error", errorHandler, { once: true });
      return () => {
        current.removeEventListener("error", errorHandler);
      };
    }, [onError, src]);
    const currentOnDurationCallback = reactExports.useRef(onDuration);
    currentOnDurationCallback.current = onDuration;
    useEmitVideoFrame({ ref: videoRef, onVideoFrame });
    reactExports.useEffect(() => {
      var _a;
      const { current } = videoRef;
      if (!current) {
        return;
      }
      if (current.duration) {
        (_a = currentOnDurationCallback.current) == null ? void 0 : _a.call(currentOnDurationCallback, src, current.duration);
        return;
      }
      const onLoadedMetadata = () => {
        var _a2;
        (_a2 = currentOnDurationCallback.current) == null ? void 0 : _a2.call(currentOnDurationCallback, src, current.duration);
      };
      current.addEventListener("loadedmetadata", onLoadedMetadata);
      return () => {
        current.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }, [src]);
    reactExports.useEffect(() => {
      const { current } = videoRef;
      if (!current) {
        return;
      }
      if (isIosSafari()) {
        current.preload = "metadata";
      } else {
        current.preload = "auto";
      }
    }, []);
    const actualStyle = reactExports.useMemo(() => {
      return {
        ...style2
      };
    }, [style2]);
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: Boolean(onVideoFrame),
      isClientSideRendering: false
    });
    const video = /* @__PURE__ */ jsxRuntimeExports.jsx("video", {
      ...nativeProps,
      ref: videoRef,
      muted: muted || playerMuted || userPreferredVolume <= 0,
      playsInline: true,
      src: actualSrc,
      loop: _remotionInternalNativeLoopPassed,
      style: actualStyle,
      disableRemotePlayback: true,
      crossOrigin: crossOriginValue,
      controls: false
    });
    return isStudio ? /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceOrderMarker, {
      sequenceId: timelineId,
      children: video
    }) : video;
  };
  var VideoForPreview = reactExports.forwardRef(VideoForDevelopmentRefForwardingFunction);
  var InnerOffthreadVideo = (props2) => {
    const {
      startFrom,
      endAt,
      trimBefore,
      trimAfter,
      name,
      pauseWhenBuffering,
      _remotionInternalStack,
      showInTimeline,
      ...otherProps
    } = props2;
    const environment = useRemotionEnvironment();
    const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
    if (environment.isClientSideRendering) {
      throw new Error("<OffthreadVideo> is not supported in @remotion/web-renderer. Use <Video> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
    }
    const onDuration = reactExports.useCallback(() => {
      return;
    }, []);
    if (typeof props2.src !== "string") {
      throw new TypeError(`The \`<OffthreadVideo>\` tag requires a string for \`src\`, but got ${JSON.stringify(props2.src)} instead.`);
    }
    validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
    const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
      startFrom,
      endAt,
      trimBefore,
      trimAfter
    });
    if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: trimAfterValue,
        name,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(InnerOffthreadVideo, {
          pauseWhenBuffering: shouldPauseWhenBuffering,
          ...otherProps,
          trimAfter: void 0,
          name: void 0,
          showInTimeline,
          trimBefore: void 0,
          _remotionInternalStack: void 0,
          startFrom: void 0,
          endAt: void 0
        })
      });
    }
    validateMediaProps(props2, "Video");
    if (environment.isRendering) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(OffthreadVideoForRendering, {
        pauseWhenBuffering: shouldPauseWhenBuffering,
        ...otherProps,
        trimAfter: void 0,
        name: void 0,
        showInTimeline,
        trimBefore: void 0,
        _remotionInternalStack: void 0,
        startFrom: void 0,
        endAt: void 0
      });
    }
    const {
      transparent,
      toneMapped,
      onAutoPlayError,
      onVideoFrame,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      ...propsForPreview
    } = otherProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(VideoForPreview, {
      _remotionInternalStack: _remotionInternalStack ?? null,
      onDuration,
      onlyWarnForMediaSeekingError: true,
      pauseWhenBuffering: shouldPauseWhenBuffering,
      showInTimeline: showInTimeline ?? true,
      onAutoPlayError: onAutoPlayError ?? void 0,
      onVideoFrame: onVideoFrame ?? null,
      crossOrigin,
      ...propsForPreview,
      _remotionInternalNativeLoopPassed: false
    });
  };
  var OffthreadVideo = ({
    src,
    acceptableTimeShiftInSeconds,
    allowAmplificationDuringRender,
    audioStreamIndex,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    loopVolumeCurveBehavior,
    muted,
    name,
    onAutoPlayError,
    onError,
    onVideoFrame,
    pauseWhenBuffering,
    playbackRate,
    preservePitch,
    showInTimeline,
    style: style2,
    toneFrequency,
    toneMapped,
    transparent,
    trimAfter,
    trimBefore,
    useWebAudioApi,
    volume,
    _remotionInternalNativeLoopPassed,
    endAt,
    _remotionInternalStack,
    startFrom,
    imageFormat,
    ...props2
  }) => {
    if (imageFormat) {
      throw new TypeError(`The \`<OffthreadVideo>\` tag does no longer accept \`imageFormat\`. Use the \`transparent\` prop if you want to render a transparent video.`);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(InnerOffthreadVideo, {
      acceptableTimeShiftInSeconds,
      allowAmplificationDuringRender: allowAmplificationDuringRender ?? true,
      audioStreamIndex: audioStreamIndex ?? 0,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      loopVolumeCurveBehavior: loopVolumeCurveBehavior ?? "repeat",
      muted: muted ?? false,
      name,
      onAutoPlayError: onAutoPlayError ?? null,
      onError,
      onVideoFrame,
      pauseWhenBuffering: resolveV5Default(pauseWhenBuffering),
      playbackRate: playbackRate ?? 1,
      preservePitch,
      toneFrequency: toneFrequency ?? 1,
      showInTimeline: showInTimeline ?? true,
      src,
      _remotionInternalStack,
      startFrom,
      _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed ?? false,
      endAt,
      style: style2,
      toneMapped: toneMapped ?? true,
      transparent: transparent ?? false,
      trimAfter,
      trimBefore,
      useWebAudioApi: useWebAudioApi ?? false,
      volume,
      ...props2
    });
  };
  addSequenceStackTraces(OffthreadVideo);
  var WATCH_REMOTION_STATIC_FILES = "remotion_staticFilesChanged";
  function useRemotionContexts() {
    const compositionManagerCtx = React14.useContext(CompositionManager);
    const timelineContext = React14.useContext(TimelineContext);
    const setTimelineContext = React14.useContext(SetTimelineContext);
    const sequenceContext = React14.useContext(SequenceContext);
    const canUseRemotionHooksContext = React14.useContext(CanUseRemotionHooks);
    const preloadContext = React14.useContext(PreloadContext);
    const resolveCompositionContext = React14.useContext(ResolveCompositionContext);
    const renderAssetManagerContext = React14.useContext(RenderAssetManager);
    const sequenceManagerContext = React14.useContext(SequenceManager);
    const sequenceManagerRefContext = React14.useContext(SequenceManagerRefContext);
    const visualModePropStatusesRefContext = React14.useContext(VisualModePropStatusesRefContext);
    const bufferManagerContext = React14.useContext(BufferingContextReact);
    const logLevelContext = React14.useContext(LogLevelContext);
    return reactExports.useMemo(() => ({
      compositionManagerCtx,
      timelineContext,
      setTimelineContext,
      sequenceContext,
      canUseRemotionHooksContext,
      preloadContext,
      resolveCompositionContext,
      renderAssetManagerContext,
      sequenceManagerContext,
      sequenceManagerRefContext,
      visualModePropStatusesRefContext,
      bufferManagerContext,
      logLevelContext
    }), [
      compositionManagerCtx,
      sequenceContext,
      setTimelineContext,
      timelineContext,
      canUseRemotionHooksContext,
      preloadContext,
      resolveCompositionContext,
      renderAssetManagerContext,
      sequenceManagerContext,
      sequenceManagerRefContext,
      visualModePropStatusesRefContext,
      bufferManagerContext,
      logLevelContext
    ]);
  }
  var RemotionContextProvider = (props2) => {
    const { children, contexts } = props2;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LogLevelContext.Provider, {
      value: contexts.logLevelContext,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CanUseRemotionHooks.Provider, {
        value: contexts.canUseRemotionHooksContext,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PreloadContext.Provider, {
          value: contexts.preloadContext,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompositionManager.Provider, {
            value: contexts.compositionManagerCtx,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceManagerRefContext.Provider, {
              value: contexts.sequenceManagerRefContext,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceManager.Provider, {
                value: contexts.sequenceManagerContext,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualModePropStatusesRefContext.Provider, {
                  value: contexts.visualModePropStatusesRefContext,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(RenderAssetManager.Provider, {
                    value: contexts.renderAssetManagerContext,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResolveCompositionContext.Provider, {
                      value: contexts.resolveCompositionContext,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContext.Provider, {
                        value: contexts.timelineContext,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SetTimelineContext.Provider, {
                          value: contexts.setTimelineContext,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceContext.Provider, {
                            value: contexts.sequenceContext,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(BufferingContextReact.Provider, {
                              value: contexts.bufferManagerContext,
                              children
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var compositionSelectorRef = reactExports.createRef();
  var Internals = {
    AbsoluteFillElement,
    MaxMediaCacheSizeContext,
    getMediabunnyInputResourceKey,
    globalMediaResourceManager,
    makeMediaResourceManager,
    MEDIABUNNY_DURATION_VALUE_KEY,
    makeRenderResourceManager,
    RenderResourceManagerContext,
    createRuntimeValueStore,
    useUnsafeVideoConfig,
    useFrameForVolumeProp,
    useTimelinePosition,
    useAbsoluteTimelinePosition,
    evaluateVolume,
    getAbsoluteSrc,
    getAnimatedImageDurationInSeconds,
    getAssetDisplayName,
    Timeline: exports_timeline_position_state,
    validateMediaTrimProps,
    validateMediaProps,
    resolveTrimProps,
    VideoForPreview,
    CompositionManager,
    CompositionSetters,
    VisualModePropStatusesContext,
    VisualModePropStatusesRefContext,
    VisualModeDragOverridesContext,
    VisualModeSettersContext,
    SequenceManager,
    SequenceManagerProvider,
    SequenceManagerRefContext,
    SequenceRegistrationContext,
    CommitOrderInternals,
    SequenceStackTracesUpdateContext,
    baseSchema,
    sequenceSchema: sequenceSchema$1,
    SequenceWithoutSchema,
    sequenceStyleSchema: sequenceStyleSchema$1,
    sequenceVisualStyleSchema,
    sequencePremountSchema: sequencePremountSchema$1,
    sequenceCropSchema: sequenceCropSchema$1,
    textSchema,
    transformSchema: transformSchema$1,
    premountSchema: premountSchema$1,
    flattenActiveSchema,
    getFlatSchemaWithAllKeys,
    RemotionRootContexts,
    CompositionManagerProvider,
    useVideo,
    getRoot,
    useMediaVolumeState,
    usePlayerMutedState,
    useMediaInTimeline,
    useLazyComponent,
    truthy,
    SequenceContext,
    PremountContext,
    usePremounting,
    useRemotionContexts,
    RemotionContextProvider,
    CSSUtils: exports_default_css,
    setupEnvVariables,
    MediaVolumeContext,
    SetMediaVolumeContext,
    getRemotionEnvironment,
    SharedAudioContext,
    SharedAudioContextProvider,
    SharedAudioTagsContext,
    SharedAudioTagsContextProvider,
    invalidCompositionErrorMessage,
    invalidFolderNameErrorMessage,
    calculateMediaDuration,
    isCompositionIdValid,
    isFolderNameValid,
    getPreviewDomElement,
    compositionsRef,
    portalNode,
    setPortalNodeCurrentScale,
    waitForRoot,
    SetTimelineContext,
    CanUseRemotionHooksProvider,
    CanUseRemotionHooks,
    DisableInteractivityProvider,
    PrefetchProvider,
    DurationsContextProvider,
    IsPlayerContextProvider,
    useIsPlayer,
    EditorPropsProvider,
    EditorPropsContext,
    usePreload,
    resolveVideoConfig,
    resolveVideoConfigOrCatch,
    resolveVideoConfigWithMetadataOrCatch,
    ResolveCompositionContext,
    useResolvedVideoConfig,
    resolveCompositionsRef,
    REMOTION_STUDIO_CONTAINER_ELEMENT,
    RenderAssetManager,
    persistCurrentFrame,
    usePlaybackRate,
    useTimelineContext,
    useTimelineSetFrame,
    isIosSafari,
    WATCH_REMOTION_STATIC_FILES,
    addSequenceStackTraces,
    useMediaStartsAt,
    BufferingProvider,
    BufferingContextReact,
    getComponentsToAddStacksTo,
    getSequenceComponent,
    getSingleChildComponent,
    getStackForControls,
    REMOTION_INTERNAL_STACK_PROP,
    setComponentIdentityResolver,
    CurrentScaleContext,
    PixelDensityContext,
    PreviewSizeContext,
    calculateScale,
    validateRenderAsset,
    Log,
    LogLevelContext,
    useLogLevel,
    playbackLogging,
    timeValueRef,
    compositionSelectorRef,
    RemotionEnvironmentContext,
    warnAboutTooHighVolume,
    AudioForPreview,
    OBJECTFIT_CONTAIN_CLASS_NAME,
    InnerOffthreadVideo,
    useBasicMediaInTimeline,
    getInputPropsOverride,
    setInputPropsOverride,
    useVideoEnabled,
    useAudioEnabled,
    useBuffering,
    TimelinePosition: exports_timeline_position_state,
    DelayRenderContextType,
    TimelineContext,
    usePlaying,
    PlaybackRateContext,
    AbsoluteTimeContext,
    RenderAssetManagerProvider,
    getEffectiveVisualModeValue,
    CompositionRenderErrorContext,
    useEffectChainState,
    createEffectChainState,
    cleanupEffectChainState,
    runEffectChain,
    useMemoizedEffects,
    useMemoizedEffectDefinitions,
    createEffect,
    createWebGLContextError,
    createWebGL2ContextError,
    computeEffectiveSchemaValuesDotNotation,
    interpolateKeyframedStatus,
    makeStaticDragOverride,
    makeKeyframedDragOverride,
    resolveDragOverrideValue,
    getStaticDragOverrideValue,
    OverrideIdsToNodePathsGettersContext,
    OverrideIdsToNodePathsSettersContext,
    findPropsToDelete,
    makeSequencePropsSubscriptionKey,
    getPropStatusesCtx,
    getEffectPropStatusesCtx,
    hiddenField,
    durationInFramesField,
    freezeField,
    fromField,
    resolveSequenceCrop,
    useCropStyle
  };
  Object.assign(Internals, { useSyncExternalStore: useSyncExternalStore2 });
  var flattenChildren = (children) => {
    const childrenArray = React14.Children.toArray(children);
    return childrenArray.reduce((flatChildren, child) => {
      if (child.type === React14.Fragment) {
        return flatChildren.concat(flattenChildren(child.props.children));
      }
      flatChildren.push(child);
      return flatChildren;
    }, []);
  };
  var seriesSequenceSchema = {
    durationInFrames: Interactive.baseSchema.durationInFrames,
    name: Interactive.sequenceSchema.name,
    hidden: Interactive.sequenceSchema.hidden,
    showInTimeline: Interactive.sequenceSchema.showInTimeline,
    freeze: Interactive.baseSchema.freeze,
    trimBefore: Interactive.sequenceSchema.trimBefore,
    layout: Interactive.sequenceSchema.layout
  };
  var SeriesSequenceInner = reactExports.forwardRef(({ offset = 0, className: className2 = "", _remotionInternalRender = null, ...props2 }, ref) => {
    useRequireToBeInsideSeries();
    if (_remotionInternalRender) {
      return _remotionInternalRender({ ...props2, offset, className: className2 || void 0 }, ref);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(IsNotInsideSeriesProvider, {
      children: props2.children
    });
  });
  var SeriesSequence = Interactive.withSchema({
    Component: SeriesSequenceInner,
    componentName: "<Series.Sequence>",
    componentIdentity: "dev.remotion.remotion.Series.Sequence",
    schema: seriesSequenceSchema,
    supportsEffects: false
  });
  var SequenceWithoutSchemaWithRef = SequenceWithoutSchema;
  var validateSeriesSequenceProps = ({
    durationInFrames,
    offset: offsetProp,
    index,
    childrenLength
  }) => {
    const debugInfo = `index = ${index}, duration = ${durationInFrames}`;
    if (index !== childrenLength - 1 || durationInFrames !== Infinity) {
      validateDurationInFrames$2(durationInFrames, {
        component: `of a <Series.Sequence /> component`,
        allowFloats: true
      });
    }
    const offset = offsetProp ?? 0;
    if (Number.isNaN(offset)) {
      throw new TypeError(`The "offset" property of a <Series.Sequence /> must not be NaN, but got NaN (${debugInfo}).`);
    }
    if (!Number.isFinite(offset)) {
      throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
    }
    if (offset % 1 !== 0) {
      throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
    }
    return offset;
  };
  var SeriesInner = (props2) => {
    const childrenValue = reactExports.useMemo(() => {
      const flattenedChildren = flattenChildren(props2.children);
      const renderChildren = (i, startFrame) => {
        if (i === flattenedChildren.length) {
          return null;
        }
        const child = flattenedChildren[i];
        const castedChild = child;
        if (typeof castedChild === "string") {
          if (castedChild.trim() === "") {
            return renderChildren(i + 1, startFrame);
          }
          throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but you passed a string "${castedChild}"`);
        }
        if (castedChild.type !== SeriesSequence) {
          throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but got ${castedChild} instead`);
        }
        const castedElement = castedChild;
        validateSeriesSequenceProps({
          durationInFrames: castedElement.props.durationInFrames,
          offset: castedElement.props.offset,
          index: i,
          childrenLength: flattenedChildren.length
        });
        return React14.cloneElement(castedElement, {
          _remotionInternalRender: (resolvedProps, ref) => {
            const durationInFramesProp = resolvedProps.durationInFrames;
            const {
              durationInFrames: _durationInFrames,
              children: sequenceChildren,
              offset: offsetProp,
              controls,
              from: _from,
              name,
              ...passedProps
            } = resolvedProps;
            const offset = validateSeriesSequenceProps({
              durationInFrames: durationInFramesProp,
              offset: offsetProp,
              index: i,
              childrenLength: flattenedChildren.length
            });
            const currentStartFrame = startFrame + offset;
            const nextStartFrame = startFrame + durationInFramesProp + offset;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SequenceWithoutSchemaWithRef, {
                  ref,
                  name: name || "<Series.Sequence>",
                  _remotionInternalDocumentationLink: name ? void 0 : "https://www.remotion.dev/docs/series",
                  controls: controls ?? void 0,
                  from: currentStartFrame,
                  durationInFrames: durationInFramesProp,
                  ...passedProps,
                  _remotionInternalSingleChildComponent: getSingleChildComponent(sequenceChildren),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(IsNotInsideSeriesProvider, {
                    children: sequenceChildren
                  })
                }),
                renderChildren(i + 1, nextStartFrame)
              ]
            });
          }
        });
      };
      return renderChildren(0, 0);
    }, [props2.children]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
      layout: "none",
      name: "<Series>",
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/series",
      ...props2,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(IsInsideSeriesContainer, {
        children: childrenValue
      })
    });
  };
  var Series = Object.assign(withInteractivitySchema({
    Component: SeriesInner,
    componentName: "<Series>",
    componentIdentity: "dev.remotion.remotion.Series",
    schema: sequenceSchemaDefaultLayoutNone,
    supportsEffects: false
  }), {
    Sequence: SeriesSequence
  });
  addSequenceStackTraces(Series);
  var Still = (props2) => {
    const newProps = {
      ...props2,
      durationInFrames: 1,
      fps: 1
    };
    return React14.createElement(Composition, newProps);
  };
  addSequenceStackTraces(Still);
  var roundTo6Commas = (num) => {
    return Math.round(num * 1e5) / 1e5;
  };
  var seekToTime = ({
    element,
    desiredTime,
    logLevel,
    mountTime
  }) => {
    if (isApproximatelyTheSame(element.currentTime, desiredTime)) {
      return {
        wait: Promise.resolve(desiredTime),
        cancel: () => {
        }
      };
    }
    seek({
      logLevel,
      mediaRef: element,
      time: desiredTime,
      why: "Seeking during rendering",
      mountTime
    });
    let cancel;
    let cancelSeeked = null;
    const prom = new Promise((resolve) => {
      cancel = element.requestVideoFrameCallback((now, metadata) => {
        const displayIn = metadata.expectedDisplayTime - now;
        if (displayIn <= 0) {
          resolve(metadata.mediaTime);
          return;
        }
        setTimeout(() => {
          resolve(metadata.mediaTime);
        }, displayIn + 150);
      });
    });
    const waitForSeekedEvent = new Promise((resolve) => {
      const onDone = () => {
        resolve();
      };
      element.addEventListener("seeked", onDone, {
        once: true
      });
      cancelSeeked = () => {
        element.removeEventListener("seeked", onDone);
      };
    });
    return {
      wait: Promise.all([prom, waitForSeekedEvent]).then(([time]) => time),
      cancel: () => {
        cancelSeeked == null ? void 0 : cancelSeeked();
        element.cancelVideoFrameCallback(cancel);
      }
    };
  };
  var seekToTimeMultipleUntilRight = ({
    element,
    desiredTime,
    fps,
    logLevel,
    mountTime
  }) => {
    const threshold = 1 / fps / 2;
    let currentCancel = () => {
      return;
    };
    if (Number.isFinite(element.duration) && element.currentTime >= element.duration && desiredTime >= element.duration) {
      return {
        prom: Promise.resolve(),
        cancel: () => {
        }
      };
    }
    const prom = new Promise((resolve, reject) => {
      const firstSeek = seekToTime({
        element,
        desiredTime: desiredTime + threshold,
        logLevel,
        mountTime
      });
      firstSeek.wait.then((seekedTo) => {
        const difference = Math.abs(desiredTime - seekedTo);
        if (difference <= threshold) {
          return resolve();
        }
        const sign = desiredTime > seekedTo ? 1 : -1;
        const newSeek = seekToTime({
          element,
          desiredTime: seekedTo + threshold * sign,
          logLevel,
          mountTime
        });
        currentCancel = newSeek.cancel;
        newSeek.wait.then((newTime) => {
          const newDifference = Math.abs(desiredTime - newTime);
          if (roundTo6Commas(newDifference) <= roundTo6Commas(threshold)) {
            return resolve();
          }
          const thirdSeek = seekToTime({
            element,
            desiredTime: desiredTime + threshold,
            logLevel,
            mountTime
          });
          currentCancel = thirdSeek.cancel;
          return thirdSeek.wait.then(() => {
            resolve();
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      });
      currentCancel = firstSeek.cancel;
    });
    return {
      prom,
      cancel: () => {
        currentCancel();
      }
    };
  };
  var VideoForRenderingForwardFunction = ({
    onError,
    volume: volumeProp,
    allowAmplificationDuringRender,
    playbackRate,
    onDuration,
    toneFrequency,
    name,
    acceptableTimeShiftInSeconds,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    loopVolumeCurveBehavior,
    audioStreamIndex,
    onVideoFrame,
    preservePitch: _preservePitch,
    ...props2
  }, ref) => {
    const absoluteFrame = useTimelinePosition();
    const frame = useCurrentFrame();
    const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const videoConfig = useUnsafeVideoConfig();
    const videoRef = reactExports.useRef(null);
    const sequenceContext = reactExports.useContext(SequenceContext);
    const mediaStartsAt = useMediaStartsAt();
    const environment = useRemotionEnvironment();
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const { registerRenderAsset, unregisterRenderAsset } = reactExports.useContext(RenderAssetManager);
    const id2 = reactExports.useMemo(() => `video-${random(props2.src ?? "")}-${sequenceContext == null ? void 0 : sequenceContext.cumulatedFrom}-${sequenceContext == null ? void 0 : sequenceContext.relativeFrom}-${sequenceContext == null ? void 0 : sequenceContext.durationInFrames}`, [
      props2.src,
      sequenceContext == null ? void 0 : sequenceContext.cumulatedFrom,
      sequenceContext == null ? void 0 : sequenceContext.relativeFrom,
      sequenceContext == null ? void 0 : sequenceContext.durationInFrames
    ]);
    if (!videoConfig) {
      throw new Error("No video config found");
    }
    const volume = evaluateVolume({
      volume: volumeProp,
      frame: volumePropsFrame,
      mediaVolume: 1
    });
    warnAboutTooHighVolume(volume);
    reactExports.useEffect(() => {
      if (!props2.src) {
        throw new Error("No src passed");
      }
      if (props2.muted) {
        return;
      }
      if (volume <= 0) {
        return;
      }
      if (!window.remotion_audioEnabled) {
        return;
      }
      registerRenderAsset({
        type: "video",
        src: getAbsoluteSrc(props2.src),
        id: id2,
        frame: absoluteFrame,
        volume,
        mediaFrame: frame,
        playbackRate: playbackRate ?? 1,
        toneFrequency: toneFrequency ?? 1,
        audioStartFrame: Math.max(0, -((sequenceContext == null ? void 0 : sequenceContext.cumulatedNegativeFrom) ?? 0)),
        audioStreamIndex: audioStreamIndex ?? 0
      });
      return () => unregisterRenderAsset(id2);
    }, [
      props2.muted,
      props2.src,
      registerRenderAsset,
      id2,
      unregisterRenderAsset,
      volume,
      frame,
      absoluteFrame,
      playbackRate,
      toneFrequency,
      sequenceContext == null ? void 0 : sequenceContext.cumulatedNegativeFrom,
      audioStreamIndex
    ]);
    reactExports.useImperativeHandle(ref, () => {
      return videoRef.current;
    }, []);
    useEmitVideoFrame({ ref: videoRef, onVideoFrame });
    reactExports.useEffect(() => {
      var _a, _b;
      if (!window.remotion_videoEnabled) {
        return;
      }
      const { current } = videoRef;
      if (!current) {
        return;
      }
      const currentTime = getMediaTime({
        frame,
        playbackRate: playbackRate || 1,
        startFrom: -mediaStartsAt,
        fps: videoConfig.fps
      });
      const handle = delayRender2(`Rendering <Html5Video /> with src="${props2.src}" at time ${currentTime}`, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      if (((_b = (_a = window.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV) === "test") {
        continueRender2(handle);
        return;
      }
      if (isApproximatelyTheSame(current.currentTime, currentTime)) {
        if (current.readyState >= 2) {
          continueRender2(handle);
          return;
        }
        const loadedDataHandler = () => {
          continueRender2(handle);
        };
        current.addEventListener("loadeddata", loadedDataHandler, { once: true });
        return () => {
          current.removeEventListener("loadeddata", loadedDataHandler);
        };
      }
      const endedHandler = () => {
        continueRender2(handle);
      };
      const seek2 = seekToTimeMultipleUntilRight({
        element: current,
        desiredTime: currentTime,
        fps: videoConfig.fps,
        logLevel,
        mountTime
      });
      seek2.prom.then(() => {
        continueRender2(handle);
      });
      current.addEventListener("ended", endedHandler, { once: true });
      const errorHandler = () => {
        var _a2;
        if (current == null ? void 0 : current.error) {
          console.error("Error occurred in video", current == null ? void 0 : current.error);
          if (onError) {
            return;
          }
          throw new MediaPlaybackError({
            message: `The browser threw an error while playing the video ${props2.src}: Code ${current.error.code} - ${(_a2 = current == null ? void 0 : current.error) == null ? void 0 : _a2.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`,
            src: props2.src
          });
        } else {
          throw new MediaPlaybackError({
            message: "The browser threw an error",
            src: props2.src
          });
        }
      };
      current.addEventListener("error", errorHandler, { once: true });
      return () => {
        seek2.cancel();
        current.removeEventListener("ended", endedHandler);
        current.removeEventListener("error", errorHandler);
        continueRender2(handle);
      };
    }, [
      volumePropsFrame,
      props2.src,
      playbackRate,
      videoConfig.fps,
      frame,
      mediaStartsAt,
      onError,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      logLevel,
      mountTime,
      continueRender2,
      delayRender2
    ]);
    const { src } = props2;
    if (environment.isRendering) {
      reactExports.useLayoutEffect(() => {
        var _a, _b;
        if (((_b = (_a = window.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV) === "test") {
          return;
        }
        const newHandle = delayRender2("Loading <Html5Video> duration with src=" + src, {
          retries: delayRenderRetries ?? void 0,
          timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
        });
        const { current } = videoRef;
        const didLoad = () => {
          if (current == null ? void 0 : current.duration) {
            onDuration(src, current.duration);
          }
          continueRender2(newHandle);
        };
        if (current == null ? void 0 : current.duration) {
          onDuration(src, current.duration);
          continueRender2(newHandle);
        } else {
          current == null ? void 0 : current.addEventListener("loadedmetadata", didLoad, { once: true });
        }
        return () => {
          current == null ? void 0 : current.removeEventListener("loadedmetadata", didLoad);
          continueRender2(newHandle);
        };
      }, [
        src,
        onDuration,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        continueRender2,
        delayRender2
      ]);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("video", {
      ref: videoRef,
      disableRemotePlayback: true,
      ...props2
    });
  };
  var VideoForRendering = reactExports.forwardRef(VideoForRenderingForwardFunction);
  var VideoForwardingFunction = (props2, ref) => {
    const {
      startFrom,
      endAt,
      trimBefore,
      trimAfter,
      name,
      pauseWhenBuffering,
      _remotionInternalStack,
      _remotionInternalNativeLoopPassed,
      showInTimeline,
      onAutoPlayError,
      onVideoFrame,
      ...otherProps
    } = props2;
    const { loop, ...propsOtherThanLoop } = props2;
    const { fps } = useVideoConfig();
    const environment = useRemotionEnvironment();
    const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
    if (environment.isClientSideRendering) {
      throw new Error("<Html5Video> is not supported in @remotion/web-renderer. Use <Video> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
    }
    const { durations, setDurations } = reactExports.useContext(DurationsContext);
    if (typeof ref === "string") {
      throw new Error("string refs are not supported");
    }
    if (typeof props2.src !== "string") {
      throw new TypeError(`The \`<Html5Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(props2.src)} instead.`);
    }
    const preloadedSrc = usePreload(props2.src);
    const onDuration = reactExports.useCallback((src, durationInSeconds) => {
      setDurations({ type: "got-duration", durationInSeconds, src });
    }, [setDurations]);
    const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props2.src)];
    validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
    const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
      startFrom,
      endAt,
      trimBefore,
      trimAfter
    });
    if (loop && durationFetched !== void 0) {
      if (!Number.isFinite(durationFetched)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Html5Video, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalStack,
          _remotionInternalNativeLoopPassed: true
        });
      }
      const mediaDuration = durationFetched * fps;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Loop, {
        durationInFrames: calculateMediaDuration({
          trimAfter: trimAfterValue,
          mediaDurationInFrames: mediaDuration,
          playbackRate: props2.playbackRate ?? 1,
          trimBefore: trimBeforeValue
        }),
        layout: "none",
        name,
        showInTimeline: false,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Html5Video, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalStack,
          _remotionInternalNativeLoopPassed: true
        })
      });
    }
    if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: trimAfterValue === void 0 ? void 0 : trimAfterValue / (props2.playbackRate ?? 1),
        name,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Html5Video, {
          pauseWhenBuffering: shouldPauseWhenBuffering,
          onVideoFrame,
          ...otherProps,
          ref,
          _remotionInternalStack
        })
      });
    }
    validateMediaProps({
      playbackRate: props2.playbackRate,
      preservePitch: props2.preservePitch,
      volume: props2.volume
    }, "Html5Video");
    if (environment.isRendering) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(VideoForRendering, {
        onDuration,
        onVideoFrame: onVideoFrame ?? null,
        ...otherProps,
        ref
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(VideoForPreview, {
      onlyWarnForMediaSeekingError: false,
      ...otherProps,
      ref,
      onVideoFrame: onVideoFrame ?? null,
      pauseWhenBuffering: shouldPauseWhenBuffering,
      onDuration,
      _remotionInternalStack: _remotionInternalStack ?? null,
      _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed ?? false,
      showInTimeline: showInTimeline ?? true,
      onAutoPlayError: onAutoPlayError ?? void 0
    });
  };
  var Html5Video = reactExports.forwardRef(VideoForwardingFunction);
  addSequenceStackTraces(Html5Video);
  checkMultipleRemotionVersions();
  var proxyObj = {};
  var Config = new Proxy(proxyObj, {
    get(_, prop) {
      if (prop === "Bundling" || prop === "Rendering" || prop === "Log" || prop === "Puppeteer" || prop === "Output") {
        return Config;
      }
      return () => {
        console.warn("⚠️  The CLI configuration has been extracted from Remotion Core.");
        console.warn("Update the import from the config file:");
        console.warn();
        console.warn("- Delete:");
        console.warn('import {Config} from "remotion";');
        console.warn("+ Replace:");
        console.warn('import {Config} from "@remotion/cli/config";');
        console.warn();
        console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration.");
        process.exit(1);
      };
    }
  });
  Sequence.displayName = "Sequence";
  addSequenceStackTraces(Sequence);
  setSequenceComponent(Sequence);
  addSequenceStackTraces(Composition);
  addSequenceStackTraces(Folder);
  function validateFps$1(fps, location, isGif) {
    if (typeof fps !== "number") {
      throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
    }
    if (!Number.isFinite(fps)) {
      throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
    }
    if (isNaN(fps)) {
      throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
    }
    if (fps <= 0) {
      throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
    }
    if (isGif && fps > 50) {
      throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
    }
  }
  var transformSchema = {
    "style.transformOrigin": {
      type: "transform-origin",
      step: 1,
      default: "50% 50%",
      description: "Transform origin"
    },
    "style.translate": {
      type: "translate",
      step: 1,
      default: "0px 0px",
      description: "Offset"
    },
    "style.scale": {
      type: "scale",
      max: 100,
      step: 0.01,
      default: 1,
      description: "Scale",
      defaultKeyframeOutput: "perceptual-scale"
    },
    "style.rotate": {
      type: "rotation-css",
      step: 1,
      default: "0deg",
      description: "Rotation"
    },
    "style.opacity": {
      type: "number",
      min: 0,
      max: 1,
      step: 0.01,
      default: 1,
      description: "Opacity",
      hiddenFromList: false
    }
  };
  var borderSchema = {
    "style.borderWidth": {
      type: "number",
      default: void 0,
      min: 0,
      step: 1,
      description: "Border width",
      hiddenFromList: false
    },
    "style.borderStyle": {
      type: "enum",
      default: "none",
      description: "Border style",
      variants: {
        none: {},
        hidden: {},
        solid: {},
        dashed: {},
        dotted: {},
        double: {},
        groove: {},
        ridge: {},
        inset: {},
        outset: {}
      }
    },
    "style.borderColor": {
      type: "color",
      default: void 0,
      description: "Border color"
    }
  };
  var borderRadiusSchema = {
    "style.borderRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Border radius",
      hiddenFromList: false,
      keyframable: true
    },
    "style.borderTopLeftRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Top left radius",
      hiddenFromList: false
    },
    "style.borderTopRightRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Top right radius",
      hiddenFromList: false
    },
    "style.borderBottomRightRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Bottom right radius",
      hiddenFromList: false
    },
    "style.borderBottomLeftRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Bottom left radius",
      hiddenFromList: false
    }
  };
  var backgroundSchema = {
    "style.backgroundColor": {
      type: "color",
      default: "transparent",
      description: "Color"
    }
  };
  var premountSchema = {
    premountFor: {
      type: "number",
      default: 0,
      description: "Premount For",
      min: 0,
      step: 1,
      hiddenFromList: false,
      keyframable: false
    },
    postmountFor: {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      hiddenFromList: true,
      keyframable: false
    }
  };
  var sequencePremountSchema = {
    ...premountSchema
  };
  var cropSchema = {
    cropLeft: {
      type: "number",
      default: 0,
      description: "Crop left",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropRight: {
      type: "number",
      default: 0,
      description: "Crop right",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropTop: {
      type: "number",
      default: 0,
      description: "Crop top",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropBottom: {
      type: "number",
      default: 0,
      description: "Crop bottom",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    }
  };
  var sequenceCropSchema = cropSchema;
  var sequenceStyleSchema = {
    ...sequenceCropSchema,
    ...transformSchema,
    ...backgroundSchema,
    ...borderSchema,
    ...borderRadiusSchema,
    ...sequencePremountSchema
  };
  var sequenceSchema = {
    layout: {
      type: "enum",
      default: "absolute-fill",
      description: "Layout",
      variants: {
        "absolute-fill": sequenceStyleSchema,
        none: {}
      }
    }
  };
  ({
    layout: {
      ...sequenceSchema.layout
    }
  });
  var validateDefaultAndInputProps$1 = (defaultProps, name, compositionId) => {
    if (!defaultProps) {
      return;
    }
    if (typeof defaultProps !== "object") {
      throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
    }
    if (Array.isArray(defaultProps)) {
      throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ""}`);
    }
  };
  function validateDimension$1(amount, nameOfProp, location) {
    if (typeof amount !== "number") {
      throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
    }
    if (isNaN(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
    }
    if (!Number.isFinite(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
    }
    if (amount % 1 !== 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
    }
    if (amount <= 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
    }
  }
  function validateDurationInFrames$1(durationInFrames, options) {
    const { allowFloats, component } = options;
    if (typeof durationInFrames === "undefined") {
      throw new Error(`The "durationInFrames" prop ${component} is missing.`);
    }
    if (typeof durationInFrames !== "number") {
      throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
    }
    if (!allowFloats && durationInFrames % 1 !== 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
    }
    if (!Number.isFinite(durationInFrames)) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
    }
  }
  var NoReactInternals = {
    validateFps: validateFps$1,
    validateDimension: validateDimension$1,
    validateDurationInFrames: validateDurationInFrames$1,
    validateDefaultAndInputProps: validateDefaultAndInputProps$1
  };
  if (typeof reactExports.createContext !== "function") {
    const err = [
      'Remotion requires React.createContext, but it is "undefined".',
      'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
      "",
      "Before:",
      '  import {Player} from "@remotion/player";',
      "",
      "After:",
      '  "use client";',
      '  import {Player} from "@remotion/player";'
    ];
    throw new Error(err.join(`
`));
  }
  var ICON_SIZE = 25;
  var fullscreenIconSize = 16;
  var PlayIcon = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
      width: ICON_SIZE,
      height: ICON_SIZE,
      viewBox: "0 0 25 25",
      fill: "none",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
        d: "M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",
        fill: "white",
        stroke: "white",
        strokeWidth: "6.25",
        strokeLinejoin: "round"
      })
    });
  };
  var PauseIcon = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", {
      viewBox: "0 0 100 100",
      width: ICON_SIZE,
      height: ICON_SIZE,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", {
          x: "25",
          y: "20",
          width: "20",
          height: "60",
          fill: "#fff",
          ry: "5",
          rx: "5"
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", {
          x: "55",
          y: "20",
          width: "20",
          height: "60",
          fill: "#fff",
          ry: "5",
          rx: "5"
        })
      ]
    });
  };
  var FullscreenIcon = ({
    isFullscreen
  }) => {
    const strokeWidth = 6;
    const viewSize = 32;
    const out = isFullscreen ? 0 : strokeWidth / 2;
    const middleInset = isFullscreen ? strokeWidth * 1.6 : strokeWidth / 2;
    const inset = isFullscreen ? strokeWidth * 1.6 : strokeWidth * 2;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", {
      viewBox: `0 0 ${viewSize} ${viewSize}`,
      height: fullscreenIconSize,
      width: fullscreenIconSize,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          d: `
				M ${out} ${inset}
				L ${middleInset} ${middleInset}
				L ${inset} ${out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          d: `
				M ${viewSize - out} ${inset}
				L ${viewSize - middleInset} ${middleInset}
				L ${viewSize - inset} ${out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          d: `
				M ${out} ${viewSize - inset}
				L ${middleInset} ${viewSize - middleInset}
				L ${inset} ${viewSize - out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          d: `
				M ${viewSize - out} ${viewSize - inset}
				L ${viewSize - middleInset} ${viewSize - middleInset}
				L ${viewSize - inset} ${viewSize - out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        })
      ]
    });
  };
  var VolumeOffIcon = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
      width: ICON_SIZE,
      height: ICON_SIZE,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
        d: "M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",
        fill: "#fff"
      })
    });
  };
  var VolumeOnIcon = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
      width: ICON_SIZE,
      height: ICON_SIZE,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
        d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",
        fill: "#fff"
      })
    });
  };
  var className = "__remotion_buffering_indicator";
  var remotionBufferingAnimation = "__remotion_buffering_animation";
  var playerStyle = {
    width: ICON_SIZE,
    height: ICON_SIZE,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
  };
  var studioStyle = {
    width: 14,
    height: 14,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
  };
  var BufferingIndicator = ({ type, color = "white" }) => {
    const style2 = type === "player" ? playerStyle : studioStyle;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", {
          type: "text/css",
          children: `
				@keyframes ${remotionBufferingAnimation} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${className} {
            animation: ${remotionBufferingAnimation} 1s linear infinite;
        }        
			`
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          style: style2,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
            viewBox: type === "player" ? "0 0 22 22" : "0 0 18 18",
            style: style2,
            className,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
              d: type === "player" ? "M 11 4 A 7 7 0 0 1 15.1145 16.66312" : "M 9 2 A 7 7 0 0 1 13.1145 14.66312",
              stroke: color,
              strokeLinecap: "round",
              fill: "none",
              strokeWidth: 3
            })
          })
        })
      ]
    });
  };
  var calculatePlayerSize = ({
    currentSize,
    width,
    height,
    compositionWidth,
    compositionHeight
  }) => {
    if (width !== void 0 && height === void 0) {
      return {
        aspectRatio: [compositionWidth, compositionHeight].join("/")
      };
    }
    if (height !== void 0 && width === void 0) {
      return {
        aspectRatio: [compositionWidth, compositionHeight].join("/")
      };
    }
    if (!currentSize) {
      return {
        width: compositionWidth,
        height: compositionHeight
      };
    }
    return {
      width: compositionWidth,
      height: compositionHeight
    };
  };
  var calculateCanvasTransformation = ({
    previewSize,
    compositionWidth,
    compositionHeight,
    canvasSize
  }) => {
    const scale = Internals.calculateScale({
      canvasSize,
      compositionHeight,
      compositionWidth,
      previewSize
    });
    const correction = 0 - (1 - scale) / 2;
    const xCorrection = correction * compositionWidth;
    const yCorrection = correction * compositionHeight;
    const width = compositionWidth * scale;
    const height = compositionHeight * scale;
    const centerX = canvasSize.width / 2 - width / 2;
    const centerY = canvasSize.height / 2 - height / 2;
    return {
      centerX,
      centerY,
      xCorrection,
      yCorrection,
      scale
    };
  };
  var calculateOuterStyle = ({
    config,
    style: style2,
    canvasSize,
    overflowVisible,
    layout
  }) => {
    if (!config) {
      return {};
    }
    return {
      position: "relative",
      overflow: overflowVisible ? "visible" : "hidden",
      ...calculatePlayerSize({
        compositionHeight: config.height,
        compositionWidth: config.width,
        currentSize: canvasSize,
        height: style2 == null ? void 0 : style2.height,
        width: style2 == null ? void 0 : style2.width
      }),
      opacity: layout ? 1 : 0,
      ...style2
    };
  };
  var calculateContainerStyle = ({
    config,
    layout,
    scale,
    overflowVisible
  }) => {
    if (!config) {
      return {};
    }
    if (!layout) {
      return {
        position: "absolute",
        width: config.width,
        height: config.height,
        display: "flex",
        transform: `scale(${scale})`,
        overflow: overflowVisible ? "visible" : "hidden"
      };
    }
    return {
      position: "absolute",
      width: config.width,
      height: config.height,
      display: "flex",
      transform: `scale(${scale})`,
      marginLeft: layout.xCorrection,
      marginTop: layout.yCorrection,
      overflow: overflowVisible ? "visible" : "hidden"
    };
  };
  var calculateOuter = ({
    layout,
    scale,
    config,
    overflowVisible
  }) => {
    if (!config) {
      return {};
    }
    if (!layout) {
      return {
        width: config.width * scale,
        height: config.height * scale,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        overflow: overflowVisible ? "visible" : "hidden"
      };
    }
    const { centerX, centerY } = layout;
    return {
      width: config.width * scale,
      height: config.height * scale,
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: centerX,
      top: centerY,
      overflow: overflowVisible ? "visible" : "hidden"
    };
  };
  var PlayerEventEmitterContext = React14.createContext(void 0);
  var ThumbnailEmitterContext = React14.createContext(void 0);
  class PlayerEmitter {
    constructor() {
      __publicField(this, "listeners", {
        ended: [],
        error: [],
        pause: [],
        play: [],
        ratechange: [],
        scalechange: [],
        seeked: [],
        timeupdate: [],
        frameupdate: [],
        fullscreenchange: [],
        volumechange: [],
        mutechange: [],
        waiting: [],
        resume: []
      });
      __publicField(this, "dispatchSeek", (frame) => {
        this.dispatchEvent("seeked", {
          frame
        });
      });
      __publicField(this, "dispatchVolumeChange", (volume) => {
        this.dispatchEvent("volumechange", {
          volume
        });
      });
      __publicField(this, "dispatchPause", () => {
        this.dispatchEvent("pause", void 0);
      });
      __publicField(this, "dispatchPlay", () => {
        this.dispatchEvent("play", void 0);
      });
      __publicField(this, "dispatchEnded", () => {
        this.dispatchEvent("ended", void 0);
      });
      __publicField(this, "dispatchRateChange", (playbackRate) => {
        this.dispatchEvent("ratechange", {
          playbackRate
        });
      });
      __publicField(this, "dispatchScaleChange", (scale) => {
        this.dispatchEvent("scalechange", {
          scale
        });
      });
      __publicField(this, "dispatchError", (error2) => {
        this.dispatchEvent("error", {
          error: error2
        });
      });
      __publicField(this, "dispatchTimeUpdate", (event) => {
        this.dispatchEvent("timeupdate", event);
      });
      __publicField(this, "dispatchFrameUpdate", (event) => {
        this.dispatchEvent("frameupdate", event);
      });
      __publicField(this, "dispatchFullscreenChange", (event) => {
        this.dispatchEvent("fullscreenchange", event);
      });
      __publicField(this, "dispatchMuteChange", (event) => {
        this.dispatchEvent("mutechange", event);
      });
      __publicField(this, "dispatchWaiting", (event) => {
        this.dispatchEvent("waiting", event);
      });
      __publicField(this, "dispatchResume", (event) => {
        this.dispatchEvent("resume", event);
      });
    }
    addEventListener(name, callback) {
      this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
      this.listeners[name] = this.listeners[name].filter((l2) => l2 !== callback);
    }
    dispatchEvent(dispatchName, context) {
      this.listeners[dispatchName].forEach((callback) => {
        callback({ detail: context });
      });
    }
  }
  class ThumbnailEmitter {
    constructor() {
      __publicField(this, "listeners", {
        error: [],
        waiting: [],
        resume: []
      });
      __publicField(this, "dispatchError", (error2) => {
        this.dispatchEvent("error", {
          error: error2
        });
      });
      __publicField(this, "dispatchWaiting", (event) => {
        this.dispatchEvent("waiting", event);
      });
      __publicField(this, "dispatchResume", (event) => {
        this.dispatchEvent("resume", event);
      });
    }
    addEventListener(name, callback) {
      this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
      this.listeners[name] = this.listeners[name].filter((l2) => l2 !== callback);
    }
    dispatchEvent(dispatchName, context) {
      this.listeners[dispatchName].forEach((callback) => {
        callback({ detail: context });
      });
    }
  }
  var useBufferStateEmitter = (emitter) => {
    const { subscribeBuffering } = reactExports.useContext(Internals.SetTimelineContext);
    reactExports.useLayoutEffect(() => {
      return subscribeBuffering((state) => {
        if (state.buffering) {
          emitter.dispatchWaiting({});
        } else {
          emitter.dispatchResume({});
        }
      });
    }, [emitter, subscribeBuffering]);
  };
  var PlayerEmitterProvider = ({ children, currentPlaybackRate }) => {
    const [emitter] = reactExports.useState(() => new PlayerEmitter());
    reactExports.useEffect(() => {
      if (currentPlaybackRate) {
        emitter.dispatchRateChange(currentPlaybackRate);
      }
    }, [emitter, currentPlaybackRate]);
    useBufferStateEmitter(emitter);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerEventEmitterContext.Provider, {
      value: emitter,
      children
    });
  };
  var TimelineSequenceObserverContext = React14.createContext(null);
  var useHoverState = (ref, hideControlsWhenPointerDoesntMove) => {
    const [hovered, setHovered] = reactExports.useState(false);
    reactExports.useEffect(() => {
      const { current } = ref;
      if (!current) {
        return;
      }
      let hoverTimeout;
      const addHoverTimeout = () => {
        if (hideControlsWhenPointerDoesntMove) {
          clearTimeout(hoverTimeout);
          hoverTimeout = setTimeout(() => {
            setHovered(false);
          }, hideControlsWhenPointerDoesntMove === true ? 3e3 : hideControlsWhenPointerDoesntMove);
        }
      };
      const onHover = () => {
        setHovered(true);
        addHoverTimeout();
      };
      const onLeave = () => {
        setHovered(false);
        clearTimeout(hoverTimeout);
      };
      const onMove = () => {
        setHovered(true);
        addHoverTimeout();
      };
      current.addEventListener("mouseenter", onHover);
      current.addEventListener("mouseleave", onLeave);
      current.addEventListener("mousemove", onMove);
      return () => {
        current.removeEventListener("mouseenter", onHover);
        current.removeEventListener("mouseleave", onLeave);
        current.removeEventListener("mousemove", onMove);
        clearTimeout(hoverTimeout);
      };
    }, [hideControlsWhenPointerDoesntMove, ref]);
    return hovered;
  };
  var usePlayerMethods = () => {
    const setFrame = Internals.Timeline.useTimelineSetFrame();
    const setTimelinePosition = Internals.Timeline.useTimelineSetFrame();
    const {
      setPlaying,
      frameRef,
      audioAndVideoTags,
      isPlaying: readIsPlaying,
      isBuffering
    } = reactExports.useContext(Internals.SetTimelineContext);
    const audioContext = reactExports.useContext(Internals.SharedAudioContext);
    const audioTagsContext = reactExports.useContext(Internals.SharedAudioTagsContext);
    const environment = useRemotionEnvironment();
    const video = Internals.useVideo();
    const config = Internals.useUnsafeVideoConfig();
    const emitter = reactExports.useContext(PlayerEventEmitterContext);
    const playStart = reactExports.useRef(0);
    const fallbackFrame = reactExports.useRef(null);
    const nextPlayIsAutoPlayAttempt = reactExports.useRef(false);
    if (!emitter) {
      throw new TypeError("Expected Player event emitter context");
    }
    const getCurrentFrame = reactExports.useCallback(() => {
      if (!video) {
        return fallbackFrame.current ?? (typeof window === "undefined" ? 0 : window.remotion_initialFrame ?? 0);
      }
      const unclamped = frameRef.current[video.id] ?? (environment.isPlayer ? 0 : Internals.Timeline.getFrameForComposition(video.id));
      return Internals.Timeline.clampFrameToCompositionRange(unclamped, video.durationInFrames);
    }, [environment.isPlayer, frameRef, video]);
    const seek2 = reactExports.useCallback((newFrame) => {
      const frameToSeekTo = config ? Internals.TimelinePosition.clampFrameToCompositionRange(newFrame, config.durationInFrames) : Math.max(0, newFrame);
      fallbackFrame.current = frameToSeekTo;
      if (video == null ? void 0 : video.id) {
        if (frameRef.current[video.id] !== frameToSeekTo) {
          frameRef.current = {
            ...frameRef.current,
            [video.id]: frameToSeekTo
          };
        }
        setTimelinePosition((currentFrames) => currentFrames[video.id] === frameToSeekTo ? currentFrames : { ...currentFrames, [video.id]: frameToSeekTo });
      }
      emitter.dispatchSeek(frameToSeekTo);
    }, [config, emitter, frameRef, setTimelinePosition, video == null ? void 0 : video.id]);
    const play = reactExports.useCallback((e) => {
      const isAutoPlayAttempt = nextPlayIsAutoPlayAttempt.current;
      nextPlayIsAutoPlayAttempt.current = false;
      if (readIsPlaying()) {
        return;
      }
      const lastFrameForPlayback = ((config == null ? void 0 : config.durationInFrames) ?? 1) - 1;
      if (getCurrentFrame() === lastFrameForPlayback) {
        seek2(0);
      }
      if (isAutoPlayAttempt) {
        audioContext == null ? void 0 : audioContext.resumeAsAutoPlay();
      } else {
        audioContext == null ? void 0 : audioContext.resume();
      }
      if (audioTagsContext && audioTagsContext.numberOfAudioTags > 0 && e) {
        audioTagsContext.playAllAudios();
      }
      audioAndVideoTags.current.forEach((tag) => tag.play("player play() was called and playing audio from a click"));
      setPlaying(true);
      playStart.current = getCurrentFrame();
      emitter.dispatchPlay();
    }, [
      audioAndVideoTags,
      audioContext,
      audioTagsContext,
      config == null ? void 0 : config.durationInFrames,
      emitter,
      getCurrentFrame,
      readIsPlaying,
      seek2,
      setPlaying
    ]);
    const playAsAutoPlay = reactExports.useCallback(() => {
      nextPlayIsAutoPlayAttempt.current = true;
      play();
    }, [play]);
    const pause = reactExports.useCallback(() => {
      if (readIsPlaying()) {
        setPlaying(false);
        emitter.dispatchPause();
        audioContext == null ? void 0 : audioContext.suspend();
      }
    }, [audioContext, emitter, readIsPlaying, setPlaying]);
    const pauseAndReturnToPlayStart = reactExports.useCallback(() => {
      if (readIsPlaying()) {
        setPlaying(false);
        fallbackFrame.current = playStart.current;
        if (config) {
          frameRef.current = {
            ...frameRef.current,
            [config.id]: playStart.current
          };
          setTimelinePosition((currentFrames) => ({
            ...currentFrames,
            [config.id]: playStart.current
          }));
          emitter.dispatchPause();
        }
      }
    }, [
      config,
      emitter,
      frameRef,
      readIsPlaying,
      setPlaying,
      setTimelinePosition
    ]);
    const videoId = video == null ? void 0 : video.id;
    const lastFrame = ((config == null ? void 0 : config.durationInFrames) ?? 1) - 1;
    const frameBack = reactExports.useCallback((frames) => {
      if (!videoId) {
        return null;
      }
      if (readIsPlaying()) {
        return;
      }
      const previousFrame = frameRef.current[videoId] ?? window.remotion_initialFrame ?? 0;
      const newFrame = Math.max(0, previousFrame - frames);
      if (previousFrame === newFrame) {
        return;
      }
      frameRef.current = {
        ...frameRef.current,
        [videoId]: newFrame
      };
      setFrame((currentFrames) => currentFrames[videoId] === newFrame ? currentFrames : { ...currentFrames, [videoId]: newFrame });
    }, [frameRef, readIsPlaying, setFrame, videoId]);
    const frameForward = reactExports.useCallback((frames) => {
      if (!videoId) {
        return null;
      }
      if (readIsPlaying()) {
        return;
      }
      const previousFrame = frameRef.current[videoId] ?? window.remotion_initialFrame ?? 0;
      const newFrame = Math.min(lastFrame, previousFrame + frames);
      if (previousFrame === newFrame) {
        return;
      }
      frameRef.current = {
        ...frameRef.current,
        [videoId]: newFrame
      };
      setFrame((currentFrames) => currentFrames[videoId] === newFrame ? currentFrames : { ...currentFrames, [videoId]: newFrame });
    }, [frameRef, lastFrame, readIsPlaying, setFrame, videoId]);
    const toggle = reactExports.useCallback((e) => {
      if (readIsPlaying()) {
        pause();
      } else {
        play(e);
      }
    }, [pause, play, readIsPlaying]);
    return reactExports.useMemo(() => {
      return {
        frameBack,
        frameForward,
        emitter,
        play,
        playAsAutoPlay,
        pause,
        seek: seek2,
        getCurrentFrame,
        isPlaying: readIsPlaying,
        isBuffering,
        pauseAndReturnToPlayStart,
        toggle
      };
    }, [
      emitter,
      frameBack,
      frameForward,
      getCurrentFrame,
      readIsPlaying,
      pause,
      pauseAndReturnToPlayStart,
      play,
      playAsAutoPlay,
      isBuffering,
      seek2,
      toggle
    ]);
  };
  var useBrowserMediaSession = ({
    browserMediaControlsBehavior,
    videoConfig,
    playbackRate
  }) => {
    const playing = Internals.usePlaying();
    const { pause, play, emitter, getCurrentFrame, seek: seek2 } = usePlayerMethods();
    const hasEverPlayed = reactExports.useRef(false);
    reactExports.useEffect(() => {
      if (playing) {
        hasEverPlayed.current = true;
      }
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      if (playing) {
        navigator.mediaSession.playbackState = "playing";
      } else if (hasEverPlayed.current) {
        navigator.mediaSession.playbackState = "paused";
      }
    }, [browserMediaControlsBehavior.mode, playing]);
    reactExports.useEffect(() => {
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      const onTimeUpdate = () => {
        if (!videoConfig) {
          return;
        }
        if (navigator.mediaSession) {
          navigator.mediaSession.setPositionState({
            duration: videoConfig.durationInFrames / videoConfig.fps,
            playbackRate,
            position: getCurrentFrame() / videoConfig.fps
          });
        }
      };
      emitter.addEventListener("timeupdate", onTimeUpdate);
      return () => {
        emitter.removeEventListener("timeupdate", onTimeUpdate);
      };
    }, [
      browserMediaControlsBehavior.mode,
      emitter,
      getCurrentFrame,
      playbackRate,
      videoConfig
    ]);
    reactExports.useEffect(() => {
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      navigator.mediaSession.setActionHandler("play", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          play();
        }
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          pause();
        }
      });
      navigator.mediaSession.setActionHandler("seekto", (event) => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && event.seekTime !== void 0 && videoConfig) {
          seek2(Math.round(event.seekTime * videoConfig.fps));
        }
      });
      navigator.mediaSession.setActionHandler("seekbackward", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
          seek2(Math.max(0, Math.round((getCurrentFrame() - 10) * videoConfig.fps)));
        }
      });
      navigator.mediaSession.setActionHandler("seekforward", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
          seek2(Math.max(videoConfig.durationInFrames - 1, Math.round((getCurrentFrame() + 10) * videoConfig.fps)));
        }
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          seek2(0);
        }
      });
      return () => {
        navigator.mediaSession.metadata = null;
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
        navigator.mediaSession.setActionHandler("seekto", null);
        navigator.mediaSession.setActionHandler("seekbackward", null);
        navigator.mediaSession.setActionHandler("seekforward", null);
        navigator.mediaSession.setActionHandler("previoustrack", null);
      };
    }, [
      browserMediaControlsBehavior.mode,
      getCurrentFrame,
      pause,
      play,
      seek2,
      videoConfig
    ]);
  };
  var calculateNextFrame = ({
    time,
    currentFrame: startFrame,
    playbackSpeed,
    fps,
    actualLastFrame,
    actualFirstFrame,
    framesAdvanced,
    shouldLoop
  }) => {
    const op = playbackSpeed < 0 ? Math.ceil : Math.floor;
    const framesToAdvance = op(time * playbackSpeed / (1e3 / fps)) - framesAdvanced;
    const nextFrame = framesToAdvance + startFrame;
    const isCurrentFrameOutside = startFrame > actualLastFrame || startFrame < actualFirstFrame;
    const isNextFrameOutside = nextFrame > actualLastFrame || nextFrame < actualFirstFrame;
    const hasEnded = !shouldLoop && isNextFrameOutside && !isCurrentFrameOutside;
    if (playbackSpeed > 0) {
      if (isNextFrameOutside) {
        return {
          nextFrame: actualFirstFrame,
          framesToAdvance,
          hasEnded
        };
      }
      return { nextFrame, framesToAdvance, hasEnded };
    }
    if (isNextFrameOutside) {
      return { nextFrame: actualLastFrame, framesToAdvance, hasEnded };
    }
    return { nextFrame, framesToAdvance, hasEnded };
  };
  var getIsBackgrounded = () => {
    if (typeof document === "undefined") {
      return false;
    }
    return document.visibilityState === "hidden";
  };
  var useIsBackgrounded = () => {
    const isBackgrounded = reactExports.useRef(getIsBackgrounded());
    reactExports.useEffect(() => {
      const onVisibilityChange = () => {
        isBackgrounded.current = getIsBackgrounded();
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    }, []);
    return isBackgrounded;
  };
  var ALLOWED_GLOBAL_TIME_ANCHOR_SHIFT = 0.1;
  var setGlobalTimeAnchor = ({
    audioContext,
    audioSyncAnchor,
    absoluteTimeInSeconds,
    globalPlaybackRate,
    logLevel,
    force
  }) => {
    const newAnchor = audioContext.currentTime - absoluteTimeInSeconds / globalPlaybackRate;
    const shift = newAnchor - audioSyncAnchor.value;
    const { outputLatency } = audioContext;
    const safeOutputLatency = outputLatency === 0 ? 0.3 : outputLatency;
    const latency = audioContext.baseLatency + safeOutputLatency;
    if (Math.abs(shift) < ALLOWED_GLOBAL_TIME_ANCHOR_SHIFT + latency && !force) {
      return false;
    }
    if (Math.abs(shift) < Number.EPSILON) {
      return false;
    }
    Internals.Log.verbose({ logLevel, tag: "audio-scheduling" }, "Anchor " + (force ? "forcibly " : "") + "changed from %s to %s with shift %s", audioSyncAnchor.value, newAnchor, shift);
    audioSyncAnchor.value = newAnchor;
    return true;
  };
  var shouldForceAnchorChange = (newState) => {
    if (newState === "suspended" || newState === "running-to-suspended") {
      return true;
    }
    if (newState === "closed" || newState === "interrupted" || newState === "running" || newState === "suspended-to-running") {
      return false;
    }
    throw new Error(`Unexpected audio context state: ${newState}`);
  };
  var usePlayback = ({
    loop,
    playbackRate,
    moveToBeginningWhenEnded,
    inFrame,
    outFrame,
    browserMediaControlsBehavior,
    getCurrentFrame,
    muted
  }) => {
    const config = Internals.useUnsafeVideoConfig();
    const frame = Internals.Timeline.useTimelinePosition();
    const playing = Internals.usePlaying();
    const { pause, emitter, isPlaying } = usePlayerMethods();
    const setFrame = Internals.Timeline.useTimelineSetFrame();
    const sharedAudioContext = reactExports.useContext(Internals.SharedAudioContext);
    const { setPlayerMuted } = reactExports.useContext(Internals.SetMediaVolumeContext);
    const { isBuffering, subscribeBuffering } = reactExports.useContext(Internals.SetTimelineContext);
    const logLevel = Internals.useLogLevel();
    const isBackgroundedRef = useIsBackgrounded();
    const lastTimeUpdateTimestamp = reactExports.useRef(0);
    useBrowserMediaSession({
      browserMediaControlsBehavior,
      playbackRate,
      videoConfig: config
    });
    reactExports.useLayoutEffect(() => {
      if (!sharedAudioContext) {
        return;
      }
      if (!sharedAudioContext.audioContext) {
        return;
      }
      if (!config) {
        return;
      }
      if (muted) {
        return;
      }
      const changed = setGlobalTimeAnchor({
        audioContext: sharedAudioContext.audioContext,
        audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
        absoluteTimeInSeconds: frame / config.fps,
        globalPlaybackRate: playbackRate,
        logLevel,
        force: false
      });
      if (changed) {
        sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
      }
    }, [config, frame, logLevel, playbackRate, sharedAudioContext, muted]);
    reactExports.useLayoutEffect(() => {
      const audioContext = sharedAudioContext == null ? void 0 : sharedAudioContext.audioContext;
      if (!audioContext) {
        return;
      }
      if (!config) {
        return;
      }
      if (muted) {
        return;
      }
      const callback = () => {
        const newState = sharedAudioContext == null ? void 0 : sharedAudioContext.getAudioContextState();
        if (newState && shouldForceAnchorChange(newState)) {
          const changed = setGlobalTimeAnchor({
            audioContext,
            audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
            absoluteTimeInSeconds: getCurrentFrame() / config.fps,
            globalPlaybackRate: playbackRate,
            logLevel,
            force: true
          });
          if (changed) {
            sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
          }
        }
      };
      audioContext == null ? void 0 : audioContext.addEventListener("statechange", callback);
      return () => {
        audioContext == null ? void 0 : audioContext.removeEventListener("statechange", callback);
      };
    }, [
      config,
      getCurrentFrame,
      logLevel,
      muted,
      playbackRate,
      sharedAudioContext
    ]);
    reactExports.useEffect(() => {
      var _a;
      if (!config) {
        return;
      }
      if (!playing) {
        (_a = sharedAudioContext == null ? void 0 : sharedAudioContext.suspend) == null ? void 0 : _a.call(sharedAudioContext);
        return;
      }
      if ((sharedAudioContext == null ? void 0 : sharedAudioContext._experimentalKeepAudioContextAlive) && sharedAudioContext.audioContext && !muted) {
        const changed = setGlobalTimeAnchor({
          audioContext: sharedAudioContext.audioContext,
          audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
          absoluteTimeInSeconds: getCurrentFrame() / config.fps,
          globalPlaybackRate: playbackRate,
          logLevel,
          force: true
        });
        if (changed) {
          sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
        }
      }
      let hasBeenStopped = false;
      let audioContextFailed = false;
      let reqAnimFrameCall = null;
      let startedTime = performance.now();
      let framesAdvanced = 0;
      const cancelQueuedFrame = () => {
        if (reqAnimFrameCall !== null) {
          if (reqAnimFrameCall.type === "raf") {
            cancelAnimationFrame(reqAnimFrameCall.id);
          } else {
            clearTimeout(reqAnimFrameCall.id);
          }
        }
      };
      const stop = () => {
        hasBeenStopped = true;
        cancelQueuedFrame();
      };
      const callback = () => {
        var _a2, _b;
        if (hasBeenStopped) {
          return;
        }
        if (!isPlaying()) {
          (_a2 = sharedAudioContext == null ? void 0 : sharedAudioContext.suspend) == null ? void 0 : _a2.call(sharedAudioContext);
          return;
        }
        if (!muted && !audioContextFailed && !isBuffering()) {
          (_b = sharedAudioContext == null ? void 0 : sharedAudioContext.resume) == null ? void 0 : _b.call(sharedAudioContext);
        }
        const time = performance.now() - startedTime;
        const actualLastFrame = outFrame ?? config.durationInFrames - 1;
        const actualFirstFrame = inFrame ?? 0;
        const currentFrame = getCurrentFrame();
        const { nextFrame, framesToAdvance, hasEnded } = calculateNextFrame({
          time,
          currentFrame,
          playbackSpeed: playbackRate,
          fps: config.fps,
          actualFirstFrame,
          actualLastFrame,
          framesAdvanced,
          shouldLoop: loop
        });
        framesAdvanced += framesToAdvance;
        if (nextFrame !== getCurrentFrame() && (!hasEnded || moveToBeginningWhenEnded) && !isBuffering()) {
          setFrame((c2) => ({ ...c2, [config.id]: nextFrame }));
        }
        if (hasEnded) {
          stop();
          pause();
          emitter.dispatchEnded();
          return;
        }
        queueNextFrame();
      };
      const queueNextFrame = () => {
        var _a2, _b;
        if (hasBeenStopped) {
          return;
        }
        const getIsResumingAudioContext = audioContextFailed ? null : ((_a2 = sharedAudioContext == null ? void 0 : sharedAudioContext.getIsResumingAudioContext) == null ? void 0 : _a2.call(sharedAudioContext)) ?? null;
        if (getIsResumingAudioContext !== null && !muted) {
          getIsResumingAudioContext.then((result) => {
            if (hasBeenStopped) {
              return;
            }
            if (result === "failed") {
              audioContextFailed = true;
              sharedAudioContext == null ? void 0 : sharedAudioContext.suspend();
              setPlayerMuted(true);
            }
            startedTime = performance.now();
            framesAdvanced = 0;
            queueNextFrame();
          });
          return;
        }
        if (isBuffering()) {
          if (!muted && !audioContextFailed) {
            (_b = sharedAudioContext == null ? void 0 : sharedAudioContext.suspend) == null ? void 0 : _b.call(sharedAudioContext);
          }
          const unsubscribe = subscribeBuffering((state) => {
            if (state.buffering) {
              return;
            }
            unsubscribe();
            if (!muted && !audioContextFailed && (sharedAudioContext == null ? void 0 : sharedAudioContext._experimentalKeepAudioContextAlive)) {
              sharedAudioContext.resume();
            }
            startedTime = performance.now();
            framesAdvanced = 0;
            queueNextFrame();
          });
          return;
        }
        if (isBackgroundedRef.current) {
          reqAnimFrameCall = {
            type: "timeout",
            id: setTimeout(callback, 1e3 / config.fps)
          };
          return;
        }
        reqAnimFrameCall = { type: "raf", id: requestAnimationFrame(callback) };
      };
      queueNextFrame();
      const onVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          return;
        }
        cancelQueuedFrame();
        callback();
      };
      window.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        window.removeEventListener("visibilitychange", onVisibilityChange);
        stop();
      };
    }, [
      config,
      loop,
      pause,
      playing,
      setFrame,
      emitter,
      playbackRate,
      inFrame,
      outFrame,
      moveToBeginningWhenEnded,
      isBackgroundedRef,
      getCurrentFrame,
      isBuffering,
      isPlaying,
      sharedAudioContext,
      setPlayerMuted,
      subscribeBuffering,
      logLevel,
      muted
    ]);
    reactExports.useEffect(() => {
      const now = performance.now();
      const timeSinceLastUpdate = now - lastTimeUpdateTimestamp.current;
      if (timeSinceLastUpdate >= 250) {
        emitter.dispatchTimeUpdate({ frame });
        lastTimeUpdateTimestamp.current = now;
        return;
      }
      const timeoutId = setTimeout(() => {
        emitter.dispatchTimeUpdate({ frame });
        lastTimeUpdateTimestamp.current = performance.now();
      }, 250 - timeSinceLastUpdate);
      return () => clearTimeout(timeoutId);
    }, [emitter, frame]);
    reactExports.useEffect(() => {
      emitter.dispatchFrameUpdate({ frame });
    }, [emitter, frame]);
  };
  var elementSizeHooks = [];
  var getElement = (source) => {
    if (!source) {
      return null;
    }
    if ("current" in source) {
      return source.current;
    }
    return source;
  };
  var useElementSize = (source, options) => {
    const [size, setSize] = reactExports.useState(() => {
      const element = getElement(source);
      if (!element) {
        return null;
      }
      const rect = element.getClientRects();
      if (!rect[0]) {
        return null;
      }
      return {
        width: rect[0].width,
        height: rect[0].height,
        left: rect[0].x,
        top: rect[0].y,
        windowSize: {
          height: window.innerHeight,
          width: window.innerWidth
        }
      };
    });
    const observer = reactExports.useMemo(() => {
      if (typeof ResizeObserver === "undefined") {
        return null;
      }
      return new ResizeObserver((entries) => {
        const { contentRect, target } = entries[0];
        const newSize = target.getClientRects();
        if (!(newSize == null ? void 0 : newSize[0])) {
          setSize(null);
          return;
        }
        const probableCssParentScaleX = contentRect.width === 0 ? 1 : newSize[0].width / contentRect.width;
        const probableCssParentScaleY = contentRect.height === 0 ? 1 : newSize[0].height / contentRect.height;
        const width = options.shouldApplyCssTransforms || probableCssParentScaleX === 0 ? newSize[0].width : newSize[0].width * (1 / probableCssParentScaleX);
        const height = options.shouldApplyCssTransforms || probableCssParentScaleY === 0 ? newSize[0].height : newSize[0].height * (1 / probableCssParentScaleY);
        setSize((prevState) => {
          const isSame = prevState && prevState.width === width && prevState.height === height && prevState.left === newSize[0].x && prevState.top === newSize[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
          if (isSame) {
            return prevState;
          }
          return {
            width,
            height,
            left: newSize[0].x,
            top: newSize[0].y,
            windowSize: {
              height: window.innerHeight,
              width: window.innerWidth
            }
          };
        });
      });
    }, [options.shouldApplyCssTransforms]);
    const updateSize = reactExports.useCallback(() => {
      const element = getElement(source);
      if (!element) {
        return;
      }
      const rect = element.getClientRects();
      if (!rect[0]) {
        setSize(null);
        return;
      }
      setSize((prevState) => {
        const isSame = prevState && prevState.width === rect[0].width && prevState.height === rect[0].height && prevState.left === rect[0].x && prevState.top === rect[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
        if (isSame) {
          return prevState;
        }
        return {
          width: rect[0].width,
          height: rect[0].height,
          left: rect[0].x,
          top: rect[0].y,
          windowSize: {
            height: window.innerHeight,
            width: window.innerWidth
          }
        };
      });
    }, [source]);
    reactExports.useEffect(() => {
      updateSize();
    }, [updateSize]);
    reactExports.useEffect(() => {
      if (!observer) {
        return;
      }
      const element = getElement(source);
      if (element) {
        observer.observe(element);
      }
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [observer, source]);
    reactExports.useEffect(() => {
      if (!options.triggerOnWindowResize) {
        return;
      }
      window.addEventListener("resize", updateSize);
      return () => {
        window.removeEventListener("resize", updateSize);
      };
    }, [options.triggerOnWindowResize, updateSize]);
    reactExports.useEffect(() => {
      elementSizeHooks.push(updateSize);
      return () => {
        elementSizeHooks = elementSizeHooks.filter((e) => e !== updateSize);
      };
    }, [updateSize]);
    return reactExports.useMemo(() => {
      if (!size) {
        return null;
      }
      return { ...size, refresh: updateSize };
    }, [size, updateSize]);
  };
  var playerCssClassname = (override) => {
    return override ?? "__remotion-player";
  };
  var errorStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
    width: "100%"
  };
  class ErrorBoundary extends React14.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", { hasError: null });
    }
    static getDerivedStateFromError(error2) {
      return { hasError: error2 };
    }
    componentDidCatch(error2) {
      this.props.onError(error2);
    }
    render() {
      if (this.state.hasError) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          style: errorStyle,
          children: this.props.errorFallback({
            error: this.state.hasError
          })
        });
      }
      return this.props.children;
    }
  }
  var getHashOfDomain = async () => {
    if (typeof window === "undefined") {
      return null;
    }
    if (typeof window.crypto === "undefined") {
      return null;
    }
    if (typeof window.crypto.subtle === "undefined") {
      return null;
    }
    try {
      const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(window.location.hostname));
      return Array.from(new Uint8Array(hashBuffer)).map((b2) => b2.toString(16).padStart(2, "0")).join("");
    } catch {
      return null;
    }
  };
  var style = {
    backgroundColor: "red",
    position: "absolute",
    padding: 12,
    fontFamily: "Arial"
  };
  var DOMAIN_BLACKLIST = [
    "28d262b44cc61fa750f1686b16ad0604dabfe193fbc263eec05c89b7ad4c2cd6",
    "4db1b0a94be33165dfefcb3ba03d04c7a2666dd27c496d3dc9fa41858e94925e",
    "fbc48530bbf245da790f63675e84e06bab38c3b114fab07eb350025119922bdc",
    "7baf10a8932757b1b3a22b3fce10a048747ac2f8eaf638603487e3705b07eb83",
    "8a6c21a598d8c667272b5207c051b85997bf5b45d5fb712378be3f27cd72c6a6",
    "a2f7aaac9c50a9255e7fc376110c4e0bfe153722dc66ed3c5d3bf2a135f65518"
  ];
  var ran = false;
  var RenderWarningIfBlacklist = () => {
    const [unlicensed, setUnlicensed] = React14.useState(false);
    reactExports.useEffect(() => {
      if (ran) {
        return;
      }
      ran = true;
      getHashOfDomain().then((hash) => {
        if (hash && DOMAIN_BLACKLIST.includes(hash)) {
          setUnlicensed(true);
        }
      }).catch(() => {
      });
    }, []);
    reactExports.useEffect(() => {
      if (!unlicensed) {
        return;
      }
      const ensureBanner = () => {
        const banner = document.querySelector(".warning-banner");
        if (!banner) {
          const div = document.createElement("div");
          div.className = "warning-banner";
          Object.assign(div.style, style, {
            zIndex: "9999",
            cssText: `${style.cssText} !important;`
          });
          div.innerHTML = `
	        <a href="https://github.com/remotion-dev/remotion/pull/4589" style="color: white;">
	          Remotion Unlicensed – Contact hi@remotion.dev
	        </a>
	      `;
          document.body.appendChild(div);
        }
      };
      const observer = new MutationObserver(() => ensureBanner());
      observer.observe(document.body, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
      };
    }, [unlicensed]);
    if (!unlicensed) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      style,
      className: "warning-banner",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
        style: { color: "white" },
        href: "https://github.com/remotion-dev/remotion/pull/4589",
        children: "Remotion Unlicensed – Contact hi@remotion.dev"
      })
    });
  };
  var DefaultPlayPauseButton = ({ playing, buffering }) => {
    if (playing && buffering) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BufferingIndicator, {
        type: "player"
      });
    }
    if (playing) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PauseIcon, {});
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlayIcon, {});
  };
  var KNOB_SIZE = 12;
  var BAR_HEIGHT = 5;
  var DefaultVolumeSlider = ({
    volume,
    isVertical,
    onBlur,
    inputRef,
    setVolume
  }) => {
    const sliderContainer = reactExports.useMemo(() => {
      const paddingLeft = 5;
      const common = {
        paddingLeft,
        height: ICON_SIZE,
        width: VOLUME_SLIDER_WIDTH,
        display: "inline-flex",
        alignItems: "center"
      };
      if (isVertical) {
        return {
          ...common,
          position: "absolute",
          transform: `rotate(-90deg) translateX(${VOLUME_SLIDER_WIDTH / 2 + ICON_SIZE / 2}px)`
        };
      }
      return {
        ...common
      };
    }, [isVertical]);
    const randomId = typeof React14.useId === "undefined" ? "volume-slider" : React14.useId();
    const [randomClass] = reactExports.useState(() => `__remotion-volume-slider-${random(randomId)}`.replace(".", ""));
    const onVolumeChange = reactExports.useCallback((e) => {
      setVolume(parseFloat(e.target.value));
    }, [setVolume]);
    const inputStyle = reactExports.useMemo(() => {
      const commonStyle = {
        WebkitAppearance: "none",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: BAR_HEIGHT / 2,
        cursor: "pointer",
        height: BAR_HEIGHT,
        width: VOLUME_SLIDER_WIDTH,
        backgroundImage: `linear-gradient(
				to right,
				white ${volume * 100}%, rgba(255, 255, 255, 0) ${volume * 100}%
			)`
      };
      if (isVertical) {
        return {
          ...commonStyle,
          bottom: ICON_SIZE + VOLUME_SLIDER_WIDTH / 2
        };
      }
      return commonStyle;
    }, [isVertical, volume]);
    const sliderStyle = `
	.${randomClass}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}

	.${randomClass}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}
`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      style: sliderContainer,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: sliderStyle
          }
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
          ref: inputRef,
          "aria-label": "Change volume",
          className: randomClass,
          max: 1,
          min: 0,
          onBlur,
          onChange: onVolumeChange,
          step: 0.01,
          type: "range",
          value: volume,
          style: inputStyle
        })
      ]
    });
  };
  var renderDefaultVolumeSlider = (props) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultVolumeSlider, {
      ...props
    });
  };
  var VOLUME_SLIDER_WIDTH = 100;
  var MediaVolumeSlider = ({ displayVerticalVolumeSlider, renderMuteButton, renderVolumeSlider }) => {
    const [playerMuted, setPlayerMuted] = Internals.usePlayerMutedState();
    const [mediaVolume, setMediaVolume] = Internals.useMediaVolumeState();
    const [focused, setFocused] = reactExports.useState(false);
    const parentDivRef = reactExports.useRef(null);
    const inputRef = reactExports.useRef(null);
    const hover = useHoverState(parentDivRef, false);
    const onBlur = reactExports.useCallback(() => {
      setTimeout(() => {
        if (inputRef.current && document.activeElement !== inputRef.current) {
          setFocused(false);
        }
      }, 10);
    }, []);
    const isVolume0 = mediaVolume === 0;
    const onClick = reactExports.useCallback(() => {
      if (isVolume0) {
        setMediaVolume(1);
        setPlayerMuted(false);
        return;
      }
      setPlayerMuted((mute) => !mute);
    }, [isVolume0, setPlayerMuted, setMediaVolume]);
    const parentDivStyle = reactExports.useMemo(() => {
      return {
        display: "inline-flex",
        background: "none",
        border: "none",
        justifyContent: "center",
        alignItems: "center",
        touchAction: "none",
        ...displayVerticalVolumeSlider && { position: "relative" }
      };
    }, [displayVerticalVolumeSlider]);
    const volumeContainer = reactExports.useMemo(() => {
      return {
        display: "inline",
        width: ICON_SIZE,
        height: ICON_SIZE,
        cursor: "pointer",
        appearance: "none",
        background: "none",
        border: "none",
        padding: 0
      };
    }, []);
    const renderDefaultMuteButton = reactExports.useCallback(({ muted, volume }) => {
      const isMutedOrZero = muted || volume === 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        "aria-label": isMutedOrZero ? "Unmute sound" : "Mute sound",
        title: isMutedOrZero ? "Unmute sound" : "Mute sound",
        onClick,
        onBlur,
        onFocus: () => setFocused(true),
        style: volumeContainer,
        type: "button",
        children: isMutedOrZero ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeOffIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeOnIcon, {})
      });
    }, [onBlur, onClick, volumeContainer]);
    const muteButton = reactExports.useMemo(() => {
      return renderMuteButton ? renderMuteButton({ muted: playerMuted, volume: mediaVolume }) : renderDefaultMuteButton({ muted: playerMuted, volume: mediaVolume });
    }, [playerMuted, mediaVolume, renderDefaultMuteButton, renderMuteButton]);
    const volumeSlider = reactExports.useMemo(() => {
      return (focused || hover) && !playerMuted && !Internals.isIosSafari() ? (renderVolumeSlider ?? renderDefaultVolumeSlider)({
        isVertical: displayVerticalVolumeSlider,
        volume: mediaVolume,
        onBlur: () => setFocused(false),
        inputRef,
        setVolume: setMediaVolume
      }) : null;
    }, [
      displayVerticalVolumeSlider,
      focused,
      hover,
      playerMuted,
      mediaVolume,
      renderVolumeSlider,
      setMediaVolume
    ]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      ref: parentDivRef,
      style: parentDivStyle,
      children: [
        muteButton,
        volumeSlider
      ]
    });
  };
  function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = reactExports.useState(initialIsVisible);
    const ref = reactExports.useRef(null);
    reactExports.useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(false);
        }
      };
      document.addEventListener("pointerup", handleClickOutside, true);
      return () => {
        document.removeEventListener("pointerup", handleClickOutside, true);
      };
    }, []);
    return { ref, isComponentVisible, setIsComponentVisible };
  }
  var BOTTOM = 35;
  var THRESHOLD = 70;
  var rateDiv = {
    height: 30,
    paddingRight: 15,
    paddingLeft: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
  var checkmarkContainer = {
    width: 22,
    display: "flex",
    alignItems: "center"
  };
  var checkmarkStyle = {
    width: 14,
    height: 14,
    color: "black"
  };
  var Checkmark = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 512 512",
    style: checkmarkStyle,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      fill: "currentColor",
      d: "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
    })
  });
  var formatPlaybackRate = (rate) => {
    const str = rate.toString();
    return str.includes(".") ? str : str + ".0";
  };
  var PlaybackrateOption = ({ rate, onSelect, selectedRate, keyboardSelectedRate }) => {
    const onClick = reactExports.useCallback((e) => {
      e.stopPropagation();
      e.preventDefault();
      onSelect(rate);
    }, [onSelect, rate]);
    const [hovered, setHovered] = reactExports.useState(false);
    const onMouseEnter = reactExports.useCallback(() => {
      setHovered(true);
    }, []);
    const onMouseLeave = reactExports.useCallback(() => {
      setHovered(false);
    }, []);
    const isFocused = keyboardSelectedRate === rate;
    const actualStyle = reactExports.useMemo(() => {
      return {
        ...rateDiv,
        backgroundColor: hovered || isFocused ? "#eee" : "transparent"
      };
    }, [hovered, isFocused]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      onPointerEnter: onMouseEnter,
      onPointerLeave: onMouseLeave,
      tabIndex: 0,
      style: actualStyle,
      onClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          style: checkmarkContainer,
          children: rate === selectedRate ? /* @__PURE__ */ jsxRuntimeExports.jsx(Checkmark, {}) : null
        }),
        formatPlaybackRate(rate),
        "x"
      ]
    }, rate);
  };
  var PlaybackPopup = ({ setIsComponentVisible, playbackRates, canvasSize }) => {
    const { setPlaybackRate, playbackRate } = Internals.usePlaybackRate();
    const [keyboardSelectedRate, setKeyboardSelectedRate] = reactExports.useState(playbackRate);
    reactExports.useEffect(() => {
      const listener = (e) => {
        e.preventDefault();
        if (e.key === "ArrowUp") {
          const currentIndex = playbackRates.findIndex((rate) => rate === keyboardSelectedRate);
          if (currentIndex === 0) {
            return;
          }
          if (currentIndex === -1) {
            setKeyboardSelectedRate(playbackRates[0]);
          } else {
            setKeyboardSelectedRate(playbackRates[currentIndex - 1]);
          }
        } else if (e.key === "ArrowDown") {
          const currentIndex = playbackRates.findIndex((rate) => rate === keyboardSelectedRate);
          if (currentIndex === playbackRates.length - 1) {
            return;
          }
          if (currentIndex === -1) {
            setKeyboardSelectedRate(playbackRates[playbackRates.length - 1]);
          } else {
            setKeyboardSelectedRate(playbackRates[currentIndex + 1]);
          }
        } else if (e.key === "Enter") {
          setPlaybackRate(keyboardSelectedRate);
          setIsComponentVisible(false);
        }
      };
      window.addEventListener("keydown", listener);
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, [
      playbackRates,
      keyboardSelectedRate,
      setPlaybackRate,
      setIsComponentVisible
    ]);
    const onSelect = reactExports.useCallback((rate) => {
      setPlaybackRate(rate);
      setIsComponentVisible(false);
    }, [setIsComponentVisible, setPlaybackRate]);
    const playbackPopup = reactExports.useMemo(() => {
      return {
        position: "absolute",
        right: 0,
        width: 125,
        maxHeight: canvasSize.height - THRESHOLD - BOTTOM,
        bottom: 35,
        background: "#fff",
        borderRadius: 4,
        overflow: "auto",
        color: "black",
        textAlign: "left"
      };
    }, [canvasSize.height]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      style: playbackPopup,
      children: playbackRates.map((rate) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaybackrateOption, {
          selectedRate: playbackRate,
          onSelect,
          rate,
          keyboardSelectedRate
        }, rate);
      })
    });
  };
  var label = {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    border: "2px solid white",
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2
  };
  var playerButtonStyle = {
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
    height: 37,
    display: "inline-flex",
    marginBottom: 0,
    marginTop: 0,
    alignItems: "center"
  };
  var button = {
    ...playerButtonStyle,
    position: "relative"
  };
  var PlaybackrateControl = ({ playbackRates, canvasSize }) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const { playbackRate } = Internals.usePlaybackRate();
    const onClick = reactExports.useCallback((e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsComponentVisible((prevIsComponentVisible) => !prevIsComponentVisible);
    }, [setIsComponentVisible]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
        type: "button",
        "aria-label": "Change playback rate",
        style: button,
        onClick,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            style: label,
            children: [
              playbackRate,
              "x"
            ]
          }),
          isComponentVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(PlaybackPopup, {
            canvasSize,
            playbackRates,
            setIsComponentVisible
          })
        ]
      })
    });
  };
  var getFrameFromX = (clientX, durationInFrames, width) => {
    const pos = clientX;
    const frame = Math.round(interpolate(pos, [0, width], [0, durationInFrames - 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }));
    return frame;
  };
  var BAR_HEIGHT2 = 5;
  var KNOB_SIZE2 = 12;
  var VERTICAL_PADDING = 4;
  var containerStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
    paddingTop: VERTICAL_PADDING,
    paddingBottom: VERTICAL_PADDING,
    boxSizing: "border-box",
    cursor: "pointer",
    position: "relative",
    touchAction: "none"
  };
  var barBackground = {
    height: BAR_HEIGHT2,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    width: "100%",
    borderRadius: BAR_HEIGHT2 / 2
  };
  var findBodyInWhichDivIsLocated = (div) => {
    let current = div;
    while (current.parentElement) {
      current = current.parentElement;
    }
    return current;
  };
  var PlayerSeekBar = ({ durationInFrames, onSeekEnd, onSeekStart, inFrame, outFrame }) => {
    const containerRef = reactExports.useRef(null);
    const barHovered = useHoverState(containerRef, false);
    const size = useElementSize(containerRef, {
      triggerOnWindowResize: true,
      shouldApplyCssTransforms: true
    });
    const { seek: seek2, play, pause, isPlaying } = usePlayerMethods();
    const frame = Internals.Timeline.useTimelinePosition();
    const [dragging, setDragging] = reactExports.useState({
      dragging: false
    });
    const width = (size == null ? void 0 : size.width) ?? 0;
    const onPointerDown = reactExports.useCallback((e) => {
      var _a;
      if (e.button !== 0) {
        return;
      }
      const posLeft = (_a = containerRef.current) == null ? void 0 : _a.getBoundingClientRect().left;
      const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, width);
      const wasPlaying = isPlaying();
      pause();
      seek2(_frame);
      setDragging({
        dragging: true,
        wasPlaying
      });
      onSeekStart();
    }, [durationInFrames, width, isPlaying, pause, seek2, onSeekStart]);
    const onPointerMove = reactExports.useCallback((e) => {
      var _a;
      if (!size) {
        throw new Error("Player has no size");
      }
      if (!dragging.dragging) {
        return;
      }
      const posLeft = (_a = containerRef.current) == null ? void 0 : _a.getBoundingClientRect().left;
      const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, size.width);
      seek2(_frame);
    }, [dragging.dragging, durationInFrames, seek2, size]);
    const onPointerUp = reactExports.useCallback(() => {
      setDragging({
        dragging: false
      });
      if (!dragging.dragging) {
        return;
      }
      if (dragging.wasPlaying) {
        play();
      } else {
        pause();
      }
      onSeekEnd();
    }, [dragging, onSeekEnd, pause, play]);
    reactExports.useEffect(() => {
      if (!dragging.dragging) {
        return;
      }
      const body = findBodyInWhichDivIsLocated(containerRef.current);
      body.addEventListener("pointermove", onPointerMove);
      body.addEventListener("pointerup", onPointerUp);
      return () => {
        body.removeEventListener("pointermove", onPointerMove);
        body.removeEventListener("pointerup", onPointerUp);
      };
    }, [dragging.dragging, onPointerMove, onPointerUp]);
    const knobStyle = reactExports.useMemo(() => {
      return {
        height: KNOB_SIZE2,
        width: KNOB_SIZE2,
        borderRadius: KNOB_SIZE2 / 2,
        position: "absolute",
        top: VERTICAL_PADDING - KNOB_SIZE2 / 2 + 5 / 2,
        backgroundColor: "white",
        left: Math.max(0, frame / Math.max(1, durationInFrames - 1) * width - KNOB_SIZE2 / 2),
        boxShadow: "0 0 2px black",
        opacity: Number(barHovered || dragging.dragging)
      };
    }, [barHovered, dragging.dragging, durationInFrames, frame, width]);
    const fillStyle = reactExports.useMemo(() => {
      return {
        height: BAR_HEIGHT2,
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: (frame - (inFrame ?? 0)) / (durationInFrames - 1) * width,
        marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * width,
        borderRadius: BAR_HEIGHT2 / 2
      };
    }, [durationInFrames, frame, inFrame, width]);
    const active = reactExports.useMemo(() => {
      return {
        height: BAR_HEIGHT2,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        width: ((outFrame ?? durationInFrames - 1) - (inFrame ?? 0)) / (durationInFrames - 1) * 100 + "%",
        marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * 100 + "%",
        borderRadius: BAR_HEIGHT2 / 2,
        position: "absolute"
      };
    }, [durationInFrames, inFrame, outFrame]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      ref: containerRef,
      onPointerDown,
      style: containerStyle,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          style: barBackground,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              style: active
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              style: fillStyle
            })
          ]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          style: knobStyle
        })
      ]
    });
  };
  var formatTime$1 = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds - minutes * 60);
    return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
  };
  var PlayerTimeLabel = ({ durationInFrames, maxTimeLabelWidth, fps }) => {
    const frame = Internals.Timeline.useTimelinePosition();
    const timeLabel = reactExports.useMemo(() => {
      return {
        color: "white",
        fontFamily: "sans-serif",
        fontSize: 14,
        maxWidth: maxTimeLabelWidth === null ? void 0 : maxTimeLabelWidth,
        overflow: "hidden",
        textOverflow: "ellipsis"
      };
    }, [maxTimeLabelWidth]);
    const isLastFrame = frame === durationInFrames - 1;
    const frameToDisplay = isLastFrame ? frame + 1 : frame;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      style: timeLabel,
      children: [
        formatTime$1(frameToDisplay / fps),
        " / ",
        formatTime$1(durationInFrames / fps)
      ]
    });
  };
  var X_SPACER = 10;
  var X_PADDING = 12;
  var useVideoControlsResize = ({
    allowFullscreen: allowFullScreen,
    playerWidth
  }) => {
    const resizeInfo = reactExports.useMemo(() => {
      const playPauseIconSize = ICON_SIZE;
      const volumeIconSize = ICON_SIZE;
      const _fullscreenIconSize = allowFullScreen ? fullscreenIconSize : 0;
      const elementsSize = volumeIconSize + playPauseIconSize + _fullscreenIconSize + X_PADDING * 2 + X_SPACER * 2;
      const maxTimeLabelWidth = playerWidth - elementsSize;
      const maxTimeLabelWidthWithoutNegativeValue = Math.max(maxTimeLabelWidth, 0);
      const availableTimeLabelWidthIfVolumeOpen = maxTimeLabelWidthWithoutNegativeValue - VOLUME_SLIDER_WIDTH;
      const computedLabelWidth = availableTimeLabelWidthIfVolumeOpen < VOLUME_SLIDER_WIDTH ? maxTimeLabelWidthWithoutNegativeValue : availableTimeLabelWidthIfVolumeOpen;
      const minWidthForHorizontalDisplay = computedLabelWidth + elementsSize + VOLUME_SLIDER_WIDTH;
      const displayVerticalVolumeSlider = playerWidth < minWidthForHorizontalDisplay;
      return {
        maxTimeLabelWidth: maxTimeLabelWidthWithoutNegativeValue === 0 ? null : maxTimeLabelWidthWithoutNegativeValue,
        displayVerticalVolumeSlider
      };
    }, [allowFullScreen, playerWidth]);
    return resizeInfo;
  };
  var gradientSteps = [
    0,
    0.013,
    0.049,
    0.104,
    0.175,
    0.259,
    0.352,
    0.45,
    0.55,
    0.648,
    0.741,
    0.825,
    0.896,
    0.951,
    0.987
  ];
  var gradientOpacities = [
    0,
    8.1,
    15.5,
    22.5,
    29,
    35.3,
    41.2,
    47.1,
    52.9,
    58.8,
    64.7,
    71,
    77.5,
    84.5,
    91.9
  ];
  var globalGradientOpacity = 1 / 0.7;
  var containerStyle2 = {
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 10,
    backgroundImage: `linear-gradient(to bottom,${gradientSteps.map((g, i) => {
      return `hsla(0, 0%, 0%, ${g}) ${gradientOpacities[i] * globalGradientOpacity}%`;
    }).join(", ")}, hsl(0, 0%, 0%) 100%)`,
    backgroundSize: "auto 145px",
    display: "flex",
    paddingRight: X_PADDING,
    paddingLeft: X_PADDING,
    flexDirection: "column",
    transition: "opacity 0.3s"
  };
  var controlsRow = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    WebkitUserSelect: "none"
  };
  var leftPartStyle = {
    display: "flex",
    flexDirection: "row",
    userSelect: "none",
    WebkitUserSelect: "none",
    alignItems: "center"
  };
  var xSpacer = {
    width: 12
  };
  var ySpacer = {
    height: 8
  };
  var flex1 = {
    flex: 1
  };
  var fullscreen = {};
  var Controls = ({
    durationInFrames,
    isFullscreen,
    fps,
    showVolumeControls,
    onFullscreenButtonClick,
    allowFullscreen,
    onExitFullscreenButtonClick,
    spaceKeyToPlayOrPause,
    onSeekEnd,
    onSeekStart,
    inFrame,
    outFrame,
    initiallyShowControls,
    canvasSize,
    renderPlayPauseButton,
    renderFullscreenButton,
    alwaysShowControls,
    showPlaybackRateControl,
    containerRef,
    buffering,
    hideControlsWhenPointerDoesntMove,
    onPointerDown,
    onDoubleClick,
    renderMuteButton,
    renderVolumeSlider,
    playing,
    toggle,
    renderCustomControls
  }) => {
    const playButtonRef = reactExports.useRef(null);
    const [supportsFullscreen, setSupportsFullscreen] = reactExports.useState(false);
    const hovered = useHoverState(containerRef, hideControlsWhenPointerDoesntMove);
    const { maxTimeLabelWidth, displayVerticalVolumeSlider } = useVideoControlsResize({
      allowFullscreen,
      playerWidth: (canvasSize == null ? void 0 : canvasSize.width) ?? 0
    });
    const [shouldShowInitially, setInitiallyShowControls] = reactExports.useState(() => {
      if (typeof initiallyShowControls === "boolean") {
        return initiallyShowControls;
      }
      if (typeof initiallyShowControls === "number") {
        if (initiallyShowControls % 1 !== 0) {
          throw new Error("initiallyShowControls must be an integer or a boolean");
        }
        if (Number.isNaN(initiallyShowControls)) {
          throw new Error("initiallyShowControls must not be NaN");
        }
        if (!Number.isFinite(initiallyShowControls)) {
          throw new Error("initiallyShowControls must be finite");
        }
        if (initiallyShowControls <= 0) {
          throw new Error("initiallyShowControls must be a positive integer");
        }
        return initiallyShowControls;
      }
      throw new TypeError("initiallyShowControls must be a number or a boolean");
    });
    const containerCss = reactExports.useMemo(() => {
      const shouldShow = hovered || !playing || shouldShowInitially || alwaysShowControls;
      return {
        ...containerStyle2,
        opacity: Number(shouldShow)
      };
    }, [hovered, shouldShowInitially, playing, alwaysShowControls]);
    reactExports.useEffect(() => {
      if (playButtonRef.current && spaceKeyToPlayOrPause) {
        playButtonRef.current.focus({
          preventScroll: true
        });
      }
    }, [playing, spaceKeyToPlayOrPause]);
    reactExports.useEffect(() => {
      setSupportsFullscreen((typeof document !== "undefined" && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) ?? false);
    }, []);
    reactExports.useEffect(() => {
      if (shouldShowInitially === false) {
        return;
      }
      const time = shouldShowInitially === true ? 2e3 : shouldShowInitially;
      const timeout = setTimeout(() => {
        setInitiallyShowControls(false);
      }, time);
      return () => {
        clearInterval(timeout);
      };
    }, [shouldShowInitially]);
    const playbackRates = reactExports.useMemo(() => {
      if (showPlaybackRateControl === true) {
        return [0.5, 0.8, 1, 1.2, 1.5, 1.8, 2, 2.5, 3];
      }
      if (Array.isArray(showPlaybackRateControl)) {
        for (const rate of showPlaybackRateControl) {
          if (typeof rate !== "number") {
            throw new Error("Every item in showPlaybackRateControl must be a number");
          }
          if (rate <= 0) {
            throw new Error("Every item in showPlaybackRateControl must be positive");
          }
        }
        return showPlaybackRateControl;
      }
      return null;
    }, [showPlaybackRateControl]);
    const customControlsElement = renderCustomControls ? renderCustomControls() : null;
    const ref = reactExports.useRef(null);
    const flexRef = reactExports.useRef(null);
    const onPointerDownIfContainer = reactExports.useCallback((e) => {
      if (e.target === ref.current || e.target === flexRef.current) {
        onPointerDown == null ? void 0 : onPointerDown(e);
      }
    }, [onPointerDown]);
    const onDoubleClickIfContainer = reactExports.useCallback((e) => {
      if (e.target === ref.current || e.target === flexRef.current) {
        onDoubleClick == null ? void 0 : onDoubleClick(e);
      }
    }, [onDoubleClick]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      ref,
      style: containerCss,
      onPointerDown: onPointerDownIfContainer,
      onDoubleClick: onDoubleClickIfContainer,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          ref: flexRef,
          style: controlsRow,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              style: leftPartStyle,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                  ref: playButtonRef,
                  type: "button",
                  style: playerButtonStyle,
                  onClick: toggle,
                  "aria-label": playing ? "Pause video" : "Play video",
                  title: playing ? "Pause video" : "Play video",
                  children: renderPlayPauseButton === null ? /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultPlayPauseButton, {
                    buffering,
                    playing
                  }) : renderPlayPauseButton({
                    playing,
                    isBuffering: buffering
                  }) ?? /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultPlayPauseButton, {
                    buffering,
                    playing
                  })
                }),
                showVolumeControls ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      style: xSpacer
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MediaVolumeSlider, {
                      renderMuteButton,
                      renderVolumeSlider,
                      displayVerticalVolumeSlider
                    })
                  ]
                }) : null,
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  style: xSpacer
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerTimeLabel, {
                  durationInFrames,
                  fps,
                  maxTimeLabelWidth
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  style: xSpacer
                })
              ]
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              style: flex1
            }),
            customControlsElement,
            customControlsElement && playbackRates && canvasSize ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              style: xSpacer
            }) : null,
            playbackRates && canvasSize && /* @__PURE__ */ jsxRuntimeExports.jsx(PlaybackrateControl, {
              canvasSize,
              playbackRates
            }),
            playbackRates && supportsFullscreen && allowFullscreen ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              style: xSpacer
            }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              style: fullscreen,
              children: supportsFullscreen && allowFullscreen ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                type: "button",
                "aria-label": isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                title: isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                style: playerButtonStyle,
                onClick: isFullscreen ? onExitFullscreenButtonClick : onFullscreenButtonClick,
                children: renderFullscreenButton === null ? /* @__PURE__ */ jsxRuntimeExports.jsx(FullscreenIcon, {
                  isFullscreen
                }) : renderFullscreenButton({ isFullscreen })
              }) : null
            })
          ]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          style: ySpacer
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerSeekBar, {
          onSeekEnd,
          onSeekStart,
          durationInFrames,
          inFrame,
          outFrame
        })
      ]
    });
  };
  var IS_NODE = typeof document === "undefined";
  var cancellablePromise = (promise) => {
    let isCanceled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then((value) => {
        if (isCanceled) {
          reject({ isCanceled, value });
          return;
        }
        resolve(value);
      }).catch((error2) => {
        reject({ isCanceled, error: error2 });
      });
    });
    return {
      promise: wrappedPromise,
      cancel: () => {
        isCanceled = true;
      }
    };
  };
  var delay = (n2) => new Promise((resolve) => setTimeout(resolve, n2));
  var useCancellablePromises = () => {
    const pendingPromises = reactExports.useRef([]);
    const appendPendingPromise = reactExports.useCallback((promise) => {
      pendingPromises.current = [...pendingPromises.current, promise];
    }, []);
    const removePendingPromise = reactExports.useCallback((promise) => {
      pendingPromises.current = pendingPromises.current.filter((p2) => p2 !== promise);
    }, []);
    const clearPendingPromises = reactExports.useCallback(() => pendingPromises.current.map((p2) => p2.cancel()), []);
    const api = reactExports.useMemo(() => ({
      appendPendingPromise,
      removePendingPromise,
      clearPendingPromises
    }), [appendPendingPromise, clearPendingPromises, removePendingPromise]);
    return api;
  };
  var useClickPreventionOnDoubleClick = (onClick, onDoubleClick, doubleClickToFullscreen) => {
    const api = useCancellablePromises();
    const handleClick = reactExports.useCallback(async (e) => {
      if (e instanceof PointerEvent ? e.pointerType === "touch" : e.nativeEvent.pointerType === "touch") {
        onClick(e);
        return;
      }
      api.clearPendingPromises();
      const waitForClick = cancellablePromise(delay(200));
      api.appendPendingPromise(waitForClick);
      try {
        await waitForClick.promise;
        api.removePendingPromise(waitForClick);
        onClick(e);
      } catch (errorInfo) {
        const info2 = errorInfo;
        api.removePendingPromise(waitForClick);
        if (!info2.isCanceled) {
          throw info2.error;
        }
      }
    }, [api, onClick]);
    const handlePointerDown = reactExports.useCallback(() => {
      document.addEventListener("pointerup", (newEvt) => {
        handleClick(newEvt);
      }, {
        once: true
      });
    }, [handleClick]);
    const handleDoubleClick = reactExports.useCallback(() => {
      api.clearPendingPromises();
      onDoubleClick();
    }, [api, onDoubleClick]);
    const returnValue = reactExports.useMemo(() => {
      if (!doubleClickToFullscreen) {
        return { handlePointerDown: onClick, handleDoubleClick: () => {
          return;
        } };
      }
      return { handlePointerDown, handleDoubleClick };
    }, [doubleClickToFullscreen, handleDoubleClick, handlePointerDown, onClick]);
    return returnValue;
  };
  var reactVersion = React14.version.split(".")[0];
  if (reactVersion === "0") {
    throw new Error(`Version ${reactVersion} of "react" is not supported by Remotion`);
  }
  var doesReactVersionSupportSuspense = parseInt(reactVersion, 10) >= 18;
  var PlayerUI = ({
    controls,
    style: style2,
    loop,
    autoPlay,
    allowFullscreen,
    inputProps,
    clickToPlay,
    showVolumeControls,
    doubleClickToFullscreen,
    spaceKeyToPlayOrPause,
    errorFallback,
    playbackRate,
    renderLoading,
    renderPoster,
    className: className2,
    moveToBeginningWhenEnded,
    showPosterWhenUnplayed,
    showPosterWhenEnded,
    showPosterWhenPaused,
    showPosterWhenBuffering,
    showPosterWhenBufferingAndPaused,
    inFrame,
    outFrame,
    initiallyShowControls,
    renderFullscreen: renderFullscreenButton,
    renderPlayPauseButton,
    renderMuteButton,
    renderVolumeSlider,
    renderCustomControls,
    alwaysShowControls,
    showPlaybackRateControl,
    posterFillMode,
    bufferStateDelayInMilliseconds,
    hideControlsWhenPointerDoesntMove,
    overflowVisible,
    browserMediaControlsBehavior,
    overrideInternalClassName,
    noSuspense
  }, ref) => {
    const config = Internals.useUnsafeVideoConfig();
    const video = Internals.useVideo();
    const container2 = reactExports.useRef(null);
    const canvasSize = useElementSize(container2, {
      triggerOnWindowResize: false,
      shouldApplyCssTransforms: false
    });
    const [hasPausedToResume, setHasPausedToResume] = reactExports.useState(false);
    const [shouldAutoplay, setShouldAutoPlay] = reactExports.useState(autoPlay);
    const [isFullscreen, setIsFullscreen] = reactExports.useState(() => false);
    const [seeking, setSeeking] = reactExports.useState(false);
    const [hasPlayed, setHasPlayed] = reactExports.useState(false);
    const supportsFullScreen = reactExports.useMemo(() => {
      if (typeof document === "undefined") {
        return false;
      }
      return Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    }, []);
    const player = usePlayerMethods();
    const playing = Internals.usePlaying();
    const frame = Internals.Timeline.useTimelinePosition();
    const play = reactExports.useCallback((e) => {
      if (player.isPlaying()) {
        return;
      }
      setHasPlayed(true);
      player.play(e);
    }, [player]);
    const { playerMuted, mediaVolume } = reactExports.useContext(Internals.MediaVolumeContext);
    reactExports.useEffect(() => {
      player.emitter.dispatchVolumeChange(mediaVolume);
    }, [player.emitter, mediaVolume]);
    const isMuted = playerMuted || mediaVolume === 0;
    reactExports.useEffect(() => {
      player.emitter.dispatchMuteChange({
        isMuted
      });
    }, [player.emitter, isMuted]);
    usePlayback({
      loop,
      playbackRate,
      moveToBeginningWhenEnded,
      inFrame,
      outFrame,
      getCurrentFrame: player.getCurrentFrame,
      browserMediaControlsBehavior,
      muted: isMuted
    });
    reactExports.useEffect(() => {
      if (hasPausedToResume && !playing) {
        setHasPausedToResume(false);
        play();
      }
    }, [hasPausedToResume, play, playing]);
    reactExports.useEffect(() => {
      const { current } = container2;
      if (!current) {
        return;
      }
      const onFullscreenChange = () => {
        const newValue = document.fullscreenElement === current || document.webkitFullscreenElement === current;
        setIsFullscreen(newValue);
      };
      document.addEventListener("fullscreenchange", onFullscreenChange);
      document.addEventListener("webkitfullscreenchange", onFullscreenChange);
      return () => {
        document.removeEventListener("fullscreenchange", onFullscreenChange);
        document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      };
    }, []);
    const toggle = reactExports.useCallback((e) => {
      if (player.isPlaying()) {
        player.pause();
      } else {
        play(e);
      }
    }, [play, player]);
    const requestFullscreen = reactExports.useCallback(() => {
      if (!allowFullscreen) {
        throw new Error("allowFullscreen is false");
      }
      if (!supportsFullScreen) {
        throw new Error("Browser doesnt support fullscreen");
      }
      if (!container2.current) {
        throw new Error("No player ref found");
      }
      if (container2.current.webkitRequestFullScreen) {
        container2.current.webkitRequestFullScreen();
      } else {
        container2.current.requestFullscreen();
      }
    }, [allowFullscreen, supportsFullScreen]);
    const exitFullscreen = reactExports.useCallback(() => {
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else {
        document.exitFullscreen();
      }
    }, []);
    reactExports.useEffect(() => {
      const { current } = container2;
      if (!current) {
        return;
      }
      const fullscreenChange = () => {
        const element = document.webkitFullscreenElement ?? document.fullscreenElement;
        if (element && element === container2.current) {
          player.emitter.dispatchFullscreenChange({
            isFullscreen: true
          });
        } else {
          player.emitter.dispatchFullscreenChange({
            isFullscreen: false
          });
        }
      };
      current.addEventListener("webkitfullscreenchange", fullscreenChange);
      current.addEventListener("fullscreenchange", fullscreenChange);
      return () => {
        current.removeEventListener("webkitfullscreenchange", fullscreenChange);
        current.removeEventListener("fullscreenchange", fullscreenChange);
      };
    }, [player.emitter]);
    const durationInFrames = (config == null ? void 0 : config.durationInFrames) ?? 1;
    const layout = reactExports.useMemo(() => {
      if (!config || !canvasSize) {
        return null;
      }
      return calculateCanvasTransformation({
        canvasSize,
        compositionHeight: config.height,
        compositionWidth: config.width,
        previewSize: "auto"
      });
    }, [canvasSize, config]);
    const scale = (layout == null ? void 0 : layout.scale) ?? 1;
    const initialScaleIgnored = reactExports.useRef(false);
    reactExports.useEffect(() => {
      if (!initialScaleIgnored.current) {
        initialScaleIgnored.current = true;
        return;
      }
      player.emitter.dispatchScaleChange(scale);
    }, [player.emitter, scale]);
    const { setMediaVolume, setPlayerMuted } = reactExports.useContext(Internals.SetMediaVolumeContext);
    const [showBufferIndicator, setShowBufferState] = reactExports.useState(false);
    reactExports.useEffect(() => {
      let timeout = null;
      let stopped = false;
      const onBuffer = () => {
        stopped = false;
        requestAnimationFrame(() => {
          if (bufferStateDelayInMilliseconds === 0) {
            setShowBufferState(true);
          } else {
            timeout = setTimeout(() => {
              if (!stopped) {
                setShowBufferState(true);
              }
            }, bufferStateDelayInMilliseconds);
          }
        });
      };
      const onResume = () => {
        requestAnimationFrame(() => {
          stopped = true;
          setShowBufferState(false);
          if (timeout) {
            clearTimeout(timeout);
          }
        });
      };
      player.emitter.addEventListener("waiting", onBuffer);
      player.emitter.addEventListener("resume", onResume);
      return () => {
        player.emitter.removeEventListener("waiting", onBuffer);
        player.emitter.removeEventListener("resume", onResume);
        setShowBufferState(false);
        if (timeout) {
          clearTimeout(timeout);
        }
        stopped = true;
      };
    }, [bufferStateDelayInMilliseconds, player.emitter]);
    reactExports.useImperativeHandle(ref, () => {
      const methods = {
        play,
        pause: () => {
          setHasPausedToResume(false);
          player.pause();
        },
        toggle,
        getContainerNode: () => container2.current,
        getCurrentFrame: player.getCurrentFrame,
        isPlaying: player.isPlaying,
        seekTo: (f2) => {
          const lastFrame = durationInFrames - 1;
          const frameToSeekTo = Math.max(0, Math.min(lastFrame, f2));
          if (player.isPlaying()) {
            const pauseToResume = frameToSeekTo !== lastFrame || loop;
            setHasPausedToResume(pauseToResume);
            player.pause();
          }
          if (frameToSeekTo === lastFrame && !loop) {
            player.emitter.dispatchEnded();
          }
          player.seek(frameToSeekTo);
        },
        isFullscreen: () => {
          const { current } = container2;
          if (!current) {
            return false;
          }
          return document.fullscreenElement === current || document.webkitFullscreenElement === current;
        },
        requestFullscreen,
        exitFullscreen,
        getVolume: () => {
          if (playerMuted) {
            return 0;
          }
          return mediaVolume;
        },
        setVolume: (vol) => {
          if (typeof vol !== "number") {
            throw new TypeError(`setVolume() takes a number, got value of type ${typeof vol}`);
          }
          if (isNaN(vol)) {
            throw new TypeError(`setVolume() got a number that is NaN. Volume must be between 0 and 1.`);
          }
          if (vol < 0 || vol > 1) {
            throw new TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${vol}`);
          }
          setMediaVolume(vol);
        },
        isMuted: () => isMuted,
        mute: () => {
          setPlayerMuted(true);
        },
        unmute: () => {
          setPlayerMuted(false);
        },
        getScale: () => scale,
        pauseAndReturnToPlayStart: () => {
          player.pauseAndReturnToPlayStart();
        }
      };
      return Object.assign(player.emitter, methods);
    }, [
      durationInFrames,
      exitFullscreen,
      loop,
      playerMuted,
      isMuted,
      mediaVolume,
      player,
      play,
      requestFullscreen,
      setPlayerMuted,
      setMediaVolume,
      toggle,
      scale
    ]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = reactExports.useMemo(() => {
      return calculateOuterStyle({
        canvasSize,
        config,
        style: style2,
        overflowVisible,
        layout
      });
    }, [canvasSize, config, layout, overflowVisible, style2]);
    const outer = reactExports.useMemo(() => {
      return calculateOuter({ config, layout, scale, overflowVisible });
    }, [config, layout, overflowVisible, scale]);
    const containerStyle3 = reactExports.useMemo(() => {
      return calculateContainerStyle({
        config,
        layout,
        scale,
        overflowVisible
      });
    }, [config, layout, overflowVisible, scale]);
    const playerPause = player.pause;
    const playerDispatchError = player.emitter.dispatchError;
    const onError = reactExports.useCallback((error2) => {
      playerPause();
      playerDispatchError(error2);
    }, [playerDispatchError, playerPause]);
    const onFullscreenButtonClick = reactExports.useCallback((e) => {
      e.stopPropagation();
      requestFullscreen();
    }, [requestFullscreen]);
    const onExitFullscreenButtonClick = reactExports.useCallback((e) => {
      e.stopPropagation();
      exitFullscreen();
    }, [exitFullscreen]);
    const onSingleClick = reactExports.useCallback((e) => {
      const rightClick = e instanceof MouseEvent ? e.button === 2 : e.nativeEvent.button;
      if (rightClick) {
        return;
      }
      toggle(e);
    }, [toggle]);
    const onSeekStart = reactExports.useCallback(() => {
      setSeeking(true);
    }, []);
    const onSeekEnd = reactExports.useCallback(() => {
      setSeeking(false);
    }, []);
    const onDoubleClick = reactExports.useCallback(() => {
      if (isFullscreen) {
        exitFullscreen();
      } else {
        requestFullscreen();
      }
    }, [exitFullscreen, isFullscreen, requestFullscreen]);
    const { handlePointerDown, handleDoubleClick } = useClickPreventionOnDoubleClick(onSingleClick, onDoubleClick, doubleClickToFullscreen && allowFullscreen && supportsFullScreen);
    reactExports.useEffect(() => {
      if (shouldAutoplay) {
        setHasPlayed(true);
        player.playAsAutoPlay();
        setShouldAutoPlay(false);
      }
    }, [player, shouldAutoplay]);
    const loadingMarkup = reactExports.useMemo(() => {
      return renderLoading ? renderLoading({
        height: outerStyle.height,
        width: outerStyle.width,
        isBuffering: showBufferIndicator
      }) : null;
    }, [outerStyle.height, outerStyle.width, renderLoading, showBufferIndicator]);
    const currentScale = reactExports.useMemo(() => {
      return {
        type: "scale",
        scale
      };
    }, [scale]);
    if (!config) {
      return null;
    }
    const poster = renderPoster ? renderPoster({
      height: posterFillMode === "player-size" ? outerStyle.height : config.height,
      width: posterFillMode === "player-size" ? outerStyle.width : config.width,
      isBuffering: showBufferIndicator
    }) : null;
    if (poster === void 0) {
      throw new TypeError("renderPoster() must return a React element, but undefined was returned");
    }
    const shouldShowPoster = poster && [
      showPosterWhenPaused && !playing && !seeking,
      showPosterWhenEnded && frame === durationInFrames - 1 && !playing,
      showPosterWhenUnplayed && !hasPlayed && !playing,
      showPosterWhenBuffering && showBufferIndicator && playing,
      showPosterWhenBufferingAndPaused && showBufferIndicator && !playing
    ].some(Boolean);
    const { left, top, width, height, ...outerWithoutScale } = outer;
    const content2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          style: outer,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              style: containerStyle3,
              className: playerCssClassname(overrideInternalClassName),
              children: [
                VideoComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {
                  onError,
                  errorFallback,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.CurrentScaleContext.Provider, {
                    value: currentScale,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoComponent, {
                      ...(video == null ? void 0 : video.props) ?? {},
                      ...inputProps ?? {}
                    })
                  })
                }) : null,
                shouldShowPoster && posterFillMode === "composition-size" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  style: {
                    ...outerWithoutScale,
                    width: config.width,
                    height: config.height
                  },
                  onPointerDown: clickToPlay ? handlePointerDown : void 0,
                  onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
                  children: poster
                }) : null
              ]
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(RenderWarningIfBlacklist, {})
          ]
        }),
        shouldShowPoster && posterFillMode === "player-size" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          style: outer,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          children: poster
        }) : null,
        controls ? /* @__PURE__ */ jsxRuntimeExports.jsx(Controls, {
          fps: config.fps,
          playing,
          toggle,
          durationInFrames: config.durationInFrames,
          containerRef: container2,
          onFullscreenButtonClick,
          isFullscreen,
          allowFullscreen,
          showVolumeControls,
          onExitFullscreenButtonClick,
          spaceKeyToPlayOrPause,
          onSeekEnd,
          onSeekStart,
          inFrame,
          outFrame,
          initiallyShowControls,
          canvasSize,
          renderFullscreenButton,
          renderPlayPauseButton,
          alwaysShowControls,
          showPlaybackRateControl,
          buffering: showBufferIndicator,
          hideControlsWhenPointerDoesntMove,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          renderMuteButton,
          renderVolumeSlider,
          renderCustomControls
        }) : null
      ]
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        ref: container2,
        style: outerStyle,
        className: className2,
        children: content2
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref: container2,
      style: outerStyle,
      className: className2,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
        fallback: loadingMarkup,
        children: content2
      })
    });
  };
  var PlayerUI_default = reactExports.forwardRef(PlayerUI);
  var DEFAULT_VOLUME_PERSISTENCE_KEY = "remotion.volumePreference";
  var persistVolume = (volume, logLevel, volumePersistenceKey) => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTENCE_KEY, String(volume));
    } catch (e) {
      Internals.Log.error({ logLevel, tag: null }, "Could not persist volume", e);
    }
  };
  var getPreferredVolume = (volumePersistenceKey) => {
    if (typeof window === "undefined") {
      return 1;
    }
    try {
      const val = window.localStorage.getItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTENCE_KEY);
      return val ? Number(val) : 1;
    } catch {
      return 1;
    }
  };
  var PLAYER_COMP_ID = "player-comp";
  var SharedPlayerContexts = ({
    children,
    timelineContext,
    playbackRateContext,
    fps,
    compositionHeight,
    compositionWidth,
    durationInFrames,
    component,
    numberOfSharedAudioTags,
    initiallyMuted,
    logLevel,
    audioLatencyHint,
    sampleRate,
    volumePersistenceKey,
    initialVolume,
    inputProps,
    audioEnabled,
    _experimentalKeepAudioContextAlive
  }) => {
    const persistVolumeToStorage = initialVolume === void 0;
    const compositionManagerContext = reactExports.useMemo(() => {
      const context = {
        compositions: [
          {
            component,
            durationInFrames,
            height: compositionHeight,
            width: compositionWidth,
            fps,
            id: PLAYER_COMP_ID,
            order: null,
            folderName: null,
            parentFolderName: null,
            schema: null,
            calculateMetadata: null,
            stack: null
          }
        ],
        folders: [],
        currentAssetMetadata: null,
        currentCompositionMetadata: {
          defaultCodec: null,
          defaultOutName: null,
          defaultPixelFormat: null,
          defaultProResProfile: null,
          defaultSampleRate: null,
          defaultVideoImageFormat: null,
          durationInFrames,
          fps,
          height: compositionHeight,
          width: compositionWidth,
          props: inputProps
        },
        canvasContent: { type: "composition", compositionId: "player-comp" }
      };
      return context;
    }, [
      component,
      durationInFrames,
      compositionHeight,
      compositionWidth,
      fps,
      inputProps
    ]);
    const [playerMuted, setPlayerMuted] = reactExports.useState(() => initiallyMuted);
    const [mediaVolume, setMediaVolume] = reactExports.useState(() => persistVolumeToStorage ? getPreferredVolume(volumePersistenceKey ?? null) : initialVolume);
    const mediaVolumeContextValue = reactExports.useMemo(() => {
      return {
        playerMuted,
        mediaVolume
      };
    }, [playerMuted, mediaVolume]);
    const audioContextWasCreated = reactExports.useRef(false);
    const shouldCreateAudioContext = audioContextWasCreated.current || audioEnabled && !playerMuted && mediaVolume > 0;
    audioContextWasCreated.current = shouldCreateAudioContext;
    const setMediaVolumeAndPersist = reactExports.useCallback((vol) => {
      setMediaVolume(vol);
      if (persistVolumeToStorage) {
        persistVolume(vol, logLevel, volumePersistenceKey ?? null);
      }
    }, [persistVolumeToStorage, logLevel, volumePersistenceKey]);
    const setMediaVolumeContextValue = reactExports.useMemo(() => {
      return {
        setPlayerMuted,
        setMediaVolume: setMediaVolumeAndPersist
      };
    }, [setMediaVolumeAndPersist]);
    const logLevelContext = reactExports.useMemo(() => {
      return {
        logLevel,
        mountTime: Date.now()
      };
    }, [logLevel]);
    const env = reactExports.useMemo(() => {
      return {
        isPlayer: true,
        isRendering: false,
        isStudio: false,
        isClientSideRendering: false,
        isReadOnlyStudio: false
      };
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.RemotionEnvironmentContext.Provider, {
      value: env,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.LogLevelContext.Provider, {
        value: logLevelContext,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.CanUseRemotionHooksProvider, {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.AbsoluteTimeContext.Provider, {
            value: timelineContext,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.PlaybackRateContext.Provider, {
              value: playbackRateContext,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.TimelineContext.Provider, {
                value: timelineContext,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.CompositionManager.Provider, {
                  value: compositionManagerContext,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.PrefetchProvider, {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.DurationsContextProvider, {
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.MediaVolumeContext.Provider, {
                        value: mediaVolumeContextValue,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.SetMediaVolumeContext.Provider, {
                          value: setMediaVolumeContextValue,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.BufferingProvider, {
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.SharedAudioContextProvider, {
                              audioLatencyHint,
                              audioEnabled: shouldCreateAudioContext,
                              previewSampleRate: sampleRate,
                              _experimentalKeepAudioContextAlive,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.SharedAudioTagsContextProvider, {
                                numberOfAudioTags: numberOfSharedAudioTags,
                                children
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var warningShown = false;
  var acknowledgeRemotionLicenseMessage = (acknowledge, logLevel) => {
    if (acknowledge) {
      return;
    }
    if (warningShown) {
      return;
    }
    warningShown = true;
    Internals.Log.warn({ logLevel, tag: null }, "Note: Some companies are required to obtain a license to use Remotion. See: https://remotion.dev/license\nPass the `acknowledgeRemotionLicense` prop to `<Player />` function to make this message disappear.");
  };
  var validateSingleFrame = (frame, variableName) => {
    if (typeof frame === "undefined" || frame === null) {
      return frame ?? null;
    }
    if (typeof frame !== "number") {
      throw new TypeError(`"${variableName}" must be a number, but is ${JSON.stringify(frame)}`);
    }
    if (Number.isNaN(frame)) {
      throw new TypeError(`"${variableName}" must not be NaN, but is ${JSON.stringify(frame)}`);
    }
    if (!Number.isFinite(frame)) {
      throw new TypeError(`"${variableName}" must be finite, but is ${JSON.stringify(frame)}`);
    }
    if (frame % 1 !== 0) {
      throw new TypeError(`"${variableName}" must be an integer, but is ${JSON.stringify(frame)}`);
    }
    return frame;
  };
  var validateInOutFrames = ({
    inFrame,
    durationInFrames,
    outFrame
  }) => {
    const validatedInFrame = validateSingleFrame(inFrame, "inFrame");
    const validatedOutFrame = validateSingleFrame(outFrame, "outFrame");
    if (validatedInFrame === null && validatedOutFrame === null) {
      return;
    }
    if (validatedInFrame !== null && validatedInFrame > durationInFrames - 1) {
      throw new Error("inFrame must be less than (durationInFrames - 1), but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame > durationInFrames - 1) {
      throw new Error("outFrame must be less than (durationInFrames - 1), but is " + validatedOutFrame);
    }
    if (validatedInFrame !== null && validatedInFrame < 0) {
      throw new Error("inFrame must be greater than 0, but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame <= 0) {
      throw new Error(`outFrame must be greater than 0, but is ${validatedOutFrame}. If you want to render a single frame, use <Thumbnail /> instead.`);
    }
    if (validatedOutFrame !== null && validatedInFrame !== null && validatedOutFrame <= validatedInFrame) {
      throw new Error("outFrame must be greater than inFrame, but is " + validatedOutFrame + " <= " + validatedInFrame);
    }
  };
  var validateInitialFrame = ({
    initialFrame,
    durationInFrames
  }) => {
    if (typeof durationInFrames !== "number") {
      throw new Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(durationInFrames)}`);
    }
    if (typeof initialFrame === "undefined") {
      return;
    }
    if (typeof initialFrame !== "number") {
      throw new Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(initialFrame)}`);
    }
    if (Number.isNaN(initialFrame)) {
      throw new Error(`\`initialFrame\` must be a number, but is NaN`);
    }
    if (!Number.isFinite(initialFrame)) {
      throw new Error(`\`initialFrame\` must be a number, but is Infinity`);
    }
    if (initialFrame % 1 !== 0) {
      throw new Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(initialFrame)}`);
    }
    if (initialFrame > durationInFrames - 1) {
      throw new Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(initialFrame)}`);
    }
  };
  var validatePlaybackRate = (playbackRate) => {
    if (playbackRate === void 0) {
      return;
    }
    if (playbackRate > 10) {
      throw new Error(`The highest possible playback rate is 10. You passed: ${playbackRate}`);
    }
    if (playbackRate < -10) {
      throw new Error(`The lowest possible playback rate is -10. You passed: ${playbackRate}`);
    }
    if (playbackRate === 0) {
      throw new Error(`A playback rate of 0 is not supported.`);
    }
  };
  var validateFps = NoReactInternals.validateFps;
  var validateDimension = NoReactInternals.validateDimension;
  var validateDurationInFrames = NoReactInternals.validateDurationInFrames;
  var validateDefaultAndInputProps = NoReactInternals.validateDefaultAndInputProps;
  var componentOrNullIfLazy = (props) => {
    if ("component" in props) {
      return props.component;
    }
    return null;
  };
  var TimelineSequenceObserverComponent = ({ onTimelineSequenceChange }) => {
    const { sequences } = React14.useContext(Internals.SequenceManager);
    reactExports.useEffect(() => {
      onTimelineSequenceChange(sequences);
    }, [onTimelineSequenceChange, sequences]);
    return null;
  };
  var PlayerFn = ({
    durationInFrames,
    compositionHeight,
    compositionWidth,
    fps,
    inputProps,
    style: style2,
    controls = false,
    loop = false,
    autoPlay = false,
    showVolumeControls = true,
    allowFullscreen = true,
    clickToPlay,
    doubleClickToFullscreen = false,
    spaceKeyToPlayOrPause = true,
    moveToBeginningWhenEnded = true,
    numberOfSharedAudioTags = 5,
    errorFallback = () => "⚠️",
    playbackRate = 1,
    renderLoading,
    className: className2,
    showPosterWhenUnplayed,
    showPosterWhenEnded,
    showPosterWhenPaused,
    showPosterWhenBuffering,
    showPosterWhenBufferingAndPaused,
    initialFrame,
    renderPoster,
    inFrame,
    outFrame,
    initiallyShowControls,
    renderFullscreenButton,
    renderPlayPauseButton,
    renderVolumeSlider,
    renderCustomControls,
    alwaysShowControls = false,
    initiallyMuted = false,
    showPlaybackRateControl = false,
    posterFillMode = "player-size",
    bufferStateDelayInMilliseconds,
    hideControlsWhenPointerDoesntMove = true,
    overflowVisible = false,
    renderMuteButton,
    browserMediaControlsBehavior: passedBrowserMediaControlsBehavior,
    overrideInternalClassName,
    logLevel = "info",
    noSuspense,
    acknowledgeRemotionLicense,
    audioLatencyHint = "playback",
    sampleRate = 48e3,
    volumePersistenceKey,
    initialVolume,
    _experimentalKeepAudioContextAlive = false,
    ...componentProps
  }, ref) => {
    if (typeof window !== "undefined") {
      window.remotion_isPlayer = true;
    }
    const onTimelineSequenceChange = React14.useContext(TimelineSequenceObserverContext);
    if (componentProps.defaultProps !== void 0) {
      throw new Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");
    }
    const componentForValidation = componentOrNullIfLazy(componentProps);
    if ((componentForValidation == null ? void 0 : componentForValidation.type) === Composition) {
      throw new TypeError(`'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    if (componentForValidation === Composition) {
      throw new TypeError(`'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    reactExports.useState(() => acknowledgeRemotionLicenseMessage(Boolean(acknowledgeRemotionLicense), logLevel));
    const component = Internals.useLazyComponent({
      compProps: componentProps,
      componentName: "Player",
      noSuspense: Boolean(noSuspense)
    });
    validateInitialFrame({ initialFrame, durationInFrames });
    const [frame, setFrame] = reactExports.useState(() => ({
      [PLAYER_COMP_ID]: initialFrame ?? 0
    }));
    const frameRef = reactExports.useRef(frame);
    frameRef.current = frame;
    const rootRef = reactExports.useRef(null);
    const audioAndVideoTags = reactExports.useRef([]);
    const playingStore = reactExports.useMemo(() => Internals.createRuntimeValueStore({ playing: false }), []);
    const bufferingStore = reactExports.useMemo(() => Internals.createRuntimeValueStore({ buffering: false }), []);
    const readIsPlaying = reactExports.useCallback(() => playingStore.store.getSnapshot().playing, [playingStore]);
    const readIsBuffering = reactExports.useCallback(() => bufferingStore.store.getSnapshot().buffering, [bufferingStore]);
    const [currentPlaybackRate, setCurrentPlaybackRate] = reactExports.useState(playbackRate);
    if (typeof compositionHeight !== "number") {
      throw new TypeError(`'compositionHeight' must be a number but got '${typeof compositionHeight}' instead`);
    }
    if (typeof compositionWidth !== "number") {
      throw new TypeError(`'compositionWidth' must be a number but got '${typeof compositionWidth}' instead`);
    }
    validateDimension(compositionHeight, "compositionHeight", "of the <Player /> component");
    validateDimension(compositionWidth, "compositionWidth", "of the <Player /> component");
    validateDurationInFrames(durationInFrames, {
      component: "of the <Player/> component",
      allowFloats: false
    });
    validateFps(fps, "as a prop of the <Player/> component", false);
    validateDefaultAndInputProps(inputProps, "inputProps", null);
    validateInOutFrames({
      durationInFrames,
      inFrame,
      outFrame
    });
    if (typeof controls !== "boolean" && typeof controls !== "undefined") {
      throw new TypeError(`'controls' must be a boolean or undefined but got '${typeof controls}' instead`);
    }
    if (typeof autoPlay !== "boolean" && typeof autoPlay !== "undefined") {
      throw new TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof autoPlay}' instead`);
    }
    if (typeof loop !== "boolean" && typeof loop !== "undefined") {
      throw new TypeError(`'loop' must be a boolean or undefined but got '${typeof loop}' instead`);
    }
    if (typeof doubleClickToFullscreen !== "boolean" && typeof doubleClickToFullscreen !== "undefined") {
      throw new TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof doubleClickToFullscreen}' instead`);
    }
    if (typeof showVolumeControls !== "boolean" && typeof showVolumeControls !== "undefined") {
      throw new TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof showVolumeControls}' instead`);
    }
    if (typeof allowFullscreen !== "boolean" && typeof allowFullscreen !== "undefined") {
      throw new TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof allowFullscreen}' instead`);
    }
    if (typeof clickToPlay !== "boolean" && typeof clickToPlay !== "undefined") {
      throw new TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof clickToPlay}' instead`);
    }
    if (typeof spaceKeyToPlayOrPause !== "boolean" && typeof spaceKeyToPlayOrPause !== "undefined") {
      throw new TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof spaceKeyToPlayOrPause}' instead`);
    }
    if (typeof sampleRate !== "number" || !Number.isFinite(sampleRate) || Number.isNaN(sampleRate) || sampleRate <= 0 || sampleRate % 1 !== 0) {
      throw new TypeError(`'sampleRate' must be a positive integer but got '${sampleRate}' instead`);
    }
    if (typeof initialVolume !== "undefined" && typeof initialVolume !== "number") {
      throw new TypeError(`'initialVolume' must be a number or undefined but got '${typeof initialVolume}' instead`);
    }
    if (typeof initialVolume === "number" && (!Number.isFinite(initialVolume) || Number.isNaN(initialVolume) || initialVolume < 0 || initialVolume > 1)) {
      throw new TypeError(`'initialVolume' must be between 0 and 1 but got '${initialVolume}' instead`);
    }
    if (typeof numberOfSharedAudioTags !== "number" || numberOfSharedAudioTags % 1 !== 0 || !Number.isFinite(numberOfSharedAudioTags) || Number.isNaN(numberOfSharedAudioTags) || numberOfSharedAudioTags < 0) {
      throw new TypeError(`'numberOfSharedAudioTags' must be an integer but got '${numberOfSharedAudioTags}' instead`);
    }
    validatePlaybackRate(currentPlaybackRate);
    reactExports.useEffect(() => {
      setCurrentPlaybackRate(playbackRate);
    }, [playbackRate]);
    reactExports.useImperativeHandle(ref, () => rootRef.current, []);
    reactExports.useState(() => {
      Internals.playbackLogging({
        logLevel,
        message: `[player] Mounting <Player>. User agent = ${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
        tag: "player",
        mountTime: Date.now()
      });
    });
    const timelineContextValue = reactExports.useMemo(() => {
      return {
        frame,
        isPlaying: readIsPlaying,
        audioAndVideoTags
      };
    }, [frame, readIsPlaying]);
    const playbackRateContextValue = reactExports.useMemo(() => {
      return {
        playbackRate: currentPlaybackRate,
        setPlaybackRate: setCurrentPlaybackRate
      };
    }, [currentPlaybackRate]);
    const setTimelineContextValue = reactExports.useMemo(() => {
      return {
        setFrame,
        setPlaying: (updater) => {
          const current = playingStore.store.getSnapshot().playing;
          const next = typeof updater === "function" ? updater(current) : updater;
          if (current !== next) {
            playingStore.setSnapshot({ playing: next });
          }
        },
        setBuffering: (buffering) => {
          if (readIsBuffering() !== buffering) {
            bufferingStore.setSnapshot({ buffering });
          }
        },
        subscribePlaying: playingStore.store.subscribe,
        subscribeBuffering: bufferingStore.store.subscribe,
        isPlaying: readIsPlaying,
        isBuffering: readIsBuffering,
        frameRef,
        audioAndVideoTags
      };
    }, [
      bufferingStore,
      setFrame,
      frameRef,
      playingStore,
      readIsBuffering,
      readIsPlaying
    ]);
    if (typeof window !== "undefined") {
      reactExports.useLayoutEffect(() => {
        Internals.CSSUtils.injectCSS(Internals.CSSUtils.makeDefaultPreviewCSS(`.${playerCssClassname(overrideInternalClassName)}`, "#fff"));
      }, [overrideInternalClassName]);
    }
    const actualInputProps = reactExports.useMemo(() => inputProps ?? {}, [inputProps]);
    const browserMediaControlsBehavior = reactExports.useMemo(() => {
      return passedBrowserMediaControlsBehavior ?? {
        mode: "prevent-media-session"
      };
    }, [passedBrowserMediaControlsBehavior]);
    const player = /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.IsPlayerContextProvider, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.SetTimelineContext.Provider, {
        value: setTimelineContextValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SharedPlayerContexts, {
          timelineContext: timelineContextValue,
          playbackRateContext: playbackRateContextValue,
          component,
          compositionHeight,
          compositionWidth,
          durationInFrames,
          fps,
          numberOfSharedAudioTags,
          initiallyMuted,
          logLevel,
          audioLatencyHint,
          sampleRate,
          _experimentalKeepAudioContextAlive,
          volumePersistenceKey,
          initialVolume,
          inputProps: actualInputProps,
          audioEnabled: true,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerEmitterProvider, {
            currentPlaybackRate,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerUI_default, {
              ref: rootRef,
              posterFillMode,
              renderLoading,
              autoPlay: Boolean(autoPlay),
              loop: Boolean(loop),
              controls: Boolean(controls),
              errorFallback,
              style: style2,
              inputProps: actualInputProps,
              allowFullscreen: Boolean(allowFullscreen),
              moveToBeginningWhenEnded: Boolean(moveToBeginningWhenEnded),
              clickToPlay: typeof clickToPlay === "boolean" ? clickToPlay : Boolean(controls),
              showVolumeControls: Boolean(showVolumeControls),
              doubleClickToFullscreen: Boolean(doubleClickToFullscreen),
              spaceKeyToPlayOrPause: Boolean(spaceKeyToPlayOrPause),
              playbackRate: currentPlaybackRate,
              className: className2 ?? void 0,
              showPosterWhenUnplayed: Boolean(showPosterWhenUnplayed),
              showPosterWhenEnded: Boolean(showPosterWhenEnded),
              showPosterWhenPaused: Boolean(showPosterWhenPaused),
              showPosterWhenBuffering: Boolean(showPosterWhenBuffering),
              showPosterWhenBufferingAndPaused: Boolean(showPosterWhenBufferingAndPaused),
              renderPoster,
              inFrame: inFrame ?? null,
              outFrame: outFrame ?? null,
              initiallyShowControls: initiallyShowControls ?? true,
              renderFullscreen: renderFullscreenButton ?? null,
              renderPlayPauseButton: renderPlayPauseButton ?? null,
              renderMuteButton: renderMuteButton ?? null,
              renderVolumeSlider: renderVolumeSlider ?? null,
              renderCustomControls: renderCustomControls ?? null,
              alwaysShowControls,
              showPlaybackRateControl,
              bufferStateDelayInMilliseconds: bufferStateDelayInMilliseconds ?? 300,
              hideControlsWhenPointerDoesntMove,
              overflowVisible,
              browserMediaControlsBehavior,
              overrideInternalClassName: overrideInternalClassName ?? void 0,
              noSuspense: Boolean(noSuspense)
            })
          })
        })
      })
    });
    if (!onTimelineSequenceChange) {
      return player;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.SequenceRegistrationContext.Provider, {
      value: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Internals.SequenceManagerProvider, {
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineSequenceObserverComponent, {
            onTimelineSequenceChange
          }),
          player
        ]
      })
    });
  };
  var forward = reactExports.forwardRef;
  var Player = forward(PlayerFn);
  var useThumbnail = () => {
    const emitter = reactExports.useContext(ThumbnailEmitterContext);
    if (!emitter) {
      throw new TypeError("Expected Player event emitter context");
    }
    const returnValue = reactExports.useMemo(() => {
      return {
        emitter
      };
    }, [emitter]);
    return returnValue;
  };
  var reactVersion2 = React14.version.split(".")[0];
  if (reactVersion2 === "0") {
    throw new Error(`Version ${reactVersion2} of "react" is not supported by Remotion`);
  }
  var doesReactVersionSupportSuspense2 = parseInt(reactVersion2, 10) >= 18;
  var ThumbnailUI = ({
    style: style2,
    inputProps,
    errorFallback,
    renderLoading,
    className: className2,
    overflowVisible,
    noSuspense,
    overrideInternalClassName
  }, ref) => {
    const config = Internals.useUnsafeVideoConfig();
    const video = Internals.useVideo();
    const container2 = reactExports.useRef(null);
    const canvasSize = useElementSize(container2, {
      triggerOnWindowResize: false,
      shouldApplyCssTransforms: false
    });
    const layout = reactExports.useMemo(() => {
      if (!config || !canvasSize) {
        return null;
      }
      return calculateCanvasTransformation({
        canvasSize,
        compositionHeight: config.height,
        compositionWidth: config.width,
        previewSize: "auto"
      });
    }, [canvasSize, config]);
    const scale = (layout == null ? void 0 : layout.scale) ?? 1;
    const thumbnail = useThumbnail();
    useBufferStateEmitter(thumbnail.emitter);
    reactExports.useImperativeHandle(ref, () => {
      const methods = {
        getContainerNode: () => container2.current,
        getScale: () => scale
      };
      return Object.assign(thumbnail.emitter, methods);
    }, [scale, thumbnail.emitter]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = reactExports.useMemo(() => {
      return calculateOuterStyle({
        config,
        style: style2,
        canvasSize,
        overflowVisible,
        layout
      });
    }, [canvasSize, config, layout, overflowVisible, style2]);
    const outer = reactExports.useMemo(() => {
      return calculateOuter({ config, layout, scale, overflowVisible });
    }, [config, layout, overflowVisible, scale]);
    const containerStyle3 = reactExports.useMemo(() => {
      return calculateContainerStyle({
        config,
        layout,
        scale,
        overflowVisible
      });
    }, [config, layout, overflowVisible, scale]);
    const onError = reactExports.useCallback((error2) => {
      thumbnail.emitter.dispatchError(error2);
    }, [thumbnail.emitter]);
    const loadingMarkup = reactExports.useMemo(() => {
      return renderLoading ? renderLoading({
        height: outerStyle.height,
        width: outerStyle.width,
        isBuffering: false
      }) : null;
    }, [outerStyle.height, outerStyle.width, renderLoading]);
    const currentScaleContext = reactExports.useMemo(() => {
      return {
        type: "scale",
        scale
      };
    }, [scale]);
    if (!config) {
      return null;
    }
    const content2 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      style: outer,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        style: containerStyle3,
        className: playerCssClassname(overrideInternalClassName),
        children: VideoComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {
          onError,
          errorFallback,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.CurrentScaleContext.Provider, {
            value: currentScaleContext,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoComponent, {
              ...(video == null ? void 0 : video.props) ?? {},
              ...inputProps ?? {}
            })
          })
        }) : null
      })
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense2) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        ref: container2,
        style: outerStyle,
        className: className2,
        children: content2
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref: container2,
      style: outerStyle,
      className: className2,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
        fallback: loadingMarkup,
        children: content2
      })
    });
  };
  var ThumbnailUI_default = reactExports.forwardRef(ThumbnailUI);
  var ThumbnailFn = ({
    frameToDisplay,
    style: style2,
    inputProps,
    compositionHeight,
    compositionWidth,
    durationInFrames,
    fps,
    className: className2,
    errorFallback = () => "⚠️",
    renderLoading,
    overflowVisible = false,
    overrideInternalClassName,
    logLevel = "info",
    noSuspense,
    ...componentProps
  }, ref) => {
    if (typeof window !== "undefined") {
      reactExports.useLayoutEffect(() => {
        window.remotion_isPlayer = true;
      }, []);
    }
    const rootRef = reactExports.useRef(null);
    const audioAndVideoTags = reactExports.useRef([]);
    const bufferingStore = reactExports.useMemo(() => Internals.createRuntimeValueStore({ buffering: false }), []);
    const timelineState = reactExports.useMemo(() => {
      const value = {
        isPlaying: () => false,
        frame: {
          [PLAYER_COMP_ID]: frameToDisplay
        },
        audioAndVideoTags
      };
      return value;
    }, [frameToDisplay]);
    const playbackRateContext = reactExports.useMemo(() => {
      return {
        playbackRate: 1,
        setPlaybackRate: () => {
          throw new Error("thumbnail");
        }
      };
    }, []);
    const frameRef = reactExports.useRef(timelineState.frame);
    frameRef.current = timelineState.frame;
    const setTimelineContext = reactExports.useMemo(() => {
      return {
        setFrame: () => {
          return;
        },
        setPlaying: () => {
          return;
        },
        setBuffering: (buffering) => {
          if (bufferingStore.store.getSnapshot().buffering !== buffering) {
            bufferingStore.setSnapshot({ buffering });
          }
        },
        subscribePlaying: () => () => {
          return;
        },
        subscribeBuffering: bufferingStore.store.subscribe,
        isPlaying: () => false,
        isBuffering: () => bufferingStore.store.getSnapshot().buffering,
        frameRef,
        audioAndVideoTags
      };
    }, [bufferingStore]);
    reactExports.useImperativeHandle(ref, () => rootRef.current, []);
    const Component = Internals.useLazyComponent({
      compProps: componentProps,
      componentName: "Thumbnail",
      noSuspense: Boolean(noSuspense)
    });
    const [emitter] = reactExports.useState(() => new ThumbnailEmitter());
    const passedInputProps = reactExports.useMemo(() => {
      return inputProps ?? {};
    }, [inputProps]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.IsPlayerContextProvider, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internals.SetTimelineContext.Provider, {
        value: setTimelineContext,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SharedPlayerContexts, {
          timelineContext: timelineState,
          playbackRateContext,
          component: Component,
          compositionHeight,
          compositionWidth,
          durationInFrames,
          fps,
          numberOfSharedAudioTags: 0,
          initiallyMuted: true,
          logLevel,
          audioLatencyHint: "playback",
          sampleRate: 48e3,
          inputProps: passedInputProps,
          audioEnabled: false,
          _experimentalKeepAudioContextAlive: false,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbnailEmitterContext.Provider, {
            value: emitter,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbnailUI_default, {
              ref: rootRef,
              className: className2,
              errorFallback,
              inputProps: passedInputProps,
              renderLoading,
              style: style2,
              overflowVisible,
              overrideInternalClassName,
              noSuspense: Boolean(noSuspense)
            })
          })
        })
      })
    });
  };
  var forward2 = reactExports.forwardRef;
  forward2(ThumbnailFn);
  const duration = 951.22;
  const scenes = [
    {
      id: 1,
      start: 1.5,
      end: 12.83,
      chapter: "前言",
      sourceCaption: "前言每天早上一睜開眼，手機裡的推播訊息、社群討論、短影音、甚至是人工智慧生成的各類文章就像洪水般湧來。",
      sceneBrief: "清晨臥室，主角剛醒來伸手拿手機，推播、社群、短影音與AI文章像資訊洪水從螢幕湧向床邊",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 11.33,
      image: "./images/scene-001.webp",
      animation: "panLeft",
      captions: [
        {
          id: 1,
          start: 1.5,
          end: 12.83,
          text: "前言每天早上一睜開眼，手機裡的推播訊息、社群討論、短影音、甚至是人工智慧生成的各類文章就像洪水般湧來。"
        }
      ]
    },
    {
      id: 2,
      start: 12.83,
      end: 17.94,
      chapter: "前言",
      sourceCaption: "每個人都講得頭頭是道，每個觀點聽起來都有道理。",
      sceneBrief: "多個人物分別出現在手機與電腦視窗中同時發表意見，主角站在中央左右張望，被不同觀點包圍",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 5.11,
      image: "./images/scene-002.webp",
      animation: "pullOut",
      captions: [
        {
          id: 2,
          start: 12.83,
          end: 17.94,
          text: "每個人都講得頭頭是道，每個觀點聽起來都有道理。"
        }
      ]
    },
    {
      id: 3,
      start: 18.12,
      end: 24.252,
      chapter: "前言",
      sourceCaption: "但你是不是也常覺得，自己讀了再多資料，腦袋依然一片混亂？",
      sceneBrief: "書桌堆滿文件、筆記與瀏覽器分頁，主角扶額，頭上交錯線條與散落紙片象徵思緒打結",
      camera: "肩後視角，從主角後方看向主要任務或資訊來源",
      duration: 6.132,
      image: "./images/scene-003.webp",
      animation: "panRight",
      captions: [
        {
          id: 3,
          start: 18.12,
          end: 24.252,
          text: "但你是不是也常覺得，自己讀了再多資料，腦袋依然一片混亂？"
        }
      ]
    },
    {
      id: 4,
      start: 24.252,
      end: 31.48,
      chapter: "前言",
      sourceCaption: "甚至在關鍵的會議或簡報時刻，講了大半天，別人卻依然聽不懂你的重點？",
      sceneBrief: "會議室內主角站在投影幕前講解密集資料，台下聽眾皺眉互看，明顯抓不到重點",
      camera: "肩後廣角，從聽眾或決策者後方看向主角與簡報場景",
      duration: 7.228,
      image: "./images/scene-004.webp",
      animation: "panUp",
      captions: [
        {
          id: 4,
          start: 24.252,
          end: 31.48,
          text: "甚至在關鍵的會議或簡報時刻，講了大半天，別人卻依然聽不懂你的重點？"
        }
      ]
    },
    {
      id: 5,
      start: 31.66,
      end: 37.108,
      chapter: "前言",
      sourceCaption: "這並不是因為你不夠努力，也不是因為你吸收的資訊太少。",
      sceneBrief: "把「這並不是因為你不夠努力 也不是因為你吸收的資訊太少」具象成單一可見事件，主角必須有明確操作、移動或與他人互動，避免站立擺拍",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 5.448,
      image: "./images/scene-005.webp",
      animation: "panDown",
      captions: [
        {
          id: 5,
          start: 31.66,
          end: 37.108,
          text: "這並不是因為你不夠努力，也不是因為你吸收的資訊太少。"
        }
      ]
    },
    {
      id: 6,
      start: 37.108,
      end: 45.7,
      chapter: "前言",
      sourceCaption: "相反地，我們都陷入了「資訊過載」的陷阱，在不知不覺中被龐雜的外部訊息給「洗腦」了。",
      sceneBrief: "主角被巨量新聞卡片、聊天泡泡、報告與手機通知像浪潮般包圍，只能勉強抬頭",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 8.592,
      image: "./images/scene-006.webp",
      animation: "pushIn",
      captions: [
        {
          id: 6,
          start: 37.108,
          end: 45.7,
          text: "相反地，我們都陷入了「資訊過載」的陷阱，在不知不覺中被龐雜的外部訊息給「洗腦」了。"
        }
      ]
    },
    {
      id: 7,
      start: 45.88,
      end: 52.764,
      chapter: "前言",
      sourceCaption: "我們以為自己接收到了知識，實際上卻只是讓大腦處於疲憊不堪的混亂狀態。",
      sceneBrief: "把「我們以為自己接收到了知識 實際上卻只是讓大腦處於疲憊不堪的混亂狀態」具象成單一可見事件，主角必須有明確操作、移動或與他人互動，避免站立擺拍",
      camera: "對稱正面構圖，主體置中，兩側物件形成對比",
      duration: 6.884,
      image: "./images/scene-007.webp",
      animation: "panLeft",
      captions: [
        {
          id: 7,
          start: 45.88,
          end: 52.764,
          text: "我們以為自己接收到了知識，實際上卻只是讓大腦處於疲憊不堪的混亂狀態。"
        }
      ]
    },
    {
      id: 8,
      start: 52.764,
      end: 62.28,
      chapter: "前言",
      sourceCaption: "要擺脫這種無效接收，我們需要的不是尋找更多資訊，而是為自己的大腦建立一套獨立運作的思維防護網。",
      sceneBrief: "透明幾何護罩環繞主角頭部，外部雜訊、推播與短影音撞上護罩後被自動分類過濾",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 9.516,
      image: "./images/scene-008.webp",
      animation: "pullOut",
      captions: [
        {
          id: 8,
          start: 52.764,
          end: 62.28,
          text: "要擺脫這種無效接收，我們需要的不是尋找更多資訊，而是為自己的大腦建立一套獨立運作的思維防護網。"
        }
      ]
    },
    {
      id: 9,
      start: 62.46,
      end: 70.999,
      chapter: "前言",
      sourceCaption: "今天我們要分享的這套心法，就是來自日本知名教育學者齋藤孝所著的《不被洗腦的思維練習》。",
      sceneBrief: "把「今天我們要分享的這套心法 就是來自日本知名教育學者齋藤孝所著的《不被洗腦的思維練習》」具象成單一可見事件，主角必須有明確操作、移動或與他人互動，避免站立擺拍",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 8.539,
      image: "./images/scene-009.webp",
      animation: "panRight",
      captions: [
        {
          id: 9,
          start: 62.46,
          end: 70.999,
          text: "今天我們要分享的這套心法，就是來自日本知名教育學者齋藤孝所著的《不被洗腦的思維練習》。"
        }
      ]
    },
    {
      id: 10,
      start: 70.999,
      end: 79.34,
      chapter: "前言",
      sourceCaption: "這本書能帶你重新釐清輸入與輸出的本質，打造一個不隨波逐流、具備獨立判斷力的聰明大腦。",
      sceneBrief: "把「這本書能帶你重新釐清輸入與輸出的本質 打造一個不隨波逐流 具備獨立判斷力的聰明大腦」具象成單一可見事件，主角必須有明確操作、移動或與他人互動，避免站立擺拍",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 8.341,
      image: "./images/scene-010.webp",
      animation: "panUp",
      captions: [
        {
          id: 10,
          start: 70.999,
          end: 79.34,
          text: "這本書能帶你重新釐清輸入與輸出的本質，打造一個不隨波逐流、具備獨立判斷力的聰明大腦。"
        }
      ]
    },
    {
      id: 11,
      start: 79.52,
      end: 89.004,
      chapter: "作者與本書",
      sourceCaption: "作者與本書這本書的作者齋藤孝先生，是日本明治大學的知名教授，也是一位著作等身的溝通與學習專家。",
      sceneBrief: "日本大學講堂，教授在黑板前與學生討論閱讀、溝通與思考，書架與筆記形成學術背景",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 9.484,
      image: "./images/scene-011.webp",
      animation: "panDown",
      captions: [
        {
          id: 11,
          start: 79.52,
          end: 89.004,
          text: "作者與本書這本書的作者齋藤孝先生，是日本明治大學的知名教授，也是一位著作等身的溝通與學習專家。"
        }
      ]
    },
    {
      id: 12,
      start: 89.004,
      end: 97.68,
      chapter: "作者與本書",
      sourceCaption: "他在書籍序言中明確提出了一個翻轉傳統觀念的問題：究竟什麼樣的人才算得上是真正的聰明人？",
      sceneBrief: "主角面對複雜白板沒有急著回答，而是先整理三張卡片，再指出唯一核心",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 8.676,
      image: "./images/scene-012.webp",
      animation: "pushIn",
      captions: [
        {
          id: 12,
          start: 89.004,
          end: 97.68,
          text: "他在書籍序言中明確提出了一個翻轉傳統觀念的問題：究竟什麼樣的人才算得上是真正的聰明人？"
        }
      ]
    },
    {
      id: 13,
      start: 97.86,
      end: 105.187,
      chapter: "作者與本書",
      sourceCaption: "一般人常以為，講話辯才無礙、或是腦中裝滿百科全書式知識的人就是聰明。",
      sceneBrief: "一人背著巨大百科全書書堆步履沉重，旁邊另一人只拿簡潔三張重點卡形成對比",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 7.327,
      image: "./images/scene-013.webp",
      animation: "panLeft",
      captions: [
        {
          id: 13,
          start: 97.86,
          end: 105.187,
          text: "一般人常以為，講話辯才無礙、或是腦中裝滿百科全書式知識的人就是聰明。"
        }
      ]
    },
    {
      id: 14,
      start: 105.187,
      end: 115.1,
      chapter: "作者與本書",
      sourceCaption: "但齋藤教授指出，真正的聰明，是指有能力正確地輸入資訊、加以簡化與組織想法，並能精準輸出的人。",
      sceneBrief: "資訊卡由左側進入分類盒，中間被簡化與組織，右側輸出成清楚圖解與一句重點",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 9.913,
      image: "./images/scene-014.webp",
      animation: "pullOut",
      captions: [
        {
          id: 14,
          start: 105.187,
          end: 115.1,
          text: "但齋藤教授指出，真正的聰明，是指有能力正確地輸入資訊、加以簡化與組織想法，並能精準輸出的人。"
        }
      ]
    },
    {
      id: 15,
      start: 115.28,
      end: 132.08,
      chapter: "作者與本書",
      sourceCaption: "聰明人的溝通就像是一條河流，當對方覺得河水湍急、難以跨越時，聰明人不會強迫對方涉水，而是會主動在河面上鋪上三塊「關鍵字踏腳石」，引導對方輕鬆且安全地過河理解核心。",
      sceneBrief: "寬闊河流象徵理解障礙，主角在河面放下三塊踏腳石，引導對岸聽眾安全跨越",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 16.8,
      image: "./images/scene-015.webp",
      animation: "panRight",
      captions: [
        {
          id: 15,
          start: 115.28,
          end: 132.08,
          text: "聰明人的溝通就像是一條河流，當對方覺得河水湍急、難以跨越時，聰明人不會強迫對方涉水，而是會主動在河面上鋪上三塊「關鍵字踏腳石」，引導對方輕鬆且安全地過河理解核心。"
        }
      ]
    },
    {
      id: 16,
      start: 132.26,
      end: 139.895,
      chapter: "作者與本書",
      sourceCaption: "本書的核心問題意識，正是要幫助現代人破解「輸入太多、輸出太少」的失衡狀態。",
      sceneBrief: "左側大漏斗灌入大量文件，右側出口卻只滴出少量內容，主角檢查堵塞的資訊管道",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 7.635,
      image: "./images/scene-016.webp",
      animation: "panUp",
      captions: [
        {
          id: 16,
          start: 132.26,
          end: 139.895,
          text: "本書的核心問題意識，正是要幫助現代人破解「輸入太多、輸出太少」的失衡狀態。"
        }
      ]
    },
    {
      id: 17,
      start: 139.895,
      end: 150.42000000000002,
      chapter: "作者與本書",
      sourceCaption: "透過整理資訊、高效溝通、深度閱讀、潛能激發以及學習天才等五大思維練習，系統化地打造勝算更高的決策能力。",
      sceneBrief: "五個相連工作站依序象徵整理、溝通、閱讀、突破與習慣，主角沿流程移動",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 10.525,
      image: "./images/scene-017.webp",
      animation: "panDown",
      captions: [
        {
          id: 17,
          start: 139.895,
          end: 150.42000000000002,
          text: "透過整理資訊、高效溝通、深度閱讀、潛能激發以及學習天才等五大思維練習，系統化地打造勝算更高的決策能力。"
        }
      ]
    },
    {
      id: 18,
      start: 150.6,
      end: 166.52,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "一、整理資訊的思維練習在資訊氾濫的現代，我們常面臨場景帶入的困境：每天閱讀大量的文章與報告，但當主管突然問你「這份資料的重點是什麼」時，你卻結巴講不出所以然。",
      sceneBrief: "辦公桌前主角翻閱成堆報告，主管突然站在桌邊提問，主角一時語塞",
      camera: "肩後廣角，從聽眾或決策者後方看向主角與簡報場景",
      duration: 15.92,
      image: "./images/scene-018.webp",
      animation: "pushIn",
      captions: [
        {
          id: 18,
          start: 150.6,
          end: 166.52,
          text: "一、整理資訊的思維練習在資訊氾濫的現代，我們常面臨場景帶入的困境：每天閱讀大量的文章與報告，但當主管突然問你「這份資料的重點是什麼」時，你卻結巴講不出所以然。"
        }
      ]
    },
    {
      id: 19,
      start: 166.7,
      end: 171.57,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "這背後的核心問題，在於大腦缺乏去蕪存菁的整理機制。",
      sceneBrief: "主角用篩網從大量紙張中篩出少數金色重點卡片，無關資料落入紙簍",
      camera: "肩後視角，從主角後方看向主要任務或資訊來源",
      duration: 4.87,
      image: "./images/scene-019.webp",
      animation: "panLeft",
      captions: [
        {
          id: 19,
          start: 166.7,
          end: 171.57,
          text: "這背後的核心問題，在於大腦缺乏去蕪存菁的整理機制。"
        }
      ]
    },
    {
      id: 20,
      start: 171.57,
      end: 180.14,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "為了訓練整理資訊的能力，書中提供了四個非常具代表性的實作方法：第一個是「一分鐘精華法」。",
      sceneBrief: "主角手持倒數計時器，面前只有三張核心卡片，準備在一分鐘內完成摘要",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 8.57,
      image: "./images/scene-020.webp",
      animation: "pullOut",
      captions: [
        {
          id: 20,
          start: 171.57,
          end: 180.14,
          text: "為了訓練整理資訊的能力，書中提供了四個非常具代表性的實作方法：第一個是「一分鐘精華法」。"
        }
      ]
    },
    {
      id: 21,
      start: 180.32,
      end: 188.299,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "挑選三個核心關鍵字，用三個十五秒分別說明一個關鍵字，最後十五秒給出結論。",
      sceneBrief: "三張核心卡依序排開，旁邊圓形計時器切成四個十五秒區段，主角逐張說明",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 7.979,
      image: "./images/scene-021.webp",
      animation: "panRight",
      captions: [
        {
          id: 21,
          start: 180.32,
          end: 188.299,
          text: "挑選三個核心關鍵字，用三個十五秒分別說明一個關鍵字，最後十五秒給出結論。"
        }
      ]
    },
    {
      id: 22,
      start: 188.299,
      end: 193.84,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "這就像是一支十五秒的電視廣告，節奏明快且重點突出。",
      sceneBrief: "電視攝影棚紅燈亮起，主持人快速發言，牆上倒數時鐘營造緊湊節奏",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 5.541,
      image: "./images/scene-022.webp",
      animation: "panUp",
      captions: [
        {
          id: 22,
          start: 188.299,
          end: 193.84,
          text: "這就像是一支十五秒的電視廣告，節奏明快且重點突出。"
        }
      ]
    },
    {
      id: 23,
      start: 194.02,
      end: 197.047,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "第二個是「三色畫線過濾法」。",
      sceneBrief: "桌面攤開文章，紅藍綠三支筆並列，主角開始分色標記不同層級資訊",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 3.027,
      image: "./images/scene-023.webp",
      animation: "panDown",
      captions: [
        {
          id: 23,
          start: 194.02,
          end: 197.047,
          text: "第二個是「三色畫線過濾法」。"
        }
      ]
    },
    {
      id: 24,
      start: 197.047,
      end: 200.291,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "使用紅、藍、綠三色筆分類資訊。",
      sceneBrief: "手部特寫，用紅藍綠三支筆在同一頁資料上標出三種不同類型重點",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 3.244,
      image: "./images/scene-024.webp",
      animation: "pushIn",
      captions: [
        {
          id: 24,
          start: 197.047,
          end: 200.291,
          text: "使用紅、藍、綠三色筆分類資訊。"
        }
      ]
    },
    {
      id: 25,
      start: 200.291,
      end: 208.94,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "用紅線標註作者最核心的觀點，藍線標註客觀數據與事實，綠線標註個人主觀有趣的感悟。",
      sceneBrief: "俯視文章頁，紅色核心觀點、藍色客觀數據、綠色個人靈感分層清楚",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 8.649,
      image: "./images/scene-025.webp",
      animation: "panLeft",
      captions: [
        {
          id: 25,
          start: 200.291,
          end: 208.94,
          text: "用紅線標註作者最核心的觀點，藍線標註客觀數據與事實，綠線標註個人主觀有趣的感悟。"
        }
      ]
    },
    {
      id: 26,
      start: 209.12,
      end: 215.404,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "劃線的不可逆性會帶來適度緊張感，逼迫自己下狠心區分重要等級。",
      sceneBrief: "主角握筆停在紙面前思考，橡皮擦被收起，呈現落筆前必須做取捨的緊張感",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 6.284,
      image: "./images/scene-026.webp",
      animation: "pullOut",
      captions: [
        {
          id: 26,
          start: 209.12,
          end: 215.404,
          text: "劃線的不可逆性會帶來適度緊張感，逼迫自己下狠心區分重要等級。"
        }
      ]
    },
    {
      id: 27,
      start: 215.404,
      end: 218.336,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "第三個是「箭頭關聯圖像法」。",
      sceneBrief: "白板散落關鍵字卡，主角用箭頭、等號與對立連線把資訊串成關係網",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 2.932,
      image: "./images/scene-027.webp",
      animation: "panRight",
      captions: [
        {
          id: 27,
          start: 215.404,
          end: 218.336,
          text: "第三個是「箭頭關聯圖像法」。"
        }
      ]
    },
    {
      id: 28,
      start: 218.336,
      end: 228.6,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "將文字關鍵字加上「→」（因果）、「＝」（等價）、「⇔」（對立）等符號連結，轉化為一目瞭然的關聯圖。",
      sceneBrief: "關聯圖近景，單向箭頭、等號與雙向對立線把不同概念連成清楚結構",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 10.264,
      image: "./images/scene-028.webp",
      animation: "panUp",
      captions: [
        {
          id: 28,
          start: 218.336,
          end: 228.6,
          text: "將文字關鍵字加上「→」（因果）、「＝」（等價）、「⇔」（對立）等符號連結，轉化為一目瞭然的關聯圖。"
        }
      ]
    },
    {
      id: 29,
      start: 228.78,
      end: 231.793,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "第四個是「單頁 A4 聚焦法」。",
      sceneBrief: "主角把厚企劃書濃縮成桌面上一張乾淨A4摘要，厚資料被收進資料夾",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 3.013,
      image: "./images/scene-029.webp",
      animation: "panDown",
      captions: [
        {
          id: 29,
          start: 228.78,
          end: 231.793,
          text: "第四個是「單頁 A4 聚焦法」。"
        }
      ]
    },
    {
      id: 30,
      start: 231.793,
      end: 239.542,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "將複雜企劃強行濃縮在一頁 A4 紙上，先排序重點再呈現，細節以雲端連結附錄。",
      sceneBrief: "俯視桌面，一張A4只保留三個主區塊與優先順序，旁邊用雲端圖示代表細節另存",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 7.749,
      image: "./images/scene-030.webp",
      animation: "pushIn",
      captions: [
        {
          id: 30,
          start: 231.793,
          end: 239.542,
          text: "將複雜企劃強行濃縮在一頁 A4 紙上，先排序重點再呈現，細節以雲端連結附錄。"
        }
      ]
    },
    {
      id: 31,
      start: 239.542,
      end: 246.86,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "書中記載了一個極具代表性的案例：齋藤教授分享自己在電視錄影時的教訓。",
      sceneBrief: "電視棚錄影現場，來賓坐在聚光燈下，場務舉手倒數，主持人等待精準回答",
      camera: "對稱正面構圖，主體置中，兩側物件形成對比",
      duration: 7.318,
      image: "./images/scene-031.webp",
      animation: "panLeft",
      captions: [
        {
          id: 31,
          start: 239.542,
          end: 246.86,
          text: "書中記載了一個極具代表性的案例：齋藤教授分享自己在電視錄影時的教訓。"
        }
      ]
    },
    {
      id: 32,
      start: 247.04,
      end: 256.679,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "電視節目要求來賓在十五秒的短時間內精準回答，如果說話太過拖沓冗長，就會被製作單位剪掉。",
      sceneBrief: "攝影棚近景，倒數計時器快速跳動，受訪者在極短時間內完成一句精準回答",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 9.639,
      image: "./images/scene-032.webp",
      animation: "pullOut",
      captions: [
        {
          id: 32,
          start: 247.04,
          end: 256.679,
          text: "電視節目要求來賓在十五秒的短時間內精準回答，如果說話太過拖沓冗長，就會被製作單位剪掉。"
        }
      ]
    },
    {
      id: 33,
      start: 256.679,
      end: 268.56,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "同樣地，向他人介紹童話故事《浦島太郎》時，只要抓出「烏龜、龍宮城、寶箱」三個關鍵字，就能迅速傳達故事全貌。",
      sceneBrief: "日式童話場景以海龜、海底龍宮與寶箱三個物件依序串起完整故事",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 11.881,
      image: "./images/scene-033.webp",
      animation: "panRight",
      captions: [
        {
          id: 33,
          start: 256.679,
          end: 268.56,
          text: "同樣地，向他人介紹童話故事《浦島太郎》時，只要抓出「烏龜、龍宮城、寶箱」三個關鍵字，就能迅速傳達故事全貌。"
        }
      ]
    },
    {
      id: 34,
      start: 268.74,
      end: 289.22,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "現代延伸應用方面：當我們面對 AI 生成的長篇文章或查證資料時，可以使用三色筆法，用紅線劃出 AI 的推論，藍線驗證客觀數據，綠線記錄自己的延伸靈感，就能瞬間看穿文字背後是否有幻覺或漏洞（現代延伸思考）。",
      sceneBrief: "電腦顯示長篇AI文章，主角用紅藍綠標記推論、數據與個人靈感，檢查幻覺漏洞",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 20.48,
      image: "./images/scene-034.webp",
      animation: "panUp",
      captions: [
        {
          id: 34,
          start: 268.74,
          end: 289.22,
          text: "現代延伸應用方面：當我們面對 AI 生成的長篇文章或查證資料時，可以使用三色筆法，用紅線劃出 AI 的推論，藍線驗證客觀數據，綠線記錄自己的延伸靈感，就能瞬間看穿文字背後是否有幻覺或漏洞（現代延伸思考）。"
        }
      ]
    },
    {
      id: 35,
      start: 289.4,
      end: 296.642,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "這一章真正要練的是去蕪存菁的「剪裁力」，確保進入大腦的都是高純度結構化資訊。",
      sceneBrief: "主角用篩網從大量紙張中篩出少數金色重點卡片，無關資料落入紙簍",
      camera: "肩後視角，從主角後方看向主要任務或資訊來源",
      duration: 7.242,
      image: "./images/scene-035.webp",
      animation: "panDown",
      captions: [
        {
          id: 35,
          start: 289.4,
          end: 296.642,
          text: "這一章真正要練的是去蕪存菁的「剪裁力」，確保進入大腦的都是高純度結構化資訊。"
        }
      ]
    },
    {
      id: 36,
      start: 296.642,
      end: 302.36,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "擁有了經過整理的高純度資訊後，我們該如何精準地傳達給他人呢？",
      sceneBrief: "主角把整理好的三張重點卡遞給同事，對方一看就理解並點頭",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 5.718,
      image: "./images/scene-036.webp",
      animation: "pushIn",
      captions: [
        {
          id: 36,
          start: 296.642,
          end: 302.36,
          text: "擁有了經過整理的高純度資訊後，我們該如何精準地傳達給他人呢？"
        }
      ]
    },
    {
      id: 37,
      start: 302.54,
      end: 306.149,
      chapter: "一、整理資訊的思維練習",
      sourceCaption: "這就進入了第二個練習：高效溝通。",
      sceneBrief: "會議前主角把厚資料濃縮成一張A4，桌上整齊放著A、B、C三方案",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 3.609,
      image: "./images/scene-037.webp",
      animation: "panLeft",
      captions: [
        {
          id: 37,
          start: 302.54,
          end: 306.149,
          text: "這就進入了第二個練習：高效溝通。"
        }
      ]
    },
    {
      id: 38,
      start: 306.149,
      end: 316.3,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "二、高效溝通的思維練習溝通時最常發生的問題場景，就是講者滿嘴艱深術語，聽眾卻聽得一頭霧水；",
      sceneBrief: "講者在白板前寫滿複雜符號與術語，聽眾頭上出現困惑問號",
      camera: "肩後廣角，從聽眾或決策者後方看向主角與簡報場景",
      duration: 10.151,
      image: "./images/scene-038.webp",
      animation: "pullOut",
      captions: [
        {
          id: 38,
          start: 306.149,
          end: 316.3,
          text: "二、高效溝通的思維練習溝通時最常發生的問題場景，就是講者滿嘴艱深術語，聽眾卻聽得一頭霧水；"
        }
      ]
    },
    {
      id: 39,
      start: 316.48,
      end: 320.995,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "或是被問到問題時，回答流於空洞口號或流水帳。",
      sceneBrief: "簡報畫面充滿抽象口號泡泡卻沒有數據與例子，台下聽眾表情冷淡",
      camera: "對稱正面構圖，主體置中，兩側物件形成對比",
      duration: 4.515,
      image: "./images/scene-039.webp",
      animation: "panRight",
      captions: [
        {
          id: 39,
          start: 316.48,
          end: 320.995,
          text: "或是被問到問題時，回答流於空洞口號或流水帳。"
        }
      ]
    },
    {
      id: 40,
      start: 320.995,
      end: 326.947,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "這背後的核心問題，在於溝通時沒有切中對方的需求與問題核心。",
      sceneBrief: "主角用箭矢命中標靶中央，旁邊象徵聽眾需求的卡片被精準對應",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 5.952,
      image: "./images/scene-040.webp",
      animation: "panUp",
      captions: [
        {
          id: 40,
          start: 320.995,
          end: 326.947,
          text: "這背後的核心問題，在於溝通時沒有切中對方的需求與問題核心。"
        }
      ]
    },
    {
      id: 41,
      start: 326.947,
      end: 333.72,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "要達成高效溝通，書中提供了四個關鍵方法：第一是「三歲小孩解玩法」。",
      sceneBrief: "成年人蹲下用積木與簡單圖形向小孩解釋複雜概念，小孩露出理解表情",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 6.773,
      image: "./images/scene-041.webp",
      animation: "panDown",
      captions: [
        {
          id: 41,
          start: 326.947,
          end: 333.72,
          text: "要達成高效溝通，書中提供了四個關鍵方法：第一是「三歲小孩解玩法」。"
        }
      ]
    },
    {
      id: 42,
      start: 333.9,
      end: 340.102,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "拋棄所有專業術語與商業英文，用最通俗生活化的語言說明。",
      sceneBrief: "主角把充滿術語的紙張收起，改用日常物件與簡單圖卡向對方說明",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 6.202,
      image: "./images/scene-042.webp",
      animation: "pushIn",
      captions: [
        {
          id: 42,
          start: 333.9,
          end: 340.102,
          text: "拋棄所有專業術語與商業英文，用最通俗生活化的語言說明。"
        }
      ]
    },
    {
      id: 43,
      start: 340.102,
      end: 345.844,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "能夠讓三歲小孩都聽懂，才代表自己真正理解概念本質。",
      sceneBrief: "成年人蹲下用積木與簡單圖形向小孩解釋複雜概念，小孩露出理解表情",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 5.742,
      image: "./images/scene-043.webp",
      animation: "panLeft",
      captions: [
        {
          id: 43,
          start: 340.102,
          end: 345.844,
          text: "能夠讓三歲小孩都聽懂，才代表自己真正理解概念本質。"
        }
      ]
    },
    {
      id: 44,
      start: 345.844,
      end: 349.06,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "第二是「核心與具體矩陣法」。",
      sceneBrief: "白板畫出四象限，主角把核心概念卡與具體數據卡一起放到右上象限",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 3.216,
      image: "./images/scene-044.webp",
      animation: "pullOut",
      captions: [
        {
          id: 44,
          start: 345.844,
          end: 349.06,
          text: "第二是「核心與具體矩陣法」。"
        }
      ]
    },
    {
      id: 45,
      start: 349.24,
      end: 362.185,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "發言時劃分「抽象-具體」與「無核心-有核心」四象限，同時兼具核心概念與具體數據，切入右上角正中紅心的理想象限。",
      sceneBrief: "四象限與標靶結合，右上角中央被箭矢命中，其餘象限淡化",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 12.945,
      image: "./images/scene-045.webp",
      animation: "panRight",
      captions: [
        {
          id: 45,
          start: 349.24,
          end: 362.185,
          text: "發言時劃分「抽象-具體」與「無核心-有核心」四象限，同時兼具核心概念與具體數據，切入右上角正中紅心的理想象限。"
        }
      ]
    },
    {
      id: 46,
      start: 362.185,
      end: 365.48,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "第三是「限縮三選項簡報法」。",
      sceneBrief: "桌上只留下A、B、C三個方案卡，主角向決策者逐一說明，其他草案被收起",
      camera: "肩後廣角，從聽眾或決策者後方看向主角與簡報場景",
      duration: 3.295,
      image: "./images/scene-046.webp",
      animation: "panUp",
      captions: [
        {
          id: 46,
          start: 362.185,
          end: 365.48,
          text: "第三是「限縮三選項簡報法」。"
        }
      ]
    },
    {
      id: 47,
      start: 365.66,
      end: 378.252,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "面對繁雜方案時，不一股腦傾倒幾十個點子，而是主動預先過濾出 A、B、C 三個可行選項，清楚交代利弊與最佳推薦。",
      sceneBrief: "主管桌前三張不同方案卡整齊排列，主角指向折中推薦方案，主管準備拍板",
      camera: "對稱正面構圖，主體置中，兩側物件形成對比",
      duration: 12.592,
      image: "./images/scene-047.webp",
      animation: "panDown",
      captions: [
        {
          id: 47,
          start: 365.66,
          end: 378.252,
          text: "面對繁雜方案時，不一股腦傾倒幾十個點子，而是主動預先過濾出 A、B、C 三個可行選項，清楚交代利弊與最佳推薦。"
        }
      ]
    },
    {
      id: 48,
      start: 378.252,
      end: 381.34,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "第四是「清空白紙傾聽法」。",
      sceneBrief: "兩人面對面坐著，聽者桌上只有一張空白紙，身體前傾專心傾聽",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 3.088,
      image: "./images/scene-048.webp",
      animation: "pushIn",
      captions: [
        {
          id: 48,
          start: 378.252,
          end: 381.34,
          text: "第四是「清空白紙傾聽法」。"
        }
      ]
    },
    {
      id: 49,
      start: 381.52,
      end: 389.711,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "傾聽時主動清空過往的成見與預設立場，像一張白紙般正面面向對方，坦誠接收。",
      sceneBrief: "聽者放下手機與預設筆記，雙手自然交疊，專注看向說話者",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 8.191,
      image: "./images/scene-049.webp",
      animation: "panLeft",
      captions: [
        {
          id: 49,
          start: 381.52,
          end: 389.711,
          text: "傾聽時主動清空過往的成見與預設立場，像一張白紙般正面面向對方，坦誠接收。"
        }
      ]
    },
    {
      id: 50,
      start: 389.711,
      end: 395.4,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "書中記載的代表案例是前日本首相田中角榮的演講風格。",
      sceneBrief: "大型演講場景，講者站在講台前，以簡潔數字圖表與具體案例吸引群眾",
      camera: "肩後廣角，從聽眾或決策者後方看向主角與簡報場景",
      duration: 5.689,
      image: "./images/scene-050.webp",
      animation: "pullOut",
      captions: [
        {
          id: 50,
          start: 389.711,
          end: 395.4,
          text: "書中記載的代表案例是前日本首相田中角榮的演講風格。"
        }
      ]
    },
    {
      id: 51,
      start: 395.58,
      end: 407.192,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "田中角榮演講時，總是能精準抓出聽眾想聽的核心主題，同時列出有憑有據的數據與具體例子，緊緊抓住民眾的心。",
      sceneBrief: "大型演講場景，講者站在講台前，以簡潔數字圖表與具體案例吸引群眾",
      camera: "肩後廣角，從聽眾或決策者後方看向主角與簡報場景",
      duration: 11.612,
      image: "./images/scene-051.webp",
      animation: "panRight",
      captions: [
        {
          id: 51,
          start: 395.58,
          end: 407.192,
          text: "田中角榮演講時，總是能精準抓出聽眾想聽的核心主題，同時列出有憑有據的數據與具體例子，緊緊抓住民眾的心。"
        }
      ]
    },
    {
      id: 52,
      start: 407.192,
      end: 413.34000000000003,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "經營之神松下幸之助也提倡「坦誠」，以白紙心態面對異見。",
      sceneBrief: "日式企業會議室，年長企業家安靜聽取年輕員工不同意見，桌上留著空白筆記",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 6.148,
      image: "./images/scene-052.webp",
      animation: "panUp",
      captions: [
        {
          id: 52,
          start: 407.192,
          end: 413.34000000000003,
          text: "經營之神松下幸之助也提倡「坦誠」，以白紙心態面對異見。"
        }
      ]
    },
    {
      id: 53,
      start: 413.52,
      end: 436.56,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "現代延伸應用方面：在職場向主管簡報或回應客戶需求突然變更時，不抱怨也不傾倒十個草案，而是迅速整理出「方案 A（快速但貴）、方案 B（便宜但延後）、方案 C（折中推薦版）」，讓對方能在三分鐘內輕鬆拍板（現代延伸思考）。",
      sceneBrief: "現代會議室，主角向主管展示快速、低成本、折中三個方案，主管準備做決定",
      camera: "肩後廣角，從聽眾或決策者後方看向主角與簡報場景",
      duration: 23.04,
      image: "./images/scene-053.webp",
      animation: "panDown",
      captions: [
        {
          id: 53,
          start: 413.52,
          end: 436.56,
          text: "現代延伸應用方面：在職場向主管簡報或回應客戶需求突然變更時，不抱怨也不傾倒十個草案，而是迅速整理出「方案 A（快速但貴）、方案 B（便宜但延後）、方案 C（折中推薦版）」，讓對方能在三分鐘內輕鬆拍板（現代延伸思考）。"
        }
      ]
    },
    {
      id: 54,
      start: 436.74,
      end: 443.666,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "這一章真正要練的是一針見血的「精準力」，讓每一次輸出都能正中紅心。",
      sceneBrief: "箭矢穿過層層雜訊後命中中心標靶，主角在旁收起多餘資料",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 6.926,
      image: "./images/scene-054.webp",
      animation: "pushIn",
      captions: [
        {
          id: 54,
          start: 436.74,
          end: 443.666,
          text: "這一章真正要練的是一針見血的「精準力」，讓每一次輸出都能正中紅心。"
        }
      ]
    },
    {
      id: 55,
      start: 443.666,
      end: 452.06,
      chapter: "二、高效溝通的思維練習",
      sourceCaption: "搞懂了精準表達與溝通後，如果想獲取更深厚的知性內涵，就需要第三個練習：深度閱讀。",
      sceneBrief: "主角從會議場景走進安靜書房，桌上打開厚書與筆記本，開始沉浸閱讀",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 8.394,
      image: "./images/scene-055.webp",
      animation: "panLeft",
      captions: [
        {
          id: 55,
          start: 443.666,
          end: 452.06,
          text: "搞懂了精準表達與溝通後，如果想獲取更深厚的知性內涵，就需要第三個練習：深度閱讀。"
        }
      ]
    },
    {
      id: 56,
      start: 452.24,
      end: 466.44,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "三、深度閱讀的思維練習許多人在閱讀時常遇到場景障礙：買了書卻讀不下去，或是面對大部頭專業著作感到焦慮挫折，甚至全盤照單全收、盲目崇拜權威。",
      sceneBrief: "主角從會議場景走進安靜書房，桌上打開厚書與筆記本，開始沉浸閱讀",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 14.2,
      image: "./images/scene-056.webp",
      animation: "pullOut",
      captions: [
        {
          id: 56,
          start: 452.24,
          end: 466.44,
          text: "三、深度閱讀的思維練習許多人在閱讀時常遇到場景障礙：買了書卻讀不下去，或是面對大部頭專業著作感到焦慮挫折，甚至全盤照單全收、盲目崇拜權威。"
        }
      ]
    },
    {
      id: 57,
      start: 466.62,
      end: 472.985,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "這背後的核心問題，在於缺乏主動構建知識網絡與批判思考的能力。",
      sceneBrief: "主角用放大鏡檢查書頁論證，旁邊放著不同觀點卡互相比較",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 6.365,
      image: "./images/scene-057.webp",
      animation: "panRight",
      captions: [
        {
          id: 57,
          start: 466.62,
          end: 472.985,
          text: "這背後的核心問題，在於缺乏主動構建知識網絡與批判思考的能力。"
        }
      ]
    },
    {
      id: 58,
      start: 472.985,
      end: 478.714,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "深度閱讀的四個代表方法包括：第一是「目次架構速查法」。",
      sceneBrief: "主角從會議場景走進安靜書房，桌上打開厚書與筆記本，開始沉浸閱讀",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 5.729,
      image: "./images/scene-058.webp",
      animation: "panUp",
      captions: [
        {
          id: 58,
          start: 472.985,
          end: 478.714,
          text: "深度閱讀的四個代表方法包括：第一是「目次架構速查法」。"
        }
      ]
    },
    {
      id: 59,
      start: 478.714,
      end: 486.14,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "選書與閱讀時優先精讀目次，三分鐘掌握全書骨幹，決定最有效率的跳讀順序。",
      sceneBrief: "計時器旁，目次被抽象成骨架式路線圖，幾個章節節點被快速圈選",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 7.426,
      image: "./images/scene-059.webp",
      animation: "panDown",
      captions: [
        {
          id: 59,
          start: 478.714,
          end: 486.14,
          text: "選書與閱讀時優先精讀目次，三分鐘掌握全書骨幹，決定最有效率的跳讀順序。"
        }
      ]
    },
    {
      id: 60,
      start: 486.32,
      end: 489.333,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "第二是「經驗連結說書法」。",
      sceneBrief: "主角一手拿書，一手指向身後自己的工作經歷場景，兩者被連線串起",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 3.013,
      image: "./images/scene-060.webp",
      animation: "pushIn",
      captions: [
        {
          id: 60,
          start: 486.32,
          end: 489.333,
          text: "第二是「經驗連結說書法」。"
        }
      ]
    },
    {
      id: 61,
      start: 489.333,
      end: 497.907,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "介紹書籍或輸出觀點時，強制結合一則自己的親身經歷談，將死知識內化為活體驗。",
      sceneBrief: "書中概念卡與主角過往工作情境並排，主角把兩者連成一條理解路徑",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 8.574,
      image: "./images/scene-061.webp",
      animation: "panLeft",
      captions: [
        {
          id: 61,
          start: 489.333,
          end: 497.907,
          text: "介紹書籍或輸出觀點時，強制結合一則自己的親身經歷談，將死知識內化為活體驗。"
        }
      ]
    },
    {
      id: 62,
      start: 497.907,
      end: 500.92,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "第三是「反向吐槽思考法」。",
      sceneBrief: "主角讀書時突然抬頭挑眉，手指書頁某句話，旁邊出現誇張問號",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 3.013,
      image: "./images/scene-062.webp",
      animation: "pullOut",
      captions: [
        {
          id: 62,
          start: 497.907,
          end: 500.92,
          text: "第三是「反向吐槽思考法」。"
        }
      ]
    },
    {
      id: 63,
      start: 501.1,
      end: 509.171,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "扮演搞笑藝人的吐槽角色，讀到太過極端或理所當然的句子時大聲質疑「怎麼可能？",
      sceneBrief: "主角對著書頁露出質疑表情，背景權威式雕像被一個巨大問號打破",
      camera: "對稱正面構圖，主體置中，兩側物件形成對比",
      duration: 8.071,
      image: "./images/scene-063.webp",
      animation: "panRight",
      captions: [
        {
          id: 63,
          start: 501.1,
          end: 509.171,
          text: "扮演搞笑藝人的吐槽角色，讀到太過極端或理所當然的句子時大聲質疑「怎麼可能？"
        }
      ]
    },
    {
      id: 64,
      start: 509.171,
      end: 511.135,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "」，打破權威崇拜。",
      sceneBrief: "把「打破權威崇拜」具象成單一可見事件，主角必須有明確操作、移動或與他人互動，避免站立擺拍",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 1.964,
      image: "./images/scene-064.webp",
      animation: "panUp",
      captions: [
        {
          id: 64,
          start: 509.171,
          end: 511.135,
          text: "」，打破權威崇拜。"
        }
      ]
    },
    {
      id: 65,
      start: 511.135,
      end: 513.97,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "第四是「主題五書連讀法」。",
      sceneBrief: "桌面五本同主題書呈扇形排開，主角同時做交叉筆記與概念比對",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 2.835,
      image: "./images/scene-065.webp",
      animation: "panDown",
      captions: [
        {
          id: 65,
          start: 511.135,
          end: 513.97,
          text: "第四是「主題五書連讀法」。"
        }
      ]
    },
    {
      id: 66,
      start: 513.97,
      end: 522.26,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "針對全新領域，一口氣挑選五本同主題書籍進行交叉閱讀，抓出反覆出現的底層概念。",
      sceneBrief: "五本書各拉出重複出現的概念卡，在中央匯聚成共同知識地圖",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 8.29,
      image: "./images/scene-066.webp",
      animation: "pushIn",
      captions: [
        {
          id: 66,
          start: 513.97,
          end: 522.26,
          text: "針對全新領域，一口氣挑選五本同主題書籍進行交叉閱讀，抓出反覆出現的底層概念。"
        }
      ]
    },
    {
      id: 67,
      start: 522.44,
      end: 529.155,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "書中記載的代表案例：閱讀馬基維利《君王論》時透過精彩目次掌握結構；",
      sceneBrief: "古典書房，打開的政治經典以章節結構圖呈現，主角從目次快速定位重點",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 6.715,
      image: "./images/scene-067.webp",
      animation: "panLeft",
      captions: [
        {
          id: 67,
          start: 522.44,
          end: 529.155,
          text: "書中記載的代表案例：閱讀馬基維利《君王論》時透過精彩目次掌握結構；"
        }
      ]
    },
    {
      id: 68,
      start: 529.155,
      end: 536.48,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "引用《論語》「不知為不知」名言時加上自己早期不懂裝懂搞砸專案的親身教訓；",
      sceneBrief: "會議中主角先坦承不知道，再翻資料查證；旁邊對比硬撐裝懂的模糊剪影",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 7.325,
      image: "./images/scene-068.webp",
      animation: "pullOut",
      captions: [
        {
          id: 68,
          start: 529.155,
          end: 536.48,
          text: "引用《論語》「不知為不知」名言時加上自己早期不懂裝懂搞砸專案的親身教訓；"
        }
      ]
    },
    {
      id: 69,
      start: 536.66,
      end: 547.46,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "將棋傳奇羽生善治先生即使貴為永世七冠，仍主動向十幾歲的藤井聰太與 AI 學習，展現極佳思維彈性。",
      sceneBrief: "將棋研究室，資深棋士、年輕棋士與AI棋盤共同分析局面，呈現跨世代學習",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 10.8,
      image: "./images/scene-069.webp",
      animation: "panRight",
      captions: [
        {
          id: 69,
          start: 536.66,
          end: 547.46,
          text: "將棋傳奇羽生善治先生即使貴為永世七冠，仍主動向十幾歲的藤井聰太與 AI 學習，展現極佳思維彈性。"
        }
      ]
    },
    {
      id: 70,
      start: 547.64,
      end: 566.44,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "現代延伸應用方面：當我們需要快速跨入「生成式 AI 應用」或全新的業務領域時，不糾結於單一入門書，直接買五本相關書籍連讀，在兩週內建構該領域八成專家共通的核心地圖（現代延伸思考）。",
      sceneBrief: "桌面五本AI主題書同時打開，牆上形成跨書整合的概念網與領域地圖",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 18.8,
      image: "./images/scene-070.webp",
      animation: "panUp",
      captions: [
        {
          id: 70,
          start: 547.64,
          end: 566.44,
          text: "現代延伸應用方面：當我們需要快速跨入「生成式 AI 應用」或全新的業務領域時，不糾結於單一入門書，直接買五本相關書籍連讀，在兩週內建構該領域八成專家共通的核心地圖（現代延伸思考）。"
        }
      ]
    },
    {
      id: 71,
      start: 566.62,
      end: 573.484,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "這一章真正要練的是化為己用的「吸收力」，建立屬於自己的獨立知識體系。",
      sceneBrief: "多本書的精華化成光流進主角腦中，再轉化成自己的筆記與知識圖",
      camera: "對稱正面構圖，主體置中，兩側物件形成對比",
      duration: 6.864,
      image: "./images/scene-071.webp",
      animation: "panDown",
      captions: [
        {
          id: 71,
          start: 566.62,
          end: 573.484,
          text: "這一章真正要練的是化為己用的「吸收力」，建立屬於自己的獨立知識體系。"
        }
      ]
    },
    {
      id: 72,
      start: 573.484,
      end: 579.54,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "累積了豐富的知性內涵後，要如何在工作與生活中轉化為行動突破？",
      sceneBrief: "主角合上書本走向工作現場的一面問題牆，準備把知識轉成行動",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 6.056,
      image: "./images/scene-072.webp",
      animation: "pushIn",
      captions: [
        {
          id: 72,
          start: 573.484,
          end: 579.54,
          text: "累積了豐富的知性內涵後，要如何在工作與生活中轉化為行動突破？"
        }
      ]
    },
    {
      id: 73,
      start: 579.72,
      end: 583.078,
      chapter: "三、深度閱讀的思維練習",
      sourceCaption: "這就需要第四個練習：潛能激發。",
      sceneBrief: "把「這就需要第四個練習 潛能激發」具象成單一可見事件，主角必須有明確操作、移動或與他人互動，避免站立擺拍",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 3.358,
      image: "./images/scene-073.webp",
      animation: "panLeft",
      captions: [
        {
          id: 73,
          start: 579.72,
          end: 583.078,
          text: "這就需要第四個練習：潛能激發。"
        }
      ]
    },
    {
      id: 74,
      start: 583.078,
      end: 594.72,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "四、潛能激發的思維練習面對工作卡關、業績下滑或突發挫折的場景，一般人很容易陷入情緒焦慮或憑感覺盲目嘗試。",
      sceneBrief: "辦公桌上同時出現下降圖表、被退回提案與待辦清單，主角焦慮盯著螢幕",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 11.642,
      image: "./images/scene-074.webp",
      animation: "pullOut",
      captions: [
        {
          id: 74,
          start: 583.078,
          end: 594.72,
          text: "四、潛能激發的思維練習面對工作卡關、業績下滑或突發挫折的場景，一般人很容易陷入情緒焦慮或憑感覺盲目嘗試。"
        }
      ]
    },
    {
      id: 75,
      start: 594.9,
      end: 601.116,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "這背後的核心問題，在於缺乏客觀理性的分析框架與精神隔絕能力。",
      sceneBrief: "混亂問題被放入清晰四格框架，主角逐格分類，外部噪音被隔在透明罩外",
      camera: "肩後視角，從主角後方看向主要任務或資訊來源",
      duration: 6.216,
      image: "./images/scene-075.webp",
      animation: "panRight",
      captions: [
        {
          id: 75,
          start: 594.9,
          end: 601.116,
          text: "這背後的核心問題，在於缺乏客觀理性的分析框架與精神隔絕能力。"
        }
      ]
    },
    {
      id: 76,
      start: 601.116,
      end: 606.71,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "潛能激發的四個代表方法包括：第一是「假設驗證循環法」。",
      sceneBrief: "白板上三個圓環依序代表假設、實驗、觀察，主角沿循環貼便利貼",
      camera: "斜角中廣角，前景實驗器材，中景人物操作，後景保留多次測試痕跡",
      duration: 5.594,
      image: "./images/scene-076.webp",
      animation: "panUp",
      captions: [
        {
          id: 76,
          start: 601.116,
          end: 606.71,
          text: "潛能激發的四個代表方法包括：第一是「假設驗證循環法」。"
        }
      ]
    },
    {
      id: 77,
      start: 606.71,
      end: 613.34,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "遇到問題時依序進行「假設 ➔ 實驗 ➔ 觀察」，以科學式思考尋找突破口。",
      sceneBrief: "實驗桌上主角從假設卡出發操作小測試，再查看數據，形成完整閉環",
      camera: "斜角中廣角，前景實驗器材，中景人物操作，後景保留多次測試痕跡",
      duration: 6.63,
      image: "./images/scene-077.webp",
      animation: "panDown",
      captions: [
        {
          id: 77,
          start: 606.71,
          end: 613.34,
          text: "遇到問題時依序進行「假設 ➔ 實驗 ➔ 觀察」，以科學式思考尋找突破口。"
        }
      ]
    },
    {
      id: 78,
      start: 613.52,
      end: 616.234,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "第二是「座標軸決策法」。",
      sceneBrief: "大型X/Y四象限決策板，主角把不同方案磁鐵依條件放入各象限",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 2.714,
      image: "./images/scene-078.webp",
      animation: "pushIn",
      captions: [
        {
          id: 78,
          start: 613.52,
          end: 616.234,
          text: "第二是「座標軸決策法」。"
        }
      ]
    },
    {
      id: 79,
      start: 616.234,
      end: 622.342,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "畫出 X 軸與 Y 軸切分四象限，進行理性分析與資源精準分配。",
      sceneBrief: "俯視決策板，四象限內放著不同資源與方案卡，主角拿尺做理性分類",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 6.108,
      image: "./images/scene-079.webp",
      animation: "panLeft",
      captions: [
        {
          id: 79,
          start: 616.234,
          end: 622.342,
          text: "畫出 X 軸與 Y 軸切分四象限，進行理性分析與資源精準分配。"
        }
      ]
    },
    {
      id: 80,
      start: 622.342,
      end: 625.283,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "第三是「心流律動隔離法」。",
      sceneBrief: "主角戴耳機坐在專注書桌前，背景噪音被透明牆隔絕，音樂波形環繞",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 2.941,
      image: "./images/scene-080.webp",
      animation: "pullOut",
      captions: [
        {
          id: 80,
          start: 622.342,
          end: 625.283,
          text: "第三是「心流律動隔離法」。"
        }
      ]
    },
    {
      id: 81,
      start: 625.283,
      end: 633.2,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "配合單曲循環音樂打造徹底隔絕干擾的極致專注空間，讓意識如水般滑順流動。",
      sceneBrief: "耳機、循環播放符號與高度專注工作畫面結合，桌面只保留必要工具",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 7.917,
      image: "./images/scene-081.webp",
      animation: "panRight",
      captions: [
        {
          id: 81,
          start: 625.283,
          end: 633.2,
          text: "配合單曲循環音樂打造徹底隔絕干擾的極致專注空間，讓意識如水般滑順流動。"
        }
      ]
    },
    {
      id: 82,
      start: 633.38,
      end: 636.349,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "第四是「愛迪生無敗思考法」。",
      sceneBrief: "復古實驗室，多個未成功燈絲樣本排列，主角逐一排除錯誤材料並繼續測試",
      camera: "斜角中廣角，前景實驗器材，中景人物操作，後景保留多次測試痕跡",
      duration: 2.969,
      image: "./images/scene-082.webp",
      animation: "panUp",
      captions: [
        {
          id: 82,
          start: 633.38,
          end: 636.349,
          text: "第四是「愛迪生無敗思考法」。"
        }
      ]
    },
    {
      id: 83,
      start: 636.349,
      end: 643.56,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "不把不順利當失敗，而是認定「證實了此路不通，又排除了一個錯誤選項」。",
      sceneBrief: "迷宮中多條錯誤道路被逐一封閉，只剩新的探索路徑向前延伸",
      camera: "肩後視角，從主角後方看向主要任務或資訊來源",
      duration: 7.211,
      image: "./images/scene-083.webp",
      animation: "panDown",
      captions: [
        {
          id: 83,
          start: 636.349,
          end: 643.56,
          text: "不把不順利當失敗，而是認定「證實了此路不通，又排除了一個錯誤選項」。"
        }
      ]
    },
    {
      id: 84,
      start: 643.56,
      end: 651.62,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "書中記載的代表案例：便利商店業績不佳時，店長建立擺設與服務的假設並進行實驗；",
      sceneBrief: "便利商店店長調整貨架與服務動線，旁邊比較調整前後的客流與銷售",
      camera: "斜角中廣角，前景實驗器材，中景人物操作，後景保留多次測試痕跡",
      duration: 8.06,
      image: "./images/scene-084.webp",
      animation: "pushIn",
      captions: [
        {
          id: 84,
          start: 643.56,
          end: 651.62,
          text: "書中記載的代表案例：便利商店業績不佳時，店長建立擺設與服務的假設並進行實驗；"
        }
      ]
    },
    {
      id: 85,
      start: 651.8,
      end: 657.741,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "吉他手史蒂夫·史蒂文斯的音樂陪伴作者克服校對苦差事；",
      sceneBrief: "夜間校對工作桌，主角戴耳機聽搖滾樂，在厚稿件上持續專注修改",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 5.941,
      image: "./images/scene-085.webp",
      animation: "panLeft",
      captions: [
        {
          id: 85,
          start: 651.8,
          end: 657.741,
          text: "吉他手史蒂夫·史蒂文斯的音樂陪伴作者克服校對苦差事；"
        }
      ]
    },
    {
      id: 86,
      start: 657.741,
      end: 666.88,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "發明王愛迪生在測試白熾燈泡燈絲材料不順利時，當作失敗從未發生過，持續尋找新材料。",
      sceneBrief: "復古實驗室，發明家在大量燈絲材料中反覆測試，桌上堆著多個未成功樣本",
      camera: "斜角中廣角，前景實驗器材，中景人物操作，後景保留多次測試痕跡",
      duration: 9.139,
      image: "./images/scene-086.webp",
      animation: "pullOut",
      captions: [
        {
          id: 86,
          start: 657.741,
          end: 666.88,
          text: "發明王愛迪生在測試白熾燈泡燈絲材料不順利時，當作失敗從未發生過，持續尋找新材料。"
        }
      ]
    },
    {
      id: 87,
      start: 667.06,
      end: 684.74,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "現代延伸應用方面：當個人粉專觸及率下滑或提案被拒絕時，不盲目自責，而是假設「發文時間或標題風格不對」，設計小實驗改在晚上九點發文並觀察互動數據（現代延伸思考）。",
      sceneBrief: "內容創作者看著下降社群數據，重新設定晚上九點發布並比較新舊互動曲線",
      camera: "斜角中廣角，前景實驗器材，中景人物操作，後景保留多次測試痕跡",
      duration: 17.68,
      image: "./images/scene-087.webp",
      animation: "panRight",
      captions: [
        {
          id: 87,
          start: 667.06,
          end: 684.74,
          text: "現代延伸應用方面：當個人粉專觸及率下滑或提案被拒絕時，不盲目自責，而是假設「發文時間或標題風格不對」，設計小實驗改在晚上九點發文並觀察互動數據（現代延伸思考）。"
        }
      ]
    },
    {
      id: 88,
      start: 684.92,
      end: 692.877,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "這一章真正要練的是客觀理性的「突破力」，讓每一次挫折都成為滾動迭代的養分。",
      sceneBrief: "主角踩著一連串實驗結果方塊越過障礙牆，失敗資料變成向上的階梯",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 7.957,
      image: "./images/scene-088.webp",
      animation: "panUp",
      captions: [
        {
          id: 88,
          start: 684.92,
          end: 692.877,
          text: "這一章真正要練的是客觀理性的「突破力」，讓每一次挫折都成為滾動迭代的養分。"
        }
      ]
    },
    {
      id: 89,
      start: 692.877,
      end: 701.48,
      chapter: "四、潛能激發的思維練習",
      sourceCaption: "擁有了突破困境的理性動力，最後我們要向史上頂尖的天才學習，這就是第五個思維練習。",
      sceneBrief: "主角走進由歷史高手日常習慣構成的實驗室，牆上展示不同規律系統",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 8.603,
      image: "./images/scene-089.webp",
      animation: "panDown",
      captions: [
        {
          id: 89,
          start: 692.877,
          end: 701.48,
          text: "擁有了突破困境的理性動力，最後我們要向史上頂尖的天才學習，這就是第五個思維練習。"
        }
      ]
    },
    {
      id: 90,
      start: 701.66,
      end: 715.42,
      chapter: "五、學習天才的思維",
      sourceCaption: "五、學習天才的思維許多人以為天才靠的是不可思議的靈感與天賦，但觀察他們的日常場景，會發現天才最驚人的其實是極度規律的習慣與系統。",
      sceneBrief: "一天被分成工作、休息、運動、練習等規律區塊，像精密時鐘穩定運作",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 13.76,
      image: "./images/scene-090.webp",
      animation: "pushIn",
      captions: [
        {
          id: 90,
          start: 701.66,
          end: 715.42,
          text: "五、學習天才的思維許多人以為天才靠的是不可思議的靈感與天賦，但觀察他們的日常場景，會發現天才最驚人的其實是極度規律的習慣與系統。"
        }
      ]
    },
    {
      id: 91,
      start: 715.6,
      end: 722.083,
      chapter: "五、學習天才的思維",
      sourceCaption: "一般人的核心問題，在於把精力浪費在瑣事消耗與完美主義焦慮中。",
      sceneBrief: "主角被通知、雜務與完美主義紙團纏住，真正重要工作被擠到角落",
      camera: "肩後視角，從主角後方看向主要任務或資訊來源",
      duration: 6.483,
      image: "./images/scene-091.webp",
      animation: "panLeft",
      captions: [
        {
          id: 91,
          start: 715.6,
          end: 722.083,
          text: "一般人的核心問題，在於把精力浪費在瑣事消耗與完美主義焦慮中。"
        }
      ]
    },
    {
      id: 92,
      start: 722.083,
      end: 728.349,
      chapter: "五、學習天才的思維",
      sourceCaption: "學習天才的四個代表方法包括：第一是「愛因斯坦獎勵規律法」。",
      sceneBrief: "書房中科學家長時間思考後拿起小提琴放鬆，工作與獎勵形成節奏",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 6.266,
      image: "./images/scene-092.webp",
      animation: "pullOut",
      captions: [
        {
          id: 92,
          start: 722.083,
          end: 728.349,
          text: "學習天才的四個代表方法包括：第一是「愛因斯坦獎勵規律法」。"
        }
      ]
    },
    {
      id: 93,
      start: 728.349,
      end: 735.48,
      chapter: "五、學習天才的思維",
      sourceCaption: "在長時間工作空檔建立微小的幸福獎勵機制，維繫大腦與精神的長期平衡。",
      sceneBrief: "主角完成一段工作後吃一小塊巧克力或短暫聽音樂，再回到桌前",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 7.131,
      image: "./images/scene-093.webp",
      animation: "panRight",
      captions: [
        {
          id: 93,
          start: 728.349,
          end: 735.48,
          text: "在長時間工作空檔建立微小的幸福獎勵機制，維繫大腦與精神的長期平衡。"
        }
      ]
    },
    {
      id: 94,
      start: 735.66,
      end: 738.817,
      chapter: "五、學習天才的思維",
      sourceCaption: "第二是「吉田松陰教學相長法」。",
      sceneBrief: "傳統日式牢房學習空間，不同囚犯彼此教授擅長技能，形成互教圈",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 3.157,
      image: "./images/scene-094.webp",
      animation: "panUp",
      captions: [
        {
          id: 94,
          start: 735.66,
          end: 738.817,
          text: "第二是「吉田松陰教學相長法」。"
        }
      ]
    },
    {
      id: 95,
      start: 738.817,
      end: 745.343,
      chapter: "五、學習天才的思維",
      sourceCaption: "不拘泥身份地位，透過「教導他人」與「雙向交流」來深層鞏固知識。",
      sceneBrief: "兩人輪流站在小白板前互教，講解者與學習者角色交換",
      camera: "對稱正面構圖，主體置中，兩側物件形成對比",
      duration: 6.526,
      image: "./images/scene-095.webp",
      animation: "panDown",
      captions: [
        {
          id: 95,
          start: 738.817,
          end: 745.343,
          text: "不拘泥身份地位，透過「教導他人」與「雙向交流」來深層鞏固知識。"
        }
      ]
    },
    {
      id: 96,
      start: 745.343,
      end: 748.5,
      chapter: "五、學習天才的思維",
      sourceCaption: "第三是「史蒂芬金先量後質法」。",
      sceneBrief: "作家在清晨桌前高速打字，旁邊字數計數器快速累積，草稿頁持續增加",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 3.157,
      image: "./images/scene-096.webp",
      animation: "pushIn",
      captions: [
        {
          id: 96,
          start: 745.343,
          end: 748.5,
          text: "第三是「史蒂芬金先量後質法」。"
        }
      ]
    },
    {
      id: 97,
      start: 748.68,
      end: 757.06,
      chapter: "五、學習天才的思維",
      sourceCaption: "事先決定目標產出數量，啟動時完全不管品質先衝出數量，克服拖延與完美主義。",
      sceneBrief: "白板上只顯示完成數量的進度格，主角不停寫草稿、不回頭修改",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 8.38,
      image: "./images/scene-097.webp",
      animation: "panLeft",
      captions: [
        {
          id: 97,
          start: 748.68,
          end: 757.06,
          text: "事先決定目標產出數量，啟動時完全不管品質先衝出數量，克服拖延與完美主義。"
        }
      ]
    },
    {
      id: 98,
      start: 757.06,
      end: 760.551,
      chapter: "五、學習天才的思維",
      sourceCaption: "第四是「村上春樹體能調節法」。",
      sceneBrief: "清晨河岸長跑，作家規律跑步，遠處書桌與稿紙形成第二層意象",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 3.491,
      image: "./images/scene-098.webp",
      animation: "pullOut",
      captions: [
        {
          id: 98,
          start: 757.06,
          end: 760.551,
          text: "第四是「村上春樹體能調節法」。"
        }
      ]
    },
    {
      id: 99,
      start: 760.551,
      end: 768,
      chapter: "五、學習天才的思維",
      sourceCaption: "每天透過規律運動與身體鍛鍊，為高強度的頭腦思考提供強大肉體支撐。",
      sceneBrief: "主角跑步後回到書桌精神飽滿，身體能量轉化成穩定思考的光線",
      camera: "低角度跟拍廣角，人物沿透視線移動，背景帶出速度感",
      duration: 7.449,
      image: "./images/scene-099.webp",
      animation: "panRight",
      captions: [
        {
          id: 99,
          start: 760.551,
          end: 768,
          text: "每天透過規律運動與身體鍛鍊，為高強度的頭腦思考提供強大肉體支撐。"
        }
      ]
    },
    {
      id: 100,
      start: 768.18,
      end: 781.067,
      chapter: "五、學習天才的思維",
      sourceCaption: "書中記載的代表案例：愛因斯坦在思考空檔拉小提琴調劑精神，作者與漫畫家手塚治虫在工作每完成一個段落時吃一塊巧克力；",
      sceneBrief: "蒙太奇場景：科學家拉小提琴、工作者吃巧克力，呈現完成工作後的小獎勵",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 12.887,
      image: "./images/scene-100.webp",
      animation: "panUp",
      captions: [
        {
          id: 100,
          start: 768.18,
          end: 781.067,
          text: "書中記載的代表案例：愛因斯坦在思考空檔拉小提琴調劑精神，作者與漫畫家手塚治虫在工作每完成一個段落時吃一塊巧克力；"
        }
      ]
    },
    {
      id: 101,
      start: 781.067,
      end: 786.82,
      chapter: "五、學習天才的思維",
      sourceCaption: "吉田松陰在野山獄牢房中讓囚犯們互相教導擅長的事物；",
      sceneBrief: "傳統日式牢房學習空間，不同囚犯彼此教授擅長技能，形成互教圈",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 5.753,
      image: "./images/scene-101.webp",
      animation: "panDown",
      captions: [
        {
          id: 101,
          start: 781.067,
          end: 786.82,
          text: "吉田松陰在野山獄牢房中讓囚犯們互相教導擅長的事物；"
        }
      ]
    },
    {
      id: 102,
      start: 787,
      end: 793.41,
      chapter: "五、學習天才的思維",
      sourceCaption: "恐怖小說家史蒂芬·金規定自己每天上午閉關寫滿兩千字；",
      sceneBrief: "小說家關起房門在清晨固定寫作，桌上紙張逐頁堆高",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 6.41,
      image: "./images/scene-102.webp",
      animation: "pushIn",
      captions: [
        {
          id: 102,
          start: 787,
          end: 793.41,
          text: "恐怖小說家史蒂芬·金規定自己每天上午閉關寫滿兩千字；"
        }
      ]
    },
    {
      id: 103,
      start: 793.41,
      end: 802.04,
      chapter: "五、學習天才的思維",
      sourceCaption: "作家村上春樹每天跑步十公里，以及棒球選手鈴木一朗做相撲伸展式切換大腦。",
      sceneBrief: "長跑、伸展與寫作桌三段動作串成規律日常訓練",
      camera: "低角度跟拍廣角，人物沿透視線移動，背景帶出速度感",
      duration: 8.63,
      image: "./images/scene-103.webp",
      animation: "panLeft",
      captions: [
        {
          id: 103,
          start: 793.41,
          end: 802.04,
          text: "作家村上春樹每天跑步十公里，以及棒球選手鈴木一朗做相撲伸展式切換大腦。"
        }
      ]
    },
    {
      id: 104,
      start: 802.22,
      end: 817.26,
      chapter: "五、學習天才的思維",
      sourceCaption: "現代延伸應用方面：克服自媒體寫作或報告拖延症時，規定自己今晚不許修改，必須一口氣在三十分鐘內寫完一千字初稿，先完成再完美（現代延伸思考）。",
      sceneBrief: "內容創作者啟動三十分鐘倒數，快速敲鍵盤完成初稿，完全不回頭修改",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 15.04,
      image: "./images/scene-104.webp",
      animation: "pullOut",
      captions: [
        {
          id: 104,
          start: 802.22,
          end: 817.26,
          text: "現代延伸應用方面：克服自媒體寫作或報告拖延症時，規定自己今晚不許修改，必須一口氣在三十分鐘內寫完一千字初稿，先完成再完美（現代延伸思考）。"
        }
      ]
    },
    {
      id: 105,
      start: 817.44,
      end: 824.256,
      chapter: "五、學習天才的思維",
      sourceCaption: "這一章真正要練的是持之以恆的「系統力」，把聰明變成一種穩定的生活習慣。",
      sceneBrief: "多個小習慣齒輪彼此咬合，帶動中央大腦圖示穩定運轉",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 6.816,
      image: "./images/scene-105.webp",
      animation: "panRight",
      captions: [
        {
          id: 105,
          start: 817.44,
          end: 824.256,
          text: "這一章真正要練的是持之以恆的「系統力」，把聰明變成一種穩定的生活習慣。"
        }
      ]
    },
    {
      id: 106,
      start: 824.256,
      end: 832.24,
      chapter: "六、五大整合",
      sourceCaption: "六、五大整合學完了這五大思維練習，我們該如何把它們組合成一個完整的個人思考系統呢？",
      sceneBrief: "五個相連工作站依序象徵整理、溝通、閱讀、突破與習慣，主角沿流程移動",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 7.984,
      image: "./images/scene-106.webp",
      animation: "panUp",
      captions: [
        {
          id: 106,
          start: 824.256,
          end: 832.24,
          text: "六、五大整合學完了這五大思維練習，我們該如何把它們組合成一個完整的個人思考系統呢？"
        }
      ]
    },
    {
      id: 107,
      start: 832.42,
      end: 845.46,
      chapter: "六、五大整合",
      sourceCaption: "請想像一下這個完整的運作流程：當外部海量的資訊湧入時，我們首先啟動「整理資訊的思維」，透過三色筆與單頁 A4 進行去蕪存菁；",
      sceneBrief: "主角用篩網從大量紙張中篩出少數金色重點卡片，無關資料落入紙簍",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 13.04,
      image: "./images/scene-107.webp",
      animation: "panDown",
      captions: [
        {
          id: 107,
          start: 832.42,
          end: 845.46,
          text: "請想像一下這個完整的運作流程：當外部海量的資訊湧入時，我們首先啟動「整理資訊的思維」，透過三色筆與單頁 A4 進行去蕪存菁；"
        }
      ]
    },
    {
      id: 108,
      start: 845.64,
      end: 855.853,
      chapter: "六、五大整合",
      sourceCaption: "當需要對外提案或溝通決策時，我們調用「高效溝通的思維」，以三歲小孩懂的語言與限縮三選項正中紅心；",
      sceneBrief: "成年人蹲下用積木與簡單圖形向小孩解釋複雜概念，小孩露出理解表情",
      camera: "雙人中景側拍，保留眼神與肢體互動，背景簡潔",
      duration: 10.213,
      image: "./images/scene-108.webp",
      animation: "pushIn",
      captions: [
        {
          id: 108,
          start: 845.64,
          end: 855.853,
          text: "當需要對外提案或溝通決策時，我們調用「高效溝通的思維」，以三歲小孩懂的語言與限縮三選項正中紅心；"
        }
      ]
    },
    {
      id: 109,
      start: 855.853,
      end: 865.64,
      chapter: "六、五大整合",
      sourceCaption: "當需要補充內涵與建構知識時，我們運用「深度閱讀的思維」，透過目次速查與五書連讀建構領域全貌；",
      sceneBrief: "主角從會議場景走進安靜書房，桌上打開厚書與筆記本，開始沉浸閱讀",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 9.787,
      image: "./images/scene-109.webp",
      animation: "panLeft",
      captions: [
        {
          id: 109,
          start: 855.853,
          end: 865.64,
          text: "當需要補充內涵與建構知識時，我們運用「深度閱讀的思維」，透過目次速查與五書連讀建構領域全貌；"
        }
      ]
    },
    {
      id: 110,
      start: 865.82,
      end: 876.363,
      chapter: "六、五大整合",
      sourceCaption: "當面對棘手難題與瓶頸時，我們切換至「潛能激發的思維」，用假設驗證循環與愛迪生無敗思考尋找突破；",
      sceneBrief: "復古實驗室，發明家在大量燈絲材料中反覆測試，桌上堆著多個未成功樣本",
      camera: "斜角中廣角，前景實驗器材，中景人物操作，後景保留多次測試痕跡",
      duration: 10.543,
      image: "./images/scene-110.webp",
      animation: "pullOut",
      captions: [
        {
          id: 110,
          start: 865.82,
          end: 876.363,
          text: "當面對棘手難題與瓶頸時，我們切換至「潛能激發的思維」，用假設驗證循環與愛迪生無敗思考尋找突破；"
        }
      ]
    },
    {
      id: 111,
      start: 876.363,
      end: 888.7,
      chapter: "六、五大整合",
      sourceCaption: "而為了讓這套系統長期穩定運作，我們融入「學習天才的思維」，以微獎勵機制、先量後質與體能調節提供源源不絕的動能。",
      sceneBrief: "控制台切換習慣模式，獎勵、產出量與運動三齒輪穩定驅動整套系統",
      camera: "對稱正面構圖，主體置中，兩側物件形成對比",
      duration: 12.337,
      image: "./images/scene-111.webp",
      animation: "panRight",
      captions: [
        {
          id: 111,
          start: 876.363,
          end: 888.7,
          text: "而為了讓這套系統長期穩定運作，我們融入「學習天才的思維」，以微獎勵機制、先量後質與體能調節提供源源不絕的動能。"
        }
      ]
    },
    {
      id: 112,
      start: 888.88,
      end: 894.201,
      chapter: "六、五大整合",
      sourceCaption: "這五個思維環節環環相扣，形成了一座強大的知識防護罩。",
      sceneBrief: "五種思維模組形成透明圓形護盾，外部錯誤訊息與焦慮撞上後被彈開",
      camera: "斜角動態構圖，以透視線引導視線到核心事件",
      duration: 5.321,
      image: "./images/scene-112.webp",
      animation: "panUp",
      captions: [
        {
          id: 112,
          start: 888.88,
          end: 894.201,
          text: "這五個思維環節環環相扣，形成了一座強大的知識防護罩。"
        }
      ]
    },
    {
      id: 113,
      start: 894.201,
      end: 901.16,
      chapter: "六、五大整合",
      sourceCaption: "它能讓你擺脫盲從與焦慮，在關鍵時刻做出一針見血、勝算更高的聰明決策。",
      sceneBrief: "主角從混亂人群與資訊雲中走出，面前只剩清楚決策道路與標靶",
      camera: "低角度廣角，前景物件框景，中景主角操作，後景交代環境",
      duration: 6.959,
      image: "./images/scene-113.webp",
      animation: "panDown",
      captions: [
        {
          id: 113,
          start: 894.201,
          end: 901.16,
          text: "它能讓你擺脫盲從與焦慮，在關鍵時刻做出一針見血、勝算更高的聰明決策。"
        }
      ]
    },
    {
      id: 114,
      start: 901.34,
      end: 916.5,
      chapter: "七、結尾",
      sourceCaption: "七、結尾最後，提供三個你今天就能立刻開始的思維小練習：第一個練習：今天挑選一篇你看到的新聞文章，選出三個關鍵字，用手機碼表計時在一分鐘內口頭說完。",
      sceneBrief: "主角拿手機計時器讀一篇新聞，圈出三個關鍵字並在一分鐘內口頭總結",
      camera: "高角度俯視，強調桌面工具、資料排列與人物手部動作",
      duration: 15.16,
      image: "./images/scene-114.webp",
      animation: "pushIn",
      captions: [
        {
          id: 114,
          start: 901.34,
          end: 916.5,
          text: "七、結尾最後，提供三個你今天就能立刻開始的思維小練習：第一個練習：今天挑選一篇你看到的新聞文章，選出三個關鍵字，用手機碼表計時在一分鐘內口頭說完。"
        }
      ]
    },
    {
      id: 115,
      start: 916.68,
      end: 927.251,
      chapter: "七、結尾",
      sourceCaption: "第二個練習：在下次開會或簡報時，試著將資料濃縮在一頁 A4 紙上，並提供 A、B、C 三個明確選項。",
      sceneBrief: "俯視桌面，一張A4只保留三個主區塊與優先順序，旁邊用雲端圖示代表細節另存",
      camera: "高角度俯視，清楚呈現桌面資料、工具與結構關係",
      duration: 10.571,
      image: "./images/scene-115.webp",
      animation: "panLeft",
      captions: [
        {
          id: 115,
          start: 916.68,
          end: 927.251,
          text: "第二個練習：在下次開會或簡報時，試著將資料濃縮在一頁 A4 紙上，並提供 A、B、C 三個明確選項。"
        }
      ]
    },
    {
      id: 116,
      start: 927.251,
      end: 939.2,
      chapter: "七、結尾",
      sourceCaption: "第三個練習：今晚工作卡關時，開啟手機勿擾模式，挑選一首王牌歌曲單曲循環播放三十分鐘，體驗極致專注的心流。",
      sceneBrief: "辦公桌上同時出現下降圖表、被退回提案與待辦清單，主角焦慮盯著螢幕",
      camera: "中景側拍，保留人物動作與環境關係，景深清楚",
      duration: 11.949,
      image: "./images/scene-116.webp",
      animation: "pullOut",
      captions: [
        {
          id: 116,
          start: 927.251,
          end: 939.2,
          text: "第三個練習：今晚工作卡關時，開啟手機勿擾模式，挑選一首王牌歌曲單曲循環播放三十分鐘，體驗極致專注的心流。"
        }
      ]
    },
    {
      id: 117,
      start: 939.38,
      end: 945.404,
      chapter: "七、結尾",
      sourceCaption: "聰明從來就不是天生的天賦，而是一套可以透過練習養成的習慣。",
      sceneBrief: "由每日練習小步驟組成的階梯向上延伸，主角一步步走高",
      camera: "近景特寫，聚焦手部操作、表情與關鍵物件",
      duration: 6.024,
      image: "./images/scene-117.webp",
      animation: "panRight",
      captions: [
        {
          id: 117,
          start: 939.38,
          end: 945.404,
          text: "聰明從來就不是天生的天賦，而是一套可以透過練習養成的習慣。"
        }
      ]
    },
    {
      id: 118,
      start: 945.404,
      end: 951.22,
      chapter: "七、結尾",
      sourceCaption: "從今天開始，做自己大腦的主人，建立屬於你的聰明思維系統！",
      sceneBrief: "主角站在自己的思維控制室中央，五大模組穩定運轉，神情自信",
      camera: "長焦壓縮構圖，讓前後景資訊形成層次與壓迫感",
      duration: 5.816,
      image: "./images/scene-118.webp",
      animation: "panUp",
      captions: [
        {
          id: 118,
          start: 945.404,
          end: 951.22,
          text: "從今天開始，做自己大腦的主人，建立屬於你的聰明思維系統！"
        }
      ]
    }
  ];
  const captions = [
    {
      id: 1,
      start: 1.5,
      end: 12.83,
      text: "前言每天早上一睜開眼，手機裡的推播訊息、社群討論、短影音、甚至是人工智慧生成的各類文章就像洪水般湧來。"
    },
    {
      id: 2,
      start: 12.83,
      end: 17.94,
      text: "每個人都講得頭頭是道，每個觀點聽起來都有道理。"
    },
    {
      id: 3,
      start: 18.12,
      end: 24.252,
      text: "但你是不是也常覺得，自己讀了再多資料，腦袋依然一片混亂？"
    },
    {
      id: 4,
      start: 24.252,
      end: 31.48,
      text: "甚至在關鍵的會議或簡報時刻，講了大半天，別人卻依然聽不懂你的重點？"
    },
    {
      id: 5,
      start: 31.66,
      end: 37.108,
      text: "這並不是因為你不夠努力，也不是因為你吸收的資訊太少。"
    },
    {
      id: 6,
      start: 37.108,
      end: 45.7,
      text: "相反地，我們都陷入了「資訊過載」的陷阱，在不知不覺中被龐雜的外部訊息給「洗腦」了。"
    },
    {
      id: 7,
      start: 45.88,
      end: 52.764,
      text: "我們以為自己接收到了知識，實際上卻只是讓大腦處於疲憊不堪的混亂狀態。"
    },
    {
      id: 8,
      start: 52.764,
      end: 62.28,
      text: "要擺脫這種無效接收，我們需要的不是尋找更多資訊，而是為自己的大腦建立一套獨立運作的思維防護網。"
    },
    {
      id: 9,
      start: 62.46,
      end: 70.999,
      text: "今天我們要分享的這套心法，就是來自日本知名教育學者齋藤孝所著的《不被洗腦的思維練習》。"
    },
    {
      id: 10,
      start: 70.999,
      end: 79.34,
      text: "這本書能帶你重新釐清輸入與輸出的本質，打造一個不隨波逐流、具備獨立判斷力的聰明大腦。"
    },
    {
      id: 11,
      start: 79.52,
      end: 89.004,
      text: "作者與本書這本書的作者齋藤孝先生，是日本明治大學的知名教授，也是一位著作等身的溝通與學習專家。"
    },
    {
      id: 12,
      start: 89.004,
      end: 97.68,
      text: "他在書籍序言中明確提出了一個翻轉傳統觀念的問題：究竟什麼樣的人才算得上是真正的聰明人？"
    },
    {
      id: 13,
      start: 97.86,
      end: 105.187,
      text: "一般人常以為，講話辯才無礙、或是腦中裝滿百科全書式知識的人就是聰明。"
    },
    {
      id: 14,
      start: 105.187,
      end: 115.1,
      text: "但齋藤教授指出，真正的聰明，是指有能力正確地輸入資訊、加以簡化與組織想法，並能精準輸出的人。"
    },
    {
      id: 15,
      start: 115.28,
      end: 132.08,
      text: "聰明人的溝通就像是一條河流，當對方覺得河水湍急、難以跨越時，聰明人不會強迫對方涉水，而是會主動在河面上鋪上三塊「關鍵字踏腳石」，引導對方輕鬆且安全地過河理解核心。"
    },
    {
      id: 16,
      start: 132.26,
      end: 139.895,
      text: "本書的核心問題意識，正是要幫助現代人破解「輸入太多、輸出太少」的失衡狀態。"
    },
    {
      id: 17,
      start: 139.895,
      end: 150.42000000000002,
      text: "透過整理資訊、高效溝通、深度閱讀、潛能激發以及學習天才等五大思維練習，系統化地打造勝算更高的決策能力。"
    },
    {
      id: 18,
      start: 150.6,
      end: 166.52,
      text: "一、整理資訊的思維練習在資訊氾濫的現代，我們常面臨場景帶入的困境：每天閱讀大量的文章與報告，但當主管突然問你「這份資料的重點是什麼」時，你卻結巴講不出所以然。"
    },
    {
      id: 19,
      start: 166.7,
      end: 171.57,
      text: "這背後的核心問題，在於大腦缺乏去蕪存菁的整理機制。"
    },
    {
      id: 20,
      start: 171.57,
      end: 180.14,
      text: "為了訓練整理資訊的能力，書中提供了四個非常具代表性的實作方法：第一個是「一分鐘精華法」。"
    },
    {
      id: 21,
      start: 180.32,
      end: 188.299,
      text: "挑選三個核心關鍵字，用三個十五秒分別說明一個關鍵字，最後十五秒給出結論。"
    },
    {
      id: 22,
      start: 188.299,
      end: 193.84,
      text: "這就像是一支十五秒的電視廣告，節奏明快且重點突出。"
    },
    {
      id: 23,
      start: 194.02,
      end: 197.047,
      text: "第二個是「三色畫線過濾法」。"
    },
    {
      id: 24,
      start: 197.047,
      end: 200.291,
      text: "使用紅、藍、綠三色筆分類資訊。"
    },
    {
      id: 25,
      start: 200.291,
      end: 208.94,
      text: "用紅線標註作者最核心的觀點，藍線標註客觀數據與事實，綠線標註個人主觀有趣的感悟。"
    },
    {
      id: 26,
      start: 209.12,
      end: 215.404,
      text: "劃線的不可逆性會帶來適度緊張感，逼迫自己下狠心區分重要等級。"
    },
    {
      id: 27,
      start: 215.404,
      end: 218.336,
      text: "第三個是「箭頭關聯圖像法」。"
    },
    {
      id: 28,
      start: 218.336,
      end: 228.6,
      text: "將文字關鍵字加上「→」（因果）、「＝」（等價）、「⇔」（對立）等符號連結，轉化為一目瞭然的關聯圖。"
    },
    {
      id: 29,
      start: 228.78,
      end: 231.793,
      text: "第四個是「單頁 A4 聚焦法」。"
    },
    {
      id: 30,
      start: 231.793,
      end: 239.542,
      text: "將複雜企劃強行濃縮在一頁 A4 紙上，先排序重點再呈現，細節以雲端連結附錄。"
    },
    {
      id: 31,
      start: 239.542,
      end: 246.86,
      text: "書中記載了一個極具代表性的案例：齋藤教授分享自己在電視錄影時的教訓。"
    },
    {
      id: 32,
      start: 247.04,
      end: 256.679,
      text: "電視節目要求來賓在十五秒的短時間內精準回答，如果說話太過拖沓冗長，就會被製作單位剪掉。"
    },
    {
      id: 33,
      start: 256.679,
      end: 268.56,
      text: "同樣地，向他人介紹童話故事《浦島太郎》時，只要抓出「烏龜、龍宮城、寶箱」三個關鍵字，就能迅速傳達故事全貌。"
    },
    {
      id: 34,
      start: 268.74,
      end: 289.22,
      text: "現代延伸應用方面：當我們面對 AI 生成的長篇文章或查證資料時，可以使用三色筆法，用紅線劃出 AI 的推論，藍線驗證客觀數據，綠線記錄自己的延伸靈感，就能瞬間看穿文字背後是否有幻覺或漏洞（現代延伸思考）。"
    },
    {
      id: 35,
      start: 289.4,
      end: 296.642,
      text: "這一章真正要練的是去蕪存菁的「剪裁力」，確保進入大腦的都是高純度結構化資訊。"
    },
    {
      id: 36,
      start: 296.642,
      end: 302.36,
      text: "擁有了經過整理的高純度資訊後，我們該如何精準地傳達給他人呢？"
    },
    {
      id: 37,
      start: 302.54,
      end: 306.149,
      text: "這就進入了第二個練習：高效溝通。"
    },
    {
      id: 38,
      start: 306.149,
      end: 316.3,
      text: "二、高效溝通的思維練習溝通時最常發生的問題場景，就是講者滿嘴艱深術語，聽眾卻聽得一頭霧水；"
    },
    {
      id: 39,
      start: 316.48,
      end: 320.995,
      text: "或是被問到問題時，回答流於空洞口號或流水帳。"
    },
    {
      id: 40,
      start: 320.995,
      end: 326.947,
      text: "這背後的核心問題，在於溝通時沒有切中對方的需求與問題核心。"
    },
    {
      id: 41,
      start: 326.947,
      end: 333.72,
      text: "要達成高效溝通，書中提供了四個關鍵方法：第一是「三歲小孩解玩法」。"
    },
    {
      id: 42,
      start: 333.9,
      end: 340.102,
      text: "拋棄所有專業術語與商業英文，用最通俗生活化的語言說明。"
    },
    {
      id: 43,
      start: 340.102,
      end: 345.844,
      text: "能夠讓三歲小孩都聽懂，才代表自己真正理解概念本質。"
    },
    {
      id: 44,
      start: 345.844,
      end: 349.06,
      text: "第二是「核心與具體矩陣法」。"
    },
    {
      id: 45,
      start: 349.24,
      end: 362.185,
      text: "發言時劃分「抽象-具體」與「無核心-有核心」四象限，同時兼具核心概念與具體數據，切入右上角正中紅心的理想象限。"
    },
    {
      id: 46,
      start: 362.185,
      end: 365.48,
      text: "第三是「限縮三選項簡報法」。"
    },
    {
      id: 47,
      start: 365.66,
      end: 378.252,
      text: "面對繁雜方案時，不一股腦傾倒幾十個點子，而是主動預先過濾出 A、B、C 三個可行選項，清楚交代利弊與最佳推薦。"
    },
    {
      id: 48,
      start: 378.252,
      end: 381.34,
      text: "第四是「清空白紙傾聽法」。"
    },
    {
      id: 49,
      start: 381.52,
      end: 389.711,
      text: "傾聽時主動清空過往的成見與預設立場，像一張白紙般正面面向對方，坦誠接收。"
    },
    {
      id: 50,
      start: 389.711,
      end: 395.4,
      text: "書中記載的代表案例是前日本首相田中角榮的演講風格。"
    },
    {
      id: 51,
      start: 395.58,
      end: 407.192,
      text: "田中角榮演講時，總是能精準抓出聽眾想聽的核心主題，同時列出有憑有據的數據與具體例子，緊緊抓住民眾的心。"
    },
    {
      id: 52,
      start: 407.192,
      end: 413.34000000000003,
      text: "經營之神松下幸之助也提倡「坦誠」，以白紙心態面對異見。"
    },
    {
      id: 53,
      start: 413.52,
      end: 436.56,
      text: "現代延伸應用方面：在職場向主管簡報或回應客戶需求突然變更時，不抱怨也不傾倒十個草案，而是迅速整理出「方案 A（快速但貴）、方案 B（便宜但延後）、方案 C（折中推薦版）」，讓對方能在三分鐘內輕鬆拍板（現代延伸思考）。"
    },
    {
      id: 54,
      start: 436.74,
      end: 443.666,
      text: "這一章真正要練的是一針見血的「精準力」，讓每一次輸出都能正中紅心。"
    },
    {
      id: 55,
      start: 443.666,
      end: 452.06,
      text: "搞懂了精準表達與溝通後，如果想獲取更深厚的知性內涵，就需要第三個練習：深度閱讀。"
    },
    {
      id: 56,
      start: 452.24,
      end: 466.44,
      text: "三、深度閱讀的思維練習許多人在閱讀時常遇到場景障礙：買了書卻讀不下去，或是面對大部頭專業著作感到焦慮挫折，甚至全盤照單全收、盲目崇拜權威。"
    },
    {
      id: 57,
      start: 466.62,
      end: 472.985,
      text: "這背後的核心問題，在於缺乏主動構建知識網絡與批判思考的能力。"
    },
    {
      id: 58,
      start: 472.985,
      end: 478.714,
      text: "深度閱讀的四個代表方法包括：第一是「目次架構速查法」。"
    },
    {
      id: 59,
      start: 478.714,
      end: 486.14,
      text: "選書與閱讀時優先精讀目次，三分鐘掌握全書骨幹，決定最有效率的跳讀順序。"
    },
    {
      id: 60,
      start: 486.32,
      end: 489.333,
      text: "第二是「經驗連結說書法」。"
    },
    {
      id: 61,
      start: 489.333,
      end: 497.907,
      text: "介紹書籍或輸出觀點時，強制結合一則自己的親身經歷談，將死知識內化為活體驗。"
    },
    {
      id: 62,
      start: 497.907,
      end: 500.92,
      text: "第三是「反向吐槽思考法」。"
    },
    {
      id: 63,
      start: 501.1,
      end: 509.171,
      text: "扮演搞笑藝人的吐槽角色，讀到太過極端或理所當然的句子時大聲質疑「怎麼可能？"
    },
    {
      id: 64,
      start: 509.171,
      end: 511.135,
      text: "」，打破權威崇拜。"
    },
    {
      id: 65,
      start: 511.135,
      end: 513.97,
      text: "第四是「主題五書連讀法」。"
    },
    {
      id: 66,
      start: 513.97,
      end: 522.26,
      text: "針對全新領域，一口氣挑選五本同主題書籍進行交叉閱讀，抓出反覆出現的底層概念。"
    },
    {
      id: 67,
      start: 522.44,
      end: 529.155,
      text: "書中記載的代表案例：閱讀馬基維利《君王論》時透過精彩目次掌握結構；"
    },
    {
      id: 68,
      start: 529.155,
      end: 536.48,
      text: "引用《論語》「不知為不知」名言時加上自己早期不懂裝懂搞砸專案的親身教訓；"
    },
    {
      id: 69,
      start: 536.66,
      end: 547.46,
      text: "將棋傳奇羽生善治先生即使貴為永世七冠，仍主動向十幾歲的藤井聰太與 AI 學習，展現極佳思維彈性。"
    },
    {
      id: 70,
      start: 547.64,
      end: 566.44,
      text: "現代延伸應用方面：當我們需要快速跨入「生成式 AI 應用」或全新的業務領域時，不糾結於單一入門書，直接買五本相關書籍連讀，在兩週內建構該領域八成專家共通的核心地圖（現代延伸思考）。"
    },
    {
      id: 71,
      start: 566.62,
      end: 573.484,
      text: "這一章真正要練的是化為己用的「吸收力」，建立屬於自己的獨立知識體系。"
    },
    {
      id: 72,
      start: 573.484,
      end: 579.54,
      text: "累積了豐富的知性內涵後，要如何在工作與生活中轉化為行動突破？"
    },
    {
      id: 73,
      start: 579.72,
      end: 583.078,
      text: "這就需要第四個練習：潛能激發。"
    },
    {
      id: 74,
      start: 583.078,
      end: 594.72,
      text: "四、潛能激發的思維練習面對工作卡關、業績下滑或突發挫折的場景，一般人很容易陷入情緒焦慮或憑感覺盲目嘗試。"
    },
    {
      id: 75,
      start: 594.9,
      end: 601.116,
      text: "這背後的核心問題，在於缺乏客觀理性的分析框架與精神隔絕能力。"
    },
    {
      id: 76,
      start: 601.116,
      end: 606.71,
      text: "潛能激發的四個代表方法包括：第一是「假設驗證循環法」。"
    },
    {
      id: 77,
      start: 606.71,
      end: 613.34,
      text: "遇到問題時依序進行「假設 ➔ 實驗 ➔ 觀察」，以科學式思考尋找突破口。"
    },
    {
      id: 78,
      start: 613.52,
      end: 616.234,
      text: "第二是「座標軸決策法」。"
    },
    {
      id: 79,
      start: 616.234,
      end: 622.342,
      text: "畫出 X 軸與 Y 軸切分四象限，進行理性分析與資源精準分配。"
    },
    {
      id: 80,
      start: 622.342,
      end: 625.283,
      text: "第三是「心流律動隔離法」。"
    },
    {
      id: 81,
      start: 625.283,
      end: 633.2,
      text: "配合單曲循環音樂打造徹底隔絕干擾的極致專注空間，讓意識如水般滑順流動。"
    },
    {
      id: 82,
      start: 633.38,
      end: 636.349,
      text: "第四是「愛迪生無敗思考法」。"
    },
    {
      id: 83,
      start: 636.349,
      end: 643.56,
      text: "不把不順利當失敗，而是認定「證實了此路不通，又排除了一個錯誤選項」。"
    },
    {
      id: 84,
      start: 643.56,
      end: 651.62,
      text: "書中記載的代表案例：便利商店業績不佳時，店長建立擺設與服務的假設並進行實驗；"
    },
    {
      id: 85,
      start: 651.8,
      end: 657.741,
      text: "吉他手史蒂夫·史蒂文斯的音樂陪伴作者克服校對苦差事；"
    },
    {
      id: 86,
      start: 657.741,
      end: 666.88,
      text: "發明王愛迪生在測試白熾燈泡燈絲材料不順利時，當作失敗從未發生過，持續尋找新材料。"
    },
    {
      id: 87,
      start: 667.06,
      end: 684.74,
      text: "現代延伸應用方面：當個人粉專觸及率下滑或提案被拒絕時，不盲目自責，而是假設「發文時間或標題風格不對」，設計小實驗改在晚上九點發文並觀察互動數據（現代延伸思考）。"
    },
    {
      id: 88,
      start: 684.92,
      end: 692.877,
      text: "這一章真正要練的是客觀理性的「突破力」，讓每一次挫折都成為滾動迭代的養分。"
    },
    {
      id: 89,
      start: 692.877,
      end: 701.48,
      text: "擁有了突破困境的理性動力，最後我們要向史上頂尖的天才學習，這就是第五個思維練習。"
    },
    {
      id: 90,
      start: 701.66,
      end: 715.42,
      text: "五、學習天才的思維許多人以為天才靠的是不可思議的靈感與天賦，但觀察他們的日常場景，會發現天才最驚人的其實是極度規律的習慣與系統。"
    },
    {
      id: 91,
      start: 715.6,
      end: 722.083,
      text: "一般人的核心問題，在於把精力浪費在瑣事消耗與完美主義焦慮中。"
    },
    {
      id: 92,
      start: 722.083,
      end: 728.349,
      text: "學習天才的四個代表方法包括：第一是「愛因斯坦獎勵規律法」。"
    },
    {
      id: 93,
      start: 728.349,
      end: 735.48,
      text: "在長時間工作空檔建立微小的幸福獎勵機制，維繫大腦與精神的長期平衡。"
    },
    {
      id: 94,
      start: 735.66,
      end: 738.817,
      text: "第二是「吉田松陰教學相長法」。"
    },
    {
      id: 95,
      start: 738.817,
      end: 745.343,
      text: "不拘泥身份地位，透過「教導他人」與「雙向交流」來深層鞏固知識。"
    },
    {
      id: 96,
      start: 745.343,
      end: 748.5,
      text: "第三是「史蒂芬金先量後質法」。"
    },
    {
      id: 97,
      start: 748.68,
      end: 757.06,
      text: "事先決定目標產出數量，啟動時完全不管品質先衝出數量，克服拖延與完美主義。"
    },
    {
      id: 98,
      start: 757.06,
      end: 760.551,
      text: "第四是「村上春樹體能調節法」。"
    },
    {
      id: 99,
      start: 760.551,
      end: 768,
      text: "每天透過規律運動與身體鍛鍊，為高強度的頭腦思考提供強大肉體支撐。"
    },
    {
      id: 100,
      start: 768.18,
      end: 781.067,
      text: "書中記載的代表案例：愛因斯坦在思考空檔拉小提琴調劑精神，作者與漫畫家手塚治虫在工作每完成一個段落時吃一塊巧克力；"
    },
    {
      id: 101,
      start: 781.067,
      end: 786.82,
      text: "吉田松陰在野山獄牢房中讓囚犯們互相教導擅長的事物；"
    },
    {
      id: 102,
      start: 787,
      end: 793.41,
      text: "恐怖小說家史蒂芬·金規定自己每天上午閉關寫滿兩千字；"
    },
    {
      id: 103,
      start: 793.41,
      end: 802.04,
      text: "作家村上春樹每天跑步十公里，以及棒球選手鈴木一朗做相撲伸展式切換大腦。"
    },
    {
      id: 104,
      start: 802.22,
      end: 817.26,
      text: "現代延伸應用方面：克服自媒體寫作或報告拖延症時，規定自己今晚不許修改，必須一口氣在三十分鐘內寫完一千字初稿，先完成再完美（現代延伸思考）。"
    },
    {
      id: 105,
      start: 817.44,
      end: 824.256,
      text: "這一章真正要練的是持之以恆的「系統力」，把聰明變成一種穩定的生活習慣。"
    },
    {
      id: 106,
      start: 824.256,
      end: 832.24,
      text: "六、五大整合學完了這五大思維練習，我們該如何把它們組合成一個完整的個人思考系統呢？"
    },
    {
      id: 107,
      start: 832.42,
      end: 845.46,
      text: "請想像一下這個完整的運作流程：當外部海量的資訊湧入時，我們首先啟動「整理資訊的思維」，透過三色筆與單頁 A4 進行去蕪存菁；"
    },
    {
      id: 108,
      start: 845.64,
      end: 855.853,
      text: "當需要對外提案或溝通決策時，我們調用「高效溝通的思維」，以三歲小孩懂的語言與限縮三選項正中紅心；"
    },
    {
      id: 109,
      start: 855.853,
      end: 865.64,
      text: "當需要補充內涵與建構知識時，我們運用「深度閱讀的思維」，透過目次速查與五書連讀建構領域全貌；"
    },
    {
      id: 110,
      start: 865.82,
      end: 876.363,
      text: "當面對棘手難題與瓶頸時，我們切換至「潛能激發的思維」，用假設驗證循環與愛迪生無敗思考尋找突破；"
    },
    {
      id: 111,
      start: 876.363,
      end: 888.7,
      text: "而為了讓這套系統長期穩定運作，我們融入「學習天才的思維」，以微獎勵機制、先量後質與體能調節提供源源不絕的動能。"
    },
    {
      id: 112,
      start: 888.88,
      end: 894.201,
      text: "這五個思維環節環環相扣，形成了一座強大的知識防護罩。"
    },
    {
      id: 113,
      start: 894.201,
      end: 901.16,
      text: "它能讓你擺脫盲從與焦慮，在關鍵時刻做出一針見血、勝算更高的聰明決策。"
    },
    {
      id: 114,
      start: 901.34,
      end: 916.5,
      text: "七、結尾最後，提供三個你今天就能立刻開始的思維小練習：第一個練習：今天挑選一篇你看到的新聞文章，選出三個關鍵字，用手機碼表計時在一分鐘內口頭說完。"
    },
    {
      id: 115,
      start: 916.68,
      end: 927.251,
      text: "第二個練習：在下次開會或簡報時，試著將資料濃縮在一頁 A4 紙上，並提供 A、B、C 三個明確選項。"
    },
    {
      id: 116,
      start: 927.251,
      end: 939.2,
      text: "第三個練習：今晚工作卡關時，開啟手機勿擾模式，挑選一首王牌歌曲單曲循環播放三十分鐘，體驗極致專注的心流。"
    },
    {
      id: 117,
      start: 939.38,
      end: 945.404,
      text: "聰明從來就不是天生的天賦，而是一套可以透過練習養成的習慣。"
    },
    {
      id: 118,
      start: 945.404,
      end: 951.22,
      text: "從今天開始，做自己大腦的主人，建立屬於你的聰明思維系統！"
    }
  ];
  const chapters = [
    {
      id: 1,
      title: "前言",
      start: 1.5,
      end: 79.34,
      sceneStart: 1,
      sceneEnd: 10,
      duration: 77.84
    },
    {
      id: 2,
      title: "作者與本書",
      start: 79.52,
      end: 150.42000000000002,
      sceneStart: 11,
      sceneEnd: 17,
      duration: 70.9
    },
    {
      id: 3,
      title: "一、整理資訊的思維練習",
      start: 150.6,
      end: 306.149,
      sceneStart: 18,
      sceneEnd: 37,
      duration: 155.549
    },
    {
      id: 4,
      title: "二、高效溝通的思維練習",
      start: 306.149,
      end: 452.06,
      sceneStart: 38,
      sceneEnd: 55,
      duration: 145.911
    },
    {
      id: 5,
      title: "三、深度閱讀的思維練習",
      start: 452.24,
      end: 583.078,
      sceneStart: 56,
      sceneEnd: 73,
      duration: 130.838
    },
    {
      id: 6,
      title: "四、潛能激發的思維練習",
      start: 583.078,
      end: 701.48,
      sceneStart: 74,
      sceneEnd: 89,
      duration: 118.402
    },
    {
      id: 7,
      title: "五、學習天才的思維",
      start: 701.66,
      end: 824.256,
      sceneStart: 90,
      sceneEnd: 105,
      duration: 122.596
    },
    {
      id: 8,
      title: "六、五大整合",
      start: 824.256,
      end: 901.16,
      sceneStart: 106,
      sceneEnd: 113,
      duration: 76.904
    },
    {
      id: 9,
      title: "七、結尾",
      start: 901.34,
      end: 951.22,
      sceneStart: 114,
      sceneEnd: 118,
      duration: 49.88
    }
  ];
  const timeline = {
    duration,
    scenes,
    captions,
    chapters
  };
  const FPS = 30;
  const COVER_IMAGE = "./images/scene-001.webp";
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const formatTime = (seconds) => {
    const safe = Math.max(0, Number(seconds) || 0);
    const minutes = Math.floor(safe / 60);
    const secs = Math.floor(safe % 60);
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
  const findByTime = (items, time) => {
    let low = 0;
    let high = items.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const item = items[mid];
      if (time < item.start) high = mid - 1;
      else if (time >= item.end && mid < items.length - 1) low = mid + 1;
      else return item;
    }
    return items[Math.max(0, Math.min(items.length - 1, high))];
  };
  const findCaption = (items, time) => {
    let low = 0;
    let high = items.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const item = items[mid];
      if (time < item.start) high = mid - 1;
      else if (time >= item.end) low = mid + 1;
      else return item;
    }
    return null;
  };
  function SceneVisual({ currentTime = 0 }) {
    const scene = findByTime(timeline.scenes, currentTime);
    const sceneFrame = clamp((currentTime - scene.start) / Math.max(1e-3, scene.duration), 0, 1);
    const motion = {
      pushIn: { scale: 1 + sceneFrame * 0.09, translate: "0% 0%" },
      pullOut: { scale: 1.09 - sceneFrame * 0.09, translate: "0% 0%" },
      panLeft: { scale: 1.08, translate: `${2 - sceneFrame * 4}% 0%` },
      panRight: { scale: 1.08, translate: `${-2 + sceneFrame * 4}% 0%` },
      panUp: { scale: 1.08, translate: `0% ${2 - sceneFrame * 4}%` },
      panDown: { scale: 1.08, translate: `0% ${-2 + sceneFrame * 4}%` }
    }[scene.animation] || { scale: 1, translate: "0% 0%" };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scene-visual", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: scene.image, alt: `第${scene.id}鏡`, draggable: "false", style: { scale: motion.scale, translate: motion.translate } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scene-vignette" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scene-meta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "第 ",
          scene.id,
          " 鏡"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: scene.chapter })
      ] })
    ] });
  }
  function VisualComposition({ currentTime }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SceneVisual, { currentTime });
  }
  function HomeCover({ onEnter }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "home-hero", "aria-label": "首頁封面", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: COVER_IMAGE, alt: "不被洗腦的思維練習封面圖片" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "home-hero-shade" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-hero-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "home-kicker", children: "118 鏡・旁白字幕同步・動態閱讀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-title-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "不被洗腦的思維練習" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "在資訊洪流中，練習保有自己的判斷。" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "enter-button", onClick: onEnter, children: "進入閱讀 ▶" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "home-hint", children: "封面採用第 1 鏡圖片；點擊後開始閱讀與播放。" })
      ] })
    ] });
  }
  function App() {
    const audioRef = reactExports.useRef(null);
    const playerRef = reactExports.useRef(null);
    const rafRef = reactExports.useRef(null);
    const [entered, setEntered] = reactExports.useState(false);
    const [currentTime, setCurrentTime] = reactExports.useState(0);
    const [playing, setPlaying] = reactExports.useState(false);
    const [volume, setVolume] = reactExports.useState(1);
    const [isFullscreen, setIsFullscreen] = reactExports.useState(false);
    const scene = reactExports.useMemo(() => findByTime(timeline.scenes, currentTime), [currentTime]);
    const caption = reactExports.useMemo(() => findCaption(timeline.captions, currentTime), [currentTime]);
    const chapter = reactExports.useMemo(() => findByTime(timeline.chapters, currentTime), [currentTime]);
    const enterReader = reactExports.useCallback(() => {
      setEntered(true);
      window.setTimeout(() => {
        var _a;
        return (_a = document.querySelector(".reader-page")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 40);
    }, []);
    const returnHome = reactExports.useCallback(() => {
      var _a;
      (_a = audioRef.current) == null ? void 0 : _a.pause();
      setEntered(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    const syncProjection = reactExports.useCallback(() => {
      var _a;
      const audio = audioRef.current;
      if (!audio) return;
      const time = clamp(audio.currentTime, 0, timeline.duration);
      setCurrentTime(time);
      (_a = playerRef.current) == null ? void 0 : _a.seekTo(Math.round(time * FPS));
    }, []);
    const seekTo = reactExports.useCallback((target) => {
      var _a;
      const audio = audioRef.current;
      if (!audio) return;
      const time = clamp(target, 0, timeline.duration);
      audio.currentTime = time;
      setCurrentTime(time);
      (_a = playerRef.current) == null ? void 0 : _a.seekTo(Math.round(time * FPS));
    }, []);
    reactExports.useEffect(() => {
      const tick = () => {
        syncProjection();
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafRef.current);
    }, [syncProjection]);
    reactExports.useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return void 0;
      const onPlay = () => setPlaying(true);
      const onPause = () => setPlaying(false);
      audio.addEventListener("play", onPlay);
      audio.addEventListener("pause", onPause);
      return () => {
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPause);
      };
    }, []);
    const togglePlay = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (audio.paused) await audio.play();
      else audio.pause();
    };
    const jump = (delta) => {
      var _a;
      return seekTo((((_a = audioRef.current) == null ? void 0 : _a.currentTime) || 0) + delta);
    };
    const toggleFullscreen = async () => {
      var _a, _b;
      const container2 = document.querySelector(".player-shell");
      if (!document.fullscreenElement) await ((_a = container2 == null ? void 0 : container2.requestFullscreen) == null ? void 0 : _a.call(container2));
      else await ((_b = document.exitFullscreen) == null ? void 0 : _b.call(document));
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    const preloadImages = reactExports.useMemo(() => timeline.scenes.slice(Math.max(0, scene.id - 1), scene.id + 2), [scene.id]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "app-shell", children: !entered ? /* @__PURE__ */ jsxRuntimeExports.jsx(HomeCover, { onEnter: enterReader }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reader-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "site-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "自主思考閱讀計畫" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "不被洗腦的思維練習" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-status", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-dot" }),
            "單一時間軸播放"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "home-button", onClick: returnHome, children: "回首頁" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "player-shell", "aria-label": "動態說書播放器", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "player-frame", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Player, { ref: playerRef, component: VisualComposition, inputProps: { currentTime }, durationInFrames: Math.ceil(timeline.duration * FPS), compositionWidth: 16, compositionHeight: 9, fps: FPS, controls: false, acknowledgeRemotionLicense: true, style: { width: "100%", height: "100%" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-title", children: chapter.title }),
          currentTime >= chapter.start && currentTime < chapter.start + 2.5 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-banner", style: { opacity: Math.min(1, (currentTime - chapter.start) / 0.3, (chapter.start + 2.5 - currentTime) / 0.5) }, children: chapter.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "caption-overlay", "aria-live": "polite", children: (caption == null ? void 0 : caption.text) || "" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { id: "narration-audio", ref: audioRef, src: "./audio/narration-browser.ogg", preload: "auto", volume }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "controls", "aria-label": "播放控制", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: togglePlay, "aria-label": playing ? "暫停" : "播放", children: playing ? "❚❚" : "▶" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => jump(-10), "aria-label": "倒退10秒", children: "↶ 10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => jump(10), "aria-label": "快轉10秒", children: "10 ↷" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "time-label", children: [
            formatTime(currentTime),
            " / ",
            formatTime(timeline.duration)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { "aria-label": "播放進度", type: "range", min: "0", max: timeline.duration, step: "0.01", value: currentTime, onChange: (event) => seekTo(Number(event.target.value)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "volume-control", "aria-label": "音量", children: [
            "🔊",
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "1", step: "0.01", value: volume, onChange: (event) => {
              const next = Number(event.target.value);
              setVolume(next);
              if (audioRef.current) audioRef.current.volume = next;
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: toggleFullscreen, "aria-label": "全螢幕", children: isFullscreen ? "⤢" : "⛶" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "reading-info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: "目前章節" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: chapter.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: "目前畫面" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
            "第 ",
            scene.id,
            " / 118 鏡"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "chapter-tabs", "aria-label": "章節索引", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "章節索引" }),
        timeline.chapters.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: chapter.id === item.id ? "active" : "", onClick: () => seekTo(item.start), children: item.title }, item.id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preload-cache", "aria-hidden": "true", children: preloadImages.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: "" }, item.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { children: "聲音、字幕、圖片與章節均由正式 Master Timeline 同步推導。" })
    ] }) });
  }
  createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
})();
