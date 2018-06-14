import { LI_CORE_SDK_VERSION } from './Constants';
import { generateHexString } from './Utils';
import Credentials from './Credentials';
import * as ApiClient from './rest/ApiClient';

/**
 * Interface to Lithium Community SDK. Provides the
 * entry point into the Community REST API v2 using OAuth2.
 */
const LiaSdk = (() => {
  let credentials;
  let localstorage;
  let version;
  let isInitialized = false;
  let visitorId;
  let client;
  // TODO: auth should be exposed publicly as a read only object
  let auth = {};
  let user;

  class LiaSdk {
    constructor(_credentials, _localstorage) {
      credentials = new Credentials(_credentials);
      Object.freeze(credentials);
      localstorage = _localstorage;
      version = LI_CORE_SDK_VERSION;
      visitorId = generateHexString();
      client = ApiClient.build(this);
      isInitialized = true;
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

    get visitorId() {
      return visitorId;
    }

    get client() {
      return client;
    }

    get auth() {
      return auth;
    }

    get user() {
      return user;
    }

    login(code) {
      return client.login({
        code
      }).then((response) => {
        auth = response.data.data;
        return client.user().then((response) => {
          user = response.data.data.items[0];
          return user;
        });
      });
    }

    logout() {
      user = null;
      localstorage && typeof localstorage.clear === 'function' && localstorage.clear();
    }

    isLoggedIn() {
      return !!user;
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
function build(credentials, localstorage) {

  const instance = new LiaSdk(credentials, localstorage); // create a new instance

  Object.freeze(instance); // freeze the object to make properties read only

  return instance;
};

export default {
  build
};
