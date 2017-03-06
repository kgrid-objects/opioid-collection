# Opioid User Detector
Created March 6, 2017

### Background Information...
This object takes in a medication regimen (Rxnorm RXCUI SBD & SCD product codes) and checks if an opioid is present.

### Running Locally...
Prior to running the script, run the function test() to make sure calculations are working correctly.

To run this object, execute the function execute(). Input should be formatted as the following:
  execute({"rxcui":"1723222 2101 10767"})

"rxcui" is a key word the program searches for. Therefore, these coded strings should not be altered. To check if the rxCUI is an opioid, we have hardcoded a list of opioid rxCUI's and compare the inputs to that list. The object will output a binary string of True/False (e.g."Opioid? True").


### Getting started...
  To run program from terminal, go to terminal and cd into the directory where the python file is located. Enter the following:
  1. python
  2. import opioid-user-detector.py
  3. opioid-user-detector.execute({"rxcui":"1723222 2101 10767"})

### Running through SHELF REST API...
  To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable.
  The ark ID for this object is: **ark:/99999/fk4vx0mr08**

  1. To add to shelf: PUT {{baseUrl}}/shelf/ark:/99999/fk4vx0mr08
  2. To check shelf: GET {{baseUrl}}/shelf
  3. To execute:
    - Add the following headers:
      - Content-Type:application/json
      - Accept:application/json
    - Enter input into "body" (e.g. {"rxcui":"1723222 2101 10767"})
    - Run the POST command. POST {{baseUrl}}knowledgeObject/ark:/99999/fk4vx0mr08/result

We have also included some helpful execution test functions for this knowledge object, that can be found in the transition of care collection:  transition_of_care_objects.postman_collection.json. See notes in Opioid Collection respository for more information.
