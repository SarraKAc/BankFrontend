import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtCompteComponent } from './ext-compte.component';

describe('ExtCompteComponent', () => {
  let component: ExtCompteComponent;
  let fixture: ComponentFixture<ExtCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
