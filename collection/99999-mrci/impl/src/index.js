function mrci(inputs){
  var patient = inputs
  var totalMRCI = 0
  var list=masterlisting()
  for(var i=0; i<patient.prescriptions.length;i++) {
    rxprocess(patient.prescriptions[i])
    var mrciWeighting = {}
    if(list[patient.prescriptions[i].key_A]) {
      list[patient.prescriptions[i].key_A].count ++
      mrciWeighting[patient.prescriptions[i].key_A]= list[patient.prescriptions[i].key_A].weighting
    }else{
      mrciWeighting[patient.prescriptions[i].key_A]=''
    }
    patient.prescriptions[i].key_B.forEach(function(e){
      if(list[e]){
        list[e].count ++
        mrciWeighting[e]=list[e].weighting
      }else{
        mrciWeighting[e]=''
      }
    })
    patient.prescriptions[i].key_C.forEach(function(e){
      if(list[e]){
        list[e].count ++
        mrciWeighting[e]=list[e].weighting
      }else{
        mrciWeighting[e]=''
      }
    })
    patient.prescriptions[i].mrciWeighting=mrciWeighting
  }
  for(var key in list){
    if(list[key]){
      if(list[key].section=="A"){
        if(list[key].count>0){
          totalMRCI=totalMRCI+ list[key].weighting
        }
      } else {
        totalMRCI=totalMRCI+ list[key].count*list[key].weighting
      }
    }
  }
  patient.totalMRCI=totalMRCI
  return patient;
}

function rxprocess(prescription) {
  var rxData = prescription
  rxData.key_A = routeformkeylookup(prescription.route.toLowerCase(),prescription.form.toLowerCase())
  rxData.key_B = freqkeylookup(prescription.frequency)
  rxData.key_C = additionaldirkey(prescription)
}

function routeformkeylookup(route, form) {
  var route_dict={
    "oral":"oral",
    "eye":"ear_eye_nose",
    "ear":"ear_eye_nose",
    "nose":"ear_eye_nose",
    "injection":"injection",
    "inhalation":"inhalation"
  }
  var form_dict = {
    "tablet":"cap_tab",
    "solution":"solution",
    "mdi":"mdi"
  }
  return route_dict[route]+'-'+form_dict[form]
}

function freqkeylookup(freq){
  var keys = []
  var freqArr = freq.split(' and ')
  var dict = {
    "EVERY 6 HOURS":"q_6h",
    "EVERY 6 HOURS PRN":"q_6h_prn",
    "EVERY 24 HOURS":"once_daily",
    "EVERY 15 MIN PRN":"q_15m_prn",
    "each morning":"once_daily",
    "each night":"once_daily",
    "twice daily":"twice_daily",
    "3 times daily":"threetimes_daily",
    "PRN":"prn"
  }
  for(var i=0; i<freqArr.length;i++) {
    keys.push(dict[freq] || 'na')
  }
  return keys
}

function additionaldirkey(p) {
  var keys = []
  var dose = 0
  var doseArr = p.dosagevalue.split('-')
  if(doseArr.length>1) {
    keys.push('variable_dose')
    dose = doseArr[0]
  } else {
    dose = p.dosagevalue
  }
  if(( parseFloat(dose) / p.strengthvalue ) > 1) {
    keys.push('multiple_unit')
  }
  return keys
}

function masterlisting(){
  var masterlist = {
    "oral-cap_tab":{ "section":"A", "count": 0, "weighting": 1, "subtotal": 0 },
    "injection-solution":{ "section":"A", "count": 0, "weighting": 4, "subtotal": 0 },
    "inhalation-mdi":{ "section":"A", "count": 0, "weighting": 4, "subtotal": 0 },
    "once_daily":{ "section":"B", "count": 0, "weighting": 1, "subtotal": 0 },
    "twice_daily":{ "section":"B", "count": 0, "weighting": 2, "subtotal": 0 },
    "threetimes_daily":{ "section":"B", "count": 0, "weighting": 3, "subtotal": 0 },
    "q_6h":{ "section":"B", "count": 0, "weighting": 4.5, "subtotal": 0 },
    "q_6h_prn":{ "section":"B", "count": 0, "weighting": 2.5, "subtotal": 0 },
    "q_15m_prn":{ "section":"B", "count": 0, "weighting": 6.5, "subtotal": 0 },
    "prn":{ "section":"B", "count": 0, "weighting": 0.5, "subtotal": 0 },
    "multiple_unit":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 },
    "variable_dose":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 }
  }
  return masterlist
}
