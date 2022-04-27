import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtabComponent } from './vtab.component';

describe('VtabComponent', () => {
  let component: VtabComponent;
  let fixture: ComponentFixture<VtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
