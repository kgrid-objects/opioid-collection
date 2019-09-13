function opioidadvisor(inputs) {

  try {

    var list=[];
    for(var i=0; i<inputs.prescriptions.length;i++) {
      list.push(inputs.prescriptions[i].rxnorm)
    }
    var prescriptions ={};
    prescriptions.rxcuis=list.join(",");

    var executor = context.getExecutor("99999-10101/v0.0.2/opioidDetector");
    var opioidDetectorResponse = executor.execute(prescriptions);

    executor = context.getExecutor("99999-10102/v0.0.2/opioidbzdDetector");
    var opioidbzdDetectorResponse = executor.execute(prescriptions);

    executor = context.getExecutor("99999-10103/v0.0.2/tripleThreatDetector");
    var tripleThreatDetectorResponse = executor.execute(prescriptions);

    var report = {};
    report.patient_id=inputs.id;
    report.opioid_detected=opioidDetectorResponse.condition_satisfied;
    report.benzo_detected=opioidbzdDetectorResponse.condition_satisfied
    report.muscle_relaxant_detected=tripleThreatDetectorResponse.condition_satisfied;

    return report;

  } catch(err) {
    throw "Error loading opioid detectors "+err + " rxnorms " + JSON.stringify(prescriptions);
  }





}
