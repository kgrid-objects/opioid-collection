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

### Running through SHELF REST API... (with library access)
  To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable.
  The ark ID for this object is: **ark:/67034/k43k5p**

  1. To add to shelf: PUT {{baseUrl}}/shelf/ark:/67034/k43k5p
  2. To check shelf: GET {{baseUrl}}/shelf
  3. To execute:
    - Add the following headers:
      - Content-Type:application/json
      - Accept:application/json
    - Enter input into "body" (e.g. {"rxcui":"480 2101 10767"})
    - Run the POST command. POST {{baseUrl}}knowledgeObject/ark:/67034/k43k5p/result

We have also included some helpful execution test functions for this knowledge object, that can be found in the transition of care collection:  local-toc.json. See notes in Opioid Collection respository for more information.

### Running through SHELF REST API with curl... (without access to library)
  1. Get shelf

  curl -X GET -H "Cache-Control: no-cache" -H "Postman-Token: 3e59fe10-9bee-bc0d-fd0c-1680c76cb4e3" "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf"

  2. Add to shelf

  curl -X PUT -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 4f9015d7-3d4e-cbb8-f823-ce9498d8dee7" -d '{
    "inputMessage": "<rdf:RDF xmlns:ot=\"http://uofm.org/objectteller/#\"\n xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"http://uofm.org/objectteller/inputMessage\">\n    <ot:noofparams>1</ot:noofparams>\n    <ot:params>\n      <rdf:Seq>\n        <rdf:li>rxcui</rdf:li>\n      </rdf:Seq>\n    </ot:params>\n  </rdf:Description>\n  <rdf:Description rdf:about=\"http://uofm.org/objectteller/param/\">\n    <ot:datatype>STRING</ot:datatype>\n  </rdf:Description>\n</rdf:RDF>\n",
    "outputMessage": "<rdf:RDF xmlns:ot=\"http://uofm.org/objectteller/\"\n  xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"http://uofm.org/objectteller/outputMessage\">\n    <ot:returntype>STRING</ot:returntype>\n  </rdf:Description>\n</rdf:RDF>\n",
    "payload": {
      "content": "# Code to screen a medication list expressed in RXNORM RxCUIs for a variety of opioid and non-opioid medications\n# Objective:  Identify regimens where the risk of harm from respiratory depression is real\n\n#import requests\n#import re\n\ndef makeListOfRxCUIs(classID):\n    temp_grab = requests.get(\"https://rxnav.nlm.nih.gov/REST/rxclass/classMembers?classId=\"+ str(classID) + \"&relaSource=FDASPL&rela=has_EPC\")\n    #print (temp_grab.status_code)\n    regex = r\"<rxcui>(.+?)</rxcui>\"\n    listMade = re.findall(regex,temp_grab.text)\n    return listMade\n\ndef opioidCheck(n,opioidList):   # Check if an RxCUI indiccates an opioid\n    if n in opioidList:\n        return True\n    else:\n        return False\n\ndef benzodiazepineCheck(n,benzodiazepineList): # Check if an RxCUI indicates a benzodiazepine\n    if n in benzodiazepineList:\n        return True\n    else:\n        return False\n\ndef muscleRelaxantCheck(n,muscleRelaxantList): # Check if an RxCUI indicates a muscle relaxant\n    if n in muscleRelaxantList:\n        return True\n    else:\n        return False\n\n# execution sequence begins here\n\ndef execute(info):\n    # breaking input dictionary into list on spaces\n    rxcuistring = info.get(\"rxcui\")\n    rxcuistring\n    rxcuis=rxcuistring.split()\n\n    # default to False\n    ocheck = False\n    bcheck = False\n    mcheck = False\n\n    # extracting only the RxCUIs\n    # calls to utilize API\n    #opioidList = makeListOfRxCUIs(\"N0000175690\")\n    #benzodiazepineList = makeListOfRxCUIs(\"N0000175694\")\n    #muscleRelaxantList = makeListOfRxCUIs(\"N0000175737\")\n\n    #hard coded list of drugs within class\n    opioidList = [\"480\", \"2670\", \"235412\", \"23088\", \"4337\", \"5489\", \"221107\", \"314667\", \"3423\", \"6378\", \"6468\", \"6754\", \"6813\", \"7052\", \"7804\", \"7814\", \"32926\", \"8785\", \"73032\", \"56795\", \"787390\", \"10689\"]\n    benzodiazepineList = [\"596\", \"2356\", \"21241\", \"2598\", \"2353\", \"3322\", \"4077\", \"4501\", \"6470\", \"6960\", \"7781\", \"35185\", \"10355\", \"10767\"]\n    muscleRelaxantList = [\"2101\", \"2410\", \"21949\", \"59078\", \"6845\", \"7715\"]\n\n\n    for cui in rxcuis:   # Scan a list of RxCUIs to identify any of three classes\n        otemp = opioidCheck(cui,opioidList)\n        if otemp == True:\n            ocheck = True\n            continue\n        btemp = benzodiazepineCheck(cui,benzodiazepineList)\n        if btemp == True:\n            bcheck = True\n            continue\n        mtemp = muscleRelaxantCheck(cui,muscleRelaxantList)\n        if mtemp == True:\n            mcheck = True\n\n    outputString = (\"Opioid? \" + str(ocheck) + \" Benzodiazepine? \" + str(bcheck) + \" Muscle Relaxant? \" + str(mcheck))\n    #print outputString\n    return outputString\n\n\n# Test function to see if program is working correctly.\ndef test():\n    if execute({\"rxcui\":\"480 2101 10767\"}) != \"Opioid? True Benzodiazepine? True Muscle Relaxant? True\":\n        return \"error.\"\n    if execute({\"rxcui\":\"830861 2101 10767\"}) != \"Opioid? False Benzodiazepine? True Muscle Relaxant? True\":\n        return \"error.\"\n    if execute({\"rxcui\":\"830861 1099870 966443\"}) != \"Opioid? False Benzodiazepine? False Muscle Relaxant? False\":\n        return \"error.\"\n    if execute({\"rxcui\":\"480 2101 1099870\"}) != \"Opioid? True Benzodiazepine? False Muscle Relaxant? True\":\n        return \"error.\"\n    if execute({\"rxcui\":\"\"}) != \"Opioid? False Benzodiazepine? False Muscle Relaxant? False\":\n        return \"error.\"\n    return \"ok.\"\n",
      "engineType": "Python",
      "functionName": "execute"
    },
    "url": "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ObjectTeller/knowledgeObject/ark:/67034/k43k5p"
  }' "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf/ark:/67034/k43k5p"

  3. Post Respiratory Depression Indicator

  curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 75affa7c-d895-c09c-4323-fc8608e4dde9" -d '{"rxcui":"480 2101 10767"}' "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/67034/k43k5p/result"


### Notes for future development...
This script was created with a potential to extract the API calls into a separate knowledge object. If defined as a separate object, one could utilize object chaining to call the API knowledge object on this knowledge object.
