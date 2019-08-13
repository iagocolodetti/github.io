import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-criptografia',
  templateUrl: './criptografia.component.html',
  styleUrls: ['./criptografia.component.css']
})
export class CriptografiaComponent {

  texto = '';
  chave = '';
  resultado = '';

  constructor(title: Title) {
    title.setTitle('iagocolodetti.github.io/Criptografia');
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
    let invalidchars = this.invalidCharsInString(text, 32, 255);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
    }
    invalidchars = this.invalidCharsInString(key, 33, 255);
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
      textCifrado = textCifrado + this.padLeft((text.charCodeAt(i) + valorDaChave).toString(16), MAX_BLOCK_LENGTH, '0');
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
    let invalidchars = this.invalidCharsInString(text, 32, 255);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) no(a) texto/palavra.\nCaracteres inválidos: ' + invalidchars;
    }
    invalidchars = this.invalidCharsInString(key, 33, 255);
    if (invalidchars != '') {
      throw 'Existe(m) caractere(s) inválido(s) na chave.\nCaracteres inválidos: ' + invalidchars;
    }
    if (!this.intTryParse(text)) {
      throw 'Não foi possível decifrar, texto cifrado adulterado.';
    }
    let MAX_BLOCK_LENGTH = parseInt(text[0], 16);
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

  private padLeft(text: string, length: number, c: string): string {
    let textpad = '';
    for (let i = 0; i < length; i++) {
      textpad = textpad + c;
    }
    return textpad.substring(text.length) + text;   
  }

  private isInvalidChar(c: string, min: number, max: number): boolean {
    return (c.charCodeAt(0) < min || c.charCodeAt(0) > max);
  }

  private invalidCharsInString(text: string, min: number, max: number): string {
    let invalidchars = '';
    for (let i = 0; i < text.length; i++) {
      if (this.isInvalidChar(text[i], min, max)) {
        invalidchars = invalidchars + text[i] + ' (' + text.charCodeAt(i) + ')   ';
      }
    }
    return invalidchars;
  }

  private intTryParse(s: string): boolean {
    try {
        let n = parseInt(s);
        parseInt(n.toString(16));
        return true;
    } catch (NumberFormatException) {
        return false;
    }
  }
}
