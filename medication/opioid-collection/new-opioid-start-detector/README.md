# New Opioid Start Detector
Created February 10, 2017

### Background Information...
This object takes in a two visit summaries (e.g. admit and discharge summary), and identifies if the patient is a new opioid starter (in their last visit, they were prescribed an opioid and were not prescribed an opioid in their prior visit).



### Running Locally...
Prior to running the script, run the function test() to make sure calculations are working correctly.

To run this object, execute the function execute(). Input should be formatted as the following:
  execute({"visitA":{"date":"2/4/20","rxcui":"70"},"visitB":{"date":"2013/3/31","rxcui":"790"}})

"visitA", "visitB", "date" and "rxcui" are key words the program searches for. Therefore, these coded strings should not be altered. date must be formatted as YYYY/MM/DD. To check if the rxCUI is an opioid, we have hardcoded a list of opioid rxCUI's and compare the inputs to that list.


### Getting started...
  To run program from terminal, go to terminal and cd into the directory where the python file is located. Enter the following:
  1. python
  2. import new-opioid-start-detector.py
  3. new-opioid-start-detector.execute({"visitA":{"date":"2/4/20","rxcui":"70"},"visitB":{"date":"2013/3/31","rxcui":"790"}})

### Running through SHELF REST API...
  To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable.
  The ark ID for this object is: **ark:/99999/fk43b69v25**

  1. To add to shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf/ark:/99999/fk43b69v25
  2. To check shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf
  3. To execute:
    - Add the following headers:
      - Content-Type:application/json
      - Accept:application/json
    - Enter input into "body"
    - Run the POST command. http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/99999/fk43b69v25/result
