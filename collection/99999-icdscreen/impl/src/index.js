function icdscreen(inputs){
  var regimenList = inputs.rxcuis.split(",");
  var diseaseList = inputs.icd10.split(",");
  var diseaseId = inputs.disease || "G70.00";
  var conflictlist;
  var conflictingDrugs = [141962,204844,141963,308459,308460,248656,1668238,861416,577162,706868,848956,1665210,1665212,197511,309309,199370,309308,309310,309306,309307,403908,1792386,403921,1665227,1665229,1739997];

  if(inputs.conflictlist) {
    conflictlist = inputs.conflictlist.split(",");
    for(var i = 0; i < conflictlist.length; i++) {
      conflictlist[i] = parseInt(conflictlist[i], 10);
    }
  } else {
    conflictlist = conflictingDrugs;
  }

  if(diseaseList.indexOf(diseaseId) !== -1) {
    var conflict = false;
    var druglist = [];

    regimenList.forEach(function (e) {
      var rxcui = parseInt(e, 10);
      if(conflictlist.indexOf(rxcui) !== -1) {
        conflict = true;
        druglist.push(e);
      }
    });
    return {"conflict": conflict, "rxcuis":druglist};
  } else {
    return {"conflict": false, "rxcuis":{}};
  }
}
