module.exports =
[
  {
    input: {
      "id": "PA-01011",
      "prescriptions": [
        {
          "rxnorm": "313782",
          "medicationname": "ACETAMINOPHEN 325 MG TABLET",
          "genericname": "ACETAMINOPHEN",
          "strength":{
            "value": 325,
            "unit":"mg"
          },
          "form": "Tablet",
          "route": "Oral",
          "sig": "650 MG EVERY 6 HOURS",
          "dosage":[
            { "value":"650",
              "unit":"MG",
              "frequency":"EVERY 6 HOURS" }
          ]
        },
        {
          "rxnorm": "313782",
          "medicationname": "ACETAMINOPHEN 325 MG TABLET",
          "genericname": "ACETAMINOPHEN",
          "strength":{
            "value": 325,
            "unit":"mg"
          },
          "form": "Tablet",
          "route": "Oral",
          "sig": "325-650 MG EVERY 6 HOURS PRN",
          "dosage":[
            { "value":"325-650",
              "unit":"MG",
              "frequency":"EVERY 6 HOURS PRN" }
          ]
        },
        {
          "rxnorm": "197582",
          "medicationname": "DEXAMETHASONE 4 MG TABLET",
          "genericname": "DEXAMETHASONE",
          "strength":{
            "value": 4,
            "unit":"mg"
          },
          "form": "Tablet",
          "route": "Oral",
          "sig": "20 MG EVERY 24 HOURSS",
          "dosage":[
            { "value":"20",
              "unit":"MG",
              "frequency":"EVERY 24 HOURS" }
          ]
        },
        {
          "rxnorm": "197582",
          "medicationname": "DEXAMETHASONE 4 MG TABLET",
          "genericname": "DEXAMETHASONE",
          "strength":{
            "value": 4,
            "unit":"mg"
          },
          "form": "Tablet",
          "route": "Oral",
          "sig": "4 MG EVERY 6 HOURS",
          "dosage":[
            { "value":"4",
              "unit":"MG",
              "frequency":"EVERY 6 HOURS" }
          ]
        },
        {
          "rxnorm": "1723740",
          "medicationname": "DIPHENHYDRAMINE 50 MG/ML INJECTION SOLUTION",
          "genericname": "DIPHENHYDRAMINE HCL",
          "strength":{
            "value": 50,
            "unit":"mg/mL"
          },
          "form": "Solution",
          "route": "Injection",
          "sig": "12.5 MG EVERY 15 MIN PRN",
          "dosage":[
            { "value":"12.5",
              "unit":"MG",
              "frequency":"EVERY 15 MIN PRN" }
          ]
        }
      ]
    },
    output: 27
  },
  {
    input: {
      "id": "JG-0A",
      "prescriptions": [
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol MDI 100 μg",
        "genericname": "albuterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "albuterol MDI 100 μg 2 puffs each morning",
        "dosage":[
          { "value":"2",
            "unit":"puffs",
            "frequency":"each morning" }
        ]
      }
    ]
    },
    output: 7
  },
  {
    input: {
      "id": "JG-0B",
      "prescriptions": [
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol MDI 100 μg",
        "genericname": "albuterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "albuterol MDI 100 μg 2 puffs as needed",
        "dosage":[
          { "value":"2",
            "unit":"puff",
            "frequency":"PRN" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "flunitrazepam 1 mg",
        "genericname": "flunitrazepam",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "Tablet",
        "route": "Oral",
        "sig": "flunitrazepam 1 mg 1/2 tablet each night",
        "dosage":[
          { "value":"0.5",
            "unit":"tablet",
            "frequency":"each night" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "fluticasone MDI 125 μg",
        "genericname": "fluticasone",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "fluticasone MDI 125 μg 2 puffs twice daily",
        "dosage":[
          { "value":"2",
            "unit":"puff",
            "frequency":"twice daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ipratropium MDI 42 μg",
        "genericname": "ipratropium",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "ipratropium MDI 42 μg 2 puffs 3 times daily",
        "dosage":[
          { "value":"2",
            "unit":"puff",
            "frequency":"3 times daily" }
        ]
      }
    ]
    },
    output: 15.5
  },
  {
    input: {
      "id": "JG-0C",
      "prescriptions": [
      {
        "rxnorm": "1111111",
        "medicationname": "aspirin 100 mg",
        "genericname": "aspirin",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "aspirin 100 mg 1 tablet daily",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"once daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "budesonide Turbuhaler 400 μg",
        "genericname": "budesonide",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "Turbuhaler",
        "route": "Inhalation",
        "sig": "budesonide Turbuhaler 400 μg 2 puffs at midday",
        "dosage":[
          { "value":"2",
            "unit":"puff",
            "frequency":"at midday" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "eformoterol Aerolizer 12 μg",
        "genericname": "eformoterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "Aerolizer",
        "route": "Inhalation",
        "sig": "eformoterol Aerolizer 12 μg 2 puffs twice daily",
        "dosage":[
          { "value":"2",
            "unit":"puff",
            "frequency":"twice daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ipratropium MDI 42 μg",
        "genericname": "ipratropium",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "ipratropium MDI 42 μg 2 puffs twice daily",
        "dosage":[
          { "value":"2",
            "unit":"puff",
            "frequency":"twice daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "simvastatin 20 mg",
        "genericname": "simvastatin",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "simvastatin 20 mg 1 tablet each night",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"each night" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "zolpidem 10 mg",
        "genericname": "zolpidem",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "zolpidem 10 mg 1 tablet at night as needed",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"at night as needed" }
        ]
      }
      ]
    },
    output:24.5
  },
  {
    input: {
      "id": "JG-0D",
      "prescriptions": [
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol MDI 100 μg",
        "genericname": "albuterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "albuterol MDI 100 μg 1 puffs as needed",
        "dosage":[
          { "value":"1",
            "unit":"puff",
            "frequency":"PRN" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol nebules 2.5mg/2.5mL",
        "genericname": "albuterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "nebuliser",
        "route": "Inhalation",
        "sig": "albuterol nebules 2.5mg/2.5mL 1 each morning and afternoon",
        "dosage":[
          { "value":"1",
            "unit":"",
            "frequency":"each morning and afternoon" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "alendronate sodium 5 mg",
        "genericname": "alendronate sodium",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "alendronate sodium 5 mg 1 tablet weekly",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"weekly"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "furosemide 40 mg",
        "genericname": "furosemide",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "furosemide 40 mg 1 tablet twice daily",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"twice daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ibuprofen 400 mg",
        "genericname": "ibuprofen",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "ibuprofen 400 mg 1 tablet twice daily",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"twice daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "fluticasone MDI 125 μg",
        "genericname": "fluticasone",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "fluticasone MDI 125 μg 1 puff twice daily",
        "dosage":[
          { "value":"1",
            "unit":"puff",
            "frequency":"twice daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ipratropium nebules 42 μg",
        "genericname": "ipratropium",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "nebuliser",
        "route": "Inhalation",
        "sig": "ipratropium nebules 250ug/mL 1 each morning and afternoon",
        "dosage":[
          { "value":"1",
            "unit":"",
            "frequency":"each morning and afternoon" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "perindopril 4 mg",
        "genericname": "perindopril",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "perindopril 4 mg 1 tablet each morning",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"each morning"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "potassium chloride 600 mg SR",
        "genericname": "potassium chloride",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "potassium chloride 600 mg SR 1 tablet twice daily",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"twice daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "theophylline 300 mg SR",
        "genericname": "theophylline",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "theophylline 300 mg SR 1 tablet twice daily",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"twice daily"}
        ]
      }
    ]
    },
    output: 30.5
  },
  {
    input: {
      "id": "JG-0E",
      "prescriptions": [
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol MDI 100 μg",
        "genericname": "albuterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "albuterol MDI 100 μg 1–2 puffs every 4–6 hours",
        "dosage":[
          { "value":"1-2",
            "unit":"puff",
            "frequency":"every 4–6 hours" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol nebules 2.5mg/2.5mL",
        "genericname": "albuterol",
        "strength":{
          "value": 1,
          "unit":""
        },
        "form": "nebuliser",
        "route": "Inhalation",
        "sig": "albuterol nebules 2.5 mg/2.5 mL 1 twice daily",
        "dosage":[
          { "value":"1",
            "unit":"",
            "frequency":"twice daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "doxycycline 50 mg",
        "genericname": "doxycycline",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "doxycycline 50 mg 1 tablet daily after food",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "fluticasone plus salmeterol Accuhaler 500/50 μg",
        "genericname": "fluticasone plus salmeterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "accuhaler",
        "route": "Inhalation",
        "sig": "fluticasone plus salmeterol Accuhaler 500/50 μg 1 puff twice daily",
        "dosage":[
          { "value":"1",
            "unit":"puff",
            "frequency":"twice daily" }
        ]
      },

      {
        "rxnorm": "1111111",
        "medicationname": "ipratropium MDI 42 μg",
        "genericname": "ipratropium",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "ipratropium MDI 42 μg 1–2 puffs every 4–6 hours",
        "dosage":[
          { "value":"1-2",
            "unit":"puff",
            "frequency":"every 4–6 hours" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ipratropium nebules 500 μg/mL",
        "genericname": "ipratropium",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "nebuliser",
        "route": "Inhalation",
        "sig": "ipratropium nebules 500 μg/mL 1 twice daily",
        "dosage":[
          { "value":"1",
            "unit":"",
            "frequency":"twice daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "medroxyprogesterone 10 mg",
        "genericname": "medroxyprogesterone",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "medroxyprogesterone 10 mg tablets, use as directed",
        "dosage":[
          { "value":"",
            "unit":"",
            "frequency":""}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "estradiol 50 μg",
        "genericname": "estradiol",
        "strength":{
          "value": 1,
          "unit":"patch"
        },
        "form": "Patch",
        "route": "Topical",
        "sig": "estradiol 50 μg 1 patch each week",
        "dosage":[
          { "value":"1",
          "unit":"patch",
          "frequency":"each week"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "pantoprazole 40 mg",
        "genericname": "pantoprazole",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "pantoprazole 40 mg 1 tablet daily",
        "dosage":[
          { "value":"1",
          "unit":"tablet",
          "frequency":"daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "piroxicam 10 mg",
        "genericname": "piroxicam",
        "strength":{
          "value": 1,
          "unit":"capsule"
        },
        "form": "capsule",
        "route": "Oral",
        "sig": "piroxicam 10 mg 1 capsule as needed",
        "dosage":[
          { "value":"1",
          "unit":"capsule",
          "frequency":"as needed"}
        ]
      }
    ]
    },
    output: 39.5
  },
  {
    input: {
      "id": "JG-0F",
      "prescriptions": [
      {
        "rxnorm": "1111111",
        "medicationname": "acetaminophen 500 mg",
        "genericname": "acetaminophen",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "acetaminophen 500 mg 2 tablets 4 times daily",
        "dosage":[
          { "value":"2",
          "unit":"tablet",
          "frequency":"4 times daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol MDI 100 μg",
        "genericname": "albuterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "albuterol MDI 100 μg 2 puffs as needed",
        "dosage":[
          { "value":"2",
            "unit":"puff",
            "frequency":"as needed" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol nebules 2.5mg/2.5mL",
        "genericname": "albuterol",
        "strength":{
          "value": 1,
          "unit":""
        },
        "form": "nebuliser",
        "route": "Inhalation",
        "sig": "albuterol nebules 2.5 mg/2.5 mL 1 puff 4 times daily",
        "dosage":[
          { "value":"1",
            "unit":"",
            "frequency":"4 times daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "alendronate sodium 70 mg",
        "genericname": "alendronate sodium",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "alendronate sodium 70 mg 1 tablet weekly",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"weekly"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "amitriptyline 50 mg",
        "genericname": "amitriptyline",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "amitriptyline 50 mg 1 tablet each night",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"each night"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "atorvastatin 10 mg",
        "genericname": "atorvastatin",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "atorvastatin 10 mg 1 tablet each night",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"each night"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "colchicine 0.5 mg",
        "genericname": "colchicine",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "colchicine 0.5 mg 1 tablet daily",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "digoxin 250 μg",
        "genericname": "digoxin",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "digoxin 250 μg 1 tablet daily",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "doxycycline 100 mg",
        "genericname": "doxycycline",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "doxycycline 100 mg 1 tablet each morning",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"each morning" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ergocalciferol 25 μg",
        "genericname": "ergocalciferol",
        "strength":{
          "value": 1,
          "unit":"capsule"
        },
        "form": "capsule",
        "route": "Oral",
        "sig": "ergocalciferol 25 μg 1 capsule daily",
        "dosage":[
          { "value":"1",
            "unit":"capsule",
            "frequency":"daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ferrous sulfate plus folic acid",
        "genericname": "ferrous sulfate plus folic acid",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "ferrous sulfate plus folic acid 1 tablet daily",
        "dosage":[
          { "value":"1",
            "unit":"tablet",
            "frequency":"daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "fluticasone plus salmeterol Accuhaler 250/25 μg",
        "genericname": "fluticasone plus salmeterol",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "accuhaler",
        "route": "Inhalation",
        "sig": "fluticasone plus salmeterol MDI 250/25 μg 2 puffs twice daily",
        "dosage":[
          { "value":"2",
            "unit":"puff",
            "frequency":"twice daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "furosemide 40 mg",
        "genericname": "furosemide",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "furosemide 40 mg 2 tablets twice daily",
        "dosage":[
          { "value":"2",
          "unit":"TABLET",
          "frequency":"twice daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "gliclazide 80 mg",
        "genericname": "gliclazide",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "gliclazide 80 mg 3 tablets each morning",
        "dosage":[
          { "value":"3",
          "unit":"tablet",
          "frequency":"each morning"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "human insulin injection 3 mL",
        "genericname": "human insulin injection",
        "strength":{
          "value": 1,
          "unit":""
        },
        "form": "vial",
        "route": "Injection",
        "sig": "human insulin injection 3 mL, use as directed",
        "dosage":[
          { "value":"",
          "unit":"",
          "frequency":"use as directed"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ipratropium MDI 42 μg",
        "genericname": "ipratropium",
        "strength":{
          "value": 1,
          "unit":"puff"
        },
        "form": "MDI",
        "route": "Inhalation",
        "sig": "ipratropium MDI 42 μg 1 puff 4 times daily",
        "dosage":[
          { "value":"1",
            "unit":"puff",
            "frequency":"4 times daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ipratropium nebules 250 μg/mL",
        "genericname": "ipratropium",
        "strength":{
          "value": 1,
          "unit":""
        },
        "form": "nebuliser",
        "route": "Inhalation",
        "sig": "ipratropium nebules 250 μg/mL 1 puff 4 times daily",
        "dosage":[
          { "value":"1",
            "unit":"",
            "frequency":"4 times daily" }
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "levodopa plus benserazide 100/25 mg",
        "genericname": "levodopa plus benserazide",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "tablet",
        "route": "Oral",
        "sig": "levodopa plus benserazide 100/25 mg 1 tablet each morning and 2 tablets at midday",
        "dosage":[
          { "value":"1",
          "unit":"tablet",
          "frequency":"each morning"},
          { "value":"2",
          "unit":"tablet",
          "frequency":"at midday"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "metformin 500 mg",
        "genericname": "metformin",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "metformin 500 mg 2 tablets twice daily",
        "dosage":[
          { "value":"2",
          "unit":"tablet",
          "frequency":"twice daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "pantoprazole 40 mg",
        "genericname": "pantoprazole",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "pantoprazole 40 mg 1 tablet daily",
        "dosage":[
          { "value":"1",
          "unit":"tablet",
          "frequency":"daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "prednisolone 5 mg",
        "genericname": "prednisolone",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "prednisolone 5 mg 1 tablet twice daily",
        "dosage":[
          { "value":"1",
          "unit":"tablet",
          "frequency":"twice daily"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "sertraline 50 mg",
        "genericname": "sertraline",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "sertraline 50 mg 1 tablet each morning",
        "dosage":[
          { "value":"1",
          "unit":"tablet",
          "frequency":"each morning"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "spironolactone 25 mg",
        "genericname": "spironolactone",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "TABLET",
        "route": "Oral",
        "sig": "spironolactone 25 mg 1 tablet at lunch",
        "dosage":[
          { "value":"1",
          "unit":"tablet",
          "frequency":"at lunch"}
        ]
      },
      {
        "rxnorm": "1111111",
        "medicationname": "warfarin tablets",
        "genericname": "warfarin",
        "strength":{
          "value": 1,
          "unit":"tablet"
        },
        "form": "tablet",
        "route": "Oral",
        "sig": "warfarin tablets, use as directed",
        "dosage":[
          { "value":"1",
          "unit":"tablet",
          "frequency":"use as directed"}
        ]
      }
    ]
    },
    output: 77.5
  }
]
