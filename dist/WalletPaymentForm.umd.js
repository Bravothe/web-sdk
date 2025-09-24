(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('antd'), require('@ant-design/icons')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'antd', '@ant-design/icons'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.WalletPaymentForm = {}, global.React, global.antd, global.icons));
})(this, (function (exports, H, antd, icons) { 'use strict';

  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function ownKeys$2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var fails$p = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$o = fails$p;

  var functionBindNative = !fails$o(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$j = FunctionPrototype$2.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$j, call$j);

  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$j.apply(fn, arguments);
    };
  };

  var uncurryThis$q = functionUncurryThis;

  var toString$d = uncurryThis$q({}.toString);
  var stringSlice$9 = uncurryThis$q(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$9(toString$d(it), 8, -1);
  };

  var uncurryThis$p = functionUncurryThis;
  var fails$n = fails$p;
  var classof$7 = classofRaw$2;

  var $Object$4 = Object;
  var split = uncurryThis$p(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$n(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$7(it) === 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$6 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$5 = isNullOrUndefined$6;

  var $TypeError$f = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$b = function (it) {
    if (isNullOrUndefined$5(it)) throw new $TypeError$f("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible$a = requireObjectCoercible$b;

  var toIndexedObject$5 = function (it) {
    return IndexedObject$1(requireObjectCoercible$a(it));
  };

  var check = function (it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var globalThis_1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var sharedStore = {exports: {}};

  var globalThis$n = globalThis_1;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$7 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$7(globalThis$n, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      globalThis$n[key] = value;
    } return value;
  };

  var globalThis$m = globalThis_1;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = sharedStore.exports = globalThis$m[SHARED] || defineGlobalProperty$2(SHARED, {});

  (store$3.versions || (store$3.versions = [])).push({
    version: '3.41.0',
    mode: 'global',
    copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedStoreExports = sharedStore.exports;

  var store$2 = sharedStoreExports;

  var shared$4 = function (key, value) {
    return store$2[key] || (store$2[key] = value || {});
  };

  var requireObjectCoercible$9 = requireObjectCoercible$b;

  var $Object$3 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$5 = function (argument) {
    return $Object$3(requireObjectCoercible$9(argument));
  };

  var uncurryThis$o = functionUncurryThis;
  var toObject$4 = toObject$5;

  var hasOwnProperty = uncurryThis$o({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$4(it), key);
  };

  var uncurryThis$n = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$c = uncurryThis$n(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$c(++id + postfix, 36);
  };

  var globalThis$l = globalThis_1;

  var navigator = globalThis$l.navigator;
  var userAgent$8 = navigator && navigator.userAgent;

  var environmentUserAgent = userAgent$8 ? String(userAgent$8) : '';

  var globalThis$k = globalThis_1;
  var userAgent$7 = environmentUserAgent;

  var process$4 = globalThis$k.process;
  var Deno$1 = globalThis$k.Deno;
  var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent$7) {
    match = userAgent$7.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$7.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var environmentV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$1 = environmentV8Version;
  var fails$m = fails$p;
  var globalThis$j = globalThis_1;

  var $String$6 = globalThis$j.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$m(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1 &&
    !Symbol.sham &&
    typeof Symbol.iterator == 'symbol';

  var globalThis$i = globalThis_1;
  var shared$3 = shared$4;
  var hasOwn$b = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var Symbol$1 = globalThis$i.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$j = function (name) {
    if (!hasOwn$b(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$b(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var isCallable$m = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$l = isCallable$m;

  var isObject$c = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$l(it);
  };

  var isObject$b = isObject$c;

  var $String$5 = String;
  var $TypeError$e = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$e = function (argument) {
    if (isObject$b(argument)) return argument;
    throw new $TypeError$e($String$5(argument) + ' is not an object');
  };

  var objectDefineProperties = {};

  var fails$l = fails$p;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$l(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  });

  var DESCRIPTORS$c = descriptors;
  var fails$k = fails$p;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$c && fails$k(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var objectDefineProperty = {};

  var globalThis$h = globalThis_1;
  var isObject$a = isObject$c;

  var document$3 = globalThis$h.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$a(document$3) && isObject$a(document$3.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$b = descriptors;
  var fails$j = fails$p;
  var createElement$1 = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$b && !fails$j(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$i = Function.prototype.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var functionCall = NATIVE_BIND$2 ? call$i.bind(call$i) : function () {
    return call$i.apply(call$i, arguments);
  };

  var globalThis$g = globalThis_1;
  var isCallable$k = isCallable$m;

  var aFunction = function (argument) {
    return isCallable$k(argument) ? argument : undefined;
  };

  var getBuiltIn$7 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis$g[namespace]) : globalThis$g[namespace] && globalThis$g[namespace][method];
  };

  var uncurryThis$m = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$m({}.isPrototypeOf);

  var getBuiltIn$6 = getBuiltIn$7;
  var isCallable$j = isCallable$m;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$6('Symbol');
    return isCallable$j($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$2(it));
  };

  var $String$4 = String;

  var tryToString$5 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$i = isCallable$m;
  var tryToString$4 = tryToString$5;

  var $TypeError$d = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$9 = function (argument) {
    if (isCallable$i(argument)) return argument;
    throw new $TypeError$d(tryToString$4(argument) + ' is not a function');
  };

  var aCallable$8 = aCallable$9;
  var isNullOrUndefined$4 = isNullOrUndefined$6;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$5 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$4(func) ? undefined : aCallable$8(func);
  };

  var call$h = functionCall;
  var isCallable$h = isCallable$m;
  var isObject$9 = isObject$c;

  var $TypeError$c = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$h(fn = input.toString) && !isObject$9(val = call$h(fn, input))) return val;
    if (isCallable$h(fn = input.valueOf) && !isObject$9(val = call$h(fn, input))) return val;
    if (pref !== 'string' && isCallable$h(fn = input.toString) && !isObject$9(val = call$h(fn, input))) return val;
    throw new $TypeError$c("Can't convert object to primitive value");
  };

  var call$g = functionCall;
  var isObject$8 = isObject$c;
  var isSymbol$1 = isSymbol$2;
  var getMethod$4 = getMethod$5;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$i = wellKnownSymbol$j;

  var $TypeError$b = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$i('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$8(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$g(exoticToPrim, input, pref);
      if (!isObject$8(result) || isSymbol$1(result)) return result;
      throw new $TypeError$b("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$2 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var DESCRIPTORS$a = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$d = anObject$e;
  var toPropertyKey$1 = toPropertyKey$2;

  var $TypeError$a = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$d(O);
    P = toPropertyKey$1(P);
    anObject$d(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$d(O);
    P = toPropertyKey$1(P);
    anObject$d(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$a('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var ceil$1 = Math.ceil;
  var floor$3 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$3 : ceil$1)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$6 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;

  var max$1 = Math.max;
  var min$3 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toIntegerOrInfinity$5(index);
    return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
  };

  var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;

  var min$2 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$5 = function (argument) {
    var len = toIntegerOrInfinity$4(argument);
    return len > 0 ? min$2(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$4 = toLength$5;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$3 = function (obj) {
    return toLength$4(obj.length);
  };

  var toIndexedObject$4 = toIndexedObject$5;
  var toAbsoluteIndex = toAbsoluteIndex$1;
  var lengthOfArrayLike$2 = lengthOfArrayLike$3;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$4($this);
      var length = lengthOfArrayLike$2(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el !== el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value !== value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var hiddenKeys$4 = {};

  var uncurryThis$l = functionUncurryThis;
  var hasOwn$a = hasOwnProperty_1;
  var toIndexedObject$3 = toIndexedObject$5;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$3 = hiddenKeys$4;

  var push$2 = uncurryThis$l([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$3(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$a(hiddenKeys$3, key) && hasOwn$a(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$2(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$2 = Object.keys || function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

  var DESCRIPTORS$9 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$3 = objectDefineProperty;
  var anObject$c = anObject$e;
  var toIndexedObject$2 = toIndexedObject$5;
  var objectKeys$1 = objectKeys$2;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$9 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$c(O);
    var props = toIndexedObject$2(Properties);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$5 = getBuiltIn$7;

  var html$2 = getBuiltIn$5('document', 'documentElement');

  var shared$2 = shared$4;
  var uid = uid$2;

  var keys$1 = shared$2('keys');

  var sharedKey$3 = function (key) {
    return keys$1[key] || (keys$1[key] = uid(key));
  };

  /* global ActiveXObject -- old IE, WSH */
  var anObject$b = anObject$e;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$4;
  var html$1 = html$2;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$2 = sharedKey$3;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    // eslint-disable-next-line no-useless-assignment -- avoid memory leak
    activeXDocument = null;
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys$1.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
    return NullProtoObject();
  };

  hiddenKeys$2[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$b(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$h = wellKnownSymbol$j;
  var create$3 = objectCreate;
  var defineProperty$6 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$h('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
    defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$3(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var globalThis$f = globalThis_1;
  var isCallable$g = isCallable$m;

  var WeakMap$1 = globalThis$f.WeakMap;

  var weakMapBasicDetection = isCallable$g(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var createPropertyDescriptor$3 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$8 = descriptors;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$6 = DESCRIPTORS$8 ? function (object, key, value) {
    return definePropertyModule$2.f(object, key, createPropertyDescriptor$2(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var globalThis$e = globalThis_1;
  var isObject$7 = isObject$c;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
  var hasOwn$9 = hasOwnProperty_1;
  var shared$1 = sharedStoreExports;
  var sharedKey$1 = sharedKey$3;
  var hiddenKeys$1 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$2 = globalThis$e.TypeError;
  var WeakMap = globalThis$e.WeakMap;
  var set$1, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set$1(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$7(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError$2('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store$1 = shared$1.state || (shared$1.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store$1.get = store$1.get;
    store$1.has = store$1.has;
    store$1.set = store$1.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set$1 = function (it, metadata) {
      if (store$1.has(it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store$1.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store$1.get(it) || {};
    };
    has = function (it) {
      return store$1.has(it);
    };
  } else {
    var STATE = sharedKey$1('state');
    hiddenKeys$1[STATE] = true;
    set$1 = function (it, metadata) {
      if (hasOwn$9(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$5(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$9(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$9(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var objectGetOwnPropertyDescriptor = {};

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$3(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var DESCRIPTORS$7 = descriptors;
  var call$f = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;
  var toIndexedObject$1 = toIndexedObject$5;
  var toPropertyKey = toPropertyKey$2;
  var hasOwn$8 = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$1(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$8(O, P)) return createPropertyDescriptor$1(!call$f(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$6 = descriptors;
  var hasOwn$7 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$6 || (DESCRIPTORS$6 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$k = functionUncurryThis;
  var isCallable$f = isCallable$m;
  var store = sharedStoreExports;

  var functionToString = uncurryThis$k(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$f(store.inspectSource)) {
    store.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$3 = store.inspectSource;

  var uncurryThis$j = functionUncurryThis;
  var fails$i = fails$p;
  var isCallable$e = isCallable$m;
  var hasOwn$6 = hasOwnProperty_1;
  var DESCRIPTORS$5 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource$2 = inspectSource$3;
  var InternalStateModule$2 = internalState;

  var enforceInternalState$1 = InternalStateModule$2.enforce;
  var getInternalState$2 = InternalStateModule$2.get;
  var $String$3 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$5 = Object.defineProperty;
  var stringSlice$8 = uncurryThis$j(''.slice);
  var replace$4 = uncurryThis$j(''.replace);
  var join = uncurryThis$j([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$i(function () {
    return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$8($String$3(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$4($String$3(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      if (DESCRIPTORS$5) defineProperty$5(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
      defineProperty$5(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$6(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$5) defineProperty$5(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState$1(value);
    if (!hasOwn$6(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$e(this) && getInternalState$2(this).source || inspectSource$2(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$3.exports;

  var isCallable$d = isCallable$m;
  var definePropertyModule$1 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$8 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$d(value)) makeBuiltIn$1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule$1.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var objectGetOwnPropertyNames = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys = enumBugKeys$3;

  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$4 = getBuiltIn$7;
  var uncurryThis$i = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$a = anObject$e;

  var concat$2 = uncurryThis$i([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$a(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$5 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$h = fails$p;
  var isCallable$c = isCallable$m;

  var replacement = /#|\.prototype\./;

  var isForced$3 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable$c(detection) ? fails$h(detection)
      : !!detection;
  };

  var normalize = isForced$3.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$3.data = {};
  var NATIVE = isForced$3.NATIVE = 'N';
  var POLYFILL = isForced$3.POLYFILL = 'P';

  var isForced_1 = isForced$3;

  var globalThis$d = globalThis_1;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
  var defineBuiltIn$7 = defineBuiltIn$8;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced$2 = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = globalThis$d;
    } else if (STATIC) {
      target = globalThis$d[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = globalThis$d[TARGET] && globalThis$d[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$4(sourceProperty, 'sham', true);
      }
      defineBuiltIn$7(target, key, sourceProperty, options);
    }
  };

  var fails$g = fails$p;

  var correctPrototypeGetter = !fails$g(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$4 = hasOwnProperty_1;
  var isCallable$b = isCallable$m;
  var toObject$3 = toObject$5;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object$1 = Object;
  var ObjectPrototype = $Object$1.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
    var object = toObject$3(O);
    if (hasOwn$4(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$b(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object$1 ? ObjectPrototype : null;
  };

  var fails$f = fails$p;
  var isCallable$a = isCallable$m;
  var isObject$6 = isObject$c;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var defineBuiltIn$6 = defineBuiltIn$8;
  var wellKnownSymbol$g = wellKnownSymbol$j;

  var ITERATOR$5 = wellKnownSymbol$g('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$6(IteratorPrototype$2) || fails$f(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$a(IteratorPrototype$2[ITERATOR$5])) {
    defineBuiltIn$6(IteratorPrototype$2, ITERATOR$5, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$4 = objectDefineProperty.f;
  var hasOwn$3 = hasOwnProperty_1;
  var wellKnownSymbol$f = wellKnownSymbol$j;

  var TO_STRING_TAG$2 = wellKnownSymbol$f('toStringTag');

  var setToStringTag$4 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$3(target, TO_STRING_TAG$2)) {
      defineProperty$4(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$2 = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$3;
  var setToStringTag$3 = setToStringTag$4;
  var Iterators$4 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$4[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$h = functionUncurryThis;
  var aCallable$7 = aCallable$9;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$h(aCallable$7(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isObject$5 = isObject$c;

  var isPossiblePrototype$1 = function (argument) {
    return isObject$5(argument) || argument === null;
  };

  var isPossiblePrototype = isPossiblePrototype$1;

  var $String$2 = String;
  var $TypeError$9 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError$9("Can't set " + $String$2(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor = functionUncurryThisAccessor;
  var isObject$4 = isObject$c;
  var requireObjectCoercible$8 = requireObjectCoercible$b;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      requireObjectCoercible$8(O);
      aPossiblePrototype(proto);
      if (!isObject$4(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$g = _export;
  var call$e = functionCall;
  var FunctionName = functionName;
  var isCallable$9 = isCallable$m;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$2 = objectSetPrototypeOf;
  var setToStringTag$2 = setToStringTag$4;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
  var defineBuiltIn$5 = defineBuiltIn$8;
  var wellKnownSymbol$e = wellKnownSymbol$j;
  var Iterators$3 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol$e('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      }

      return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$2) {
            setPrototypeOf$2(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$9(CurrentIteratorPrototype[ITERATOR$4])) {
            defineBuiltIn$5(CurrentIteratorPrototype, ITERATOR$4, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$3(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$e(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$5(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$g({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
      defineBuiltIn$5(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
    }
    Iterators$3[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$1 = function (value, done) {
    return { value: value, done: done };
  };

  var toIndexedObject = toIndexedObject$5;
  var addToUnscopables$1 = addToUnscopables$2;
  var Iterators$2 = iterators;
  var InternalStateModule$1 = internalState;
  var defineProperty$3 = objectDefineProperty.f;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$1;
  var DESCRIPTORS$4 = descriptors;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$1(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = null;
      return createIterResultObject(undefined, true);
    }
    switch (state.kind) {
      case 'keys': return createIterResultObject(index, false);
      case 'values': return createIterResultObject(target[index], false);
    } return createIterResultObject([index, target[index]], false);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values = Iterators$2.Arguments = Iterators$2.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('keys');
  addToUnscopables$1('values');
  addToUnscopables$1('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS$4 && values.name !== 'values') try {
    defineProperty$3(values, 'name', { value: 'values' });
  } catch (error) { /* empty */ }

  var wellKnownSymbol$d = wellKnownSymbol$j;

  var TO_STRING_TAG$1 = wellKnownSymbol$d('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test$1) === '[object z]';

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var isCallable$8 = isCallable$m;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$c = wellKnownSymbol$j;

  var TO_STRING_TAG = wellKnownSymbol$c('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) === 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
  };

  var classof$5 = classof$6;

  var $String$1 = String;

  var toString$b = function (argument) {
    if (classof$5(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
  var toString$a = toString$b;
  var requireObjectCoercible$7 = requireObjectCoercible$b;

  var $RangeError$1 = RangeError;

  // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = toString$a(requireObjectCoercible$7(this));
    var result = '';
    var n = toIntegerOrInfinity$3(count);
    if (n < 0 || n === Infinity) throw new $RangeError$1('Wrong number of repetitions');
    for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };

  // https://github.com/tc39/proposal-string-pad-start-end
  var uncurryThis$g = functionUncurryThis;
  var toLength$3 = toLength$5;
  var toString$9 = toString$b;
  var $repeat$1 = stringRepeat;
  var requireObjectCoercible$6 = requireObjectCoercible$b;

  var repeat$1 = uncurryThis$g($repeat$1);
  var stringSlice$7 = uncurryThis$g(''.slice);
  var ceil = Math.ceil;

  // `String.prototype.{ padStart, padEnd }` methods implementation
  var createMethod$2 = function (IS_END) {
    return function ($this, maxLength, fillString) {
      var S = toString$9(requireObjectCoercible$6($this));
      var intMaxLength = toLength$3(maxLength);
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : toString$9(fillString);
      var fillLen, stringFiller;
      if (intMaxLength <= stringLength || fillStr === '') return S;
      fillLen = intMaxLength - stringLength;
      stringFiller = repeat$1(fillStr, ceil(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringSlice$7(stringFiller, 0, fillLen);
      return IS_END ? S + stringFiller : stringFiller + S;
    };
  };

  var stringPad = {
    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    start: createMethod$2(false)};

  // https://github.com/zloirock/core-js/issues/280
  var userAgent$6 = environmentUserAgent;

  var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent$6);

  var $$f = _export;
  var $padStart = stringPad.start;
  var WEBKIT_BUG = stringPadWebkitBug;

  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  $$f({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
    padStart: function padStart(maxLength /* , fillString = ' ' */) {
      return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var globalThis$c = globalThis_1;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
  var setToStringTag$1 = setToStringTag$4;
  var wellKnownSymbol$b = wellKnownSymbol$j;

  var ITERATOR$3 = wellKnownSymbol$b('iterator');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
        createNonEnumerableProperty$2(CollectionPrototype, ITERATOR$3, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$3] = ArrayValues;
      }
      setToStringTag$1(CollectionPrototype, COLLECTION_NAME, true);
      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(globalThis$c[COLLECTION_NAME] && globalThis$c[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var jsxRuntime = {exports: {}};

  var reactJsxRuntime_production = {};

  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactJsxRuntime_production;

  function requireReactJsxRuntime_production () {
  	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
  	hasRequiredReactJsxRuntime_production = 1;
  	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
  	function jsxProd(type, config, maybeKey) {
  	  var key = null;
  	  void 0 !== maybeKey && (key = "" + maybeKey);
  	  void 0 !== config.key && (key = "" + config.key);
  	  if ("key" in config) {
  	    maybeKey = {};
  	    for (var propName in config)
  	      "key" !== propName && (maybeKey[propName] = config[propName]);
  	  } else maybeKey = config;
  	  config = maybeKey.ref;
  	  return {
  	    $$typeof: REACT_ELEMENT_TYPE,
  	    type: type,
  	    key: key,
  	    ref: void 0 !== config ? config : null,
  	    props: maybeKey
  	  };
  	}
  	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
  	reactJsxRuntime_production.jsx = jsxProd;
  	reactJsxRuntime_production.jsxs = jsxProd;
  	return reactJsxRuntime_production;
  }

  var reactJsxRuntime_development = {};

  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactJsxRuntime_development;

  function requireReactJsxRuntime_development () {
  	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  	hasRequiredReactJsxRuntime_development = 1;
  	"production" !== process.env.NODE_ENV &&
  	  (function () {
  	    function getComponentNameFromType(type) {
  	      if (null == type) return null;
  	      if ("function" === typeof type)
  	        return type.$$typeof === REACT_CLIENT_REFERENCE
  	          ? null
  	          : type.displayName || type.name || null;
  	      if ("string" === typeof type) return type;
  	      switch (type) {
  	        case REACT_FRAGMENT_TYPE:
  	          return "Fragment";
  	        case REACT_PROFILER_TYPE:
  	          return "Profiler";
  	        case REACT_STRICT_MODE_TYPE:
  	          return "StrictMode";
  	        case REACT_SUSPENSE_TYPE:
  	          return "Suspense";
  	        case REACT_SUSPENSE_LIST_TYPE:
  	          return "SuspenseList";
  	        case REACT_ACTIVITY_TYPE:
  	          return "Activity";
  	      }
  	      if ("object" === typeof type)
  	        switch (
  	          ("number" === typeof type.tag &&
  	            console.error(
  	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
  	            ),
  	          type.$$typeof)
  	        ) {
  	          case REACT_PORTAL_TYPE:
  	            return "Portal";
  	          case REACT_CONTEXT_TYPE:
  	            return (type.displayName || "Context") + ".Provider";
  	          case REACT_CONSUMER_TYPE:
  	            return (type._context.displayName || "Context") + ".Consumer";
  	          case REACT_FORWARD_REF_TYPE:
  	            var innerType = type.render;
  	            type = type.displayName;
  	            type ||
  	              ((type = innerType.displayName || innerType.name || ""),
  	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
  	            return type;
  	          case REACT_MEMO_TYPE:
  	            return (
  	              (innerType = type.displayName || null),
  	              null !== innerType
  	                ? innerType
  	                : getComponentNameFromType(type.type) || "Memo"
  	            );
  	          case REACT_LAZY_TYPE:
  	            innerType = type._payload;
  	            type = type._init;
  	            try {
  	              return getComponentNameFromType(type(innerType));
  	            } catch (x) {}
  	        }
  	      return null;
  	    }
  	    function testStringCoercion(value) {
  	      return "" + value;
  	    }
  	    function checkKeyStringCoercion(value) {
  	      try {
  	        testStringCoercion(value);
  	        var JSCompiler_inline_result = !1;
  	      } catch (e) {
  	        JSCompiler_inline_result = true;
  	      }
  	      if (JSCompiler_inline_result) {
  	        JSCompiler_inline_result = console;
  	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
  	        var JSCompiler_inline_result$jscomp$0 =
  	          ("function" === typeof Symbol &&
  	            Symbol.toStringTag &&
  	            value[Symbol.toStringTag]) ||
  	          value.constructor.name ||
  	          "Object";
  	        JSCompiler_temp_const.call(
  	          JSCompiler_inline_result,
  	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
  	          JSCompiler_inline_result$jscomp$0
  	        );
  	        return testStringCoercion(value);
  	      }
  	    }
  	    function getTaskName(type) {
  	      if (type === REACT_FRAGMENT_TYPE) return "<>";
  	      if (
  	        "object" === typeof type &&
  	        null !== type &&
  	        type.$$typeof === REACT_LAZY_TYPE
  	      )
  	        return "<...>";
  	      try {
  	        var name = getComponentNameFromType(type);
  	        return name ? "<" + name + ">" : "<...>";
  	      } catch (x) {
  	        return "<...>";
  	      }
  	    }
  	    function getOwner() {
  	      var dispatcher = ReactSharedInternals.A;
  	      return null === dispatcher ? null : dispatcher.getOwner();
  	    }
  	    function UnknownOwner() {
  	      return Error("react-stack-top-frame");
  	    }
  	    function hasValidKey(config) {
  	      if (hasOwnProperty.call(config, "key")) {
  	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
  	        if (getter && getter.isReactWarning) return false;
  	      }
  	      return void 0 !== config.key;
  	    }
  	    function defineKeyPropWarningGetter(props, displayName) {
  	      function warnAboutAccessingKey() {
  	        specialPropKeyWarningShown ||
  	          ((specialPropKeyWarningShown = true),
  	          console.error(
  	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
  	            displayName
  	          ));
  	      }
  	      warnAboutAccessingKey.isReactWarning = true;
  	      Object.defineProperty(props, "key", {
  	        get: warnAboutAccessingKey,
  	        configurable: true
  	      });
  	    }
  	    function elementRefGetterWithDeprecationWarning() {
  	      var componentName = getComponentNameFromType(this.type);
  	      didWarnAboutElementRef[componentName] ||
  	        ((didWarnAboutElementRef[componentName] = true),
  	        console.error(
  	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
  	        ));
  	      componentName = this.props.ref;
  	      return void 0 !== componentName ? componentName : null;
  	    }
  	    function ReactElement(
  	      type,
  	      key,
  	      self,
  	      source,
  	      owner,
  	      props,
  	      debugStack,
  	      debugTask
  	    ) {
  	      self = props.ref;
  	      type = {
  	        $$typeof: REACT_ELEMENT_TYPE,
  	        type: type,
  	        key: key,
  	        props: props,
  	        _owner: owner
  	      };
  	      null !== (void 0 !== self ? self : null)
  	        ? Object.defineProperty(type, "ref", {
  	            enumerable: false,
  	            get: elementRefGetterWithDeprecationWarning
  	          })
  	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
  	      type._store = {};
  	      Object.defineProperty(type._store, "validated", {
  	        configurable: false,
  	        enumerable: false,
  	        writable: true,
  	        value: 0
  	      });
  	      Object.defineProperty(type, "_debugInfo", {
  	        configurable: false,
  	        enumerable: false,
  	        writable: true,
  	        value: null
  	      });
  	      Object.defineProperty(type, "_debugStack", {
  	        configurable: false,
  	        enumerable: false,
  	        writable: true,
  	        value: debugStack
  	      });
  	      Object.defineProperty(type, "_debugTask", {
  	        configurable: false,
  	        enumerable: false,
  	        writable: true,
  	        value: debugTask
  	      });
  	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
  	      return type;
  	    }
  	    function jsxDEVImpl(
  	      type,
  	      config,
  	      maybeKey,
  	      isStaticChildren,
  	      source,
  	      self,
  	      debugStack,
  	      debugTask
  	    ) {
  	      var children = config.children;
  	      if (void 0 !== children)
  	        if (isStaticChildren)
  	          if (isArrayImpl(children)) {
  	            for (
  	              isStaticChildren = 0;
  	              isStaticChildren < children.length;
  	              isStaticChildren++
  	            )
  	              validateChildKeys(children[isStaticChildren]);
  	            Object.freeze && Object.freeze(children);
  	          } else
  	            console.error(
  	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
  	            );
  	        else validateChildKeys(children);
  	      if (hasOwnProperty.call(config, "key")) {
  	        children = getComponentNameFromType(type);
  	        var keys = Object.keys(config).filter(function (k) {
  	          return "key" !== k;
  	        });
  	        isStaticChildren =
  	          0 < keys.length
  	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
  	            : "{key: someKey}";
  	        didWarnAboutKeySpread[children + isStaticChildren] ||
  	          ((keys =
  	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
  	          console.error(
  	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
  	            isStaticChildren,
  	            children,
  	            keys,
  	            children
  	          ),
  	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
  	      }
  	      children = null;
  	      void 0 !== maybeKey &&
  	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
  	      hasValidKey(config) &&
  	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
  	      if ("key" in config) {
  	        maybeKey = {};
  	        for (var propName in config)
  	          "key" !== propName && (maybeKey[propName] = config[propName]);
  	      } else maybeKey = config;
  	      children &&
  	        defineKeyPropWarningGetter(
  	          maybeKey,
  	          "function" === typeof type
  	            ? type.displayName || type.name || "Unknown"
  	            : type
  	        );
  	      return ReactElement(
  	        type,
  	        children,
  	        self,
  	        source,
  	        getOwner(),
  	        maybeKey,
  	        debugStack,
  	        debugTask
  	      );
  	    }
  	    function validateChildKeys(node) {
  	      "object" === typeof node &&
  	        null !== node &&
  	        node.$$typeof === REACT_ELEMENT_TYPE &&
  	        node._store &&
  	        (node._store.validated = 1);
  	    }
  	    var React = H,
  	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
  	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
  	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
  	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
  	      ReactSharedInternals =
  	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  	      hasOwnProperty = Object.prototype.hasOwnProperty,
  	      isArrayImpl = Array.isArray,
  	      createTask = console.createTask
  	        ? console.createTask
  	        : function () {
  	            return null;
  	          };
  	    React = {
  	      react_stack_bottom_frame: function (callStackForError) {
  	        return callStackForError();
  	      }
  	    };
  	    var specialPropKeyWarningShown;
  	    var didWarnAboutElementRef = {};
  	    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
  	      React,
  	      UnknownOwner
  	    )();
  	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
  	    var didWarnAboutKeySpread = {};
  	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
  	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
  	      var trackActualOwner =
  	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
  	      return jsxDEVImpl(
  	        type,
  	        config,
  	        maybeKey,
  	        false,
  	        source,
  	        self,
  	        trackActualOwner
  	          ? Error("react-stack-top-frame")
  	          : unknownOwnerDebugStack,
  	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
  	      );
  	    };
  	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
  	      var trackActualOwner =
  	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
  	      return jsxDEVImpl(
  	        type,
  	        config,
  	        maybeKey,
  	        true,
  	        source,
  	        self,
  	        trackActualOwner
  	          ? Error("react-stack-top-frame")
  	          : unknownOwnerDebugStack,
  	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
  	      );
  	    };
  	  })();
  	return reactJsxRuntime_development;
  }

  if (process.env.NODE_ENV === 'production') {
    jsxRuntime.exports = requireReactJsxRuntime_production();
  } else {
    jsxRuntime.exports = requireReactJsxRuntime_development();
  }

  var jsxRuntimeExports = jsxRuntime.exports;

  var BRAND_MARK = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1757750794/sdk-logo_m2h8j7.png';

  /**
   * BrandHeader
   * Renders ONLY the brand image (no text/colors).
   *
   * Props:
   *  - size: 'xs' | 'sm' | 'md' | 'lg' | number  (default 'md')
   *          If a number is given, it's treated as maxWidth in px.
   *  - maxWidth?: number     // override width cap (px)
   *  - maxHeight?: number    // override height cap (px)
   *  - align?: 'left'|'center'|'right' (default 'left')
   *  - style?: object        // extra container styles
   *  - className?: string
   */
  var PRESETS = {
    xs: {
      maxWidth: 160,
      maxHeight: 38
    },
    sm: {
      maxWidth: 200,
      maxHeight: 46
    },
    md: {
      maxWidth: 230,
      maxHeight: 52
    },
    // good default (smaller than before)
    lg: {
      maxWidth: 260,
      maxHeight: 60
    }
  };
  function BrandHeader(_ref) {
    var {
      size = 'md',
      maxWidth,
      maxHeight,
      align = 'left',
      style,
      className
    } = _ref;
    var preset = typeof size === 'string' ? PRESETS[size] || PRESETS.md : null;

    // If size is a number, treat it as maxWidth
    var w = maxWidth !== null && maxWidth !== void 0 ? maxWidth : typeof size === 'number' ? size : preset.maxWidth;
    var h = maxHeight !== null && maxHeight !== void 0 ? maxHeight : preset ? preset.maxHeight : undefined;
    return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: className,
      style: _objectSpread2({
        textAlign: align,
        padding: '10px 16px 0'
      }, style || {}),
      children: /*#__PURE__*/jsxRuntimeExports.jsx("img", {
        src: BRAND_MARK,
        alt: "",
        style: {
          display: 'inline-block',
          maxWidth: w,
          maxHeight: h,
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          userSelect: 'none',
          pointerEvents: 'none'
        },
        crossOrigin: "anonymous",
        draggable: false
      })
    });
  }

  var {
    Title: Title$c,
    Text: Text$b
  } = antd.Typography;
  var BRAND_GREEN$2 = '#02CD8D'; // EVzone green

  /**
   * Props:
   *  - transactionDetails: {
   *      merchantName, merchantLogo, billedCurrency, totalBilling, billedAmount,
   *      id,
   *      // NEW
   *      transactionType,
   *      // Back-compat fallbacks (no need to pass these going forward):
   *      type, particulars
   *    }
   *  - onConfirm: () => void
   *  - onCancel?: () => void
   *  - width?: number (default 520)
   *  - confirmDisabled?: boolean
   *  - confirmLoading?: boolean
   */
  function TransactionSummary(_ref) {
    var _ref2, _d$totalBilling, _d$billedAmount;
    var {
      transactionDetails,
      onConfirm,
      onCancel,
      width = 520,
      confirmDisabled = false,
      confirmLoading = false
    } = _ref;
    var d = transactionDetails || {};
    var currency = d.billedCurrency || 'UGX';
    var total = (_ref2 = (_d$totalBilling = d.totalBilling) !== null && _d$totalBilling !== void 0 ? _d$totalBilling : d.billedAmount) !== null && _ref2 !== void 0 ? _ref2 : 0;

    // Prefer the new field; fall back to old props for compatibility
    var txType = d.transactionType || d.type || d.particulars || 'Purchase';
    var amountStr = v => Number(v || 0).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: true,
      centered: true,
      width: width,
      title: null // custom header below
      ,
      footer: null // custom footer (full-width button)
      ,
      onCancel: onCancel,
      maskClosable: false,
      bodyStyle: {
        padding: 20
      },
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: '#ff4d4f',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
        size: "sm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
        direction: "vertical",
        align: "center",
        style: {
          width: '100%',
          marginBottom: 8
        },
        children: [d.merchantLogo ? /*#__PURE__*/jsxRuntimeExports.jsx(antd.Avatar, {
          src: d.merchantLogo,
          size: 56
        }) : /*#__PURE__*/jsxRuntimeExports.jsx(antd.Avatar, {
          size: 56,
          children: (d.merchantName || 'E')[0]
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$c, {
          level: 4,
          style: {
            margin: 0
          },
          children: d.merchantName || 'Unknown Merchant'
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$b, {
          type: "secondary",
          style: {
            marginTop: -4
          },
          children: "Total Billing"
        }), /*#__PURE__*/jsxRuntimeExports.jsxs(Title$c, {
          level: 3,
          style: {
            margin: 0,
            color: BRAND_GREEN$2
          },
          children: [currency, " ", amountStr(total)]
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 8
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$c, {
          level: 5,
          style: {
            marginBottom: 8
          },
          children: "Transaction Details"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(KV, {
          label: "Transaction Type",
          value: txType
        }), /*#__PURE__*/jsxRuntimeExports.jsx(KV, {
          label: "To",
          value: d.id
        }), /*#__PURE__*/jsxRuntimeExports.jsx(KV, {
          label: "Billed Currency",
          value: currency
        }), /*#__PURE__*/jsxRuntimeExports.jsx(KV, {
          label: "Billed Amount",
          value: "".concat(currency, " ").concat(amountStr((_d$billedAmount = d.billedAmount) !== null && _d$billedAmount !== void 0 ? _d$billedAmount : total))
        }), /*#__PURE__*/jsxRuntimeExports.jsx(KV, {
          label: /*#__PURE__*/jsxRuntimeExports.jsx("strong", {
            children: "Total Billing"
          }),
          value: /*#__PURE__*/jsxRuntimeExports.jsxs("strong", {
            style: {
              color: BRAND_GREEN$2
            },
            children: [currency, " ", amountStr(total)]
          }),
          withTopBorder: true
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
        type: "primary",
        size: "large",
        shape: "round",
        block: true,
        style: {
          marginTop: 16
        },
        onClick: onConfirm,
        disabled: confirmDisabled,
        loading: confirmLoading,
        children: "Confirm"
      })]
    });
  }

  /** Left/right row used above */
  function KV(_ref3) {
    var {
      label,
      value,
      withTopBorder = false
    } = _ref3;
    return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 12,
        padding: '8px 4px',
        borderTop: withTopBorder ? '1px solid #eee' : undefined
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$b, {
        type: "secondary",
        children: label
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          textAlign: 'right'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Text$b, {
          children: value
        })
      })]
    });
  }

  var uncurryThis$f = functionUncurryThis;

  // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue$1 = uncurryThis$f(1.0.valueOf);

  var $$e = _export;
  var uncurryThis$e = functionUncurryThis;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;
  var thisNumberValue = thisNumberValue$1;
  var $repeat = stringRepeat;
  var fails$e = fails$p;

  var $RangeError = RangeError;
  var $String = String;
  var floor$2 = Math.floor;
  var repeat = uncurryThis$e($repeat);
  var stringSlice$6 = uncurryThis$e(''.slice);
  var nativeToFixed = uncurryThis$e(1.0.toFixed);

  var pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function (x) {
    var n = 0;
    var x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    } return n;
  };

  var multiply = function (data, n, c) {
    var index = -1;
    var c2 = c;
    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor$2(c2 / 1e7);
    }
  };

  var divide = function (data, n) {
    var index = 6;
    var c = 0;
    while (--index >= 0) {
      c += data[index];
      data[index] = floor$2(c / n);
      c = (c % n) * 1e7;
    }
  };

  var dataToString = function (data) {
    var index = 6;
    var s = '';
    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = $String(data[index]);
        s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
      }
    } return s;
  };

  var FORCED$1 = fails$e(function () {
    return nativeToFixed(0.00008, 3) !== '0.000' ||
      nativeToFixed(0.9, 0) !== '1' ||
      nativeToFixed(1.255, 2) !== '1.25' ||
      nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
  }) || !fails$e(function () {
    // V8 ~ Android 4.3-
    nativeToFixed({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  $$e({ target: 'Number', proto: true, forced: FORCED$1 }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toIntegerOrInfinity$2(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;

      // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
      if (fractDigits < 0 || fractDigits > 20) throw new $RangeError('Incorrect fraction digits');
      // eslint-disable-next-line no-self-compare -- NaN check
      if (number !== number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return $String(number);
      if (number < 0) {
        sign = '-';
        number = -number;
      }
      if (number > 1e-21) {
        e = log(number * pow(2, 69, 1)) - 69;
        z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;
          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }
          multiply(data, pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }
          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + repeat('0', fractDigits);
        }
      }
      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits
          ? '0.' + repeat('0', fractDigits - k) + result
          : stringSlice$6(result, 0, k - fractDigits) + '.' + stringSlice$6(result, k - fractDigits));
      } else {
        result = sign + result;
      } return result;
    }
  });

  var anObject$9 = anObject$e;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$9(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$d = fails$p;
  var globalThis$b = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = globalThis$b.RegExp;

  var UNSUPPORTED_Y$2 = fails$d(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') !== null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$d(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$d(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') !== null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$1,
    UNSUPPORTED_Y: UNSUPPORTED_Y$2
  };

  var fails$c = fails$p;
  var globalThis$a = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = globalThis$a.RegExp;

  var regexpUnsupportedDotAll = fails$c(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.test('\n') && re.flags === 's');
  });

  var fails$b = fails$p;
  var globalThis$9 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = globalThis$9.RegExp;

  var regexpUnsupportedNcg = fails$b(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$d = functionCall;
  var uncurryThis$d = functionUncurryThis;
  var toString$8 = toString$b;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared = shared$4;
  var create$1 = objectCreate;
  var getInternalState = internalState.get;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$4 = uncurryThis$d(''.charAt);
  var indexOf = uncurryThis$d(''.indexOf);
  var replace$3 = uncurryThis$d(''.replace);
  var stringSlice$5 = uncurryThis$d(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$d(nativeExec, re1, 'a');
    call$d(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString$8(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$d(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = call$d(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$3(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$5(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = call$d(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$5(match.input, charsAdded);
          match[0] = stringSlice$5(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$d(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$1(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $$d = _export;
  var exec$2 = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$d({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
    exec: exec$2
  });

  var NATIVE_BIND$1 = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$2 = FunctionPrototype.apply;
  var call$c = FunctionPrototype.call;

  // eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$c.bind(apply$2) : function () {
    return call$c.apply(apply$2, arguments);
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var call$b = functionCall;
  var defineBuiltIn$4 = defineBuiltIn$8;
  var regexpExec$1 = regexpExec$2;
  var fails$a = fails$p;
  var wellKnownSymbol$a = wellKnownSymbol$j;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;

  var SPECIES$3 = wellKnownSymbol$a('species');
  var RegExpPrototype$3 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$a(KEY);

    var DELEGATES_TO_SYMBOL = !fails$a(function () {
      // String methods call symbol-named RegExp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) !== 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$a(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$3] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype$3.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: call$b(nativeRegExpMethod, regexp, str, arg2) };
          }
          return { done: true, value: call$b(nativeMethod, str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn$4(String.prototype, KEY, methods[0]);
      defineBuiltIn$4(RegExpPrototype$3, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$3[SYMBOL], 'sham', true);
  };

  var uncurryThis$c = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;
  var toString$7 = toString$b;
  var requireObjectCoercible$5 = requireObjectCoercible$b;

  var charAt$3 = uncurryThis$c(''.charAt);
  var charCodeAt = uncurryThis$c(''.charCodeAt);
  var stringSlice$4 = uncurryThis$c(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$7(requireObjectCoercible$5($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$3(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$4(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var charAt$2 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$2 = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  var uncurryThis$b = functionUncurryThis;
  var toObject$2 = toObject$5;

  var floor$1 = Math.floor;
  var charAt$1 = uncurryThis$b(''.charAt);
  var replace$2 = uncurryThis$b(''.replace);
  var stringSlice$3 = uncurryThis$b(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$2(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$2(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt$1(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$3(str, 0, position);
        case "'": return stringSlice$3(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$3(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var call$a = functionCall;
  var anObject$8 = anObject$e;
  var isCallable$7 = isCallable$m;
  var classof$4 = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError$8 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$7(exec)) {
      var result = call$a(exec, R, S);
      if (result !== null) anObject$8(result);
      return result;
    }
    if (classof$4(R) === 'RegExp') return call$a(regexpExec, R, S);
    throw new $TypeError$8('RegExp#exec called on incompatible receiver');
  };

  var apply$1 = functionApply;
  var call$9 = functionCall;
  var uncurryThis$a = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var fails$9 = fails$p;
  var anObject$7 = anObject$e;
  var isCallable$6 = isCallable$m;
  var isNullOrUndefined$3 = isNullOrUndefined$6;
  var toIntegerOrInfinity = toIntegerOrInfinity$6;
  var toLength$2 = toLength$5;
  var toString$6 = toString$b;
  var requireObjectCoercible$4 = requireObjectCoercible$b;
  var advanceStringIndex$1 = advanceStringIndex$2;
  var getMethod$3 = getMethod$5;
  var getSubstitution = getSubstitution$1;
  var regExpExec$1 = regexpExecAbstract;
  var wellKnownSymbol$9 = wellKnownSymbol$j;

  var REPLACE = wellKnownSymbol$9('replace');
  var max = Math.max;
  var min$1 = Math.min;
  var concat$1 = uncurryThis$a([].concat);
  var push$1 = uncurryThis$a([].push);
  var stringIndexOf$2 = uncurryThis$a(''.indexOf);
  var stringSlice$2 = uncurryThis$a(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$9(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible$4(this);
        var replacer = isNullOrUndefined$3(searchValue) ? undefined : getMethod$3(searchValue, REPLACE);
        return replacer
          ? call$9(replacer, searchValue, O, replaceValue)
          : call$9(nativeReplace, toString$6(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject$7(this);
        var S = toString$6(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf$2(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable$6(replaceValue);
        if (!functionalReplace) replaceValue = toString$6(replaceValue);

        var global = rx.global;
        var fullUnicode;
        if (global) {
          fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }

        var results = [];
        var result;
        while (true) {
          result = regExpExec$1(rx, S);
          if (result === null) break;

          push$1(results, result);
          if (!global) break;

          var matchStr = toString$6(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$2(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString$6(result[0]);
          var position = max(min$1(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          var replacement;
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat$1([matched], captures, position, S);
            if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
            replacement = toString$6(apply$1(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice$2(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }

        return accumulatedResult + stringSlice$2(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var {
    Title: Title$b,
    Text: Text$a
  } = antd.Typography;
  var BRAND_GREEN$1 = '#02CD8D';

  // Fallback rates only used when no server quote is provided
  var FALLBACK_TAX_PCT = 0.025; // 2.5%
  var FALLBACK_FEE_PCT = 0.015; // 1.5%

  /**
   * Props:
   *  - passcode: string
   *  - setPasscode: (s: string) => void
   *  - transactionDetails: { merchantName, merchantLogo, id, billedCurrency, totalBilling }
   *  - onSubmit: () => void
   *  - onBack: () => void
   *  - submitting?: boolean
   *  - quote?: { amount, tax, fee, total, currency, quoteId }
   *  - width?: number (default 520)
   */
  function EnterPasscode(_ref) {
    var _d$totalBilling;
    var {
      passcode,
      setPasscode,
      transactionDetails,
      onSubmit,
      onBack,
      submitting = false,
      quote,
      width = 520
    } = _ref;
    var d = transactionDetails || {};

    // Prefer server quote values when present
    var currency = (quote === null || quote === void 0 ? void 0 : quote.currency) || d.billedCurrency || 'UGX';
    var base = typeof (quote === null || quote === void 0 ? void 0 : quote.amount) === 'number' ? quote.amount : Number((_d$totalBilling = d.totalBilling) !== null && _d$totalBilling !== void 0 ? _d$totalBilling : 0);
    var tax = typeof (quote === null || quote === void 0 ? void 0 : quote.tax) === 'number' ? quote.tax : base * FALLBACK_TAX_PCT;
    var fee = typeof (quote === null || quote === void 0 ? void 0 : quote.fee) === 'number' ? quote.fee : base * FALLBACK_FEE_PCT;
    var total = typeof (quote === null || quote === void 0 ? void 0 : quote.total) === 'number' ? quote.total : base + tax + fee;
    var onChange = e => {
      var digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 6);
      setPasscode(digitsOnly);
    };
    var fmt0 = n => Number(n || 0).toLocaleString(undefined, {
      maximumFractionDigits: 0
    });
    var pctText = n => "".concat((n * 100).toFixed(1), "%");
    var taxPctLabel = typeof (quote === null || quote === void 0 ? void 0 : quote.tax) === 'number' && typeof (quote === null || quote === void 0 ? void 0 : quote.amount) === 'number' ? "".concat((quote.tax / (quote.amount || 1) * 100).toFixed(1), "%") : pctText(FALLBACK_TAX_PCT);
    var feePctLabel = typeof (quote === null || quote === void 0 ? void 0 : quote.fee) === 'number' && typeof (quote === null || quote === void 0 ? void 0 : quote.amount) === 'number' ? "".concat((quote.fee / (quote.amount || 1) * 100).toFixed(1), "%") : pctText(FALLBACK_FEE_PCT);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: true,
      centered: true,
      width: width,
      title: null,
      footer: null,
      onCancel: onBack,
      maskClosable: false,
      bodyStyle: {
        padding: 20
      },
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: '#ff4d4f',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
        size: "sm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$b, {
        level: 4,
        style: {
          marginTop: 0,
          color: BRAND_GREEN$1
        },
        children: "Merchant Info :"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: 12,
          marginBottom: 12
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
          align: "center",
          children: [d.merchantLogo ? /*#__PURE__*/jsxRuntimeExports.jsx(antd.Avatar, {
            src: d.merchantLogo,
            size: 40
          }) : /*#__PURE__*/jsxRuntimeExports.jsx(antd.Avatar, {
            size: 40,
            children: (d.merchantName || 'E')[0]
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                fontWeight: 600
              },
              children: d.merchantName || 'Unknown Merchant'
            }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$a, {
              type: "secondary",
              style: {
                fontSize: 12
              },
              children: d.id
            })]
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            textAlign: 'right'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$a, {
            type: "secondary",
            style: {
              display: 'block',
              fontSize: 12
            },
            children: "Amount"
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              fontWeight: 700
            },
            children: [currency, " ", fmt0(total)]
          })]
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          margin: '6px 0 6px'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Text$a, {
          children: "Enter Passcode"
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input.Password, {
        value: passcode,
        onChange: onChange,
        placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
        maxLength: 6,
        inputMode: "numeric",
        autoComplete: "one-time-code",
        iconRender: visible => visible ? /*#__PURE__*/jsxRuntimeExports.jsx(icons.EyeTwoTone, {}) : /*#__PURE__*/jsxRuntimeExports.jsx(icons.EyeInvisibleOutlined, {}),
        style: {
          height: 40,
          letterSpacing: 4,
          fontWeight: 600
        },
        onPressEnter: () => passcode.length === 6 && !submitting && onSubmit()
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          background: '#e6f4ff',
          borderRadius: 8,
          padding: 12,
          marginTop: 12,
          display: 'grid',
          gridTemplateColumns: '20px 1fr',
          alignItems: 'flex-start',
          gap: 8
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(icons.InfoCircleFilled, {
          style: {
            color: '#1677ff',
            fontSize: 18,
            lineHeight: '20px'
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsxs(Text$a, {
          style: {
            color: '#1f1f1f'
          },
          children: ["You are making a payment to ", /*#__PURE__*/jsxRuntimeExports.jsx("b", {
            children: d.merchantName || 'Unknown Merchant'
          }), ". An amount of", ' ', /*#__PURE__*/jsxRuntimeExports.jsxs("b", {
            children: [currency, " ", fmt0(total)]
          }), ' ', "will be deducted from your wallet, including ", /*#__PURE__*/jsxRuntimeExports.jsxs("b", {
            children: [taxPctLabel, " tax"]
          }), " (", currency, ' ', fmt0(tax), ") and ", /*#__PURE__*/jsxRuntimeExports.jsxs("b", {
            children: [feePctLabel, " wallet fee"]
          }), " (", currency, " ", fmt0(fee), ")."]
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
        type: "primary",
        size: "large",
        shape: "round",
        block: true,
        style: {
          marginTop: 14
        },
        disabled: passcode.length !== 6 || submitting,
        loading: submitting,
        onClick: onSubmit,
        children: "Confirm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
        size: "large",
        shape: "round",
        block: true,
        danger: true,
        ghost: true,
        style: {
          marginTop: 10
        },
        onClick: onBack,
        disabled: submitting,
        children: "Back"
      })]
    });
  }

  // src/PaymentSuccessModal.js
  var {
    Title: Title$a,
    Text: Text$9
  } = antd.Typography;

  // Smooth blue palette
  var BLUE_BASE = '#179CFC';
  var BLUE_LIGHT = '#5CB9FC';
  var BLUE_DARK = '#127CC9';
  function PaymentSuccessModal(_ref) {
    var {
      open = true,
      onClose,
      // keep these props for backwards-compat, but we won't render them:
      amount,
      // unused (intentionally hidden)
      currency = 'UGX',
      // unused (intentionally hidden)
      showAmount = false,
      // unused (intentionally hidden)
      zIndex = 2000,
      width = 440,
      title = 'Payment Successful',
      subtitle // optional small line under the title
    } = _ref;
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      onCancel: onClose,
      zIndex: zIndex,
      maskClosable: false,
      title: null,
      bodyStyle: {
        padding: 28,
        textAlign: 'center'
      },
      className: "evz-success-modal",
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "evz-badge",
        "aria-hidden": true,
        children: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
          viewBox: "0 0 24 24",
          width: "28",
          height: "28",
          fill: "none",
          "aria-hidden": true,
          children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M20 6L9 17l-5-5",
            stroke: "#fff",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$a, {
        level: 3,
        style: {
          marginTop: 14,
          marginBottom: 10,
          color: '#111827',
          fontWeight: 700
        },
        children: title
      }), subtitle ? /*#__PURE__*/jsxRuntimeExports.jsx(Text$9, {
        type: "secondary",
        style: {
          display: 'block',
          marginBottom: 12
        },
        children: subtitle
      }) : null, /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
        className: "evz-primary",
        type: "primary",
        size: "large",
        shape: "round",
        block: true,
        onClick: onClose,
        children: "Done"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("style", {
        children: "\n        .evz-success-modal .ant-modal-content {\n          border-radius: 14px;\n        }\n        .evz-badge {\n          margin: 0 auto 8px;\n          width: 72px;\n          height: 72px;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justifyContent: center;\n          background: radial-gradient(100% 100% at 50% 0%, ".concat(BLUE_LIGHT, " 0%, ").concat(BLUE_BASE, " 100%);\n          box-shadow: 0 10px 28px rgba(23, 156, 252, 0.32);\n          animation: evzPop .26s ease-out;\n        }\n        .evz-success-modal .evz-primary.ant-btn-primary {\n          background: ").concat(BLUE_BASE, ";\n          border-color: ").concat(BLUE_BASE, ";\n          font-weight: 600;\n          height: 40px;\n        }\n        .evz-success-modal .evz-primary.ant-btn-primary:hover,\n        .evz-success-modal .evz-primary.ant-btn-primary:focus {\n          background: ").concat(BLUE_DARK, ";\n          border-color: ").concat(BLUE_DARK, ";\n        }\n        .evz-success-modal .evz-primary.ant-btn-primary:active {\n          background: ").concat(BLUE_DARK, ";\n          border-color: ").concat(BLUE_DARK, ";\n          filter: saturate(1.05);\n        }\n        @keyframes evzPop {\n          0%   { transform: scale(.92); opacity: .65; }\n          100% { transform: scale(1);   opacity: 1; }\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .evz-badge { animation: none !important; }\n        }\n      ")
      })]
    });
  }

  // src/PaymentFailedModal.js
  var {
    Title: Title$9,
    Paragraph: Paragraph$1,
    Text: Text$8
  } = antd.Typography;
  var BRAND_RED$5 = '#ff4d4f';
  function PaymentFailedModal(_ref) {
    var {
      open = true,
      onClose,
      onDetails,
      // optional: custom handler for the "Details" button
      reason,
      // optional: server/client error summary to display
      zIndex = 2000,
      width = 460
    } = _ref;
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      onCancel: onClose,
      zIndex: zIndex,
      maskClosable: false,
      title: null,
      bodyStyle: {
        padding: 20
      },
      className: "evz-modal",
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: BRAND_RED$5,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        "aria-label": "Close",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
        size: "sm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: BRAND_RED$5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px',
          boxShadow: '0 6px 16px rgba(255,77,79,0.28)'
        },
        "aria-hidden": true,
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {
          style: {
            color: '#fff',
            fontSize: 34,
            fontWeight: 700
          }
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
        direction: "vertical",
        align: "center",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$9, {
          level: 3,
          style: {
            margin: 0,
            color: BRAND_RED$5
          },
          children: "Payment Failed"
        }), /*#__PURE__*/jsxRuntimeExports.jsxs(Paragraph$1, {
          style: {
            marginTop: 8,
            textAlign: 'center',
            color: '#444'
          },
          children: ["We couldn\u2019t complete the payment. Please check your wallet for more details and try again.", reason ? /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("br", {}), /*#__PURE__*/jsxRuntimeExports.jsxs(Text$8, {
              type: "secondary",
              style: {
                fontSize: 12
              },
              children: ["Reason: ", reason]
            })]
          }) : null]
        }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
          type: "primary",
          danger: true,
          shape: "round",
          size: "middle",
          onClick: onDetails || onClose,
          style: {
            width: 140
          },
          children: "Details"
        })]
      })]
    });
  }

  // src/InsufficientFundsModal.js
  var {
    Title: Title$8,
    Paragraph
  } = antd.Typography;

  // Local colors
  var BRAND_ORANGE = '#FF9800';
  var BRAND_RED$4 = '#ff4d4f';

  // A single, reusable tile for each payment option
  function PayTile(_ref) {
    var {
      icon,
      label,
      onClick
    } = _ref;
    if (!onClick) return null; // don’t render tiles you’re not wiring up
    return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: onClick,
      style: {
        appearance: 'none',
        border: '1px solid #e5e7eb',
        borderRadius: 14,
        padding: 14,
        background: '#fff',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateRows: '56px auto',
        justifyItems: 'center',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        transition: 'transform .12s ease, box-shadow .12s ease, border-color .12s ease'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
        e.currentTarget.style.borderColor = '#d1d5db';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
        e.currentTarget.style.borderColor = '#e5e7eb';
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#f5f7ff',
          display: 'grid',
          placeItems: 'center',
          boxShadow: 'inset 0 0 0 1px #e8eaf6'
        },
        "aria-hidden": true,
        children: icon
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontSize: 14,
          fontWeight: 600,
          color: '#344054',
          textAlign: 'center'
        },
        children: label
      })]
    });
  }
  function InsufficientFundsModal(_ref2) {
    var {
      open = true,
      onClose,
      // close the whole flow
      onOpenAltMobile,
      // start Mobile Money flow
      onOpenCard,
      // optional: start Card flow
      onOpenBank,
      // optional: start Bank/Transfer flow
      zIndex = 2000,
      width = 480
    } = _ref2;
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      closable: true,
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: BRAND_RED$4,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      onCancel: onClose,
      maskClosable: false,
      title: null,
      zIndex: zIndex,
      bodyStyle: {
        padding: 20
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
        size: "sm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: BRAND_ORANGE,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px',
          boxShadow: '0 6px 16px rgba(255,152,0,0.28)'
        },
        "aria-hidden": true,
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {
          style: {
            color: '#fff',
            fontSize: 34,
            fontWeight: 700
          }
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$8, {
          level: 3,
          style: {
            margin: 0,
            color: BRAND_ORANGE
          },
          children: "Insufficient Funds"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Paragraph, {
          style: {
            marginTop: 8,
            color: '#444'
          },
          children: "Your wallet balance is lower than the total required for this payment. Choose an alternative payment method to continue."
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
          marginTop: 12
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(PayTile, {
          label: "Mobile Money",
          onClick: onOpenAltMobile,
          icon: /*#__PURE__*/jsxRuntimeExports.jsx(icons.PhoneOutlined, {
            style: {
              fontSize: 26,
              color: '#1677ff'
            }
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(PayTile, {
          label: "Card",
          onClick: onOpenCard,
          icon: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CreditCardOutlined, {
            style: {
              fontSize: 26,
              color: '#02CD8D'
            }
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(PayTile, {
          label: "Bank",
          onClick: onOpenBank,
          icon: /*#__PURE__*/jsxRuntimeExports.jsx(icons.BankOutlined, {
            style: {
              fontSize: 26,
              color: '#ffb020'
            }
          })
        })]
      })]
    });
  }

  // src/LoadingOverlay.jsx
  var {
    Title: Title$7,
    Text: Text$7
  } = antd.Typography;

  /**
   * Props:
   * - open?: boolean        (default: true)
   * - tip?: string          (default: 'Preparing secure checkout…')
   * - logoSrc?: string
   * - brand?: string        (default: 'EVzone Pay')
   * - brandColor?: string   (default: 'darkorange')
   * - blinkMs?: number      (default: 1600)  // brand text blink speed
   * - zIndex?: number       (default: 2000)
   * - width?: number        (default: 420)
   */
  var LoadingOverlay = _ref => {
    var {
      open = true,
      tip = 'Preparing secure checkout…',
      logoSrc = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png',
      brand = 'EVzone Pay',
      brandColor = 'darkorange',
      blinkMs = 1600,
      zIndex = 2000,
      width = 420
    } = _ref;
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      footer: null,
      closable: false,
      maskClosable: false,
      centered: true,
      zIndex: zIndex,
      width: width,
      title: null,
      bodyStyle: {
        padding: 24,
        textAlign: 'center'
      },
      className: "evz-modal" // plays nicely if you have global modal animations
      ,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
        direction: "vertical",
        align: "center",
        size: "large",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          className: "evz-pulse",
          children: /*#__PURE__*/jsxRuntimeExports.jsx(antd.Avatar, {
            src: logoSrc,
            size: 96,
            style: {
              background: '#fff'
            }
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$7, {
          level: 3,
          style: {
            margin: '6px 0 0',
            fontWeight: 800,
            letterSpacing: '.2px',
            color: brandColor,
            textShadow: '0 2px 12px rgba(217,119,6,.35)',
            animation: "evzBlink ".concat(blinkMs, "ms ease-in-out infinite")
          },
          children: brand
        }), tip ? /*#__PURE__*/jsxRuntimeExports.jsx(Text$7, {
          className: "evz-tip",
          children: tip
        }) : null]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("style", {
        children: "\n        @keyframes evzBlink {\n          0%,100% { opacity: 1; filter: drop-shadow(0 0 0 rgba(217,119,6,0)); }\n          50%     { opacity: .72; filter: drop-shadow(0 0 6px rgba(217,119,6,.45)); }\n        }\n\n        .evz-pulse {\n          display: inline-flex;\n          padding: 6px;\n          border-radius: 50%;\n          background: radial-gradient(65% 65% at 50% 50%, rgba(2,205,141,.18), rgba(2,205,141,0) 70%);\n          position: relative;\n        }\n        .evz-pulse::before {\n          content: '';\n          position: absolute;\n          inset: -8px;\n          border-radius: 50%;\n          border: 2px solid rgba(2,205,141,.35);\n          animation: evzPulse 1.8s ease-out infinite;\n        }\n        @keyframes evzPulse {\n          0%   { transform: scale(.85); opacity: .6; }\n          70%  { transform: scale(1.15); opacity: 0; }\n          100% { transform: scale(1.15); opacity: 0; }\n        }\n\n        .evz-tip {\n          display: block;\n          margin-top: 2px;\n          font-size: 13px;\n          letter-spacing: .2px;\n          background: linear-gradient(90deg,#9aa6af 0%,#ccd3d8 50%,#9aa6af 100%);\n          -webkit-background-clip: text;\n          background-clip: text;\n          color: transparent;\n          -webkit-text-fill-color: transparent; /* WebKit fix */\n          background-size: 200% 100%;\n          animation: evzShimmer 2.2s linear infinite;\n        }\n        @keyframes evzShimmer {\n          0% { background-position: 200% 0; }\n          100% { background-position: -200% 0; }\n        }\n\n        /* Respect users who prefer reduced motion */\n        @media (prefers-reduced-motion: reduce) {\n          .evz-tip { animation: none; }\n          .evz-pulse::before { animation: none; }\n        }\n      "
      })]
    });
  };

  var {
    Title: Title$6,
    Text: Text$6
  } = antd.Typography;
  var BLUE_START = '#2EA1FF';
  var BLUE_END = '#1B8CFF';
  function ProcessingModal(_ref) {
    var {
      open = true,
      onClose,
      src = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif',
      message = 'Processing',
      subText = 'Please wait',
      width = 480,
      zIndex = 2000,
      roundedSize = 140,
      // slightly smaller square
      loop = true,
      brandMaxWidth = 240,
      // ↓ smaller brand by default
      brandMaxHeight = 54
    } = _ref;
    var isGif = typeof src === 'string' && /\.(gif|png|jpe?g|svg)(\?.*)?$/i.test(src);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      onCancel: onClose,
      maskClosable: false,
      closable: false,
      zIndex: zIndex,
      title: null,
      bodyStyle: {
        padding: 0,
        textAlign: 'center'
      },
      className: "evz-modal",
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          padding: '10px 16px 0',
          textAlign: 'left'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx("img", {
          src: BRAND_MARK,
          alt: "",
          style: {
            display: 'block',
            maxWidth: brandMaxWidth,
            maxHeight: brandMaxHeight,
            width: 'auto',
            height: 'auto',
            margin: 0,
            objectFit: 'contain',
            userSelect: 'none',
            pointerEvents: 'none'
          },
          crossOrigin: "anonymous",
          draggable: false
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '8px 16px 12px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        "aria-hidden": true,
        style: {
          margin: '0 auto 10px',
          width: roundedSize,
          height: roundedSize,
          borderRadius: 16,
          background: "linear-gradient(180deg, ".concat(BLUE_START, " 0%, ").concat(BLUE_END, " 100%)"),
          boxShadow: '0 10px 28px rgba(30,140,255,0.24)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: isGif ? /*#__PURE__*/jsxRuntimeExports.jsx("img", {
          src: src,
          alt: "",
          style: {
            maxWidth: '82%',
            maxHeight: '82%',
            borderRadius: 12,
            objectFit: 'contain',
            pointerEvents: 'none',
            userSelect: 'none'
          },
          crossOrigin: "anonymous",
          draggable: false
        }) : /*#__PURE__*/jsxRuntimeExports.jsx("video", {
          src: src,
          autoPlay: true,
          muted: true,
          playsInline: true,
          loop: loop,
          preload: "auto",
          style: {
            maxWidth: '82%',
            maxHeight: '82%',
            borderRadius: 12,
            objectFit: 'contain'
          }
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '0 16px 16px'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$6, {
          level: 5,
          style: {
            margin: '0 0 2px'
          },
          children: message
        }), subText ? /*#__PURE__*/jsxRuntimeExports.jsx(Text$6, {
          type: "secondary",
          style: {
            display: 'block',
            fontSize: 12
          },
          children: subText
        }) : null]
      })]
    });
  }

  // src/HasAccountSummary.js
  var {
    Title: Title$5,
    Text: Text$5
  } = antd.Typography;
  var BRAND_RED$3 = '#ff4d4f';
  function HasAccountSummary(_ref) {
    var {
      open = true,
      onLoginSuccess,
      onClose,
      zIndex = 2000,
      width = 520,
      authOrigin = 'https://accounts.dev.evzone.app',
      authUrl = 'https://accounts.dev.evzone.app',
      // keep header sizing consistent with ProcessingModal
      brandMaxWidth = 240,
      brandMaxHeight = 54
    } = _ref;
    var popupRef = H.useRef(null);
    var checkRef = H.useRef(null);
    var timeoutRef = H.useRef(null);
    H.useEffect(() => {
      function handleMessage(event) {
        if (event.origin !== authOrigin) return;
        var data = event.data || {};
        var userNo = data.user_no || data.user_id; // accept either key
        var authToken = data.auth_token;
        if (userNo) {
          try {
            var _popupRef$current;
            (_popupRef$current = popupRef.current) === null || _popupRef$current === void 0 ? void 0 : _popupRef$current.close();
          } catch (_unused) {}
          clearInterval(checkRef.current);
          clearTimeout(timeoutRef.current);
          onLoginSuccess === null || onLoginSuccess === void 0 ? void 0 : onLoginSuccess(userNo, authToken);
        }
      }
      window.addEventListener('message', handleMessage);
      return () => {
        window.removeEventListener('message', handleMessage);
        try {
          var _popupRef$current2;
          (_popupRef$current2 = popupRef.current) === null || _popupRef$current2 === void 0 ? void 0 : _popupRef$current2.close();
        } catch (_unused2) {}
        clearInterval(checkRef.current);
        clearTimeout(timeoutRef.current);
      };
    }, [authOrigin, onLoginSuccess]);
    var handleSignIn = () => {
      var callbackUrl = "".concat(window.location.origin, "/wallet-callback");
      var url = "".concat(authUrl, "?redirect_uri=").concat(encodeURIComponent(callbackUrl));
      var win = window.open(url, 'EVzone Sign In', 'width=520,height=640');
      if (!win) {
        alert('Popup blocked. Please allow popups for this site.');
        return;
      }
      popupRef.current = win;
      checkRef.current = setInterval(() => {
        if (win.closed) {
          clearInterval(checkRef.current);
          clearTimeout(timeoutRef.current);
          onClose === null || onClose === void 0 ? void 0 : onClose();
        }
      }, 500);
      timeoutRef.current = setTimeout(() => {
        if (!win.closed) win.close();
        clearInterval(checkRef.current);
        onClose === null || onClose === void 0 ? void 0 : onClose();
        alert('Login timed out. Please try again.');
      }, 60000);
    };
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      onCancel: onClose,
      zIndex: zIndex,
      maskClosable: false,
      title: null,
      bodyStyle: {
        padding: 0
      } // match ProcessingModal
      ,
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: BRAND_RED$3,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          padding: '10px 16px 0',
          textAlign: 'left'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx("img", {
          src: BRAND_MARK,
          alt: "",
          style: {
            display: 'block',
            maxWidth: brandMaxWidth,
            maxHeight: brandMaxHeight,
            width: 'auto',
            height: 'auto',
            margin: 0,
            objectFit: 'contain',
            userSelect: 'none',
            pointerEvents: 'none'
          },
          crossOrigin: "anonymous",
          draggable: false
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '8px 16px 12px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          padding: '0 16px 16px'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
          direction: "vertical",
          style: {
            width: '100%'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$5, {
            level: 4,
            style: {
              margin: 0
            },
            children: "Sign in required"
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              background: '#e6f4ff',
              borderRadius: 8,
              padding: 12,
              display: 'grid',
              gridTemplateColumns: '20px 1fr',
              gap: 8
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(icons.InfoCircleFilled, {
              style: {
                color: '#1677ff',
                fontSize: 18,
                lineHeight: '20px'
              }
            }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$5, {
              children: "EVzone needs you to sign in to continue with this payment."
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 8
            },
            children: /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
              type: "primary",
              shape: "round",
              size: "large",
              onClick: handleSignIn,
              style: {
                width: 160
              },
              children: "Sign in"
            })
          })]
        })
      })]
    });
  }

  /* global Bun, Deno -- detection */
  var globalThis$8 = globalThis_1;
  var userAgent$5 = environmentUserAgent;
  var classof$3 = classofRaw$2;

  var userAgentStartsWith = function (string) {
    return userAgent$5.slice(0, string.length) === string;
  };

  var environment = (function () {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis$8.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis$8.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof$3(globalThis$8.process) === 'process') return 'NODE';
    if (globalThis$8.window && globalThis$8.document) return 'BROWSER';
    return 'REST';
  })();

  var ENVIRONMENT$1 = environment;

  var environmentIsNode = ENVIRONMENT$1 === 'NODE';

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty$2 = objectDefineProperty;

  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty$2.f(target, name, descriptor);
  };

  var getBuiltIn$3 = getBuiltIn$7;
  var defineBuiltInAccessor = defineBuiltInAccessor$1;
  var wellKnownSymbol$8 = wellKnownSymbol$j;
  var DESCRIPTORS$3 = descriptors;

  var SPECIES$2 = wellKnownSymbol$8('species');

  var setSpecies$2 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$3 && Constructor && !Constructor[SPECIES$2]) {
      defineBuiltInAccessor(Constructor, SPECIES$2, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var isPrototypeOf$3 = objectIsPrototypeOf;

  var $TypeError$7 = TypeError;

  var anInstance$1 = function (it, Prototype) {
    if (isPrototypeOf$3(Prototype, it)) return it;
    throw new $TypeError$7('Incorrect invocation');
  };

  var uncurryThis$9 = functionUncurryThis;
  var fails$8 = fails$p;
  var isCallable$5 = isCallable$m;
  var classof$2 = classof$6;
  var getBuiltIn$2 = getBuiltIn$7;
  var inspectSource$1 = inspectSource$3;

  var noop = function () { /* empty */ };
  var construct = getBuiltIn$2('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$9(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$5(argument)) return false;
    try {
      construct(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$5(argument)) return false;
    switch (classof$2(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$1 = !construct || fails$8(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isConstructor = isConstructor$1;
  var tryToString$3 = tryToString$5;

  var $TypeError$6 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument;
    throw new $TypeError$6(tryToString$3(argument) + ' is not a constructor');
  };

  var anObject$6 = anObject$e;
  var aConstructor = aConstructor$1;
  var isNullOrUndefined$2 = isNullOrUndefined$6;
  var wellKnownSymbol$7 = wellKnownSymbol$j;

  var SPECIES$1 = wellKnownSymbol$7('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$6(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined$2(S = anObject$6(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
  };

  var classofRaw = classofRaw$2;
  var uncurryThis$8 = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$8(fn);
  };

  var uncurryThis$7 = functionUncurryThisClause;
  var aCallable$6 = aCallable$9;
  var NATIVE_BIND = functionBindNative;

  var bind$4 = uncurryThis$7(uncurryThis$7.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$6(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind$4(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var uncurryThis$6 = functionUncurryThis;

  var arraySlice$2 = uncurryThis$6([].slice);

  var $TypeError$5 = TypeError;

  var validateArgumentsLength$1 = function (passed, required) {
    if (passed < required) throw new $TypeError$5('Not enough arguments');
    return passed;
  };

  var userAgent$4 = environmentUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

  var globalThis$7 = globalThis_1;
  var apply = functionApply;
  var bind$3 = functionBindContext;
  var isCallable$4 = isCallable$m;
  var hasOwn$2 = hasOwnProperty_1;
  var fails$7 = fails$p;
  var html = html$2;
  var arraySlice$1 = arraySlice$2;
  var createElement = documentCreateElement$2;
  var validateArgumentsLength = validateArgumentsLength$1;
  var IS_IOS$1 = environmentIsIos;
  var IS_NODE$2 = environmentIsNode;

  var set = globalThis$7.setImmediate;
  var clear = globalThis$7.clearImmediate;
  var process$3 = globalThis$7.process;
  var Dispatch = globalThis$7.Dispatch;
  var Function$1 = globalThis$7.Function;
  var MessageChannel = globalThis$7.MessageChannel;
  var String$1 = globalThis$7.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;

  fails$7(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis$7.location;
  });

  var run = function (id) {
    if (hasOwn$2(queue$2, id)) {
      var fn = queue$2[id];
      delete queue$2[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run(id);
    };
  };

  var eventListener = function (event) {
    run(event.data);
  };

  var globalPostMessageDefer = function (id) {
    // old engines have not location.origin
    globalThis$7.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1);
      var fn = isCallable$4(handler) ? handler : Function$1(handler);
      var args = arraySlice$1(arguments, 1);
      queue$2[++counter] = function () {
        apply(fn, undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue$2[id];
    };
    // Node.js 0.8-
    if (IS_NODE$2) {
      defer = function (id) {
        process$3.nextTick(runner(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = eventListener;
      defer = bind$3(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      globalThis$7.addEventListener &&
      isCallable$4(globalThis$7.postMessage) &&
      !globalThis$7.importScripts &&
      $location && $location.protocol !== 'file:' &&
      !fails$7(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer;
      globalThis$7.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function (id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set};

  var globalThis$6 = globalThis_1;
  var DESCRIPTORS$2 = descriptors;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  var safeGetBuiltIn$1 = function (name) {
    if (!DESCRIPTORS$2) return globalThis$6[name];
    var descriptor = getOwnPropertyDescriptor$1(globalThis$6, name);
    return descriptor && descriptor.value;
  };

  var Queue$2 = function () {
    this.head = null;
    this.tail = null;
  };

  Queue$2.prototype = {
    add: function (item) {
      var entry = { item: item, next: null };
      var tail = this.tail;
      if (tail) tail.next = entry;
      else this.head = entry;
      this.tail = entry;
    },
    get: function () {
      var entry = this.head;
      if (entry) {
        var next = this.head = entry.next;
        if (next === null) this.tail = null;
        return entry.item;
      }
    }
  };

  var queue$1 = Queue$2;

  var userAgent$3 = environmentUserAgent;

  var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != 'undefined';

  var userAgent$2 = environmentUserAgent;

  var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

  var globalThis$5 = globalThis_1;
  var safeGetBuiltIn = safeGetBuiltIn$1;
  var bind$2 = functionBindContext;
  var macrotask = task$1.set;
  var Queue$1 = queue$1;
  var IS_IOS = environmentIsIos;
  var IS_IOS_PEBBLE = environmentIsIosPebble;
  var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
  var IS_NODE$1 = environmentIsNode;

  var MutationObserver = globalThis$5.MutationObserver || globalThis$5.WebKitMutationObserver;
  var document$2 = globalThis$5.document;
  var process$2 = globalThis$5.process;
  var Promise$1 = globalThis$5.Promise;
  var microtask$1 = safeGetBuiltIn('queueMicrotask');
  var notify$1, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue = new Queue$1();

    var flush = function () {
      var parent, fn;
      if (IS_NODE$1 && (parent = process$2.domain)) parent.exit();
      while (fn = queue.get()) try {
        fn();
      } catch (error) {
        if (queue.head) notify$1();
        throw error;
      }
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, { characterData: true });
      notify$1 = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = bind$2(promise.then, promise);
      notify$1 = function () {
        then(flush);
      };
    // Node.js without promises
    } else if (IS_NODE$1) {
      notify$1 = function () {
        process$2.nextTick(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = bind$2(macrotask, globalThis$5);
      notify$1 = function () {
        macrotask(flush);
      };
    }

    microtask$1 = function (fn) {
      if (!queue.head) notify$1();
      queue.add(fn);
    };
  }

  var microtask_1 = microtask$1;

  var hostReportErrors$1 = function (a, b) {
    try {
      // eslint-disable-next-line no-console -- safe
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    } catch (error) { /* empty */ }
  };

  var perform$3 = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var globalThis$4 = globalThis_1;

  var promiseNativeConstructor = globalThis$4.Promise;

  var globalThis$3 = globalThis_1;
  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var isCallable$3 = isCallable$m;
  var isForced$1 = isForced_1;
  var inspectSource = inspectSource$3;
  var wellKnownSymbol$6 = wellKnownSymbol$j;
  var ENVIRONMENT = environment;
  var V8_VERSION = environmentV8Version;

  NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
  var SPECIES = wellKnownSymbol$6('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$3(globalThis$3.PromiseRejectionEvent);

  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
      // Detect correctness of subclassing with @@species support
      var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
      var FakePromise = function (exec) {
        exec(function () { /* empty */ }, function () { /* empty */ });
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES] = FakePromise;
      SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
      if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT$1;
  });

  var promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING
  };

  var newPromiseCapability$2 = {};

  var aCallable$5 = aCallable$9;

  var $TypeError$4 = TypeError;

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw new $TypeError$4('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$5(resolve);
    this.reject = aCallable$5(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var $$c = _export;
  var IS_NODE = environmentIsNode;
  var globalThis$2 = globalThis_1;
  var call$8 = functionCall;
  var defineBuiltIn$3 = defineBuiltIn$8;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var setToStringTag = setToStringTag$4;
  var setSpecies$1 = setSpecies$2;
  var aCallable$4 = aCallable$9;
  var isCallable$2 = isCallable$m;
  var isObject$3 = isObject$c;
  var anInstance = anInstance$1;
  var speciesConstructor = speciesConstructor$1;
  var task = task$1.set;
  var microtask = microtask_1;
  var hostReportErrors = hostReportErrors$1;
  var perform$2 = perform$3;
  var Queue = queue$1;
  var InternalStateModule = internalState;
  var NativePromiseConstructor$2 = promiseNativeConstructor;
  var PromiseConstructorDetection = promiseConstructorDetection;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;

  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
  var setInternalState = InternalStateModule.set;
  var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
  var PromiseConstructor = NativePromiseConstructor$2;
  var PromisePrototype = NativePromisePrototype$1;
  var TypeError$1 = globalThis$2.TypeError;
  var document$1 = globalThis$2.document;
  var process$1 = globalThis$2.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
  var newGenericPromiseCapability = newPromiseCapability$1;

  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$2.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;

  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject$3(it) && isCallable$2(then = it.then) ? then : false;
  };

  var callReaction = function (reaction, state) {
    var value = state.value;
    var ok = state.state === FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }
        if (handler === true) result = value;
        else {
          if (domain) domain.enter();
          result = handler(value); // can throw
          if (domain) {
            domain.exit();
            exited = true;
          }
        }
        if (result === reaction.promise) {
          reject(new TypeError$1('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$8(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };

  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function () {
      var reactions = state.reactions;
      var reaction;
      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      globalThis$2.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$2['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    call$8(task, globalThis$2, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform$2(function () {
          if (IS_NODE) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (state) {
    call$8(task, globalThis$2, function () {
      var promise = state.facade;
      if (IS_NODE) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$1 = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw new TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = { done: false };
          try {
            call$8(then, value,
              bind$1(internalResolve, wrapper, state),
              bind$1(internalReject, wrapper, state)
            );
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({ done: false }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromisePrototype);
      aCallable$4(executor);
      call$8(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind$1(internalResolve, state), bind$1(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype;

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: null
      });
    };

    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn$3(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$2(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$2(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process$1.domain : undefined;
      if (state.state === PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });

    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind$1(internalResolve, state);
      this.reject = bind$1(internalReject, state);
    };

    newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };

    if (isCallable$2(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
      nativeThen = NativePromisePrototype$1.then;

      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn$3(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$8(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, { unsafe: true });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$1.constructor;
      } catch (error) { /* empty */ }

      // make `instanceof Promise` work for native promise-based APIs
      if (setPrototypeOf$1) {
        setPrototypeOf$1(NativePromisePrototype$1, PromisePrototype);
      }
    }
  }

  // `Promise` constructor
  // https://tc39.es/ecma262/#sec-promise-executor
  $$c({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
    Promise: PromiseConstructor
  });

  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies$1(PROMISE);

  var wellKnownSymbol$5 = wellKnownSymbol$j;
  var Iterators$1 = iterators;

  var ITERATOR$2 = wellKnownSymbol$5('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function (it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
  };

  var classof$1 = classof$6;
  var getMethod$2 = getMethod$5;
  var isNullOrUndefined$1 = isNullOrUndefined$6;
  var Iterators = iterators;
  var wellKnownSymbol$4 = wellKnownSymbol$j;

  var ITERATOR$1 = wellKnownSymbol$4('iterator');

  var getIteratorMethod$2 = function (it) {
    if (!isNullOrUndefined$1(it)) return getMethod$2(it, ITERATOR$1)
      || getMethod$2(it, '@@iterator')
      || Iterators[classof$1(it)];
  };

  var call$7 = functionCall;
  var aCallable$3 = aCallable$9;
  var anObject$5 = anObject$e;
  var tryToString$2 = tryToString$5;
  var getIteratorMethod$1 = getIteratorMethod$2;

  var $TypeError$3 = TypeError;

  var getIterator$1 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
    if (aCallable$3(iteratorMethod)) return anObject$5(call$7(iteratorMethod, argument));
    throw new $TypeError$3(tryToString$2(argument) + ' is not iterable');
  };

  var call$6 = functionCall;
  var anObject$4 = anObject$e;
  var getMethod$1 = getMethod$5;

  var iteratorClose$1 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$4(iterator);
    try {
      innerResult = getMethod$1(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$6(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$4(innerResult);
    return value;
  };

  var bind = functionBindContext;
  var call$5 = functionCall;
  var anObject$3 = anObject$e;
  var tryToString$1 = tryToString$5;
  var isArrayIteratorMethod = isArrayIteratorMethod$1;
  var lengthOfArrayLike$1 = lengthOfArrayLike$3;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var getIterator = getIterator$1;
  var getIteratorMethod = getIteratorMethod$2;
  var iteratorClose = iteratorClose$1;

  var $TypeError$2 = TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$2 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$3(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw new $TypeError$2(tryToString$1(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$5(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$2(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var wellKnownSymbol$3 = wellKnownSymbol$j;

  var ITERATOR = wellKnownSymbol$3('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
    try {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    } catch (error) { return false; } // workaround of old WebKit + `eval` bug
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
    NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
  });

  var $$b = _export;
  var call$4 = functionCall;
  var aCallable$2 = aCallable$9;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$1 = perform$3;
  var iterate$1 = iterate$2;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$b({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aCallable$2(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$4($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$a = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor = promiseNativeConstructor;
  var getBuiltIn$1 = getBuiltIn$7;
  var isCallable$1 = isCallable$m;
  var defineBuiltIn$2 = defineBuiltIn$8;

  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$a({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  if (isCallable$1(NativePromiseConstructor)) {
    var method = getBuiltIn$1('Promise').prototype['catch'];
    if (NativePromisePrototype['catch'] !== method) {
      defineBuiltIn$2(NativePromisePrototype, 'catch', method, { unsafe: true });
    }
  }

  var $$9 = _export;
  var call$3 = functionCall;
  var aCallable$1 = aCallable$9;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform = perform$3;
  var iterate = iterate$2;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$9({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$1.f(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable$1(C.resolve);
        iterate(iterable, function (promise) {
          call$3($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$8 = _export;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$8({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule.f(this);
      var capabilityReject = capability.reject;
      capabilityReject(r);
      return capability.promise;
    }
  });

  var anObject$2 = anObject$e;
  var isObject$2 = isObject$c;
  var newPromiseCapability = newPromiseCapability$2;

  var promiseResolve$1 = function (C, x) {
    anObject$2(C);
    if (isObject$2(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$7 = _export;
  var getBuiltIn = getBuiltIn$7;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve = promiseResolve$1;

  getBuiltIn('Promise');

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$7({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });

  var call$2 = functionCall;
  var hasOwn$1 = hasOwnProperty_1;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$2 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$1(R, 'flags') && isPrototypeOf$1(RegExpPrototype$2, R)
      ? call$2(regExpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var defineBuiltIn$1 = defineBuiltIn$8;
  var anObject$1 = anObject$e;
  var $toString = toString$b;
  var fails$6 = fails$p;
  var getRegExpFlags$1 = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype$1 = RegExp.prototype;
  var nativeToString = RegExpPrototype$1[TO_STRING];

  var NOT_GENERIC = fails$6(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name !== TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn$1(RegExpPrototype$1, TO_STRING, function toString() {
      var R = anObject$1(this);
      var pattern = $toString(R.source);
      var flags = $toString(getRegExpFlags$1(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
  }

  var {
    Title: Title$4,
    Text: Text$4
  } = antd.Typography;
  var BRAND_GREEN = '#02CD8D';

  /**
   * AccountPickerModal
   * Props:
   *  - open: boolean
   *  - zIndex?: number
   *  - width?: number (default 560)
   *  - accounts: Array<{ userNo, walletId?, owner?, email?, photo? }>
   *  - onSelect: (userNo: string) => void | Promise<void>
   *  - onClose: () => void
   *  - activeUserNo?: string
   *  - ctaLabel?: string
   */
  function AccountPickerModal(_ref) {
    var {
      open,
      zIndex = 2000,
      width = 560,
      accounts = [],
      onSelect,
      onClose,
      activeUserNo,
      ctaLabel = 'Use this account'
    } = _ref;
    var [selectingNo, setSelectingNo] = H.useState(null);
    var handleChoose = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (userNo) {
        if (!userNo || selectingNo) return;
        setSelectingNo(userNo);
        try {
          yield Promise.resolve(onSelect === null || onSelect === void 0 ? void 0 : onSelect(userNo));
        } finally {
          setSelectingNo(null);
        }
      });
      return function handleChoose(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      title: null,
      footer: null,
      onCancel: onClose,
      maskClosable: false,
      zIndex: zIndex,
      bodyStyle: {
        padding: 20
      },
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: '#ff4d4f',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
        size: "sm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$4, {
        level: 4,
        style: {
          marginTop: 0,
          color: BRAND_GREEN
        },
        children: "Choose an account"
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$4, {
        type: "secondary",
        style: {
          display: 'block',
          marginBottom: 12
        },
        children: "Select the EVzone account you\u2019d like to use for this payment."
      }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.List, {
        itemLayout: "horizontal",
        rowKey: acct => acct.walletId || acct.userNo || Math.random().toString(36),
        dataSource: accounts,
        locale: {
          emptyText: 'No saved accounts found on this device.'
        },
        renderItem: acct => {
          var isActive = activeUserNo && acct.userNo === activeUserNo;
          var isSelecting = selectingNo === acct.userNo;
          return /*#__PURE__*/jsxRuntimeExports.jsx(antd.List.Item, {
            onClick: () => handleChoose(acct.userNo),
            style: {
              padding: 12,
              border: '1px solid #f0f0f0',
              borderRadius: 10,
              marginBottom: 10,
              cursor: 'pointer',
              transition: 'box-shadow 0.15s ease'
            },
            onMouseEnter: e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)',
            onMouseLeave: e => e.currentTarget.style.boxShadow = 'none',
            actions: [/*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
              type: "primary",
              shape: "round",
              onClick: e => {
                e.stopPropagation();
                handleChoose(acct.userNo);
              },
              loading: isSelecting,
              children: ctaLabel
            }, "use")],
            children: /*#__PURE__*/jsxRuntimeExports.jsx(antd.List.Item.Meta, {
              avatar: /*#__PURE__*/jsxRuntimeExports.jsx(antd.Avatar, {
                size: 48,
                src: acct.photo,
                children: (acct.owner || acct.email || 'U')[0].toUpperCase()
              }),
              title: /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
                align: "center",
                children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
                  style: {
                    fontWeight: 600
                  },
                  children: acct.owner || 'EVzone user'
                }), isActive ? /*#__PURE__*/jsxRuntimeExports.jsx(icons.CheckCircleTwoTone, {
                  twoToneColor: "#52c41a"
                }) : null]
              }),
              description: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                style: {
                  lineHeight: 1.4
                },
                children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                  children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$4, {
                    type: "secondary",
                    children: "Email:"
                  }), " ", acct.email || '—']
                }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                  children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$4, {
                    type: "secondary",
                    children: "Wallet ID:"
                  }), ' ', /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                    style: {
                      fontFamily: 'monospace'
                    },
                    children: acct.walletId || '—'
                  })]
                })]
              })
            })
          });
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 8
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
          block: true,
          shape: "round",
          danger: true,
          ghost: true,
          onClick: onClose,
          children: "Cancel"
        })
      })]
    });
  }

  var call$1 = functionCall;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject = anObject$e;
  var isNullOrUndefined = isNullOrUndefined$6;
  var toLength$1 = toLength$5;
  var toString$5 = toString$b;
  var requireObjectCoercible$3 = requireObjectCoercible$b;
  var getMethod = getMethod$5;
  var advanceStringIndex = advanceStringIndex$2;
  var regExpExec = regexpExecAbstract;

  // @@match logic
  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible$3(this);
        var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
        return matcher ? call$1(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$5(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject(this);
        var S = toString$5(string);
        var res = maybeCallNative(nativeMatch, rx, S);

        if (res.done) return res.value;

        if (!rx.global) return regExpExec(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regExpExec(rx, S)) !== null) {
          var matchStr = toString$5(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  var isObject$1 = isObject$c;
  var classof = classofRaw$2;
  var wellKnownSymbol$2 = wellKnownSymbol$j;

  var MATCH$2 = wellKnownSymbol$2('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$1(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
  };

  var isRegExp$1 = isRegexp;

  var $TypeError$1 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp$1(it)) {
      throw new $TypeError$1("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$1 = wellKnownSymbol$j;

  var MATCH$1 = wellKnownSymbol$1('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH$1] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var $$6 = _export;
  var uncurryThis$5 = functionUncurryThisClause;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var toLength = toLength$5;
  var toString$4 = toString$b;
  var notARegExp$1 = notARegexp;
  var requireObjectCoercible$2 = requireObjectCoercible$b;
  var correctIsRegExpLogic$1 = correctIsRegexpLogic;

  var stringSlice$1 = uncurryThis$5(''.slice);
  var min = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic$1('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  $$6({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = toString$4(requireObjectCoercible$2(this));
      notARegExp$1(searchString);
      var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString$4(searchString);
      return stringSlice$1(that, index, index + search.length) === search;
    }
  });

  var _=[["Afghanistan","af","93"],["Albania","al","355"],["Algeria","dz","213"],["Andorra","ad","376"],["Angola","ao","244"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54","(..) ........",0],["Armenia","am","374",".. ......"],["Aruba","aw","297"],["Australia","au","61",{default:". .... ....","/^4/":"... ... ...","/^5(?!50)/":"... ... ...","/^1(3|8)00/":".... ... ...","/^13/":".. .. ..","/^180/":"... ...."},0,[]],["Austria","at","43"],["Azerbaijan","az","994","(..) ... .. .."],["Bahamas","bs","1242"],["Bahrain","bh","973"],["Bangladesh","bd","880"],["Barbados","bb","1246"],["Belarus","by","375","(..) ... .. .."],["Belgium","be","32","... .. .. .."],["Belize","bz","501"],["Benin","bj","229"],["Bhutan","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina","ba","387"],["Botswana","bw","267"],["Brazil","br","55","(..) .....-...."],["British Indian Ocean Territory","io","246"],["Brunei","bn","673"],["Bulgaria","bg","359"],["Burkina Faso","bf","226"],["Burundi","bi","257"],["Cambodia","kh","855"],["Cameroon","cm","237"],["Canada","ca","1","(...) ...-....",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde","cv","238"],["Caribbean Netherlands","bq","599","",1],["Cayman Islands","ky","1","... ... ....",4,["345"]],["Central African Republic","cf","236"],["Chad","td","235"],["Chile","cl","56"],["China","cn","86","... .... ...."],["Colombia","co","57","... ... ...."],["Comoros","km","269"],["Congo","cd","243"],["Congo","cg","242"],["Costa Rica","cr","506","....-...."],["C\xF4te d'Ivoire","ci","225",".. .. .. .. .."],["Croatia","hr","385"],["Cuba","cu","53"],["Cura\xE7ao","cw","599","",0],["Cyprus","cy","357",".. ......"],["Czech Republic","cz","420","... ... ..."],["Denmark","dk","45",".. .. .. .."],["Djibouti","dj","253",".. .. ...."],["Dominica","dm","1767"],["Dominican Republic","do","1","(...) ...-....",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt","eg","20"],["El Salvador","sv","503","....-...."],["Equatorial Guinea","gq","240"],["Eritrea","er","291"],["Estonia","ee","372",".... ......"],["Ethiopia","et","251",".. ... ...."],["Faroe Islands","fo","298",".. .. .."],["Fiji","fj","679"],["Finland","fi","358",".. ... .. .."],["France","fr","33",". .. .. .. .."],["French Guiana","gf","594","... .. .. .."],["French Polynesia","pf","689",{"/^44/":".. .. ..","/^80[0-5]/":"... .. .. ..",default:".. .. .. .."}],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia","ge","995"],["Germany","de","49","... ........."],["Ghana","gh","233"],["Greece","gr","30"],["Greenland","gl","299",".. .. .."],["Grenada","gd","1473"],["Guadeloupe","gp","590","... .. .. ..",0],["Guam","gu","1671"],["Guatemala","gt","502","....-...."],["Guinea","gn","224"],["Guinea-Bissau","gw","245"],["Guyana","gy","592"],["Haiti","ht","509","....-...."],["Honduras","hn","504"],["Hong Kong","hk","852",".... ...."],["Hungary","hu","36"],["Iceland","is","354","... ...."],["India","in","91",".....-....."],["Indonesia","id","62"],["Iran","ir","98","... ... ...."],["Iraq","iq","964"],["Ireland","ie","353",".. ......."],["Israel","il","972","... ... ...."],["Italy","it","39","... .......",0],["Jamaica","jm","1876"],["Japan","jp","81",".. .... ...."],["Jordan","jo","962"],["Kazakhstan","kz","7","... ...-..-..",0],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait","kw","965"],["Kyrgyzstan","kg","996","... ... ..."],["Laos","la","856"],["Latvia","lv","371",".. ... ..."],["Lebanon","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya","ly","218"],["Liechtenstein","li","423"],["Lithuania","lt","370"],["Luxembourg","lu","352"],["Macau","mo","853"],["Macedonia","mk","389"],["Madagascar","mg","261"],["Malawi","mw","265"],["Malaysia","my","60","..-....-...."],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596","... .. .. .."],["Mauritania","mr","222"],["Mauritius","mu","230"],["Mayotte","yt","262","... .. .. ..",1,["269","639"]],["Mexico","mx","52","... ... ....",0],["Micronesia","fm","691"],["Moldova","md","373","(..) ..-..-.."],["Monaco","mc","377"],["Mongolia","mn","976"],["Montenegro","me","382"],["Morocco","ma","212"],["Mozambique","mz","258"],["Myanmar","mm","95"],["Namibia","na","264"],["Nauru","nr","674"],["Nepal","np","977"],["Netherlands","nl","31",{"/^06/":"(.). .........","/^6/":". .........","/^0(10|13|14|15|20|23|24|26|30|33|35|36|38|40|43|44|45|46|50|53|55|58|70|71|72|73|74|75|76|77|78|79|82|84|85|87|88|91)/":"(.).. ........","/^(10|13|14|15|20|23|24|26|30|33|35|36|38|40|43|44|45|46|50|53|55|58|70|71|72|73|74|75|76|77|78|79|82|84|85|87|88|91)/":".. ........","/^0/":"(.)... .......",default:"... ......."}],["New Caledonia","nc","687"],["New Zealand","nz","64","...-...-...."],["Nicaragua","ni","505"],["Niger","ne","227"],["Nigeria","ng","234"],["North Korea","kp","850"],["Norway","no","47","... .. ..."],["Oman","om","968"],["Pakistan","pk","92","...-......."],["Palau","pw","680"],["Palestine","ps","970"],["Panama","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru","pe","51"],["Philippines","ph","63","... ... ...."],["Poland","pl","48","...-...-..."],["Portugal","pt","351"],["Puerto Rico","pr","1","(...) ...-....",3,["787","939"]],["Qatar","qa","974"],["R\xE9union","re","262","... .. .. ..",0],["Romania","ro","40"],["Russia","ru","7","(...) ...-..-..",1],["Rwanda","rw","250"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Pierre & Miquelon","pm","508",{"/^708/":"... ... ...","/^8/":"... .. .. ..",default:".. .. .."}],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["S\xE3o Tom\xE9 and Pr\xEDncipe","st","239"],["Saudi Arabia","sa","966"],["Senegal","sn","221"],["Serbia","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65","....-...."],["Slovakia","sk","421"],["Slovenia","si","386"],["Solomon Islands","sb","677"],["Somalia","so","252"],["South Africa","za","27"],["South Korea","kr","82","... .... ...."],["South Sudan","ss","211"],["Spain","es","34","... ... ..."],["Sri Lanka","lk","94"],["Sudan","sd","249"],["Suriname","sr","597"],["Swaziland","sz","268"],["Sweden","se","46","... ... ..."],["Switzerland","ch","41",".. ... .. .."],["Syria","sy","963"],["Taiwan","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia","tn","216"],["Turkey","tr","90","... ... .. .."],["Turkmenistan","tm","993"],["Tuvalu","tv","688"],["Uganda","ug","256"],["Ukraine","ua","380","(..) ... .. .."],["United Arab Emirates","ae","971"],["United Kingdom","gb","44",".... ......"],["United States","us","1","(...) ...-....",0],["Uruguay","uy","598"],["Uzbekistan","uz","998",".. ... .. .."],["Vanuatu","vu","678"],["Vatican City","va","39",".. .... ....",1],["Venezuela","ve","58"],["Vietnam","vn","84"],["Wallis & Futuna","wf","681",".. .. .."],["Yemen","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"]];var xe="react-international-phone-",se=(...t)=>t.filter(e=>!!e).join(" ").trim(),Se=(...t)=>se(...t).split(" ").map(e=>`${xe}${e}`).join(" "),P=({addPrefix:t,rawClassNames:e})=>se(Se(...t),...e);var le=({value:t,mask:e,maskSymbol:a,offset:s=0,trimNonMaskCharsLeftover:r=false})=>{if(t.length<s)return t;let n=t.slice(0,s),c=t.slice(s),i=n,o=0;for(let l of e.split("")){if(o>=c.length){if(!r&&l!==a){i+=l;continue}break}l===a?(i+=c[o],o+=1):i+=l;}return i};var F=t=>t?/^\d+$/.test(t):false;var z=t=>t.replace(/\D/g,"");var ue=(t,e)=>{let a=t.style.display;a!=="block"&&(t.style.display="block");let s=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=r.top-s.top,c=s.bottom-r.bottom;n>=0&&c>=0||(Math.abs(n)<Math.abs(c)?t.scrollTop+=n:t.scrollTop-=c),t.style.display=a;};var de=()=>typeof window>"u"?false:window.navigator.userAgent.toLowerCase().includes("macintosh");var pe=(t,e)=>{let a=e.disableDialCodeAndPrefix?false:e.forceDialCode,s=e.disableDialCodeAndPrefix?false:e.insertDialCodeOnEmpty,r=t,n=l=>e.trimNonDigitsEnd?l.trim():l;if(!r)return s&&!r.length||a?n(`${e.prefix}${e.dialCode}${e.charAfterDialCode}`):n(r);if(r=z(r),r===e.dialCode&&!e.disableDialCodeAndPrefix)return n(`${e.prefix}${e.dialCode}${e.charAfterDialCode}`);if(e.dialCode.startsWith(r)&&!e.disableDialCodeAndPrefix)return n(a?`${e.prefix}${e.dialCode}${e.charAfterDialCode}`:`${e.prefix}${r}`);if(!r.startsWith(e.dialCode)&&!e.disableDialCodeAndPrefix){if(a)return n(`${e.prefix}${e.dialCode}${e.charAfterDialCode}`);if(r.length<e.dialCode.length)return n(`${e.prefix}${r}`)}let c=()=>{let l=e.dialCode.length,d=r.slice(0,l),m=r.slice(l);return {phoneLeftSide:d,phoneRightSide:m}},{phoneLeftSide:i,phoneRightSide:o}=c();return i=`${e.prefix}${i}${e.charAfterDialCode}`,o=le({value:o,mask:e.mask,maskSymbol:e.maskChar,trimNonMaskCharsLeftover:e.trimNonDigitsEnd||e.disableDialCodeAndPrefix&&o.length===0}),e.disableDialCodeAndPrefix&&(i=""),n(`${i}${o}`)};var me=({phoneBeforeInput:t,phoneAfterInput:e,phoneAfterFormatted:a,cursorPositionAfterInput:s,leftOffset:r=0,deletion:n})=>{if(s<r)return r;if(!t)return a.length;let c=null;for(let d=s-1;d>=0;d-=1)if(F(e[d])){c=d;break}if(c===null){for(let d=0;d<e.length;d+=1)if(F(a[d]))return d;return e.length}let i=0;for(let d=0;d<c;d+=1)F(e[d])&&(i+=1);let o=0,l=0;for(let d=0;d<a.length&&(o+=1,F(a[d])&&(l+=1),!(l>=i+1));d+=1);if(n!=="backward")for(;!F(a[o])&&o<a.length;)o+=1;return o};var O=({phone:t,prefix:e})=>t?`${e}${z(t)}`:"";function W({value:t,country:e,insertDialCodeOnEmpty:a,trimNonDigitsEnd:s,countries:r,prefix:n,charAfterDialCode:c,forceDialCode:i,disableDialCodeAndPrefix:o,defaultMask:l,countryGuessingEnabled:d,disableFormatting:m}){let f=t;o&&(f=f.startsWith(`${n}`)?f:`${n}${e.dialCode}${f}`);let g=d?X({phone:f,countries:r,currentCountryIso2:e?.iso2}):void 0,S=g?.country??e,p=pe(f,{prefix:n,mask:Q({phone:f,country:S,defaultMask:l,disableFormatting:m}),maskChar:J,dialCode:S.dialCode,trimNonDigitsEnd:s,charAfterDialCode:c,forceDialCode:i,insertDialCodeOnEmpty:a,disableDialCodeAndPrefix:o}),C=d&&!g?.fullDialCodeMatch?e:S;return {phone:O({phone:o?`${C.dialCode}${p}`:p,prefix:n}),inputValue:p,country:C}}var Ie=t=>{if(t?.toLocaleLowerCase().includes("delete")??false)return t?.toLocaleLowerCase().includes("forward")?"forward":"backward"},fe=(t,{country:e,insertDialCodeOnEmpty:a,phoneBeforeInput:s,prefix:r,charAfterDialCode:n,forceDialCode:c,disableDialCodeAndPrefix:i,countryGuessingEnabled:o,defaultMask:l,disableFormatting:d,countries:m})=>{let f=t.nativeEvent,g=f.inputType,S=Ie(g),p=!!g?.startsWith("insertFrom"),C=g==="insertText",D=f?.data||void 0,I=t.target.value,A=t.target.selectionStart??0;if(g?.includes("history"))return {inputValue:s,phone:O({phone:s,prefix:r}),cursorPosition:s.length,country:e};if(C&&!F(D)&&I!==r)return {inputValue:s,phone:O({phone:i?`${e.dialCode}${s}`:s,prefix:r}),cursorPosition:A-(D?.length??0),country:e};if(c&&!I.startsWith(`${r}${e.dialCode}`)&&!p){let b=I?s:`${r}${e.dialCode}${n}`;return {inputValue:b,phone:O({phone:b,prefix:r}),cursorPosition:r.length+e.dialCode.length+n.length,country:e}}let{phone:N,inputValue:u,country:h}=W({value:I,country:e,trimNonDigitsEnd:S==="backward",insertDialCodeOnEmpty:a,countryGuessingEnabled:o,countries:m,prefix:r,charAfterDialCode:n,forceDialCode:c,disableDialCodeAndPrefix:i,disableFormatting:d,defaultMask:l}),y=me({cursorPositionAfterInput:A,phoneBeforeInput:s,phoneAfterInput:I,phoneAfterFormatted:u,leftOffset:c?r.length+e.dialCode.length+n.length:0,deletion:S});return {phone:N,inputValue:u,cursorPosition:y,country:h}};var Ce=(t,e)=>{let a=Object.keys(t),s=Object.keys(e);if(a.length!==s.length)return  false;for(let r of a)if(t[r]!==e[r])return  false;return  true};var ye=()=>{let t=H.useRef(),e=H.useRef(Date.now());return {check:()=>{let s=Date.now(),r=t.current?s-e.current:void 0;return t.current=e.current,e.current=s,r}}};var ke={size:20,overrideLastItemDebounceMS:-1};function ge(t,e){let{size:a,overrideLastItemDebounceMS:s,onChange:r}={...ke,...e},[n,c]=H.useState(t),[i,o]=H.useState([n]),[l,d]=H.useState(0),m=ye();return [n,(p,C)=>{if(typeof p=="object"&&typeof n=="object"&&Ce(p,n)||p===n)return;let k=s>0,D=m.check(),I=k&&D!==void 0?D>s:true;if(C?.overrideLastItem!==void 0?C.overrideLastItem:!I)o(N=>[...N.slice(0,l),p]);else {let N=i.length>=a;o(u=>[...u.slice(N?1:0,l+1),p]),N||d(u=>u+1);}c(p),r?.(p);},()=>{if(l<=0)return {success:false};let p=i[l-1];return c(p),d(C=>C-1),r?.(p),{success:true,value:p}},()=>{if(l+1>=i.length)return {success:false};let p=i[l+1];return c(p),d(C=>C+1),r?.(p),{success:true,value:p}}]}var J=".",E={defaultCountry:"us",value:"",prefix:"+",defaultMask:"............",charAfterDialCode:" ",historySaveDebounceMS:200,disableCountryGuess:false,disableDialCodePrefill:false,forceDialCode:false,disableDialCodeAndPrefix:false,disableFormatting:false,countries:_},ee=({defaultCountry:t=E.defaultCountry,value:e=E.value,countries:a=E.countries,prefix:s=E.prefix,defaultMask:r=E.defaultMask,charAfterDialCode:n=E.charAfterDialCode,historySaveDebounceMS:c=E.historySaveDebounceMS,disableCountryGuess:i=E.disableCountryGuess,disableDialCodePrefill:o=E.disableDialCodePrefill,forceDialCode:l=E.forceDialCode,disableDialCodeAndPrefix:d=E.disableDialCodeAndPrefix,disableFormatting:m=E.disableFormatting,onChange:f,inputRef:g})=>{let C={countries:a,prefix:s,charAfterDialCode:n,forceDialCode:d?false:l,disableDialCodeAndPrefix:d,defaultMask:r,countryGuessingEnabled:!i,disableFormatting:m},k=H.useRef(null),D=g||k,I=w=>{Promise.resolve().then(()=>{typeof window>"u"||D.current!==document?.activeElement||D.current?.setSelectionRange(w,w);});},[{phone:A,inputValue:N,country:u},h,y,b]=ge(()=>{let w=$$5({value:t,field:"iso2",countries:a});w||console.error(`[react-international-phone]: can not find a country with "${t}" iso2 code`);let T=w||$$5({value:"us",field:"iso2",countries:a}),{phone:x,inputValue:L,country:U}=W({value:e,country:T,insertDialCodeOnEmpty:!o,...C});return I(L.length),{phone:x,inputValue:L,country:U.iso2}},{overrideLastItemDebounceMS:c,onChange:({inputValue:w,phone:T,country:x})=>{if(!f)return;let L=v(x);f({phone:T,inputValue:w,country:L});}}),v=H.useCallback(w=>$$5({value:w,field:"iso2",countries:a}),[a]),R=H.useMemo(()=>v(u),[u,v]);H.useEffect(()=>{let w=D.current;if(!w)return;let T=x=>{if(!x.key)return;let L=x.ctrlKey,U=x.metaKey,ve=x.shiftKey;if(x.key.toLowerCase()==="z"){if(de()){if(!U)return}else if(!L)return;ve?b():y();}};return w.addEventListener("keydown",T),()=>{w.removeEventListener("keydown",T);}},[D,y,b]);let V=w=>{w.preventDefault();let{phone:T,inputValue:x,country:L,cursorPosition:U}=fe(w,{country:R,phoneBeforeInput:N,insertDialCodeOnEmpty:false,...C});return h({inputValue:x,phone:T,country:L.iso2}),I(U),e},K=(w,T={focusOnInput:false})=>{let x=$$5({value:w,field:"iso2",countries:a});if(!x){console.error(`[react-international-phone]: can not find a country with "${w}" iso2 code`);return}let L=d?"":`${s}${x.dialCode}${n}`;h({inputValue:L,phone:`${s}${x.dialCode}`,country:x.iso2}),T.focusOnInput&&Promise.resolve().then(()=>{D.current?.focus();});},[G,j]=H.useState(false);return H.useEffect(()=>{if(!G){j(true),e!==A&&f?.({inputValue:N,phone:A,country:R});return}if(e===A)return;let{phone:w,inputValue:T,country:x}=W({value:e,country:R,insertDialCodeOnEmpty:!o,...C});h({phone:w,inputValue:T,country:x.iso2});},[e]),{phone:A,inputValue:N,country:R,setCountry:K,handlePhoneValueChange:V,inputRef:D}};var Q=({phone:t,country:e,defaultMask:a="............",disableFormatting:s=false})=>{let r=e.format,n=i=>s?i.replace(new RegExp(`[^${J}]`,"g"),""):i;if(!r)return n(a);if(typeof r=="string")return n(r);if(!r.default)return console.error(`[react-international-phone]: default mask for ${e.iso2} is not provided`),n(a);let c=Object.keys(r).find(i=>{if(i==="default")return  false;if(!(i.charAt(0)==="/"&&i.charAt(i.length-1)==="/"))return console.error(`[react-international-phone]: format regex "${i}" for ${e.iso2} is not valid`),false;let l=new RegExp(i.substring(1,i.length-1)),d=t.replace(e.dialCode,"");return l.test(z(d))});return n(c?r[c]:r.default)};var M=t=>{let[e,a,s,r,n,c]=t;return {name:e,iso2:a,dialCode:s,format:r,priority:n,areaCodes:c}};var Ae=t=>`Field "${t}" is not supported`,$$5=({field:t,value:e,countries:a=_})=>{if(["priority"].includes(t))throw new Error(Ae(t));let s=a.find(r=>{let n=M(r);return e===n[t]});if(s)return M(s)};var X=({phone:t,countries:e=_,currentCountryIso2:a})=>{let s={country:void 0,fullDialCodeMatch:false};if(!t)return s;let r=z(t);if(!r)return s;let n=s,c=({country:i,fullDialCodeMatch:o})=>{let l=i.dialCode===n.country?.dialCode,d=(i.priority??0)<(n.country?.priority??0);(!l||d)&&(n={country:i,fullDialCodeMatch:o});};for(let i of e){let o=M(i),{dialCode:l,areaCodes:d}=o;if(r.startsWith(l)){let m=n.country?Number(l)>=Number(n.country.dialCode):true;if(d){let f=r.substring(l.length);for(let g of d)if(f.startsWith(g))return {country:o,fullDialCodeMatch:true}}(m||l===r||!n.fullDialCodeMatch)&&c({country:o,fullDialCodeMatch:true});}n.fullDialCodeMatch||r.length<l.length&&l.startsWith(r)&&(!n.country||Number(l)<=Number(n.country.dialCode))&&c({country:o,fullDialCodeMatch:false});}if(a){let i=$$5({value:a,field:"iso2",countries:e});if(!i)return n;let l=i?(m=>{if(!m?.areaCodes)return  false;let f=r.substring(m.dialCode.length);return m.areaCodes.some(g=>g.startsWith(f))})(i):false;!!n&&n.country?.dialCode===i.dialCode&&n.country!==i&&n.fullDialCodeMatch&&(!i.areaCodes||l)&&(n={country:i,fullDialCodeMatch:true});}return n};var Te=(t,e)=>{let a=parseInt(t,16);return Number(a+e).toString(16)},Ee="abcdefghijklmnopqrstuvwxyz",Le="1f1e6",Pe=Ee.split("").reduce((t,e,a)=>({...t,[e]:Te(Le,a)}),{}),$e=t=>[Pe[t[0]],Pe[t[1]]].join("-"),q=({iso2:t,size:e,src:a,protocol:s="https",disableLazyLoading:r,className:n,style:c,...i})=>{if(!t)return H.createElement("img",{className:P({addPrefix:["flag-emoji"],rawClassNames:[n]}),width:e,height:e,...i});let o=()=>{if(a)return a;let l=$e(t);return `${s}://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${l}.svg`};return H.createElement("img",{className:P({addPrefix:["flag-emoji"],rawClassNames:[n]}),src:o(),width:e,height:e,draggable:false,"data-country":t,loading:r?void 0:"lazy",style:{width:e,height:e,...c},alt:"",...i})};var He=1e3,ne=({show:t,dialCodePrefix:e="+",selectedCountry:a,countries:s=_,preferredCountries:r=[],flags:n,onSelect:c,onClose:i,...o})=>{let l=H.useRef(null),d=H.useRef(),m=H.useMemo(()=>{if(!r||!r.length)return s;let u=[],h=[...s];for(let y of r){let b=h.findIndex(v=>M(v).iso2===y);if(b!==-1){let v=h.splice(b,1)[0];u.push(v);}}return u.concat(h)},[s,r]),f=H.useRef({updatedAt:void 0,value:""}),g=u=>{let h=f.current.updatedAt&&new Date().getTime()-f.current.updatedAt.getTime()>He;f.current={value:h?u:`${f.current.value}${u}`,updatedAt:new Date};let y=m.findIndex(b=>M(b).name.toLowerCase().startsWith(f.current.value));y!==-1&&C(y);},S=H.useCallback(u=>m.findIndex(h=>M(h).iso2===u),[m]),[p,C]=H.useState(S(a)),k=()=>{d.current!==a&&C(S(a));},D=H.useCallback(u=>{C(S(u.iso2)),c?.(u);},[c,S]),I=u=>{let h=m.length-1,y=b=>u==="prev"?b-1:u==="next"?b+1:u==="last"?h:0;C(b=>{let v=y(b);return v<0?0:v>h?h:v});},A=u=>{if(u.stopPropagation(),u.key==="Enter"){u.preventDefault();let h=M(m[p]);D(h);return}if(u.key==="Escape"){i?.();return}if(u.key==="ArrowUp"){u.preventDefault(),I("prev");return}if(u.key==="ArrowDown"){u.preventDefault(),I("next");return}if(u.key==="PageUp"){u.preventDefault(),I("first");return}if(u.key==="PageDown"){u.preventDefault(),I("last");return}u.key===" "&&u.preventDefault(),u.key.length===1&&!u.altKey&&!u.ctrlKey&&!u.metaKey&&g(u.key.toLocaleLowerCase());},N=H.useCallback(()=>{if(!l.current||p===void 0)return;let u=M(m[p]).iso2;if(u===d.current)return;let h=l.current.querySelector(`[data-country="${u}"]`);h&&(ue(l.current,h),d.current=u);},[p,m]);return H.useEffect(()=>{N();},[p,N]),H.useEffect(()=>{l.current&&(t?l.current.focus():k());},[t]),H.useEffect(()=>{k();},[a]),H.createElement("ul",{ref:l,role:"listbox",className:P({addPrefix:["country-selector-dropdown"],rawClassNames:[o.className]}),style:{display:t?"block":"none",...o.style},onKeyDown:A,onBlur:i,tabIndex:-1,"aria-activedescendant":`react-international-phone__${M(m[p]).iso2}-option`},m.map((u,h)=>{let y=M(u),b=y.iso2===a,v=h===p,R=r.includes(y.iso2),V=h===r.length-1,K=n?.find(G=>G.iso2===y.iso2);return H.createElement(H.Fragment,{key:y.iso2},H.createElement("li",{"data-country":y.iso2,role:"option","aria-selected":b,"aria-label":`${y.name} ${e}${y.dialCode}`,id:`react-international-phone__${y.iso2}-option`,className:P({addPrefix:["country-selector-dropdown__list-item",R&&"country-selector-dropdown__list-item--preferred",b&&"country-selector-dropdown__list-item--selected",v&&"country-selector-dropdown__list-item--focused"],rawClassNames:[o.listItemClassName,R&&o.listItemPreferredClassName,b&&o.listItemSelectedClassName,v&&o.listItemFocusedClassName]}),onClick:()=>D(y),style:o.listItemStyle,title:y.name},H.createElement(q,{iso2:y.iso2,src:K?.src,className:P({addPrefix:["country-selector-dropdown__list-item-flag-emoji"],rawClassNames:[o.listItemFlagClassName]}),style:o.listItemFlagStyle}),H.createElement("span",{className:P({addPrefix:["country-selector-dropdown__list-item-country-name"],rawClassNames:[o.listItemCountryNameClassName]}),style:o.listItemCountryNameStyle},y.name),H.createElement("span",{className:P({addPrefix:["country-selector-dropdown__list-item-dial-code"],rawClassNames:[o.listItemDialCodeClassName]}),style:o.listItemDialCodeStyle},e,y.dialCode)),V?H.createElement("hr",{className:P({addPrefix:["country-selector-dropdown__preferred-list-divider"],rawClassNames:[o.preferredListDividerClassName]}),style:o.preferredListDividerStyle}):null)}))};var ae=({selectedCountry:t,onSelect:e,disabled:a,hideDropdown:s,countries:r=_,preferredCountries:n=[],flags:c,renderButtonWrapper:i,...o})=>{let[l,d]=H.useState(false),m=H.useMemo(()=>{if(t)return $$5({value:t,field:"iso2",countries:r})},[r,t]),f=H.useRef(null),g=p=>{p.key&&["ArrowUp","ArrowDown"].includes(p.key)&&(p.preventDefault(),d(true));},S=()=>{let p={title:m?.name,onClick:()=>d(k=>!k),onMouseDown:k=>k.preventDefault(),onKeyDown:g,disabled:s||a,role:"combobox","aria-label":"Country selector","aria-haspopup":"listbox","aria-expanded":l},C=H.createElement("div",{className:P({addPrefix:["country-selector-button__button-content"],rawClassNames:[o.buttonContentWrapperClassName]}),style:o.buttonContentWrapperStyle},H.createElement(q,{iso2:t,src:c?.find(k=>k.iso2===t)?.src,className:P({addPrefix:["country-selector-button__flag-emoji",a&&"country-selector-button__flag-emoji--disabled"],rawClassNames:[o.flagClassName]}),style:{visibility:t?"visible":"hidden",...o.flagStyle}}),!s&&H.createElement("div",{className:P({addPrefix:["country-selector-button__dropdown-arrow",a&&"country-selector-button__dropdown-arrow--disabled",l&&"country-selector-button__dropdown-arrow--active"],rawClassNames:[o.dropdownArrowClassName]}),style:o.dropdownArrowStyle}));return i?i({children:C,rootProps:p}):H.createElement("button",{...p,type:"button",className:P({addPrefix:["country-selector-button",l&&"country-selector-button--active",a&&"country-selector-button--disabled",s&&"country-selector-button--hide-dropdown"],rawClassNames:[o.buttonClassName]}),"data-country":t,style:o.buttonStyle},C)};return H.createElement("div",{className:P({addPrefix:["country-selector"],rawClassNames:[o.className]}),style:o.style,ref:f},S(),H.createElement(ne,{show:l,countries:r,preferredCountries:n,flags:c,onSelect:p=>{d(false),e?.(p);},selectedCountry:t,onClose:()=>{d(false);},...o.dropdownStyleProps}))};var ie=({dialCode:t,prefix:e,disabled:a,style:s,className:r})=>H.createElement("div",{className:P({addPrefix:["dial-code-preview",a&&"dial-code-preview--disabled"],rawClassNames:[r]}),style:s},`${e}${t}`);var Ue=H.forwardRef(({value:t,onChange:e,countries:a=_,preferredCountries:s=[],hideDropdown:r,showDisabledDialCodeAndPrefix:n,disableFocusAfterCountrySelect:c,flags:i,style:o,className:l,inputStyle:d,inputClassName:m,countrySelectorStyleProps:f,dialCodePreviewStyleProps:g,inputProps:S,placeholder:p,disabled:C,name:k,onFocus:D,onBlur:I,required:A,autoFocus:N,...u},h)=>{let{phone:y,inputValue:b,inputRef:v,country:R,setCountry:V,handlePhoneValueChange:K}=ee({value:t,countries:a,...u,onChange:j=>{e?.(j.phone,{country:j.country,inputValue:j.inputValue});}}),G=u.disableDialCodeAndPrefix&&n&&R?.dialCode;return H.useImperativeHandle(h,()=>v.current?Object.assign(v.current,{setCountry:V,state:{phone:y,inputValue:b,country:R}}):null,[v,V,y,b,R]),H.createElement("div",{ref:h,className:P({addPrefix:["input-container"],rawClassNames:[l]}),style:o},H.createElement(ae,{onSelect:j=>V(j.iso2,{focusOnInput:!c}),flags:i,selectedCountry:R.iso2,countries:a,preferredCountries:s,disabled:C,hideDropdown:r,...f}),G&&H.createElement(ie,{dialCode:R.dialCode,prefix:u.prefix??"+",disabled:C,...g}),H.createElement("input",{onChange:K,value:b,type:"tel",ref:v,className:P({addPrefix:["input",C&&"input--disabled"],rawClassNames:[m]}),placeholder:p,disabled:C,style:d,name:k,onFocus:D,onBlur:I,autoFocus:N,required:A,...S}))});

  var {
    Title: Title$3,
    Text: Text$3
  } = antd.Typography;
  var BRAND_RED$2 = '#ff4d4f';
  var COUNTRY_OPTIONS = [{
    label: 'Uganda',
    value: 'UG'
  }, {
    label: 'Kenya',
    value: 'KE'
  }, {
    label: 'Tanzania',
    value: 'TZ'
  }, {
    label: 'Rwanda',
    value: 'RW'
  }, {
    label: 'Nigeria',
    value: 'NG'
  }, {
    label: 'Ghana',
    value: 'GH'
  }, {
    label: 'South Africa',
    value: 'ZA'
  }];
  var PROVIDERS_BY_COUNTRY = {
    UG: [{
      label: 'MTN Uganda',
      value: 'mtn_ug'
    }, {
      label: 'Airtel Uganda',
      value: 'airtel_ug'
    }],
    KE: [{
      label: 'M-Pesa (Safaricom)',
      value: 'mpesa_ke'
    }, {
      label: 'Airtel Money Kenya',
      value: 'airtel_ke'
    }],
    TZ: [{
      label: 'M-Pesa Tanzania',
      value: 'mpesa_tz'
    }, {
      label: 'Tigo Pesa',
      value: 'tigo_tz'
    }, {
      label: 'Airtel Money Tanzania',
      value: 'airtel_tz'
    }],
    RW: [{
      label: 'MTN Rwanda',
      value: 'mtn_rw'
    }, {
      label: 'Airtel Rwanda',
      value: 'airtel_rw'
    }],
    NG: [{
      label: 'MTN Nigeria MoMo',
      value: 'mtn_ng'
    }, {
      label: 'Airtel SmartCash',
      value: 'airtel_ng'
    }, {
      label: 'Opay',
      value: 'opay_ng'
    }, {
      label: 'PalmPay',
      value: 'palmpay_ng'
    }],
    GH: [{
      label: 'MTN Mobile Money Ghana',
      value: 'mtn_gh'
    }, {
      label: 'AirtelTigo Money',
      value: 'airteltigo_gh'
    }, {
      label: 'Vodafone Cash',
      value: 'vodafone_gh'
    }],
    ZA: [{
      label: 'MTN SA MoMo',
      value: 'mtn_za'
    }, {
      label: 'Vodacom M-Pesa (legacy/limited)',
      value: 'mpesa_za'
    }]
  };
  function MobileMoneyFallbackModal(_ref) {
    var {
      open = false,
      onCancel,
      onSubmit,
      // (payload) => void ; payload = { msisdn, e164, country, provider }
      zIndex = 2100,
      width = 520,
      defaultCountry = 'ug' // two-letter ISO, lower-case per library docs
    } = _ref;
    var [phone, setPhone] = H.useState(''); // E.164 string (e.g. "+256700000000")
    var [countryIso, setCountryIso] = H.useState(String(defaultCountry || 'ug').toUpperCase()); // 'UG', 'KE', ...
    var [provider, setProvider] = H.useState(null);
    var supportedSet = H.useMemo(() => new Set(Object.keys(PROVIDERS_BY_COUNTRY)), []);
    var countrySelectOptions = H.useMemo(() => COUNTRY_OPTIONS.filter(c => supportedSet.has(c.value)), [supportedSet]);
    var providerOptions = H.useMemo(() => PROVIDERS_BY_COUNTRY[countryIso] || [], [countryIso]);
    var isValidE164 = H.useMemo(() => {
      if (!phone || typeof phone !== 'string') return false;
      if (!phone.startsWith('+')) return false;
      var digits = (phone.match(/\d/g) || []).length;
      return digits >= 8;
    }, [phone]);
    var canSubmit = isValidE164 && !!provider;
    var handleCountryChange = iso => {
      setCountryIso(iso);
      setProvider(null);
    };
    var handleSubmit = () => {
      if (!canSubmit) return;
      onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit({
        msisdn: phone,
        e164: phone,
        country: countryIso,
        // 'UG', 'KE', ...
        provider // 'mtn_ug', etc.
      });
    };
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      onCancel: onCancel,
      zIndex: zIndex,
      maskClosable: false,
      title: null,
      bodyStyle: {
        padding: 20
      },
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: BRAND_RED$2,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
        size: "sm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
        direction: "vertical",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$3, {
          level: 4,
          style: {
            margin: 0
          },
          children: "Pay with Mobile Money"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$3, {
          type: "secondary",
          children: "Choose country & provider, then enter the mobile number."
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$3, {
            children: "Country"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Select, {
            style: {
              width: '100%',
              marginTop: 6
            },
            placeholder: "Select a country",
            options: countrySelectOptions,
            value: countryIso,
            onChange: handleCountryChange,
            showSearch: true,
            optionFilterProp: "label"
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$3, {
            children: "Provider"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Select, {
            style: {
              width: '100%',
              marginTop: 6
            },
            placeholder: providerOptions.length ? 'Select a provider' : 'No providers for this country',
            options: providerOptions,
            value: provider,
            onChange: setProvider,
            disabled: !providerOptions.length,
            showSearch: true,
            optionFilterProp: "label"
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$3, {
            children: "Mobile Number"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              marginTop: 6
            },
            children: /*#__PURE__*/jsxRuntimeExports.jsx(Ue, {
              country: countryIso.toLowerCase() // controlled country (lowercase)
              ,
              value: phone,
              onChange: setPhone,
              onCountryChange: iso => setCountryIso(String(iso || '').toUpperCase())
            })
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            gap: 12,
            justifyContent: 'flex-end',
            marginTop: 16
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
            onClick: onCancel,
            shape: "round",
            children: "Cancel"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
            type: "primary",
            shape: "round",
            onClick: handleSubmit,
            disabled: !canSubmit,
            children: "Continue"
          })]
        })]
      })]
    });
  }

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$4 = functionUncurryThis;
  var requireObjectCoercible$1 = requireObjectCoercible$b;
  var toString$3 = toString$b;
  var whitespaces$1 = whitespaces$2;

  var replace$1 = uncurryThis$4(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$3(requireObjectCoercible$1($this));
      if (TYPE & 1) string = replace$1(string, ltrim, '');
      if (TYPE & 2) string = replace$1(string, rtrim, '$1');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$5 = fails$p;
  var whitespaces = whitespaces$2;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$5(function () {
      return !!whitespaces[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $$4 = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$4({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var {
    Title: Title$2,
    Text: Text$2
  } = antd.Typography;
  var BRAND_RED$1 = '#ff4d4f';
  function CardPaymentModal(_ref) {
    var {
      open = false,
      onCancel,
      onSubmit,
      zIndex = 2100,
      width = 520,
      defaultCountry = 'ug'
    } = _ref;
    var [cardHolder, setCardHolder] = H.useState('');
    var [cardNumber, setCardNumber] = H.useState('');
    var [expiry, setExpiry] = H.useState('');
    var [cvv, setCvv] = H.useState('');
    var [address, setAddress] = H.useState('');
    var [phone, setPhone] = H.useState('');
    var sanitizedCard = H.useMemo(() => cardNumber.replace(/[^\d]/g, ''), [cardNumber]);
    var canSubmit = H.useMemo(() => {
      var hasName = cardHolder.trim().length >= 2;
      var hasNum = sanitizedCard.length >= 12;
      var hasExpiry = /^\d{2}\/\d{2,4}$/.test(expiry.trim());
      var hasCvv = /^\d{3,4}$/.test(cvv.trim());
      return hasName && hasNum && hasExpiry && hasCvv;
    }, [cardHolder, sanitizedCard, expiry, cvv]);
    var handleSubmit = () => {
      if (!canSubmit) return;
      var payload = {
        cardHolder: cardHolder.trim(),
        cardNumber: sanitizedCard,
        expiry: expiry.trim(),
        cvv: cvv.trim(),
        address: address.trim() || null,
        phone: phone || null,
        brand: guessBrand(sanitizedCard)
      };
      onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(payload);
    };
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      onCancel: onCancel,
      zIndex: zIndex,
      maskClosable: false,
      title: null,
      bodyStyle: {
        padding: 20
      },
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: BRAND_RED$1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
        size: "sm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
        direction: "vertical",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$2, {
          level: 4,
          style: {
            margin: 0
          },
          children: "Pay with Card"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$2, {
          type: "secondary",
          children: "Enter your card details to continue."
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$2, {
            children: "Card Holder\u2019s Name"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input, {
            size: "large",
            placeholder: "e.g. Jane Doe",
            value: cardHolder,
            onChange: e => setCardHolder(e.target.value)
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$2, {
            children: "Card Number"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input, {
            size: "large",
            placeholder: "1234 5678 9012 3456",
            value: cardNumber,
            onChange: e => setCardNumber(formatCard(e.target.value)),
            inputMode: "numeric"
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$2, {
              children: "Expiry"
            }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input, {
              size: "large",
              placeholder: "MM/YY",
              value: expiry,
              onChange: e => setExpiry(formatExpiry(e.target.value)),
              inputMode: "numeric"
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$2, {
              children: "CVV"
            }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input.Password, {
              size: "large",
              placeholder: "123",
              value: cvv,
              onChange: e => setCvv(e.target.value.replace(/[^\d]/g, '').slice(0, 4)),
              inputMode: "numeric"
            })]
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$2, {
            children: "Address (optional)"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input, {
            size: "large",
            placeholder: "Enter address",
            value: address,
            onChange: e => setAddress(e.target.value)
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$2, {
            children: "Phone number (optional)"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(Ue, {
            defaultCountry: String(defaultCountry || 'ug').toLowerCase(),
            value: phone,
            onChange: setPhone
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            gap: 12,
            justifyContent: 'flex-end',
            marginTop: 16
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
            onClick: onCancel,
            shape: "round",
            children: "Cancel"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
            type: "primary",
            shape: "round",
            onClick: handleSubmit,
            disabled: !canSubmit,
            children: "Pay"
          })]
        })]
      })]
    });
  }
  function formatCard(v) {
    return v.replace(/[^\d]/g, '').slice(0, 19).replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  }
  function formatExpiry(v) {
    var digits = v.replace(/[^\d]/g, '').slice(0, 4);
    if (digits.length <= 2) return digits;
    return digits.slice(0, 2) + '/' + digits.slice(2);
  }
  function guessBrand(num) {
    var n = num || '';
    if (/^4/.test(n)) return 'visa';
    if (/^5[1-5]/.test(n)) return 'mastercard';
    if (/^3[47]/.test(n)) return 'amex';
    if (/^6/.test(n)) return 'discover';
    return null;
  }

  var {
    Title: Title$1,
    Text: Text$1
  } = antd.Typography;
  var BRAND_RED = '#ff4d4f';

  /**
   * Dummy country → banks map (demo only).
   * Replace/extend with your gateway’s list later.
   */
  var COUNTRIES = [{
    code: 'UG',
    name: 'Uganda'
  }, {
    code: 'KE',
    name: 'Kenya'
  }, {
    code: 'NG',
    name: 'Nigeria'
  }, {
    code: 'RW',
    name: 'Rwanda'
  }];
  var BANKS_BY_COUNTRY = {
    UG: [{
      code: 'STANBIC_UG',
      name: 'Stanbic Bank Uganda'
    }, {
      code: 'ABSA_UG',
      name: 'Absa Bank Uganda'
    }, {
      code: 'CENTENARY_UG',
      name: 'Centenary Bank'
    }, {
      code: 'DTB_UG',
      name: 'Diamond Trust Bank Uganda'
    }],
    KE: [{
      code: 'KCB_KE',
      name: 'KCB Bank Kenya'
    }, {
      code: 'EQUITY_KE',
      name: 'Equity Bank'
    }, {
      code: 'COOP_KE',
      name: 'Co-operative Bank of Kenya'
    }, {
      code: 'ABSA_KE',
      name: 'Absa Bank Kenya'
    }],
    NG: [{
      code: 'GTB_NG',
      name: 'Guaranty Trust Bank (GTB)'
    }, {
      code: 'ACCESS_NG',
      name: 'Access Bank'
    }, {
      code: 'FBN_NG',
      name: 'First Bank of Nigeria'
    }, {
      code: 'UBA_NG',
      name: 'United Bank for Africa (UBA)'
    }],
    RW: [{
      code: 'BK_RW',
      name: 'Bank of Kigali'
    }, {
      code: 'IM_RW',
      name: 'I&M Bank Rwanda'
    }, {
      code: 'EQUITY_RW',
      name: 'Equity Bank Rwanda'
    }, {
      code: 'KCB_RW',
      name: 'KCB Bank Rwanda'
    }]
  };
  function BankPaymentModal(_ref) {
    var {
      open = false,
      onCancel,
      onSubmit,
      // (payload) => void
      zIndex = 2100,
      width = 520,
      defaultCountry = 'UG'
    } = _ref;
    var [country, setCountry] = H.useState(defaultCountry);
    var [bank, setBank] = H.useState(null);
    var [accountNumber, setAccountNumber] = H.useState('');
    var [accountName, setAccountName] = H.useState('');
    var [branch, setBranch] = H.useState('');
    var [reference, setReference] = H.useState('');
    var banks = H.useMemo(() => BANKS_BY_COUNTRY[country] || [], [country]);

    // very light client-side checks
    var canSubmit = H.useMemo(() => {
      var hasCountry = !!country;
      var hasBank = !!bank;
      var num = accountNumber.replace(/\s+/g, '');
      var hasAcctNum = num.length >= 6; // relax as needed
      var hasName = accountName.trim().length >= 2;
      return hasCountry && hasBank && hasAcctNum && hasName;
    }, [country, bank, accountNumber, accountName]);
    var handleSubmit = () => {
      if (!canSubmit) return;
      var payload = {
        country,
        bank,
        accountNumber: accountNumber.replace(/\s+/g, ''),
        accountName: accountName.trim(),
        branch: branch.trim() || null,
        reference: reference.trim() || null
      };
      onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(payload);
    };
    return /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      onCancel: onCancel,
      zIndex: zIndex,
      maskClosable: false,
      title: null,
      bodyStyle: {
        padding: 20
      },
      closeIcon: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: BRAND_RED,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(icons.CloseOutlined, {})
      }),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
        size: "sm"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
        direction: "vertical",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$1, {
          level: 4,
          style: {
            margin: 0
          },
          children: "Pay via Bank"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$1, {
          type: "secondary",
          children: "Select your country and bank, then enter your account details."
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$1, {
            children: "Country"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Select, {
            style: {
              width: '100%',
              marginTop: 6
            },
            value: country,
            onChange: val => {
              setCountry(val);
              setBank(null); // reset bank when country changes
            },
            options: COUNTRIES.map(c => ({
              label: c.name,
              value: c.code
            })),
            showSearch: true,
            optionFilterProp: "label"
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$1, {
            children: "Bank"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Select, {
            style: {
              width: '100%',
              marginTop: 6
            },
            placeholder: "Select a bank",
            value: bank,
            onChange: setBank,
            options: banks.map(b => ({
              label: b.name,
              value: b.code
            })),
            showSearch: true,
            optionFilterProp: "label"
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$1, {
            children: "Account Number"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input, {
            size: "large",
            placeholder: "Enter account number",
            value: accountNumber,
            onChange: e => setAccountNumber(e.target.value.replace(/[^\d\s]/g, '').slice(0, 24)),
            inputMode: "numeric"
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$1, {
            children: "Account Name"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input, {
            size: "large",
            placeholder: "e.g. Jane A. Doe",
            value: accountName,
            onChange: e => setAccountName(e.target.value)
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$1, {
            children: "Branch (optional)"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input, {
            size: "large",
            placeholder: "Enter branch",
            value: branch,
            onChange: e => setBranch(e.target.value)
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$1, {
            children: "Payment Reference (optional)"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Input, {
            size: "large",
            placeholder: "e.g. Order #12345",
            value: reference,
            onChange: e => setReference(e.target.value)
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            gap: 12,
            justifyContent: 'flex-end',
            marginTop: 16
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
            onClick: onCancel,
            shape: "round",
            children: "Cancel"
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
            type: "primary",
            shape: "round",
            onClick: handleSubmit,
            disabled: !canSubmit,
            children: "Continue"
          })]
        })]
      })]
    });
  }

  var tryToString = tryToString$5;

  var $TypeError = TypeError;

  var deletePropertyOrThrow$1 = function (O, P) {
    if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var arraySlice = arraySlice$2;

  var floor = Math.floor;

  var sort = function (array, comparefn) {
    var length = array.length;

    if (length < 8) {
      // insertion sort
      var i = 1;
      var element, j;

      while (i < length) {
        j = i;
        element = array[i];
        while (j && comparefn(array[j - 1], element) > 0) {
          array[j] = array[--j];
        }
        if (j !== i++) array[j] = element;
      }
    } else {
      // merge sort
      var middle = floor(length / 2);
      var left = sort(arraySlice(array, 0, middle), comparefn);
      var right = sort(arraySlice(array, middle), comparefn);
      var llength = left.length;
      var rlength = right.length;
      var lindex = 0;
      var rindex = 0;

      while (lindex < llength || rindex < rlength) {
        array[lindex + rindex] = (lindex < llength && rindex < rlength)
          ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
          : lindex < llength ? left[lindex++] : right[rindex++];
      }
    }

    return array;
  };

  var arraySort = sort;

  var fails$4 = fails$p;

  var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$4(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var userAgent$1 = environmentUserAgent;

  var firefox = userAgent$1.match(/firefox\/(\d+)/i);

  var environmentFfVersion = !!firefox && +firefox[1];

  var UA = environmentUserAgent;

  var environmentIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent = environmentUserAgent;

  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  var environmentWebkitVersion = !!webkit && +webkit[1];

  var $$3 = _export;
  var uncurryThis$3 = functionUncurryThis;
  var aCallable = aCallable$9;
  var toObject$1 = toObject$5;
  var lengthOfArrayLike = lengthOfArrayLike$3;
  var deletePropertyOrThrow = deletePropertyOrThrow$1;
  var toString$2 = toString$b;
  var fails$3 = fails$p;
  var internalSort = arraySort;
  var arrayMethodIsStrict = arrayMethodIsStrict$1;
  var FF = environmentFfVersion;
  var IE_OR_EDGE = environmentIsIeOrEdge;
  var V8 = environmentV8Version;
  var WEBKIT = environmentWebkitVersion;

  var test = [];
  var nativeSort = uncurryThis$3(test.sort);
  var push = uncurryThis$3(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$3(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$3(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');

  var STABLE_SORT = !fails$3(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;

    var result = '';
    var code, chr, value, index;

    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66: case 69: case 70: case 72: value = 3; break;
        case 68: case 71: value = 4; break;
        default: value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({ k: chr + index, v: value });
      }
    }

    test.sort(function (a, b) { return b.v - a.v; });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });

  var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$2(x) > toString$2(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$3({ target: 'Array', proto: true, forced: FORCED }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable(comparefn);

      var array = toObject$1(this);

      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));

      itemsLength = lengthOfArrayLike(items);
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow(array, index++);

      return array;
    }
  });

  var isCallable = isCallable$m;
  var isObject = isObject$c;
  var setPrototypeOf = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var defineProperty$1 = objectDefineProperty.f;

  var proxyAccessor$1 = function (Target, Source, key) {
    key in Target || defineProperty$1(Target, key, {
      configurable: true,
      get: function () { return Source[key]; },
      set: function (it) { Source[key] = it; }
    });
  };

  var DESCRIPTORS$1 = descriptors;
  var globalThis$1 = globalThis_1;
  var uncurryThis$2 = functionUncurryThis;
  var isForced = isForced_1;
  var inheritIfRequired = inheritIfRequired$1;
  var createNonEnumerableProperty = createNonEnumerableProperty$6;
  var create = objectCreate;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var isPrototypeOf = objectIsPrototypeOf;
  var isRegExp = isRegexp;
  var toString$1 = toString$b;
  var getRegExpFlags = regexpGetFlags;
  var stickyHelpers = regexpStickyHelpers;
  var proxyAccessor = proxyAccessor$1;
  var defineBuiltIn = defineBuiltIn$8;
  var fails$2 = fails$p;
  var hasOwn = hasOwnProperty_1;
  var enforceInternalState = internalState.enforce;
  var setSpecies = setSpecies$2;
  var wellKnownSymbol = wellKnownSymbol$j;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var MATCH = wellKnownSymbol('match');
  var NativeRegExp = globalThis$1.RegExp;
  var RegExpPrototype = NativeRegExp.prototype;
  var SyntaxError = globalThis$1.SyntaxError;
  var exec = uncurryThis$2(RegExpPrototype.exec);
  var charAt = uncurryThis$2(''.charAt);
  var replace = uncurryThis$2(''.replace);
  var stringIndexOf$1 = uncurryThis$2(''.indexOf);
  var stringSlice = uncurryThis$2(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

  var BASE_FORCED = DESCRIPTORS$1 &&
    (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$2(function () {
      re2[MATCH] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      // eslint-disable-next-line sonarjs/inconsistent-function-call -- required for testing
      return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
    }));

  var handleDotAll = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = charAt(string, index);
      if (chr === '\\') {
        result += chr + charAt(string, ++index);
        continue;
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        } result += chr;
      }
    } return result;
  };

  var handleNCG = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = create(null);
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = charAt(string, index);
      if (chr === '\\') {
        chr += charAt(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          result += chr;
          // ignore non-capturing groups
          if (stringSlice(string, index + 1, index + 3) === '?:') {
            continue;
          }
          if (exec(IS_NCG, stringSlice(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwn(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }
          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }
      if (ncg) groupname += chr;
      else result += chr;
    } return [result, named];
  };

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
      var patternIsRegExp = isRegExp(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString$1(pattern);
      flags = flags === undefined ? '' : toString$1(flags);
      rawPattern = pattern;

      if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
        if (dotAll) flags = replace(flags, /s/g, '');
      }

      rawFlags = flags;

      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
      }

      if (UNSUPPORTED_NCG) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

      if (dotAll || sticky || groups.length) {
        state = enforceInternalState(result);
        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }
        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }

      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) { /* empty */ }

      return result;
    };

    for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
    }

    RegExpPrototype.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype;
    defineBuiltIn(globalThis$1, 'RegExp', RegExpWrapper, { constructor: true });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  // src/utils/cookie.js

  // ──────────────────────────────────────────────────────────────────────────────
  // Public API (stable) that other SDK files call:
  //   - getUserNoFromCookie()
  //   - getUserNosFromCookie()
  //   - setUserNoCookie(), clearUserNoCookie()
  //   - setPrimaryUserNoCookie(), addUserNoToList(), removeUserNoFromList()
  //   - setUserNosCookie(), clearUserNosCookie()
  //   - detectUserNoFromCookies()  ← alias for getUserNoFromCookie()
  //   - getUserNo()                ← alias for getUserNoFromCookie()
  //   - getDummyUsersFromCookies() ← NEW: return [{userNo,walletId,owner,email,photo}, ...]
  //   - getUsersForPicker()        ← NEW: same as above; stable name for UI layer
  // Teammates can later swap getDummyUsersFromCookies() with a real implementation.
  // ──────────────────────────────────────────────────────────────────────────────

  var DEFAULT_NAME = 'evz_user_no'; // primary/active user (used when user picks)
  var LIST_NAME = 'evz_user_nos'; // JSON list of userNos (fallback to CSV)
  var ENUM_PREFIX = 'evz_user'; // enumerated cookies => evz_user1, evz_user2, ...

  /* ------------------------------------------------------------------ */
  /*             Primary user cookie (active selection)                  */
  /* ------------------------------------------------------------------ */

  /**
   * Read the active user number cookie (default: "evz_user_no").
   * If not set, falls back to the FIRST enumerated cookie value (evz_user1, evz_user2, ...).
   */
  function getUserNoFromCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_NAME;
    if (typeof document === 'undefined') return null;
    // 1) Try primary cookie
    var primary = readCookie(name);
    if (primary) return primary;

    // 2) Fallback: first enumerated user cookie by index (1,2,3…)
    var enumerated = listEnumeratedUserNos();
    return enumerated.length ? enumerated[0] : null;
  }

  /**
   * Set the active user number cookie.
   * Defaults: 7-day expiry, SameSite=Strict, Secure on HTTPS, Path=/.
   * Also keeps the multi-account list in sync.
   */
  function setUserNoCookie(userNo) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof document === 'undefined' || !userNo) return;
    var {
      name = DEFAULT_NAME,
      days = 7,
      path = '/',
      sameSite = 'Strict',
      // 'Strict' | 'Lax' | 'None' (if 'None', must be HTTPS)
      secure = isHttps()
    } = opts;
    writeCookie(name, userNo, {
      days,
      path,
      sameSite,
      secure
    });

    // Keep the multi-account list in sync (idempotent)
    try {
      addUserNoToList(userNo, {
        days,
        path,
        sameSite,
        secure
      });
    } catch (_unused) {}
  }

  /* ------------------------------------------------------------------ */
  /*                      Multi-account helper API                      */
  /* ------------------------------------------------------------------ */

  /**
   * Return all known user numbers on this device.
   * Merges and de-dupes (primary first if present):
   *  - JSON/CSV list cookie (evz_user_nos)
   *  - enumerated cookies: evz_user1, evz_user2, ...
   *  - primary cookie (evz_user_no)
   */
  function getUserNosFromCookie() {
    var listName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LIST_NAME;
    if (typeof document === 'undefined') return [];

    // Primary (may be null)
    var primary = readCookie(DEFAULT_NAME);

    // List cookie (JSON preferred, fallback CSV)
    var row = readCookie(listName);
    var fromList = [];
    if (row) {
      try {
        var parsed = JSON.parse(row);
        fromList = Array.isArray(parsed) ? parsed.filter(Boolean) : [];
      } catch (_unused2) {
        fromList = row.split(',').map(s => s.trim()).filter(Boolean);
      }
    }

    // Enumerated cookies evz_user1, evz_user2, ... (ordered by index)
    var fromEnumerated = listEnumeratedUserNos();

    // Merge + de-dup
    var set = new Set([...fromList, ...fromEnumerated, ...(primary ? [primary] : [])]);
    var all = Array.from(set);

    // Put primary first if present
    if (primary) {
      var idx = all.indexOf(primary);
      if (idx > 0) {
        all.splice(idx, 1);
        all.unshift(primary);
      }
    }
    return all;
  }

  /**
   * Overwrite the entire userNos list cookie (JSON).
   */
  function setUserNosCookie(userNos) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof document === 'undefined') return;
    var unique = Array.from(new Set(Array.isArray(userNos) ? userNos.filter(Boolean) : []));
    var {
      listName = LIST_NAME,
      days = 365,
      path = '/',
      sameSite = 'Lax',
      secure = isHttps()
    } = opts;
    writeCookie(listName, JSON.stringify(unique), {
      days,
      path,
      sameSite,
      secure
    });
  }

  /**
   * Add a userNo to the list cookie (idempotent).
   */
  function addUserNoToList(userNo) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!userNo) return;
    var list = new Set(getUserNosFromCookie(opts.listName || LIST_NAME));
    list.add(userNo);
    setUserNosCookie(Array.from(list), opts);
  }

  /* ------------------------------------------------------------------ */
  /*                  DUMMY USERS FOR PICKER (NO SERVER)                */
  /* ------------------------------------------------------------------ */
  /**
   * Return demo user profiles derived from cookie userNos.
   * Shape: { userNo, walletId, owner?, email?, photo? }
   *
   * Teammates can replace this logic with a real lookup while keeping
   * the same function signature and exports.
   */
  function getDummyUsersFromCookies() {
    var userNos = getUserNosFromCookie();

    // Known demo profiles (stable for your QA/storybook)
    var known = {
      'U-000123': {
        walletId: 'W-256-48392018',
        owner: 'John Doe',
        email: 'john@x.com',
        photo: 'https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe'
      },
      'U-000789': {
        walletId: 'W-256-74731323',
        owner: 'Jane Smith',
        email: 'jane@x.com',
        photo: 'https://api.dicebear.com/7.x/initials/svg?seed=Jane%20Smith'
      }
    };

    // Build output; unknown userNos get a safe default avatar
    var out = [];
    for (var no of userNos) {
      if (!no) continue;
      var prof = known[no] || makeFallbackProfile(no);
      out.push(_objectSpread2({
        userNo: no
      }, prof));
    }
    return dedupeByUserNo(out);
  }

  /**
   * Stable name used by UI layer to fetch accounts for the picker.
   * Today it returns the dummy set above; later your teammates can
   * redirect this to a real loader while preserving the signature.
   */
  function getUsersForPicker() {
    return getDummyUsersFromCookies();
  }

  /* ------------------------------------------------------------------ */
  /*                               Internals                             */
  /* ------------------------------------------------------------------ */

  function isHttps() {
    return typeof location !== 'undefined' && location.protocol === 'https:';
  }
  function readCookie(name) {
    if (typeof document === 'undefined') return null;
    var escaped = escapeRe(name);
    var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + escaped + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function writeCookie(name, value) {
    var {
      days = 365,
      path = '/',
      sameSite = 'Lax',
      secure = isHttps()
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof document === 'undefined') return;
    var expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    var parts = ["".concat(encodeURIComponent(name), "=").concat(encodeURIComponent(value)), "Expires=".concat(expires.toUTCString()), "Path=".concat(path), "SameSite=".concat(sameSite)];
    if (secure) parts.push('Secure');
    document.cookie = parts.join('; ');
  }
  function escapeRe(s) {
    return String(s).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

  /**
   * Return values from enumerated cookies in ascending order:
   *   evz_user1, evz_user2, evz_user3, ...
   */
  function listEnumeratedUserNos() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ENUM_PREFIX;
    if (typeof document === 'undefined' || !document.cookie) return [];
    var items = document.cookie.split('; ');
    var found = [];
    var re = new RegExp("^".concat(escapeRe(prefix), "(\\d+)$")); // capture the index

    for (var raw of items) {
      var eq = raw.indexOf('=');
      if (eq === -1) continue;
      var name = decodeURIComponent(raw.slice(0, eq).trim());
      var value = decodeURIComponent(raw.slice(eq + 1));
      var m = name.match(re);
      if (m && value) {
        var idx = Number(m[1] || 0);
        found.push({
          idx,
          value
        });
      }
    }

    // Sort by numeric suffix (1,2,3…)
    found.sort((a, b) => a.idx - b.idx);
    return found.map(x => x.value);
  }
  function dedupeByUserNo(list) {
    var seen = new Set();
    var out = [];
    for (var u of list) {
      if (!u || !u.userNo) continue;
      if (seen.has(u.userNo)) continue;
      seen.add(u.userNo);
      out.push(u);
    }
    return out;
  }
  function makeFallbackProfile(userNo) {
    // Derive a readable label from userNo suffix
    var suffix = String(userNo).slice(-3);
    var owner = "User ".concat(suffix);
    var photo = "https://api.dicebear.com/7.x/initials/svg?seed=".concat(encodeURIComponent(owner));
    return {
      walletId: "W-256-".concat(Math.floor(10000000 + Math.random() * 89999999)),
      owner,
      email: null,
      photo
    };
  }

  // src/hooks/flow/transitions.js

  var wait = ms => new Promise(r => setTimeout(r, ms));

  /**
   * Creates view/processing helpers that keep the ProcessingModal consistent.
   * - withMinProcessing(kind, task)
   * - transitionTo(nextView, reason='ui')
   */
  function createTransitions(minProcessingMs, setProcessing, setView) {
    function withMinProcessing(_x, _x2) {
      return _withMinProcessing.apply(this, arguments);
    }
    function _withMinProcessing() {
      _withMinProcessing = _asyncToGenerator(function* (kind, task) {
        setProcessing(kind); // 'quote' | 'charge' | 'ui'
        var start = Date.now();
        try {
          return yield task();
        } finally {
          var elapsed = Date.now() - start;
          var remain = Math.max(0, Number(minProcessingMs) - elapsed);
          if (remain > 0) yield wait(remain);
          setProcessing(null);
        }
      });
      return _withMinProcessing.apply(this, arguments);
    }
    function transitionTo(_x3) {
      return _transitionTo.apply(this, arguments);
    }
    function _transitionTo() {
      _transitionTo = _asyncToGenerator(function* (nextView) {
        var reason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ui';
        setProcessing(reason);
        try {
          yield wait(Number(minProcessingMs) || 0);
        } finally {
          setProcessing(null);
        }
        setView(nextView);
      });
      return _transitionTo.apply(this, arguments);
    }
    return {
      withMinProcessing,
      transitionTo
    };
  }

  var $$2 = _export;
  var $includes = arrayIncludes.includes;
  var fails$1 = fails$p;
  var addToUnscopables = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$1(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$2({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var $$1 = _export;
  var uncurryThis$1 = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$b;
  var toString = toString$b;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf = uncurryThis$1(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$1({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf(
        toString(requireObjectCoercible(this)),
        toString(notARegExp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  // src/hooks/flow/constants.js

  // Dummy platform knobs (match your server-ish math)
  var CHARGES = {
    taxPct: 0.025,
    walletFeePct: 0.015
  };

  // Local demo user state (balance, currency, passcode)
  var DUMMY_USER_STATE = {
    'U-000789': {
      balance: 200,
      currency: 'UGX',
      passcode: '123456'
    },
    // Jane
    'U-000123': {
      balance: 300,
      currency: 'USD',
      passcode: '123456'
    } // John
  };

  // Fallback defaults for unknown users
  var DEFAULT_USER_STATE = {
    balance: 100000,
    currency: 'UGX',
    passcode: '123456'
  };

  // Quick helpers
  var rnd = n => Math.round(Number(n) || 0);
  function buildBreakdown(subtotal) {
    var tax = rnd(subtotal * CHARGES.taxPct);
    var walletFee = rnd(subtotal * CHARGES.walletFeePct);
    var total = subtotal; // fees are informational in this demo
    return {
      subtotal,
      taxPct: CHARGES.taxPct,
      tax,
      walletFeePct: CHARGES.walletFeePct,
      walletFee,
      total
    };
  }
  function nowIso() {
    return new Date().toISOString();
  }

  function dedupe(arr) {
    return Array.from(new Set(arr || []));
  }
  function buildPlaceholderAccounts(userNos) {
    return userNos.map(u => ({
      userNo: u,
      walletId: null,
      owner: "User ".concat(String(u).slice(-3)),
      email: "".concat(String(u).toLowerCase().replace(/[^a-z0-9]+/g, ''), "@example.com"),
      photo: "https://i.pravatar.cc/80?u=".concat(encodeURIComponent(u))
    }));
  }
  function makeLocalSession(_ref) {
    var {
      entNo,
      chosenUserNo,
      merchantName,
      currency,
      getUsersForPicker
    } = _ref;
    var userState = DUMMY_USER_STATE[chosenUserNo] || DEFAULT_USER_STATE;
    var pool = getUsersForPicker();
    var prof = Array.isArray(pool) ? pool.find(u => u.userNo === chosenUserNo) || {} : {};
    return {
      sessionId: 'sess_' + Math.random().toString(36).slice(2),
      enterprise: {
        walletNo: entNo,
        name: merchantName || 'Demo Enterprise',
        currency: 'UGX'
      },
      user: {
        walletId: prof.walletId || 'W-256-' + Math.floor(1000000 + Math.random() * 8999999),
        name: prof.owner || 'User ' + String(chosenUserNo).slice(-3),
        email: prof.email || null,
        balance: userState.balance,
        currency: userState.currency,
        userNo: chosenUserNo
      },
      billingCurrency: currency || userState.currency || 'UGX',
      rates: {
        CHARGES
      },
      expiresAt: new Date(Date.now() + 15 * 60000).toISOString(),
      createdAt: nowIso()
    };
  }

  /**
   * Build the boot function (kept pure here; setters + utils are injected).
   */
  function createBoot(_ref2) {
    var {
      key,
      ent,
      amountValid,
      userWalletId,
      pickedUserNoThisFlow,
      getUserNoFromCookie,
      getUserNosFromCookie,
      setUserNoCookie,
      getUsersForPicker,
      setErrorMsg,
      setQuote,
      setAccounts,
      setSession,
      transitionTo,
      currency,
      merchantName
    } = _ref2;
    return /*#__PURE__*/function () {
      var _boot = _asyncToGenerator(function* () {
        var {
          forceUserNo
        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        setErrorMsg('');
        setQuote(null);
        setAccounts([]);
        if (!key) {
          setErrorMsg('Missing publicKey/publishableKey');
          yield transitionTo('invalid');
          return;
        }
        if (!ent) {
          yield transitionTo('signin');
          return;
        }
        if (!amountValid) {
          setErrorMsg('Invalid amount');
          yield transitionTo('invalid');
          return;
        }
        var cookieUserNo = !userWalletId ? getUserNoFromCookie() || null : null;
        if (!userWalletId) {
          // Merge all known sources (primary/list/enumerated)
          var userNos = dedupe([...getUserNosFromCookie()]).filter(Boolean);
          if (forceUserNo) {
            if (!cookieUserNo || cookieUserNo !== forceUserNo) {
              try {
                setUserNoCookie(forceUserNo);
              } catch (_unused) {}
            }
            cookieUserNo = forceUserNo;
            if (!userNos.includes(forceUserNo)) userNos.push(forceUserNo);
          }
          if (userNos.length === 0) {
            yield transitionTo('signin');
            return;
          }
          if (!forceUserNo) {
            if (userNos.length === 1) {
              var only = userNos[0];
              if (!cookieUserNo || cookieUserNo !== only) {
                try {
                  setUserNoCookie(only);
                } catch (_unused2) {}
                cookieUserNo = only;
              }
            } else if (userNos.length > 1) {
              if (!pickedUserNoThisFlow) {
                try {
                  var list = getUsersForPicker();
                  setAccounts(Array.isArray(list) && list.length ? list : buildPlaceholderAccounts(userNos));
                } catch (_unused3) {
                  setAccounts(buildPlaceholderAccounts(userNos));
                }
                yield transitionTo('accountPicker');
                return;
              }
              cookieUserNo = pickedUserNoThisFlow || cookieUserNo || null;
            }
          }
        }
        if (!userWalletId && !cookieUserNo) {
          yield transitionTo('signin');
          return;
        }
        yield wait(700);
        var chosen = userWalletId ? null : cookieUserNo;
        if (chosen) {
          try {
            console.log('[evzone-sdk] selected userNo:', chosen);
          } catch (_unused4) {}
        }
        var sess = makeLocalSession({
          entNo: ent,
          chosenUserNo: chosen || 'U-LOCAL',
          merchantName,
          currency,
          getUsersForPicker
        });
        setSession(sess);
        yield transitionTo('summary');
      });
      function boot() {
        return _boot.apply(this, arguments);
      }
      return boot;
    }();
  }

  /**
   * Build action handlers (confirm, submit, selectAccount, etc.)
   */
  function createActions(_ref3) {
    var {
      amount,
      sessionRef,
      // getter: () => session
      quoteRef,
      // getter: () => quote
      setSession,
      setQuote,
      setErrorMsg,
      setPickedUserNoThisFlow,
      withMinProcessing,
      transitionTo,
      onSuccess,
      detailsRef,
      // getter: () => details
      setUserNoCookie,
      restart
    } = _ref3;
    var handleConfirm = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        var session = sessionRef();
        if (!session) return;
        setErrorMsg('');
        try {
          var _session$user;
          var q = yield withMinProcessing('quote', /*#__PURE__*/_asyncToGenerator(function* () {
            var subtotal = rnd(amount);
            var breakdown = buildBreakdown(subtotal);
            return {
              quoteId: 'qt_' + Math.random().toString(36).slice(2),
              total: subtotal,
              currency: session.billingCurrency || 'UGX',
              breakdown,
              createdAt: nowIso(),
              expiresAt: new Date(Date.now() + 5 * 60000).toISOString()
            };
          }));
          setQuote(q);
          var balance = Number((session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.balance) || 0);
          if (balance < Number(q.total || 0)) yield transitionTo('insufficient');else yield transitionTo('passcode');
        } catch (e) {
          try {
            console.error('quote failed (offline):', e);
          } catch (_unused5) {}
          setErrorMsg('Could not prepare quote.');
          yield transitionTo('failed');
        }
      });
      return function handleConfirm() {
        return _ref4.apply(this, arguments);
      };
    }();
    var handleSubmit = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* (passcode) {
        var session = sessionRef();
        var quote = quoteRef();
        if (!session || !quote) return;
        if (!passcode || String(passcode).length !== 6) return;
        setErrorMsg('');
        try {
          var res = yield withMinProcessing('charge', /*#__PURE__*/_asyncToGenerator(function* () {
            var _session$user2;
            var uNo = session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.userNo;
            var state = uNo && DUMMY_USER_STATE[uNo] || DEFAULT_USER_STATE;
            if (String(passcode) !== String(state.passcode)) {
              var err = new Error('Incorrect passcode');
              err.code = 'INVALID_PASSCODE';
              throw err;
            }
            var total = Number(quote.total || 0);
            var currBalance = Number(session.user.balance || 0);
            if (currBalance < total) {
              var _err = new Error('Not enough balance');
              _err.code = 'INSUFFICIENT_FUNDS';
              throw _err;
            }
            var newBal = rnd(currBalance - total);
            var nextSess = _objectSpread2(_objectSpread2({}, session), {}, {
              user: _objectSpread2(_objectSpread2({}, session.user), {}, {
                balance: newBal
              })
            });
            setSession(nextSess);
            return {
              chargeId: 'ch_' + Math.random().toString(36).slice(2),
              receipt: {
                transactionId: 'W-' + Math.floor(Math.random() * 1e9),
                timestamp: nowIso(),
                billing: {
                  amount: total,
                  currency: quote.currency
                },
                user: {
                  walletId: session.user.walletId,
                  debited: total,
                  currency: session.user.currency,
                  newBalance: newBal
                },
                enterprise: {
                  walletNo: session.enterprise.walletNo,
                  credited: total,
                  currency: session.enterprise.currency || 'UGX'
                },
                breakdown: quote.breakdown
              }
            };
          }));
          yield transitionTo('success');
          var details = detailsRef();
          onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess({
            transactionId: (res === null || res === void 0 ? void 0 : res.chargeId) || (quote === null || quote === void 0 ? void 0 : quote.quoteId),
            sessionId: sessionRef().sessionId,
            enterprise: sessionRef().enterprise,
            user: sessionRef().user,
            amount: quote.total,
            currency: quote.currency || details.billedCurrency,
            type: details.type,
            particulars: details.particulars,
            receipt: res === null || res === void 0 ? void 0 : res.receipt
          });
        } catch (e) {
          if ((e === null || e === void 0 ? void 0 : e.code) === 'INSUFFICIENT_FUNDS') yield transitionTo('insufficient');else {
            try {
              console.error('charge failed (offline):', e);
            } catch (_unused6) {}
            setErrorMsg((e === null || e === void 0 ? void 0 : e.message) || 'Payment failed.');
            yield transitionTo('failed');
          }
        }
      });
      return function handleSubmit(_x) {
        return _ref6.apply(this, arguments);
      };
    }();
    var selectAccount = userNo => {
      try {
        if (userNo) setUserNoCookie(userNo);
      } catch (_unused7) {}
      setPickedUserNoThisFlow(userNo);
      try {
        console.log('[evzone-sdk] user picked (cookie primary):', userNo);
      } catch (_unused8) {}
      restart(userNo);
    };
    var closeAndReset = onClose => {
      setQuote(null);
      // Don’t spin here—close immediately; parent usually unmounts the form.
      onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    var goToSummary = () => transitionTo('summary');
    return {
      handleConfirm,
      handleSubmit,
      selectAccount,
      closeAndReset,
      goToSummary
    };
  }

  function useWalletPaymentFlow(_ref) {
    var _session$enterprise3, _session$enterprise4;
    var {
      publicKey,
      publishableKey,
      brandId,
      // reserved
      enterpriseNo,
      enterpriseWalletNo,
      userWalletId,
      amount,
      type,
      particulars,
      currency,
      merchantName,
      merchantLogo,
      minProcessingMs = 5000,
      onClose,
      onSuccess
    } = _ref;
    var key = publicKey || publishableKey || null;
    var ent = enterpriseNo || enterpriseWalletNo || null;

    // views: loading | accountPicker | signin | invalid | summary | passcode | success | failed | insufficient
    var [view, setView] = H.useState('loading');
    var [errorMsg, setErrorMsg] = H.useState('');
    var [session, setSession] = H.useState(null);
    var [quote, setQuote] = H.useState(null);
    var [accounts, setAccounts] = H.useState([]);
    var [submitting, setSubmitting] = H.useState(false);
    var [processing, setProcessing] = H.useState(null); // 'quote' | 'charge' | 'ui' | null

    var [pickedUserNoThisFlow, setPickedUserNoThisFlow] = H.useState(null);
    var forceUserNoRef = H.useRef(null);
    var amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;
    var {
      withMinProcessing,
      transitionTo
    } = H.useMemo(() => createTransitions(minProcessingMs, setProcessing, setView), [minProcessingMs]);

    // Build the boot function from the core (inject deps/setters)
    var boot = H.useMemo(() => createBoot({
      key,
      ent,
      amountValid,
      userWalletId,
      pickedUserNoThisFlow,
      getUserNoFromCookie,
      getUserNosFromCookie,
      setUserNoCookie,
      getUsersForPicker,
      setErrorMsg,
      setQuote,
      setAccounts,
      setSession,
      transitionTo,
      currency,
      merchantName
    }), [key, ent, amountValid, userWalletId, pickedUserNoThisFlow, transitionTo, currency, merchantName]);

    // Compose details (kept here—small and UI-friendly)
    var details = H.useMemo(() => {
      var _session$enterprise, _session$enterprise2, _quote$total;
      var billingCurrency = (session === null || session === void 0 ? void 0 : session.billingCurrency) || currency || 'UGX';
      var mName = merchantName || (session === null || session === void 0 ? void 0 : (_session$enterprise = session.enterprise) === null || _session$enterprise === void 0 ? void 0 : _session$enterprise.name) || 'Unknown Merchant';
      var toId = (session === null || session === void 0 ? void 0 : (_session$enterprise2 = session.enterprise) === null || _session$enterprise2 === void 0 ? void 0 : _session$enterprise2.walletNo) || '—';
      return {
        type: type || 'Booking',
        id: toId,
        particulars: particulars || 'Payment',
        billedCurrency: billingCurrency,
        billedAmount: amount,
        totalBilling: (_quote$total = quote === null || quote === void 0 ? void 0 : quote.total) !== null && _quote$total !== void 0 ? _quote$total : amount,
        merchantName: mName,
        merchantLogo: merchantLogo || ''
      };
    }, [amount, currency, merchantLogo, merchantName, particulars, quote === null || quote === void 0 ? void 0 : quote.total, session === null || session === void 0 ? void 0 : session.billingCurrency, session === null || session === void 0 ? void 0 : (_session$enterprise3 = session.enterprise) === null || _session$enterprise3 === void 0 ? void 0 : _session$enterprise3.name, session === null || session === void 0 ? void 0 : (_session$enterprise4 = session.enterprise) === null || _session$enterprise4 === void 0 ? void 0 : _session$enterprise4.walletNo, type]);

    // Action handlers from core (inject lightweight getters)
    var {
      handleConfirm,
      handleSubmit,
      selectAccount,
      closeAndReset: _closeAndReset,
      goToSummary
    } = H.useMemo(() => createActions({
      amount,
      sessionRef: () => session,
      quoteRef: () => quote,
      setSession,
      setQuote,
      setErrorMsg,
      setPickedUserNoThisFlow,
      withMinProcessing,
      transitionTo,
      onSuccess,
      detailsRef: () => details,
      setUserNoCookie,
      restart: forceUserNo => {
        if (forceUserNo) forceUserNoRef.current = forceUserNo;
        setView('loading');
        boot({
          forceUserNo
        });
      }
    }), [amount, session, quote, withMinProcessing, transitionTo, onSuccess, details, boot]);

    // Public wrapper to close and notify parent
    var closeAndReset = H.useCallback(() => {
      _closeAndReset(onClose);
    }, [_closeAndReset, onClose]);

    // Auto-boot
    H.useEffect(() => {
      setView('loading');
      var cancelled = false;
      _asyncToGenerator(function* () {
        if (!cancelled) yield boot({});
      })();
      return () => {
        cancelled = true;
      };
    }, [boot]);

    // External restart (optional)
    var restart = H.useCallback(forceUserNo => {
      if (forceUserNo) forceUserNoRef.current = forceUserNo;
      setView('loading');
      boot({
        forceUserNo
      });
    }, [boot]);
    return {
      // state
      view,
      errorMsg,
      session,
      quote,
      submitting,
      processing,
      // derived
      details,
      // multi-account
      accounts,
      selectAccount,
      // actions
      handleConfirm,
      handleSubmit,
      closeAndReset,
      restart,
      goToSummary
    };
  }

  var DESCRIPTORS = descriptors;
  var uncurryThis = functionUncurryThis;
  var call = functionCall;
  var fails = fails$p;
  var objectKeys = objectKeys$2;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject = toObject$5;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty = Object.defineProperty;
  var concat = uncurryThis([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol('assign detection');
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $ = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
    assign: assign
  });

  // sdk/internalConfig.js
  // ⚠️ Publishable key is safe to expose. Do NOT put secrets here.
  var EVZ_SDK_CONFIG = {
    // Your server base (hidden from consumers)
    apiBaseUrl: 'http://localhost:4000/api',
    // Public key for the /v1/efcx/incoming header (safe to expose)
    publishableKey: 'pk_nVUU8-kP-frns1vAEgTTxipOvZos4Twg',
    // “Deposit to” targets for your enterprise (not secrets)
    settlementAccountId: '476fea77-b845-49ae-8851-cdd71da5cae5',
    walletId: '3a164195-945e-45b0-bd66-f022833781f9',
    // Sensible defaults
    defaultCountry: 'UG',
    defaultProvider: 'airtel_ug',
    defaultCurrency: 'UGX'
  };
  function getSdkConfig() {
    return _objectSpread2({}, EVZ_SDK_CONFIG);
  }

  function makeClientRef() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ORDER';
    return "".concat(prefix, "-").concat(Math.random().toString(36).slice(2, 8), "-").concat(Date.now().toString().slice(-6));
  }
  var PROVIDER_CODE = {
    mtn_ug: 'MTN',
    airtel_ug: 'Airtel',
    mpesa_ke: 'M-Pesa',
    airtel_ke: 'Airtel',
    mpesa_tz: 'M-Pesa',
    tigo_tz: 'Tigo',
    airtel_tz: 'Airtel',
    mtn_rw: 'MTN',
    airtel_rw: 'Airtel',
    mtn_ng: 'MTN',
    airtel_ng: 'Airtel',
    opay_ng: 'Opay',
    palmpay_ng: 'PalmPay',
    mtn_gh: 'MTN',
    airteltigo_gh: 'AirtelTigo',
    vodafone_gh: 'Vodafone',
    mtn_za: 'MTN',
    mpesa_za: 'M-Pesa'
  };

  // Full-name labels your successful call used
  var COUNTRY_LABEL = {
    UG: 'Uganda',
    KE: 'Kenya',
    TZ: 'Tanzania',
    RW: 'Rwanda',
    NG: 'Nigeria',
    GH: 'Ghana',
    ZA: 'South Africa'
  };

  // Pretty provider_name values (match the passing request style)
  var PROVIDER_PRETTY = {
    airtel_ug: 'Airtel Uganda',
    mtn_ug: 'MTN Uganda',
    mpesa_ke: 'M-Pesa (Safaricom) Kenya',
    airtel_ke: 'Airtel Kenya',
    mpesa_tz: 'M-Pesa Tanzania',
    tigo_tz: 'Tigo Pesa',
    airtel_tz: 'Airtel Money Tanzania',
    mtn_rw: 'MTN Rwanda',
    airtel_rw: 'Airtel Rwanda',
    mtn_ng: 'MTN Nigeria MoMo',
    airtel_ng: 'Airtel SmartCash',
    opay_ng: 'Opay',
    palmpay_ng: 'PalmPay',
    mtn_gh: 'MTN Mobile Money Ghana',
    airteltigo_gh: 'AirtelTigo Money',
    vodafone_gh: 'Vodafone Cash',
    mtn_za: 'MTN SA MoMo',
    mpesa_za: 'Vodacom M-Pesa'
  };

  // Hard-lock currency for UG providers
  var PROVIDER_CURRENCY = {
    airtel_ug: 'UGX',
    mtn_ug: 'UGX'
  };
  function toCountryLabel(input) {
    var raw = String(input).trim();
    if (/^[A-Za-z]{2}$/.test(raw)) return COUNTRY_LABEL[raw.toUpperCase()] || raw;
    return raw; // already a full name like "Uganda"
  }
  function createMobileMoneyDeposit() {
    return _createMobileMoneyDeposit.apply(this, arguments);
  }
  function _createMobileMoneyDeposit() {
    _createMobileMoneyDeposit = _asyncToGenerator(function* () {
      var {
        msisdn,
        // "+2567…"
        amount,
        // number
        providerValue,
        // e.g. "airtel_ug"
        country,
        // "UG" or "Uganda" (we’ll send full name)
        // currency,       // <— ignored for UG; we force UGX
        accountHolder,
        // default "EVzone Customer"
        emailAssociated,
        // SDK will fallback if empty
        clientReference,
        // optional
        idempotencyKey // optional
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var cfg = getSdkConfig();
      var apiBaseUrl = cfg.apiBaseUrl;
      var publishableKey = cfg.publishableKey;
      var settlementAccountId = cfg.settlementAccountId;
      var walletId = cfg.walletId;
      if (!apiBaseUrl) throw new Error('SDK misconfigured: apiBaseUrl missing');
      if (!publishableKey) throw new Error('SDK misconfigured: publishableKey missing');
      if (!settlementAccountId) throw new Error('SDK misconfigured: settlementAccountId missing');
      if (!walletId) throw new Error('SDK misconfigured: walletId missing');
      var pval = providerValue || cfg.defaultProvider || 'airtel_ug';
      var provider_code = PROVIDER_CODE[pval] || pval;
      var provider_name = PROVIDER_PRETTY[pval] || provider_code;

      // Force UGX for UG providers; default to UGX anyway
      var usedCurrency = PROVIDER_CURRENCY[pval] || 'UGX';

      // Country label: use explicit “Uganda” for UG providers; otherwise map
      var isUG = /_ug$/i.test(pval) || /^(ug|uganda)$/i.test(country || cfg.defaultCountry || 'UG');
      var countryLabel = isUG ? 'Uganda' : toCountryLabel(country || cfg.defaultCountry || 'UG');
      var name = accountHolder || 'EVzone Customer';

      // Always provide initiator.email (server requires it)
      var digits = String(msisdn || '').replace(/\D/g, '').slice(-10) || 'guest';
      var initEmail = emailAssociated && String(emailAssociated).trim() || "guest-".concat(digits, "@noemail.evzone.app");
      var amt = Number(amount || 0);
      var txId = clientReference || makeClientRef('ORDER');
      var idem = idempotencyKey || txId;

      // 🔒 EXACT shape as the successful request (no extra keys)
      var payload = {
        settlement_account_id: settlementAccountId,
        wallet_id: walletId,
        initiator: {
          type: 'individual',
          name,
          mobile: msisdn,
          email: initEmail,
          DOB: '1990-01-01',
          address: {
            country: countryLabel,
            // e.g. "Uganda"
            city: '—',
            street_address: '—',
            zip_code: '—',
            state: '—'
          }
        },
        provider: {
          channel: 'Mobile Money',
          channel_info: {
            provider_name,
            provider_code,
            account_number: msisdn,
            currency: usedCurrency,
            // ← UGX
            registered_name: name
          },
          account_info: {
            account_holder: name,
            mobile_associated: msisdn,
            email_associated: initEmail
          }
        },
        transaction: {
          transaction_id: txId,
          original_currency: usedCurrency,
          // ← UGX
          destination_currency: usedCurrency,
          // ← UGX
          country: countryLabel,
          // e.g. "Uganda"
          amount: {
            base: amt,
            tax: 0,
            fees: 0,
            total: amt
          },
          transaction_date: new Date().toISOString()
        }
      };
      var r = yield fetch("".concat(String(apiBaseUrl).replace(/\/+$/, ''), "/v1/efcx/incoming"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Publishable-Key': publishableKey,
          'Idempotency-Key': idem
        },
        body: JSON.stringify({
          payload
        })
      });
      var text = yield r.text();
      var json;
      try {
        json = JSON.parse(text);
      } catch (_unused) {
        json = {
          raw: text
        };
      }
      if (!r.ok) {
        var _json, _json$error, _json2;
        var msg = ((_json = json) === null || _json === void 0 ? void 0 : (_json$error = _json.error) === null || _json$error === void 0 ? void 0 : _json$error.message) || ((_json2 = json) === null || _json2 === void 0 ? void 0 : _json2.error) || "Request failed (".concat(r.status, ")");
        var err = new Error(msg);
        err.status = r.status;
        err.body = json;
        throw err;
      }
      return json;
    });
    return _createMobileMoneyDeposit.apply(this, arguments);
  }

  var {
    Title,
    Text
  } = antd.Typography;
  var DEFAULT_PROCESSING_GIF = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif';
  function WalletPaymentForm(props) {
    var {
      zIndex = 2000,
      processingSrc,
      supportEmail,
      supportPhone,
      onSuccess,
      // parent callback
      minProcessingMs = 1500,
      // passthrough for wallet flow UI (not used by MoMo SDK client)
      publishableKey,
      enterpriseWalletNo,
      // human-friendly label
      transactionType
    } = props;

    // Map transactionType to hook’s expected fields (no other flow changes)
    var hookProps = _objectSpread2(_objectSpread2({}, props), {}, {
      type: transactionType || props.type,
      particulars: transactionType || props.particulars
    });
    var {
      view,
      errorMsg,
      quote,
      submitting,
      processing,
      details,
      accounts,
      selectAccount,
      handleConfirm,
      handleSubmit,
      closeAndReset,
      goToSummary
    } = useWalletPaymentFlow(hookProps);
    var [passcode, setPasscode] = H.useState('');

    // Alt methods
    var [showMM, setShowMM] = H.useState(false);
    var [showCard, setShowCard] = H.useState(false);
    var [showBank, setShowBank] = H.useState(false);
    var [altProcessing, setAltProcessing] = H.useState(false);
    var [altError, setAltError] = H.useState(null);

    // ✅ Local, guaranteed Success modal (works for BOTH wallet and MoMo)
    var [showSuccess, setShowSuccess] = H.useState(false);
    var successAmountRef = H.useRef(null);
    var successCurrencyRef = H.useRef('UGX');
    var pendingSuccessPayloadRef = H.useRef(null); // delivered to parent after user clicks Done

    // Wrap success: show success modal first, then call parent onSuccess on close
    var presentSuccess = (amount, currency, payload) => {
      // stop any processing overlays
      setAltProcessing(false);
      successAmountRef.current = Number(amount || 0);
      successCurrencyRef.current = currency || 'UGX';
      pendingSuccessPayloadRef.current = payload || null;
      setShowSuccess(true);
    };
    var handleSuccessClose = () => {
      var payload = pendingSuccessPayloadRef.current;
      // Call parent's onSuccess AFTER the user acknowledges Success
      try {
        if (payload) onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(payload);
      } finally {
        // clean up & close the whole flow
        setShowSuccess(false);
        pendingSuccessPayloadRef.current = null;
        closeAndReset();
      }
    };

    // ★★ Wallet-to-wallet path:
    // If your internal hook already triggers a 'success' view AND calls props.onSuccess,
    // we still ensure our Success modal shows by checking for that view below.
    // If you prefer to intercept earlier, pass a wrapped onSuccess down to the hook:
    // const walletFlowOnSuccess = (payload) => {
    //   const billedAmount   = quote?.total ?? details.billedAmount;
    //   const billedCurrency = quote?.currency || details.billedCurrency || 'UGX';
    //   presentSuccess(billedAmount, billedCurrency, payload);
    // };
    // and then pass: useWalletPaymentFlow({ ...hookProps, onSuccess: walletFlowOnSuccess });

    // ---------- Priority overlays ----------
    var renderLoading = () => /*#__PURE__*/jsxRuntimeExports.jsx(LoadingOverlay, {
      open: true,
      zIndex: zIndex,
      brand: "EVzone Pay",
      tip: "Preparing secure checkout\u2026"
    });
    var renderInvalid = () => {
      var contactLine = supportEmail && supportPhone ? "".concat(supportEmail, " or ").concat(supportPhone) : supportEmail || supportPhone || '';
      return /*#__PURE__*/jsxRuntimeExports.jsx(antd.Modal, {
        open: true,
        centered: true,
        footer: null,
        onCancel: closeAndReset,
        zIndex: zIndex,
        maskClosable: false,
        children: /*#__PURE__*/jsxRuntimeExports.jsxs(antd.Space, {
          direction: "vertical",
          align: "center",
          style: {
            width: '100%'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title, {
            level: 4,
            style: {
              margin: 0
            },
            children: "Cannot Continue"
          }), /*#__PURE__*/jsxRuntimeExports.jsxs(Text, {
            type: "secondary",
            style: {
              textAlign: 'center'
            },
            children: ["We couldn\u2019t start the checkout right now. No charge was made.", contactLine ? /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/*#__PURE__*/jsxRuntimeExports.jsx("br", {}), "For help, please contact ", /*#__PURE__*/jsxRuntimeExports.jsx("b", {
                children: contactLine
              }), "."]
            }) : null]
          }), /*#__PURE__*/jsxRuntimeExports.jsx(antd.Button, {
            type: "primary",
            onClick: closeAndReset,
            children: "Close"
          })]
        })
      });
    };
    var renderSummary = () => /*#__PURE__*/jsxRuntimeExports.jsx(TransactionSummary, {
      transactionDetails: details,
      onConfirm: handleConfirm,
      onCancel: closeAndReset,
      confirmDisabled: submitting,
      confirmLoading: submitting
    });
    var renderPasscode = () => /*#__PURE__*/jsxRuntimeExports.jsx(EnterPasscode, {
      passcode: passcode,
      setPasscode: setPasscode,
      transactionDetails: details,
      onSubmit: () => handleSubmit(passcode),
      onBack: goToSummary,
      submitting: submitting,
      quote: quote
    });

    // IMPORTANT: don’t let the "Processing…" overlay cover a success modal
    if (view === 'loading') return renderLoading();
    if ((processing || altProcessing) && !showSuccess && !altError) {
      var procSrc = processingSrc || DEFAULT_PROCESSING_GIF;
      return /*#__PURE__*/jsxRuntimeExports.jsx(ProcessingModal, {
        open: true,
        src: procSrc,
        message: "Processing\u2026",
        subText: "Please wait",
        zIndex: zIndex
      });
    }

    // ---------- Alternate method transitions ----------
    var delay = Math.max(0, Number(minProcessingMs) || 1500);
    var startMobileMoneyFlow = () => {
      setAltProcessing(true);
      setTimeout(() => {
        setAltProcessing(false);
        setShowMM(true);
        setShowCard(false);
        setShowBank(false);
      }, delay);
    };
    var startCardFlow = () => {
      setAltProcessing(true);
      setTimeout(() => {
        setAltProcessing(false);
        setShowCard(true);
        setShowMM(false);
        setShowBank(false);
      }, delay);
    };
    var startBankFlow = () => {
      setAltProcessing(true);
      setTimeout(() => {
        setAltProcessing(false);
        setShowBank(true);
        setShowMM(false);
        setShowCard(false);
      }, delay);
    };

    // ---------- Alt method submit handlers ----------
    // Uses ONLY amount + user-entered number (SDK fills defaults correctly).
    var handleAltMobileSubmit = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (_ref) {
        var _quote$total;
        var {
          msisdn,
          e164,
          country,
          provider
        } = _ref;
        var billedAmount = (_quote$total = quote === null || quote === void 0 ? void 0 : quote.total) !== null && _quote$total !== void 0 ? _quote$total : details.billedAmount;
        var billedCurrency = (quote === null || quote === void 0 ? void 0 : quote.currency) || details.billedCurrency || 'UGX';
        try {
          var _resp$transaction_res, _resp$data, _resp$data2;
          setAltProcessing(true);
          setShowMM(false);
          var resp = yield createMobileMoneyDeposit({
            msisdn: e164 || msisdn,
            // payer
            providerValue: provider,
            country: country || 'UG',
            amount: Number(billedAmount || 0),
            currency: billedCurrency,
            accountHolder: 'EVzone Customer',
            emailAssociated: '' // SDK auto-falls back
          });

          // Build a uniform payload for parent (but don't call parent yet)
          var payload = {
            transactionId: (resp === null || resp === void 0 ? void 0 : (_resp$transaction_res = resp.transaction_result) === null || _resp$transaction_res === void 0 ? void 0 : _resp$transaction_res.transaction_id) || (resp === null || resp === void 0 ? void 0 : resp.provider_txn_id) || (resp === null || resp === void 0 ? void 0 : resp.transaction_id) || (resp === null || resp === void 0 ? void 0 : resp.reference_id) || (resp === null || resp === void 0 ? void 0 : (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.provider_txn_id) || (resp === null || resp === void 0 ? void 0 : (_resp$data2 = resp.data) === null || _resp$data2 === void 0 ? void 0 : _resp$data2.reference_id) || "ALT-MM-".concat(Math.floor(Math.random() * 1e9)),
            sessionId: null,
            enterprise: {
              walletNo: enterpriseWalletNo || null
            },
            user: null,
            amount: billedAmount,
            currency: billedCurrency,
            type: transactionType || details.type,
            particulars: transactionType || details.particulars,
            paymentMethod: 'MOBILE_MONEY',
            paymentMeta: {
              msisdn: e164 || msisdn,
              country,
              provider,
              upstream: resp
            }
          };

          // Show success first, then on Done -> parent onSuccess, then close
          presentSuccess(billedAmount, billedCurrency, payload);
        } catch (err) {
          var _err$body, _err$body$error;
          var msg = (err === null || err === void 0 ? void 0 : (_err$body = err.body) === null || _err$body === void 0 ? void 0 : (_err$body$error = _err$body.error) === null || _err$body$error === void 0 ? void 0 : _err$body$error.message) || (err === null || err === void 0 ? void 0 : err.message) || 'Could not start Mobile Money payment.';
          setAltError(msg);
        } finally {
          setAltProcessing(false);
        }
      });
      return function handleAltMobileSubmit(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var handleCardSubmit = card => {
      var _quote$total2;
      try {
        console.log('[EVZ SDK] card payload (masked):', _objectSpread2(_objectSpread2({}, card), {}, {
          cardNumber: String(card.cardNumber || '').slice(-4).padStart(12, '*'),
          cvv: '***'
        }));
      } catch (_unused) {}
      var payload = {
        transactionId: 'CARD-' + Math.floor(Math.random() * 1e9),
        sessionId: null,
        enterprise: {
          walletNo: enterpriseWalletNo || null
        },
        user: null,
        amount: (_quote$total2 = quote === null || quote === void 0 ? void 0 : quote.total) !== null && _quote$total2 !== void 0 ? _quote$total2 : details.billedAmount,
        currency: (quote === null || quote === void 0 ? void 0 : quote.currency) || details.billedCurrency,
        type: transactionType || details.type,
        particulars: transactionType || details.particulars,
        paymentMethod: 'CARD',
        paymentMeta: {
          brand: card.brand || null,
          last4: String(card.cardNumber || '').slice(-4),
          save: !!card.save,
          phone: card.phone || null,
          discountCode: card.discountCode || null
        }
      };
      presentSuccess(payload.amount, payload.currency, payload);
    };
    var handleBankSubmit = bankPayload => {
      var _quote$total3;
      var payload = {
        transactionId: 'BANK-' + Math.floor(Math.random() * 1e9),
        sessionId: null,
        enterprise: {
          walletNo: enterpriseWalletNo || null
        },
        user: null,
        amount: (_quote$total3 = quote === null || quote === void 0 ? void 0 : quote.total) !== null && _quote$total3 !== void 0 ? _quote$total3 : details.billedAmount,
        currency: (quote === null || quote === void 0 ? void 0 : quote.currency) || details.billedCurrency,
        type: transactionType || details.type,
        particulars: transactionType || details.particulars,
        paymentMethod: 'BANK',
        paymentMeta: bankPayload
      };
      presentSuccess(payload.amount, payload.currency, payload);
    };

    // ---------- Single active modal / view ----------
    var content = null;

    // ✅ Our guaranteed Success modal takes absolute priority
    if (showSuccess) {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(PaymentSuccessModal, {
        open: true,
        amount: successAmountRef.current,
        currency: successCurrencyRef.current,
        zIndex: zIndex,
        onClose: handleSuccessClose,
        showAmount: true
      });
    } else if (altError) {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(PaymentFailedModal, {
        open: true,
        zIndex: zIndex,
        reason: altError,
        onClose: () => {
          setAltError(null);
          closeAndReset();
        }
      });
    } else if (showMM) {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(MobileMoneyFallbackModal, {
        open: true,
        onCancel: () => setShowMM(false),
        onSubmit: handleAltMobileSubmit,
        zIndex: zIndex
      });
    } else if (showCard) {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(CardPaymentModal, {
        open: true,
        onCancel: () => setShowCard(false),
        onSubmit: handleCardSubmit,
        zIndex: zIndex
      });
    } else if (showBank) {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(BankPaymentModal, {
        open: true,
        onCancel: () => setShowBank(false),
        onSubmit: handleBankSubmit,
        zIndex: zIndex
      });
    } else if (view === 'accountPicker') {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(AccountPickerModal, {
        open: true,
        zIndex: zIndex,
        accounts: accounts || [],
        onSelect: userNo => {
          setPasscode('');
          selectAccount === null || selectAccount === void 0 ? void 0 : selectAccount(userNo);
        },
        onClose: closeAndReset
      });
    } else if (view === 'signin') {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(HasAccountSummary, {
        open: true,
        onLoginSuccess: userNo => {
          setPasscode('');
          selectAccount === null || selectAccount === void 0 ? void 0 : selectAccount(userNo);
        },
        onClose: closeAndReset,
        zIndex: zIndex
      });
    } else if (view === 'invalid') {
      content = renderInvalid();
    } else if (view === 'summary') {
      content = renderSummary();
    } else if (view === 'passcode') {
      content = renderPasscode();
    } else if (view === 'success') {
      var _quote$total4;
      // Fallback: if your hook explicitly sends 'success', still show it
      content = /*#__PURE__*/jsxRuntimeExports.jsx(PaymentSuccessModal, {
        open: true,
        amount: (_quote$total4 = quote === null || quote === void 0 ? void 0 : quote.total) !== null && _quote$total4 !== void 0 ? _quote$total4 : details.billedAmount,
        currency: (quote === null || quote === void 0 ? void 0 : quote.currency) || details.billedCurrency,
        zIndex: zIndex,
        onClose: handleSuccessClose,
        showAmount: true
      });
    } else if (view === 'failed') {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(PaymentFailedModal, {
        open: true,
        zIndex: zIndex,
        reason: errorMsg,
        onClose: closeAndReset
      });
    } else if (view === 'insufficient') {
      content = /*#__PURE__*/jsxRuntimeExports.jsx(InsufficientFundsModal, {
        open: true,
        zIndex: zIndex,
        onClose: closeAndReset,
        onOpenAltMobile: startMobileMoneyFlow // Mobile Money
        ,
        onOpenCard: startCardFlow // Card
        ,
        onOpenBank: startBankFlow // Bank
      });
    }
    return content;
  }

  exports.WalletPaymentForm = WalletPaymentForm;
  exports.default = WalletPaymentForm;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=WalletPaymentForm.umd.js.map
