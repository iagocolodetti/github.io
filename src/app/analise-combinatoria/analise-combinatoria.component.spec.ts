import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AnaliseCombinatoriaComponent } from './analise-combinatoria.component';
import { Metodos } from './Metodos';

const metodos = new Metodos();

const N = '5';
const PP = '3,2';
const P = '3';

// Resultados esperados usando N = 5, P = 3.
const R_P = 120;
const R_PR = 10;
const R_A = 60;
const R_AR = 125;
const R_C = 10;
const R_CR = 35;

describe('AnaliseCombinatoriaComponent', () => {
  let component: AnaliseCombinatoriaComponent;
  let fixture: ComponentFixture<AnaliseCombinatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseCombinatoriaComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseCombinatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve retornar o resultado correto da Permutação Simples de N: ${N}`, () => {
    let resultado = metodos.analiseCombinatoria(0, N, '');
    expect(`P(n) > P(${N}) = ${R_P}`).toEqual(resultado);
  });

  it(`Deve retornar o resultado correto da Permutação com Repetição de N: ${N} e P: ${PP}`, () => {
    let resultado = metodos.analiseCombinatoria(1, N, PP);
    expect(`P(n,(p,p,...)) > P(${N},(${PP})) = ${R_PR}`).toEqual(resultado);
  });

  it(`Deve retornar o resultado correto do Arranjo Simples de N: ${N} e P: ${P}`, () => {
    let resultado = metodos.analiseCombinatoria(2, N, P);
    expect(`A(n,p) > A(${N},${P}) = ${R_A}`).toEqual(resultado);
  });

  it(`Deve retornar o resultado correto do Arranjo com Repetição de N: ${N} e P: ${P}`, () => {
    let resultado = metodos.analiseCombinatoria(3, N, P);
    expect(`AR(n,p) > AR(${N},${P}) = ${R_AR}`).toEqual(resultado);
  });

  it(`Deve retornar o resultado correto da Combinação Simples de N: ${N} e P: ${P}`, () => {
    let resultado = metodos.analiseCombinatoria(4, N, P);
    expect(`C(n,p) > C(${N},${P}) = ${R_C}`).toEqual(resultado);
  });

  it(`Deve retornar o resultado correto da Combinação com Repetição de N: ${N} e P: ${P}`, () => {
    let resultado = metodos.analiseCombinatoria(5, N, P);
    expect(`CR(n,p) > CR(${N},${P}) = ${R_CR}`).toEqual(resultado);
  });
});
