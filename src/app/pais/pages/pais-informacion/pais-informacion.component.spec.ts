import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisInformacionComponent } from './pais-informacion.component';

describe('PaisInformacionComponent', () => {
  let component: PaisInformacionComponent;
  let fixture: ComponentFixture<PaisInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
