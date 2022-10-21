import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllablesRandomComponent } from './syllables.random.component';

describe('SyllablesRandomComponent', () => {
  let component: SyllablesRandomComponent;
  let fixture: ComponentFixture<SyllablesRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllablesRandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllablesRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
