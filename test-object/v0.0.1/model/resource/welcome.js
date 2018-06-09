function welcome(inputs){
  var regimenList = inputs.name;
  var opioidFound = false;
  var opioidList = [3,4,5,6];
  var T = opioidList.filter(function (el)
  { if ((el)===regimenList)
     {opioidFound= true;};
   });
    return opioidFound;
  }
