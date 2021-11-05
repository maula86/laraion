var arit = /** @class */ (function () {
    // ini constructor hanya untuk menangkap
    function arit(a1, a2) {
        // ^
        // |___DI atas adalah Induk yang akan dipanggil di Instance
        // ini Var lokal* untuk penyambung pengenalan 
        this.aa = 0;
        this.bb = 0;
        this.aa = a1;
        this.bb = a2;
        //   ^
        //   |_____di atas adalah var lokal*
    }
    // ini function
    arit.prototype.jumlah = function () {
        return "Hasil dari Penjumlahan a1+a2 [" + (this.aa + this.bb) + "]";
    };
    arit.prototype.kurang = function () {
        return "Hasil dari Penjumlahan a1-a2 [" + (this.aa - this.bb) + "]";
    };
    arit.prototype.kali = function () {
        return "Hasil dari Penjumlahan a1*a2 [" + (this.aa * this.bb) + "]";
    };
    arit.prototype.bagi = function () {
        return "Hasil dari Penjumlahan a1/a2 [" + (this.aa / this.bb) + "]";
    };
    return arit;
}());
var match = new arit(10, 2);
console.log(match.jumlah());
console.log(match.kurang());
console.log(match.kali());
console.log(match.bagi());
