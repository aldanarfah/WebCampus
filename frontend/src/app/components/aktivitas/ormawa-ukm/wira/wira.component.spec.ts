import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiraComponent } from './wira.component';

describe('WiraComponent', () => {
  let component: WiraComponent;
  let fixture: ComponentFixture<WiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
