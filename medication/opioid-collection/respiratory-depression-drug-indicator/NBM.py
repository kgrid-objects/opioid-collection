# Code to screen a medication list expressed in RXNORM RxCUIs for a variety of opioid and non-opioid medications
# Objective:  Identify regimens where the risk of harm from respiratory depression is real

#import requests
#import re

def makeListOfRxCUIs(classID):
    temp_grab = requests.get("https://rxnav.nlm.nih.gov/REST/rxclass/classMembers?classId="+ str(classID) + "&relaSource=FDASPL&rela=has_EPC")
    #print (temp_grab.status_code)
    regex = r"<rxcui>(.+?)</rxcui>"
    listMade = re.findall(regex,temp_grab.text)
    return listMade

def opioidCheck(n,opioidList):   # Check if an RxCUI indiccates an opioid
    if n in opioidList:
        return True
    else:
        return False

def benzodiazepineCheck(n,benzodiazepineList): # Check if an RxCUI indicates a benzodiazepine
    if n in benzodiazepineList:
        return True
    else:
        return False

def muscleRelaxantCheck(n,muscleRelaxantList): # Check if an RxCUI indicates a muscle relaxant
    if n in muscleRelaxantList:
        return True
    else:
        return False

# execution sequence begins here

def execute(info):
    # breaking input dictionary into list on spaces
    rxcuistring = info.get("rxcui")
    rxcuistring
    rxcuis=rxcuistring.split()

    # default to False
    ocheck = False
    bcheck = False
    mcheck = False

    # extracting only the RxCUIs
    # calls to utilize API
    #opioidList = makeListOfRxCUIs("N0000175690")
    #benzodiazepineList = makeListOfRxCUIs("N0000175694")
    #muscleRelaxantList = makeListOfRxCUIs("N0000175737")

    #hard coded list of drugs within class
    opioidList = ["480", "2670", "235412", "23088", "4337", "5489", "221107", "314667", "3423", "6378", "6468", "6754", "6813", "7052", "7804", "7814", "32926", "8785", "73032", "56795", "787390", "10689"]
    benzodiazepineList = ["596", "2356", "21241", "2598", "2353", "3322", "4077", "4501", "6470", "6960", "7781", "35185", "10355", "10767"]
    muscleRelaxantList = ["2101", "2410", "21949", "59078", "6845", "7715"]


    for cui in rxcuis:   # Scan a list of RxCUIs to identify any of three classes
        otemp = opioidCheck(cui,opioidList)
        if otemp == True:
            ocheck = True
            continue
        btemp = benzodiazepineCheck(cui,benzodiazepineList)
        if btemp == True:
            bcheck = True
            continue
        mtemp = muscleRelaxantCheck(cui,muscleRelaxantList)
        if mtemp == True:
            mcheck = True

    outputString = ("Opioid? " + str(ocheck) + " Benzodiazepine? " + str(bcheck) + " Muscle Relaxant? " + str(mcheck))
    #print outputString
    return outputString


# Test function to see if program is working correctly.
def test():
    if execute({"rxcui":"480 2101 10767"}) != "Opioid? True Benzodiazepine? True Muscle Relaxant? True":
        return "error."
    if execute({"rxcui":"830861 2101 10767"}) != "Opioid? False Benzodiazepine? True Muscle Relaxant? True":
        return "error."
    if execute({"rxcui":"830861 1099870 966443"}) != "Opioid? False Benzodiazepine? False Muscle Relaxant? False":
        return "error."
    if execute({"rxcui":"480 2101 1099870"}) != "Opioid? True Benzodiazepine? False Muscle Relaxant? True":
        return "error."
    if execute({"rxcui":""}) != "Opioid? False Benzodiazepine? False Muscle Relaxant? False":
        return "error."
    return "ok."
