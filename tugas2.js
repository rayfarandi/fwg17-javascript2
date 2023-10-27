const searchName = (keyword, limit, cb)=>{ 
  const data = [
  'Abigail', 'Alexandra', 'Alison', 
  'Amanda', 'Angela', 'Bella', 
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope'
]
const filterData =(value)=>{
  const name = value.toLowerCase()
  return name.includes (keyword)
  }
console.log(cb(data.filter(filterData), limit))
  }
  
  const limitResult = (data, limit) => { 
      const result = data.slice(0,limit) 
      return result
  }
  const arrayToLowerCase = (data, limit)=>{ 
  //     const result = []
  //     for(let i=0; i < data.length; i++){
  //     result.push(data[i].toLowerCase())
  //     }
  // return limitResult(result, limit)

  // return limitResult(data, limit).map(value=>value.toLowerCase());
  // Map() mengembalikan data/nilai berbentuk array 
  const lowerCaseData = [];
  limitResult(data, limit).forEach(value => {
    lowerCaseData.push(value.toLowerCase());
  }) // forEach tidak mengembalikan data/nilai berbentuk array, dan memerlukan penampung dahulu
  return lowerCaseData;

 
}

  searchName('an', 2, limitResult)
  searchName('an', 3, arrayToLowerCase)

