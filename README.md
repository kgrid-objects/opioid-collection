# Michigan OPEN Opioid-related Knowledge Object (KO) Collection

## Introduction
This is a collection of KOs for KGrid that can be used to identify and report on certain features of opioid prescribing. Each KO in this collection uses patient prescription data for its input and provides information about patient prescriptions as its output. 

Table of Contents
--
- [Getting Started](#getting-started)
- [Knowledge Object Collection](#knowledge-object-collection)
   1. [Opioid Use Detector](#one-opioid-use-detector) 
   1. [Opioid and Benzodiazepine Detector](#two-opioid-and-benzodiazepine-detector)
  1. [Respiratory Depression Risk Indicator](#three-respiratory-depression-risk-indicator )
- [Install the Michigan OPEN Opioid-related KO Collection](#install-kos-on-kgrid-activator)  
- [Common Issues/Problems](#common-issuesproblems)
- [Roadmap](#roadmap)


### Getting Started
These instructions will allow you to test drive one or more of the KOs in the MOpen Opioid-related Knowledge Object Collection on our sandbox at Herokuapp.com here.  To check if the sandbox is working, you can click here: [Heroku KGrid Activator](https://kgrid-activator.herokuapp.com/).  

Below in this documentation, find each KO's API documentation in the OpenAPI 3.0 specification format. By clicking on the API Documentation link for each KO, the API documentation will be displayed in a Swagger UI tool.  Utilizing the example curl or the Swagger UI tool you can test out the interation using each KO.

### Knowledge Object Collection

####  :one: Opioid Use Detector
This [KO](./99999-10101)  scans a patient's medication regimen, which is presented to the KO as a list of RxNorm Semantic Clinical Drug codes, for the presence of an opioid prescription.  This KO has many potential uses, including one use as a filtering or screening mechanism when applied in the context of health information exchange. 

**Example API Usage with curl**
```
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10101/v0.0.1/opioidDetector \
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
Additional API documentation can be found in the [Swagger UI](https://kgrid-demos.github.io/swaggerui/?url=https://kgrid.org/mopen-opioid-collection/99999-10101/v0.0.1/model/service/servicedescriptor.yaml) visualation of the OpenAPI specification.

####  :two: Opioid and Benzodiazepine Detector
This [KO](./99999-10102)  scans a list of a patient's prescriptions, which are presented to the KO as a list of RxNorm Semantic Clinical Drug codes, and determines if they are being exposed simultaneously to a known risky combination of an opioid and a benzodiazepine.

**Example API Usage with curl**
```json
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10102/v0.0.1/opioidbzdDetector \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```

Additional API documentation can be found in the [Swagger UI](https://kgrid-demos.github.io/swaggerui/?url=https://kgrid.org/mopen-opioid-collection/99999-10102/v0.0.1/model/service/servicedescriptor.yaml) visualation of the OpenAPI specification.

####  :three: Respiratory Depression Risk Indicator
This [KO](./99999-10103)  scans a list of a patient's prescriptions, which are presented to the KO as a list or RxNorm Semantic Clinical Drug Codes, and determines if they are at higher risk for drug-induced respiratory depression because of being exposed simultaneously to a combination of an opioid, a benzodiazepine, and a muscle relaxant.

**Example API Usage with curl**
```json
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10103/v0.0.1/tripleThreatDetector \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
 ```
Additional API documentation can be found in the [Swagger UI](https://kgrid-demos.github.io/swaggerui/?url=https://kgrid.org/mopen-opioid-collection/99999-10103/v0.0.1/model/service/servicedescriptor.yaml)  visualation of the OpenAPI specification.

### Install KOs on KGrid Activator
In order to use the MOpen Opioid Knowledge Object Collection you need to have an instance of the KGrid Activator up and running. To do this, refer to [KGrid Activator](http://kgrid.org/kgrid-activator/) deployment details.  Once you have [KGrid Activator](http://kgrid.org/kgrid-activator/) up and running you will need to add the [MOpen Opioid](https://github.com/kgrid/mopen-opioid-collection/releases/latest) KOs to the existing shelf. 

 1. Download the released MOpen Opiod KOs self (opid_shelf.zip) from github [MOpen-Opioid Collection](https://github.com/kgrid/mopen-opioid-collection/releases/latest)
 1. Place the opid_shelf.zip.zip into the directory where the activator jar is located and unzip. This will place the KOs into existing shelf directory
 
Directory structure should look similar to the following
```json
 ├── shelf
 │   └── 99999-10103
 │       └── v0.0.1   
 │   └── 99999-10102
 │       └── v0.0.1   
 │   └── 99999-10101
 │       └── v0.0.1   
 └── kgrid-activator-0.5.8.jar
```

Once on the [KGrid Activator](http://kgrid.org/kgrid-activator/) shelf  the KOs will need to be activated. This is accomplished by calling the executors resource.

```curl http://localhost:8080/executors```

This will load and activate the KOs on the shelf. You should recieve a list of the activated endpoint similar to the following
```
[
    "99999/10103/v0.0.1/tripleThreatDetector",
    "99999/10101/v0.0.1/opioidDetector",
    "99999/10102/v0.0.1/opioidbzdDetector"
]
```

### Common Issues/Problems

More to come

### Roadmap

#### Current

#### Planned

#### Release/Publish KOs 
The current released/published MOpen collection is stored on GitHub [MOpen Opioid Collection Releases](https://github.com/kgrid/mopen-opioid-collection/releases). This zipped ko collection can be installed in an activator as descrided in [Install the Michigan OPEN Opioid-related KO Collection](#install)  




