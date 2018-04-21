/* global describe, it, before */

import chai from 'chai';
import { LiaSdk } from '../lib/lia-sdk-core';

chai.expect();

const expect = chai.expect;

let sdk;

describe('Given an instance of the LIA SDK', () => {
  before(() => {
    sdk = new LiaSdk();
  });
  describe('when sdk.version() is called', () => {
    it('should return the version', () => {
      expect(sdk.version()).to.be.equal('0.1.0');
    });
  });
});
