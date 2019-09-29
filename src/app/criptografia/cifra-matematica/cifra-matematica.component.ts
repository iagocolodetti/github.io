import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Metodos } from './Metodos';

const metodos = new Metodos();

@Component({
  selector: 'app-cifra-matematica',
  templateUrl: './cifra-matematica.component.html',
  styleUrls: ['./cifra-matematica.component.css']
})
export class CifraMatematicaComponent {

  title = 'Cifra Matemática';

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

  decifrar() {
    if(this.texto.length > 0 && this.chave.length > 0) {
      try {
        this.resultado = metodos.decifrar(this.texto, this.chave);
      } catch (erro) {
        this.resultado = erro;
      }
    }
  }
}
