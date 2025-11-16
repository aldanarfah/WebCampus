import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroComponent } from './tro.component';

describe('TroComponent', () => {
  let component: TroComponent;
  let fixture: ComponentFixture<TroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
