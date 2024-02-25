import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  usuario: any = {
    nome: null,
    email: null,
  }

  onSubmit(form: any) {
    console.log(form.value);
    console.log(this.usuario);
  }
}
