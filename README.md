## spf-validator
This module wraps utilities for checking and validating SPF records.

## Install
```
$ npm install spf-validator --save
```

## Usage

### Initialization
We simply construct an SPFValidator by passing the domain of interest.
```js
var SPFValidator = require('spf-validator');
var validator = new SPFValidator('mixmax.com');
```

### Checking for the existence of SPF records
We can then see if this domain has any SPF records setup.
```js
var hasSPFRecords = validator.hasRecords();
```



## Changelog
0.1.0 - Constructor and hasRecords()