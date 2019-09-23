module.exports =
[
  {
    input: {
      rxcuis:"200240,856917,994226,197446,801958",
      icd10:"G70.00"
    },
    output: {"Conflict found": true, "Bad drugs":"200240"}
  },
  {
    input: {
      rxcuis:"200240,856917,994226,197446,801958",
      icd10:"G10.50"
    },
    output: {"Conflict found": false, "Bad drugs": ""}
  },
  {
    input: {
      rxcuis:"200240,856917,994226,197446,801958,193446",
      icd10:"G70.00"
    },
    output: {"Conflict found": true, "Bad drugs":"200240,193446"}
  },
];
