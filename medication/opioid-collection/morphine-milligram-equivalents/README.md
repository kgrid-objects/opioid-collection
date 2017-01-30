# Morphine Milligram Equivalents (MME) Calculator
Per-day Morphine Milligram Equivalents (equianalgesia) for non-morphine opioid prescriptions
Created: December 14, 2016

### Description
This KO takes in a prescription (opiod, dosage, and frequency), and outputs the MME.

### Running
Basic Steps:
    1. Determine the total daily amount of each opioid
    2. Convert to MMEs
    3. Total

To run the KO, call MME(opiodPrescriptions).

The input must be formatted as follows, where opiodPrescriptions, dosage, and frequency represent keys that cannot be changed. Dosage is type float, and frequency is type string.

  {"opiodPrescriptions":
  	{"opiodType":
  		{"dosage":0.0,
  		"frequency":""}
  	}
  }

If there are missing keys (opiodPrescriptions, dosage, frequency), missing values (dosage, frequency), or non-matching values (dosingConversion, conversionFactors), the MME cannot be calculated and will return an error message.
** Dosage must be in mg. **

### Getting started
We have included a test() function that should be ran prior to beginning. To run program from terminal, go to terminal and cd into the directory where the python file is located. Enter the following:

1. python2
2. import morphine-milligram-equivalents
3. morphine-milligram-equivalents.MME({"opiodPrescriptions":{"opiodType":{"dosage":0.0,"frequency":""}}})

### Running through SHELF REST API...
To run through SHELF REST API, the knowledge object needs to be added to ObjectTeller and to the REST API SHELF before its executable.
The ark ID for this object is: **ark:/99999/fk4c25559n**

To add to shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf/ark:/99999/fk4c25559n
To check shelf: http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/shelf
To execute: after entering input into "body", http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/99999/fk4c25559n/result

### Literature
This calculator is based off the CDC guideline found here: https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf
