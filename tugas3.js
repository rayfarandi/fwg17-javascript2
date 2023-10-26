function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {   
    const hasilSeleksi = dataArray.filter((nilai) => nilai >= nilaiAwal && nilai <= nilaiAkhir);
    hasilSeleksi.sort((a,b)=>a-b)
    if (nilaiAkhir<=nilaiAwal){
        return "Nilai Akhir Harus Lebih Besar Dari Nilai Awal"
    }

    if (dataArray.length <= 5){
        return "Jumlah Angka Dalam Array Harus Lebih Dari 5"
    }

    
    if (hasilSeleksi.length===0){
        return "nilai tidak di temukan"
    }

    return hasilSeleksi;
    
}



console.log(seleksiNilai(5,20,[2,25,14,17,30,8]));
console.log(seleksiNilai(15,3,[2,25,4,14,17,30,8]));
console.log(seleksiNilai(4,17,[2,25,4]));
console.log(seleksiNilai(5,17,[2,25,4,1,30,18]));
