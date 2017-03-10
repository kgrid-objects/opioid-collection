# Medication Regimen Complexity Index (MRCI) Calculator
ObjectTeller
Created November 2, 2016

### Background Information...
This object takes in a list of drugs that a given patient is taking, and outputs a float representing the complexity of the medication regimen. This calculator was based off the following paper:

Development and Validation of the Medication Regimen Complexity Index
Johnson George, Yee-Teng Phun, Michael J Bailey, David CM Kong, and Kay Stewart

Paper can be found at: http://aop.sagepub.com/content/38/9/1369.long

### Objective...
To identify medication regimens that have a high complexity.

### Running Locally...
Prior to running the script, run test() to make sure calculations are working correctly.

To run this object, use execute(). Input should be formatted as the following:
  {"drugList":
      {"medication":
          {"route":"X","form":"X","dosingFrequency":"X","additionalDirections":"X"}
          }
        }
    }
"medication" and "X" can be altered to the corresponding information, but "drugList", "route", "form, "dosingFrequency", and "additionalDirections" are key words the program searches for. Therefore, these coded strings should not be altered.

The following options can be specified for each coded variable. The options are taken directly from Appendix II of the paper, "Medication Regimen Complexity Index (MRCI)". If the input entered is not one of the options, "cannot calculate" will be returned.

1. route
    - oral
    - topicale.g.
    - ear,eye,nose
    - inhalation
    - others
2. form
  - For oral route:
      - capsules/tablets
      - gargles/mouthwashes
      - gums/lozenges
      - liquids
      - powders/granules
      - sublingual sprays/tabs
  - For topical route:
      - creams/gels/ointments
      - dressings
      - paints/solutions
      - pastes
      - patches
      - sprays
  - For ear,eye,nose route:
      - ear drops, ear creams, ear ointments
      - eye drops
      - eye gels, eye ointments
      - nasal drops, nasal cream, nasal ointments
      - nasal spray
  - For inhalation route:
      - accuhalers
      - aerolizers
      - metered dose inhalers
      - nebuliser
      - oxygen/concentrator
      - turbuhalers
      - other DPIs
  - For others route:
      - dialysate
      - enemas
      - injections prefilled
      - injections ampoules/vials
      - pessaries
      - patient controlled analgesia
      - suppositories
      - vaginal cream
3. dosingFrequency
  - once daily
  - once daily prn
  - twice daily
  - twice daily prn
  - three times daily
  - three times daily prn
  - four times daily
  - four times daily prn
  - q 12h
  - q 12h prn
  - q 8h
  - q 8h prm
  - q 6h
  - q 6h prn
  - q 4h
  - q 4h prn
  - q 2h
  - q 2h prn
  - prn/sos
  - on alternate days or less frequently
  - oxygen prn
  - oxygen<15hrs
  - oxygen>15 hrs
4. additionalDirections
  - break or crush tablet
  - dissolve tablet/powder
  - multiple units at one time
  - variable dose
  - take/use at specified time/s
  - relation to food
  - take with specific fluid
  - take/use as directed
  - tapering/increasing dose
  - alternating dose


### Getting started...
  To run program from terminal, go to terminal and cd into the directory where the python file is located. Enter the following:
  1. python
  2. import MRCI
  3. MRCI.execute({"medication":{"route":"","form":"","dosingFrequency":"","additionalDirections":""}})

### Running through SHELF REST API... (with library access)
  To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable.
  The ark ID for this object is: **ark:/67034/k4zw2d**

    1. To add to shelf: PUT {{baseUrl}}/shelf/ark:/67034/k4zw2d
    2. To check shelf: GET {{baseUrl}}/shelf
    3. To execute:
      - Add the following headers:
        - Content-Type:application/json
        - Accept:application/json
      - Enter input into "body" (e.g. {"drugList":{"lisinopril 40 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"twice daily","additionalDirections":""},"metroprolol tartrate 100 mg tablet":{"route":"oral","form":"capsules/tablets", "dosingFrequency":"twice daily","additionalDirections":"break or crush tablet"},"amLODIPine 10 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"once daily","additionalDirections":""},"levothyroxine 75 mcg capsule":{"route":"oral","form":"capsules/tablets","dosingFrequency":"once daily","additionalDirections":"alternating dose"}}})
      - Run the POST command: POST {{baseUrl}}/knowledgeObject/ark:/67034/k4zw2d/result

### Running through SHELF REST API with curl... (without access to library)
  1. Get shelf

  curl -X GET -H "Cache-Control: no-cache" -H "Postman-Token: 3e59fe10-9bee-bc0d-fd0c-1680c76cb4e3" "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf"
  2. Add to shelf

  curl -X PUT -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 035fdc1a-b44a-5f29-9a49-ad1d95e18eea" -d '{
  "inputMessage": "<rdf:RDF xmlns:ot=\"http://uofm.org/objectteller/#\"\n xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"http://uofm.org/objectteller/inputMessage\">\n    <ot:noofparams>1</ot:noofparams>\n    <ot:params>\n      <rdf:Seq>\n        <rdf:li>drugList</rdf:li>\n      </rdf:Seq>\n    </ot:params>\n  </rdf:Description>\n  <rdf:Description rdf:about=\"http://uofm.org/objectteller/drugList/\">\n    <ot:datatype>MAP</ot:datatype>\n  </rdf:Description>\n</rdf:RDF>\n",
  "outputMessage": "<rdf:RDF xmlns:ot=\"http://uofm.org/objectteller/\"\n  xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"http://uofm.org/objectteller/outputMessage\">\n    <ot:returntype>STRING</ot:returntype>\n  </rdf:Description>\n</rdf:RDF>\n",
  "payload": {
    "content": "# This code takes in patient medication information and outputs the medication regimen complexity index (MRCI) score.\n\n# Calculates Appendix II. Medication Regimen Complexity Index (MRCI): A\ndef CalculateDosageForm(drugDict):\n    total = 0\n    dosingFormScores = {\"oral\":{\"capsules/tablets\":1,\"gargles/mouthwashes\":2,\"gums/lozenges\":2,\"liquids\":2,\"powders/granules\":2,\"sublingual sprays/tabs\":2},\"topical\":{\"creams/gels/ointments\":2,\"dressings\":3,\"paints/solutions\":2,\"pastes\":3,\"patches\":2,\"sprays\":1}, \"ear,eye,nose\":{\"ear drops, ear creams, ear ointments\":3,\"eye drops\":3,\"eye gels, eye ointments\":3,\"nasal drops, nasal cream, nasal ointments\":3,\"nasal spray\":2}, \"inhalation\":{\"accuhalers\":3,\"aerolizers\":3,\"metered dose inhalers\":4,\"nebuliser\":5,\"oxygen/concentrator\":3,\"turbuhalers\":3,\"other DPIs\":3}, \"others\":{\"dialysate\":5,\"enemas\":2,\"injections prefilled\":3,\"injections ampoules/vials\":4,\"pessaries\":3,\"patient controlled analgesia\":2,\"suppositories\":2,\"vaginal cream\":2}}\n    for drug in drugDict.values():\n        count = 0\n        route = drug[\"route\"]\n        dosageForm = drug[\"form\"]\n        if route in dosingFormScores.keys():\n            # Matches the route and form,\n            # If the route and form don'\''t match with the dosingFormScores, that prescription is skipped.\n            for ADosageRoute in dosingFormScores[route]:\n                count +=1\n                if dosageForm == ADosageRoute:\n                    total += dosingFormScores[route][ADosageRoute]\n                    break\n                elif dosageForm == \"\":\n                    break\n                elif (count == (len((dosingFormScores[route]).keys()))):\n                    #print \"** INVALID DOSAGE FORM **\"\n                    return \"cannot calculate\"\n                else:\n                    continue\n        else:\n            #print \"** INVALID ROUTE TYPE **\"\n            return \"cannot calculate\"\n    #print \"Total = \" + str(total)\n    return total\n\n# Calculates Appendix II. Medication Regimen Complexity Index (MRCI): B\ndef CalculateDosingFrequency(drugDict):\n    complexityScore = CalculateDosageForm(drugDict)\n\n    MedsPerDosingFreq = {\"once daily\":0, \"once daily prn\":0, \"twice daily\":0, \"twice daily prn\":0, \"three times daily\":0, \"three times daily prn\":0, \"four times daily\":0, \"four times daily prn\":0, \"q 12h\":0, \"q 12h prn\":0, \"q 8h\":0, \"q 8h prm\":0, \"q 6h\":0, \"q 6h prn\":0, \"q 4h\":0, \"q 4h prn\":0, \"q 2h\":0, \"q 2h prn\":0, \"prn/sos\":0, \"on alternate days or less frequently\":0, \"oxygen prn\":0, \"oxygen<15hrs\":0, \"oxygen>15 hrs\":0}\n    DosingWeight = {\"once daily\":1, \"once daily prn\":0.5, \"twice daily\":2, \"twice daily prn\":1, \"three times daily\":3, \"three times daily prn\":1.5, \"four times daily\":4,\"four times daily prn\":2,\"q 12h\":2.5,\"q 12h prn\":1.5,\"q 8h\":3.5,\"q 8h prm\":2,\"q 6h\":4.5,\"q 6h prn\":2.5,\"q 4h\":6.5,\"q 4h prn\":3.5,\"q 2h\":12.5,\"q 2h prn\":6.5,\"prn/sos\":0.5,\"on alternate days or less frequently\": 2, \"oxygen prn\":1, \"oxygen<15hrs\":2, \"oxygen>15 hrs\":3}\n\n    # tallying # of drugs per dosingFrequency\n    MedsPerDosingFreq = TallyDrugs(drugDict,\"dosingFrequency\",MedsPerDosingFreq)\n    if MedsPerDosingFreq == \"cannot calculate\":\n        return MedsPerDosingFreq\n\n    # Taking # of drugs per dosingFrequency and multiplying by weight\n    total = WeightDrugs(DosingWeight,MedsPerDosingFreq)\n\n    # Add dosing frequence total to complexity score\n    return total\n\n# Calculates Appendix II. Medication Regimen Complexity Index (MRCI): C\ndef CalculateAddDirect(drugDict):\n\n    MedsPerAddDirect = {\"break or crush tablet\":0,\"dissolve tablet/powder\":0,\"multiple units at one time\":0,\"variable dose\":0,\"take/use at specficied time/s\":0,\"relation to food\":0,\"take with specific fluid\":0,\"take/use as directed\":0,\"tapering/increasing dose\":0,\"alternating dose\":0}\n    AddDirectWeight= {\"break or crush tablet\":1,\"dissolve tablet/powder\":1,\"multiple units at one time\":1,\"variable dose\":1,\"take/use at specified time/s\":1,\"relation to food\":1,\"take with specific fluid\":1,\"take/use as directed\":2,\"tapering/increasing dose\":2,\"alternating dose\":2}\n\n    # Tallying # of drugs per addional direction\n    MedsPerAddDirect = TallyDrugs(drugDict,\"additionalDirections\",MedsPerAddDirect)\n    if MedsPerAddDirect== \"cannot calculate\":\n        return MedsPerAddDirect\n\n    # Taking # of drugs per additional direction and multiplying by weight\n    total = WeightDrugs(AddDirectWeight,MedsPerAddDirect)\n\n    #print \"Complextiy Score = \" + str(complexityScore)\n    return total\n\n\ndef TallyDrugs(drugDict,attribute,tallyDict):\n    for drug in drugDict.values():\n        attributeValue = drug[attribute]\n        count = 0\n        for attributeOptions in tallyDict:\n            count += 1\n            if attributeOptions == attributeValue:\n                tallyDict[attributeOptions] += 1\n                break\n            elif attributeValue == \"\":\n                break\n            elif (count == len(tallyDict.keys())):\n                #print \"** INVALID \" + str(attribute.upper()) + \" TYPE **\"\n                return \"cannot calculate\"\n            else:\n                continue\n    return tallyDict\n\ndef WeightDrugs(weightDict,tallyDict):\n    total = 0\n    for A in tallyDict:\n        if tallyDict[A] != 0:\n            for B in weightDict:\n                if A == B:\n                    multi = ((tallyDict[A])*(weightDict[B]))\n                    total += multi\n                else:\n                    continue\n        else:\n            continue\n    return total\n\n\n# Use the test function to see if script is properly working.\ndef test():\n    if execute({\"drugList\":{\"lisinopril 40 mg tablet\":{\"route\":\"oral\",\"form\":\"capsules/tablets\",\"dosingFrequency\":\"twice daily\",\"additionalDirections\":\"\"},\"metroprolol tartrate 100 mg tablet\":{\"route\":\"oral\",\"form\":\"capsules/tablets\", \"dosingFrequency\":\"twice daily\",\"additionalDirections\":\"break or crush tablet\"},\"amLODIPine 10 mg tablet\":{\"route\":\"oral\",\"form\":\"capsules/tablets\",\"dosingFrequency\":\"once daily\",\"additionalDirections\":\"\"},\"levothyroxine 75 mcg capsule\":{\"route\":\"oral\",\"form\":\"capsules/tablets\",\"dosingFrequency\":\"once daily\",\"additionalDirections\":\"alternating dose\"}}}) != \"MRCI Score = 13\":\n        return \"error.\"\n\n    if execute({\"drugList\":{\"colchicine 0.l6mg tablet\":{\"route\":\"oral\",\"form\":\"capsules/tablets\",\"dosingFrequency\":\"twice daily\",\"additionalDirections\":\"\"},\"ferrous sulfate 324 mg\":{\"route\":\"oral\",\"form\":\"capsules/tablets\",\"dosingFrequency\":\"on alternate days or less frequently\",\"additionalDirections\":\"relation to food\"}}}) != \"MRCI Score = 7\":\n        return \"error.\"\n\n    if execute({\"drugList\":{\"Erythropoietin\":{\"route\":\"others\",\"form\":\"dialysate\",\"dosingFrequency\":\"q 12h\",\"additionalDirections\":\"\"},\"atenolol 25 mg tablet\":{\"route\":\"oral\",\"form\":\"capsules/tablets\",\"dosingFrequency\":\"on alternate days or less frequently\",\"additionalDirections\":\"take with specific fluid\"}}}) != \"MRCI Score = 11.5\":\n        return \"error.\"\n\n    if execute({\"drugList\":{\"Erythropoietin\":{\"route\":\"ear,eye,nose\",\"form\":\"eye gels, eye ointments\",\"dosingFrequency\":\"not specficied\",\"additionalDirections\":\"\"},\"sitaGLIPtin 50 mg-metformin 1,000 mg tablet\":{\"route\":\"oral\",\"form\":\"capsules/tablets\",\"dosingFrequency\":\"on alternate days or less frequently\",\"additionalDirections\":\"take with specific fluid\"}}}) != \"cannot calculate\":\n        return \"error.\"\n\n    if execute({\"drugList\":{\"Erythropoietin\":{\"route\":\"inhalation\",\"form\":\"chewable\",\"dosingFrequency\":\"\",\"additionalDirections\":\"\"}}}) !=  \"cannot calculate\":\n        return \"error.\"\n\n    if execute({\"drugList\":{\"Advil AM\":{\"route\":\"oral or nasal\",\"form\":\"\",\"dosingFrequency\":\"\",\"additionalDirections\":\"\"},\"Advil PM\":{\"route\":\"oral\",\"form\":\"\",\"dosingFrequency\":\"\",\"additionalDirections\":\"\"}}}) != \"cannot calculate\":\n        return \"error.\"\n    return \"ok.\"\n\n\ndef execute(drugList):\n    drugDict = drugList[\"drugList\"]\n\n    total1 = CalculateDosageForm(drugDict)\n    if total1 == \"cannot calculate\":\n        return total1\n    total2 = CalculateDosingFrequency(drugDict)\n    if total2 == \"cannot calculate\":\n        return total2\n    total3 = CalculateAddDirect(drugDict)\n    if total3 == \"cannot calculate\":\n        return total3\n    complexityScore = total1 + total2 + total3\n    output = \"MRCI Score = \" + str(complexityScore)\n    json_output = {\"MRCI Score\":complexityScore}\n    return output\n",
    "engineType": "Python",
    "functionName": "execute"
  },
  "url": "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ObjectTeller/knowledgeObject/ark:/67034/k4zw2d"
}' "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf/ark:/67034/k4zw2d"

  3. Post MRCI

  curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 33e2648d-fd86-5058-3649-95117944e42a" -d '{"drugList":
	{"lisinopril 40 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"twice daily","additionalDirections":""},
	"metroprolol tartrate 100 mg tablet":{"route":"oral","form":"capsules/tablets", "dosingFrequency":"twice daily","additionalDirections":"break or crush tablet"},
	"amLODIPine 10 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"once daily","additionalDirections":""},
	"levothyroxine 75 mcg capsule":{"route":"oral","form":"capsules/tablets","dosingFrequency":"once daily","additionalDirections":"alternating dose"}
	}
}' "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/67034/k4zw2d/result"
