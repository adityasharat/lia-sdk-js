import { LI_CORE_SDK_VERSION } from './LiaConstants';
import LiaCredentials from './LiaCredentials';

/**
 * Interface to Lithium Community Android SDK. Provides the
 * entry point into the Community REST API v2 using OAuth2.
 */
const LiaSdk = (() => {
  let credentials;
  let localstorage;
  let version;
  let isInitialized = false;

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

    get isInitialized() {
      return isInitialized;
    }

    login() {
      isInitialized = true;
    }

    logout() {
      localstorage && typeof localstorage.clear === 'function' && localstorage.clear();
      isInitialized = false;
    }

    update() {

    }

    user() {

    }
  }

  return LiaSdk;
})();

/**
 * This builder creates a new instance of the Lia SDK.
 *
 * @param {*} credentials The credentials for authenticating the application.
 * @param {*} localstorage The local storage interface to persist state.
 */
function builder(credentials, localstorage) {

  const instance = new LiaSdk(credentials, localstorage); // create a new instance

  Object.freeze(instance); // freeze the object to make properties read only

  return instance;
};

export default {
  builder
};
