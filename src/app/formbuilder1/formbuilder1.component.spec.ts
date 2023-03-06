import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formbuilder1Component } from './formbuilder1.component';

describe('Formbuilder1Component', () => {
  let component: Formbuilder1Component;
  let fixture: ComponentFixture<Formbuilder1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formbuilder1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formbuilder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
