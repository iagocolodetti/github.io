import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AnaliseCombinatoriaComponent } from './analise-combinatoria/analise-combinatoria.component';
import { ConversorDeBaseComponent } from './conversor-de-base/conversor-de-base.component';
import { CriptografiaComponent } from './criptografia/criptografia.component';
import { CifraXorComponent } from './criptografia/cifra-xor/cifra-xor.component';
import { CifraDeCesarComponent } from './criptografia/cifra-de-cesar/cifra-de-cesar.component';
import { CifraRailFenceComponent } from './criptografia/cifra-rail-fence/cifra-rail-fence.component';
import { CifraMatematicaComponent } from './criptografia/cifra-matematica/cifra-matematica.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'analisecombinatoria', component: AnaliseCombinatoriaComponent},
  {path: 'conversordebase', component: ConversorDeBaseComponent},
  {path: 'criptografia', component: CriptografiaComponent},
  {path: 'criptografia/cifraxor', component: CifraXorComponent},
  {path: 'criptografia/cifradecesar', component: CifraDeCesarComponent},
  {path: 'criptografia/cifrarailfence', component: CifraRailFenceComponent},
  {path: 'criptografia/ciframatematica', component: CifraMatematicaComponent},
  {path: 'jogodavelha', component: JogoDaVelhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
