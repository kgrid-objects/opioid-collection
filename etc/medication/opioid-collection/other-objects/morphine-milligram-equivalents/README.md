# Morphine Milligram Equivalents (MME) Calculator
Per-day Morphine Milligram Equivalents (equianalgesia) for non-morphine opioid prescriptions
Created: December 14, 2016

### Description...
This KO takes in a prescription (opioid, dosage, and dosingFrequency), and outputs the MME.

### Running...
Basic Steps:
    1. Determine the total daily amount of each opioid
    2. Convert to MMEs
    3. Total

To run the KO, call execute(opioidPrescriptions).

The input must be formatted as follows, where opioidPrescriptions, dosage, and dosingFrequency represent keys that cannot be changed. Dosage is type float, and dosingFrequency is type string.

  {"opioidPrescriptions":
  	{"opioidType":
  		{"dosage":0.0,
  		"dosingFrequency":""}
  	}
  }

If there are missing keys (opioidPrescriptions, dosage, dosingFrequency), missing values (dosage, dosingFrequency), or non-matching values (dosingConversion, conversionFactors), the MME cannot be calculated and will return an error message.
** Dosage must be in mg. **

### Getting started...
We have included a test() function that should be ran prior to beginning. To run program from terminal, go to terminal and cd into the directory where the python file is located. Enter the following:

1. python2
2. import morphine-milligram-equivalents
3. morphine-milligram-equivalents.execute({"opioidPrescriptions":{"opioidType":{"dosage":0.0,"dosingFrequency":""}}})

### Running through SHELF REST API... (if access to the library)
  To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable. The ark ID for this object is: **ark:/99999/fk4c25559n**

  1. To add to shelf: PUT {{baseUrl}}/shelf/ark:/99999/fk4c25559n
  2. To check shelf: GET {{baseUrl}}/shelf
  3. To execute:
    - Add the following headers:
      - Content-Type:application/json
      - Accept:application/json
    - Enter input into "body" (e.g. {"opioidPrescriptions":{"hydromorphone":{"dosage":1.0,"dosingFrequency":"q 12h"}}})
    - Run the POST command. POST {{baseUrl}}knowledgeObject/ark:/99999/fk4c25559n/result

### Running through SHELF REST API with curl... (without access to library)
  1. Get shelf

  curl -X GET -H "Cache-Control: no-cache" -H "Postman-Token: 3e59fe10-9bee-bc0d-fd0c-1680c76cb4e3" "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf"

  2. Add to shelf

  curl -X PUT -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: f530205a-2124-be9c-0cbd-67037e3eb47c" -d '{
  "inputMessage": "<rdf:RDF xmlns:ot=\"http://uofm.org/objectteller/#\"\n         xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n    <rdf:Description rdf:about=\"http://uofm.org/objectteller/inputMessage\">\n        <ot:noofparams>1</ot:noofparams>\n        <ot:params>\n            <rdf:Seq>\n                <rdf:li>opioidPrescriptions</rdf:li>\n            </rdf:Seq>\n        </ot:params>\n    </rdf:Description>\n    <rdf:Description rdf:about=\"http://uofm.org/objectteller/opioidPrescriptions/\">\n        <ot:datatype>MAP</ot:datatype>\n    </rdf:Description>\n\n</rdf:RDF>\n",
  "outputMessage": "<rdf:RDF xmlns:ot=\"http://uofm.org/objectteller/\"\n  xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"http://uofm.org/objectteller/outputMessage\">\n    <ot:returntype>STRING</ot:returntype>\n  </rdf:Description>\n</rdf:RDF>\n",
  "payload": {
    "content": "'\'''\'''\''\nPer-day Morphine Milligram Equivalents (equianalgesia) for non-morphine opioid prescriptions\nDecember 14th, 2016\nBasic Steps:\n    1. Determine the total daily amount of each opioid\n    2. Convert to MMEs\n    3. Total\n\nIf there are missing keys (opioidPrescriptions, dosage, dosingFrequency), missing values (dosage, dosingFrequency), or non-matching values (dosingConversion, conversionFactors), the MME cannot be calculated.\n** Dosage must be in mg. **\n'\'''\'''\''\n\n\n# determine the total daily amount of each opioid\ndef totalDailyAmount(dosingFrequency,dosage):\n    dailyDosage = 0\n\n    dosingConversion = {\"once daily\":1,\n                        \"twice daily\":2,\n                        \"three times daily\":3,\n                        \"four times daily\":4,\n                        \"five times daily\":5,\n                        \"six times daily\":6,\n                        \"seven times daily\":7,\n                        \"eight times daily\":8,\n                        \"twelve times daily\":12,\n                        \"q 24h\":1,\n                        \"q 12h\":2,\n                        \"q 8h\":3,\n                        \"q 7h\":3.428,\n                        \"q 6h\":4,\n                        \"q 5h\":4.8,\n                        \"q 4h\":6,\n                        \"q 2h\":12}\n    try:\n        temp = dosingConversion[dosingFrequency]\n    except:\n        return \"No matching dosingFrequency, cannot be calculated.\"\n    for frequencyOptions in dosingConversion.keys():\n        if dosingFrequency == frequencyOptions:\n            dailyDosage += (dosage * dosingConversion[dosingFrequency])\n        else:\n            continue\n    return dailyDosage\n    # return drug name and daily amount in mg/day\n\n\n# convert to MME. Conversions based off CDC approved calculation method: https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf\ndef MMEConversion(opioidType,dailyDosage):\n    tempTotal = 0\n    conversion = 0\n\n    conversionFactors = {\"codeine\":0.15,\n                        \"fentanyl transdermal\": 2.4,\n                        \"hydrocodone\":1,\n                        \"hydromorphone\":4,\n                        \"methadone\":\n                            {\"1-20 mg/day\":4,\n                            \"21-40 mg/day\":8,\n                            \"41-60 mg/day\":10,\n                            \"61+ mg/day\":12},\n                        \"morphine\":1,\n                        \"oxycodone\":1.5,\n                        \"oxymorphone\":3\n                        }\n    try:\n        temp = conversionFactors[opioidType]\n    except:\n        return \"No matching opioid type, cannot be calculated.\"\n\n    if opioidType == \"methadone\":\n        if dailyDosage >=1 and dailyDosage <= 20:\n            conversion = conversionFactors[\"methadone\"][\"1-20 mg/day\"]\n        elif dailyDosage >=21 and dailyDosage <=40:\n            conversion = conversionFactors[\"methadone\"][\"21-40 mg/day\"]\n        elif dailyDosage >=41 and dailyDosage <=60:\n            conversion = conversionFactors[\"methadone\"][\"41-60 mg/day\"]\n        elif dailyDosage >=60:\n            conversion = conversionFactors[\"methadone\"][\"61+ mg/day\"]\n\n        tempTotal += (conversion * dailyDosage)\n\n    else:\n        for key in conversionFactors.keys():\n            if key == opioidType:\n                conversion = conversionFactors[key]\n                tempTotal += (conversion * dailyDosage)\n                #conversion = dailyDosage * (conversionFactors[key])\n                #total += conversion\n            else:\n                continue\n\n    return tempTotal\n\n\n# add them together\ndef execute(opioidPrescriptions):\n    total = 0\n    try:\n        prescriptions = opioidPrescriptions[\"opioidPrescriptions\"]\n        for opioidType in prescriptions.keys():\n            dosingFrequency = prescriptions[opioidType][\"dosingFrequency\"]\n            dosage = prescriptions[opioidType][\"dosage\"]\n            if dosage == 0:\n                return \"No dosage information, cannot be calculated.\"\n\n            if type(dosage) != float:\n                return \"Dosage information must be of type float.\"\n\n            if dosingFrequency == \"\":\n                return \"No dosingFrequency information, cannot be calculated.\"\n\n            if (type(dosingFrequency) == int) or (type(dosingFrequency) == float):\n                return \"dosingFrequency information must be of type string.\"\n\n            dailyDosage = totalDailyAmount(dosingFrequency,dosage)\n            if dailyDosage == \"No matching dosageFrequency, cannot be calculated.\":\n                return dailyDosage\n\n            tempTotal = MMEConversion(opioidType,dailyDosage)\n            if tempTotal == \"No matching opioid type, cannot be calculated.\":\n                return tempTotal\n\n            total += tempTotal\n    except:\n        return \"Errors found, cannot be calculated.\"\n    return \"Morphine Milligram Equivalents total = \" + str(total)\n\n\n\n# Test function to ensure that everything is working correctly.\n# If everything is correct, the function will return \"ok.\", else \"error.\" will be returned.\ndef test():\n    if execute({\"opioidPrescriptions\":{\"hydromorphone\":{\"dosage\":1.0,\"dosingFrequency\":\"q 12h\"}}}) != \"Morphine Milligram Equivalents total = 8.0\":\n        return \"error.\"\n\n    if execute({\"opioidPrescr\":{\"hydromorphone\":{\"dosage\":1.0,\"dosingFrequency\":\"q 12h\"}}}) != \"Errors found, cannot be calculated.\":\n        return \"error.\"\n\n    if execute({\"opioidPrescriptions\":{\"hydr\":{\"dosage\":1.0,\"dosingFrequency\":\"q 12h\"}}}) != \"No matching opioid type, cannot be calculated.\":\n        return \"error.\"\n\n    if execute({\"opioidPrescriptions\":{\"methadone\":{\"dosage\":25.0,\"dosingFrequency\":\"once daily\"}}}) != \"Morphine Milligram Equivalents total = 200.0\":\n        return \"error.\"\n\n    if execute({\"opioidPrescriptions\":{\"methadone\":{\"dos\":25.0,\"dosingFrequency\":\"once daily\"}}}) != \"Errors found, cannot be calculated.\":\n        return \"error.\"\n\n    if execute({\"opioidPrescriptions\":{\"methadone\":{\"dosage\":25.0,\"freq\":\"once daily\"}}}) != \"Errors found, cannot be calculated.\":\n        return \"error.\"\n\n    if execute({\"opioidPrescriptions\":{\"methadone\":{\"dosage\":0.0,\"dosingFrequency\":\"once daily\"}}}) != \"No dosage information, cannot be calculated.\":\n        return \"error.\"\n\n    if execute({\"opioidPrescriptions\":{\"methadone\":{\"dosage\":1.0,\"dosingFrequency\":\"once\"}}}) != \"Errors found, cannot be calculated.\":\n        return \"error.\"\n    return \"ok.\"\n",
    "engineType": "Python",
    "functionName": "execute"
  },
  "url": "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ObjectTeller/knowledgeObject/ark:/99999/fk4c25559n"
}' "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf/ark:/99999/fk4c25559n"

  3. Post MME

  curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 7cd3fdbe-98a6-57e2-2a6c-6ea45bb58dca" -d '{"opioidPrescriptions":{"hydromorphone":{"dosage":1.0,"dosingFrequency":"q 12h"}}}' "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/99999/fk4c25559n/result"
### Literature
This calculator is based off the CDC guideline found here: https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf
