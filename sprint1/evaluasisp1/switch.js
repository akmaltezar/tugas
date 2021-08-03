// var nilai = prompt("Masukkan Nilai");
// var grade = "";

// switch(true){
//     case nilai <= 90:
//         grade = "A";
//         break;
//     case nilai <= 80:
//         grade = "B+";
//         break;
//     case nilai <= 70:
//         grade = "B";
//         break;
//     default:
//         grade = "F";
//         document.getElementById("demo").innerHTML = " Nilai : " + grade;

        var nilai = prompt("Masukkan Nilai");
        var grade = "";

    switch(true){
    case nilai <= 90:
        grade = "A";
        break;
    case nilai <= 80:
        grade = "B+";
        break;
    case nilai <= 70:
        grade = "B";
        break;
    default:
        grade = "F";
        break;
    }
    document.getElementById("demo").
    innerHTML = "Nilai anda" + grade;