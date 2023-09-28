import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeriseListComponent } from './merise-list.component';

describe('MeriseListComponent', () => {
  let component: MeriseListComponent;
  let fixture: ComponentFixture<MeriseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeriseListComponent]
    });
    fixture = TestBed.createComponent(MeriseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
