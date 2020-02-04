'use strict';

const dns = require('dns');
const _ = require('underscore');

/**
 * SPFValidator is a validator of SPF records for the given domain.
 * @param {String} domain The domain of interest.
 */
function SPFValidator(domain) {
  this._domain = domain;
}

Object.assign(SPFValidator.prototype, {
  /**
   * hasRecords checks if the domain has any SPF records setup at all.
   * @param  {Function} done Node style callback.
   * @return {Boolean} True if the domain has *any* SPF records, false otherwise.
   */
  hasRecords(done) {
    dns.resolveTxt(this._domain, function(err, vals) {
      if (err) {
        // If the domain isn't registered, if most certainly doesn't have SPF
        // records.
        if (/queryTxt ENOTFOUND/.test(err)) done(null, false);
        // ENODATA means the domain exists but with no TXT records, so it
        // can't have SPF records.
        else if (/queryTxt ENODATA/.test(err)) done(null, false);
        else done(err);
      } else {
        done(
          null,
          _.chain(vals)
            .flatten()
            .some(function(record) {
              return record.indexOf('v=spf') > -1;
            })
            .value()
        );
      }
    });
  },
});

module.exports = SPFValidator;
