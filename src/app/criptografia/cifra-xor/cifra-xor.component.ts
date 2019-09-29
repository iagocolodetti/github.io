import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Metodos } from './Metodos';

const metodos = new Metodos();

@Component({
  selector: 'app-cifra-xor',
  templateUrl: './cifra-xor.component.html',
  styleUrls: ['./cifra-xor.component.css']
})
export class CifraXorComponent {

  title = 'Cifra XOR';

  texto = '';
  chave = '';
  resultado = '';

  constructor(title: Title) {
    title.setTitle(this.title);
  }

  cifrar() {
    if(this.texto.length > 0 && this.chave.length > 0) {
      try {
        this.resultado = metodos.cifrar(this.texto, this.chave);
      } catch (erro) {
        this.resultado = erro;
      }
    }
  }
}
