import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Util } from '../Util';

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
      if (Util.intTryParse(this.deslocamento)) {
        try {
          this.resultado = this._cifrar(this.texto, parseInt(this.deslocamento), 12, 255);
        } catch (erro) {
          this.resultado = erro;
        }
      } else {
        this.resultado = 'O deslocamento deve ser um número inteiro.';
      }
    }
  }

  decifrar() {
    if(this.texto.length > 0 && this.deslocamento.length > 0) {
      if (Util.intTryParse(this.deslocamento)) {
        try {
          this.resultado = this._decifrar(this.texto, parseInt(this.deslocamento), 12, 255);
        } catch (erro) {
          this.resultado = erro;
        }
      } else {
        this.resultado = 'O deslocamento deve ser um número inteiro.';
      }
    }
  }

  private _cifrar(text: string, deslocamento: number, min: number, max: number): string {
    let MAX_DESLOCAMENTO = ((max + 1) - min);
    if (text == '') {
      throw 'Digite algum(a) texto/palavra para ser cifrado(a).';
    }
    if (deslocamento < 0 || deslocamento > MAX_DESLOCAMENTO) {
      throw 'O deslocamento não pode ser menor que 0 e não pode ser maior que ' + MAX_DESLOCAMENTO + '.';
    }
    let invalidchars = Util.invalidCharsInString(text, min, max);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
    }

    let textCifrado = '';
    for (let i = 0; i < text.length; i++) {
      if ((text.charCodeAt(i) - deslocamento) < min) {
        textCifrado += String.fromCharCode((max + 1) - (min - (text.charCodeAt(i) - deslocamento)));
      } else {
        textCifrado += String.fromCharCode(text.charCodeAt(i) - deslocamento);
      }
    }
    return textCifrado;
  }

  private _decifrar(text: string, deslocamento: number, min: number, max: number): string {
    let MAX_DESLOCAMENTO = ((max + 1) - min);
    if (text == '') {
      throw 'Digite algum(a) texto/palavra para ser decifrado(a).';
    }
    if (deslocamento < 0 || deslocamento > MAX_DESLOCAMENTO) {
      throw 'O deslocamento não pode ser menor que 0 e não pode ser maior que ' + MAX_DESLOCAMENTO;
    }
    let invalidchars = Util.invalidCharsInString(text, min, max);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
    }

    let textDecifrado = '';

    for (let i = 0; i < text.length; i++) {
      if ((text.charCodeAt(i) + deslocamento) > max) {
        textDecifrado += String.fromCharCode((text.charCodeAt(i) + deslocamento) - MAX_DESLOCAMENTO);
      } else {
        textDecifrado += String.fromCharCode(text.charCodeAt(i) + deslocamento);
      }
    }
    return textDecifrado;
  }

}
