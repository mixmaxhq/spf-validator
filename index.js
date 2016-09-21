'use strict';

const dns = require('dns');
const _ = require('underscore');
const sync = require('synchronize');

function SPFValidator(domain) {
  this._domain = domain;
}

Object.assign(SPFValidator.prototype, {
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
