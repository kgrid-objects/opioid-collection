# Michigan OPEN Knowledge Objects

## Introduction

### Getting Started
The MOpen Opioid Collection have been installed on our testing [KGrid Activator](https://github.com/kgrid/kgrid-activator) in order to demonstrated their usage.  
This heroku [Heroku KGrid Activator](https://kgrid-activator.herokuapp.com/) is referenceed in the API Documentation for each KO. This should allow you 
to see the KO in action.  

Installation of the KO collection to your [KGrid Activator](https://github.com/kgrid/kgrid-activator) is outlined in the [install](#install)  
section.

Table of Contents
--
- [Getting Started](#getting-started)
- [Knowledge Object Collection](#knowledge-object-collection)
   - [Opioid Use Detector](#opioid-use-detector) 
   - [Opioid and Benzodiazepine Detector](#opioid-and-benzodiazepine-detector)
  - [Respiratory Depression Risk Indicator](#respiratory-depression-risk-indicator )
- [Install](#install)  
- [Common Issues/Problems](#Ccmmon-issues/problems)




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
Install collection


To open, enter `https://kgrid.org/mopen-opioid-collection/service/mopen.yaml` in the top text box and click `explore`
