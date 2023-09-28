import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlListComponent } from './uml-list.component';

describe('UmlListComponent', () => {
  let component: UmlListComponent;
  let fixture: ComponentFixture<UmlListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmlListComponent]
    });
    fixture = TestBed.createComponent(UmlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
