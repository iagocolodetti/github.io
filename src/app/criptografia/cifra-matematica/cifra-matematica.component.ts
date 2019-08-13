import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Util } from '../Util';

@Component({
  selector: 'app-cifra-matematica',
  templateUrl: './cifra-matematica.component.html',
  styleUrls: ['./cifra-matematica.component.css']
})
export class CifraMatematicaComponent {

  texto = '';
  chave = '';
  resultado = '';

  constructor(title: Title) {
    title.setTitle('iagocolodetti.github.io/Criptografia/CifraMatematica');
  }

  cifrar() {
    if(this.texto.length > 0 && this.chave.length > 0) {
      try {
        this.resultado = this._cifrar(this.texto, this.chave);
      } catch (erro) {
        this.resultado = erro;
      }
    }
  }

  decifrar() {
    if(this.texto.length > 0 && this.chave.length > 0) {
      try {
          this.resultado = this._decifrar(this.texto, this.chave);
      } catch (erro) {
          this.resultado = erro;
      }
    }
  }

  private _cifrar(text: string, key: string) {
    if (text == '') {
      throw 'Digite algum(a) texto/palavra para ser cifrado(a).';
    }
    if (key == '') {
      throw 'Digite uma chave.';
    }
    if (key.length > 8) {
      throw 'A chave deve ter no máximo 8 dígitos.';
    }
    let invalidchars = Util.invalidCharsInString(text, 32, 255);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
    }
    invalidchars = Util.invalidCharsInString(key, 33, 255);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) na chave.\nCaracteres inválidos: ' + invalidchars;
    }
    let valorDaChave = 0;
    for (let i = 0; i < key.length; i++) {
      valorDaChave = valorDaChave + (key.charCodeAt(i) * (key.length - i));
    }
    let MAX_BLOCK_LENGTH = (255 + valorDaChave).toString(16).length;
    let textCifrado = String(MAX_BLOCK_LENGTH);
    for (let i = 0; i < text.length; i++) {
      textCifrado = textCifrado + Util.padLeft((text.charCodeAt(i) + valorDaChave).toString(16), MAX_BLOCK_LENGTH, '0');
    }
    return textCifrado.toUpperCase();
  }

  private _decifrar(text: string, key: string) {
    if (text == '') {
      throw 'Digite algum(a) texto/palavra para ser cifrado(a).';
    }
    if (key == '') {
      throw 'Digite uma chave.';
    }
    if (key.length > 8) {
      throw 'A chave deve ter no máximo 8 dígitos.';
    }
    let invalidchars = Util.invalidCharsInString(text, 32, 255);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
    }
    invalidchars = Util.invalidCharsInString(key, 33, 255);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) na chave.\nCaracteres inválidos: ' + invalidchars;
    }
    if (!Util.intTryParse(text.charAt(0))) {
      throw 'Não foi possível decifrar, texto cifrado adulterado.';
    }
    let MAX_BLOCK_LENGTH = parseInt(text.charAt(0), 16);
    if ((text.length - 1) % MAX_BLOCK_LENGTH != 0) {
      throw 'Não foi possível decifrar, texto cifrado adulterado ou a chave está incorreta.';
    }
    let valorDaChave = 0;
    for (let i = 0; i < key.length; i++) {
      valorDaChave = valorDaChave + (key.charCodeAt(i) * (key.length - i));
    }
    let textDecifrado = '';
    for (let i = 1; i < text.length; i = i + MAX_BLOCK_LENGTH) {
      textDecifrado = textDecifrado +  String.fromCharCode(parseInt(text.substring(i, i + MAX_BLOCK_LENGTH), 16) - valorDaChave);
    }
    return textDecifrado;
  }
  
}
