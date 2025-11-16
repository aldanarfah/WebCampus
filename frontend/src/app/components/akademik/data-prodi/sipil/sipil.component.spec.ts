import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipilComponent } from './sipil.component';

describe('SipilComponent', () => {
  let component: SipilComponent;
  let fixture: ComponentFixture<SipilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SipilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
