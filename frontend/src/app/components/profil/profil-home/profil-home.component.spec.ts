import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilHomeComponent } from './profil-home.component';

describe('ProfilHomeComponent', () => {
  let component: ProfilHomeComponent;
  let fixture: ComponentFixture<ProfilHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
