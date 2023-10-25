const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
  ];
  
  function searchName(query, batas, cb) {
    const hasil = [];
    names.forEach((nama) => {
      if (nama.includes(query) && hasil.length < batas) {
        hasil.push(nama);
      }
    });
    cb(hasil);
  }
  
  function displayResults(hasil) {
    console.log(hasil);
  }
  
  searchName("an", 3, displayResults);
  