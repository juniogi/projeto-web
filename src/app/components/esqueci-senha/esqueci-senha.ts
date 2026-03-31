import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './esqueci-senha.html',
  styleUrls: ['./esqueci-senha.css']
})
export class EsqueciSenha {
  email: string = '';
  enviado: boolean = false;

  onEnviar(): void {
    if (this.email) {
      this.enviado = true;
    } else {
      alert('Informe seu email.');
    }
  }
}