import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifraRailFenceComponent } from './cifra-rail-fence.component';

describe('CifraRailFenceComponent', () => {
  let component: CifraRailFenceComponent;
  let fixture: ComponentFixture<CifraRailFenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifraRailFenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifraRailFenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
