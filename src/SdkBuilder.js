import { LI_CORE_SDK_VERSION } from './Constants';
import { generateHexString } from './Utils';
import Credentials from './Credentials';
import * as RestClient from './rest/RestClient';

/**
 * Interface to Lithium Community Android SDK. Provides the
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
  let auth = {
    token: null
  };

  class LiaSdk {
    constructor(_credentials, _localstorage) {
      credentials = new Credentials(_credentials);
      Object.freeze(credentials);
      localstorage = _localstorage;
      version = LI_CORE_SDK_VERSION;
      visitorId = generateHexString();
      // TODO: This is a hack for development and must be removed
      auth.token = _credentials.token;
      client = RestClient.build(this);
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
function build(credentials, localstorage) {

  const instance = new LiaSdk(credentials, localstorage); // create a new instance

  Object.freeze(instance); // freeze the object to make properties read only

  return instance;
};

export default {
  build
};
