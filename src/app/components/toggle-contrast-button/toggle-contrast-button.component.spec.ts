import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleContrastButtonComponent } from './toggle-contrast-button.component';

describe('ToggleContrastButtonComponent', () => {
  let component: ToggleContrastButtonComponent;
  let fixture: ComponentFixture<ToggleContrastButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleContrastButtonComponent]
    });
    fixture = TestBed.createComponent(ToggleContrastButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
