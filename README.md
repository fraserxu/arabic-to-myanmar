# arabic-to-myanmar [![Build Status](https://travis-ci.org/fraserxu/arabic-to-myanmar.svg?branch=master)](https://travis-ci.org/fraserxu/arabic-to-myanmar)

A simple module to conver Arabic numerals to Myanmar numerals

## Usage

`npm i arabic-to-myanmar --save` to install.

```JavaScript
var mn = require('./');
var test = require('tape');

test('myanmar numeral test', function (t) {
  t.plan(4);

  t.equal(mn('๐'), 0);
  t.equal(mn('၁'), 1);
  t.equal(mn('၂'), 2);
  t.equal(mn('၁၂၃၄၅၆၇၈၉၀'), 1234567890)

});

```

https://en.wikipedia.org/wiki/Burmese_numerals

```JavaScript
var NUMBERS_MY = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];
```

```JavaScript
var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
```

## License

MIT
