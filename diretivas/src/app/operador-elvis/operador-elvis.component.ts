import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent {
  tarefa: any = {
    descricao: 'Descrição da tarefa',
    // responsavel: null,
    responsavel: {nome: 'Lucca'},
  }
}

