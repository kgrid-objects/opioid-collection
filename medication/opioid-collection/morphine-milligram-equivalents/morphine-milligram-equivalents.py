'''
Per-day Morphine Milligram Equivalents (equianalgesia) for non-morphine opioid prescriptions
December 14th, 2016
Basic Steps:
    1. Determine the total daily amount of each opioid
    2. Convert to MMEs
    3. Total

If there are missing keys (opiodPrescriptions, dosage, frequency), missing values (dosage, frequency), or non-matching values (dosingConversion, conversionFactors), the MME cannot be calculated.
** Dosage must be in mg. **
'''


# determine the total daily amount of each opiod
def totalDailyAmount(frequency,dosage):
    dailyDosage = 0

    dosingConversion = {"once daily":1,
                        "twice daily":2,
                        "three times daily":3,
                        "four times daily":4,
                        "five times daily":5,
                        "six times daily":6,
                        "seven times daily":7,
                        "eight times daily":8,
                        "twelve times daily":12,
                        "q 24h":1,
                        "q 12h":2,
                        "q 8h":3,
                        "q 7h":3.428,
                        "q 6h":4,
                        "q 5h":4.8,
                        "q 4h":6,
                        "q 2h":12}
    try:
        temp = dosingConversion[frequency]
    except:
        #print "No matching frequency."
        return "No matching frequency, cannot be calculated."
    for frequencyOptions in dosingConversion.keys():
        if frequency == frequencyOptions:
            dailyDosage += (dosage * dosingConversion[frequency])
        else:
            continue
    return dailyDosage
    # return drug name and daily amount in mg/day


# convert to MME. Conversions based off CDC approved calculation method: https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf
def MMEConversion(opiodType,dailyDosage):
    tempTotal = 0
    conversion = 0

    conversionFactors = {"codeine":0.15,
                        "fentanyl transdermal": 2.4,
                        "hydrocodone":1,
                        "hydromorphone":4,
                        "methadone":
                            {"1-20 mg/day":4,
                            "21-40 mg/day":8,
                            "41-60 mg/day":10,
                            "61+ mg/day":12},
                        "morphine":1,
                        "oxycodone":1.5,
                        "oxymorphone":3
                        }
    try:
        temp = conversionFactors[opiodType]
    except:
        #print "No matching opiod type, cannot be calculated."
        return "No matching opiod type, cannot be calculated."

    if opiodType == "methadone":
        if dailyDosage >=1 and dailyDosage <= 20:
            conversion = conversionFactors["methadone"]["1-20 mg/day"]
        elif dailyDosage >=21 and dailyDosage <=40:
            conversion = conversionFactors["methadone"]["21-40 mg/day"]
        elif dailyDosage >=41 and dailyDosage <=60:
            conversion = conversionFactors["methadone"]["41-60 mg/day"]
        elif dailyDosage >=60:
            conversion = conversionFactors["methadone"]["61+ mg/day"]

        tempTotal += (conversion * dailyDosage)

    else:
        for key in conversionFactors.keys():
            if key == opiodType:
                conversion = conversionFactors[key]
                tempTotal += (conversion * dailyDosage)
                #conversion = dailyDosage * (conversionFactors[key])
                #total += conversion
            else:
                continue

    #print tempTotal
    return tempTotal


# add them together
def MME(opiodPrescriptions):
    total = 0
    try:
        prescriptions = opiodPrescriptions["opiodPrescriptions"]
        for opiodType in prescriptions.keys():
            frequency = prescriptions[opiodType]["frequency"]
            #print frequency
            dosage = prescriptions[opiodType]["dosage"]
            if dosage == 0:
                #print "No dosage information, cannot be calculated."
                return "No dosage information, cannot be calculated."

            if type(dosage) != float:
                #print "Dosage information must be of type float."
                return "Dosage information must be of type float."

            if frequency == "":
                #print "No frequency information, cannot be calculated."
                return "No frequency information, cannot be calculated."

            if (type(frequency) == int) or (type(frequency) == float):
                #print "Frequency information must be of type string."
                return "Frequency information must be of type string."

            dailyDosage = totalDailyAmount(frequency,dosage)
            if dailyDosage == "No matching frequency, cannot be calculated.":
                return dailyDosage

            tempTotal = MMEConversion(opiodType,dailyDosage)
            if tempTotal == "No matching opiod type, cannot be calculated.":
                return tempTotal

            total += tempTotal
    except:
        #print "Errors found, cannot be calculated."
        return "Errors found, cannot be calculated."
    #print total
    return "Morphine Milligram Equivalents total = " + str(total)



# Test function to ensure that everything is working correctly.
# If everything is correct, the function will return "ok.", else "error." will be returned.
def test():
    correct = 0
    if MME({"opiodPrescriptions":{"hydromorphone":{"dosage":1.0,"frequency":"q 12h"}}}) == "Morphine Milligram Equivalents total = 8.0":
        #print "ok."
        correct +=1
    else:
        #print "error 1."
        return "error."

    if MME({"opiodPrescr":{"hydromorphone":{"dosage":1.0,"frequency":"q 12h"}}}) == "Errors found, cannot be calculated.":
        #print "ok."
        correct +=1
    else:
        #print "error 2."
        return "error."

    if MME({"opiodPrescriptions":{"hydr":{"dosage":1.0,"frequency":"q 12h"}}}) == "No matching opiod type, cannot be calculated.":
        #print "ok."
        correct +=1
    else:
        #print "error 3."
        return "error."

    if MME({"opiodPrescriptions":{"methadone":{"dosage":25.0,"frequency":"once daily"}}}) == "Morphine Milligram Equivalents total = 200.0":
        #print "ok."
        correct +=1
    else:
        #print "error 4."
        return "error."

    if MME({"opiodPrescriptions":{"methadone":{"dos":25.0,"frequency":"once daily"}}}) == "Errors found, cannot be calculated.":
        #print "ok."
        correct +=1
    else:
        #print "error 5."
        return "error."

    if MME({"opiodPrescriptions":{"methadone":{"dosage":25.0,"freq":"once daily"}}}) == "Errors found, cannot be calculated.":
        #print "ok."
        correct +=1
    else:
        #print "error 6."
        return "error."

    if MME({"opiodPrescriptions":{"methadone":{"dosage":0.0,"frequency":"once daily"}}}) == "No dosage information, cannot be calculated.":
        #print "ok."
        correct +=1
    else:
        #print "error 7."
        return "error."

    if MME({"opiodPrescriptions":{"methadone":{"dosage":1.0,"frequency":"once"}}}) == "No matching frequency, cannot be calculated.":
        #print "ok.""
        correct +=1
    else:
        #print "error 8."
        return "error."
    #print "ok."
    return "ok."
