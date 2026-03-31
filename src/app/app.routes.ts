import { Routes } from '@angular/router';
import { Vitrine } from './components/vitrine/vitrine';
import { Detalhe } from './components/detalhe/detalhe';
import { Busca } from './components/busca/busca';
import { Cesta } from './components/cesta/cesta';
import { Login } from './components/login/login';
import { Cadastro } from './components/cadastro/cadastro';
import { EsqueciSenha } from './components/esqueci-senha/esqueci-senha';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'produto/:id', component: Detalhe },
  { path: 'busca', component: Busca },
  { path: 'cesta', component: Cesta },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'esqueci-senha', component: EsqueciSenha },
  { path: '**', redirectTo: '' }
];