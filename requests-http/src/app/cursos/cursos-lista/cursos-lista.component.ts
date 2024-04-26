import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent {

  // cursos: Curso[] = [];

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursosService) {}

  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados);

    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return EMPTY;
      })
    )

    this.service.list().subscribe(
      dados => console.log(dados),
      error => console.error(error),
      () => console.log('Observable completo!')
    )
  }
}
