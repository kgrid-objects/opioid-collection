# Michigan OPEN Knowledge Objects

## Overview
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.

### Getting Started
Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.

#### Opioid Use Detector
This knowledge object scans a medication regimen for the presence of an opioid.  This object has many potential uses, including one use as a filtering/screening mechanism when applied in the context of messaging and health information exchange at Transitions of Care.



API Documentation

Example Curl
```
curl -X POST \
  http://kgrid-activator.herokuapp.com/99999/10101/v0.0.1/opioidDetector \
  -H 'Content-Type: application/json' \
  -d '{"rxcuis":"106500,200240,856917,994226,197446,801958"}'
```  


#### Opioid and Benzodiazepine Detector
This object scans a list of a patient's prescriptions and determines if they are at risk being exposed simultaneously to a known dangerous combination of an opioid and a benzodiazepine.

#### Respiratory Depression Risk Indicator",
This object scans a list of a patient's prescriptions and determines if they are at risk greater for drug-induced respiratory depression because of being exposed simultaneously to a known dangerous combination of an opioid, a benzodiazepine, and a muscle relaxant.



### Install Collection
Donec non enim in turpis pulvinar facilisis. Ut felis.
How to deploy them to your activator


To open, enter `https://kgrid.org/mopen-opioid-collection/service/mopen.yaml` in the top text box and click `explore`
