class mahasiswa {
    s1: string;
    s2: string;
    constructor(nim,nama) {
        this.s1 = nim;
        this.s2= nama;
        
    }

    showdt(){
        return "nim ("+this.s1+"), nama (" +this.s2+")";
    }
}

var dtm = new mahasiswa('20019120089','Arif');

console.log(dtm.showdt());

// class turunan
// meng extends dari class induk mahasiswa
class score extends mahasiswa {
    nilai: number;
    mat: string;
    
    // sama ada constructor
    constructor(nim, nama,less,nilait) {
        super(nim, nama);
        this.nilai = nilait;
        this.mat = less;

    }
    tnilai() {
        var dtn: string = super.showdt();
        return dtn + " matkul[" +this.mat +"]"+ " nilai("+this.nilai+")";
    }

} 


    var dtnm = new score('20019120089', 'Maula','TI',99);
    console.log(dtnm.tnilai());
