function seleksiNilai(nilaiAwal, nilaiAkhir, nilai) {
    const hasilNilai = nilai.filter(function(hasil) {
        return hasil >= nilaiAwal && hasil <= nilaiAkhir;
    });
    return hasilNilai;
}

const nilai = [2, 25, 4, 14, 17, 30, 8];
const nilaiAwal = 5;
const nilaiAkhir = 20;
const tersaring = seleksiNilai(nilaiAwal, nilaiAkhir, nilai);
console.log(tersaring);
