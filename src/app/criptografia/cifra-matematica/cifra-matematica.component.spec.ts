import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CifraMatematicaComponent } from './cifra-matematica.component';
import { Metodos } from './Metodos';

const metodos = new Metodos();

const TEXTO = 'teste';
const CHAVE = 'K24A52AB';

describe('CifraMatematicaComponent', () => {
  let component: CifraMatematicaComponent;
  let fixture: ComponentFixture<CifraMatematicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CifraMatematicaComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifraMatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve cifrar e decifrar o texto: '${TEXTO}' usando a chave: '${CHAVE}'`, () => {
    let textoCifrado = metodos.cifrar(TEXTO, CHAVE);
    expect(TEXTO).not.toEqual(textoCifrado);
    let textoDecifrado = metodos.decifrar(textoCifrado, CHAVE);
    expect(TEXTO).toEqual(textoDecifrado);
  });
});
