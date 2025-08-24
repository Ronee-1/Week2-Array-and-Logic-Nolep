
let input1 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input12) {
input12.splice(1, 1, "Roman Alamsyah Elsharaw");
input12.splice(2, 1, "Provinsi Bandar Lampung");
input12.splice(4, 1, "Pria", "SMA Internasional Metro");
console.log(input12);
}

function dataHandling2(arr){
    arr = "Mei";
    console.log(arr);
}

function dataHandling3(arr2){
    let tanggalLahir = arr2.slice(3,4).join(",");
    let pecah = tanggalLahir.split("/").reverse();
    let array = [pecah[0], pecah[2], pecah[1]];
    console.log(array);
}

function dataHandling4(arr1){
    let gabung = arr1.slice(3,4).join("");
    let gabungStrip = gabung.split("/").join("-");
    console.log(gabungStrip);
}

function dataHandling5(arr3){
   arr3[1] = arr3[1].slice(0, 15);
    console.log(arr3);
}


dataHandling(input1);
dataHandling2(input1);
dataHandling3(input1);
dataHandling4(input1);
dataHandling5(input1);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */