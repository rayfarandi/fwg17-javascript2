function sort_Arry(sa){
    let i = 0,j;
    while (i<sa.length){
        j = i + 1;
        while (j<sa.length){
            if (sa[j]<sa[i]){let temp =sa[i];sa[i]=sa[j];sa[j]=temp;} j++ } i++
    }
}

let array= [2,25,4,14,17,30,8]

sort_Arry(array);
console.log(array)

