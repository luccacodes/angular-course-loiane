import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Livro de Javascript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2023, 10, 25),
  }

  livros: string[] = ['Java', 'Angular'];

  filtro!: string;
}
