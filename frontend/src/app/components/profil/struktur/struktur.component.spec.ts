import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrukturComponent } from './struktur.component';

describe('StrukturComponent', () => {
  let component: StrukturComponent;
  let fixture: ComponentFixture<StrukturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrukturComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrukturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
