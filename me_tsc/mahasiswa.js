var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mahasiswa = /** @class */ (function () {
    function mahasiswa(nim, nama) {
        this.s1 = nim;
        this.s2 = nama;
    }
    mahasiswa.prototype.showdt = function () {
        return "nim (" + this.s1 + "), nama (" + this.s2 + ")";
    };
    return mahasiswa;
}());
var dtm = new mahasiswa('20019120089', 'Arif');
console.log(dtm.showdt());
// class turunan
// meng extends dari class induk mahasiswa
var score = /** @class */ (function (_super) {
    __extends(score, _super);
    // sama ada constructor
    function score(nim, nama, less, nilait) {
        var _this = _super.call(this, nim, nama) || this;
        _this.nilai = nilait;
        _this.mat = less;
        return _this;
    }
    score.prototype.tnilai = function () {
        var dtn = _super.prototype.showdt.call(this);
        return dtn + " matkul[" + this.mat + "]" + " nilai(" + this.nilai + ")";
    };
    return score;
}(mahasiswa));
var dtnm = new score('20019120089', 'Maula', 'TI', 99);
console.log(dtnm.tnilai());
