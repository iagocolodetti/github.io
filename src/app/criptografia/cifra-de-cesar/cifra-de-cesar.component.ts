import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Util } from '../Util';
import { Metodos } from './Metodos';

const util = new Util();
const metodos = new Metodos();

@Component({
  selector: 'app-cifra-de-cesar',
  templateUrl: './cifra-de-cesar.component.html',
  styleUrls: ['./cifra-de-cesar.component.css']
})
export class CifraDeCesarComponent {

  title = 'Cifra de César';

  texto = '';
  deslocamento = '';
  resultado = '';

  constructor(title: Title) {
    title.setTitle(this.title);
  }

  cifrar() {
    if(this.texto.length > 0 && this.deslocamento.length > 0) {
      if (util.isPositiveInteger(this.deslocamento)) {
        try {
          this.resultado = metodos.cifrar(this.texto, parseInt(this.deslocamento));
        } catch (erro) {
          this.resultado = erro;
        }
      } else {
        this.resultado = 'O deslocamento deve ser um número inteiro positivo.';
      }
    }
  }

  decifrar() {
    if(this.texto.length > 0 && this.deslocamento.length > 0) {
      if (util.isPositiveInteger(this.deslocamento)) {
        try {
          this.resultado = metodos.decifrar(this.texto, parseInt(this.deslocamento));
        } catch (erro) {
          this.resultado = erro;
        }
      } else {
        this.resultado = 'O deslocamento deve ser um número inteiro positivo.';
      }
    }
  }
}
