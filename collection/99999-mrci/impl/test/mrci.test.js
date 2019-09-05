const rewire = require("rewire")
const javascript = rewire("../src/index")
const data = require('./testdata')
var mrci = javascript.__get__("mrci")

data.forEach(function(pt){
  test(pt.input.id, () => {
    var result = mrci(pt.input)
    result.prescriptions.forEach(function(p){
      console.log(p.mrciWeighting)
    })
    console.log('Medication Regimen Complexity Index: '+result.totalMRCI)
    expect(result.totalMRCI)
      // .toBe(pt.output)
      .toBeGreaterThan(1)
  })
})
