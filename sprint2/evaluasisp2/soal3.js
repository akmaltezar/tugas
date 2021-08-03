function hitungLuasPersegiPanjang (P,L) {
    var luas = P * L
    document.write ( "Panjang " + P + "<br>")
    document.write ("Lebar =" + L + "<br>")
    document.write ("Luas =" + luas )
}
panjang = prompt ("Panjang =")
lebar = prompt ("Lebar =")
hitungLuasPersegiPanjang (panjang,lebar)