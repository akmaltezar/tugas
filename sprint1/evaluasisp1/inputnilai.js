var nilai = prompt("Masukkan nilai:");
    var grade = "";

    if (nilai >= 90){
        document.write ("A")
    } else if(nilai >= 80) {
        document.write ("B+")
    } else if(nilai >= 70) {
        document.write ("B")
    } else {
        document.write ("F")
    }
    document.write ("<p>" + grade + "Nilai :" + "</p>")