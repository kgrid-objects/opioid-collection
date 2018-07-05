# Michigan OPEN Opioid-related Knowledge Object (KO) Collection

## Introduction
This is a collection of KOs for KGrid that can be used to identify and report on certain features of opioid prescribing. Each KO in this collection uses patient prescription data for its input and provides information about patient prescriptions as its output. 

Table of Contents
--
- [Getting Started](#getting-started)
- [Knowledge Object Collection](#knowledge-object-collection)
   - [Opioid Use Detector](#opioid-use-detector) 
   - [Opioid and Benzodiazepine Detector](#opioid-and-benzodiazepine-detector)
  - [Respiratory Depression Risk Indicator](#respiratory-depression-risk-indicator )
- [Install the Michigan OPEN Opioid-related KO Collection](#install)  
- [Common Issues/Problems](#Ccmmon-issues/problems)


### Getting Started
Test drive one or more of the KOs in the MOpen Opioid-related Knowledge Object Collection on our sandbox at Herokuapp.com here: [Heroku KGrid Activator](https://kgrid-activator.herokuapp.com/).  Below in this documentation, find each KO's API documentation in the OpenAPI 3.0 specification format. By clicking on the API Documentation link for each KO, the API documentation will be displayed in a Swagger UI tool.  Utilizing this Swagger UI tool you can test out the input and output interation using each KO.




### Knowledge Object Collection

#### Opioid Use Detector
This KO scans a patient's medication regimen, which is presented to the KO as a list of RxNorm Semantic Clinical Drug codes, for the presence of an opioid prescription.  This KO has many potential uses, including one use as a filtering or screening mechanism when applied in the context of health information exchange. 

* [Knowledge Object](./99999-10101) 
* [API Documentation](https://kgrid-demos.github.io/swaggerui/?url=https://kgrid.org/mopen-opioid-collection/99999-10101/v0.0.1/model/service/servicedescriptor.yaml) 

Example Curl Usage
```
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10101/v0.0.1/opioidDetector \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```  


#### Opioid and Benzodiazepine Detector
This KO scans a list of a patient's prescriptions, which are presented to the KO as a list of RxNorm Semantic Clinical Drug codes, and determines if they are being exposed simultaneously to a known risky combination of an opioid and a benzodiazepine.

* [Knowledge Object](./99999-10102) 
* [API Documentation](https://kgrid-demos.github.io/swaggerui/?url=https://kgrid.org/mopen-opioid-collection/99999-10102/v0.0.1/model/service/servicedescriptor.yaml) 


```json
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10102/v0.0.1/opioidbzdDetector \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```
#### Respiratory Depression Risk Indicator
This KO scans a list of a patient's prescriptions, which are presented to the KO as a list or RxNorm Semantic Clinical Drug Codes, and determines if they are at higher risk for drug-induced respiratory depression because of being exposed simultaneously to a combination of an opioid, a benzodiazepine, and a muscle relaxant.

* [Knowledge Object](./99999-10103) 
* [API Documentation](https://kgrid-demos.github.io/swaggerui/?url=https://kgrid.org/mopen-opioid-collection/99999-10103/v0.0.1/model/service/servicedescriptor.yaml) 


```json
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10102/v0.0.1/opioidbzdDetector \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```

### Install
In order to use the MOpen Opioid Knowledge Object Collection you need to have an instance of the KGrid Activator up and running. To do this, refer to [KGrid Activator](http://kgrid.org/kgrid-activator/) deployment details.  
Once you have [KGrid Activator](http://kgrid.org/kgrid-activator/) up and running you will need to add the [MOpen Opioid](https://github.com/kgrid/mopen-opioid-collection/releases/latest) KOs to the existing shelf. 

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

[
    "99999/10103/v0.0.1/tripleThreatDetector",
    "99999/10101/v0.0.1/opioidDetector",
    "99999/10102/v0.0.1/opioidbzdDetector"
]


