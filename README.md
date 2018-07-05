# Michigan OPEN Knowledge Objects

## Introduction
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.

### Getting Started
Each of the knowledge objects is deployed to demo sandbox on heroku. Using this deploy you can test the KO api. 

- [Knowledge Object Collection](#knowledge-object-collection)
   - [Opioid Use Detector](#opioid-use-detector) 
   - [Opioid and Benzodiazepine Detector](#opioid-and-benzodiazepine-detector)
  - [Respiratory Depression Risk Indicator](#respiratory-depression-risk-indicator )
- [Install](#install)  
- [Common Issues/Problems](#Ccmmon-issues/problems)


### Knowledge Object Collection

#### Opioid Use Detector
This knowledge object scans a medication regimen for the presence of an opioid.  This object has many potential uses, including one use as a filtering/screening mechanism when applied in the context of messaging and health information exchange at Transitions of Care.

* [Opioid Use Detector Knowledge Object](./99999-10101)
* API Documentation 

Example Curl Usage
```
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10101/v0.0.1/opioidDetector \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```  


#### Opioid and Benzodiazepine Detector
This object scans a list of a patient's prescriptions and determines if they are at risk being exposed simultaneously to a known dangerous combination of an opioid and a benzodiazepine.

* [Opioid and Benzodiazepine Detector](./99999-10102)
* API Documentation 

```json
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10102/v0.0.1/opioidbzdDetector \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```
#### Respiratory Depression Risk Indicator
This object scans a list of a patient's prescriptions and determines if they are at risk greater for drug-induced respiratory depression because of being exposed simultaneously to a known dangerous combination of an opioid, a benzodiazepine, and a muscle relaxant.
* [Respiratory Depression Risk Indicator](./99999-10103)
* API Documentation 

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
