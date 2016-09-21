'use strict';

const dns = require('dns');
const _ = require('underscore');
const sync = require('synchronize');

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
  hasRecords: function(done) {
    sync.fiber(() => {
      var vals = sync.await(dns.resolveTxt(this._domain, sync.defer()));
      return _.chain(vals)
        .flatten()
        .some(function(record) {
          return record.indexOf('v=spf') > -1;
        })
        .value();
    }, done);
  }
});

module.exports = SPFValidator;
