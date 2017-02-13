# New Opioid Start Detector
# February 10, 2017
# takes in two visit summaries (e.g. admit and discharge summary), and identifies if the patient is a new opioid starter
from datetime import datetime

def execute(inputs):
    visit_A = inputs["visitA"]
    visit_B = inputs["visitB"]


    opioidCheck = {}
    # get rx from visit a, and check if it is an opioid
    rx = visit_A["rx"]
    if rx == "":
        return "rxCUI not provided"
    opioidCheck["visit_A"] = opioidDetector(rx)

    # get rx from visit b, and check if it is an opioid. If it is in opioid, opioid detector returns 1
    rx = visit_B["rx"]
    if rx == "":
        return "rxCUI not provided"
    opioidCheck["visit_B"] = opioidDetector(rx)

    # compare dates a and dates b to see which visit was first
    date1 = visit_A["date"]
    date2 = visit_B["date"]
    if date1 == "" or date2 == "":
        return "date information not provided"


    minDate = dateComparison(date1,date2)

    # compare dates and opioid rx results, and return if the patient is a new opioid starter or not
    return visitComparison(minDate,opioidCheck)




# checks if the rx is an opioid, if yes: return 1, if no: return 0
def opioidDetector(rx):
    # hard coded
    opioidList=["480","2670","235412","23088","4337","5489","221107","314667","3423","6378","6468","6754","6813","7052","7804","7814","32926","8785","73032","56795","787390","10689"]
    if rx in opioidList:
        return 1
    else:
        return 0





# compares the dates of the visits and returns the date that happened first
def dateComparison(date1,date2):
    #  year, month, day

    date1_split = date1.split("/")
    date1_datetime = datetime((int(date1_split[0])),(int(date1_split[1])),(int(date1_split[2])))

    date2_split= date2.split("/")
    date2_datetime = datetime((int(date2_split[0])),(int(date2_split[1])),(int(date2_split[2])))

    dates = [date1_datetime,date2_datetime]
    minDate = min(dates)
    if minDate == date1_datetime:
        return "visit_A"
    if minDate == date2_datetime:
        return "visit_B"




# if the last visit rx was an opiod, and the first visit rx was not, this patient is a new opiod starter
def visitComparison(minDate,opioidCheck):
    if minDate == "visit_A":
        if (opioidCheck[minDate] == 0) and (opioidCheck["visit_B"] == 1):
            return "new opioid starter"
        elif (opioidCheck[minDate] == 1):
            return "previously prescribed opioid"

    if minDate == "visit_B":
        if (opioidCheck[minDate] == 0) and (opioidCheck["visit_A"] == 1):
            return "new opioid starter"
        elif (opioidCheck[minDate] == 1):
            return "previously prescribed opioid"

    if (opioidCheck["visit_B"] == 0) and (opioidCheck["visit_A"] == 0):
        return "not prescribed an opioid"

    return "cannot calculate"



def test():
    if execute({"visitA":{"date":"2013/4/20","rx":"2670"},"visitB":{"date":"2013/3/31","rx":"10"}}) != "new opioid starter":
        return "error."
    if execute({"visitA":{"date":"2013/4/20","rx":"70"},"visitB":{"date":"2013/3/31","rx":"10"}}) != "not prescribed an opioid":
        return "error."
    if execute({"visitA":{"date":"2013/4/20","rx":"70"},"visitB":{"date":"2013/3/31","rx":"2670"}}) != "previously prescribed opioid":
        return "error."
    if execute({"visitA":{"date":"","rx":"70"},"visitB":{"date":"","rx":"2670"}}) != "date information not provided":
        return "error."
    if execute({"visitA":{"date":"2013/4/20","rx":"70"},"visitB":{"date":"2013/3/31","rx":""}}) != "rxCUI not provided":
        return "error."
    return "ok."

#print test()
