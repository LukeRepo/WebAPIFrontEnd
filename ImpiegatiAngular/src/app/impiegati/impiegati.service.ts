import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Impiegato } from './impiegato';
import { Dipartimento } from './dipartimento';


@Injectable({
  providedIn: 'root',
})
export class ImpiegatiService {

  private impiegatiURl="http://localhost:50201/api/impiegati";
  private dipartimentiURL="http://localhost:50201/api/dipartimenti"
  constructor(private http: HttpClient) { }

  getImpiegati(): Observable<Impiegato[]> {
    return this.http.get<Impiegato[]>(this.impiegatiURl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }

  getImpiegatiAnziani(num:number,dipartimento:number):Observable<Impiegato[]>
  {

    return this.http.get<Impiegato[]>(this.impiegatiURl+"?numero="+num+"&dipartimento="+dipartimento)
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  getDipartimenti():Observable<Dipartimento[]>
  {
    return this.http.get<Dipartimento[]>(this.dipartimentiURL)
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }
}
