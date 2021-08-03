function hitungVolumeDanLuasPermukaanBalok(panjang, lebar, tinggi){
    volume = panjang * lebar * tinggi
    luaspermukaan = 2 * (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi)
    document.write("Panjang : " + panjang + "<br/>");
    document.write("Lebar : " + lebar + "<br/>");
    document.write("Tinggi : " + tinggi + "<br/><br/>");
    document.write("Volume Balok : " + volume + "<br/>");
    document.write("Luas Permukaan Balok : " + luaspermukaan + "<br/>");
}
panjang = prompt("Masukkan Panjang :");
lebar = prompt("Masukkan Lebar : ");
tinggi = prompt("Masukkan Tinggi :");
hitungVolumeDanLuasPermukaanBalok(panjang, lebar, tinggi)
