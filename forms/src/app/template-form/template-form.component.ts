import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  constructor(private http: HttpClient) { }

  usuario: any = {
    nome: null,
    email: null,
  }

  onSubmit(form: any) {
    console.log(form.value);
    console.log(this.usuario);
  }

  consultaCEP(cep: any) {
    cep = cep.replace (/\D/g, '');

    if (cep != null && cep !== '') {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe(dados => console.log(dados));
      }
    }
  }
}
