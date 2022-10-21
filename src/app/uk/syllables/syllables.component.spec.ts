import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkSyllablesComponent } from './syllables.component';

describe('SyllablesComponent', () => {
  let component: UkSyllablesComponent;
  let fixture: ComponentFixture<UkSyllablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkSyllablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkSyllablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
