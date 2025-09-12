(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('antd'), require('@ant-design/icons')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'antd', '@ant-design/icons'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.WalletPaymentForm = {}, global.React, global.antd, global.icons));
})(this, (function (exports, React, antd, icons) { 'use strict';

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
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var fails$i = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$h = fails$i;

  var functionBindNative = !fails$h(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$g = FunctionPrototype$2.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$g, call$g);

  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$g.apply(fn, arguments);
    };
  };

  var uncurryThis$j = functionUncurryThis;

  var toString$6 = uncurryThis$j({}.toString);
  var stringSlice$6 = uncurryThis$j(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$6(toString$6(it), 8, -1);
  };

  var uncurryThis$i = functionUncurryThis;
  var fails$g = fails$i;
  var classof$6 = classofRaw$2;

  var $Object$4 = Object;
  var split = uncurryThis$i(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$g(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$6(it) === 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$5 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$4 = isNullOrUndefined$5;

  var $TypeError$d = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$6 = function (it) {
    if (isNullOrUndefined$4(it)) throw new $TypeError$d("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject = indexedObject;
  var requireObjectCoercible$5 = requireObjectCoercible$6;

  var toIndexedObject$5 = function (it) {
    return IndexedObject(requireObjectCoercible$5(it));
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

  var globalThis$m = globalThis_1;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$5 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$5(globalThis$m, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      globalThis$m[key] = value;
    } return value;
  };

  var globalThis$l = globalThis_1;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = sharedStore.exports = globalThis$l[SHARED] || defineGlobalProperty$2(SHARED, {});

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

  var requireObjectCoercible$4 = requireObjectCoercible$6;

  var $Object$3 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$3 = function (argument) {
    return $Object$3(requireObjectCoercible$4(argument));
  };

  var uncurryThis$h = functionUncurryThis;
  var toObject$2 = toObject$3;

  var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$2(it), key);
  };

  var uncurryThis$g = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$5 = uncurryThis$g(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
  };

  var globalThis$k = globalThis_1;

  var navigator = globalThis$k.navigator;
  var userAgent$5 = navigator && navigator.userAgent;

  var environmentUserAgent = userAgent$5 ? String(userAgent$5) : '';

  var globalThis$j = globalThis_1;
  var userAgent$4 = environmentUserAgent;

  var process$3 = globalThis$j.process;
  var Deno$1 = globalThis$j.Deno;
  var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
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
  if (!version && userAgent$4) {
    match = userAgent$4.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$4.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var environmentV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$1 = environmentV8Version;
  var fails$f = fails$i;
  var globalThis$i = globalThis_1;

  var $String$6 = globalThis$i.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$f(function () {
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

  var globalThis$h = globalThis_1;
  var shared$3 = shared$4;
  var hasOwn$9 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var Symbol$1 = globalThis$h.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$g = function (name) {
    if (!hasOwn$9(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$9(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var isCallable$l = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$k = isCallable$l;

  var isObject$a = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$k(it);
  };

  var isObject$9 = isObject$a;

  var $String$5 = String;
  var $TypeError$c = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$c = function (argument) {
    if (isObject$9(argument)) return argument;
    throw new $TypeError$c($String$5(argument) + ' is not an object');
  };

  var objectDefineProperties = {};

  var fails$e = fails$i;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$e(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  });

  var DESCRIPTORS$a = descriptors;
  var fails$d = fails$i;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$a && fails$d(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var objectDefineProperty = {};

  var globalThis$g = globalThis_1;
  var isObject$8 = isObject$a;

  var document$3 = globalThis$g.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$8(document$3) && isObject$8(document$3.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$9 = descriptors;
  var fails$c = fails$i;
  var createElement$1 = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$9 && !fails$c(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$f = Function.prototype.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var functionCall = NATIVE_BIND$2 ? call$f.bind(call$f) : function () {
    return call$f.apply(call$f, arguments);
  };

  var globalThis$f = globalThis_1;
  var isCallable$j = isCallable$l;

  var aFunction = function (argument) {
    return isCallable$j(argument) ? argument : undefined;
  };

  var getBuiltIn$7 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis$f[namespace]) : globalThis$f[namespace] && globalThis$f[namespace][method];
  };

  var uncurryThis$f = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

  var getBuiltIn$6 = getBuiltIn$7;
  var isCallable$i = isCallable$l;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$6('Symbol');
    return isCallable$i($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$2(it));
  };

  var $String$4 = String;

  var tryToString$4 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$h = isCallable$l;
  var tryToString$3 = tryToString$4;

  var $TypeError$b = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$8 = function (argument) {
    if (isCallable$h(argument)) return argument;
    throw new $TypeError$b(tryToString$3(argument) + ' is not a function');
  };

  var aCallable$7 = aCallable$8;
  var isNullOrUndefined$3 = isNullOrUndefined$5;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$4 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$3(func) ? undefined : aCallable$7(func);
  };

  var call$e = functionCall;
  var isCallable$g = isCallable$l;
  var isObject$7 = isObject$a;

  var $TypeError$a = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$g(fn = input.toString) && !isObject$7(val = call$e(fn, input))) return val;
    if (isCallable$g(fn = input.valueOf) && !isObject$7(val = call$e(fn, input))) return val;
    if (pref !== 'string' && isCallable$g(fn = input.toString) && !isObject$7(val = call$e(fn, input))) return val;
    throw new $TypeError$a("Can't convert object to primitive value");
  };

  var call$d = functionCall;
  var isObject$6 = isObject$a;
  var isSymbol$1 = isSymbol$2;
  var getMethod$3 = getMethod$4;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$f = wellKnownSymbol$g;

  var $TypeError$9 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$f('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$6(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$d(exoticToPrim, input, pref);
      if (!isObject$6(result) || isSymbol$1(result)) return result;
      throw new $TypeError$9("Can't convert object to primitive value");
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

  var DESCRIPTORS$8 = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$b = anObject$c;
  var toPropertyKey$1 = toPropertyKey$2;

  var $TypeError$8 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$8 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$b(O);
    P = toPropertyKey$1(P);
    anObject$b(Attributes);
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
    anObject$b(O);
    P = toPropertyKey$1(P);
    anObject$b(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$8('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var ceil = Math.ceil;
  var floor$2 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$2 : ceil)(n);
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
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toIntegerOrInfinity$5(index);
    return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
  };

  var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$2 = function (argument) {
    var len = toIntegerOrInfinity$4(argument);
    return len > 0 ? min$1(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$1 = toLength$2;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$2 = function (obj) {
    return toLength$1(obj.length);
  };

  var toIndexedObject$4 = toIndexedObject$5;
  var toAbsoluteIndex = toAbsoluteIndex$1;
  var lengthOfArrayLike$1 = lengthOfArrayLike$2;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$1 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$4($this);
      var length = lengthOfArrayLike$1(O);
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
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$1(false)
  };

  var hiddenKeys$4 = {};

  var uncurryThis$e = functionUncurryThis;
  var hasOwn$8 = hasOwnProperty_1;
  var toIndexedObject$3 = toIndexedObject$5;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$3 = hiddenKeys$4;

  var push$1 = uncurryThis$e([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$3(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$8(hiddenKeys$3, key) && hasOwn$8(O, key) && push$1(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$8(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$1(result, key);
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
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

  var DESCRIPTORS$7 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$3 = objectDefineProperty;
  var anObject$a = anObject$c;
  var toIndexedObject$2 = toIndexedObject$5;
  var objectKeys = objectKeys$1;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$7 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$a(O);
    var props = toIndexedObject$2(Properties);
    var keys = objectKeys(Properties);
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

  var keys = shared$2('keys');

  var sharedKey$3 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  /* global ActiveXObject -- old IE, WSH */
  var anObject$9 = anObject$c;
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
      EmptyConstructor[PROTOTYPE] = anObject$9(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$e = wellKnownSymbol$g;
  var create$2 = objectCreate;
  var defineProperty$4 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$e('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
    defineProperty$4(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$2(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$1 = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var globalThis$e = globalThis_1;
  var isCallable$f = isCallable$l;

  var WeakMap$1 = globalThis$e.WeakMap;

  var weakMapBasicDetection = isCallable$f(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var createPropertyDescriptor$3 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$6 = descriptors;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$5 = DESCRIPTORS$6 ? function (object, key, value) {
    return definePropertyModule$2.f(object, key, createPropertyDescriptor$2(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var globalThis$d = globalThis_1;
  var isObject$5 = isObject$a;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
  var hasOwn$7 = hasOwnProperty_1;
  var shared$1 = sharedStoreExports;
  var sharedKey$1 = sharedKey$3;
  var hiddenKeys$1 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$2 = globalThis$d.TypeError;
  var WeakMap = globalThis$d.WeakMap;
  var set$1, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set$1(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
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
      if (hasOwn$7(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$4(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$7(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$7(it, STATE);
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
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var DESCRIPTORS$5 = descriptors;
  var call$c = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;
  var toIndexedObject$1 = toIndexedObject$5;
  var toPropertyKey = toPropertyKey$2;
  var hasOwn$6 = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$1(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$6(O, P)) return createPropertyDescriptor$1(!call$c(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$4 = descriptors;
  var hasOwn$5 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$5(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$d = functionUncurryThis;
  var isCallable$e = isCallable$l;
  var store = sharedStoreExports;

  var functionToString = uncurryThis$d(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$e(store.inspectSource)) {
    store.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$3 = store.inspectSource;

  var uncurryThis$c = functionUncurryThis;
  var fails$b = fails$i;
  var isCallable$d = isCallable$l;
  var hasOwn$4 = hasOwnProperty_1;
  var DESCRIPTORS$3 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource$2 = inspectSource$3;
  var InternalStateModule$2 = internalState;

  var enforceInternalState = InternalStateModule$2.enforce;
  var getInternalState$2 = InternalStateModule$2.get;
  var $String$3 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$3 = Object.defineProperty;
  var stringSlice$5 = uncurryThis$c(''.slice);
  var replace$2 = uncurryThis$c(''.replace);
  var join = uncurryThis$c([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$b(function () {
    return defineProperty$3(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$5($String$3(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$2($String$3(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$4(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      if (DESCRIPTORS$3) defineProperty$3(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$4(options, 'arity') && value.length !== options.arity) {
      defineProperty$3(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$4(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$3) defineProperty$3(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$4(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$d(this) && getInternalState$2(this).source || inspectSource$2(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$3.exports;

  var isCallable$c = isCallable$l;
  var definePropertyModule$1 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$6 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$c(value)) makeBuiltIn$1(value, name, options);
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
  var uncurryThis$b = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$8 = anObject$c;

  var concat$1 = uncurryThis$b([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$8(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$3 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$a = fails$i;
  var isCallable$b = isCallable$l;

  var replacement = /#|\.prototype\./;

  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable$b(detection) ? fails$a(detection)
      : !!detection;
  };

  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';

  var isForced_1 = isForced$2;

  var globalThis$c = globalThis_1;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
  var defineBuiltIn$5 = defineBuiltIn$6;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced$1 = isForced_1;

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
      target = globalThis$c;
    } else if (STATIC) {
      target = globalThis$c[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = globalThis$c[TARGET] && globalThis$c[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$3(sourceProperty, 'sham', true);
      }
      defineBuiltIn$5(target, key, sourceProperty, options);
    }
  };

  var fails$9 = fails$i;

  var correctPrototypeGetter = !fails$9(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$2 = hasOwnProperty_1;
  var isCallable$a = isCallable$l;
  var toObject$1 = toObject$3;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object$1 = Object;
  var ObjectPrototype = $Object$1.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
    var object = toObject$1(O);
    if (hasOwn$2(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$a(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object$1 ? ObjectPrototype : null;
  };

  var fails$8 = fails$i;
  var isCallable$9 = isCallable$l;
  var isObject$4 = isObject$a;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var defineBuiltIn$4 = defineBuiltIn$6;
  var wellKnownSymbol$d = wellKnownSymbol$g;

  var ITERATOR$5 = wellKnownSymbol$d('iterator');
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

  var NEW_ITERATOR_PROTOTYPE = !isObject$4(IteratorPrototype$2) || fails$8(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$9(IteratorPrototype$2[ITERATOR$5])) {
    defineBuiltIn$4(IteratorPrototype$2, ITERATOR$5, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$2 = objectDefineProperty.f;
  var hasOwn$1 = hasOwnProperty_1;
  var wellKnownSymbol$c = wellKnownSymbol$g;

  var TO_STRING_TAG$2 = wellKnownSymbol$c('toStringTag');

  var setToStringTag$4 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$1(target, TO_STRING_TAG$2)) {
      defineProperty$2(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$1 = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$3;
  var setToStringTag$3 = setToStringTag$4;
  var Iterators$4 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$4[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$a = functionUncurryThis;
  var aCallable$6 = aCallable$8;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$a(aCallable$6(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isObject$3 = isObject$a;

  var isPossiblePrototype$1 = function (argument) {
    return isObject$3(argument) || argument === null;
  };

  var isPossiblePrototype = isPossiblePrototype$1;

  var $String$2 = String;
  var $TypeError$7 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError$7("Can't set " + $String$2(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor = functionUncurryThisAccessor;
  var isObject$2 = isObject$a;
  var requireObjectCoercible$3 = requireObjectCoercible$6;
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
      requireObjectCoercible$3(O);
      aPossiblePrototype(proto);
      if (!isObject$2(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$8 = _export;
  var call$b = functionCall;
  var FunctionName = functionName;
  var isCallable$8 = isCallable$l;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var setToStringTag$2 = setToStringTag$4;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
  var defineBuiltIn$3 = defineBuiltIn$6;
  var wellKnownSymbol$b = wellKnownSymbol$g;
  var Iterators$3 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol$b('iterator');
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
          if (setPrototypeOf$1) {
            setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$8(CurrentIteratorPrototype[ITERATOR$4])) {
            defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$4, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$b(nativeIterator, this); };
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
          defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$8({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
      defineBuiltIn$3(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
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
  var addToUnscopables = addToUnscopables$1;
  var Iterators$2 = iterators;
  var InternalStateModule$1 = internalState;
  var defineProperty$1 = objectDefineProperty.f;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$1;
  var DESCRIPTORS$2 = descriptors;

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
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS$2 && values.name !== 'values') try {
    defineProperty$1(values, 'name', { value: 'values' });
  } catch (error) { /* empty */ }

  /* global Bun, Deno -- detection */
  var globalThis$b = globalThis_1;
  var userAgent$3 = environmentUserAgent;
  var classof$5 = classofRaw$2;

  var userAgentStartsWith = function (string) {
    return userAgent$3.slice(0, string.length) === string;
  };

  var environment = (function () {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis$b.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis$b.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof$5(globalThis$b.process) === 'process') return 'NODE';
    if (globalThis$b.window && globalThis$b.document) return 'BROWSER';
    return 'REST';
  })();

  var ENVIRONMENT$1 = environment;

  var environmentIsNode = ENVIRONMENT$1 === 'NODE';

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty = objectDefineProperty;

  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty.f(target, name, descriptor);
  };

  var getBuiltIn$3 = getBuiltIn$7;
  var defineBuiltInAccessor = defineBuiltInAccessor$1;
  var wellKnownSymbol$a = wellKnownSymbol$g;
  var DESCRIPTORS$1 = descriptors;

  var SPECIES$3 = wellKnownSymbol$a('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$3]) {
      defineBuiltInAccessor(Constructor, SPECIES$3, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var isPrototypeOf$1 = objectIsPrototypeOf;

  var $TypeError$6 = TypeError;

  var anInstance$1 = function (it, Prototype) {
    if (isPrototypeOf$1(Prototype, it)) return it;
    throw new $TypeError$6('Incorrect invocation');
  };

  var wellKnownSymbol$9 = wellKnownSymbol$g;

  var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');
  var test = {};

  test[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var isCallable$7 = isCallable$l;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$8 = wellKnownSymbol$g;

  var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');
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
  var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) === 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$9 = functionUncurryThis;
  var fails$7 = fails$i;
  var isCallable$6 = isCallable$l;
  var classof$3 = classof$4;
  var getBuiltIn$2 = getBuiltIn$7;
  var inspectSource$1 = inspectSource$3;

  var noop = function () { /* empty */ };
  var construct = getBuiltIn$2('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$9(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$6(argument)) return false;
    try {
      construct(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$6(argument)) return false;
    switch (classof$3(argument)) {
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
  var isConstructor$1 = !construct || fails$7(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isConstructor = isConstructor$1;
  var tryToString$2 = tryToString$4;

  var $TypeError$5 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument;
    throw new $TypeError$5(tryToString$2(argument) + ' is not a constructor');
  };

  var anObject$7 = anObject$c;
  var aConstructor = aConstructor$1;
  var isNullOrUndefined$2 = isNullOrUndefined$5;
  var wellKnownSymbol$7 = wellKnownSymbol$g;

  var SPECIES$2 = wellKnownSymbol$7('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$7(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined$2(S = anObject$7(C)[SPECIES$2]) ? defaultConstructor : aConstructor(S);
  };

  var NATIVE_BIND$1 = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$2 = FunctionPrototype.apply;
  var call$a = FunctionPrototype.call;

  // eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$a.bind(apply$2) : function () {
    return call$a.apply(apply$2, arguments);
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$8 = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$8(fn);
  };

  var uncurryThis$7 = functionUncurryThisClause;
  var aCallable$5 = aCallable$8;
  var NATIVE_BIND = functionBindNative;

  var bind$4 = uncurryThis$7(uncurryThis$7.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$5(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind$4(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var uncurryThis$6 = functionUncurryThis;

  var arraySlice$1 = uncurryThis$6([].slice);

  var $TypeError$4 = TypeError;

  var validateArgumentsLength$1 = function (passed, required) {
    if (passed < required) throw new $TypeError$4('Not enough arguments');
    return passed;
  };

  var userAgent$2 = environmentUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

  var globalThis$a = globalThis_1;
  var apply$1 = functionApply;
  var bind$3 = functionBindContext;
  var isCallable$5 = isCallable$l;
  var hasOwn = hasOwnProperty_1;
  var fails$6 = fails$i;
  var html = html$2;
  var arraySlice = arraySlice$1;
  var createElement = documentCreateElement$2;
  var validateArgumentsLength = validateArgumentsLength$1;
  var IS_IOS$1 = environmentIsIos;
  var IS_NODE$2 = environmentIsNode;

  var set = globalThis$a.setImmediate;
  var clear = globalThis$a.clearImmediate;
  var process$2 = globalThis$a.process;
  var Dispatch = globalThis$a.Dispatch;
  var Function$1 = globalThis$a.Function;
  var MessageChannel = globalThis$a.MessageChannel;
  var String$1 = globalThis$a.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;

  fails$6(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis$a.location;
  });

  var run = function (id) {
    if (hasOwn(queue$2, id)) {
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
    globalThis$a.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1);
      var fn = isCallable$5(handler) ? handler : Function$1(handler);
      var args = arraySlice(arguments, 1);
      queue$2[++counter] = function () {
        apply$1(fn, undefined, args);
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
        process$2.nextTick(runner(id));
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
      globalThis$a.addEventListener &&
      isCallable$5(globalThis$a.postMessage) &&
      !globalThis$a.importScripts &&
      $location && $location.protocol !== 'file:' &&
      !fails$6(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer;
      globalThis$a.addEventListener('message', eventListener, false);
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

  var globalThis$9 = globalThis_1;
  var DESCRIPTORS = descriptors;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  var safeGetBuiltIn$1 = function (name) {
    if (!DESCRIPTORS) return globalThis$9[name];
    var descriptor = getOwnPropertyDescriptor(globalThis$9, name);
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

  var userAgent$1 = environmentUserAgent;

  var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

  var userAgent = environmentUserAgent;

  var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

  var globalThis$8 = globalThis_1;
  var safeGetBuiltIn = safeGetBuiltIn$1;
  var bind$2 = functionBindContext;
  var macrotask = task$1.set;
  var Queue$1 = queue$1;
  var IS_IOS = environmentIsIos;
  var IS_IOS_PEBBLE = environmentIsIosPebble;
  var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
  var IS_NODE$1 = environmentIsNode;

  var MutationObserver = globalThis$8.MutationObserver || globalThis$8.WebKitMutationObserver;
  var document$2 = globalThis$8.document;
  var process$1 = globalThis$8.process;
  var Promise$1 = globalThis$8.Promise;
  var microtask$1 = safeGetBuiltIn('queueMicrotask');
  var notify$1, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue = new Queue$1();

    var flush = function () {
      var parent, fn;
      if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
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
        process$1.nextTick(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = bind$2(macrotask, globalThis$8);
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

  var globalThis$7 = globalThis_1;

  var promiseNativeConstructor = globalThis$7.Promise;

  var globalThis$6 = globalThis_1;
  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var isCallable$4 = isCallable$l;
  var isForced = isForced_1;
  var inspectSource = inspectSource$3;
  var wellKnownSymbol$6 = wellKnownSymbol$g;
  var ENVIRONMENT = environment;
  var V8_VERSION = environmentV8Version;

  NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
  var SPECIES$1 = wellKnownSymbol$6('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$4(globalThis$6.PromiseRejectionEvent);

  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
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
      constructor[SPECIES$1] = FakePromise;
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

  var aCallable$4 = aCallable$8;

  var $TypeError$3 = TypeError;

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw new $TypeError$3('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$4(resolve);
    this.reject = aCallable$4(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var $$7 = _export;
  var IS_NODE = environmentIsNode;
  var globalThis$5 = globalThis_1;
  var call$9 = functionCall;
  var defineBuiltIn$2 = defineBuiltIn$6;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag$1 = setToStringTag$4;
  var setSpecies = setSpecies$1;
  var aCallable$3 = aCallable$8;
  var isCallable$3 = isCallable$l;
  var isObject$1 = isObject$a;
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
  var TypeError$1 = globalThis$5.TypeError;
  var document$1 = globalThis$5.document;
  var process = globalThis$5.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
  var newGenericPromiseCapability = newPromiseCapability$1;

  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$5.dispatchEvent);
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
    return isObject$1(it) && isCallable$3(then = it.then) ? then : false;
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
          call$9(then, result, resolve, reject);
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
      globalThis$5.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$5['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    call$9(task, globalThis$5, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform$2(function () {
          if (IS_NODE) {
            process.emit('unhandledRejection', value, promise);
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
    call$9(task, globalThis$5, function () {
      var promise = state.facade;
      if (IS_NODE) {
        process.emit('rejectionHandled', promise);
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
            call$9(then, value,
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
      aCallable$3(executor);
      call$9(Internal, this);
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
    Internal.prototype = defineBuiltIn$2(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$3(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$3(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
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

    if (isCallable$3(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
      nativeThen = NativePromisePrototype$1.then;

      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn$2(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$9(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, { unsafe: true });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$1.constructor;
      } catch (error) { /* empty */ }

      // make `instanceof Promise` work for native promise-based APIs
      if (setPrototypeOf) {
        setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
      }
    }
  }

  // `Promise` constructor
  // https://tc39.es/ecma262/#sec-promise-executor
  $$7({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
    Promise: PromiseConstructor
  });

  setToStringTag$1(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);

  var wellKnownSymbol$5 = wellKnownSymbol$g;
  var Iterators$1 = iterators;

  var ITERATOR$3 = wellKnownSymbol$5('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function (it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$3] === it);
  };

  var classof$2 = classof$4;
  var getMethod$2 = getMethod$4;
  var isNullOrUndefined$1 = isNullOrUndefined$5;
  var Iterators = iterators;
  var wellKnownSymbol$4 = wellKnownSymbol$g;

  var ITERATOR$2 = wellKnownSymbol$4('iterator');

  var getIteratorMethod$2 = function (it) {
    if (!isNullOrUndefined$1(it)) return getMethod$2(it, ITERATOR$2)
      || getMethod$2(it, '@@iterator')
      || Iterators[classof$2(it)];
  };

  var call$8 = functionCall;
  var aCallable$2 = aCallable$8;
  var anObject$6 = anObject$c;
  var tryToString$1 = tryToString$4;
  var getIteratorMethod$1 = getIteratorMethod$2;

  var $TypeError$2 = TypeError;

  var getIterator$1 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
    if (aCallable$2(iteratorMethod)) return anObject$6(call$8(iteratorMethod, argument));
    throw new $TypeError$2(tryToString$1(argument) + ' is not iterable');
  };

  var call$7 = functionCall;
  var anObject$5 = anObject$c;
  var getMethod$1 = getMethod$4;

  var iteratorClose$1 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$5(iterator);
    try {
      innerResult = getMethod$1(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$7(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$5(innerResult);
    return value;
  };

  var bind = functionBindContext;
  var call$6 = functionCall;
  var anObject$4 = anObject$c;
  var tryToString = tryToString$4;
  var isArrayIteratorMethod = isArrayIteratorMethod$1;
  var lengthOfArrayLike = lengthOfArrayLike$2;
  var isPrototypeOf = objectIsPrototypeOf;
  var getIterator = getIterator$1;
  var getIteratorMethod = getIteratorMethod$2;
  var iteratorClose = iteratorClose$1;

  var $TypeError$1 = TypeError;

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
        anObject$4(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw new $TypeError$1(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$6(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var wellKnownSymbol$3 = wellKnownSymbol$g;

  var ITERATOR$1 = wellKnownSymbol$3('iterator');
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
    iteratorWithReturn[ITERATOR$1] = function () {
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
      object[ITERATOR$1] = function () {
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

  var $$6 = _export;
  var call$5 = functionCall;
  var aCallable$1 = aCallable$8;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$1 = perform$3;
  var iterate$1 = iterate$2;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$6({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aCallable$1(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$5($promiseResolve, C, promise).then(function (value) {
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

  var $$5 = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor = promiseNativeConstructor;
  var getBuiltIn$1 = getBuiltIn$7;
  var isCallable$2 = isCallable$l;
  var defineBuiltIn$1 = defineBuiltIn$6;

  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$5({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  if (isCallable$2(NativePromiseConstructor)) {
    var method = getBuiltIn$1('Promise').prototype['catch'];
    if (NativePromisePrototype['catch'] !== method) {
      defineBuiltIn$1(NativePromisePrototype, 'catch', method, { unsafe: true });
    }
  }

  var $$4 = _export;
  var call$4 = functionCall;
  var aCallable = aCallable$8;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform = perform$3;
  var iterate = iterate$2;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$4({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$1.f(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable(C.resolve);
        iterate(iterable, function (promise) {
          call$4($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$3 = _export;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$3({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule.f(this);
      var capabilityReject = capability.reject;
      capabilityReject(r);
      return capability.promise;
    }
  });

  var anObject$3 = anObject$c;
  var isObject = isObject$a;
  var newPromiseCapability = newPromiseCapability$2;

  var promiseResolve$1 = function (C, x) {
    anObject$3(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$2 = _export;
  var getBuiltIn = getBuiltIn$7;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve = promiseResolve$1;

  getBuiltIn('Promise');

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$2({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
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

  var globalThis$4 = globalThis_1;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
  var setToStringTag = setToStringTag$4;
  var wellKnownSymbol$2 = wellKnownSymbol$g;

  var ITERATOR = wellKnownSymbol$2('iterator');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty$1(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
      setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(globalThis$4[COLLECTION_NAME] && globalThis$4[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var {
    Title: Title$6,
    Text: Text$5
  } = antd.Typography;
  var BRAND_LOGO$3 = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';
  var BRAND_GREEN$1 = '#02CD8D'; // EVzone green

  /**
   * Props:
   *  - transactionDetails: {
   *      merchantName, merchantLogo, billedCurrency, totalBilling, billedAmount, type, id, particulars
   *    }
   *  - onConfirm: () => void
   *  - onCancel?: () => void
   *  - width?: number (default 520)
   */
  function TransactionSummary(_ref) {
    var _ref2, _d$totalBilling, _d$billedAmount;
    var {
      transactionDetails,
      onConfirm,
      onCancel,
      width = 520
    } = _ref;
    var d = transactionDetails || {};
    var currency = d.billedCurrency || 'UGX';
    var total = (_ref2 = (_d$totalBilling = d.totalBilling) !== null && _d$totalBilling !== void 0 ? _d$totalBilling : d.billedAmount) !== null && _ref2 !== void 0 ? _ref2 : 0;
    var amountStr = v => Number(v || 0).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return /*#__PURE__*/React.createElement(antd.Modal, {
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
      closeIcon: /*#__PURE__*/React.createElement("span", {
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
        }
      }, /*#__PURE__*/React.createElement(icons.CloseOutlined, null))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(antd.Avatar, {
      src: BRAND_LOGO$3,
      size: 28
    }), /*#__PURE__*/React.createElement(Text$5, {
      strong: true,
      style: {
        fontSize: 16
      }
    }, "EVzone Pay")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px dashed #e5e7eb',
        margin: '12px -20px 16px'
      }
    }), /*#__PURE__*/React.createElement(antd.Space, {
      direction: "vertical",
      align: "center",
      style: {
        width: '100%',
        marginBottom: 8
      }
    }, d.merchantLogo ? /*#__PURE__*/React.createElement(antd.Avatar, {
      src: d.merchantLogo,
      size: 56
    }) : /*#__PURE__*/React.createElement(antd.Avatar, {
      size: 56
    }, (d.merchantName || 'E')[0]), /*#__PURE__*/React.createElement(Title$6, {
      level: 4,
      style: {
        margin: 0
      }
    }, d.merchantName || 'Unknown Merchant'), /*#__PURE__*/React.createElement(Text$5, {
      type: "secondary",
      style: {
        marginTop: -4
      }
    }, "Total Billing"), /*#__PURE__*/React.createElement(Title$6, {
      level: 3,
      style: {
        margin: 0,
        color: BRAND_GREEN$1
      }
    }, currency, " ", amountStr(total))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Title$6, {
      level: 5,
      style: {
        marginBottom: 8
      }
    }, "Transaction Details"), /*#__PURE__*/React.createElement(KV, {
      label: "Type",
      value: d.type || 'Booking'
    }), /*#__PURE__*/React.createElement(KV, {
      label: "To",
      value: d.id
    }), /*#__PURE__*/React.createElement(KV, {
      label: "Particulars",
      value: d.particulars || 'Hotel Booking'
    }), /*#__PURE__*/React.createElement(KV, {
      label: "Billed Currency",
      value: currency
    }), /*#__PURE__*/React.createElement(KV, {
      label: "Billed Amount",
      value: "".concat(currency, " ").concat(amountStr((_d$billedAmount = d.billedAmount) !== null && _d$billedAmount !== void 0 ? _d$billedAmount : total))
    }), /*#__PURE__*/React.createElement(KV, {
      label: /*#__PURE__*/React.createElement("strong", null, "Total Billing"),
      value: /*#__PURE__*/React.createElement("strong", {
        style: {
          color: BRAND_GREEN$1
        }
      }, currency, " ", amountStr(total)),
      withTopBorder: true
    })), /*#__PURE__*/React.createElement(antd.Button, {
      type: "primary",
      size: "large",
      shape: "round",
      block: true,
      style: {
        marginTop: 16
      },
      onClick: onConfirm
    }, "Confirm"));
  }

  /** Left/right row used above */
  function KV(_ref3) {
    var {
      label,
      value,
      withTopBorder = false
    } = _ref3;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 12,
        padding: '8px 4px',
        borderTop: withTopBorder ? '1px solid #eee' : undefined
      }
    }, /*#__PURE__*/React.createElement(Text$5, {
      type: "secondary"
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(Text$5, null, value)));
  }

  var uncurryThis$5 = functionUncurryThis;

  // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue$1 = uncurryThis$5(1.0.valueOf);

  var classof$1 = classof$4;

  var $String$1 = String;

  var toString$4 = function (argument) {
    if (classof$1(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
  var toString$3 = toString$4;
  var requireObjectCoercible$2 = requireObjectCoercible$6;

  var $RangeError$1 = RangeError;

  // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = toString$3(requireObjectCoercible$2(this));
    var result = '';
    var n = toIntegerOrInfinity$3(count);
    if (n < 0 || n === Infinity) throw new $RangeError$1('Wrong number of repetitions');
    for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };

  var $$1 = _export;
  var uncurryThis$4 = functionUncurryThis;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;
  var thisNumberValue = thisNumberValue$1;
  var $repeat = stringRepeat;
  var fails$5 = fails$i;

  var $RangeError = RangeError;
  var $String = String;
  var floor$1 = Math.floor;
  var repeat = uncurryThis$4($repeat);
  var stringSlice$4 = uncurryThis$4(''.slice);
  var nativeToFixed = uncurryThis$4(1.0.toFixed);

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
      c2 = floor$1(c2 / 1e7);
    }
  };

  var divide = function (data, n) {
    var index = 6;
    var c = 0;
    while (--index >= 0) {
      c += data[index];
      data[index] = floor$1(c / n);
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

  var FORCED = fails$5(function () {
    return nativeToFixed(0.00008, 3) !== '0.000' ||
      nativeToFixed(0.9, 0) !== '1' ||
      nativeToFixed(1.255, 2) !== '1.25' ||
      nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
  }) || !fails$5(function () {
    // V8 ~ Android 4.3-
    nativeToFixed({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  $$1({ target: 'Number', proto: true, forced: FORCED }, {
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
          : stringSlice$4(result, 0, k - fractDigits) + '.' + stringSlice$4(result, k - fractDigits));
      } else {
        result = sign + result;
      } return result;
    }
  });

  var anObject$2 = anObject$c;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$2(this);
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

  var fails$4 = fails$i;
  var globalThis$3 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = globalThis$3.RegExp;

  var UNSUPPORTED_Y$1 = fails$4(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') !== null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  UNSUPPORTED_Y$1 || fails$4(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$4(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') !== null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET};

  var fails$3 = fails$i;
  var globalThis$2 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = globalThis$2.RegExp;

  var regexpUnsupportedDotAll = fails$3(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.test('\n') && re.flags === 's');
  });

  var fails$2 = fails$i;
  var globalThis$1 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = globalThis$1.RegExp;

  var regexpUnsupportedNcg = fails$2(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$3 = functionCall;
  var uncurryThis$3 = functionUncurryThis;
  var toString$2 = toString$4;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared = shared$4;
  var create = objectCreate;
  var getInternalState = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$3 = uncurryThis$3(''.charAt);
  var indexOf = uncurryThis$3(''.indexOf);
  var replace$1 = uncurryThis$3(''.replace);
  var stringSlice$3 = uncurryThis$3(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$3(nativeExec, re1, 'a');
    call$3(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString$2(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$3(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$3(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$1(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$3(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
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

      match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$3(match.input, charsAdded);
          match[0] = stringSlice$3(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$3(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $ = _export;
  var exec = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
    exec: exec
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var call$2 = functionCall;
  var defineBuiltIn = defineBuiltIn$6;
  var regexpExec$1 = regexpExec$2;
  var fails$1 = fails$i;
  var wellKnownSymbol$1 = wellKnownSymbol$g;
  var createNonEnumerableProperty = createNonEnumerableProperty$5;

  var SPECIES = wellKnownSymbol$1('species');
  var RegExpPrototype = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$1(KEY);

    var DELEGATES_TO_SYMBOL = !fails$1(function () {
      // String methods call symbol-named RegExp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) !== 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
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
        re.constructor[SPECIES] = function () { return re; };
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
        if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: call$2(nativeRegExpMethod, regexp, str, arg2) };
          }
          return { done: true, value: call$2(nativeMethod, str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn(String.prototype, KEY, methods[0]);
      defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
  };

  var uncurryThis$2 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;
  var toString$1 = toString$4;
  var requireObjectCoercible$1 = requireObjectCoercible$6;

  var charAt$2 = uncurryThis$2(''.charAt);
  var charCodeAt = uncurryThis$2(''.charCodeAt);
  var stringSlice$2 = uncurryThis$2(''.slice);

  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$1(requireObjectCoercible$1($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$2(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$2(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$1 = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  var uncurryThis$1 = functionUncurryThis;
  var toObject = toObject$3;

  var floor = Math.floor;
  var charAt = uncurryThis$1(''.charAt);
  var replace = uncurryThis$1(''.replace);
  var stringSlice$1 = uncurryThis$1(''.slice);
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
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$1(str, 0, position);
        case "'": return stringSlice$1(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$1(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var call$1 = functionCall;
  var anObject$1 = anObject$c;
  var isCallable$1 = isCallable$l;
  var classof = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$1(exec)) {
      var result = call$1(exec, R, S);
      if (result !== null) anObject$1(result);
      return result;
    }
    if (classof(R) === 'RegExp') return call$1(regexpExec, R, S);
    throw new $TypeError('RegExp#exec called on incompatible receiver');
  };

  var apply = functionApply;
  var call = functionCall;
  var uncurryThis = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails = fails$i;
  var anObject = anObject$c;
  var isCallable = isCallable$l;
  var isNullOrUndefined = isNullOrUndefined$5;
  var toIntegerOrInfinity = toIntegerOrInfinity$6;
  var toLength = toLength$2;
  var toString = toString$4;
  var requireObjectCoercible = requireObjectCoercible$6;
  var advanceStringIndex = advanceStringIndex$1;
  var getMethod = getMethod$4;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol = wellKnownSymbol$g;

  var REPLACE = wellKnownSymbol('replace');
  var max = Math.max;
  var min = Math.min;
  var concat = uncurryThis([].concat);
  var push = uncurryThis([].push);
  var stringIndexOf = uncurryThis(''.indexOf);
  var stringSlice = uncurryThis(''.slice);

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

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
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
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? call(replacer, searchValue, O, replaceValue)
          : call(nativeReplace, toString(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString(replaceValue);

        var global = rx.global;
        var fullUnicode;
        if (global) {
          fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }

        var results = [];
        var result;
        while (true) {
          result = regExpExec(rx, S);
          if (result === null) break;

          push(results, result);
          if (!global) break;

          var matchStr = toString(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          var replacement;
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            replacement = toString(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }

        return accumulatedResult + stringSlice(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var {
    Title: Title$5,
    Text: Text$4
  } = antd.Typography;
  var BRAND_LOGO$2 = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';
  var BRAND_GREEN = '#02CD8D';

  // tweak if needed to match copy in the mock
  var TAX_RATE = 0.005; // 0.5%
  var FEE_RATE = 0.005; // 0.5%

  /**
   * Props:
   *  - passcode: string
   *  - setPasscode: (s: string) => void
   *  - transactionDetails: { merchantName, merchantLogo, id, billedCurrency, totalBilling }
   *  - onSubmit: () => void
   *  - onBack: () => void
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
      width = 520
    } = _ref;
    var d = transactionDetails || {};
    var currency = d.billedCurrency || 'UGX';
    var total = Number((_d$totalBilling = d.totalBilling) !== null && _d$totalBilling !== void 0 ? _d$totalBilling : 0);
    var tax = total * TAX_RATE;
    var fee = total * FEE_RATE;
    var onChange = e => {
      var digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 6);
      setPasscode(digitsOnly);
    };
    return /*#__PURE__*/React.createElement(antd.Modal, {
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
      closeIcon: /*#__PURE__*/React.createElement("span", {
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
        }
      }, /*#__PURE__*/React.createElement(icons.CloseOutlined, null))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(antd.Avatar, {
      src: BRAND_LOGO$2,
      size: 28
    }), /*#__PURE__*/React.createElement(Text$4, {
      strong: true,
      style: {
        fontSize: 16
      }
    }, "EVzone Pay")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px dashed #e5e7eb',
        margin: '12px -20px 16px'
      }
    }), /*#__PURE__*/React.createElement(Title$5, {
      level: 4,
      style: {
        marginTop: 0,
        color: BRAND_GREEN
      }
    }, "Merchant Info :"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(antd.Space, {
      align: "center"
    }, d.merchantLogo ? /*#__PURE__*/React.createElement(antd.Avatar, {
      src: d.merchantLogo,
      size: 40
    }) : /*#__PURE__*/React.createElement(antd.Avatar, {
      size: 40
    }, (d.merchantName || 'E')[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, d.merchantName || 'Unknown Merchant'), /*#__PURE__*/React.createElement(Text$4, {
      type: "secondary",
      style: {
        fontSize: 12
      }
    }, d.id))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(Text$4, {
      type: "secondary",
      style: {
        display: 'block',
        fontSize: 12
      }
    }, "Amount"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, currency, " ", total.toLocaleString()))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '6px 0 6px'
      }
    }, /*#__PURE__*/React.createElement(Text$4, null, "Enter Passcode")), /*#__PURE__*/React.createElement(antd.Input.Password, {
      value: passcode,
      onChange: onChange,
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
      maxLength: 6,
      inputMode: "numeric",
      autoComplete: "one-time-code",
      iconRender: visible => visible ? /*#__PURE__*/React.createElement(icons.EyeTwoTone, null) : /*#__PURE__*/React.createElement(icons.EyeInvisibleOutlined, null),
      style: {
        height: 40,
        letterSpacing: 4,
        fontWeight: 600
      },
      onPressEnter: () => passcode.length === 6 && onSubmit()
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#e6f4ff',
        borderRadius: 8,
        padding: 12,
        marginTop: 12,
        display: 'grid',
        gridTemplateColumns: '20px 1fr',
        alignItems: 'flex-start',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(icons.InfoCircleFilled, {
      style: {
        color: '#1677ff',
        fontSize: 18,
        lineHeight: '20px'
      }
    }), /*#__PURE__*/React.createElement(Text$4, {
      style: {
        color: '#1f1f1f'
      }
    }, "You are making a payment to ", /*#__PURE__*/React.createElement("b", null, d.merchantName || 'Unknown Merchant'), " and amount", ' ', /*#__PURE__*/React.createElement("b", null, currency, " ", total.toLocaleString()), " will be deducted off your wallet, including", ' ', /*#__PURE__*/React.createElement("b", null, (TAX_RATE * 100).toFixed(1), "% tax"), " (", currency, " ", tax.toFixed(0), ") and", ' ', /*#__PURE__*/React.createElement("b", null, (FEE_RATE * 100).toFixed(1), "% wallet fee"), " (", currency, " ", fee.toFixed(0), ").")), /*#__PURE__*/React.createElement(antd.Button, {
      type: "primary",
      size: "large",
      shape: "round",
      block: true,
      style: {
        marginTop: 14
      },
      disabled: passcode.length !== 6,
      onClick: onSubmit
    }, "Confirm"), /*#__PURE__*/React.createElement(antd.Button, {
      size: "large",
      shape: "round",
      block: true,
      danger: true,
      ghost: true,
      style: {
        marginTop: 10
      },
      onClick: onBack
    }, "Back"));
  }

  // src/PaymentSuccessModal.js
  var {
    Title: Title$4
  } = antd.Typography;
  function PaymentSuccessModal(_ref) {
    var {
      open = true,
      onClose,
      amount,
      // optional
      currency = 'UGX',
      // optional
      zIndex = 2000,
      width = 480,
      showAmount = false // set true if you want to display the amount
    } = _ref;
    return /*#__PURE__*/React.createElement(antd.Modal, {
      open: open,
      centered: true,
      width: width,
      footer: null,
      onCancel: onClose,
      zIndex: zIndex,
      maskClosable: false,
      title: null,
      bodyStyle: {
        padding: 24,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "evz-success-circle",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "34",
      height: "34",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6L9 17l-5-5",
      stroke: "#fff",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement(Title$4, {
      level: 4,
      style: {
        marginTop: 12,
        marginBottom: 16
      }
    }, "Payment Successful"), showAmount && typeof amount === 'number' && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12,
        color: '#667085'
      }
    }, currency, " ", Number(amount).toLocaleString(undefined, {
      minimumFractionDigits: 0
    })), /*#__PURE__*/React.createElement(antd.Button, {
      type: "primary",
      size: "large",
      shape: "round",
      block: true,
      onClick: onClose,
      style: {
        fontWeight: 600
      }
    }, "Done"), /*#__PURE__*/React.createElement("style", null, "\n        .evz-success-circle {\n          margin: 4px auto 8px;\n          width: 84px;\n          height: 84px;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          background: linear-gradient(180deg, #2F80ED 0%, #56CCF2 100%);\n          box-shadow: 0 8px 30px rgba(47,128,237,0.35);\n          animation: evzPop .28s ease-out;\n        }\n        @keyframes evzPop {\n          0% { transform: scale(.9); opacity: .6; }\n          100% { transform: scale(1); opacity: 1; }\n        }\n      "));
  }

  // src/PaymentFailedModal.js
  var {
    Title: Title$3,
    Paragraph: Paragraph$1,
    Text: Text$3
  } = antd.Typography;
  var BRAND_LOGO$1 = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';
  var BRAND_RED$1 = '#ff4d4f';
  function PaymentFailedModal(_ref) {
    var {
      open = true,
      onClose,
      onDetails,
      // optional: custom handler for the "Details" button
      zIndex = 2000,
      width = 460
    } = _ref;
    return /*#__PURE__*/React.createElement(antd.Modal, {
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
      closeIcon: /*#__PURE__*/React.createElement("span", {
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
        }
      }, /*#__PURE__*/React.createElement(icons.CloseOutlined, null))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(antd.Avatar, {
      src: BRAND_LOGO$1,
      size: 28
    }), /*#__PURE__*/React.createElement(Text$3, {
      strong: true,
      style: {
        fontSize: 16
      }
    }, "EVzone Pay")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px dashed #e5e7eb',
        margin: '12px -20px 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: BRAND_RED$1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 12px',
        boxShadow: '0 6px 16px rgba(255,77,79,0.28)'
      }
    }, /*#__PURE__*/React.createElement(icons.CloseOutlined, {
      style: {
        color: '#fff',
        fontSize: 34,
        fontWeight: 700
      }
    })), /*#__PURE__*/React.createElement(antd.Space, {
      direction: "vertical",
      align: "center",
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Title$3, {
      level: 4,
      style: {
        margin: 0,
        color: BRAND_RED$1
      }
    }, "Transaction Failed"), /*#__PURE__*/React.createElement(Paragraph$1, {
      style: {
        marginTop: 8,
        textAlign: 'center',
        color: '#444'
      }
    }, "We couldn\u2019t complete the payment. Please check your wallet for more details and try again."), /*#__PURE__*/React.createElement(antd.Button, {
      type: "primary",
      danger: true,
      shape: "round",
      size: "middle",
      onClick: onDetails || onClose,
      style: {
        width: 140
      }
    }, "Details")));
  }

  // src/InsufficientFundsModal.js
  var {
    Title: Title$2,
    Paragraph,
    Text: Text$2
  } = antd.Typography;
  var BRAND_LOGO = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';
  var BRAND_ORANGE = '#FF9800'; // icon + heading
  var BRAND_RED = '#ff4d4f'; // top-right close

  function InsufficientFundsModal(_ref) {
    var {
      open = true,
      onClose,
      onAddFunds,
      // optional custom handler; falls back to onClose
      zIndex = 2000,
      width = 460
    } = _ref;
    return /*#__PURE__*/React.createElement(antd.Modal, {
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
      closeIcon: /*#__PURE__*/React.createElement("span", {
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
        }
      }, /*#__PURE__*/React.createElement(icons.CloseOutlined, null))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(antd.Avatar, {
      src: BRAND_LOGO,
      size: 28
    }), /*#__PURE__*/React.createElement(Text$2, {
      strong: true,
      style: {
        fontSize: 16
      }
    }, "EVzone Pay")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px dashed #e5e7eb',
        margin: '12px -20px 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
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
      }
    }, /*#__PURE__*/React.createElement(icons.CloseOutlined, {
      style: {
        color: '#fff',
        fontSize: 34,
        fontWeight: 700
      }
    })), /*#__PURE__*/React.createElement(antd.Space, {
      direction: "vertical",
      align: "center",
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Title$2, {
      level: 3,
      style: {
        margin: 0,
        color: BRAND_ORANGE
      }
    }, "Insufficient Funds"), /*#__PURE__*/React.createElement(Paragraph, {
      style: {
        marginTop: 8,
        textAlign: 'center',
        color: '#444'
      }
    }, "The account did not have sufficient funds to cover the transaction amount at the time of the transaction"), /*#__PURE__*/React.createElement(antd.Button, {
      type: "primary",
      shape: "round",
      size: "middle",
      onClick: onAddFunds || onClose,
      style: {
        width: 160
      }
    }, "Add Funds")));
  }

  var {
    Title: Title$1,
    Text: Text$1
  } = antd.Typography;
  var LoadingOverlay = _ref => {
    var {
      open = true,
      tip = 'Preparing secure checkout…',
      logoSrc = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png',
      brand = 'EVzone Pay',
      zIndex = 2000,
      width = 420
    } = _ref;
    return /*#__PURE__*/React.createElement(antd.Modal, {
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
      }
    }, /*#__PURE__*/React.createElement(antd.Space, {
      direction: "vertical",
      align: "center",
      size: "large",
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "evz-pulse"
    }, /*#__PURE__*/React.createElement(antd.Avatar, {
      src: logoSrc,
      size: 96,
      style: {
        background: '#fff'
      }
    })), /*#__PURE__*/React.createElement(Title$1, {
      level: 3,
      style: {
        margin: '6px 0 0',
        fontWeight: 800,
        letterSpacing: '.2px',
        color: 'darkorange',
        textShadow: '0 2px 12px rgba(217,119,6,.35)',
        animation: 'evzBlink 1.6s ease-in-out infinite'
      }
    }, brand), tip ? /*#__PURE__*/React.createElement(Text$1, {
      className: "evz-tip"
    }, tip) : null), /*#__PURE__*/React.createElement("style", null, "\n        @keyframes evzBlink {\n          0%,100% { opacity: 1; filter: drop-shadow(0 0 0 rgba(217,119,6,0)); }\n          50%     { opacity: .72; filter: drop-shadow(0 0 6px rgba(217,119,6,.45)); }\n        }\n\n        .evz-pulse {\n          display: inline-flex;\n          padding: 6px;\n          border-radius: 50%;\n          background: radial-gradient(65% 65% at 50% 50%, rgba(2,205,141,.18), rgba(2,205,141,0) 70%);\n          position: relative;\n        }\n        .evz-pulse::before {\n          content: '';\n          position: absolute;\n          inset: -8px;\n          border-radius: 50%;\n          border: 2px solid rgba(2,205,141,.35);\n          animation: evzPulse 1.8s ease-out infinite;\n        }\n        @keyframes evzPulse {\n          0%   { transform: scale(.85); opacity: .6; }\n          70%  { transform: scale(1.15); opacity: 0; }\n          100% { transform: scale(1.15); opacity: 0; }\n        }\n\n        .evz-tip {\n          display: block;\n          margin-top: 2px;\n          font-size: 13px;\n          letter-spacing: .2px;\n          background: linear-gradient(90deg,#9aa6af 0%,#ccd3d8 50%,#9aa6af 100%);\n          -webkit-background-clip: text;\n          background-clip: text;\n          color: transparent;\n          background-size: 200% 100%;\n          animation: evzShimmer 2.2s linear infinite;\n        }\n        @keyframes evzShimmer {\n          0% { background-position: 200% 0; }\n          100% { background-position: -200% 0; }\n        }\n      "));
  };

  var {
    Title,
    Text
  } = antd.Typography;

  // Demo customers (unchanged)
  var SAMPLE_CUSTOMERS = {
    customer123: {
      name: 'John Doe',
      balance: 1000,
      passcode: '123456'
    },
    customer456: {
      name: 'Jane Smith',
      balance: 500,
      passcode: '567856'
    },
    customer789: {
      name: 'Alice Brown',
      balance: 50,
      passcode: '901256'
    },
    admin: {
      name: 'Admin User',
      balance: 2000,
      passcode: '234567'
    }
  };
  function validatePasscode(customerId, passcode) {
    var customer = SAMPLE_CUSTOMERS[customerId];
    if (!customer) return {
      success: false,
      reason: 'no_account'
    };
    if (customer.passcode !== passcode) return {
      success: false,
      reason: 'invalid_passcode'
    };
    return {
      success: true
    };
  }
  function buildTxnDetails(amount, id, type, particulars, currency, merchantName, merchantLogo) {
    return {
      type: type || 'Booking',
      id,
      particulars: particulars || 'Hotel Booking',
      billedCurrency: currency || 'UGX',
      billedAmount: amount,
      totalBilling: amount,
      merchantName: merchantName || 'Unknown Merchant',
      merchantLogo: merchantLogo || ''
    };
  }

  /**
   * Props:
   *  - skipAuth?: boolean (default true)
   *  - zIndex?: number (default 2000)
   *  - customerId?: string
   *  - amount (number), type, particulars, currency, merchantName, merchantLogo
   *  - onClose?: () => void
   *  - onSuccess?: (receipt) => void
   */
  function WalletPaymentForm(_ref) {
    var {
      skipAuth = true,
      zIndex = 2000,
      customerId: propCustomerId,
      amount,
      type,
      particulars,
      currency,
      merchantName,
      merchantLogo,
      onClose: _onClose,
      onSuccess
    } = _ref;
    var [view, setView] = React.useState('loading'); // 'loading' | 'summary' | 'passcode' | 'success' | 'failed' | 'insufficient' | 'invalid'
    var [passcode, setPasscode] = React.useState('');
    var [submitting, setSubmitting] = React.useState(false);
    var [txnId] = React.useState(() => "W-".concat(Math.floor(Math.random() * 1000000000)));
    var [effectiveCustomerId, setEffectiveCustomerId] = React.useState(propCustomerId);
    var amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;

    // Reusable motion props for ALL AntD modals (smooth, subtle)
    var modalMotion = {
      transitionName: 'evz-zoom',
      maskTransitionName: 'evz-fade',
      destroyOnClose: true,
      zIndex
    };

    // 7s uniform loading (kept for parity with your flow)
    var boot = React.useCallback(/*#__PURE__*/_asyncToGenerator(function* () {
      var wait = ms => new Promise(r => setTimeout(r, ms));
      yield wait(7000);
      if (!amountValid) {
        setView('invalid');
        return;
      }
      var fallbackId = propCustomerId && SAMPLE_CUSTOMERS[propCustomerId] && propCustomerId || 'admin';
      if (skipAuth) {
        setEffectiveCustomerId(fallbackId);
        setView('summary');
      } else {
        setEffectiveCustomerId(fallbackId);
        setView('summary');
      }
    }), [propCustomerId, skipAuth, amountValid]);
    React.useEffect(() => {
      setView('loading');
      boot();
    }, [boot]);
    var details = React.useMemo(() => buildTxnDetails(amount, txnId, type, particulars, currency, merchantName, merchantLogo), [amount, txnId, type, particulars, currency, merchantName, merchantLogo]);
    var handleConfirm = () => {
      var customer = SAMPLE_CUSTOMERS[effectiveCustomerId];
      if (customer && customer.balance < amount) {
        setView('insufficient');
      } else {
        setView('passcode');
      }
    };
    var handleSubmit = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* () {
        if (passcode.length !== 6) return;
        setSubmitting(true);
        try {
          var result = validatePasscode(effectiveCustomerId, passcode);
          if (result.success) {
            SAMPLE_CUSTOMERS[effectiveCustomerId].balance -= amount; // demo-only
            setView('success');
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess({
              transactionId: txnId,
              amount,
              currency: details.billedCurrency,
              type: details.type,
              particulars: details.particulars,
              customerId: effectiveCustomerId
            });
          } else {
            setView('failed');
            setTimeout(() => {
              setView('summary');
              setPasscode('');
            }, 3000);
          }
        } finally {
          setSubmitting(false);
        }
      });
      return function handleSubmit() {
        return _ref3.apply(this, arguments);
      };
    }();
    var closeAndReset = () => {
      setPasscode('');
      setView('summary');
      _onClose === null || _onClose === void 0 ? void 0 : _onClose();
    };

    // ----------- Render helpers -----------
    var renderLoading = () => /*#__PURE__*/React.createElement(LoadingOverlay, {
      open: true,
      zIndex: zIndex,
      brand: "EVzone Pay",
      tip: "Preparing secure checkout\u2026"
    });
    var renderInvalid = () => /*#__PURE__*/React.createElement(antd.Modal, _extends({
      open: true,
      centered: true,
      footer: null,
      onCancel: closeAndReset,
      maskClosable: false
    }, modalMotion), /*#__PURE__*/React.createElement(antd.Space, {
      direction: "vertical",
      align: "center",
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Title, {
      level: 4,
      style: {
        margin: 0
      }
    }, "Invalid Amount"), /*#__PURE__*/React.createElement(Text, {
      type: "secondary"
    }, "The transaction amount is missing or invalid."), /*#__PURE__*/React.createElement(antd.Button, {
      type: "primary",
      onClick: closeAndReset
    }, "Close")));

    // ⬇️ Transaction summary
    var renderSummary = () => /*#__PURE__*/React.createElement(TransactionSummary, {
      transactionDetails: details,
      onConfirm: handleConfirm,
      onCancel: closeAndReset
      // if your component supports it, spread to its underlying <Modal />
      ,
      modalProps: modalMotion
    });

    // ⬇️ Enter passcode
    var renderPasscode = () => /*#__PURE__*/React.createElement(EnterPasscode, {
      passcode: passcode,
      setPasscode: setPasscode,
      transactionDetails: details,
      onSubmit: handleSubmit,
      onBack: () => setView('summary')
      // forward motion props if supported
      ,
      modalProps: modalMotion,
      submitting: submitting
    });

    // ---------- Router ----------
    if (view === 'loading') return renderLoading();
    if (view === 'invalid') return renderInvalid();
    if (view === 'summary') return renderSummary();
    if (view === 'passcode') return renderPasscode();
    if (view === 'success') {
      return /*#__PURE__*/React.createElement(PaymentSuccessModal, _extends({
        open: true,
        amount: amount,
        currency: details.billedCurrency,
        onClose: () => {
          setView('summary');
          _onClose === null || _onClose === void 0 ? void 0 : _onClose();
        }
      }, modalMotion));
    }
    if (view === 'failed') {
      return /*#__PURE__*/React.createElement(PaymentFailedModal, _extends({
        open: true,
        onClose: () => setView('summary')
      }, modalMotion));
    }
    if (view === 'insufficient') {
      return /*#__PURE__*/React.createElement(InsufficientFundsModal, _extends({
        open: true,
        onClose: () => setView('summary')
      }, modalMotion));
    }
    return null;
  }

  /* -------- Global smooth motion (scoped to this file) -------- */

  exports.WalletPaymentForm = WalletPaymentForm;
  exports.default = WalletPaymentForm;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=WalletPaymentForm.umd.js.map
