import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CifraDeCesarComponent } from './cifra-de-cesar.component';
import { Metodos } from './Metodos';

const metodos = new Metodos();

const TEXTO = 'teste';
const DESLOCAMENTO = 15;

describe('CifraDeCesarComponent', () => {
  let component: CifraDeCesarComponent;
  let fixture: ComponentFixture<CifraDeCesarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CifraDeCesarComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifraDeCesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve cifrar e decifrar o texto: '${TEXTO}' usando o deslocamento: '${DESLOCAMENTO}'`, () => {
    let textoCifrado = metodos.cifrar(TEXTO, DESLOCAMENTO);
    expect(TEXTO).not.toEqual(textoCifrado);
    let textoDecifrado = metodos.decifrar(textoCifrado, DESLOCAMENTO);
    expect(TEXTO).toEqual(textoDecifrado);
  });
});
