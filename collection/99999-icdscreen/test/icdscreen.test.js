const rewire = require("rewire");
const javascript = rewire("../src/index");
const data = require('./testdata');
var icdscreen = javascript.__get__("icdscreen");
data.forEach(function(pt){
  test("test", () => {
    var result = icdscreen(pt.input);
    expect(result.conflict)
  })
});
