export default {
  generate: (sdk) => {
    return {
      'Content-Type': 'application/json',
      'Auth-Service-Authorization': 'default',
      'client-id': sdk.credentials.clientId,
      'Application-Identifier':	sdk.credentials.clientName,
      'Application-Version': sdk.version,
      'Visitor-Id':	sdk.visitorId
    };
  }
};
