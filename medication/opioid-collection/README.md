# MiHIN Transition of Care Objects: Medication, Opioid
This Opioid collection was created to allow for opioid screening across the MiHIN network.

The collection currently consists of the following 3 knowledge objects:

1. Medication Regimen Complexity Indicator (MRCI)
  - Input: map of prescribed drugs (drug name, route, form, dosing frequency and additional directions) (e.g. {"drugList":{"atenolol 25 mg tablet":{"route":"oral","form":"capsules/tablets","dosing frequency":"on alternate days or less frequently","additional directions":"take with specific fluid"}}})
  - Output: MRCI score (e.g. "MRCI Score = 11.5")
  - ArkId - ark:/67034/k4zw2d

2. Respiratory Depression Indicator
  - Input: dictionary of rxCUIs with a space delimiter (e.g. {"rxcuisIn":"480 2101 10767"})
  - Output: True/False presence of presence of an opioid, benzodiazepine and muscle relaxant (e.g. "Opioid? True Benzodiazepine? True Muscle Relaxant? True")
  - ArkID - ark:/67034/k43k5p

3. Morphine Milligram Equivalents (MME) Calculator
  - Input: map of opioid prescriptions (drug name, dosage and frequency) (e.g. {"opiodPrescriptions":{"methadone":{"dosage":25.0,"frequency":"once daily"}}}
  - Output: MME (e.g. "Morphine Milligram Equivalents total = 200.0")
  - ArkID - ark:/99999/fk4c25559n
