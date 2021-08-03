// array multidimensi
// var motor = [
//     ['honda', 20]
//     ['yamaha', 30]
//     ['suzuki', 25]
// ]
// console.log(motor);

// mengubah array menjadi string
var buah = ['apel', 'pisang', 'melon']
console.log(buah.toString());

// mengganti tanda penghubung tiap element
var kota = ['jakarta', 'bandung', 'surabaya']
console.log(kota.join('-'));

// menambahkan elemen array
var mobil = ['nissan', 'fortuner', 'avanza']
mobil.push('angkot')
console.log(mobil);

// menghapus elemen array
var sayur = ['wortel', 'terong','tomat']
sayur.pop()
console.log(sayur);

//menambahkan elemen pertama array
var laptop = ['lenovo', 'asus', 'hp']
mobil.unshift ('alienware')
console.log(laptop);

// menghapus elemen pertama array
var ponsel = ['samsung', 'redmi', 'vivo']
ponsel.shift ()
console.log(ponsel);

// splice untuk menambah item baru
var pakaian = ['kaos', 'kemeja', 'jaket']
pakaian.splice (2, 0, "sweater", "hoodie");
console.log(pakaian);

// splice untuk menghilangkan elemen
var menteri = ['abdul', 'budi', 'cahyo'];
menteri.splice(1,1);
console.log(menteri);

// menggabungkan 2 array yang ada
var pria = ["dani","eko"];
var wanita = ["aisyah", "fatimah"];
var pasutri = pria.concat(wanita);
console.log(pasutri);

// mengeluarkan elemen di dalam array
var buku = ["novel", "komik", "majalah"]
var fiksi = buku.slice(1,2)
console.log(buku);

