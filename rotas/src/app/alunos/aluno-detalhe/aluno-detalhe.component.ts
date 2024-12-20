import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent {
  aluno: Aluno;
  id: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private alunosService: AlunosService) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     this.id = params['id'];

    //     this.aluno = this.alunosService.getAluno(this.id);

    //     if (this.aluno == undefined) {
    //       this.router.navigate(['/naoEncontrado']);
    //     }
    //   }
    // )

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log(info)
        this.aluno = info['aluno'];
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
