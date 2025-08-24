function pasanganTerbesar(num) {
  let konversi = num.toString();
  let max = 0;
  for(let i = 0; i < konversi.length - 1; i++){
    let angka = parseInt(konversi[i]+konversi[i+1]);
    if (angka > max){
       max = angka;
    }
  }
  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99