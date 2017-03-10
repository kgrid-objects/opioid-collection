# Morphine Milligram Equivalents (MME) Calculator
Per-day Morphine Milligram Equivalents (equianalgesia) for non-morphine opioid prescriptions
Created: December 14, 2016

### Description...
This KO takes in a prescription (opiod, dosage, and dosingFrequency), and outputs the MME.

### Running...
Basic Steps:
    1. Determine the total daily amount of each opioid
    2. Convert to MMEs
    3. Total

To run the KO, call execute(opiodPrescriptions).

The input must be formatted as follows, where opiodPrescriptions, dosage, and dosingFrequency represent keys that cannot be changed. Dosage is type float, and dosingFrequency is type string.

  {"opiodPrescriptions":
  	{"opiodType":
  		{"dosage":0.0,
  		"dosingFrequency":""}
  	}
  }

If there are missing keys (opiodPrescriptions, dosage, dosingFrequency), missing values (dosage, dosingFrequency), or non-matching values (dosingConversion, conversionFactors), the MME cannot be calculated and will return an error message.
** Dosage must be in mg. **

### Getting started...
We have included a test() function that should be ran prior to beginning. To run program from terminal, go to terminal and cd into the directory where the python file is located. Enter the following:

1. python2
2. import morphine-milligram-equivalents
3. morphine-milligram-equivalents.execute({"opiodPrescriptions":{"opiodType":{"dosage":0.0,"dosingFrequency":""}}})

### Running through SHELF REST API...
  To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable. The ark ID for this object is: **ark:/99999/fk4c25559n**

  1. To add to shelf: PUT {{baseUrl}}/shelf/ark:/99999/fk4c25559n
  2. To check shelf: GET {{baseUrl}}/shelf
  3. To execute:
    - Add the following headers:
      - Content-Type:application/json
      - Accept:application/json
    - Enter input into "body" (e.g. {"opiodPrescriptions":{"hydromorphone":{"dosage":1.0,"dosingFrequency":"q 12h"}}})
    - Run the POST command. POST {{baseUrl}}knowledgeObject/ark:/99999/fk4c25559n/result

We have also included some helpful execution test functions for this knowledge object, that can be found in the transition of care collection:  transition_of_care_objects.postman_collection.json. See notes in Opioid Collection respository for more information.

### Literature
This calculator is based off the CDC guideline found here: https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf
