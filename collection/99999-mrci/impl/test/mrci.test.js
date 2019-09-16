const rewire = require("rewire")
const javascript = rewire("../src/index")
const data = require('./testdata2')
var mrci = javascript.__get__("mrci")
var rxprocess = javascript.__get__("rxprocess")
data.forEach(function(pt){
  test(pt.input.id, () => {
    var result = mrci(pt.input)
    expect(result.MRCI)
      .toBeGreaterThan(1)
  })
})

// var pt=data[7]
// test(pt.input.id, () => {
//   pt.input.prescriptions.forEach(function(p){
//     console.log(rxprocess(p))
//   })
//   var result = mrci(pt.input)
//   console.log('======= '+pt.input.id+ ' ===========')
//   // console.log(result)
//   // result.excludedprescriptions.forEach(function(p){
//   //   console.log(p.mrciWeighting)
//   // })
//   console.log('Total Medications: '+result.MedicationCount+'\n============================================')
//   console.log('Medication Regimen Complexity Index: '+result.MRCI+'\n============================================')
//   expect(result.MRCI)
//     // .toBeGreaterThan(1)
//     .toBe(pt.output)
// })
