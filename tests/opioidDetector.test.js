const opioidDetector = require('../knowledge_objects/99999-10101/v0.0.1/model/resource/opioidDetector');

test('nothing', () => {
  expect(opioidDetector("{1723209}")).toBe(3);
});