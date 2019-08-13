import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifraXorComponent } from './cifra-xor.component';

describe('CifraXorComponent', () => {
  let component: CifraXorComponent;
  let fixture: ComponentFixture<CifraXorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifraXorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifraXorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
