export class Buku {
  static find(arg0: boolean): void {
    throw new Error('Method not implemented.');
    // enum sts { ADA = "ADA", 
    // PINJAM = 'PINJAM', 
    // HILANG = "HLANG", 
    // RUSAK = "RUSAK", 
    // MUSNAH = "MUSNAH" };
  }

    id        : number;
    kode_b    : string;
    judul     : string;
    penerbit  : string;
    pengarang : string;
    rak       : string;
    jml       : number;
    price     : number;
    // imgbuku: string;

    // tslint:disable-next-line: no-unused-expression
    sts_buku: string;
  static id: void;
}
