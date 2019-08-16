import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Metodos } from './Metodos';

@Component({
  selector: 'app-conversor-de-base',
  templateUrl: './conversor-de-base.component.html',
  styleUrls: ['./conversor-de-base.component.css']
})
export class ConversorDeBaseComponent {

  metodos = new Metodos();

  title = 'Conversor de Base';

  algarismo = '';
  daBase: number;
  paraBase: number;
  resultado = '';

  constructor(title: Title) {
    title.setTitle(this.title);
  }
  
  calcular() {
    if (this.algarismo != '') {
      if ((this.daBase >= 2 && this.daBase <= 32) && (this.paraBase >= 2 && this.paraBase <= 32)) {
        try {
          this.resultado = this.metodos.converterAlgarismo(this.algarismo, this.daBase, this.paraBase);
        } catch (erro) {
          this.resultado = erro;
        }
      } else {
        this.resultado = 'Utilize bases de 2 à 32.';
      }
    } else {
      this.resultado = 'Digite um algarismo.'
    }
  }

  desativarCalcular() {
    return (this.algarismo.length == 0 || this.daBase == null || this.paraBase == null );
  }
  
}
