function mrci(inputs){
  var totalMRCI = 0
  var list=masterlisting()
  for(var i=0; i<inputs.prescriptions.length;i++) {
    var key_A = routeformkeylookup(inputs.prescriptions[i].route.toLowerCase(),inputs.prescriptions[i].form.toLowerCase())
    var key_B = freqkeylookup(inputs.prescriptions[i].frequency.toLowerCase())
    var key_C = additionaldirkey(inputs.prescriptions[i])
    var mrciWeighting = {}
    if(list[key_A]) {
      list[key_A].count ++
      mrciWeighting[key_A]= list[key_A].weighting
    }else{
      mrciWeighting[key_A]=''
    }
    key_B.forEach(function(e){
      if(list[e]){
        list[e].count ++
        mrciWeighting[e]=list[e].weighting
      }else{
        mrciWeighting[e]=''
      }
    })
    key_C.forEach(function(e){
      if(list[e]){
        list[e].count ++
        mrciWeighting[e]=list[e].weighting
      }else{
        mrciWeighting[e]=''
      }
    })
    inputs.prescriptions[i].mrciWeighting=mrciWeighting
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
  inputs.totalMRCI=totalMRCI
  return inputs;
}

function routeformkeylookup(route, form) {
  var route_dict={
    "oral":"oral",
    "topical":"topical",
    "eye":"ear_eye_nose",
    "ear":"ear_eye_nose",
    "nose":"ear_eye_nose",
    "injection":"injection",
    "inhalation":"inhalation"
  }
  var form_dict = {
    "oral":{
      "capsule":"cap_tab",
      "tablet":"cap_tab",
      "gargle":"garg_rinse",
      "mouthwash":"garg_rinse",
      "gum":"gum_loz",
      "lozenge":"gum_loz",
      "liquid":"liquid",
      "powder":"powd_gran",
      "granule":"powd_gran",
      "sublingual spray":"slspry_sltab",
      "sublingual tablet":"slspry_sltab",
    },
    "topical":{
      "cream":"crm_gel_oint",
      "gel":"crm_gel_oint",
      "ointment":"crm_gel_oint",
      "dressing":"dressing",
      "paint":"pnt_sln",
      "solution":"pnt_sln",
      "paste":"paste",
      "patch":"patch",
      "spray":"spray"
    },
    "ear":{
      "drop":"drp_crm_oint",
      "cream":"drp_crm_oint",
      "ointment":"drp_crm_oint"
    },
    "eye":{
      "drop":"drop",
      "gel":"gel_oint",
      "ointment":"gel_oint"
    },
    "nose":{
      "drop":"drp_crm_oint",
      "cream":"drp_crm_oint",
      "ointment":"drp_crm_oint",
      "spray":"spray"
    },
    "injection":{
      "solution":"solution",
      "prefilled":"prefilled",
      "ampoule":"amp_vial",
      "vial":"amp_vial"
    },
    "inhalation":{
      "mdi":"mdi",
      "nebuliser":"nebuliser",
      "accuhaler":"accuhaler",
      "aerolizer":"aerolizer",
      "oxygen":"oxy_cct",
      "concentrator":"oxy_cct",
      "turbuhaler":"turbuhaler",
      "dpi":"dpi"
    }
  }
  return route_dict[route]+'-'+form_dict[route][form]
}

function freqkeylookup(freq){
  var keys = []
  var freqArr = freq.split(' and ')
  var dict = {
    "every 6 hours":"q_6h",
    "every 6 hours prn":"q_6h_prn",
    "every 24 hours":"once_daily",
    "every 15 min prn":"q_15m_prn",
    "each morning":"once_daily",
    "each night":"once_daily",
    "twice daily":"twice_daily",
    "3 times daily":"threetimes_daily",
    "prn":"prn"
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
