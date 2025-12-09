import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrmawaUkmComponent } from './ormawa-ukm.component';

describe('OrmawaUkmComponent', () => {
  let component: OrmawaUkmComponent;
  let fixture: ComponentFixture<OrmawaUkmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrmawaUkmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrmawaUkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
