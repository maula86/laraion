class arit {
// ^
// |___DI atas adalah Induk yang akan dipanggil di Instance

    // ini Var lokal* untuk penyambung pengenalan 
    aa: number = 0;
    bb: number = 0;

    // ini constructor hanya untuk menangkap
    constructor(a1:number,a2:number) {
        this.aa = a1;
        this.bb = a2;
        //   ^
        //   |_____di atas adalah var lokal*
        
    }

        // ini function
        jumlah() {
            return "Hasil dari Penjumlahan a1+a2 [" + (this.aa + this.bb) + "]";
        }

        kurang() {
            return "Hasil dari Penjumlahan a1-a2 [" + (this.aa - this.bb) + "]";
        }

        kali() {
            return "Hasil dari Penjumlahan a1*a2 [" + (this.aa * this.bb) + "]";
        }

        bagi() {
            return "Hasil dari Penjumlahan a1/a2 [" + (this.aa / this.bb) + "]";
        }

    
}

    let match = new arit(10,2)
    
    console.log(match.jumlah());
    console.log(match.kurang());
    console.log(match.kali());
    console.log(match.bagi());