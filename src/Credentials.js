import * as Url from 'url';

const SSO_URI = '/api/2.0/auth/authorize';
const OAUTH_URI = '/auth/oauth2/authorize';

const AUTH_CALLBACK = '://oauth2callback';

const Credentials = (() => {

  let clientName;
  let clientId;
  let clientSecret;
  let tenantId;
  let communityUrl;
  let instanceId;
  let ssoEnabled;

  let authAccessUrl;
  let redirectUrl;

  function setAccessUrls() {
    const url = Url.parse(communityUrl);
    const tokens = url.hostname.split('.').reverse();

    if (tokens[tokens.length - 1] === 'www') {
      tokens.pop();
    }

    redirectUrl = tokens.join('.') + AUTH_CALLBACK;

    let query = {
      'client_id': clientId,
      'redirect_uri': redirectUrl,
      'response_type': 'code'
    };

    let link;

    if (ssoEnabled) {
      link = Url.resolve(communityUrl, SSO_URI);
    } else {
      link = Url.resolve(communityUrl, OAUTH_URI);
    }

    link = Url.parse(link);
    link.query = query;

    authAccessUrl = Url.format(link);
  }

  class Credentials {
    constructor(config) {
      clientName = config.clientName;
      clientId = config.clientId;
      clientSecret = config.clientSecret;
      tenantId = config.tenantId;
      communityUrl = config.communityUrl;
      instanceId = config.instanceId;
      ssoEnabled = !!config.ssoEnabled;

      setAccessUrls();
    }

    get clientName() {
      return clientName;
    }

    get clientId() {
      return clientId;
    }

    get clientSecret() {
      return clientSecret;
    }

    get tenantId() {
      return tenantId;
    }

    get communityUrl() {
      return communityUrl;
    }

    get instanceId() {
      return instanceId;
    }

    get ssoEnabled() {
      return ssoEnabled;
    }

    get authAccessUrl() {
      return authAccessUrl;
    }

    get redirectUrl() {
      return redirectUrl;
    }
  }

  return Credentials;
})();

export default Credentials;
