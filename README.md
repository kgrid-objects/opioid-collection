# Michigan OPEN Knowledge Objects

## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
dolore eu fugiat nulla pariatur. 

Table of Contents
--
- [Getting Started](#getting-started)
- [Knowledge Object Collection](#knowledge-object-collection)
   - [Opioid Use Detector](#opioid-use-detector) 
   - [Opioid and Benzodiazepine Detector](#opioid-and-benzodiazepine-detector)
  - [Respiratory Depression Risk Indicator](#respiratory-depression-risk-indicator )
- [Install the KO Collection](#install)  
- [Common Issues/Problems](#Ccmmon-issues/problems)


### Getting Started
Test drive the MOpen Opioid Collection on the [Heroku KGrid Activator](https://kgrid-activator.herokuapp.com/) sandbox.  Below each KO exposes it's API documentation as OpenAPI 3.0 specification displayed in a Swaggers UI tool.  Utilizing this tool you can test out the interation with each KO.




### Knowledge Object Collection

#### Opioid Use Detector
This knowledge object scans a medication regimen for the presence of an opioid.  This object has many potential uses, including one use as a filtering/screening mechanism when applied in the context of messaging and health information exchange at Transitions of Care.

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
This object scans a list of a patient's prescriptions and determines if they are at risk being exposed simultaneously to a known dangerous combination of an opioid and a benzodiazepine.

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
This object scans a list of a patient's prescriptions and determines if they are at risk greater for drug-induced respiratory depression because of being exposed simultaneously to a known dangerous combination of an opioid, a benzodiazepine, and a muscle relaxant.

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
In order to use the MOpen Opioid Knowledge Objects you need KGrid Activator running.  Refer to [KGrid Activator](http://kgrid.org/kgrid-activator/) deployment details.  
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


