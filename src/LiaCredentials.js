const LiaCredentials = (() => {
  let clientName;
  let clientId;
  let clientSecret;
  let tenantId;
  let communityUrl;
  let instanceId;

  class LiaCredentials {
    constructor(config) {
      clientName = config.clientName;
      clientId = config.clientId;
      clientSecret = config.clientSecret;
      tenantId = config.tenantId;
      communityUrl = config.communityUrl;
      instanceId = config.instanceId;
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
  }

  return LiaCredentials;
})();

export default LiaCredentials;
