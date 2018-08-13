var rewire = require('rewire');
const opioidJS = rewire('../99999-10101/v0.0.1/model/resource/opioidDetector');

var opioidDetector = opioidJS.__get__("opioidDetector");


test('nothing', () => {
  var payload = opioidDetector({rxcuis:"106500,200240,856917,994226,197446,801958"});
  expect(payload.summary.opioid).toBe(true);
});