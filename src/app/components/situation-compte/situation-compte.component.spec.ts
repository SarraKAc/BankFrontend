import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationCompteComponent } from './situation-compte.component';

describe('SituationCompteComponent', () => {
  let component: SituationCompteComponent;
  let fixture: ComponentFixture<SituationCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituationCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
