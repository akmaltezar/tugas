var nilaiSantri = [ 5, 9, 6, 7, 9, 8, 10, 7, 8 ]
var jumlah_nilai = 0 ;
for (var a = 0; a < nilaiSantri.length; a++) {
    jumlah_nilai += nilaiSantri[a]
}
console.log("Jumlah nilai santri = " + jumlah_nilai)
console.log("Rata-rata nilai santri = " + jumlah_nilai/nilaiSantri.length)

