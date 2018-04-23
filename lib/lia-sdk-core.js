(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lia-sdk-core", [], factory);
	else if(typeof exports === 'object')
		exports["lia-sdk-core"] = factory();
	else
		root["lia-sdk-core"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiaSdk = undefined;

var _LiaSdk = __webpack_require__(1);

var LiaSdk = _interopRequireWildcard(_LiaSdk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.LiaSdk = LiaSdk;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LiaConstants = __webpack_require__(2);

var _LiaCredentials = __webpack_require__(3);

var _LiaCredentials2 = _interopRequireDefault(_LiaCredentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Lia SDK class.
 */
var LiaSdk = function () {
  var credentials = void 0;
  var localstorage = void 0;
  var version = void 0;

  var LiaSdk = function () {
    function LiaSdk(_credentials, _localstorage) {
      _classCallCheck(this, LiaSdk);

      credentials = new _LiaCredentials2.default(_credentials);
      Object.freeze(credentials);
      localstorage = _localstorage;
      version = _LiaConstants.LI_CORE_SDK_VERSION;
    }

    _createClass(LiaSdk, [{
      key: 'credentials',
      get: function get() {
        return credentials;
      }
    }, {
      key: 'localstorage',
      get: function get() {
        return localstorage;
      }
    }, {
      key: 'version',
      get: function get() {
        return version;
      }
    }]);

    return LiaSdk;
  }();

  return LiaSdk;
}();

var _isInitialized = false;
var _instance = null;

function builder(credentials, localstorage) {
  if (!_isInitialized) {
    _instance = new LiaSdk(credentials, localstorage);
    Object.freeze(_instance);
    _isInitialized = true;
  }

  return _instance;
};

function isInitialized() {
  return isInitialized;
}

function instance() {
  return _instance;
}

exports.default = {
  isInitialized: isInitialized,
  builder: builder,
  instance: instance
};
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LI_CORE_SDK_VERSION = exports.LI_CORE_SDK_VERSION = '0.1.0';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LiaCredentials = function () {
  var clientName = void 0;
  var clientId = void 0;
  var clientSecret = void 0;
  var tenantId = void 0;
  var communityUrl = void 0;
  var instanceId = void 0;

  var LiaCredentials = function () {
    function LiaCredentials(config) {
      _classCallCheck(this, LiaCredentials);

      clientName = config.clientName;
      clientId = config.clientId;
      clientSecret = config.clientSecret;
      tenantId = config.tenantId;
      communityUrl = config.communityUrl;
      instanceId = config.instanceId;
    }

    _createClass(LiaCredentials, [{
      key: "clientName",
      get: function get() {
        return clientName;
      }
    }, {
      key: "clientId",
      get: function get() {
        return clientId;
      }
    }, {
      key: "clientSecret",
      get: function get() {
        return clientSecret;
      }
    }, {
      key: "tenantId",
      get: function get() {
        return tenantId;
      }
    }, {
      key: "communityUrl",
      get: function get() {
        return communityUrl;
      }
    }, {
      key: "instanceId",
      get: function get() {
        return instanceId;
      }
    }]);

    return LiaCredentials;
  }();

  return LiaCredentials;
}();

exports.default = LiaCredentials;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=lia-sdk-core.js.map