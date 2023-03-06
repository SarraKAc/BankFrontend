import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraitCompteComponent } from './extrait-compte.component';

describe('ExtraitCompteComponent', () => {
  let component: ExtraitCompteComponent;
  let fixture: ComponentFixture<ExtraitCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraitCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraitCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
