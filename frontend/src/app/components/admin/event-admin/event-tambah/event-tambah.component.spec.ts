import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTambahComponent } from './event-tambah.component';

describe('BeritaEditComponent', () => {
  let component: EventTambahComponent;
  let fixture: ComponentFixture<EventTambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTambahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
