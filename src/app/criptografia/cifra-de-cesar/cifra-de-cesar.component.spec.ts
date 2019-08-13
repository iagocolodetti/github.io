import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifraDeCesarComponent } from './cifra-de-cesar.component';

describe('CifraDeCesarComponent', () => {
  let component: CifraDeCesarComponent;
  let fixture: ComponentFixture<CifraDeCesarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifraDeCesarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifraDeCesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
