import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseCombinatoriaComponent } from './analise-combinatoria.component';

describe('AnaliseCombinatoriaComponent', () => {
  let component: AnaliseCombinatoriaComponent;
  let fixture: ComponentFixture<AnaliseCombinatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseCombinatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseCombinatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
