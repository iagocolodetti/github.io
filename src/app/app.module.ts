import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CriptografiaComponent } from './criptografia/criptografia.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { CifraMatematicaComponent } from './criptografia/cifra-matematica/cifra-matematica.component';
import { CifraDeCesarComponent } from './criptografia/cifra-de-cesar/cifra-de-cesar.component';
import { CifraRailFenceComponent } from './criptografia/cifra-rail-fence/cifra-rail-fence.component';
import { CifraXorComponent } from './criptografia/cifra-xor/cifra-xor.component';
import { AnaliseCombinatoriaComponent } from './analise-combinatoria/analise-combinatoria.component';
import { ConversorDeBaseComponent } from './conversor-de-base/conversor-de-base.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CriptografiaComponent,
    JogoDaVelhaComponent,
    CifraMatematicaComponent,
    CifraDeCesarComponent,
    CifraRailFenceComponent,
    CifraXorComponent,
    AnaliseCombinatoriaComponent,
    ConversorDeBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
