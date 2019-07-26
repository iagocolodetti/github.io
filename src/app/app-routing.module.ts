import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CriptografiaComponent } from './criptografia/criptografia.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'criptografia', component: CriptografiaComponent},
  {path: 'jogodavelha', component: JogoDaVelhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
