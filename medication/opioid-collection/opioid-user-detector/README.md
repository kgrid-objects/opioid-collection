# Opioid User Detector
Created March 6, 2017

### Background Information...
This object takes in a medication regimen (Rxnorm RXCUI SBD & SCD product codes) and checks if an opioid is present.

### Running Locally...
Prior to running the script, run the function test() to make sure calculations are working correctly.

To run this object, execute the function execute(). Input should be formatted as the following:
  execute({"rxcui":"1723222 2101 10767"})

"rxcui" is a key word the program searches for. Therefore, these coded strings should not be altered. To check if the rxCUI is an opioid, we have hardcoded a list of opioid rxCUI's and compare the inputs to that list. The object will output a binary string of True/False (i.e."Opioid? True").


### Getting started...
  To run program from terminal, go to terminal and cd into the directory where the python file is located. Enter the following:
  1. python
  2. import opioid-user-detector.py
  3. opioid-user-detector.execute({"rxcui":"1723222 2101 10767"})

### Running through SHELF REST API...
  To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable.
  The ark ID for this object is: **ark:/99999/fk4vx0mr08**

  1. To add to shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf/ark:/99999/fk4vx0mr08
  2. To check shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf
  3. To execute:
    - Add the following headers:
      - Content-Type:application/json
      - Accept:application/json
    - Enter input into "body" (i.e. {"rxcui":"1723222 2101 10767"})
    - Run the POST command. http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/99999/fk4vx0mr08/result
