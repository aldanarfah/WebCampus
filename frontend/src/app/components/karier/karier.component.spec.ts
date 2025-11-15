import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarierComponent } from './karier.component';

describe('KarierComponent', () => {
  let component: KarierComponent;
  let fixture: ComponentFixture<KarierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
