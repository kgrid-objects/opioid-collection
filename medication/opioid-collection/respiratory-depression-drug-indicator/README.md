# Respiratory Depression Drug Indicator (NBM)
ObjectTeller
Created November 1, 2016

### Background Information...
This object takes in a patients prescriptions as a list of drug IDs and outputs a string if they are at risk for respiratory depression based on a combination of an opioid, benzodiazepine, and muscle relaxant.

### Objective...
Identify regimens where the risk of harm from respiratory depression is real.

### Running...
Prior to running the script, run test() to make sure calculations are working correctly.

To run this object, use scanForRespiratoryDepressionMedications(). Input should be formatted as the following, with spaces between each drug ID the patient is taking.
 	{"rxcui":" Id Id Id etc.."}.

"rxcui" is a coded key that should not be changed.

The object uses a reference list of drug IDs associated with opioids, benzodiazepine, and muscle relaxant. The reference list is available from rxnav.nlm.nih.gov (https://rxnav.nlm.nih.gov/REST/rxclass/). The list can be pre-generated from that URL. To run the API, import requests and re, and run makeListOfRxCUIs(classID).

### Getting started...
  To run program from terminal, go to terminal and cd into directory where the python file is located. Enter the following:
  1. python
  2. import NBM
  3. NBM.scanForRespiratoryDepressionMedications({"rxcui":"Id Id Id"})

### Running through SHELF REST API...
To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable.
The ark ID for this object is:**ark:/67034/k43k5p**
    To add to shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf/ark:/67034/k43k5p
    To check shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf
    To execute: after entering input into "body", http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/67034/k43k5p/result

### Notes for future development...
This script was created with a potential to extract the API calls into a separate knowledge object. If defined as a separate object, one could utilize object chaining to call the API knowledge object on this knowledge object.
