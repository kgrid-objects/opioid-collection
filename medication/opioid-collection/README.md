# MiHIN Transition of Care Objects: Medication, Opioid
This Opioid collection was created to allow for opioid screening across the MiHIN network.

The collection currently consists of the following 3 knowledge objects:

1. Medication Regimen Complexity Indicator (MRCI)
  - Input: map of prescribed drugs (drug name, route, form, dosing frequency and additional directions)
  - Output: MRCI score
  - ArkId - ark:/67034/k4zw2d

2. Respiratory Depression Indicator
  - Input: dictionary of rxCUIs with a space delimiter
  - Output: True/False presence of presence of an opioid, benzodiazepine and muscle relaxant
  - ArkID - ark:/67034/k43k5p

3. Morphine Milligram Equivalents (MME) Calculator
  - Input: map of opioid prescriptions (drug name, dosage and frequency)
  - Output: MME
  - ArkID - ark:/99999/fk4c25559n
