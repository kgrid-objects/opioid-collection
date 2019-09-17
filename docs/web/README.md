# Opioid Collection
[![GitHub release](https://img.shields.io/github/release/kgrid-objects/opioid-collection.svg)](https://github.com/kgrid-objects/opioid-collection/releases/)

This is a collection of KOs for KGrid that can be used to identify and report on certain features of opioid prescribing. Each KO in this collection uses patient prescription data for its input and provides information about patient prescriptions as its output.

Table of Contents
--
- [Getting Started](#getting-started)
- [Knowledge Object Collection](#knowledge-object-collection)
   1. [Opioid Use Detector](#opioid-use-detector)
   1. [Opioid and Benzodiazepine Detector](#opioid-and-benzodiazepine-detector)
   1. [Respiratory Depression Risk Indicator](#respiratory-depression-risk-indicator )
   1. [MHA Opiate Use Detector](#mha-opioid-detector)
   1. [MHA ALTO Use Detector](#mha-alto-detector)
   1. [Opioid Advisor](#opioid-advisor)
   1. [Medication Regimen Complexity Index Calculator](#medication-regimen-complexity-index-calculator)
- [Install the Michigan OPEN Opioid-related KO Collection](#install-kos-on-kgrid-activator)  
- [Opioid Collection Testing](#opioid-collection-testing)  


### Getting Started
These instructions will allow you to test drive one or more of the KOs in the MOpen Opioid-related Knowledge Object Collection on our sandbox at Herokuapp.com here.  To check if the sandbox is working, you can click here: [Heroku KGrid Activator](https://kgrid-activator.herokuapp.com/).  

Below in this documentation, find each KO's API documentation in the OpenAPI 3.0 specification format. By clicking on the API Documentation link for each KO, the API documentation will be displayed in a Swagger UI tool.  Utilizing the example curl or the Swagger UI tool you can test out the interation using each KO.

### Knowledge Object Collection

####  :one: Opioid Use Detector
This KO scans a patient's medication regimen, which is presented to the KO as a list of RxNorm Semantic Clinical Drug codes, for the presence of an opioid prescription.  This KO has many potential uses, including one use as a filtering or screening mechanism when applied in the context of health information exchange.

**Example API Usage with curl**
```
curl -X POST \
  https://activator.kgrid.org/99999/10101/v0.0.2/opioidDetector \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```  
**Example API Response**
```json
{
    "result": {
        "condition_satisfied": true,
        "summary": {
            "opioid": true
        },
        "detail": {
            "106500": {
                "opioid": true
            },
            "197446": {
                "opioid": false
            },
            "200240": {
                "opioid": false
            },
            "801958": {
                "opioid": false
            },
            "856917": {
                "opioid": false
            },
            "994226": {
                "opioid": true
            }
        }
    },
    "info": {
        "ko": "99999/10101/v0.0.1",
        "inputs": {
            "rxcuis": "106500,200240,856917,994226,197446,801958"
        }
    }
}
```
Additional API documentation can be found in the [Swagger UI](hhttps://editor.swagger.io/?url=https://kgrid-activator.herokuapp.com/kos/99999/10101/v0.0.2/service) visualisation of the OpenAPI specification.

####  :two: Opioid and Benzodiazepine Detector
This KO  scans a list of a patient's prescriptions, which are presented to the KO as a list of RxNorm Semantic Clinical Drug codes, and determines if they are being exposed simultaneously to a known risky combination of an opioid and a benzodiazepine.

**Example API Usage with curl**
```json
curl -X POST \
  https://activator.kgrid.org/99999/10102/v0.0.2/opioidbzdDetector \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```

Additional API documentation can be found in the [Swagger UI](https://editor.swagger.io/?url=https://kgrid-activator.herokuapp.com/kos/99999/10102/v0.0.2/servicel) visualisation of the OpenAPI specification.

####  :three: Respiratory Depression Risk Indicator
This KO scans a list of a patient's prescriptions, which are presented to the KO as a list or RxNorm Semantic Clinical Drug Codes, and determines if they are at higher risk for drug-induced respiratory depression because of being exposed simultaneously to a combination of an opioid, a benzodiazepine, and a muscle relaxant.

**Example API Usage with curl**
```json
curl -X POST \
  https://activator.kgrid.org/99999/10103/v0.0.2/tripleThreatDetector \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
 ```
Additional API documentation can be found in the [Swagger UI](https://editor.swagger.io/?url=https://kgrid-activator.herokuapp.com/kos/99999/10103/v0.0.2/service) visualisation of the OpenAPI specification.

####  :four: MHA Opioid Detector

This  KO  scans a patient's medication regimen, which is presented to the KO as a list of RxNorm Semantic Clinical Drug codes, for the presence of an opioid prescription.  This KO has many potential uses, including one use as a filtering or screening mechanism when applied in the context of health information exchange.

**Example API Usage with curl**
```
curl -X POST \
  https://activator.kgrid.org/99999/10104/v0.0.1/mhaOpiateDetector \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
 ```
Additional API documentation can be found in the [Swagger UI](hhttps://editor.swagger.io/?url=https://kgrid-activator.herokuapp.com/kos/99999/10104/v0.0.1/service) visualisation of the OpenAPI specification.

####  :six: Opioid Advisor

Evaluates a list of a patient's prescriptions and determines Opioid risk. This KO is a mashup of three existing KOs Opioid Use Detector, Opioid and Benzodiazepine Detector and Respiratory Depression Risk Detector

**Example API Usage with curl**
```
curl -X POST \
  https://activator.kgrid.org/99999/10106/impl/opioidadvisor \
  -H 'Content-Type: application/json' \
  -d ' {
      "id": "PA-01011",
      "prescriptions": [
        {
          "rxnorm": "106500"
        },
        {
          "rxnorm": "197446"
        },
        {
          "rxnorm": "801958"
        }
      ]
   }'
 ```
Additional API documentation can be found in the [Swagger UI](https://editor.swagger.io/?url=https://kgrid-activator.herokuapp.com/kos/99999/10106/impl/service) visualization of the OpenAPI specification.

####  :seven: Medication Regimen Complexity Index Calculator

Calculates Medication Regimen Complexity Index (MRCI) of a patient's prescription regimen. This KO is a modified implementation of the MRCI computation model from the paper [Development and Validation of the Medication Regimen Complexity Index](https://journals.sagepub.com/doi/full/10.1345/aph.1D479).

**Example API Usage with curl**
```
curl -X POST \
  https://activator.kgrid.org/99999/mrci/impl/mrci \
  -H 'Content-Type: application/json' \
  -d ' {
    "id": "MRCI-0C",
    "prescriptions": [
    {
      "rxnorm": "309362",
      "medicationname": "CLOPIDOGREL 75 MG TABLET",
      "genericname": "CLOPIDOGREL BISULFATE",
      "strength":"75 mg",
      "form": "Tablet",
      "route": "Oral",
      "sig": "75 MG ONCE DAILY"
    }
  ]
  }'
 ```
Additional API documentation can be found in the [Swagger UI](https://editor.swagger.io/?url=https://kgrid-activator.herokuapp.com/kos/99999/mrci/impl/service) visualization of the OpenAPI specification.



### Install KOs on KGrid Activator
In order to use the MOpen Opioid Knowledge Object Collection you need to have an instance of the KGrid Activator up and running. To do this, refer to [KGrid Activator](http://kgrid.org/kgrid-activator/) deployment details.  Once you have [KGrid Activator](http://kgrid.org/kgrid-activator/) up and running you will need to add the [MOpen Opioid](https://github.com/kgrid-objects/opioid-collection/releases/latest) KOs to the existing shelf.

 1. Download the released MOpen Opiod KOs self (opioid_all.zip) from github [MOpen-Opioid Collection](https://github.com/kgrid-objects/opioid-collection/releases/latest)
 1. Place the opioid-all.zip into the directory where the activator jar is located and unzip. This will place the KOs into existing shelf directory

Directory structure should look similar to the following
```json
 ├── shelf
 │   └── 99999-10103
 │       └── v0.0.1   
 │       └── v0.0.2
 │   └── 99999-10102
 │       └── v0.0.1
 │       └── v0.0.2    
 │   └── 99999-10101
 │       └── v0.0.1
 │       └── v0.0.2
 │   └── 99999-10104
 │       └── v0.0.1
 │   └── 99999-10105
 │       └── v0.0.1   
 └── kgrid-activator-0.6.2.jar
```

Go to the /health endpoint to see that the KOs are activated
You should receive a list of the activated endpoints similar to the following

```
{
    "status": "UP",
    "details": {...},
        "activationService": {
            "status": "UP",
            "details": {
                "Adapters loaded": [
                    "JAVASCRIPT"
                ],
                "Endpoints loaded": [
                    "99999-10101/v0.0.2/opioidDetector",
                    "99999-10103/v0.0.2/tripleThreatDetector",
                    "99999-10104/v0.0.1/mhaOpiateDetector",
                    "99999-10105/v0.0.1/mhaALTODetector",
                    "99999-10102/v0.0.2/opioidbzdDetector"
                ]
            }
        },
    }
}
```

## Opioid Collection Testing

### Prerequisites
There are testing and packaging features in this project that require npm, npm is installed with Node.js
[npm](https://www.npmjs.com/get-npm).  Once npm is installed run  ```npm install``` at the root of this project.


NPM test will run both unit and integration tests.

```
npm test
```
### Unit Tests

The KO Unit Test are located in the [tests directory](./tests).  These tests utilize
[Jest](https://jestjs.io/)

```
npm run test:unit
```

### Integration Tests
We test the Opioid KO endpoints in a KGrid Activator instance using [Postman](https://www.getpostman.com/) and
[Newman](https://www.npmjs.com/package/newman). The Opioid Collection integration tests are defined in the
_opioid.postman_collection.json_. The integration script uses the
[start server and test](https://www.npmjs.com/package/start-server-and-test).  
The integration test does the following:

1. downloads the latest KGrid Activator
1. runs the activator with the Opioid KOs
1. runs the Opioid collection defined as the Opioid test/integration

```
npm run test:integration
```

**Tricks**

You can start a local activator pointing to the Opioid collection
```
npm run start
```
