import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifraMatematicaComponent } from './cifra-matematica.component';

describe('CifraMatematicaComponent', () => {
  let component: CifraMatematicaComponent;
  let fixture: ComponentFixture<CifraMatematicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifraMatematicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifraMatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
