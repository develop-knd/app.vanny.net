import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VblocksComponent } from './vblocks.component';

describe('VblocksComponent', () => {
  let component: VblocksComponent;
  let fixture: ComponentFixture<VblocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VblocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
