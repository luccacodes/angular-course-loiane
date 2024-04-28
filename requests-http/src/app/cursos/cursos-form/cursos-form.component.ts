import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {
  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, Validators.required, Validators.minLength(3), Validators.maxLength(250)],
    });
  }

  hasError(field: string) {
    return this.form.get(field)!.errors;
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      console.log('submit');
    }
  }

  onCancelar() {
    this.submitted = false;
    this.form.reset();
    console.log('cancelar');
  }
}

