# This code takes in patient medication information and outputs the medication regimen complexity index (MRCI) score.

# Calculates Appendix II. Medication Regimen Complexity Index (MRCI): A
def CalculateDosageForm(drugDict):
    total = 0
    dosingFormScores = {"oral":{"capsules/tablets":1,"gargles/mouthwashes":2,"gums/lozenges":2,"liquids":2,"powders/granules":2,"sublingual sprays/tabs":2},"topical":{"creams/gels/ointments":2,"dressings":3,"paints/solutions":2,"pastes":3,"patches":2,"sprays":1}, "ear,eye,nose":{"ear drops, ear creams, ear ointments":3,"eye drops":3,"eye gels, eye ointments":3,"nasal drops, nasal cream, nasal ointments":3,"nasal spray":2}, "inhalation":{"accuhalers":3,"aerolizers":3,"metered dose inhalers":4,"nebuliser":5,"oxygen/concentrator":3,"turbuhalers":3,"other DPIs":3}, "others":{"dialysate":5,"enemas":2,"injections prefilled":3,"injections ampoules/vials":4,"pessaries":3,"patient controlled analgesia":2,"suppositories":2,"vaginal cream":2}}
    for drug in drugDict.values():
        count = 0
        route = drug["route"]
        dosageForm = drug["form"]
        if route in dosingFormScores.keys():
            # Matches the route and form,
            # If the route and form don't match with the dosingFormScores, that prescription is skipped.
            for ADosageRoute in dosingFormScores[route]:
                count +=1
                if dosageForm == ADosageRoute:
                    total += dosingFormScores[route][ADosageRoute]
                    break
                elif dosageForm == "":
                    break
                elif (count == (len((dosingFormScores[route]).keys()))):
                    return "cannot calculate"
                else:
                    continue
        else:
            return "cannot calculate"
    return total

# Calculates Appendix II. Medication Regimen Complexity Index (MRCI): B
def CalculateDosingFrequency(drugDict):
    complexityScore = CalculateDosageForm(drugDict)

    MedsPerDosingFreq = {"once daily":0, "once daily prn":0, "twice daily":0, "twice daily prn":0, "three times daily":0, "three times daily prn":0, "four times daily":0, "four times daily prn":0, "q 12h":0, "q 12h prn":0, "q 8h":0, "q 8h prm":0, "q 6h":0, "q 6h prn":0, "q 4h":0, "q 4h prn":0, "q 2h":0, "q 2h prn":0, "prn/sos":0, "on alternate days or less frequently":0, "oxygen prn":0, "oxygen<15hrs":0, "oxygen>15 hrs":0}
    DosingWeight = {"once daily":1, "once daily prn":0.5, "twice daily":2, "twice daily prn":1, "three times daily":3, "three times daily prn":1.5, "four times daily":4,"four times daily prn":2,"q 12h":2.5,"q 12h prn":1.5,"q 8h":3.5,"q 8h prm":2,"q 6h":4.5,"q 6h prn":2.5,"q 4h":6.5,"q 4h prn":3.5,"q 2h":12.5,"q 2h prn":6.5,"prn/sos":0.5,"on alternate days or less frequently": 2, "oxygen prn":1, "oxygen<15hrs":2, "oxygen>15 hrs":3}

    # tallying # of drugs per dosingFrequency
    MedsPerDosingFreq = TallyDrugs(drugDict,"dosingFrequency",MedsPerDosingFreq)
    if MedsPerDosingFreq == "cannot calculate":
        return MedsPerDosingFreq

    # Taking # of drugs per dosingFrequency and multiplying by weight
    total = WeightDrugs(DosingWeight,MedsPerDosingFreq)

    # Add dosing frequence total to complexity score
    return total

# Calculates Appendix II. Medication Regimen Complexity Index (MRCI): C
def CalculateAddDirect(drugDict):

    MedsPerAddDirect = {"break or crush tablet":0,"dissolve tablet/powder":0,"multiple units at one time":0,"variable dose":0,"take/use at specficied time/s":0,"relation to food":0,"take with specific fluid":0,"take/use as directed":0,"tapering/increasing dose":0,"alternating dose":0}
    AddDirectWeight= {"break or crush tablet":1,"dissolve tablet/powder":1,"multiple units at one time":1,"variable dose":1,"take/use at specified time/s":1,"relation to food":1,"take with specific fluid":1,"take/use as directed":2,"tapering/increasing dose":2,"alternating dose":2}

    # Tallying # of drugs per addional direction
    MedsPerAddDirect = TallyDrugs(drugDict,"additionalDirections",MedsPerAddDirect)
    if MedsPerAddDirect== "cannot calculate":
        return MedsPerAddDirect

    # Taking # of drugs per additional direction and multiplying by weight
    total = WeightDrugs(AddDirectWeight,MedsPerAddDirect)

    return total


def TallyDrugs(drugDict,attribute,tallyDict):
    for drug in drugDict.values():
        attributeValue = drug[attribute]
        count = 0
        for attributeOptions in tallyDict:
            count += 1
            if attributeOptions == attributeValue:
                tallyDict[attributeOptions] += 1
                break
            elif attributeValue == "":
                break
            elif (count == len(tallyDict.keys())):
                return "cannot calculate"
            else:
                continue
    return tallyDict

def WeightDrugs(weightDict,tallyDict):
    total = 0
    for A in tallyDict:
        if tallyDict[A] != 0:
            for B in weightDict:
                if A == B:
                    multi = ((tallyDict[A])*(weightDict[B]))
                    total += multi
                else:
                    continue
        else:
            continue
    return total


# Use the test function to see if script is properly working.
def test():
    if execute({"drugList":{"lisinopril 40 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"twice daily","additionalDirections":""},"metroprolol tartrate 100 mg tablet":{"route":"oral","form":"capsules/tablets", "dosingFrequency":"twice daily","additionalDirections":"break or crush tablet"},"amLODIPine 10 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"once daily","additionalDirections":""},"levothyroxine 75 mcg capsule":{"route":"oral","form":"capsules/tablets","dosingFrequency":"once daily","additionalDirections":"alternating dose"}}}) != "MRCI Score = 13":
        return "error."
    if execute({"drugList":{"colchicine 0.l6mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"twice daily","additionalDirections":""},"ferrous sulfate 324 mg":{"route":"oral","form":"capsules/tablets","dosingFrequency":"on alternate days or less frequently","additionalDirections":"relation to food"}}}) != "MRCI Score = 7":
        return "error."
    if execute({"drugList":{"Erythropoietin":{"route":"others","form":"dialysate","dosingFrequency":"q 12h","additionalDirections":""},"atenolol 25 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"on alternate days or less frequently","additionalDirections":"take with specific fluid"}}}) != "MRCI Score = 11.5":
        return "error."
    if execute({"drugList":{"Erythropoietin":{"route":"ear,eye,nose","form":"eye gels, eye ointments","dosingFrequency":"not specficied","additionalDirections":""},"sitaGLIPtin 50 mg-metformin 1,000 mg tablet":{"route":"oral","form":"capsules/tablets","dosingFrequency":"on alternate days or less frequently","additionalDirections":"take with specific fluid"}}}) != "cannot calculate":
        return "error."
    if execute({"drugList":{"Erythropoietin":{"route":"inhalation","form":"chewable","dosingFrequency":"","additionalDirections":""}}}) !=  "cannot calculate":
        return "error."
    if execute({"drugList":{"Advil AM":{"route":"oral or nasal","form":"","dosingFrequency":"","additionalDirections":""},"Advil PM":{"route":"oral","form":"","dosingFrequency":"","additionalDirections":""}}}) != "cannot calculate":
        return "error."
    return "ok."


def execute(drugList):
    drugDict = drugList["drugList"]

    total1 = CalculateDosageForm(drugDict)
    if total1 == "cannot calculate":
        return total1
    total2 = CalculateDosingFrequency(drugDict)
    if total2 == "cannot calculate":
        return total2
    total3 = CalculateAddDirect(drugDict)
    if total3 == "cannot calculate":
        return total3
    complexityScore = total1 + total2 + total3
    output = "MRCI Score = " + str(complexityScore)
    json_output = {"MRCI Score":complexityScore}
    return output
