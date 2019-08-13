import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Botao } from './Botao';
import { Vencedor } from './Vencedor';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent {

  iniciado = false;
  jogadas = 0;
  vez = '--';
  bts = [];
  btsLength = 9;
  resultadoX = 0;
  resultadoV = 0;
  resultadoO = 0;
  vencedor = null;

  possibilidades = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  constructor(title: Title) {
    title.setTitle('iagocolodetti.github.io/JogoDaVelha');
  }

  iniciar() {
    if (!this.iniciado) {
        this.iniciado = true;
        this.jogadas = 0;
        this.vez = (Math.floor(Math.random() * 2) == 0 ? 'X' : 'O');
        this.resetarBotoes();
        this.vencedor = new Vencedor();
    } else {
        alert('O jogo já está iniciado, termine esse primeiro.');
    }
  }

  jogar(bt: Botao) {
    if (this.iniciado) {
        if (this.marcarSelecionado(bt)) {
            this.jogadas++;
            this.checarResultado();
        }
    } else {
        alert('É necessário iniciar o jogo para jogá-lo.');
    }
  }
  
  marcarSelecionado(bt: Botao) {
    var marcado = false;
    if (bt.texto == '-') {
      bt.texto = this.vez;
      marcado = true;
      this.bts[this.bts.indexOf(bt)] = bt;
    }
    return marcado;
  }

  checarResultado() {
    for (let i = 0; i < this.possibilidades.length; i++) {
        if (this.bts[this.possibilidades[i][0]].texto == 'X' && this.bts[this.possibilidades[i][1]].texto == 'X' && this.bts[this.possibilidades[i][2]].texto == 'X') {
            this.vez = '--';
            this.resultadoX++;
            this.destacarVencedor(i, 'green');
            this.vencedor.texto = 'Resultado: Jogador "X" venceu!';
            this.vencedor.cor = 'green';
            this.iniciado = false;
            return;
        } else if (this.bts[this.possibilidades[i][0]].texto == 'O' && this.bts[this.possibilidades[i][1]].texto == "O" && this.bts[this.possibilidades[i][2]].texto == 'O') {
            this.vez = "--";
            this.resultadoO++;
            this.destacarVencedor(i, 'red');
            this.vencedor.texto = 'Resultado: Jogador "O" venceu!';
            this.vencedor.cor = 'red';
            this.iniciado = false;
            return;
        }
    }
    if (this.jogadas < 9) {
        if (this.vez == 'X') {
            this.vez = 'O';
        } else {
            this.vez = 'X';
        }
        return;
    }
    this.vez = '--';
    this.resultadoV++;
    this.vencedor.texto = 'Resultado: VELHA!';
    this.vencedor.cor = 'black';
    this.iniciado = false;
  }

  destacarVencedor(i: number, cor: string) {
    this.bts[this.possibilidades[i][0]].cor = cor;
    this.bts[this.possibilidades[i][1]].cor = cor;
    this.bts[this.possibilidades[i][2]].cor = cor;
  }

  resetarBotoes() {
    for (let i = 0; i < this.btsLength; i++) {
      let bt = new Botao();
      bt.texto = '-';
      bt.cor = 'black';
      this.bts[i] = bt;
    }
  }
}
