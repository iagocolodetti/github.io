import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cifra-rail-fence',
  templateUrl: './cifra-rail-fence.component.html',
  styleUrls: ['./cifra-rail-fence.component.css']
})
export class CifraRailFenceComponent {

  title = 'Cifra Rail Fence'

  texto = '';
  resultado = '';

  constructor(title: Title) {
    title.setTitle(this.title);
  }

  cifrar() {
    if(this.texto.length > 0) {
      try {
        this.resultado = this._cifrar(this.texto);
      } catch (erro) {
        this.resultado = erro;
      }
    }
  }

  decifrar() {
    if(this.texto.length > 0) {
      try {
        this.resultado = this._decifrar(this.texto);
      } catch (erro) {
        this.resultado = erro;
      }
    }
  }

  private _cifrar(text: string): string {
    if (text == '') {
      throw 'Digite algum(a) texto/palavra para ser cifrado(a).';
    }
    let linha1 = '';
    let linha2 = '';
    for (let i = 0; i < text.length; i++) {
      if (i == 0 || (i % 2) == 0) {
        linha1 += text.charAt(i);
      } else {
        linha2 += text.charAt(i);
      }
    }
    return (linha1 + linha2);
  }

  private _decifrar(text: string): string {
    if (text == '') {
      throw 'Digite algum(a) texto/palavra para ser decifrado(a).';
    }
    let textDecifrado = '';
    let linha1 = '';
    let linha2 = '';
    if ((text.length % 2) == 0) {
      linha1 = text.substring(0, (text.length / 2));
      linha2 = text.substring((text.length / 2));
    } else {
      linha1 = text.substring(0, ((text.length / 2) + 1));
      linha2 = text.substring(((text.length / 2) + 1));
    }
    let index = 0;
    for (let i = 0; i < text.length; i++) {
      if (i == 0 || (i % 2) == 0) {
        textDecifrado += linha1.charAt(index);
      } else {
        textDecifrado += linha2.charAt(index);
        index++;
      }
    }
    return textDecifrado;
  }

}
