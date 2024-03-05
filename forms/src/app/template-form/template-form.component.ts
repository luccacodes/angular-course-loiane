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
    // console.log(this.usuario);

    this.http.post('enderecoServer/formUsuario', JSON.stringify(form.value))
      .pipe(map((res: any) => res)).subscribe((dados: any) => console.log(dados))
  }

  consultaCEP(cep: any, form: any) {
    cep = cep.replace (/\D/g, '');

    if (cep != null && cep !== '') {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.resetaDadosForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados: any, form: any) {
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    })

    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    })
  }

  resetaDadosForm(form: any) {
    form.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    })
  }
}
