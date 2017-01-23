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

To run this object, use runFunction(). Input should be formatted as the following:
  {"drugList":
      {"drug name":
          {"route":"X","form":"X","dosing frequency":"X","additional directions":"X"}
          }
        }
    }
"drug name" and "X" can be altered to the corresponding information, but "drugList", "route", "form, "dosing frequency", and "additional directions" are key words the program searches for. Therefore, these coded strings should not be altered.

The following options can be specified for each coded variable. The options are taken directly from Appendix II of the paper, "Medication Regiment Complexity Index (MRCI)". If the input entered is not one of the options, "cannot calculate" will be returned.

1. route
    - oral
    - topical
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
3. dosing frequency
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
4. additional directions
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
  3. MRCI.runFunction({"drug name":{"route":"","form":"","dosing frequency":"","additional directions":""}})

### Running through SHELF REST API...
  To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable.
  The ark ID for this object is: **ark:/67034/k4zw2d**

  To add to shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf/ark:/67034/k4zw2d
  To check shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf
  To execute: after entering input into "body", http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/67034/k4zw2d/result
