import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConversorDeBaseComponent } from './conversor-de-base.component';
import { Metodos } from './Metodos';

const metodos = new Metodos();

const ALGARISMO_1 = '255';
const BASE_1 = 10;
const ALGARISMO_2 = 'FF';
const BASE_2 = 16;

describe('ConversorDeBaseComponent', () => {
  let component: ConversorDeBaseComponent;
  let fixture: ComponentFixture<ConversorDeBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorDeBaseComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorDeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve converter o algarismo '${ALGARISMO_1}' (${BASE_1}) para '${ALGARISMO_2}' (${BASE_2})`, () => {
    let algarismoConvertido = metodos.converterAlgarismo(ALGARISMO_1, BASE_1, BASE_2);
    expect(algarismoConvertido).toEqual(ALGARISMO_2);
  });

  it(`Deve converter o algarismo '${ALGARISMO_2}' (${BASE_2}) para '${ALGARISMO_1}' (${BASE_1})`, () => {
    let algarismoConvertido = metodos.converterAlgarismo(ALGARISMO_2, BASE_2, BASE_1);
    expect(algarismoConvertido).toEqual(ALGARISMO_1);
  });
});
