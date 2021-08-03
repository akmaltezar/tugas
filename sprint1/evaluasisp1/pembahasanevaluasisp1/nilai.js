var nilai = prompt("masukkan nilai");
var grade = "";

if(nilai > 90) {
    grade = "A" ;
} else if (nilai > 80) {
    grade = "B+"
} else if (nilai > 70) {
    grade = "B"
} else {
    grade = "F"
}
document.write (grade)