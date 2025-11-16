import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdiLayoutComponent } from './prodi-layout.component';

describe('ProdiLayoutComponent', () => {
  let component: ProdiLayoutComponent;
  let fixture: ComponentFixture<ProdiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdiLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
