import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClAddEditComponent } from './cl-add-edit.component';

describe('ClAddEditComponent', () => {
  let component: ClAddEditComponent;
  let fixture: ComponentFixture<ClAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
