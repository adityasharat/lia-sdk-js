import { LI_CORE_SDK_VERSION } from './LiaConstants';
import LiaCredentials from './LiaCredentials';

/**
 * Lia SDK class.
 */
const LiaSdk = (() => {
  let credentials;
  let localstorage;
  let version;

  class LiaSdk {
    constructor(_credentials, _localstorage) {
      credentials = new LiaCredentials(_credentials);
      Object.freeze(credentials);
      localstorage = _localstorage;
      version = LI_CORE_SDK_VERSION;
    }

    get credentials() {
      return credentials;
    }

    get localstorage() {
      return localstorage;
    }

    get version() {
      return version;
    }
  }

  return LiaSdk;
})();

let _isInitialized = false;
let _instance = null;

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

export default {
  isInitialized,
  builder,
  instance
};
