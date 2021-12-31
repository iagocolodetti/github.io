import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Metodos } from './Metodos';

@Component({
  selector: 'app-analise-combinatoria',
  templateUrl: './analise-combinatoria.component.html',
  styleUrls: ['./analise-combinatoria.component.css']
})
export class AnaliseCombinatoriaComponent {

  title = 'Análise Combinatória';

  info = 'n = número total de elementos.';
  tipoSelecionado = 0;
  p = '';
  n = '';
  placeholderP = 'Desativado';
  resultado = '';

  tipos = [
    {
      tipo: 'Permutação Simples',
      formula: 'assets/analise-combinatoria/permutacaosimples.png',
      info: 'Permutação simples é definida como sendo o número de maneiras de arrumar \'n\''
      + ' elementos em \'n\' posições em que cada maneira se diferencia pela ordem em que os elementos aparecem.'
    },
    {
      tipo: 'Permutação com Repetição',
      formula: 'assets/analise-combinatoria/permutacaocomrepeticao.png',
      info: 'Permutação com repetição é definida como sendo o número de maneiras de arrumar \'n\''
      + ' elementos em \'n\' posições com repetição de elementos em que cada maneira se diferencia pela ordem em que os elementos aparecem.'
      + ' Onde \'n\' é o número total de elementos e \'p\', \'p\',... são os números de repetições de elementos.'
    },
    {
      tipo: 'Arranjo Simples',
      formula: 'assets/analise-combinatoria/arranjosimples.png',
      info: 'Arranjo simples é usado quando a ordem dos elementos importa e cada elemento pode ser contado apenas uma vez.'
      + ' Onde \'n\' é o número total de elementos e \'p\' é a quantidade total de elementos escolhidos.'
    },
    {
      tipo: 'Arranjo com Repetição',
      formula: 'assets/analise-combinatoria/arranjocomrepeticao.png',
      info: 'Arranjo com repetição é usado quando a ordem dos elementos importa e cada elemento pode ser contado mais de uma vez.'
      + ' Onde \'n\' é o número total de elementos e \'p\' é a quantidade total de elementos escolhidos.'
    },
    {
      tipo: 'Combinação Simples',
      formula: 'assets/analise-combinatoria/combinacaosimples.png',
      info: 'Combinação simples é usado quando a ordem dos elementos não importa e cada elemento pode ser contado apenas uma vez.'
      + ' Onde \'n\' é o número total de elementos e \'p\' é a quantidade total de elementos escolhidos.'
    },
    {
      tipo: 'Combinação com Repetição',
      formula: 'assets/analise-combinatoria/combinacaocomrepeticao.png',
      info: 'Combinação com repetição é usado quando a ordem dos elementos não importa e cada elemento pode ser contado mais de uma vez.'
      + ' Onde \'n\' é o número total de elementos e \'p\' é a quantidade total de elementos escolhidos.'
    }
  ];

  constructor(title: Title) {
    title.setTitle(this.title);
  }

  selecionarTipo(tipo: number) {
    this.tipoSelecionado = tipo;
    if (tipo == 0) {
      this.info = 'n = número total de elementos.';
      this.placeholderP = 'Desativado';
    } else if (tipo == 1) {
      this.info = 'p,p,... = número de repetições; n = número total de elementos.';
      this.placeholderP = 'Digite o valor de P,P,...';
    } else {
      this.info = 'p = número de elementos escolhidos; n = número total de elementos.';
      this.placeholderP = 'Digite o valor de P';
    }
  }

  calcular() {
    try {
      this.resultado = new Metodos().analiseCombinatoria(this.tipoSelecionado, this.n, this.p);
    } catch (erro: any) {
      this.resultado = erro;
    }
  }

  desativarCalcular() {
    if (this.tipoSelecionado == 0) {
      return this.n.length == 0;
    } else {
      return (this.p.length == 0 || this.n.length == 0);
    }
  }

}
