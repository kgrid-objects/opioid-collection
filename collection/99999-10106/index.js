function opioidadvisor(inputs) {

  try {
    var informessages = [];
    var list=[];
    for(var i=0; i<inputs.prescriptions.length;i++) {
      list.push(inputs.prescriptions[i].rxnorm)
    }
    var prescriptions ={};
    prescriptions.rxcuis=list.join(",");

    informessages.push("list of prescriptions " + JSON.stringify(prescriptions));

    var opioidDetectorResponse =  context.getExecutor("99999-10101/v0.1.0/opioidDetector").execute(prescriptions);
    informessages.push("opioidDetectorResponse " + JSON.stringify(opioidDetectorResponse));
    var opioidbzdDetectorResponse = context.getExecutor("99999-10102/v0.1.0/opioidbzdDetector").execute(prescriptions);
    informessages.push(" opioidbzdDetectorResponse " + JSON.stringify(opioidbzdDetectorResponse));
    var tripleThreatDetectorResponse = context.getExecutor("99999-10103/v0.1.0/tripleThreatDetector").execute(prescriptions);
    informessages.push(" tripleThreatDetectorResponse " + JSON.stringify(tripleThreatDetectorResponse));

    var report = {};
    report.patient_id=inputs.id;
    report.opioid_detected=opioidDetectorResponse.condition_satisfied;
    report.benzo_detected=opioidbzdDetectorResponse.condition_satisfied
    report.muscle_relaxant_detected=tripleThreatDetectorResponse.condition_satisfied;

    return report;

  } catch(err) {
    throw "Error loading opioid detectors "+err + " rxnorms " + JSON.stringify(prescriptions) + " processing " + informessages;
  }





}
