// shift() Menghapus element pertama dari Array dan mengembalikan elemen yg telah di hapus tersebur
const ray=[`ray`,`randi`,`fa`];
const hapus= ray.shift();
console.log(ray);

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
    { name: "david", nilai: 5 }
    ];
  const nama1 = rata2Kls1IPA.find(({ nilai }) => nilai === 5);
  
  console.log(nama1);

// flat() untuk meratakan/menggabungkan semua element array baik yg bersarang atau kosong, menjadi satu array datar
const namaNegaraArray =[`indonesia`,`malaysia`,`laos`,[`usa`,`kanada`,],[],[`jepang`,`korea`,`china`]];
const namaNegara = namaNegaraArray.flat();
console.log(namaNegara);

// from() untuk membuat array dari objeck atau string
const string ='nama saya ray';
const rubah =  Array.from(string);
console.log(rubah);

// some() untuk memeriksa apakah paling tidak ada satu element dalam array yang memenuhi status tertentu
const namaAnak = ["budi", "banu", "siti", "ujang"];

function checkAvailability(arr, val) {
  const found = arr.some((arrVal) => val === arrVal);
  if (found) {
    return arr;
  } else {
    return null;
  }
}

const result1 = checkAvailability(namaAnak, "banu");
if (result1) {
  console.log(`data yang anda cari ada array.`);
} else {
  console.log(`data tidak ditemukan dalam array.`);
}

// unshift() menambahkan satu atau lebih elemen di awal array
const namasaya= [`ray`,`fa`,`randi`];
namasaya.unshift  ('nama','saya');
console.log(namasaya);

// every() memeriksa semua elemen dalam array memenuhi kondisi tertentu
const nomer= [4, 6, 10, 12];
const cekNomer =nomer.every(num => num % 2 === 0);
console.log(cekNomer); 

// slice() membuat salinan seluruh atau sebagian dari array
const kota =[`jakarta`,`bekasi`,`bandung`,`jogja`];
const pilihKota=kota.slice(2,4);
console.log(pilihKota);


