// object 1
var sepatu = {
    "jenis" : "Running",
    "warna" : "Polkadot",
    "ukuran" : "42",
    pakai : function(wear) {
        console.log("Saya sedang memakai " + wear);
    }
}
console.log (sepatu);
sepatu.pakai ("Sepatu Running warna Polkadot")
 

// object 2
var laptop = {
    "merek" : "Asus",
    "seri_laptop" : "Rog",
    "warna" : "Hitam",
     nyala : function(power){
        console.log ("Hidupkan " + power )
}
}
console.log (laptop)
laptop.nyala ("Laptop Asus Rog warna hitam")


// object 3
var ponsel = {
    "os" : "android",
    "model" : "redmiNote8",
    "tahun_rilis" : "2019"
}
console.log(ponsel);
function rincianPonsel (modelPonsel, hargaPonsel) {
    return {
        "Model Ponsel" : modelPonsel,
        "Harga Ponsel" : hargaPonsel
    }
}
console.log(rincianPonsel("Android Redmi",2000000));


// object 4
var cafe = {
    "gaya_bangunan" : "retro",
    "lokasi" : "jogjakarta",
    "tahun_dibangun" : "2021",
    bangun : function(build) {
        console.log ("Ada Pembangunan " + build);
    }
}
console.log (cafe);
cafe.bangun ("Cafe bergaya retro di Jogjakarta")
