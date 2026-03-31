import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirma: string = '';
  cpf: string = '';
  telefone: string = '';

  constructor(private router: Router) {}

  onCadastro(): void {
    if (!this.nome || !this.email || !this.senha || !this.confirma || !this.cpf || !this.telefone) {
      alert('Preencha todos os campos.');
      return;
    }
    if (this.senha !== this.confirma) {
      alert('As senhas não coincidem.');
      return;
    }
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']);
  }
}