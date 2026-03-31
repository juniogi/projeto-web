import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.email && this.senha) {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/']);
    } else {
      alert('Preencha todos os campos.');
    }
  }
}