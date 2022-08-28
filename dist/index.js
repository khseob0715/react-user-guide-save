'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles_userGuideMask__s-Yht, .styles_userGuideModal__B5w1W {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n  padding: 10px; }\n\n.styles_userGuideModalHeader__NoIjq {\n  margin: 0; }\n\n.styles_userGuideModalContent__K-l49 {\n  max-width: 500px;\n  margin: 35vh auto;\n  padding: 25px;\n  background-color: #fff; }\n\n.styles_userGuideMessage__KwWC4 {\n  position: absolute;\n  top: -10000px;\n  padding: 20px;\n  background-color: #fff;\n  border: 1px solid #eee; }\n  .styles_userGuideMessage__KwWC4:after {\n    content: '';\n    height: 10px;\n    width: 10px;\n    background-color: #fff;\n    position: absolute;\n    transform: rotate(45deg); }\n  .styles_userGuideMessageTitle__dlRLL {\n    margin: 0 0 5px; }\n  .styles_userGuideMessageBody__NZMY- {\n    margin: 0 0 15px; }\n  .styles_userGuideMessageeast__BY9Ne:after {\n    left: -6px;\n    top: 50%;\n    margin-top: -5px;\n    border-left: 1px solid #eee;\n    border-bottom: 1px solid #eee; }\n  .styles_userGuideMessagewest__CuC1M:after {\n    right: -6px;\n    top: 50%;\n    margin-top: -5px;\n    border-right: 1px solid #eee;\n    border-top: 1px solid #eee; }\n  .styles_userGuideMessagenorth__-nU59 {\n    text-align: center; }\n    .styles_userGuideMessagenorth__-nU59:after {\n      left: 50%;\n      bottom: -6px;\n      margin-left: -5px;\n      border-right: 1px solid #eee;\n      border-bottom: 1px solid #eee; }\n  .styles_userGuideMessagesouth__G2MtA {\n    text-align: center; }\n    .styles_userGuideMessagesouth__G2MtA:after {\n      left: 50%;\n      top: -6px;\n      margin-left: -5px;\n      border-left: 1px solid #eee;\n      border-top: 1px solid #eee; }\n";
var styles = {"userGuideMask":"styles_userGuideMask__s-Yht","userGuideModal":"styles_userGuideModal__B5w1W","userGuideModalHeader":"styles_userGuideModalHeader__NoIjq","userGuideModalContent":"styles_userGuideModalContent__K-l49","userGuideMessage":"styles_userGuideMessage__KwWC4","userGuideMessageTitle":"styles_userGuideMessageTitle__dlRLL","userGuideMessageBody":"styles_userGuideMessageBody__NZMY-","userGuideMessageeast":"styles_userGuideMessageeast__BY9Ne","userGuideMessagewest":"styles_userGuideMessagewest__CuC1M","userGuideMessagenorth":"styles_userGuideMessagenorth__-nU59","userGuideMessagesouth":"styles_userGuideMessagesouth__G2MtA"};
styleInject(css_248z);

var win = window;

var createElement = function createElement(type) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var html = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var newDiv = document.createElement(type);
  newDiv.className = className;
  newDiv.innerHTML = html;
  return newDiv;
};

var removeElement = function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

var applyStyle = function applyStyle(el) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dom = el;
  Object.keys(style).forEach(function (key) {
    dom.style[key] = style[key];
  });
  return dom;
};

var defaultButtonConfig = {
  yesText: 'Yes',
  noText: 'No',
  nextText: 'Next',
  skipText: 'Skip',
  finishText: 'Finish'
};

var HelpText = /*#__PURE__*/function (_Component) {
  _inherits(HelpText, _Component);

  var _super = _createSuper(HelpText);

  function HelpText(props) {
    var _this;

    _classCallCheck(this, HelpText);

    _this = _super.call(this, props);
    _this.debouncedApplyStyleToCurrentNode = lodash_debounce(_this.applyStyleToCurrentNode.bind(_assertThisInitialized(_this)), 10);
    _this.mask = createElement('div', "userGuide--mask ".concat(styles.userGuideMask));
    return _this;
  }

  _createClass(HelpText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.showHelp();
      win.addEventListener('resize', this.debouncedApplyStyleToCurrentNode);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.showHelp();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeElement(this.mask);
      this.removeResizeListener();
    }
  }, {
    key: "removeResizeListener",
    value: function removeResizeListener() {
      win.removeEventListener('resize', this.debouncedApplyStyleToCurrentNode);
    }
  }, {
    key: "getNode",
    value: function getNode() {
      var _this$props = this.props,
          title = _this$props.title,
          message = _this$props.message,
          onNext = _this$props.onNext,
          onSkip = _this$props.onSkip,
          position = _this$props.position,
          tooltipWidth = _this$props.tooltipWidth,
          isLast = _this$props.isLast,
          nextText = _this$props.nextText,
          skipText = _this$props.skipText,
          finishText = _this$props.finishText;
      var node = createElement('span', "userGuide--message ".concat(styles.userGuideMessage, " ").concat(styles["userGuideMessage".concat(position)]), '');
      var titleEl = createElement('h3', styles.userGuideMessageTitle, title);
      var messageEl = createElement('p', styles.userGuideMessageBody, message);
      var nextButton = createElement('button', isLast ? 'finish' : 'next', isLast ? finishText : nextText);
      nextButton.addEventListener('click', onNext);
      node.appendChild(titleEl);
      node.appendChild(messageEl);

      if (!isLast) {
        var skipButton = createElement('button', 'skip', skipText);
        skipButton.addEventListener('click', onSkip);
        node.appendChild(skipButton);
      }

      node.appendChild(nextButton);
      return applyStyle(node, {
        width: "".concat(tooltipWidth, "px")
      });
    }
  }, {
    key: "applyStyleToCurrentNode",
    value: function applyStyleToCurrentNode() {
      if (this.helpNeededDOM && this.node) {
        var position = this.props.position;

        var _this$helpNeededDOM$d = this.helpNeededDOM.dom.getBoundingClientRect(),
            helpNeededElTop = _this$helpNeededDOM$d.top,
            helpNeededElLeft = _this$helpNeededDOM$d.left,
            helpNeededElWidth = _this$helpNeededDOM$d.width,
            helpNeededElHeight = _this$helpNeededDOM$d.height; // Add style.top after append, so we can get height of the node


        var _this$node$getBoundin = this.node.getBoundingClientRect(),
            nodeHeight = _this$node$getBoundin.height,
            nodeWidth = _this$node$getBoundin.width;

        var nodeMargin = 10;

        switch (position) {
          case 'east':
            this.node = applyStyle(this.node, {
              left: "".concat(nodeMargin + helpNeededElLeft + helpNeededElWidth, "px"),
              top: "".concat(helpNeededElTop + (helpNeededElHeight / 2 - nodeHeight / 2), "px")
            });
            break;

          case 'west':
            this.node = applyStyle(this.node, {
              left: "".concat(helpNeededElLeft - nodeWidth - nodeMargin, "px"),
              top: "".concat(helpNeededElTop + (helpNeededElHeight / 2 - nodeHeight / 2), "px")
            });
            break;

          case 'north':
            this.node = applyStyle(this.node, {
              left: "".concat(helpNeededElLeft + (helpNeededElWidth / 2 - nodeWidth / 2), "px"),
              top: "".concat(helpNeededElTop - nodeHeight - nodeMargin, "px")
            });
            break;

          case 'south':
            this.node = applyStyle(this.node, {
              left: "".concat(helpNeededElLeft + (helpNeededElWidth / 2 - nodeWidth / 2), "px"),
              top: "".concat(helpNeededElTop + helpNeededElHeight + nodeMargin, "px")
            });
            break;
        }
      }
    }
  }, {
    key: "showHelp",
    value: function showHelp() {
      // Reset original style
      if (this.helpNeededDOM) {
        this.helpNeededDOM.dom.style.position = this.helpNeededDOM.position;
        this.helpNeededDOM.dom.style.zIndex = this.helpNeededDOM.zIndex;
        delete this.helpNeededDOM;
      }

      var _this$props2 = this.props,
          querySelector = _this$props2.querySelector,
          onNext = _this$props2.onNext;

      if (querySelector) {
        var helpNeededDOM = document.querySelector(querySelector);

        if (helpNeededDOM) {
          // Save it so we can reset the style
          this.helpNeededDOM = {
            dom: helpNeededDOM,
            position: helpNeededDOM.style.position,
            zIndex: helpNeededDOM.style.zIndex
          }; // Bring it to view if needed

          helpNeededDOM.scrollIntoView(); // Bring it above the mask so it is not behind transparent background

          helpNeededDOM.style.position = 'relative';
          helpNeededDOM.style.zIndex = 1234;
          removeElement(this.node);
          this.node = this.getNode();
          this.mask.appendChild(this.node); // Append it only it is not already appended

          if (!this.mask.offsetParent) {
            document.body.appendChild(this.mask);
          }

          this.applyStyleToCurrentNode();
        } else {
          onNext();
        }
      } else {
        removeElement(this.mask); // Assuming it has finished with all guides or clicked 'Skip'

        this.removeResizeListener();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children || '';
    }
  }]);

  return HelpText;
}(React.Component);

_defineProperty(HelpText, "propTypes", {
  querySelector: PropTypes__default["default"].string,
  tooltipWidth: PropTypes__default["default"].number,
  title: PropTypes__default["default"].string,
  message: PropTypes__default["default"].string,
  position: PropTypes__default["default"].string,
  // east, west, north, south
  nextText: PropTypes__default["default"].string.isRequired,
  skipText: PropTypes__default["default"].string.isRequired,
  finishText: PropTypes__default["default"].string.isRequired,
  onNext: PropTypes__default["default"].func,
  onSkip: PropTypes__default["default"].func,
  isLast: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].element, PropTypes__default["default"].string])
});

_defineProperty(HelpText, "defaultProps", {
  tooltipWidth: 240,
  position: 'north',
  isLast: false
});

var UserGuide = /*#__PURE__*/function (_Component2) {
  _inherits(UserGuide, _Component2);

  var _super2 = _createSuper(UserGuide);

  function UserGuide(props) {
    var _this2;

    _classCallCheck(this, UserGuide);

    _this2 = _super2.call(this, props);
    _this2.state = {
      helpIndex: 0,
      acceptedConfirm: false
    };
    _this2.userGuideDisabledFromBegenning = !!win.localStorage.getItem("userGuide-".concat(props.guideKey));
    _this2.onSkip = _this2.onSkip.bind(_assertThisInitialized(_this2));
    _this2.onNext = _this2.onNext.bind(_assertThisInitialized(_this2));
    _this2.acceptConfirm = _this2.acceptConfirm.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(UserGuide, [{
    key: "onSkip",
    value: function onSkip() {
      var _this$props3 = this.props,
          guides = _this$props3.guides,
          guideKey = _this$props3.guideKey;
      win.localStorage.setItem("userGuide-".concat(guideKey), true);
      this.setState({
        helpIndex: guides.length
      });
    }
  }, {
    key: "onNext",
    value: function onNext() {
      var guides = this.props.guides;
      var newHelpIndex = this.state.helpIndex + 1;

      if (newHelpIndex > guides.length - 1) {
        this.onSkip();
      } else {
        this.setState({
          helpIndex: newHelpIndex
        });
      }
    }
  }, {
    key: "getYesText",
    value: function getYesText() {
      var yesText = this.props.buttonConfig.yesText;
      return yesText || defaultButtonConfig.yesText;
    }
  }, {
    key: "getNoText",
    value: function getNoText() {
      var noText = this.props.buttonConfig.noText;
      return noText || defaultButtonConfig.noText;
    }
  }, {
    key: "getNextText",
    value: function getNextText() {
      var nextText = this.props.buttonConfig.nextText;
      return nextText || defaultButtonConfig.nextText;
    }
  }, {
    key: "getSkipText",
    value: function getSkipText() {
      var skipText = this.props.buttonConfig.skipText;
      return skipText || defaultButtonConfig.skipText;
    }
  }, {
    key: "getFinishText",
    value: function getFinishText() {
      var finishText = this.props.buttonConfig.finishText;
      return finishText || defaultButtonConfig.finishText;
    }
  }, {
    key: "acceptConfirm",
    value: function acceptConfirm() {
      this.setState({
        acceptedConfirm: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          guides = _this$props4.guides,
          title = _this$props4.title,
          content = _this$props4.content;
      var _this$state = this.state,
          helpIndex = _this$state.helpIndex,
          acceptedConfirm = _this$state.acceptedConfirm;
      var helpConfig = guides[helpIndex] || {};
      var isLast = helpIndex === guides.length - 1;

      if (this.userGuideDisabledFromBegenning) {
        return children || '';
      }

      if (helpIndex === 0 && !acceptedConfirm) {
        return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, children || '', /*#__PURE__*/React__default["default"].createElement("div", {
          className: "userGuide--modal ".concat(styles.userGuideModal)
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: styles.userGuideModalContent
        }, /*#__PURE__*/React__default["default"].createElement("h1", {
          className: styles.userGuideModalHeader
        }, title), /*#__PURE__*/React__default["default"].createElement("p", null, content), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("button", {
          onClick: this.onSkip
        }, this.getNoText()), /*#__PURE__*/React__default["default"].createElement("button", {
          onClick: this.acceptConfirm
        }, this.getYesText())))));
      }

      return /*#__PURE__*/React__default["default"].createElement(HelpText, _extends({}, helpConfig, {
        nextText: this.getNextText(),
        skipText: this.getSkipText(),
        finishText: this.getFinishText(),
        onNext: this.onNext,
        onSkip: this.onSkip,
        isLast: isLast
      }), children || '');
    }
  }]);

  return UserGuide;
}(React.Component);

_defineProperty(UserGuide, "propTypes", {
  title: PropTypes__default["default"].string,
  content: PropTypes__default["default"].string,
  guideKey: PropTypes__default["default"].string.isRequired,
  guides: PropTypes__default["default"].array.isRequired,
  buttonConfig: PropTypes__default["default"].shape({
    yesText: PropTypes__default["default"].string,
    noText: PropTypes__default["default"].string,
    nextText: PropTypes__default["default"].string,
    skipText: PropTypes__default["default"].string,
    finishText: PropTypes__default["default"].string
  }),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].element, PropTypes__default["default"].string])
});

_defineProperty(UserGuide, "defaultProps", {
  guideKey: 'guideKey',
  guides: [],
  title: 'Quick Guide',
  content: 'Would you like us to walk you through different features in this app?',
  buttonConfig: defaultButtonConfig
});

module.exports = UserGuide;
//# sourceMappingURL=index.js.map
