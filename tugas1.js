// shift() Menghapus element pertama dari Array dan mengembalikan elemen yg telah di hapus tersebur
const ray=[`ray`,`randi`,`fa`];
const hapus= ray.shift();
console.log(ray); // output [ 'randi', 'fa' ]

// concat() Menggabungkan dua atau lebih array 
const angka= ['1',`2`,`3`];
const huruf=['a','b','c'];
const alfanumerik =angka.concat(huruf);
console.log(alfanumerik);

// filter() untuk memfilter conten/isi array,dengan persyaratan tertentu
const nama=[`ray`,`randi`,`burhan`,`sidik`];
const saringNama=nama.filter(function(nama){
    return nama.includes('an');
});
console.log(saringNama);

// find() untuk mencari elemen pertama dalam array,yg memenuhi kondisi tertentu
const rata2Kls1IPA = [
    { name: "budi", nilai: 10 },
    { name: "rara", nilai: 6 },
    { name: "david", nilai: 5 },
  ];
  
  const nama1 = rata2Kls1IPA.find(({ nilai }) => nilai === 5);
  
  console.log(nama1);
