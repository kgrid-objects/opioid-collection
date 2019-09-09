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

//**  Keys for Section A
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
    },
    "others":{
      "dialysate":"dialysate",
      "enema":"enema",
      "pessary":"pessary",
      "patient controlled analgesia":"pca",
      "suppository":"suppository",
      "vaginal cream":"vcream"
    }
  }
  return route_dict[route]+'-'+form_dict[route][form]
}

//**  Keys for Section B
function freqkeylookup(freq){
  var keys = []
  var freqArr = freq.split(' and ')
  var dict = {
    "once daily":"once_daily",
    "once daily prn":"once_daily_prn",
    "twice daily":"twice_daily",
    "twice daily prn":"twice_daily_prn",
    "3 times daily":"threetimes_daily",
    "every 6 hours":"q_6h",
    "every 6 hours prn":"q_6h_prn",
    "every 24 hours":"once_daily",
    "every 15 min prn":"q_15m_prn",
    "each morning":"once_daily",
    "each night":"once_daily",
    "prn":"prn",
    "sos":"prn"
  }
  for(var i=0; i<freqArr.length;i++) {
    keys.push(dict[freq] || 'na')
  }
  return keys
}

//**  Keys for Section C
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
    "oral-garg_rinse":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "oral-gum_loz":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "oral-liquid":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "oral-powd_gran":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "oral-slspry_sltab":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "topical-crm_gel_oint":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "topical-dressing":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "topical-pnt_sln":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "topical-paste":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "topical-patch":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "topical-spray":{ "section":"A", "count": 0, "weighting": 1, "subtotal": 0 },
    "ear-drp_crm_oint":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "eye-drop":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "eye-gel_oint":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "nose-drp_crm_oint":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "nose-spray":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "injection-solution":{ "section":"A", "count": 0, "weighting": 4, "subtotal": 0 },
    "injection-prefilled":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "injection-amp_vial":{ "section":"A", "count": 0, "weighting": 4, "subtotal": 0 },
    "inhalation-accuhaler":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "inhalation-aerolizer":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "inhalation-mdi":{ "section":"A", "count": 0, "weighting": 4, "subtotal": 0 },
    "inhalation-nebuliser":{ "section":"A", "count": 0, "weighting": 5, "subtotal": 0 },
    "inhalation-oxy_cct":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "inhalation-turbuhaler":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "inhalation-dpi":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "others-dialysate":{ "section":"A", "count": 0, "weighting": 5, "subtotal": 0 },
    "others-enema":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "others-pessary":{ "section":"A", "count": 0, "weighting": 3, "subtotal": 0 },
    "others-pca":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "others-suppository":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "others-vcream":{ "section":"A", "count": 0, "weighting": 2, "subtotal": 0 },
    "once_daily":{ "section":"B", "count": 0, "weighting": 1, "subtotal": 0 },
    "once_daily_prn":{ "section":"B", "count": 0, "weighting": 0.5, "subtotal": 0 },
    "twice_daily":{ "section":"B", "count": 0, "weighting": 2, "subtotal": 0 },
    "twice_daily_prn":{ "section":"B", "count": 0, "weighting": 1, "subtotal": 0 },
    "threetimes_daily":{ "section":"B", "count": 0, "weighting": 3, "subtotal": 0 },
    "threetimes_daily_prn":{ "section":"B", "count": 0, "weighting": 1.5, "subtotal": 0 },
    "fourtimes_daily":{ "section":"B", "count": 0, "weighting": 4, "subtotal": 0 },
    "fourtimes_daily_prn":{ "section":"B", "count": 0, "weighting": 2, "subtotal": 0 },
    "q_12h":{ "section":"B", "count": 0, "weighting": 2.5, "subtotal": 0 },
    "q_12h_prn":{ "section":"B", "count": 0, "weighting": 1.5, "subtotal": 0 },
    "q_8h":{ "section":"B", "count": 0, "weighting": 3.5, "subtotal": 0 },
    "q_8h_prn":{ "section":"B", "count": 0, "weighting": 2, "subtotal": 0 },
    "q_6h":{ "section":"B", "count": 0, "weighting": 4.5, "subtotal": 0 },
    "q_6h_prn":{ "section":"B", "count": 0, "weighting": 2.5, "subtotal": 0 },
    "q_4h":{ "section":"B", "count": 0, "weighting": 6.5, "subtotal": 0 },
    "q_4h_prn":{ "section":"B", "count": 0, "weighting": 3.5, "subtotal": 0 },
    "q_2h":{ "section":"B", "count": 0, "weighting": 12.5, "subtotal": 0 },
    "q_2h_prn":{ "section":"B", "count": 0, "weighting": 6.5, "subtotal": 0 },
    "q_15m_prn":{ "section":"B", "count": 0, "weighting": 6.5, "subtotal": 0 },
    "prn":{ "section":"B", "count": 0, "weighting": 0.5, "subtotal": 0 },
    "alt_day_less_freq":{ "section":"B", "count": 0, "weighting": 2, "subtotal": 0 },
    "oxy_prn":{ "section":"B", "count": 0, "weighting": 1, "subtotal": 0 },
    "oxy_lt15hr":{ "section":"B", "count": 0, "weighting": 2, "subtotal": 0 },
    "oxy_gt15hr":{ "section":"B", "count": 0, "weighting": 3, "subtotal": 0 },
    "brk_crsh_tab":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 },
    "dsv_tab_powd":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 },
    "multiple_unit":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 },
    "variable_dose":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 },
    "spcf_time":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 },
    "rel_food":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 },
    "spcf_fluid":{ "section":"C", "count": 0, "weighting": 1, "subtotal": 0 },
    "as_directed":{ "section":"C", "count": 0, "weighting": 2, "subtotal": 0 },
    "taper_increase_dose":{ "section":"C", "count": 0, "weighting": 2, "subtotal": 0 },
    "alt_dose":{ "section":"C", "count": 0, "weighting": 2, "subtotal": 0 }
  }
  return masterlist
}
