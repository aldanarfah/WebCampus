import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProdiComponent } from './data-prodi.component';

describe('DataProdiComponent', () => {
  let component: DataProdiComponent;
  let fixture: ComponentFixture<DataProdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataProdiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
