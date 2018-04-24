/* global describe, it, before */

import chai from 'chai';
import { LiaSdk } from '../lib/lia-sdk-core';

chai.expect();

const expect = chai.expect;

let sdk;

describe('Given an instance of the LIA SDK', () => {
  before(() => {
    sdk = LiaSdk.builder({
      clientName: 'qwerty1234567890',
      clientId: 'qwerty1234567890',
      clientSecret: 'qwerty1234567890',
      tenantId: 'qwerty1234567890',
      communityUrl: 'https://example.community.com/',
      instanceId: 'qwerty1234567890'
    }, {});
  });

  describe('sdk.version', () => {
    it('should not be null', () => {
      expect(sdk.version).to.not.be.null;
    });
    it('should not be empty', () => {
      expect(sdk.version).to.not.be.empty;
    });
    it('should be read only', () => {
      function write() {
        sdk.version = 'new-value';
      }
      expect(write).to.throw(/version/);
    });
  });

  describe('sdk.credentials', () => {
    it('should not be null', () => {
      expect(sdk.credentials).to.not.be.null;
    });
    it('should be an object', () => {
      expect(sdk.credentials).to.be.an('object');
    });
    it('should be read only', () => {
      function write() {
        sdk.credentials = {};
      }
      expect(write).to.throw(/credentials/);
    });
  });

  describe('sdk.login', () => {
    it('should not be null', () => {
      expect(sdk.login).to.not.be.null;
    });
    it('should be an function', () => {
      expect(sdk.login).to.be.an('function');
    });
    it('should be read only', () => {
      function write() {
        sdk.login = {};
      }
      expect(write).to.throw(/login/);
    });
    it('should set isInitialized to `true`', () => {
      sdk.login();
      expect(sdk.isInitialized).to.be.true;
    });
  });
});
