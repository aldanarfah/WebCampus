import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDefaultComponent } from './profil-default.component';

describe('ProfilDefaultComponent', () => {
  let component: ProfilDefaultComponent;
  let fixture: ComponentFixture<ProfilDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
