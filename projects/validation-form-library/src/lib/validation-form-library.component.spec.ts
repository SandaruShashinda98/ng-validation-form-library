import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFormLibraryComponent } from './validation-form-library.component';

describe('ValidationFormLibraryComponent', () => {
  let component: ValidationFormLibraryComponent;
  let fixture: ComponentFixture<ValidationFormLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationFormLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationFormLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
