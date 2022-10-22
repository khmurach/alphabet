import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllablesSettingsComponent } from './syllables.settings.component';

describe('SyllablesSettingsComponent', () => {
  let component: SyllablesSettingsComponent;
  let fixture: ComponentFixture<SyllablesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllablesSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllablesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
