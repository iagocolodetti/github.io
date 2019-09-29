import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Metodos } from './Metodos';

const metodos = new Metodos();

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
        this.resultado = metodos.cifrar(this.texto);
      } catch (erro) {
        this.resultado = erro;
      }
    }
  }

  decifrar() {
    if(this.texto.length > 0) {
      try {
        this.resultado = metodos.decifrar(this.texto);
      } catch (erro) {
        this.resultado = erro;
      }
    }
  }
}
