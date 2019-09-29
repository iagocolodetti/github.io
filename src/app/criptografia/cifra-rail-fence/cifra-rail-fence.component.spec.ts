import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CifraRailFenceComponent } from './cifra-rail-fence.component';
import { Metodos } from './Metodos';

const metodos = new Metodos();

const TEXTO = 'teste';

describe('CifraRailFenceComponent', () => {
  let component: CifraRailFenceComponent;
  let fixture: ComponentFixture<CifraRailFenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifraRailFenceComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifraRailFenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve cifrar e decifrar o texto: '${TEXTO}'`, () => {
    let textoCifrado = metodos.cifrar(TEXTO);
    expect(TEXTO).not.toEqual(textoCifrado);
    let textoDecifrado = metodos.decifrar(textoCifrado);
    expect(TEXTO).toEqual(textoDecifrado);
  });
});
