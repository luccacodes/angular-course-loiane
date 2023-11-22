import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent {
  cursos: string[] = [];

  constructor(private cursosSerivce: CursosService) {}

  ngOnInit() {
    this.cursos = this.cursosSerivce.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursosSerivce.addCurso(curso);
  }
}
