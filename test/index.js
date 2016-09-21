
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

    it('should return false for invalid domains', function(done) {
      (new SPFValidator('not.a.real.domain')).hasRecords(function(err, val) {
        expect(err).to.be.null;
        expect(val).to.be.false;
        done();
      });
    });

    it('should return false for a domain without TXT records', function(done) {
      (new SPFValidator('treytacon.com')).hasRecords(function(err, val) {
        expect(err).to.be.null;
        expect(val).to.be.false;
        done();
      });
    });
  });
});
