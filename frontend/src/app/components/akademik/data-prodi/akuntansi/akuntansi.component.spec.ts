import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkuntansiComponent } from './akuntansi.component';

describe('AkuntansiComponent', () => {
  let component: AkuntansiComponent;
  let fixture: ComponentFixture<AkuntansiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkuntansiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkuntansiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
