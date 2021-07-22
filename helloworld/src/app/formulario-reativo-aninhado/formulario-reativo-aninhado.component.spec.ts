import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReativoAninhadoComponent } from './formulario-reativo-aninhado.component';

describe('FormularioReativoAninhadoComponent', () => {
  let component: FormularioReativoAninhadoComponent;
  let fixture: ComponentFixture<FormularioReativoAninhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReativoAninhadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReativoAninhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
