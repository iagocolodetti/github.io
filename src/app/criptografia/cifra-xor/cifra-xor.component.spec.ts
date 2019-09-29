import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CifraXorComponent } from './cifra-xor.component';
import { Metodos } from './Metodos';

const metodos = new Metodos();

const TEXTO = 'teste';
const CHAVE = '10100101';

describe('CifraXorComponent', () => {
  let component: CifraXorComponent;
  let fixture: ComponentFixture<CifraXorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifraXorComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifraXorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve cifrar e decifrar o texto: '${TEXTO}' usando a chave: '${CHAVE}'`, () => {
    let textoCifrado = metodos.cifrar(TEXTO, CHAVE);
    expect(TEXTO).not.toEqual(textoCifrado);
    let textoDecifrado = metodos.cifrar(textoCifrado, CHAVE);
    expect(TEXTO).toEqual(textoDecifrado);
  });
});
