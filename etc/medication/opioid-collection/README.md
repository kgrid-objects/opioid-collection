# MiHIN Transition of Care Objects: Medication, Opioid
This Opioid collection was created to allow for opioid screening across the MiHIN network.

The collection currently consists of the following 5 knowledge objects. For the demo on March 30th, the knowledge objects that will be showcased are Respiratory Depression Indicator (Triple Threat) and Opioid User Detector.

## Current objects
2. Respiratory Depression Indicator
  - Input: dictionary of rxCUIs with a space delimiter (e.g. {"rxcui":"480 2101 10767"})
  - Output: True/False presence of presence of an opioid, benzodiazepine and muscle relaxant (e.g. "Opioid? True Benzodiazepine? True Muscle Relaxant? True")
  - ArkID - ark:/67034/k43k5p

5. Opioid User Detector
  - Input: dictionary of rxCUIs with a space delimiter (e.g. {"rxcui":"480 2101 10767"})
  - Output: True/False presence of an opioid (e.g. "Opioid? True")
  - ArkID - ark:/99999/fk4vx0mr08
  
Within each knowledge object repository, we have included the python code, an input RDF, an output RDF, a README, and the clinical documentation where the knowledge was extracted from. The README contains important metadata, along with information on how to execute the object locally and how to execute the object using REST API. 

We have created a collection of these 2 knowledge objects that can be found in the following file: local-toc.json. The transition of care collection contains a list of commands for these knowledge objects, including a PUT(ADD/UPDATE) command and a POST command for each one. Each knowledge object also has a set of execution test functions that can be found in the transition of care collection, along with a sample development environment (SampleDev.postman_env.json). Both the environment and collection can be directly imported to a REST API client; we use postman. 

We have also created a bash file (toc.sh) for knowledge objects respiratory depression indicator and opioid user detector, including the same commands as the postman collection.

## Other objects

1. Medication Regimen Complexity Indicator (MRCI)
  - Input: map of prescribed drugs (drug name, route, form, dosing frequency and additional directions) (e.g. {"drugList":{"atenolol 25 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"on alternate days or less frequently","additionalDirections":"take with specific fluid"}}})
  - Output: MRCI score (e.g. "MRCI Score = 11.5")
  - ArkId - ark:/67034/k4zw2d

3. Morphine Milligram Equivalents (MME) Calculator
  - Input: map of opioid prescriptions (drug name, dosage and frequency) (e.g. {"opiodPrescriptions":{"methadone":{"dosage":25.0,"dosingFrequency":"once daily"}}})
  - Output: MME (e.g. "Morphine Milligram Equivalents total = 200.0")
  - ArkID - ark:/99999/fk4c25559n
 
4. New Opioid Start Detector
  - Input: date and rxCUI parameters from 2 visit summaries (e.g. {"visitA":{"date":"2/4/20","rxcui":"70"},"visitB":{"date":"2013/3/31","rxcui":"790"}})
  - Output: "new opioid starter", "not prescribed an opioid", or "previously prescribed opioid"
  - ArkID - ark:/99999/fk43b69v25

