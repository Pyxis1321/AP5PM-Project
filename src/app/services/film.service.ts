import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmData } from '../models/films.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilmData(name: string): Observable<FilmData>{
    return this.http.get<FilmData>(environment.api.baseUrl, {
      params: new HttpParams()
        .set('t', name)
    })
  }
}
