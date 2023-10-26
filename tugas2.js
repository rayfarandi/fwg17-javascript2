
const data = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
  ];
  const searchName = (query,limit)=>{
  const filterData = (value)=>{
    const name = value.toLowerCase()
    return name.includes(query)
  }
  console.log(data.filter(filterData).slice(0,limit))
};
searchName('an',3)
