import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveIdComponent } from './releve-id.component';

describe('ReleveIdComponent', () => {
  let component: ReleveIdComponent;
  let fixture: ComponentFixture<ReleveIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleveIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleveIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
