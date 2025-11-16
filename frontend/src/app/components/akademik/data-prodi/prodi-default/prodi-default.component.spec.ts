import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdiDefaultComponent } from './prodi-default.component';

describe('ProdiDefaultComponent', () => {
  let component: ProdiDefaultComponent;
  let fixture: ComponentFixture<ProdiDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdiDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdiDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
