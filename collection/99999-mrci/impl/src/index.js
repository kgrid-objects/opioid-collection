function mrci(inputs){
  var totalMRCI = 0
  var output = {}
  output.prescriptions = []
  var list=masterlisting()
  for(var i=0; i<inputs.prescriptions.length;i++) {
    var sig = inputs.prescriptions[i].sig.replace(inputs.prescriptions[i].medicationname)
    var key_A = routeformkeylookup(inputs.prescriptions[i].route.toLowerCase(),inputs.prescriptions[i].form.toLowerCase())
    var key_B = freqkeylookup(inputs.prescriptions[i].dosage)
    var key_C = additionaldirkey(inputs.prescriptions[i])
    var prescription = {}
    prescription.rxnorm=inputs.prescriptions[i].rxnorm
    prescription.medicationname = inputs.prescriptions[i].medicationname
    prescription.sig = inputs.prescriptions[i].sig
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
    prescription.mrciWeighting=mrciWeighting
    output.prescriptions.push(prescription)
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
  output.totalMedication = output.prescriptions.length
  output.totalMRCI=totalMRCI
  return output;
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
function freqkeylookup(dosage){
  var keys = []
  var dict = {
    "once daily":"once_daily",
    "once daily prn":"once_daily_prn",
    "twice daily":"twice_daily",
    "twice daily prn":"twice_daily_prn",
    "3 times daily":"threetimes_daily",
    "3 times daily prn":"threetimes_daily_prn",
    "4 times daily":"fourtimes_daily",
    "4 times daily prn":"fourtimes_daily_prn",
    "every 12 hours":"q_12h",
    "every 12 hours prn":"q_12h_prn",
    "every 8 hours":"q_8h",
    "every 8 hours prn":"q_8h_prn",
    "every 6 hours":"q_6h",
    "every 6 hours prn":"q_6h_prn",
    "every 4 hours":"q_4h",
    "every 4 hours prn":"q_4h_prn",
    "every 2 hours":"q_2h",
    "every 2 hours prn":"q_2h_prn",
    "prn":"prn",
    "sos":"prn",
    "on alternate days":"alt_day_less_freq",
    "less frequently":"alt_day_less_freq",
    "oxygen prn":"oxy_prn",
    "oxygen <15hrs":"oxy_lt15hr",
    "oxygen >15hrs":"oxy_gt15hr",
    "every 24 hours":"once_daily",
    "every 15 min prn":"q_15m_prn",
    "each morning":"once_daily",
    "each night":"once_daily",
    "at midday":"once_daily",
    "each morning and afternoon":'twice_daily',
    "weekly":"alt_day_less_freq",
    "at night as needed":"once_daily_prn",
    "every 4–6 hours":'q_6h',
    "daily":"once_daily",
    "at lunch":"once_daily",
    "each week":"alt_day_less_freq",
    "as needed":"prn"
  }
  dosage.forEach(function(d){
    keys.push(dict[d.frequency.toLowerCase()] || 'na')
  })
  return keys
}

//**  Keys for Section C
function additionaldirkey(p) {
  var keys = []
  var alt_dose = false
  var prev_dose = 0
  p.dosage.forEach(function(d){
    var dose = 0
    var doseArr = d.value.split('-')
    if(doseArr.length>1) {
      keys.push('variable_dose')
      dose = doseArr[0]
    } else {
      dose = d.value
    }
    if(prev_dose!=0){
      alt_dose = alt_dose | prev_dose!=dose
    }
    if(alt_dose) {
      keys.push('alt_dose')
    }
    prev_dose=dose
    if(( parseFloat(dose) / p.strength.value ) > 1) {
      keys.push('multiple_unit')
    }
    if( includes(p.sig, 'morning')
      | includes(p.sig, 'night')
      | includes(p.sig, 'lunch')
      | includes(p.sig, 'midday')
    ){
      keys.push('spcf_time')
    }
    if( includes(p.sig, 'use as directed')
      | includes(p.sig, 'take as directed')
    ){
      keys.push('as_directed')
    }
    if( includes(p.sig, 'food')
    ){
      keys.push('rel_food')
    }
  })
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

function includes(s, ss){
  return s.split(ss).length>1
}
