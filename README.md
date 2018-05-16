## spf-validator
This module wraps utilities for checking and validating SPF records.

## Install

```
$ npm install spf-validator
```
or
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
validator.hasRecords((err, hasRecords) => console.log(hasRecords));
```



## Changelog
0.2.0 - Make sure we don't have errors when a domain isn't registered or doesn't have any TXT records.
0.1.0 - Constructor and hasRecords()
