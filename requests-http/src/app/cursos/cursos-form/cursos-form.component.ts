import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {
  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private modalService: AlertModalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.cursosService.loadByID(id))
    )
    .subscribe((curso) => this.updateForm(curso));

    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    });
  }

  updateForm(curso: any) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome,
    });
  }

  hasError(field: string) {
    return this.form.get(field)!.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid) {
      console.log('submit');
      this.cursosService.create(this.form.value).subscribe(
        success => this.modalService.showAlertSuccess('Curso criado com sucesso'),
        error => this.modalService.showAlertDanger('Erro ao criar curso, tente novamente'),
        () => console.log('request completo')
      );
    }
  }

  onCancelar() {
    this.submitted = false;
    this.form.reset();
    console.log('cancelar');
  }
}

