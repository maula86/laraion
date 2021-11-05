import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { Buku } from 'src/app/models/buku';
import { Anggota } from '../models/anggota';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthsService {
  isLoggedIn = false;
  token: any;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService
  ) { }

  login(email: string, password: string) {
    return this.http.post(this.env.API_url + 'auth/login', {email:email, password:password}).pipe(
      tap(token => {
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );

  }

  logout() {
    console.log(this.token['access_token']);
    const headers = new HttpHeaders({
     'Authorization' : this.token['token_type'] + ' ' + this.token['access_token']
    });
    return this.http.get(this.env.API_url + 'auth/logout', {headers: headers}).pipe(
      tap(data => {
        this.storage.remove('token');
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    );
    // console.log(headers);
  }

  // tslint:disable-next-line: ban-types
  register(nama: String, email: String, password: String,) {
    return this.http.post(this.env.API_url + 'auth/register', {
      // disini variable & name pada form
      // name     //Variable
      nama: nama,
      email: email,
      password: password
    });
  }

  user(){
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + " " + this.token['access_token']
    });

    return this.http.get<User>(this.env.API_url + 'auth/user', {headers: headers}).pipe(
      tap(user =>{
        return user;
        })
      )
    }


  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;

        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
        error => {
          this.token = null;
          this.isLoggedIn = false;
        }
    );
  }

  upimg(){
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + " " + this.token['access_token']
    });

    return this.http.post(this.env.API_url + 'auth/uploadimg', { headers: headers })
  }


  // About Book/////////////////////////////
  buku(){
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + " " + this.token['access_token']
    });

    return this.http.get<Buku>(this.env.API_url + 'auth/book', { headers: headers }).pipe(
      tap(book =>{
        return Buku;
      }) 
    )
  }
  // add
  addbuku( kode_b: String, judul: String, penerbit: String,
          pengarang: String, rak: String, jml: Number, 
          price: Number) {


    return this.http.post(this.env.API_url + 'auth/addbuku', {

      kode_b: kode_b,
      judul: judul,
      penerbit: penerbit,
      pengarang: pengarang,
      rak: rak,
      jml: jml,
      price: price

    });

  }
      //Edit
  // findid(id: Number): Observable<any>{
  //   return this.http.get(this.env.API_url + `auth/editbuku/${id}`, { responseType: 'text'});
  // }
  editbuku(id: Number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + " " + this.token['access_token']
    });
    return this.http.get<Buku>(this.env.API_url + `auth/editbuku/${id}`, { headers: headers }).pipe(
      tap(book =>{
        return Buku;
      })
      
    )
  }

  updatebuku( id: Number, kode_b: String, judul: String, penerbit: String,
    pengarang: String, rak: String, jml:Number, price: Number, sts_buku: any) {
      
      return this.http.post(this.env.API_url + `auth/updatebuku/${id}`, {
      
      id : id,
      kode_b : kode_b,
      judul: judul,
      penerbit: penerbit,
      pengarang: pengarang,
      rak: rak,
      jml: jml,
      price: price,
      sts_buku: sts_buku

      
      });


    }

  hapuskan(id: number): Observable<any> {
    return this.http.delete(this.env.API_url + `auth/hapusdong/${id}`, { responseType: 'text' });
  }

  // About Anggota/////////////////////////////
  anggota(){
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + " " + this.token['access_token']
    });

    
    return this.http.get<Anggota>(this.env.API_url + 'auth/anggota', { headers: headers }).pipe(
      tap(anggota =>{
        return Anggota;
      }) 
    )
  }






  //
}
