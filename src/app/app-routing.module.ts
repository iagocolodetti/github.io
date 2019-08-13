import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CriptografiaComponent } from './criptografia/criptografia.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { CifraMatematicaComponent } from './criptografia/cifra-matematica/cifra-matematica.component';
import { CifraDeCesarComponent } from './criptografia/cifra-de-cesar/cifra-de-cesar.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'criptografia', component: CriptografiaComponent},
  {path: 'ciframatematica', component: CifraMatematicaComponent},
  {path: 'cifradecesar', component: CifraDeCesarComponent},
  {path: 'jogodavelha', component: JogoDaVelhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
