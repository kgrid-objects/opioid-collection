function opioidadvisor(inputs) {

  try {
    var informessages = [];
    var list=[];
    for(var i=0; i<inputs.prescriptions.length;i++) {
      list.push(inputs.prescriptions[i].rxnorm)
    }
    var prescriptions ={};
    prescriptions.rxcuis=list.join(",");

    let prescriptionJSONString = JSON.stringify(prescriptions)
    informessages.push("list of prescriptions " + prescriptionJSONString);
    var opioidDetectorResponse =  context.getExecutor("99999/10101/1.0/opioidDetector").execute(prescriptionJSONString, "application/json");
    informessages.push("opioidDetectorResponse " + opioidDetectorResponse);
    var opioidbzdDetectorResponse = context.getExecutor("99999/10102/1.0/opioidbzdDetector").execute(prescriptionJSONString, "application/json");
    informessages.push(" opioidbzdDetectorResponse " + opioidbzdDetectorResponse);
    var tripleThreatDetectorResponse = context.getExecutor("99999/10103/1.0/tripleThreatDetector").execute(prescriptionJSONString, "application/json");
    informessages.push(" tripleThreatDetectorResponse " + tripleThreatDetectorResponse);

    var report = {};
    report.patient_id=inputs.id;
    report.opioid_detected=JSON.parse(opioidDetectorResponse).condition_satisfied;
    report.benzo_detected=JSON.parse(opioidbzdDetectorResponse).condition_satisfied
    report.muscle_relaxant_detected=JSON.parse(tripleThreatDetectorResponse).condition_satisfied;

    return report;

  } catch(err) {
    throw "Error loading opioid detectors "+err + " rxnorms " + JSON.stringify(prescriptions) + " processing " + informessages;
  }





}
