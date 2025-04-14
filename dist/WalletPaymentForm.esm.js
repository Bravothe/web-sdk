import React, { useEffect, useState, useCallback } from 'react';

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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$b = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$a = fails$b;

var functionBindNative = !fails$a(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var call$5 = FunctionPrototype$1.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$5, call$5);

var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$5.apply(fn, arguments);
  };
};

var uncurryThis$b = functionUncurryThis;

var toString$3 = uncurryThis$b({}.toString);
var stringSlice$2 = uncurryThis$b(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$2(toString$3(it), 8, -1);
};

var uncurryThis$a = functionUncurryThis;
var fails$9 = fails$b;
var classof$2 = classofRaw$1;

var $Object$4 = Object;
var split = uncurryThis$a(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$9(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$2(it) === 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$2 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$1 = isNullOrUndefined$2;

var $TypeError$6 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$4 = function (it) {
  if (isNullOrUndefined$1(it)) throw new $TypeError$6("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;

var toIndexedObject$5 = function (it) {
  return IndexedObject(requireObjectCoercible$3(it));
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

var globalThis$c = globalThis_1;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$4(globalThis$c, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis$c[key] = value;
  } return value;
};

var globalThis$b = globalThis_1;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = sharedStore.exports = globalThis$b[SHARED] || defineGlobalProperty$2(SHARED, {});

(store$3.versions || (store$3.versions = [])).push({
  version: '3.41.0',
  mode: 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedStoreExports = sharedStore.exports;

var store$2 = sharedStoreExports;

var shared$3 = function (key, value) {
  return store$2[key] || (store$2[key] = value || {});
};

var requireObjectCoercible$2 = requireObjectCoercible$4;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$2 = function (argument) {
  return $Object$3(requireObjectCoercible$2(argument));
};

var uncurryThis$9 = functionUncurryThis;
var toObject$1 = toObject$2;

var hasOwnProperty = uncurryThis$9({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$8 = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$2 = uncurryThis$8(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id + postfix, 36);
};

var globalThis$a = globalThis_1;

var navigator = globalThis$a.navigator;
var userAgent$1 = navigator && navigator.userAgent;

var environmentUserAgent = userAgent$1 ? String(userAgent$1) : '';

var globalThis$9 = globalThis_1;
var userAgent = environmentUserAgent;

var process = globalThis$9.process;
var Deno = globalThis$9.Deno;
var versions = process && process.versions || Deno && Deno.version;
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
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var environmentV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = environmentV8Version;
var fails$8 = fails$b;
var globalThis$8 = globalThis_1;

var $String$6 = globalThis$8.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$8(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1 &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';

var globalThis$7 = globalThis_1;
var shared$2 = shared$3;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$1 = globalThis$7.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$8 = function (name) {
  if (!hasOwn$8(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$8(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var isCallable$e = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$d = isCallable$e;

var isObject$8 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$d(it);
};

var isObject$7 = isObject$8;

var $String$5 = String;
var $TypeError$5 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$4 = function (argument) {
  if (isObject$7(argument)) return argument;
  throw new $TypeError$5($String$5(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$7 = fails$b;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var DESCRIPTORS$8 = descriptors;
var fails$6 = fails$b;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$6(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var objectDefineProperty = {};

var globalThis$6 = globalThis_1;
var isObject$6 = isObject$8;

var document$1 = globalThis$6.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$7 = descriptors;
var fails$5 = fails$b;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$7 && !fails$5(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var NATIVE_BIND = functionBindNative;

var call$4 = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var functionCall = NATIVE_BIND ? call$4.bind(call$4) : function () {
  return call$4.apply(call$4, arguments);
};

var globalThis$5 = globalThis_1;
var isCallable$c = isCallable$e;

var aFunction = function (argument) {
  return isCallable$c(argument) ? argument : undefined;
};

var getBuiltIn$3 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis$5[namespace]) : globalThis$5[namespace] && globalThis$5[namespace][method];
};

var uncurryThis$7 = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$7({}.isPrototypeOf);

var getBuiltIn$2 = getBuiltIn$3;
var isCallable$b = isCallable$e;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$b($Symbol) && isPrototypeOf($Symbol.prototype, $Object$2(it));
};

var $String$4 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$a = isCallable$e;
var tryToString = tryToString$1;

var $TypeError$4 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$2 = function (argument) {
  if (isCallable$a(argument)) return argument;
  throw new $TypeError$4(tryToString(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2;
var isNullOrUndefined = isNullOrUndefined$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable$1(func);
};

var call$3 = functionCall;
var isCallable$9 = isCallable$e;
var isObject$5 = isObject$8;

var $TypeError$3 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$5(val = call$3(fn, input))) return val;
  if (isCallable$9(fn = input.valueOf) && !isObject$5(val = call$3(fn, input))) return val;
  if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$5(val = call$3(fn, input))) return val;
  throw new $TypeError$3("Can't convert object to primitive value");
};

var call$2 = functionCall;
var isObject$4 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$7 = wellKnownSymbol$8;

var $TypeError$2 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$2(exoticToPrim, input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw new $TypeError$2("Can't convert object to primitive value");
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

var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$3 = anObject$4;
var toPropertyKey$1 = toPropertyKey$2;

var $TypeError$1 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$3(O);
  P = toPropertyKey$1(P);
  anObject$3(Attributes);
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
  anObject$3(O);
  P = toPropertyKey$1(P);
  anObject$3(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$1('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  var len = toIntegerOrInfinity$2(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$1 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike(O);
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
  indexOf: createMethod(false)
};

var hiddenKeys$4 = {};

var uncurryThis$6 = functionUncurryThis;
var hasOwn$7 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push = uncurryThis$6([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$7(hiddenKeys$3, key) && hasOwn$7(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$7(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
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

var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$3 = objectDefineProperty;
var anObject$2 = anObject$4;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys = objectKeys$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$2(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$1 = getBuiltIn$3;

var html$1 = getBuiltIn$1('document', 'documentElement');

var shared$1 = shared$3;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */
var anObject$1 = anObject$4;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html = html$1;
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
  html.appendChild(iframe);
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
    EmptyConstructor[PROTOTYPE] = anObject$1(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$6 = wellKnownSymbol$8;
var create$1 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$6('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty$3(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var globalThis$4 = globalThis_1;
var isCallable$8 = isCallable$e;

var WeakMap$1 = globalThis$4.WeakMap;

var weakMapBasicDetection = isCallable$8(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$4 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;

var createNonEnumerableProperty$4 = DESCRIPTORS$4 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var globalThis$3 = globalThis_1;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$6 = hasOwnProperty_1;
var shared = sharedStoreExports;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = globalThis$3.TypeError;
var WeakMap = globalThis$3.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store$1 = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store$1.get = store$1.get;
  store$1.has = store$1.has;
  store$1.set = store$1.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store$1.has(it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
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
  set = function (it, metadata) {
    if (hasOwn$6(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$6(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$6(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var DESCRIPTORS$3 = descriptors;
var call$1 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey = toPropertyKey$2;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$3 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call$1(propertyIsEnumerableModule.f, O, P), O[P]);
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$2 = descriptors;
var hasOwn$4 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$4(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$5 = functionUncurryThis;
var isCallable$7 = isCallable$e;
var store = sharedStoreExports;

var functionToString = uncurryThis$5(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$7(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store.inspectSource;

var uncurryThis$4 = functionUncurryThis;
var fails$4 = fails$b;
var isCallable$6 = isCallable$e;
var hasOwn$3 = hasOwnProperty_1;
var DESCRIPTORS$1 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
var $String$3 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;
var stringSlice$1 = uncurryThis$4(''.slice);
var replace = uncurryThis$4(''.replace);
var join = uncurryThis$4([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$1 && !fails$4(function () {
  return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (stringSlice$1($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String$3(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$1) defineProperty$2(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
    defineProperty$2(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$3(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$1) defineProperty$2(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$3(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$6(this) && getInternalState$1(this).source || inspectSource(this);
}, 'toString');

var makeBuiltInExports = makeBuiltIn$2.exports;

var isCallable$5 = isCallable$e;
var definePropertyModule$1 = objectDefineProperty;
var makeBuiltIn = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$3 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$5(value)) makeBuiltIn(value, name, options);
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

var getBuiltIn = getBuiltIn$3;
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$4;

var concat = uncurryThis$3([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$2 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$2 = hasOwnProperty_1;
var ownKeys$1 = ownKeys$2;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys$1(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$3 = fails$b;
var isCallable$4 = isCallable$e;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$4(detection) ? fails$3(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var globalThis$2 = globalThis_1;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var defineBuiltIn$2 = defineBuiltIn$3;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

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
    target = globalThis$2;
  } else if (STATIC) {
    target = globalThis$2[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis$2[TARGET] && globalThis$2[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
    }
    defineBuiltIn$2(target, key, sourceProperty, options);
  }
};

var fails$2 = fails$b;

var correctPrototypeGetter = !fails$2(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$1 = hasOwnProperty_1;
var isCallable$3 = isCallable$e;
var toObject = toObject$2;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$3(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$1 = fails$b;
var isCallable$2 = isCallable$e;
var isObject$2 = isObject$8;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$3;
var wellKnownSymbol$5 = wellKnownSymbol$8;

var ITERATOR$2 = wellKnownSymbol$5('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$2(IteratorPrototype$2) || fails$1(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$2(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$1(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$1 = objectDefineProperty.f;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol$4 = wellKnownSymbol$8;

var TO_STRING_TAG$2 = wellKnownSymbol$4('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG$2)) {
    defineProperty$1(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$2 = setToStringTag$3;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$2 = functionUncurryThis;
var aCallable = aCallable$2;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$2(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isObject$1 = isObject$8;

var isPossiblePrototype$1 = function (argument) {
  return isObject$1(argument) || argument === null;
};

var isPossiblePrototype = isPossiblePrototype$1;

var $String$2 = String;
var $TypeError = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String$2(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var isObject = isObject$8;
var requireObjectCoercible$1 = requireObjectCoercible$4;
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
    requireObjectCoercible$1(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$1 = _export;
var call = functionCall;
var FunctionName = functionName;
var isCallable$1 = isCallable$e;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn = defineBuiltIn$3;
var wellKnownSymbol$3 = wellKnownSymbol$8;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$3('iterator');
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
  var nativeIterator = IterablePrototype[ITERATOR$1]
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
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$1(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
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
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$1({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables = addToUnscopables$1;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineProperty = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

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
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
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
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

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

var globalThis$1 = globalThis_1;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var setToStringTag = setToStringTag$3;
var wellKnownSymbol$2 = wellKnownSymbol$8;

var ITERATOR = wellKnownSymbol$2('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(globalThis$1[COLLECTION_NAME] && globalThis$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function IoClose (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},"child":[]}]})(props);
}function IoEyeOff (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zM248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39zm16-119.7L315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39z"},"child":[]},{"tag":"path","attr":{"d":"M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.81 343.81 0 0 0 67.24-77.4zM256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352z"},"child":[]}]})(props);
}function IoEye (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"256","cy":"256","r":"64"},"child":[]},{"tag":"path","attr":{"d":"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"},"child":[]}]})(props);
}

var Header = _ref => {
  var {
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg",
    alt: "EVzone Logo",
    className: "header-icon"
  })), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "evzone"
  }, "EVzone"), /*#__PURE__*/React.createElement("span", {
    className: "pay"
  }, " Pay"))), onClose && /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(IoClose, null))), /*#__PURE__*/React.createElement("style", null, "\n        .popup-header {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          margin-bottom: 15px;\n          width: 100%;\n          padding: 10px 15px;\n          border-bottom: 1px solid #ddd;\n        }\n\n        .header-content {\n          display: flex;\n          align-items: center;\n          justify-content: flex-start;\n          padding-left: 5px;\n        }\n\n        .logo {\n          width: 36px;\n          height: 36px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          margin-right: 10px;\n          border-radius: 50%;\n          overflow: hidden;\n        }\n\n        .header-icon {\n          width: 100%;\n          height: auto;\n        }\n\n        .popup-header h2 {\n          font-size: 1.1em;\n          color: #080808;\n          margin: 0;\n          font-weight: 600;\n        }\n\n        .popup-header .evzone {\n          color: #0a0a0a;\n        }\n\n        .popup-header .pay {\n          color: #0a0a0a;\n        }\n\n        .close-btn {\n          background: none;\n          border: none;\n          padding: 0; /* Remove padding to keep it minimal */\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n\n        .close-btn svg {\n          font-size: 1.2em; /* Smaller icon size */\n          color: #ff5a5f; /* Same color as before */\n          transition: color 0.3s ease;\n        }\n\n        .close-btn:hover svg {\n          color: #e04f53; /* Slightly darker on hover */\n        }\n      "));
};

var HasAccountSummary = _ref => {
  var {
    onLoginSuccess,
    onClose
  } = _ref;
  useEffect(() => {
    var checkPopup;
    var timeout;
    var handleMessage = event => {
      if (!event.data || typeof event.data !== 'object') {
        console.log('Invalid event data');
        return;
      }
      var {
        user_id,
        auth_token
      } = event.data;
      if (user_id && auth_token) {
        console.log('Received user_id:', user_id, 'auth_token:', auth_token);
        onLoginSuccess(user_id, auth_token);
        window.removeEventListener('message', handleMessage);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      clearInterval(checkPopup);
      clearTimeout(timeout);
      window.removeEventListener('message', handleMessage);
      console.log('HasAccountSummary unmounted');
    };
  }, [onLoginSuccess]);
  var handleSignIn = () => {
    var callbackUrl = "".concat(window.location.origin, "/wallet-callback");
    var loginUrl = "https://efs-gp9p6.ondigitalocean.app?redirect_uri=".concat(encodeURIComponent(callbackUrl));
    var popup = window.open(loginUrl, 'Sign In', 'width=500,height=600');
    if (!popup) {
      console.error('Popup blocked');
      alert('Popup blocked. Please allow popups for this site.');
      return;
    }
    var checkPopup = setInterval(() => {
      if (popup.closed) {
        console.log('Popup closed');
        clearInterval(checkPopup);
        onClose();
      }
    }, 500);
    setTimeout(() => {
      if (popup && !popup.closed) {
        popup.close();
      }
      clearInterval(checkPopup);
      onClose();
      alert('Login timed out. Please try again.');
    }, 60000);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "error-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-icon"
  }, "i"), /*#__PURE__*/React.createElement("div", {
    className: "message-text"
  }, /*#__PURE__*/React.createElement("h3", null, "EVzone requires you to sign in to proceed with this transaction"))), /*#__PURE__*/React.createElement("button", {
    onClick: handleSignIn,
    className: "submit-button"
  }, "Sign in"))), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n        .popup-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          background: white;\n          border-radius: 10px;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n          max-width: 400px;\n          width: 90%;\n          text-align: center;\n          border: 1px solid #ddd;\n          font-family: Arial, sans-serif;\n          z-index: 1001;\n          position: relative;\n          pointer-events: auto;\n        }\n        .error-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 20px;\n          background-color: #fff;\n          border-radius: 8px;\n        }\n        .message-container {\n          display: flex;\n          align-items: center;\n          width: 100%;\n          margin-bottom: 20px;\n          background-color: #e0f7fa;\n          border-radius: 10px;\n          padding: 10px 15px;\n        }\n        .info-icon {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 40px;\n          height: 40px;\n          background-color: #b3e5fc;\n          color: #0288d1;\n          border-radius: 50%;\n          font-size: 24px;\n          font-weight: bold;\n          margin-right: 15px;\n        }\n        .message-text {\n          flex: 1;\n        }\n        .message-text h3 {\n          font-size: 1.2em;\n          margin: 0;\n          color: #333;\n          font-weight: 500;\n        }\n        .submit-button {\n          background-color: #0288d1;\n          color: #fff;\n          border: none;\n          border-radius: 5px;\n          padding: 10px 20px;\n          font-size: 1em;\n          font-weight: 500;\n          cursor: pointer;\n          transition: background-color 0.3s ease;\n          width: 100%;\n          max-width: 200px;\n        }\n        .submit-button:hover {\n          background-color: #0277bd;\n        }\n      "));
};

var uncurryThis$1 = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$1 = uncurryThis$1(1.0.valueOf);

var wellKnownSymbol$1 = wellKnownSymbol$8;

var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable = isCallable$e;
var classofRaw = classofRaw$1;
var wellKnownSymbol = wellKnownSymbol$8;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

var classof = classof$1;

var $String$1 = String;

var toString$1 = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString = toString$1;
var requireObjectCoercible = requireObjectCoercible$4;

var $RangeError$1 = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n === Infinity) throw new $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $ = _export;
var uncurryThis = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails = fails$b;

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1.0.toFixed);

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
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
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

var FORCED = fails(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
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
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});

var TransactionSummary = _ref => {
  var {
    transactionDetails,
    onConfirm
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "transaction-summary"
  }, transactionDetails.merchantLogo && /*#__PURE__*/React.createElement("img", {
    src: transactionDetails.merchantLogo,
    alt: "Merchant Logo",
    className: "merchant-logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "merchant-info"
  }, /*#__PURE__*/React.createElement("strong", null, transactionDetails.merchantName)), /*#__PURE__*/React.createElement("div", {
    className: "total-billing"
  }, /*#__PURE__*/React.createElement("span", null, "Total Billing"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.billedCurrency, " ", transactionDetails.totalBilling.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "transaction-details"
  }, /*#__PURE__*/React.createElement("h4", null, "Transaction Details"), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "Type"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.type)), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "To"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.id)), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "Particulars"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.particulars)), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "Billed Currency"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.billedCurrency)), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "Billed Amount"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.billedCurrency, " ", transactionDetails.billedAmount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "detail total-billing-detail"
  }, /*#__PURE__*/React.createElement("span", null, "Total Billing"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.billedCurrency, " ", transactionDetails.totalBilling.toFixed(2)))), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    className: "confirm-button"
  }, "Confirm"))), /*#__PURE__*/React.createElement("style", null, "\n        .popup-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          background: white;\n          border-radius: 10px;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n          max-width: 400px;\n          width: 90%;\n          text-align: center;\n          border: 1px solid #ddd;\n          font-family: Arial, sans-serif;\n          z-index: 1001;\n          position: relative;\n          pointer-events: auto;\n        }\n\n        .transaction-summary {\n          text-align: center;\n          width: 100%;\n          padding: 0 15px;\n        }\n\n        .merchant-logo {\n          width: 60px;\n          height: 60px;\n          margin: 10px auto;\n          border-radius: 50%;\n          object-fit: contain;\n        }\n\n        .merchant-info {\n          font-size: 1.2em;\n          font-weight: bold;\n          color: #333;\n          margin-bottom: 5px;\n        }\n\n        .total-billing {\n          margin-bottom: 15px;\n        }\n\n        .total-billing span {\n          display: block;\n          font-size: 1em;\n          color: #666;\n          margin-bottom: 5px;\n        }\n\n        .total-billing strong {\n          font-size: 1.5em;\n          font-weight: bold;\n          color: #000;\n        }\n\n        .transaction-details {\n          background: #f9f9f9;\n          padding: 15px;\n          border-radius: 8px;\n          margin-bottom: 20px;\n          display: flex;\n          flex-direction: column;\n          text-align: left;\n        }\n\n        .transaction-details h4 {\n          font-size: 1.1em;\n          font-weight: bold;\n          color: #333;\n          margin-bottom: 10px;\n        }\n\n        .transaction-details .detail {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: 5px 0;\n          width: 100%;\n        }\n\n        .transaction-details span {\n          color: #666;\n          font-size: 0.9em;\n          flex-shrink: 0;\n        }\n\n        .transaction-details strong {\n          color: #000;\n          font-size: 0.9em;\n          text-align: right;\n          flex-shrink: 0;\n        }\n\n        .transaction-details .total-billing-detail {\n          margin-top: 10px;\n          padding-top: 10px;\n          border-top: 1px solid #ddd;\n        }\n\n        .confirm-button {\n          width: 100%;\n          background: #007bff;\n          color: #fff;\n          padding: 12px;\n          border-radius: 10px;\n          font-size: 1.1em;\n          font-weight: bold;\n          cursor: pointer;\n          border: none;\n          transition: background-color 0.3s ease;\n          margin-bottom: 15px;\n        }\n\n        .confirm-button:hover {\n          background: #0056b3;\n        }\n      "));
};

var EnterPasscode = _ref => {
  var {
    passcode,
    setPasscode,
    showPasscode,
    setShowPasscode,
    transactionDetails,
    onSubmit,
    onBack
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "passcode-popup"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "merchant-header"
  }, "Merchant Info :"), /*#__PURE__*/React.createElement("div", {
    className: "merchant-details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "merchant-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "merchant-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "merchant-name"
  }, transactionDetails.merchantName), /*#__PURE__*/React.createElement("div", {
    className: "merchant-id"
  }, transactionDetails.id))), /*#__PURE__*/React.createElement("div", {
    className: "merchant-amount"
  }, /*#__PURE__*/React.createElement("strong", null, transactionDetails.billedCurrency, " ", transactionDetails.totalBilling.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    className: "passcode-section"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "passcode"
  }, "Enter Passcode"), /*#__PURE__*/React.createElement("div", {
    className: "passcode-input"
  }, /*#__PURE__*/React.createElement("input", {
    type: showPasscode ? "text" : "password",
    id: "passcode",
    value: passcode,
    onChange: e => setPasscode(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
    maxLength: "6"
  }), /*#__PURE__*/React.createElement("span", {
    className: "toggle-visibility",
    onClick: () => setShowPasscode(!showPasscode)
  }, showPasscode ? /*#__PURE__*/React.createElement(IoEye, null) : /*#__PURE__*/React.createElement(IoEyeOff, null)))), /*#__PURE__*/React.createElement("div", {
    className: "transaction-details"
  }, /*#__PURE__*/React.createElement("p", null, "You are making a payment to ", /*#__PURE__*/React.createElement("strong", null, transactionDetails.merchantName), " and an amount of", /*#__PURE__*/React.createElement("strong", null, " ", transactionDetails.billedCurrency, " ", transactionDetails.totalBilling.toFixed(2)), " will be deducted off your wallet, including:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "0.5% Tax:"), " ", transactionDetails.billedCurrency, " ", (transactionDetails.totalBilling * 0.005).toFixed(2), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "0.5% Wallet Fee:"), " ", transactionDetails.billedCurrency, " ", (transactionDetails.totalBilling * 0.005).toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSubmit,
    className: "confirm-button",
    disabled: !passcode
  }, "Confirm"), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "back-button",
    style: {
      marginTop: '15px'
    }
  }, "Back"))), /*#__PURE__*/React.createElement("style", null, "\n        .passcode-popup {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          background: white;\n          padding: 20px;\n          border-radius: 10px;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n          max-width: 400px;\n          width: 90%;\n          text-align: center;\n          border: 1px solid #ddd;\n          font-family: Arial, sans-serif;\n          z-index: 1001;\n          position: relative;\n          pointer-events: auto;\n        }\n\n        .merchant-header {\n          font-size: 1.2em;\n          font-weight: bold;\n          color: #02CD8D;\n          text-align: left;\n          margin-bottom: 10px;\n          width: 100%;\n        }\n\n        .merchant-details {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          background: #f9f9f9;\n          padding: 12px;\n          border-radius: 8px;\n          margin-bottom: 15px;\n          width: 100%;\n        }\n\n        .merchant-left {\n          display: flex;\n          align-items: center;\n        }\n\n        .merchant-info {\n          display: flex;\n          flex-direction: column;\n          text-align: left;\n        }\n\n        .merchant-name {\n          font-size: 1em;\n          font-weight: bold;\n        }\n\n        .merchant-id {\n          font-size: 0.9em;\n          color: #666;\n        }\n\n        .merchant-amount {\n          text-align: right;\n        }\n\n        .merchant-amount strong {\n          font-size: 1.2em;\n          font-weight: bold;\n          color: #000;\n        }\n\n        .passcode-section {\n          text-align: left;\n          margin-bottom: 20px;\n          width: 100%;\n        }\n\n        .passcode-section label {\n          font-size: 1em;\n          font-weight: bold;\n          color: #000;\n        }\n\n        .passcode-input {\n          position: relative;\n          width: 100%;\n          border: 1px solid #ccc;\n          border-radius: 8px;\n          padding: 12px;\n          font-size: 1.1em;\n          text-align: center;\n          letter-spacing: 5px;\n          background: transparent;\n          display: flex;\n          align-items: center;\n        }\n\n        .passcode-input input {\n          flex: 1;\n          border: none;\n          outline: none;\n          text-align: center;\n          font-size: 1.4em;\n          letter-spacing: 5px;\n          background: transparent;\n          color: #000;\n          font-weight: bold;\n        }\n\n        .passcode-input .toggle-visibility {\n          position: absolute;\n          right: 12px;\n          top: 50%;\n          transform: translateY(-50%);\n          cursor: pointer;\n          font-size: 1.5em;\n          color: #000;\n        }\n\n        .transaction-details {\n          display: flex;\n          align-items: flex-start;\n          background: #e0f0ff;\n          padding: 12px;\n          border-radius: 8px;\n          text-align: left;\n          width: 100%;\n          margin-bottom: 20px;\n        }\n\n        .transaction-details p {\n          font-size: 1em;\n          color: #000;\n          line-height: 1.5;\n          margin: 0;\n        }\n\n        .buttons-container {\n          width: 100%;\n        }\n\n        .confirm-button {\n          width: 100%;\n          background: #007bff;\n          color: #fff;\n          padding: 12px;\n          border-radius: 5px;\n          font-size: 1.1em;\n          cursor: pointer;\n          border: none;\n          transition: background-color 0.3s ease;\n        }\n\n        .confirm-button:disabled {\n          background: #ddd;\n          cursor: not-allowed;\n        }\n\n        .confirm-button:hover:not(:disabled) {\n          background: #0056b3;\n        }\n\n        .back-button {\n          width: 100%;\n          background: white;\n          border: 2px solid red;\n          color: red;\n          padding: 10px 15px;\n          border-radius: 5px;\n          font-size: 1em;\n          cursor: pointer;\n          transition: all 0.3s ease;\n        }\n\n        .back-button:hover {\n          background: white;\n          color: red;\n          border-color: red;\n        }\n      "));
};

// THIS FILE IS AUTO GENERATED
function FaCheckCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},"child":[]}]})(props);
}function FaExclamationCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},"child":[]}]})(props);
}function FaTimesCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},"child":[]}]})(props);
}

var PaymentSuccess = _ref => {
  var {
    amount,
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "success-content"
  }, /*#__PURE__*/React.createElement(FaCheckCircle, {
    className: "icon"
  }), /*#__PURE__*/React.createElement("h3", null, "Payment Successful"), /*#__PURE__*/React.createElement("p", null, "Your payment of UGX ", amount.toFixed(2), " was processed successfully!"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "close-button"
  }, "Close"))), /*#__PURE__*/React.createElement("style", null, "\n        .popup-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          background: white;\n          border-radius: 10px;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n          max-width: 400px;\n          width: 90%;\n          text-align: center;\n          border: 1px solid #ddd;\n          font-family: Arial, sans-serif;\n          z-index: 1001;\n          position: relative;\n          pointer-events: auto;\n        }\n\n        .success-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 20px;\n          background-color: #fff;\n          border-radius: 8px;\n        }\n\n        .success-content .icon {\n          color: #02CD8D;\n          font-size: 40px;\n          margin-bottom: 10px;\n        }\n\n        .success-content h3 {\n          font-size: 1.2em;\n          margin: 0 0 15px;\n          color: #333;\n          font-weight: 500;\n        }\n\n        .success-content p {\n          font-size: 1em;\n          color: #666;\n          margin-bottom: 15px;\n        }\n\n        .close-button {\n          background-color: #0288d1;\n          color: #fff;\n          border: none;\n          border-radius: 5px;\n          padding: 10px 20px;\n          font-size: 1em;\n          font-weight: 500;\n          cursor: pointer;\n          transition: background-color 0.3s ease;\n          width: 100%;\n          max-width: 200px;\n        }\n\n        .close-button:hover {\n          background-color: #0277bd;\n        }\n      "));
};

var PaymentFailed = _ref => {
  var {
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "error-content"
  }, /*#__PURE__*/React.createElement(FaTimesCircle, {
    className: "icon"
  }), /*#__PURE__*/React.createElement("h3", null, "Payment Failed"), /*#__PURE__*/React.createElement("p", null, "Please check your wallet for details."), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "close-button"
  }, "Details"))), /*#__PURE__*/React.createElement("style", null, "\n        .popup-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          background: white;\n          border-radius: 10px;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n          max-width: 400px;\n          width: 90%;\n          text-align: center;\n          border: 1px solid #ddd;\n          font-family: Arial, sans-serif;\n          z-index: 1001;\n          position: relative;\n          pointer-events: auto;\n        }\n\n        .error-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 20px;\n          background-color: #fff;\n          border-radius: 8px;\n        }\n\n        .error-content .icon {\n          color: #ff5a5f;\n          font-size: 40px;\n          margin-bottom: 10px;\n        }\n\n        .error-content h3 {\n          font-size: 1.2em;\n          margin: 0 0 15px;\n          color: #333;\n          font-weight: 500;\n        }\n\n        .error-content p {\n          font-size: 1em;\n          color: #666;\n          margin-bottom: 15px;\n        }\n\n        .close-button {\n          background-color: #0288d1;\n          color: #fff;\n          border: none;\n          border-radius: 5px;\n          padding: 10px 20px;\n          font-size: 1em;\n          font-weight: 500;\n          cursor: pointer;\n          transition: background-color 0.3s ease;\n          width: 100%;\n          max-width: 200px;\n        }\n\n        .close-button:hover {\n          background-color: #0277bd;\n        }\n      "));
};

var InsufficientFunds = _ref => {
  var {
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "error-content"
  }, /*#__PURE__*/React.createElement(FaExclamationCircle, {
    className: "icon"
  }), /*#__PURE__*/React.createElement("h3", null, "Insufficient Funds"), /*#__PURE__*/React.createElement("p", null, "Please add funds to your wallet to proceed."), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "close-button"
  }, "Close"))), /*#__PURE__*/React.createElement("style", null, "\n        .popup-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          background: white;\n          border-radius: 10px;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n          max-width: 400px;\n          width: 90%;\n          text-align: center;\n          border: 1px solid #ddd;\n          font-family: Arial, sans-serif;\n          z-index: 1001;\n          position: relative;\n          pointer-events: auto;\n        }\n\n        .error-content {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 20px;\n          background-color: #fff;\n          border-radius: 8px;\n        }\n\n        .error-content .icon {\n          color: #ff9800;\n          font-size: 40px;\n          margin-bottom: 10px;\n        }\n\n        .error-content h3 {\n          font-size: 1.2em;\n          margin: 0 0 15px;\n          color: #333;\n          font-weight: 500;\n        }\n\n        .error-content p {\n          font-size: 1em;\n          color: #666;\n          margin-bottom: 15px;\n        }\n\n        .close-button {\n          background-color: #0288d1;\n          color: #fff;\n          border: none;\n          border-radius: 5px;\n          padding: 10px 20px;\n          font-size: 1em;\n          font-weight: 500;\n          cursor: pointer;\n          transition: background-color 0.3s ease;\n          width: 100%;\n          max-width: 200px;\n        }\n\n        .close-button:hover {\n          background-color: #0277bd;\n        }\n      "));
};

var LoadingOverlay = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "loading-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loading-content"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg",
    alt: "EvZone Logo",
    className: "loading-logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "loading-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "evzone"
  }, "EVzone"), ' ', /*#__PURE__*/React.createElement("span", {
    className: "pay"
  }, "Pay")))), /*#__PURE__*/React.createElement("style", null, "\n        .loading-overlay {\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.5);\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          z-index: 1001;\n          pointer-events: auto;\n        }\n\n        .loading-content {\n          text-align: center;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          background: white;\n          padding: 30px; /* Increased from 20px to 30px for more space */\n          border-radius: 10px;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n        }\n\n        .loading-logo {\n          width: 120px;\n          height: 120px;\n          margin-bottom: 30px; /* Increased from 20px to 30px for more space */\n          border-radius: 50%;\n          overflow: hidden;\n        }\n\n        .loading-text {\n          font-size: 40px; /* Increased from 36px to 40px */\n          font-weight: bold;\n          margin: 0;\n          animation: blink 1.5s step-start infinite;\n        }\n\n        .loading-text .evzone {\n          color: rgb(76, 184, 123);\n        }\n\n        .loading-text .pay {\n          color: rgb(235, 182, 67);\n        }\n\n        @keyframes blink {\n          0% {\n            opacity: 1;\n          }\n          50% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n      "));
};

// Sample customers for testing
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
    passcode: 'admin123'
  }
};
var getStoredUserId = () => localStorage.getItem('wallet_user_id');
var getStoredAuthToken = () => localStorage.getItem('wallet_auth_token');
var generateTransactionDetails = (amount, transactionId, type, particulars, currency, merchantName, merchantLogo) => ({
  type: type || 'Booking',
  id: transactionId,
  particulars: particulars || 'Hotel Booking',
  billedCurrency: currency || 'UGX',
  billedAmount: amount,
  totalBilling: amount,
  merchantName: merchantName || 'Unknown Merchant',
  merchantLogo: merchantLogo || ''
});
var validatePasscode = (customerId, passcode, amount) => {
  var customer = SAMPLE_CUSTOMERS[customerId];
  if (!customer) return {
    success: false,
    reason: 'no_account'
  };
  if (customer.passcode !== passcode) return {
    success: false,
    reason: 'invalid_passcode'
  };
  if (customer.balance < amount) return {
    success: false,
    reason: 'insufficient_funds'
  };
  SAMPLE_CUSTOMERS[customerId].balance -= amount;
  return {
    success: true
  };
};
var WalletPaymentForm = _ref => {
  var {
    customerId: propCustomerId,
    amount,
    type,
    particulars,
    currency,
    merchantName,
    merchantLogo,
    onClose,
    onSuccess
  } = _ref;
  var [popup, setPopup] = useState('transactionSummary');
  var [passcode, setPasscode] = useState('');
  var [hasAccount, setHasAccount] = useState(null);
  var [paymentStatus, setPaymentStatus] = useState('idle');
  var [showPasscode, setShowPasscode] = useState(false);
  var [transactionId] = useState("W-".concat(Math.floor(Math.random() * 1000000000)));
  var [loading, setLoading] = useState(true);
  var [effectiveCustomerId, setEffectiveCustomerId] = useState(propCustomerId);

  // Debounce onClose
  var debounceOnClose = useCallback(() => {
    var timeout;
    return () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          console.log('Executing debounced onClose');
          onClose();
          timeout = null;
        }, 300);
      }
    };
  }, [onClose]);
  var handleClose = debounceOnClose();
  var checkConditions = useCallback(/*#__PURE__*/_asyncToGenerator(function* () {
    console.log('Checking conditions, propCustomerId:', propCustomerId);
    var customerIdToUse = propCustomerId;
    if (!customerIdToUse || !SAMPLE_CUSTOMERS[customerIdToUse]) {
      var attempts = 0;
      var maxAttempts = 5;
      var tryCredentials = () => {
        attempts++;
        var storedUserId = getStoredUserId();
        var storedAuthToken = getStoredAuthToken();
        console.log("Initial check, attempt ".concat(attempts, ", user_id:"), storedUserId, 'auth_token:', storedAuthToken);
        if (storedUserId && SAMPLE_CUSTOMERS[storedUserId]) {
          customerIdToUse = storedUserId;
          setHasAccount(true);
          setEffectiveCustomerId(customerIdToUse);
          setPopup('transactionSummary');
          setLoading(false);
        } else if (attempts < maxAttempts) {
          setTimeout(tryCredentials, 2000);
        } else {
          setHasAccount(false);
          setEffectiveCustomerId(null);
          setPopup('hasAccountSummary');
          setLoading(false);
        }
      };
      tryCredentials();
    } else {
      setHasAccount(true);
      setEffectiveCustomerId(customerIdToUse);
      setPopup('transactionSummary');
      setLoading(false);
    }
  }), [propCustomerId]);
  useEffect(() => {
    checkConditions();
  }, [checkConditions]);
  var handleLoginSuccess = useCallback((muid, sid) => {
    console.log('Handling login success (from postMessage):', muid, sid);

    // Store the received credentials
    localStorage.setItem('wallet_user_id', muid);
    localStorage.setItem('wallet_auth_token', sid);
    if (muid && SAMPLE_CUSTOMERS[muid]) {
      setEffectiveCustomerId(muid);
      setHasAccount(true);
      setPopup('transactionSummary');
      setLoading(false);
      console.log('Transitioned to transactionSummary, customerId:', muid);
    } else {
      console.error('Invalid MUID or no test user found');
      setHasAccount(false);
      setPopup('hasAccountSummary');
      setLoading(false);
      alert('Login failed. Please try again.');
      handleClose();
    }
  }, [handleClose]);
  var handleConfirm = () => {
    console.log('Confirm clicked, hasAccount:', hasAccount, 'effectiveCustomerId:', effectiveCustomerId);
    if (hasAccount && effectiveCustomerId) {
      setPopup('enterPasscode');
    }
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      console.log('Submitting passcode:', passcode);
      setPaymentStatus('pending');
      var idToValidate = effectiveCustomerId;
      var result = yield validatePasscode(idToValidate, passcode, amount);
      console.log('Validation result:', result);
      setPaymentStatus(result.success ? 'success' : 'failed');
      if (result.success) {
        setPopup('paymentSuccess');
        if (onSuccess) onSuccess();
      } else {
        if (result.reason === 'insufficient_funds') {
          setPopup('insufficientFunds');
        } else {
          setPopup('paymentFailed');
        }
        setTimeout(() => {
          setPopup('transactionSummary');
          setPasscode('');
          setPaymentStatus('idle');
          handleClose();
        }, 5000);
      }
    });
    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleSuccessClose = () => {
    console.log('Success close clicked');
    setPopup('transactionSummary');
    setPasscode('');
    setPaymentStatus('idle');
    handleClose();
  };
  var transactionDetails = generateTransactionDetails(amount, transactionId, type, particulars, currency, merchantName, merchantLogo);
  var renderPopup = () => {
    console.log('Rendering popup:', popup, 'hasAccount:', hasAccount, 'effectiveCustomerId:', effectiveCustomerId);
    switch (popup) {
      case 'hasAccountSummary':
        return /*#__PURE__*/React.createElement(HasAccountSummary, {
          onClose: handleClose,
          onLoginSuccess: handleLoginSuccess
        });
      case 'transactionSummary':
        if (hasAccount === false || !effectiveCustomerId) {
          return /*#__PURE__*/React.createElement(HasAccountSummary, {
            onClose: handleClose,
            onLoginSuccess: handleLoginSuccess
          });
        }
        return /*#__PURE__*/React.createElement(TransactionSummary, {
          transactionDetails: transactionDetails,
          onConfirm: handleConfirm
        });
      case 'enterPasscode':
        return /*#__PURE__*/React.createElement(EnterPasscode, {
          passcode: passcode,
          setPasscode: setPasscode,
          showPasscode: showPasscode,
          setShowPasscode: setShowPasscode,
          transactionDetails: transactionDetails,
          onSubmit: handleSubmit,
          onBack: () => setPopup('transactionSummary')
        });
      case 'paymentSuccess':
        return /*#__PURE__*/React.createElement(PaymentSuccess, {
          amount: amount,
          onClose: handleSuccessClose
        });
      case 'paymentFailed':
        return /*#__PURE__*/React.createElement(PaymentFailed, {
          onClose: handleClose
        });
      case 'insufficientFunds':
        return /*#__PURE__*/React.createElement(InsufficientFunds, {
          onClose: handleClose
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wallet-payment-form"
  }, loading ? /*#__PURE__*/React.createElement(LoadingOverlay, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "overlay",
    onClick: handleClose
  }), renderPopup())), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n        .wallet-payment-form {\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          z-index: 1000;\n        }\n        .overlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.5);\n          z-index: 999;\n          pointer-events: auto;\n        }\n      "));
};

export { WalletPaymentForm as default };
//# sourceMappingURL=WalletPaymentForm.esm.js.map
