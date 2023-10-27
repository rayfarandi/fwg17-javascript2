const data = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(query, limit, cb) {
  const results = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].includes(query)) {
      results.push(data[i]);
    }

    if (results.length === limit) {
      return  cb(results);
    }
  }
  cb(results);
}

function limitResult(results,limit) {
  console.log(results.slice(0,limit));
}
function arrayToLowerCase (result, limit){ 
    const toLowerCaseResults = result.map(value=>value.toLowerCase());
    limitResult(toLowerCaseResults,limit);
}

searchName("an", 3,limitResult);
searchName('an', 3, arrayToLowerCase)