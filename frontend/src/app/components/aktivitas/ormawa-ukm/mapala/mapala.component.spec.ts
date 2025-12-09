import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapalaComponent } from './mapala.component';

describe('MapalaComponent', () => {
  let component: MapalaComponent;
  let fixture: ComponentFixture<MapalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
