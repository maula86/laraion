// soal 6.
//////////      GAYA Sriptingnya 
// {var/let}.{Nama variable}.{Type}.{=Nilai}
var benar = true;
var salah = false;
var pancet = 10; //nilai tetap
console.log(benar);
console.log(salah);
console.log(pancet);
function jumlah(a1, a2) {
    return "Hasil dari Penjumlahan a1+a2 [" + (a1 + a2) + "]";
}
function kurang(a1, a2) {
    return "Hasil dari Penjumlahan a1-a2 [" + (a1 - a2) + "]";
}
function kali(a1, a2) {
    return "Hasil dari Penjumlahan a1*a2 [" + (a1 * a2) + "]";
}
function bagi(a1, a2) {
    return "Hasil dari Penjumlahan a1/a2 [" + (a1 / a2) + "]";
}
console.log(jumlah(1, 3));
console.log(kurang(10, 5));
console.log(kali(10, 5));
console.log(bagi(10, 2));
