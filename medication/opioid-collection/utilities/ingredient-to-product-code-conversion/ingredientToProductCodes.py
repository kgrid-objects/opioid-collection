'''
KGrid, MiHIN Collaboration
Created February 28, 2017

After seeing the Transition of Care (ToC) CCD documents, RxNorm Rxcui ingredient codes needed to be changed
 to RxNorm Rxcui products codes (tty = SBD & SCD) for Respiratory Depression and Opioid User knowledge objects.

To generate the product codes for Semantic Clinical Drugs (SCD) and Semantic Branded Drugs (SBD),
 we utilized the Rxnax RxNorm API (https://rxnav.nlm.nih.gov/RxNormAPIs.html#) to generate json files.

 API Call: https://rxnav.nlm.nih.gov/REST/rxcui/(ingredientCode)/related?tty=SCD+SBD

 This code iterates through the json files and extractes the SCD and SBD Rxcui product codes.
'''

import json

def execute(ingredientType,directoryPath,outputFile):
    productCode = []

    # list of ingredient codes to iterate through ingredient text files
    if ingredientType == "opioid":
        paths = ["480", "2670", "235412", "23088", "4337", "5489", "221107","3423", "6378", "6468", "6754", "6813", "7052", "7804", "7814", "32926", "8785", "73032", "56795", "787390", "10689"]

    if ingredientType == "benzodiazepine":
        paths = ["596", "2356", "21241", "2598", "2353", "3322", "4077", "4501", "6470", "6960", "7781", "35185", "10355", "10767"]

    if ingredientType == "muscleRelaxant":
        paths = ["2101", "2410", "21949", "59078", "6845", "7715"]


    # iterate through each ingredient file, append to product list
    for ingredientCode in paths:
        filePath = directoryPath + str(ingredientCode) + ".json"
        with open(filePath,"r") as f:
            data = json.load(f)

        start = data["relatedGroup"]["conceptGroup"]

        for concept in start:
            try:
                for drug in concept["conceptProperties"]:
                    productCode.append(drug["rxcui"])
            except (KeyError):
                continue

    # write product codes to output file
    output_file = open(outputFile,"w")
    output_file.write(str(productCode))
    print (productCode)
