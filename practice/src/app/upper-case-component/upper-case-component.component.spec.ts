import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCaseComponentComponent } from './upper-case-component.component';

describe('UpperCaseComponentComponent', () => {
  let component: UpperCaseComponentComponent;
  let fixture: ComponentFixture<UpperCaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperCaseComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperCaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
