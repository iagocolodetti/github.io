import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';

describe('JogoDaVelhaComponent', () => {
  let component: JogoDaVelhaComponent;
  let fixture: ComponentFixture<JogoDaVelhaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoDaVelhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });
});
