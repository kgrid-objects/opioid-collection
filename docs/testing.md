## Opioid Collection Testing

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
We test the IPP KO endpoints in a KGrid Activator instance using [Postman](https://www.getpostman.com/) and
[Newman](https://www.npmjs.com/package/newman). The Opioid Collection integration tests are defined in the 
_opioid.postman_collection.json_. The integration script uses the 
[start server and test](https://www.npmjs.com/package/start-server-and-test).  
The integration test does the following:

1. downloads the latest KGrid Activator
1. runs the activator with the IPP KOs
1. runs the ipp collection defined as the IPP test/integration 
 
```
npm run test:integration
```

**Tricks**

You can start a local activator pointing to the IPP collection 
```
npm run start
```

