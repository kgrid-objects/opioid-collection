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
          "strengthvalue": 325,
          "strengthunit":"mg",
          "form": "Tablet",
          "route": "Oral",
          "sig": "650 MG EVERY 6 HOURS",
          "dosagevalue":"650",
          "dosageunit":"MG",
          "frequency":"EVERY 6 HOURS"
        },
        {
          "rxnorm": "313782",
          "medicationname": "ACETAMINOPHEN 325 MG TABLET",
          "genericname": "ACETAMINOPHEN",
          "strengthvalue": 325,
          "strengthunit":"mg",
          "form": "Tablet",
          "route": "Oral",
          "sig": "325-650 MG EVERY 6 HOURS PRN",
          "dosagevalue":"325-650",
          "dosageunit":"MG",
          "frequency":"EVERY 6 HOURS PRN"
        },
        {
          "rxnorm": "197582",
          "medicationname": "DEXAMETHASONE 4 MG TABLET",
          "genericname": "DEXAMETHASONE",
          "strengthvalue": 4,
          "strengthunit":"mg",
          "form": "Tablet",
          "route": "Oral",
          "sig": "20 MG EVERY 24 HOURSS",
          "dosagevalue":"20",
          "dosageunit":"MG",
          "frequency":"EVERY 24 HOURS"
        },
        {
          "rxnorm": "197582",
          "medicationname": "DEXAMETHASONE 4 MG TABLET",
          "genericname": "DEXAMETHASONE",
          "strengthvalue": 4,
          "strengthunit":"mg",
          "form": "Tablet",
          "route": "Oral",
          "sig": "4 MG EVERY 6 HOURSS",
          "dosagevalue":"4",
          "dosageunit":"MG",
          "frequency":"EVERY 6 HOURS"
        },
        {
          "rxnorm": "1723740",
          "medicationname": "DIPHENHYDRAMINE 50 MG/ML INJECTION SOLUTION",
          "genericname": "DIPHENHYDRAMINE HCL",
          "strengthvalue": 50,
          "strengthunit":"mg/mL",
          "form": "Solution",
          "route": "Injection",
          "sig": "12.5 MG EVERY 15 MIN PRN",
          "dosagevalue":"12.5",
          "dosageunit":"MG",
          "frequency":"EVERY 15 MIN PRN"
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
        "strengthvalue": 1,
        "strengthunit":"puff",
        "form": "MDI",
        "route": "Inhalation",
        "sig": "albuterol MDI 100 μg 2 puffs each morning",
        "dosagevalue":"2",
        "dosageunit":"puffs",
        "frequency":"each morning"
      }
    ]
    },
    output: 6
  },
  {
    input: {
      "id": "JG-0B",
      "prescriptions": [
      {
        "rxnorm": "1111111",
        "medicationname": "albuterol MDI 100 μg",
        "genericname": "albuterol",
        "strengthvalue": 1,
        "strengthunit":"puff",
        "form": "MDI",
        "route": "Inhalation",
        "sig": "albuterol MDI 100 μg 2 puffs PRN",
        "dosagevalue":"2",
        "dosageunit":"puffs",
        "frequency":"PRN"
      },
      {
        "rxnorm": "1111111",
        "medicationname": "flunitrazepam 1 mg",
        "genericname": "flunitrazepam",
        "strengthvalue": 1,
        "strengthunit":"tablet",
        "form": "Tablet",
        "route": "Oral",
        "sig": "flunitrazepam 1 mg 1/2 tablet each night",
        "dosagevalue":"0.5",
        "dosageunit":"tablet",
        "frequency":"each night"
      },
      {
        "rxnorm": "1111111",
        "medicationname": "fluticasone MDI 125 μg",
        "genericname": "fluticasone",
        "strengthvalue": 1,
        "strengthunit":"puff",
        "form": "MDI",
        "route": "Inhalation",
        "sig": "fluticasone MDI 125 μg 2 puffs twice daily",
        "dosagevalue":"2",
        "dosageunit":"puff",
        "frequency":"twice daily"
      },
      {
        "rxnorm": "1111111",
        "medicationname": "ipratropium MDI 42 μg",
        "genericname": "ipratropium",
        "strengthvalue": 1,
        "strengthunit":"puff",
        "form": "MDI",
        "route": "Inhalation",
        "sig": "ipratropium MDI 42 μg 2 puffs 3 times daily",
        "dosagevalue":"2",
        "dosageunit":"puff",
        "frequency":"3 times daily"
      }
    ]
    },
    output: 14.5
  }
]
