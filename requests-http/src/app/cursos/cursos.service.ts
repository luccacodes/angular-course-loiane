import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { delay, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  private readonly API = `${environment.apiURL}cursos`

  list() {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        delay(1000),
        tap(console.log)
      )
  }

  loadByID(id: any) {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  create(curso: any) {
    return this.http.post(this.API, curso).pipe(take(1));
  }

  update(curso: any) {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  save(curso: any) {
    if (curso.id) {
      return this.update(curso);
    }
    return this.create(curso);
  }

  remove(id: any) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
