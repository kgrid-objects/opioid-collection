
import http from "k6/http";

import { check } from "k6";
const params = {headers: {'Content-Type': 'application/json'}};
var hostname = __ENV.HOSTNAME === undefined ? 'localhost:8080' : __ENV.HOSTNAME;
var testObjects = [
  {input: {"rxcuis":"106500,200240,856917,994226,197446,801958"}, bzd: true, description:"bzd should be found"},
  {input: {"rxcuis":"56917,994226"}, bzd: false, description:"bzd should NOT be found"},

]

export default function() {
  var url = `http://${hostname}/99999/10103/v0.0.2/tripleThreatDetector`;

  var randomtestObject = testObjects[Math.floor(Math.random() * testObjects.length)];

  var result = http.post(url, JSON.stringify(randomtestObject.input), params);
  check(result, {
    'is status 200': (r) => r.status === 200,
      "Opioid": (r) => JSON.parse(r.body).result.summary.bzd == randomtestObject.bzd

});

};
