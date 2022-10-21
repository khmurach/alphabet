import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcRandomComponent } from './abc.random.component';

describe('AbcRandomComponent', () => {
  let component: AbcRandomComponent;
  let fixture: ComponentFixture<AbcRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcRandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
