import require$$0, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { Typography, Modal, Space, Avatar, Button, Input } from 'antd';
import { CloseOutlined, EyeTwoTone, EyeInvisibleOutlined, InfoCircleFilled } from '@ant-design/icons';

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

var fails$l = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$k = fails$l;

var functionBindNative = !fails$k(function () {
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

var uncurryThis$n = functionUncurryThis;

var toString$a = uncurryThis$n({}.toString);
var stringSlice$8 = uncurryThis$n(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$8(toString$a(it), 8, -1);
};

var uncurryThis$m = functionUncurryThis;
var fails$j = fails$l;
var classof$7 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$m(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$j(function () {
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

var $TypeError$e = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$9 = function (it) {
  if (isNullOrUndefined$5(it)) throw new $TypeError$e("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$8 = requireObjectCoercible$9;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$8(it));
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

var globalThis$o = globalThis_1;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(globalThis$o, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis$o[key] = value;
  } return value;
};

var globalThis$n = globalThis_1;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = sharedStore.exports = globalThis$n[SHARED] || defineGlobalProperty$2(SHARED, {});

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

var requireObjectCoercible$7 = requireObjectCoercible$9;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$3(requireObjectCoercible$7(argument));
};

var uncurryThis$l = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$l({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$k = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$9 = uncurryThis$k(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$9(++id + postfix, 36);
};

var globalThis$m = globalThis_1;

var navigator = globalThis$m.navigator;
var userAgent$5 = navigator && navigator.userAgent;

var environmentUserAgent = userAgent$5 ? String(userAgent$5) : '';

var globalThis$l = globalThis_1;
var userAgent$4 = environmentUserAgent;

var process$4 = globalThis$l.process;
var Deno$1 = globalThis$l.Deno;
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
var fails$i = fails$l;
var globalThis$k = globalThis_1;

var $String$6 = globalThis$k.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$i(function () {
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

var globalThis$j = globalThis_1;
var shared$3 = shared$4;
var hasOwn$b = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$1 = globalThis$j.Symbol;
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
var $TypeError$d = TypeError;

// `Assert: Type(argument) is Object`
var anObject$e = function (argument) {
  if (isObject$b(argument)) return argument;
  throw new $TypeError$d($String$5(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$h = fails$l;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var DESCRIPTORS$c = descriptors;
var fails$g = fails$l;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$c && fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var objectDefineProperty = {};

var globalThis$i = globalThis_1;
var isObject$a = isObject$c;

var document$3 = globalThis$i.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$a(document$3) && isObject$a(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$b = descriptors;
var fails$f = fails$l;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$b && !fails$f(function () {
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

var globalThis$h = globalThis_1;
var isCallable$k = isCallable$m;

var aFunction = function (argument) {
  return isCallable$k(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis$h[namespace]) : globalThis$h[namespace] && globalThis$h[namespace][method];
};

var uncurryThis$j = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$j({}.isPrototypeOf);

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

var tryToString$4 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$i = isCallable$m;
var tryToString$3 = tryToString$4;

var $TypeError$c = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$8 = function (argument) {
  if (isCallable$i(argument)) return argument;
  throw new $TypeError$c(tryToString$3(argument) + ' is not a function');
};

var aCallable$7 = aCallable$8;
var isNullOrUndefined$4 = isNullOrUndefined$6;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$4(func) ? undefined : aCallable$7(func);
};

var call$h = functionCall;
var isCallable$h = isCallable$m;
var isObject$9 = isObject$c;

var $TypeError$b = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$h(fn = input.toString) && !isObject$9(val = call$h(fn, input))) return val;
  if (isCallable$h(fn = input.valueOf) && !isObject$9(val = call$h(fn, input))) return val;
  if (pref !== 'string' && isCallable$h(fn = input.toString) && !isObject$9(val = call$h(fn, input))) return val;
  throw new $TypeError$b("Can't convert object to primitive value");
};

var call$g = functionCall;
var isObject$8 = isObject$c;
var isSymbol$1 = isSymbol$2;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$i = wellKnownSymbol$j;

var $TypeError$a = TypeError;
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
    throw new $TypeError$a("Can't convert object to primitive value");
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

var $TypeError$9 = TypeError;
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
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$9('Accessors not supported');
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
var min$4 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$5(index);
  return integer < 0 ? max$1(integer + length, 0) : min$4(integer, length);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;

var min$3 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$5 = function (argument) {
  var len = toIntegerOrInfinity$4(argument);
  return len > 0 ? min$3(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$4 = toLength$5;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength$4(obj.length);
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

var uncurryThis$i = functionUncurryThis;
var hasOwn$a = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$1 = uncurryThis$i([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$a(hiddenKeys$3, key) && hasOwn$a(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
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
var addToUnscopables$1 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var globalThis$g = globalThis_1;
var isCallable$g = isCallable$m;

var WeakMap$1 = globalThis$g.WeakMap;

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
var globalThis$f = globalThis_1;
var isObject$7 = isObject$c;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStoreExports;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = globalThis$f.TypeError;
var WeakMap = globalThis$f.WeakMap;
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
var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$4(this, V);
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

var uncurryThis$h = functionUncurryThis;
var isCallable$f = isCallable$m;
var store = sharedStoreExports;

var functionToString = uncurryThis$h(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$f(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store.inspectSource;

var uncurryThis$g = functionUncurryThis;
var fails$e = fails$l;
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
var stringSlice$7 = uncurryThis$g(''.slice);
var replace$3 = uncurryThis$g(''.replace);
var join = uncurryThis$g([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$e(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$7($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$3($String$3(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
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
var uncurryThis$f = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$a = anObject$e;

var concat$2 = uncurryThis$f([].concat);

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

var fails$d = fails$l;
var isCallable$c = isCallable$m;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$c(detection) ? fails$d(detection)
    : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var globalThis$e = globalThis_1;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
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
    target = globalThis$e;
  } else if (STATIC) {
    target = globalThis$e[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis$e[TARGET] && globalThis$e[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$3(target, key);
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

var fails$c = fails$l;

var correctPrototypeGetter = !fails$c(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$4 = hasOwnProperty_1;
var isCallable$b = isCallable$m;
var toObject$2 = toObject$4;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$2(O);
  if (hasOwn$4(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$b(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$b = fails$l;
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

var NEW_ITERATOR_PROTOTYPE = !isObject$6(IteratorPrototype$2) || fails$b(function () {
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

var uncurryThis$e = functionUncurryThis;
var aCallable$6 = aCallable$8;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$e(aCallable$6(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isObject$5 = isObject$c;

var isPossiblePrototype$1 = function (argument) {
  return isObject$5(argument) || argument === null;
};

var isPossiblePrototype = isPossiblePrototype$1;

var $String$2 = String;
var $TypeError$8 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError$8("Can't set " + $String$2(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var isObject$4 = isObject$c;
var requireObjectCoercible$6 = requireObjectCoercible$9;
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
    requireObjectCoercible$6(O);
    aPossiblePrototype(proto);
    if (!isObject$4(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$c = _export;
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

var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
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
  if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
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
    } else $$c({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
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
var addToUnscopables = addToUnscopables$1;
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
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$4 && values.name !== 'values') try {
  defineProperty$3(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

/* global Bun, Deno -- detection */
var globalThis$d = globalThis_1;
var userAgent$3 = environmentUserAgent;
var classof$6 = classofRaw$2;

var userAgentStartsWith = function (string) {
  return userAgent$3.slice(0, string.length) === string;
};

var environment = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis$d.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis$d.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof$6(globalThis$d.process) === 'process') return 'NODE';
  if (globalThis$d.window && globalThis$d.document) return 'BROWSER';
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
var wellKnownSymbol$d = wellKnownSymbol$j;
var DESCRIPTORS$3 = descriptors;

var SPECIES$3 = wellKnownSymbol$d('species');

var setSpecies$2 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$3 && Constructor && !Constructor[SPECIES$3]) {
    defineBuiltInAccessor(Constructor, SPECIES$3, {
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

var wellKnownSymbol$c = wellKnownSymbol$j;

var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$8 = isCallable$m;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$b = wellKnownSymbol$j;

var TO_STRING_TAG = wellKnownSymbol$b('toStringTag');
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
var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) === 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
};

var uncurryThis$d = functionUncurryThis;
var fails$a = fails$l;
var isCallable$7 = isCallable$m;
var classof$4 = classof$5;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$d(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  switch (classof$4(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$a(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$2 = tryToString$4;

var $TypeError$6 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError$6(tryToString$2(argument) + ' is not a constructor');
};

var anObject$9 = anObject$e;
var aConstructor = aConstructor$1;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var wellKnownSymbol$a = wellKnownSymbol$j;

var SPECIES$2 = wellKnownSymbol$a('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$9(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$3(S = anObject$9(C)[SPECIES$2]) ? defaultConstructor : aConstructor(S);
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$d = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$d.bind(apply$2) : function () {
  return call$d.apply(apply$2, arguments);
});

var classofRaw = classofRaw$2;
var uncurryThis$c = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$c(fn);
};

var uncurryThis$b = functionUncurryThisClause;
var aCallable$5 = aCallable$8;
var NATIVE_BIND = functionBindNative;

var bind$4 = uncurryThis$b(uncurryThis$b.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$5(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$4(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var uncurryThis$a = functionUncurryThis;

var arraySlice$1 = uncurryThis$a([].slice);

var $TypeError$5 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw new $TypeError$5('Not enough arguments');
  return passed;
};

var userAgent$2 = environmentUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var globalThis$c = globalThis_1;
var apply$1 = functionApply;
var bind$3 = functionBindContext;
var isCallable$6 = isCallable$m;
var hasOwn$2 = hasOwnProperty_1;
var fails$9 = fails$l;
var html = html$2;
var arraySlice = arraySlice$1;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = environmentIsIos;
var IS_NODE$2 = environmentIsNode;

var set = globalThis$c.setImmediate;
var clear = globalThis$c.clearImmediate;
var process$3 = globalThis$c.process;
var Dispatch = globalThis$c.Dispatch;
var Function$1 = globalThis$c.Function;
var MessageChannel = globalThis$c.MessageChannel;
var String$1 = globalThis$c.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails$9(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis$c.location;
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
  globalThis$c.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$6(handler) ? handler : Function$1(handler);
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
    globalThis$c.addEventListener &&
    isCallable$6(globalThis$c.postMessage) &&
    !globalThis$c.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$9(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis$c.addEventListener('message', eventListener, false);
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

var globalThis$b = globalThis_1;
var DESCRIPTORS$2 = descriptors;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn$1 = function (name) {
  if (!DESCRIPTORS$2) return globalThis$b[name];
  var descriptor = getOwnPropertyDescriptor$2(globalThis$b, name);
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

var globalThis$a = globalThis_1;
var safeGetBuiltIn = safeGetBuiltIn$1;
var bind$2 = functionBindContext;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = environmentIsIos;
var IS_IOS_PEBBLE = environmentIsIosPebble;
var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
var IS_NODE$1 = environmentIsNode;

var MutationObserver = globalThis$a.MutationObserver || globalThis$a.WebKitMutationObserver;
var document$2 = globalThis$a.document;
var process$2 = globalThis$a.process;
var Promise$1 = globalThis$a.Promise;
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
    macrotask = bind$2(macrotask, globalThis$a);
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

var globalThis$9 = globalThis_1;

var promiseNativeConstructor = globalThis$9.Promise;

var globalThis$8 = globalThis_1;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$5 = isCallable$m;
var isForced$1 = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$9 = wellKnownSymbol$j;
var ENVIRONMENT = environment;
var V8_VERSION = environmentV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$1 = wellKnownSymbol$9('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$5(globalThis$8.PromiseRejectionEvent);

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

var $TypeError$4 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError$4('Bad Promise constructor');
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

var $$b = _export;
var IS_NODE = environmentIsNode;
var globalThis$7 = globalThis_1;
var call$c = functionCall;
var defineBuiltIn$4 = defineBuiltIn$8;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$4;
var setSpecies$1 = setSpecies$2;
var aCallable$3 = aCallable$8;
var isCallable$4 = isCallable$m;
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
var TypeError$1 = globalThis$7.TypeError;
var document$1 = globalThis$7.document;
var process$1 = globalThis$7.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$7.dispatchEvent);
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
  return isObject$3(it) && isCallable$4(then = it.then) ? then : false;
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
        call$c(then, result, resolve, reject);
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
    globalThis$7.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$7['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$c(task, globalThis$7, function () {
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
  call$c(task, globalThis$7, function () {
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
          call$c(then, value,
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
    call$c(Internal, this);
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
  Internal.prototype = defineBuiltIn$4(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$4(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$4(onRejected) && onRejected;
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

  if (isCallable$4(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$4(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$c(nativeThen, that, resolve, reject);
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
$$b({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag$1(PromiseConstructor, PROMISE, false);
setSpecies$1(PROMISE);

var wellKnownSymbol$8 = wellKnownSymbol$j;
var Iterators$1 = iterators;

var ITERATOR$3 = wellKnownSymbol$8('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$3] === it);
};

var classof$3 = classof$5;
var getMethod$3 = getMethod$5;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var Iterators = iterators;
var wellKnownSymbol$7 = wellKnownSymbol$j;

var ITERATOR$2 = wellKnownSymbol$7('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$2(it)) return getMethod$3(it, ITERATOR$2)
    || getMethod$3(it, '@@iterator')
    || Iterators[classof$3(it)];
};

var call$b = functionCall;
var aCallable$2 = aCallable$8;
var anObject$8 = anObject$e;
var tryToString$1 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$3 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$8(call$b(iteratorMethod, argument));
  throw new $TypeError$3(tryToString$1(argument) + ' is not iterable');
};

var call$a = functionCall;
var anObject$7 = anObject$e;
var getMethod$2 = getMethod$5;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$7(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$a(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$7(innerResult);
  return value;
};

var bind = functionBindContext;
var call$9 = functionCall;
var anObject$6 = anObject$e;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$2;
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
      anObject$6(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError$2(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$9(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$2(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$6 = wellKnownSymbol$j;

var ITERATOR$1 = wellKnownSymbol$6('iterator');
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

var $$a = _export;
var call$8 = functionCall;
var aCallable$1 = aCallable$8;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$a({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
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
        call$8($promiseResolve, C, promise).then(function (value) {
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

var $$9 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable$3 = isCallable$m;
var defineBuiltIn$3 = defineBuiltIn$8;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$9({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$3(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn$3(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$8 = _export;
var call$7 = functionCall;
var aCallable = aCallable$8;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$8({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call$7($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$7 = _export;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$7({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});

var anObject$5 = anObject$e;
var isObject$2 = isObject$c;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject$5(C);
  if (isObject$2(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$6 = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$6({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
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

var globalThis$6 = globalThis_1;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var setToStringTag = setToStringTag$4;
var wellKnownSymbol$5 = wellKnownSymbol$j;

var ITERATOR = wellKnownSymbol$5('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty$2(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
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
  handlePrototype(globalThis$6[COLLECTION_NAME] && globalThis$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
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
	    var React = require$$0,
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

// src/TransactionSummary.jsx
var {
  Title: Title$8,
  Text: Text$8
} = Typography;
var BRAND_GREEN$1 = '#02CD8D'; // EVzone green

/**
 * Props:
 *  - transactionDetails: {
 *      merchantName, merchantLogo, billedCurrency, totalBilling, billedAmount, type, id, particulars
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
  var amountStr = v => Number(v || 0).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, {
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
      children: /*#__PURE__*/jsxRuntimeExports.jsx(CloseOutlined, {})
    }),
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
      size: "sm"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        borderTop: '1px dashed #e5e7eb',
        margin: '12px -20px 16px'
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsxs(Space, {
      direction: "vertical",
      align: "center",
      style: {
        width: '100%',
        marginBottom: 8
      },
      children: [d.merchantLogo ? /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        src: d.merchantLogo,
        size: 56
      }) : /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        size: 56,
        children: (d.merchantName || 'E')[0]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$8, {
        level: 4,
        style: {
          margin: 0
        },
        children: d.merchantName || 'Unknown Merchant'
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$8, {
        type: "secondary",
        style: {
          marginTop: -4
        },
        children: "Total Billing"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(Title$8, {
        level: 3,
        style: {
          margin: 0,
          color: BRAND_GREEN$1
        },
        children: [currency, " ", amountStr(total)]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$8, {
        level: 5,
        style: {
          marginBottom: 8
        },
        children: "Transaction Details"
      }), /*#__PURE__*/jsxRuntimeExports.jsx(KV, {
        label: "Type",
        value: d.type || 'Booking'
      }), /*#__PURE__*/jsxRuntimeExports.jsx(KV, {
        label: "To",
        value: d.id
      }), /*#__PURE__*/jsxRuntimeExports.jsx(KV, {
        label: "Particulars",
        value: d.particulars || 'Hotel Booking'
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
            color: BRAND_GREEN$1
          },
          children: [currency, " ", amountStr(total)]
        }),
        withTopBorder: true
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
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
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$8, {
      type: "secondary",
      children: label
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        textAlign: 'right'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Text$8, {
        children: value
      })
    })]
  });
}

var uncurryThis$9 = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$1 = uncurryThis$9(1.0.valueOf);

var classof$2 = classof$5;

var $String$1 = String;

var toString$8 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
var toString$7 = toString$8;
var requireObjectCoercible$5 = requireObjectCoercible$9;

var $RangeError$1 = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString$7(requireObjectCoercible$5(this));
  var result = '';
  var n = toIntegerOrInfinity$3(count);
  if (n < 0 || n === Infinity) throw new $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $$5 = _export;
var uncurryThis$8 = functionUncurryThis;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails$8 = fails$l;

var $RangeError = RangeError;
var $String = String;
var floor$1 = Math.floor;
var repeat = uncurryThis$8($repeat);
var stringSlice$6 = uncurryThis$8(''.slice);
var nativeToFixed = uncurryThis$8(1.0.toFixed);

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

var FORCED = fails$8(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails$8(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$$5({ target: 'Number', proto: true, forced: FORCED }, {
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

var anObject$4 = anObject$e;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$4(this);
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

var fails$7 = fails$l;
var globalThis$5 = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = globalThis$5.RegExp;

var UNSUPPORTED_Y$2 = fails$7(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$7(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$7(function () {
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

var fails$6 = fails$l;
var globalThis$4 = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = globalThis$4.RegExp;

var regexpUnsupportedDotAll = fails$6(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});

var fails$5 = fails$l;
var globalThis$3 = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = globalThis$3.RegExp;

var regexpUnsupportedNcg = fails$5(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$6 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var toString$6 = toString$8;
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
var charAt$4 = uncurryThis$7(''.charAt);
var indexOf = uncurryThis$7(''.indexOf);
var replace$2 = uncurryThis$7(''.replace);
var stringSlice$5 = uncurryThis$7(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$6(nativeExec, re1, 'a');
  call$6(nativeExec, re2, 'a');
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
    var str = toString$6(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$6(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$6(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$2(flags, 'y', '');
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

    match = call$6(nativeExec, sticky ? reCopy : re, strCopy);

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
      call$6(nativeReplace, match[0], reCopy, function () {
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

var $$4 = _export;
var exec$1 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$4({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
  exec: exec$1
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var call$5 = functionCall;
var defineBuiltIn$2 = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$4 = fails$l;
var wellKnownSymbol$4 = wellKnownSymbol$j;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;

var SPECIES = wellKnownSymbol$4('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$4(KEY);

  var DELEGATES_TO_SYMBOL = !fails$4(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
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
      if ($exec === regexpExec$1 || $exec === RegExpPrototype$3.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call$5(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call$5(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$2(String.prototype, KEY, methods[0]);
    defineBuiltIn$2(RegExpPrototype$3, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$3[SYMBOL], 'sham', true);
};

var uncurryThis$6 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;
var toString$5 = toString$8;
var requireObjectCoercible$4 = requireObjectCoercible$9;

var charAt$3 = uncurryThis$6(''.charAt);
var charCodeAt = uncurryThis$6(''.charCodeAt);
var stringSlice$4 = uncurryThis$6(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$5(requireObjectCoercible$4($this));
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
  charAt: createMethod(true)
};

var charAt$2 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$2(S, index).length : 1);
};

var uncurryThis$5 = functionUncurryThis;
var toObject$1 = toObject$4;

var floor = Math.floor;
var charAt$1 = uncurryThis$5(''.charAt);
var replace$1 = uncurryThis$5(''.replace);
var stringSlice$3 = uncurryThis$5(''.slice);
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
    namedCaptures = toObject$1(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$1(replacement, symbols, function (match, ch) {
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
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$4 = functionCall;
var anObject$3 = anObject$e;
var isCallable$2 = isCallable$m;
var classof$1 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$1 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$2(exec)) {
    var result = call$4(exec, R, S);
    if (result !== null) anObject$3(result);
    return result;
  }
  if (classof$1(R) === 'RegExp') return call$4(regexpExec, R, S);
  throw new $TypeError$1('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call$3 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$3 = fails$l;
var anObject$2 = anObject$e;
var isCallable$1 = isCallable$m;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var toIntegerOrInfinity = toIntegerOrInfinity$6;
var toLength$3 = toLength$5;
var toString$4 = toString$8;
var requireObjectCoercible$3 = requireObjectCoercible$9;
var advanceStringIndex$1 = advanceStringIndex$2;
var getMethod$1 = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$3 = wellKnownSymbol$j;

var REPLACE = wellKnownSymbol$3('replace');
var max = Math.max;
var min$2 = Math.min;
var concat$1 = uncurryThis$4([].concat);
var push = uncurryThis$4([].push);
var stringIndexOf$1 = uncurryThis$4(''.indexOf);
var stringSlice$2 = uncurryThis$4(''.slice);

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

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$3(function () {
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
      var O = requireObjectCoercible$3(this);
      var replacer = isNullOrUndefined$1(searchValue) ? undefined : getMethod$1(searchValue, REPLACE);
      return replacer
        ? call$3(replacer, searchValue, O, replaceValue)
        : call$3(nativeReplace, toString$4(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$2(this);
      var S = toString$4(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$1(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$1(replaceValue);
      if (!functionalReplace) replaceValue = toString$4(replaceValue);

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

        push(results, result);
        if (!global) break;

        var matchStr = toString$4(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$3(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$4(result[0]);
        var position = max(min$2(toIntegerOrInfinity(result.index), S.length), 0);
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
          var replacerArgs = concat$1([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString$4(apply(replaceValue, undefined, replacerArgs));
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
  Title: Title$7,
  Text: Text$7
} = Typography;
var BRAND_GREEN = '#02CD8D';

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
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, {
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
      children: /*#__PURE__*/jsxRuntimeExports.jsx(CloseOutlined, {})
    }),
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandHeader, {
      size: "sm"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        borderTop: '1px dashed #e5e7eb',
        margin: '12px -20px 16px'
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$7, {
      level: 4,
      style: {
        marginTop: 0,
        color: BRAND_GREEN
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
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs(Space, {
        align: "center",
        children: [d.merchantLogo ? /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          src: d.merchantLogo,
          size: 40
        }) : /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          size: 40,
          children: (d.merchantName || 'E')[0]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontWeight: 600
            },
            children: d.merchantName || 'Unknown Merchant'
          }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$7, {
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
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$7, {
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
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Text$7, {
        children: "Enter Passcode"
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Input.Password, {
      value: passcode,
      onChange: onChange,
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
      maxLength: 6,
      inputMode: "numeric",
      autoComplete: "one-time-code",
      iconRender: visible => visible ? /*#__PURE__*/jsxRuntimeExports.jsx(EyeTwoTone, {}) : /*#__PURE__*/jsxRuntimeExports.jsx(EyeInvisibleOutlined, {}),
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
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(InfoCircleFilled, {
        style: {
          color: '#1677ff',
          fontSize: 18,
          lineHeight: '20px'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(Text$7, {
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
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
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
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
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
  Title: Title$6,
  Text: Text$6
} = Typography;

// Smooth blue palette (sampled from your reference)
var BLUE_BASE = '#179CFC'; // main
var BLUE_LIGHT = '#5CB9FC'; // top of badge gradient
var BLUE_DARK = '#127CC9'; // hover/active accent

function PaymentSuccessModal(_ref) {
  var {
    open = true,
    onClose,
    amount,
    // optional
    currency = 'UGX',
    // optional
    zIndex = 2000,
    width = 440,
    // slightly smaller like the reference
    showAmount = false,
    title = 'Payment Successful',
    subtitle // optional: small line under amount (e.g., “Thanks for using EVzone Pay”)
  } = _ref;
  var fmtAmount = (v, cur) => {
    var n = Number(v !== null && v !== void 0 ? v : 0);
    try {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: cur,
        maximumFractionDigits: 0
      }).format(n);
    } catch (_unused) {
      return "".concat(cur, " ").concat(n.toLocaleString());
    }
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, {
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
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$6, {
      level: 3,
      style: {
        marginTop: 14,
        marginBottom: 10,
        color: '#111827',
        fontWeight: 700
      },
      children: title
    }), showAmount && typeof amount === 'number' && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: -2,
        marginBottom: 12,
        color: '#4B5563',
        fontWeight: 600
      },
      children: fmtAmount(amount, currency)
    }), subtitle ? /*#__PURE__*/jsxRuntimeExports.jsx(Text$6, {
      type: "secondary",
      style: {
        display: 'block',
        marginBottom: 12
      },
      children: subtitle
    }) : null, /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
      className: "evz-primary",
      type: "primary",
      size: "large",
      shape: "round",
      block: true,
      onClick: onClose,
      children: "Done"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("style", {
      children: "\n        .evz-success-modal .ant-modal-content {\n          border-radius: 14px;\n        }\n\n        /* Blue circular badge */\n        .evz-badge {\n          margin: 0 auto 8px;\n          width: 72px;               /* \u2193 slightly reduced from 84px */\n          height: 72px;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          background: radial-gradient(100% 100% at 50% 0%, ".concat(BLUE_LIGHT, " 0%, ").concat(BLUE_BASE, " 100%);\n          box-shadow: 0 10px 28px rgba(23, 156, 252, 0.32);\n          animation: evzPop .26s ease-out;\n        }\n\n        /* Primary button in the smooth blue tone */\n        .evz-success-modal .evz-primary.ant-btn-primary {\n          background: ").concat(BLUE_BASE, ";\n          border-color: ").concat(BLUE_BASE, ";\n          font-weight: 600;\n          height: 40px;\n        }\n        .evz-success-modal .evz-primary.ant-btn-primary:hover,\n        .evz-success-modal .evz-primary.ant-btn-primary:focus {\n          background: ").concat(BLUE_DARK, ";\n          border-color: ").concat(BLUE_DARK, ";\n        }\n        .evz-success-modal .evz-primary.ant-btn-primary:active {\n          background: ").concat(BLUE_DARK, ";\n          border-color: ").concat(BLUE_DARK, ";\n          filter: saturate(1.05);\n        }\n\n        @keyframes evzPop {\n          0%   { transform: scale(.92); opacity: .65; }\n          100% { transform: scale(1);   opacity: 1; }\n        }\n\n        /* Respect reduced motion */\n        @media (prefers-reduced-motion: reduce) {\n          .evz-badge { animation: none !important; }\n        }\n      ")
    })]
  });
}

// src/PaymentFailedModal.js
var {
  Title: Title$5,
  Paragraph: Paragraph$1,
  Text: Text$5
} = Typography;
var BRAND_RED$2 = '#ff4d4f';
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
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, {
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
        background: BRAND_RED$2,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
      },
      "aria-label": "Close",
      children: /*#__PURE__*/jsxRuntimeExports.jsx(CloseOutlined, {})
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
        background: BRAND_RED$2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 12px',
        boxShadow: '0 6px 16px rgba(255,77,79,0.28)'
      },
      "aria-hidden": true,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(CloseOutlined, {
        style: {
          color: '#fff',
          fontSize: 34,
          fontWeight: 700
        }
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs(Space, {
      direction: "vertical",
      align: "center",
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$5, {
        level: 3,
        style: {
          margin: 0,
          color: BRAND_RED$2
        },
        children: "Payment Failed"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(Paragraph$1, {
        style: {
          marginTop: 8,
          textAlign: 'center',
          color: '#444'
        },
        children: ["We couldn\u2019t complete the payment. Please check your wallet for more details and try again.", reason ? /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("br", {}), /*#__PURE__*/jsxRuntimeExports.jsxs(Text$5, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: ["Reason: ", reason]
          })]
        }) : null]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
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
  Title: Title$4,
  Paragraph,
  Text: Text$4
} = Typography;

// Local colors for this modal
var BRAND_ORANGE = '#FF9800';
var BRAND_RED$1 = '#ff4d4f';
var PRIMARY_BLUE = '#1677ff';
var PRIMARY_BLUE_HOVER = '#0958d9';
function InsufficientFundsModal(_ref) {
  var {
    open = true,
    onClose,
    onAddFunds,
    onRetry,
    zIndex = 2000,
    width = 460,
    currency = 'UGX',
    balance,
    requiredTotal
  } = _ref;
  var hasNumbers = typeof balance === 'number' && !Number.isNaN(balance) && typeof requiredTotal === 'number' && !Number.isNaN(requiredTotal);
  var shortfall = hasNumbers ? Math.max(requiredTotal - balance, 0) : null;
  var fmt = n => Number(n || 0).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, {
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
      children: /*#__PURE__*/jsxRuntimeExports.jsx(CloseOutlined, {})
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
        background: BRAND_ORANGE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 12px',
        boxShadow: '0 6px 16px rgba(255,152,0,0.28)'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(CloseOutlined, {
        style: {
          color: '#fff',
          fontSize: 34,
          fontWeight: 700
        }
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs(Space, {
      direction: "vertical",
      align: "center",
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$4, {
        level: 3,
        style: {
          margin: 0,
          color: BRAND_ORANGE
        },
        children: "Insufficient Funds"
      }), !hasNumbers ? /*#__PURE__*/jsxRuntimeExports.jsx(Paragraph, {
        style: {
          marginTop: 8,
          textAlign: 'center',
          color: '#444'
        },
        children: "The account did not have sufficient funds to cover the transaction amount at the time of the transaction."
      }) : /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Paragraph, {
          style: {
            marginTop: 8,
            textAlign: 'center',
            color: '#444'
          },
          children: "Your wallet balance is lower than the total required for this payment."
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            width: '100%',
            background: '#fffbe6',
            border: '1px dashed #ffe58f',
            borderRadius: 10,
            padding: 12
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Row, {
            label: "Balance",
            value: "".concat(currency, " ").concat(fmt(balance))
          }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
            label: "Required",
            value: "".concat(currency, " ").concat(fmt(requiredTotal))
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 8,
              paddingTop: 8,
              marginTop: 6,
              borderTop: '1px solid #fff0b3'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$4, {
              strong: true,
              children: "Shortfall"
            }), /*#__PURE__*/jsxRuntimeExports.jsxs(Text$4, {
              strong: true,
              style: {
                color: BRAND_ORANGE
              },
              children: [currency, " ", fmt(shortfall)]
            })]
          })]
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(Space, {
        size: "middle",
        style: {
          marginTop: 12
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          type: "primary",
          shape: "round",
          size: "middle",
          onClick: onAddFunds || onClose,
          style: {
            width: 160
          },
          children: "Add Funds"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          type: "primary",
          ghost: true,
          className: "evz-try",
          shape: "round",
          size: "middle",
          onClick: onRetry || onClose,
          style: {
            width: 160,
            color: PRIMARY_BLUE,
            borderColor: PRIMARY_BLUE
          },
          children: "Try Again"
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("style", {
      children: "\n        /* ensure ghost button text/border stay visible even if a global .ant-btn { color:#fff } exists */\n        .evz-try.ant-btn {\n          color: ".concat(PRIMARY_BLUE, ";\n          border-color: ").concat(PRIMARY_BLUE, ";\n          background: transparent;\n        }\n        .evz-try.ant-btn:hover,\n        .evz-try.ant-btn:focus {\n          color: ").concat(PRIMARY_BLUE_HOVER, ";\n          border-color: ").concat(PRIMARY_BLUE_HOVER, ";\n          background: rgba(9,88,217,0.06);\n        }\n        .evz-try.ant-btn:active {\n          color: ").concat(PRIMARY_BLUE_HOVER, ";\n          border-color: ").concat(PRIMARY_BLUE_HOVER, ";\n          background: rgba(9,88,217,0.10);\n        }\n      ")
    })]
  });
}
function Row(_ref2) {
  var {
    label,
    value
  } = _ref2;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 8,
      padding: '4px 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Text$4, {
      type: "secondary",
      children: label
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$4, {
      children: value
    })]
  });
}

// src/LoadingOverlay.jsx
var {
  Title: Title$3,
  Text: Text$3
} = Typography;

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
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, {
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
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs(Space, {
      direction: "vertical",
      align: "center",
      size: "large",
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "evz-pulse",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          src: logoSrc,
          size: 96,
          style: {
            background: '#fff'
          }
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Title$3, {
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
      }), tip ? /*#__PURE__*/jsxRuntimeExports.jsx(Text$3, {
        className: "evz-tip",
        children: tip
      }) : null]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("style", {
      children: "\n        @keyframes evzBlink {\n          0%,100% { opacity: 1; filter: drop-shadow(0 0 0 rgba(217,119,6,0)); }\n          50%     { opacity: .72; filter: drop-shadow(0 0 6px rgba(217,119,6,.45)); }\n        }\n\n        .evz-pulse {\n          display: inline-flex;\n          padding: 6px;\n          border-radius: 50%;\n          background: radial-gradient(65% 65% at 50% 50%, rgba(2,205,141,.18), rgba(2,205,141,0) 70%);\n          position: relative;\n        }\n        .evz-pulse::before {\n          content: '';\n          position: absolute;\n          inset: -8px;\n          border-radius: 50%;\n          border: 2px solid rgba(2,205,141,.35);\n          animation: evzPulse 1.8s ease-out infinite;\n        }\n        @keyframes evzPulse {\n          0%   { transform: scale(.85); opacity: .6; }\n          70%  { transform: scale(1.15); opacity: 0; }\n          100% { transform: scale(1.15); opacity: 0; }\n        }\n\n        .evz-tip {\n          display: block;\n          margin-top: 2px;\n          font-size: 13px;\n          letter-spacing: .2px;\n          background: linear-gradient(90deg,#9aa6af 0%,#ccd3d8 50%,#9aa6af 100%);\n          -webkit-background-clip: text;\n          background-clip: text;\n          color: transparent;\n          -webkit-text-fill-color: transparent; /* WebKit fix */\n          background-size: 200% 100%;\n          animation: evzShimmer 2.2s linear infinite;\n        }\n        @keyframes evzShimmer {\n          0% { background-position: 200% 0; }\n          100% { background-position: -200% 0; }\n        }\n\n        /* Respect users who prefer reduced motion */\n        @media (prefers-reduced-motion: reduce) {\n          .evz-tip { animation: none; }\n          .evz-pulse::before { animation: none; }\n        }\n      "
    })]
  });
};

var {
  Title: Title$2,
  Text: Text$2
} = Typography;
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
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, {
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
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$2, {
        level: 5,
        style: {
          margin: '0 0 2px'
        },
        children: message
      }), subText ? /*#__PURE__*/jsxRuntimeExports.jsx(Text$2, {
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
  Title: Title$1,
  Text: Text$1
} = Typography;
var BRAND_RED = '#ff4d4f';
function HasAccountSummary(_ref) {
  var {
    open = true,
    onLoginSuccess,
    onClose,
    zIndex = 2000,
    width = 520,
    authOrigin = 'https://allan-sxqyu.ondigitalocean.app',
    authUrl = 'https://allan-sxqyu.ondigitalocean.app',
    // keep header sizing consistent with ProcessingModal
    brandMaxWidth = 240,
    brandMaxHeight = 54
  } = _ref;
  var popupRef = useRef(null);
  var checkRef = useRef(null);
  var timeoutRef = useRef(null);
  useEffect(() => {
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
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, {
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
        background: BRAND_RED,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(CloseOutlined, {})
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
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(Space, {
        direction: "vertical",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Title$1, {
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
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(InfoCircleFilled, {
            style: {
              color: '#1677ff',
              fontSize: 18,
              lineHeight: '20px'
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsx(Text$1, {
            children: "EVzone needs you to sign in to continue with this payment."
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 8
          },
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
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

var isCallable = isCallable$m;
var isObject$1 = isObject$c;
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
    isObject$1(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var isObject = isObject$c;
var classof = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$j;

var MATCH$2 = wellKnownSymbol$2('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};

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

var defineProperty$1 = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty$1(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var DESCRIPTORS$1 = descriptors;
var globalThis$2 = globalThis_1;
var uncurryThis$3 = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty = createNonEnumerableProperty$6;
var create = objectCreate;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf = objectIsPrototypeOf;
var isRegExp$1 = isRegexp;
var toString$3 = toString$8;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$1 = defineBuiltIn$8;
var fails$2 = fails$l;
var hasOwn = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies = setSpecies$2;
var wellKnownSymbol$1 = wellKnownSymbol$j;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH$1 = wellKnownSymbol$1('match');
var NativeRegExp = globalThis$2.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = globalThis$2.SyntaxError;
var exec = uncurryThis$3(RegExpPrototype$1.exec);
var charAt = uncurryThis$3(''.charAt);
var replace = uncurryThis$3(''.replace);
var stringIndexOf = uncurryThis$3(''.indexOf);
var stringSlice$1 = uncurryThis$3(''.slice);
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
    re2[MATCH$1] = false;
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
        if (stringSlice$1(string, index + 1, index + 3) === '?:') {
          continue;
        }
        if (exec(IS_NCG, stringSlice$1(string, index + 1))) {
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
    var thisIsRegExp = isPrototypeOf(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp$1(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype$1, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$3(pattern);
    flags = flags === undefined ? '' : toString$3(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

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

  RegExpPrototype$1.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$1;
  defineBuiltIn$1(globalThis$2, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn = defineBuiltIn$8;
var anObject$1 = anObject$e;
var $toString = toString$8;
var fails$1 = fails$l;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$1(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject$1(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var call$1 = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject = anObject$e;
var isNullOrUndefined = isNullOrUndefined$6;
var toLength$2 = toLength$5;
var toString$2 = toString$8;
var requireObjectCoercible$2 = requireObjectCoercible$9;
var getMethod = getMethod$5;
var advanceStringIndex = advanceStringIndex$2;
var regExpExec = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$2(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call$1(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString$2(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString$2(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$2(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

// src/utils/cookie.js

var DEFAULT_NAME = 'evz_user_no';

/**
 * Read the user number from cookies (default: "evz_user_no").
 * Returns null if not present or not in a browser.
 */
function getUserNoFromCookie() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_NAME;
  if (typeof document === 'undefined') return null;
  var escaped = String(name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + escaped + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

/**
 * Set the user number cookie.
 * Defaults: 7-day expiry, SameSite=Strict, Secure when on HTTPS, Path=/.
 */
function setUserNoCookie(userNo) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof document === 'undefined') return;
  if (!userNo) return;
  var {
    name = DEFAULT_NAME,
    days = 7,
    path = '/',
    sameSite = 'Strict',
    // 'Strict' | 'Lax' | 'None' (if 'None', you must be on HTTPS)
    secure = typeof location !== 'undefined' && location.protocol === 'https:'
  } = opts;
  var expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  var parts = ["".concat(encodeURIComponent(name), "=").concat(encodeURIComponent(userNo)), "Expires=".concat(expires.toUTCString()), "Path=".concat(path), "SameSite=".concat(sameSite)];
  if (secure) parts.push('Secure');
  document.cookie = parts.join('; ');
}

/**
 * Remove the user number cookie.
 */
function clearUserNoCookie() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_NAME;
  var {
    path = '/'
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof document === 'undefined') return;
  document.cookie = "".concat(encodeURIComponent(name), "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=").concat(path);
}

var cookieUtil = /*#__PURE__*/Object.freeze({
  __proto__: null,
  clearUserNoCookie: clearUserNoCookie,
  getUserNoFromCookie: getUserNoFromCookie,
  setUserNoCookie: setUserNoCookie
});

var DESCRIPTORS = descriptors;
var uncurryThis$2 = functionUncurryThis;
var call = functionCall;
var fails = fails$l;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject = toObject$4;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis$2([].concat);

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

var $$3 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$3({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var isRegExp = isRegexp;

var $TypeError = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol = wellKnownSymbol$j;

var MATCH = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$2 = _export;
var uncurryThis$1 = functionUncurryThisClause;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var toLength$1 = toLength$5;
var toString$1 = toString$8;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$9;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

var slice = uncurryThis$1(''.slice);
var min$1 = Math.min;

var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$1('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$$2({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString$1(requireObjectCoercible$1(this));
    notARegExp$1(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min$1(toLength$1(endPosition), len);
    var search = toString$1(searchString);
    return slice(that, end - search.length, end) === search;
  }
});

var $$1 = _export;
var uncurryThis = functionUncurryThisClause;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var toLength = toLength$5;
var toString = toString$8;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$9;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$$1({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return stringSlice(that, index, index + search.length) === search;
  }
});

var $ = _export;
var globalThis$1 = globalThis_1;

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true, forced: globalThis$1.globalThis !== globalThis$1 }, {
  globalThis: globalThis$1
});

// One place to point the SDK at your server.
// Change this to your prod URL when you deploy.
var API_BASE_URL = 'http://localhost:4000'; // ← change to https://api.evzone-pay.com
var DEFAULT_TIMEOUT_MS = 12000;

/**
 * Create a Paykit API client.
 * Usage:
 *   const api = createPaykitClient({ publishableKey: 'pk_test_123', brandId: 'brand_xtr_001' });
 *   const sess = await api.initSession({ enterpriseWalletNo }); // <-- no user id prop
 */
function createPaykitClient() {
  var {
    publishableKey,
    brandId,
    // NEW (optional)
    timeoutMs = DEFAULT_TIMEOUT_MS,
    fetchImpl
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!publishableKey) throw new Error('paykitClient: publishableKey is required');
  var _fetch = fetchImpl || (typeof fetch !== 'undefined' ? fetch.bind(globalThis) : null);
  if (!_fetch) throw new Error('paykitClient: fetch is not available in this environment');
  var jsonHeaders = {
    'Content-Type': 'application/json'
  };
  function request(_x) {
    return _request.apply(this, arguments);
  } // ---------- Public API ----------
  /**
   * Initialize a checkout session.
   * @param {{enterpriseWalletNo:string, userNo?:string, userWalletId?:string, brandId?:string}} p
   *  - You SHOULD pass only { enterpriseWalletNo }.
   *  - SDK will read userNo from cookies; falls back to legacy userWalletId if provided.
   *  - brandId is OPTIONAL (can be set here or at client creation).
   */
  function _request() {
    _request = _asyncToGenerator(function* (path) {
      var _data;
      var {
        method = 'POST',
        headers = {},
        body,
        idempotencyKey
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var url = joinUrl(API_BASE_URL, path);
      var ctrl = new AbortController();
      var timer = setTimeout(() => ctrl.abort(), timeoutMs);
      var res;
      try {
        res = yield _fetch(url, {
          method,
          headers: _objectSpread2(_objectSpread2(_objectSpread2({}, jsonHeaders), idempotencyKey ? {
            'Idempotency-Key': idempotencyKey
          } : null), headers),
          body: body ? JSON.stringify(body) : undefined,
          signal: ctrl.signal
        });
      } catch (err) {
        clearTimeout(timer);
        throw decorateError(err, {
          code: 'NETWORK_ERROR',
          url: path
        });
      }
      clearTimeout(timer);
      var data;
      try {
        data = yield res.json();
      } catch (_unused) {
        throw decorateError(new Error('Invalid JSON response'), {
          code: 'BAD_RESPONSE',
          status: res.status,
          url: path
        });
      }
      if (!res.ok || ((_data = data) === null || _data === void 0 ? void 0 : _data.ok) === false) {
        var _data2, _data3;
        var code = ((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.code) || "HTTP_".concat(res.status);
        var msg = ((_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.message) || 'Request failed';
        throw decorateError(new Error(msg), {
          code,
          status: res.status,
          url: path,
          data
        });
      }
      return data;
    });
    return _request.apply(this, arguments);
  }
  function initSession(_x2) {
    return _initSession.apply(this, arguments);
  }
  /**
   * Get a quote for the amount.
   * @param {{sessionId:string, amount:number}} p
   */
  function _initSession() {
    _initSession = _asyncToGenerator(function* (p) {
      var _p$userNo, _p$brandId;
      if (!(p !== null && p !== void 0 && p.enterpriseWalletNo)) {
        throw new Error('paykitClient:initSession requires enterpriseWalletNo');
      }
      var userNo = (_p$userNo = p.userNo) !== null && _p$userNo !== void 0 ? _p$userNo : detectUserNo();

      // Allow brandId per-call override; else use the client-level brandId.
      var brandToSend = (_p$brandId = p.brandId) !== null && _p$brandId !== void 0 ? _p$brandId : brandId;
      var payload = _objectSpread2(_objectSpread2(_objectSpread2({
        publishableKey,
        enterpriseWalletNo: p.enterpriseWalletNo
      }, brandToSend ? {
        brandId: brandToSend
      } : {}), userNo ? {
        userNo
      } : p.userWalletId ? {
        userWalletId: p.userWalletId
      } : {}), p.billingCurrency ? {
        billingCurrency: p.billingCurrency
      } : {});
      if (!payload.userNo && !payload.userWalletId) {
        // No cookie & no legacy id supplied
        throw decorateError(new Error('Not signed in: missing user identifier'), {
          code: 'MISSING_USER_ID'
        });
      }
      return request('/api/v1/paykit/sdk/session/init', {
        body: payload
      });
    });
    return _initSession.apply(this, arguments);
  }
  function quote(_x3) {
    return _quote.apply(this, arguments);
  }
  /**
   * Confirm the charge using a quote and passcode.
   * @param {{sessionId:string, quoteId:string, passcode:string, idempotencyKey?:string}} p
   */
  function _quote() {
    _quote = _asyncToGenerator(function* (p) {
      return request('/api/v1/paykit/sdk/tx/quote', {
        body: {
          sessionId: p.sessionId,
          amount: p.amount
        }
      });
    });
    return _quote.apply(this, arguments);
  }
  function charge(_x4) {
    return _charge.apply(this, arguments);
  }
  function _charge() {
    _charge = _asyncToGenerator(function* (p) {
      return request('/api/v1/paykit/sdk/tx/charge', {
        idempotencyKey: p.idempotencyKey || genIdempotencyKey(),
        body: {
          sessionId: p.sessionId,
          quoteId: p.quoteId,
          passcode: p.passcode
        }
      });
    });
    return _charge.apply(this, arguments);
  }
  return {
    initSession,
    quote,
    charge,
    genIdempotencyKey
  };
}

// ---------- helpers ----------
function joinUrl(base, path) {
  if (!base.endsWith('/') && !path.startsWith('/')) return "".concat(base, "/").concat(path);
  if (base.endsWith('/') && path.startsWith('/')) return "".concat(base).concat(path.slice(1));
  return "".concat(base).concat(path);
}
function genIdempotencyKey() {
  var r = Math.random().toString(36).slice(2, 8);
  return "idmp_".concat(Date.now(), "_").concat(r);
}
function decorateError(err, extra) {
  var e = err instanceof Error ? err : new Error(String(err));
  Object.assign(e, extra || {});
  return e;
}

// Prefer project helper; otherwise read cookies locally
function detectUserNo() {
  try {
    // Try commonly-used export names first
    for (var fnName of ['detectUserNoFromCookies', 'getUserNo', 'getUserNoFromCookies']) {
      var fn = cookieUtil === null || cookieUtil === void 0 ? void 0 : cookieUtil[fnName];
      if (typeof fn === 'function') {
        var v = fn();
        if (v) return v;
      }
    }
  } catch (_unused2) {}
  return localDetectUserNo();
}
function localDetectUserNo() {
  if (typeof document === 'undefined') return null;
  var keys = ['evz_user_no',
  // preferred
  'wallet_user_id',
  // legacy
  'user_id',
  // legacy
  'evz_user_id' // legacy
  ];
  var _loop = function _loop(k) {
      var row = document.cookie.split('; ').find(s => s.startsWith("".concat(k, "=")));
      if (row) {
        try {
          return {
            v: decodeURIComponent(row.split('=')[1] || '')
          };
        } catch (_unused3) {
          return {
            v: row.split('=')[1] || ''
          };
        }
      }
    },
    _ret;
  for (var k of keys) {
    _ret = _loop(k);
    if (_ret) return _ret.v;
  }
  return null;
}

var {
  Title,
  Text
} = Typography;
var DEFAULT_PROCESSING_GIF = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif';

/**
 * Props:
 *  - publishableKey, brandId?, enterpriseWalletNo, userWalletId
 *  - amount, type?, particulars?, currency?, merchantName?, merchantLogo?
 *  - processingSrc?: string
 *  - minProcessingMs?: number
 *  - zIndex?: number
 *  - onClose?: () => void
 *  - onSuccess?: (payload) => void
 *  - supportEmail?: string
 *  - supportPhone?: string
 */
function WalletPaymentForm(_ref) {
  var _session$enterprise3, _session$enterprise4;
  var {
    publishableKey,
    brandId,
    // ← NEW (optional)
    enterpriseWalletNo,
    userWalletId,
    zIndex = 2000,
    amount,
    type,
    particulars,
    currency,
    merchantName,
    merchantLogo,
    processingSrc,
    minProcessingMs = 5000,
    onClose: _onClose,
    onSuccess,
    supportEmail,
    supportPhone
  } = _ref;
  var [view, setView] = useState('loading'); // 'loading' | 'signin' | 'invalid' | 'summary' | 'passcode' | 'success' | 'failed' | 'insufficient'
  var [errorMsg, setErrorMsg] = useState(''); // kept for logging only
  var [session, setSession] = useState(null);
  var [quote, setQuote] = useState(null);
  var [passcode, setPasscode] = useState('');
  var [submitting, setSubmitting] = useState(false);
  var [processing, setProcessing] = useState(null); // 'quote' | 'charge' | null

  var amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;
  var api = useMemo(() => {
    if (!publishableKey) return null;
    // Pass brandId into the SDK client (backward compatible if undefined)
    return createPaykitClient({
      publishableKey,
      brandId
    });
  }, [publishableKey, brandId]);
  var wait = ms => new Promise(r => setTimeout(r, ms));
  function withMinProcessing(_x, _x2) {
    return _withMinProcessing.apply(this, arguments);
  }
  function _withMinProcessing() {
    _withMinProcessing = _asyncToGenerator(function* (kind, task) {
      setProcessing(kind);
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
  var boot = useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (signal) {
      setErrorMsg('');
      setQuote(null);
      setPasscode('');
      if (!api) {
        if (!(signal !== null && signal !== void 0 && signal.aborted)) {
          setErrorMsg('Missing publishableKey');
          setView('invalid');
        }
        return;
      }
      var cookieUserNo = !userWalletId ? getUserNoFromCookie() : null;
      if (!enterpriseWalletNo || !userWalletId && !cookieUserNo) {
        if (!(signal !== null && signal !== void 0 && signal.aborted)) setView('signin'); // ask user to sign in
        return;
      }
      if (!amountValid) {
        if (!(signal !== null && signal !== void 0 && signal.aborted)) {
          setErrorMsg('Invalid amount');
          setView('invalid');
        }
        return;
      }
      try {
        var initBody = _objectSpread2(_objectSpread2({
          enterpriseWalletNo
        }, userWalletId ? {
          userWalletId
        } : {
          userNo: cookieUserNo
        }), brandId ? {
          brandId
        } : {});
        var [initRes] = yield Promise.all([api.initSession(initBody), wait(7000)]);
        if (signal !== null && signal !== void 0 && signal.aborted) return;
        setSession(initRes);
        setView('summary');
      } catch (e) {
        try {
          console.error('initSession failed:', e);
        } catch (_unused) {}
        if (signal !== null && signal !== void 0 && signal.aborted) return;
        setErrorMsg((e === null || e === void 0 ? void 0 : e.message) || 'Failed to initialize session.');
        setView('invalid');
      }
    });
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }(), [api, enterpriseWalletNo, userWalletId, amountValid, brandId]);
  useEffect(() => {
    setView('loading');
    var ctrl = new AbortController();
    boot(ctrl.signal);
    return () => ctrl.abort();
  }, [boot]);
  var handleLoginSuccess = (userNo /*, authToken */) => {
    try {
      if (userNo) setUserNoCookie(userNo);
    } catch (_unused2) {}
    setView('loading');
    var ctrl = new AbortController();
    boot(ctrl.signal);
  };
  var details = useMemo(() => {
    var _session$enterprise, _session$enterprise2, _quote$total;
    var billingCurrency = (session === null || session === void 0 ? void 0 : session.billingCurrency) || currency || 'UGX';
    var mName = merchantName || (session === null || session === void 0 ? void 0 : (_session$enterprise = session.enterprise) === null || _session$enterprise === void 0 ? void 0 : _session$enterprise.name) || 'Unknown Merchant';
    var toId = (session === null || session === void 0 ? void 0 : (_session$enterprise2 = session.enterprise) === null || _session$enterprise2 === void 0 ? void 0 : _session$enterprise2.walletNo) || '—';
    return {
      type: type || 'Booking',
      id: toId,
      particulars: particulars || 'Hotel Booking',
      billedCurrency: billingCurrency,
      billedAmount: amount,
      totalBilling: (_quote$total = quote === null || quote === void 0 ? void 0 : quote.total) !== null && _quote$total !== void 0 ? _quote$total : amount,
      merchantName: mName,
      merchantLogo: merchantLogo || ''
    };
  }, [amount, currency, merchantLogo, merchantName, particulars, quote === null || quote === void 0 ? void 0 : quote.total, session === null || session === void 0 ? void 0 : session.billingCurrency, session === null || session === void 0 ? void 0 : (_session$enterprise3 = session.enterprise) === null || _session$enterprise3 === void 0 ? void 0 : _session$enterprise3.name, session === null || session === void 0 ? void 0 : (_session$enterprise4 = session.enterprise) === null || _session$enterprise4 === void 0 ? void 0 : _session$enterprise4.walletNo, type]);
  var handleConfirm = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      if (!session || !api) return;
      setSubmitting(true);
      setErrorMsg('');
      try {
        var _session$user;
        var q = yield withMinProcessing('quote', () => api.quote({
          sessionId: session.sessionId,
          amount
        }));
        setQuote(q);
        var balance = Number((session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.balance) || 0);
        if (balance < Number(q.total || 0)) setView('insufficient');else setView('passcode');
      } catch (e) {
        try {
          console.error('quote failed:', e);
        } catch (_unused3) {}
        setErrorMsg('Could not fetch quote.');
        setView('failed');
      } finally {
        setSubmitting(false);
      }
    });
    return function handleConfirm() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      if (!session || !quote || !api) return;
      if (passcode.length !== 6) return;
      setSubmitting(true);
      setErrorMsg('');
      try {
        var res = yield withMinProcessing('charge', () => api.charge({
          sessionId: session.sessionId,
          quoteId: quote.quoteId,
          passcode
        }));
        setView('success');
        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess({
          transactionId: (res === null || res === void 0 ? void 0 : res.chargeId) || (quote === null || quote === void 0 ? void 0 : quote.quoteId),
          sessionId: session.sessionId,
          enterprise: session.enterprise,
          user: session.user,
          amount: quote.total,
          currency: quote.currency || details.billedCurrency,
          type: details.type,
          particulars: details.particulars,
          receipt: res === null || res === void 0 ? void 0 : res.receipt
        });
      } catch (e) {
        if ((e === null || e === void 0 ? void 0 : e.code) === 'INSUFFICIENT_FUNDS') setView('insufficient');else {
          try {
            console.error('charge failed:', e);
          } catch (_unused4) {}
          setErrorMsg('Payment failed.');
          setView('failed');
        }
      } finally {
        setSubmitting(false);
      }
    });
    return function handleSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();
  var closeAndReset = () => {
    setPasscode('');
    setQuote(null);
    setView('summary');
    _onClose === null || _onClose === void 0 ? void 0 : _onClose();
  };
  var renderLoading = () => /*#__PURE__*/jsxRuntimeExports.jsx(LoadingOverlay, {
    open: true,
    zIndex: zIndex,
    brand: "EVzone Pay",
    tip: "Preparing secure checkout\u2026"
  });

  // FRIENDLY: do not leak server error; show platform contact instead
  var renderInvalid = () => {
    var contactLine = supportEmail && supportPhone ? "".concat(supportEmail, " or ").concat(supportPhone) : supportEmail || supportPhone || '';
    return /*#__PURE__*/jsxRuntimeExports.jsx(Modal, {
      open: true,
      centered: true,
      footer: null,
      onCancel: closeAndReset,
      zIndex: zIndex,
      maskClosable: false,
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(Space, {
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
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
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
    onSubmit: handleSubmit,
    onBack: () => setView('summary'),
    submitting: submitting,
    quote: quote
  });
  var content = null;
  if (view === 'loading') content = renderLoading();else if (view === 'signin') content = /*#__PURE__*/jsxRuntimeExports.jsx(HasAccountSummary, {
    open: true,
    onLoginSuccess: handleLoginSuccess,
    onClose: closeAndReset,
    zIndex: zIndex
  });else if (view === 'invalid') content = renderInvalid();else if (view === 'summary') content = renderSummary();else if (view === 'passcode') content = renderPasscode();else if (view === 'success') {
    var _quote$total2;
    content = /*#__PURE__*/jsxRuntimeExports.jsx(PaymentSuccessModal, {
      open: true,
      amount: (_quote$total2 = quote === null || quote === void 0 ? void 0 : quote.total) !== null && _quote$total2 !== void 0 ? _quote$total2 : amount,
      currency: (quote === null || quote === void 0 ? void 0 : quote.currency) || details.billedCurrency,
      zIndex: zIndex,
      onClose: () => {
        setView('summary');
        _onClose === null || _onClose === void 0 ? void 0 : _onClose();
      }
    });
  } else if (view === 'failed') {
    content = /*#__PURE__*/jsxRuntimeExports.jsx(PaymentFailedModal, {
      open: true,
      zIndex: zIndex,
      reason: errorMsg,
      onClose: () => setView('summary')
    });
  } else if (view === 'insufficient') {
    content = /*#__PURE__*/jsxRuntimeExports.jsx(InsufficientFundsModal, {
      open: true,
      zIndex: zIndex,
      onClose: () => setView('summary')
    });
  }
  if (processing) {
    var procSrc = processingSrc || DEFAULT_PROCESSING_GIF;
    return /*#__PURE__*/jsxRuntimeExports.jsx(ProcessingModal, {
      open: true,
      src: procSrc,
      message: processing === 'quote' ? 'Hang tight—almost ready…' : 'Processing payment…',
      subText: "Please wait",
      zIndex: zIndex
    });
  }
  return content;
}

export { WalletPaymentForm, WalletPaymentForm as default };
//# sourceMappingURL=WalletPaymentForm.esm.js.map
