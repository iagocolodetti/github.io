import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDeBaseComponent } from './conversor-de-base.component';

describe('ConversorDeBaseComponent', () => {
  let component: ConversorDeBaseComponent;
  let fixture: ComponentFixture<ConversorDeBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorDeBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorDeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
