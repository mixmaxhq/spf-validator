
const expect = require('chai').expect;
const SPFValidator = require('..');

describe('spf-validator', function() {
  describe('hasRecords', function() {
    it('should be able to retrieve records', function(done) {
      (new SPFValidator('google.com')).hasRecords(function(err, val) {
        expect(err).to.be.null;
        expect(val).to.be.true;
        done();
      });
    });
  });
});
