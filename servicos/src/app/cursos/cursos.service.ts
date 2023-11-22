import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  private cursos: string[] = ['Angular', 'Java', 'React'];

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }
}