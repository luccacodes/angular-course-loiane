import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {
  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private cursosService: CursosService, private modalService: AlertModalService) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
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

