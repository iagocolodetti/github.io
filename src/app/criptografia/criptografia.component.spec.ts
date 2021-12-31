import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CriptografiaComponent } from './criptografia.component';

describe('CriptografiaComponent', () => {
  let component: CriptografiaComponent;
  let fixture: ComponentFixture<CriptografiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CriptografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });
});
