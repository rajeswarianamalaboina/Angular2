import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatctAddComponent } from './conatct-add.component';

describe('ConatctAddComponent', () => {
  let component: ConatctAddComponent;
  let fixture: ComponentFixture<ConatctAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConatctAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatctAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
