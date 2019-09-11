const rewire = require("rewire")
const javascript = rewire("../src/index")
const data = require('./testdata')
var mrci = javascript.__get__("mrci")

data.forEach(function(pt){
  // var pt=data[6]
  test(pt.input.id, () => {
    var result = mrci(pt.input)
    console.log('======= '+pt.input.id+ ' ===========')
    result.prescriptions.forEach(function(p){
      console.log(p.mrciWeighting)
    })
    console.log('Total Medications: '+result.totalMedication+'\n============================================')
    console.log('Medication Regimen Complexity Index: '+result.totalMRCI+'\n============================================')
    expect(result.totalMRCI)
      .toBe(pt.output)
      // .toBeGreaterThan(1)
  })
})