var biodata = {
    introduce : function() {
        console.log("Nama saya " + " " + this.name, "umur saya" + " " + this.age + " " +"tahun,", "alamat saya di" + " " + this.address,"dan saya punya hobby yaitu" + " " + this.hobby);

    }   
}

var data = Object.create(biodata);
data.name = "Agus,"
data.age = 30
data.address = "Jln, Malioboro, Yogyakarta,"
data.hobby = "Gaming"
data.introduce()  