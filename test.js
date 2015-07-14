var mn = require('./');
var test = require('tape');

test('myanmar numeral test', function (t) {
  t.plan(4);

  t.equal(mn('๐'), 0);
  t.equal(mn('၁'), 1);
  t.equal(mn('၂'), 2);
  t.equal(mn('၁၂၃၄၅၆၇၈၉၀'), 1234567890)

});
