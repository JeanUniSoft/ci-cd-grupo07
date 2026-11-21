import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro } from './registro';

describe('Registro', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro],
    }).compileComponents();

    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('debe iniciar con el formulario inválido', () => {
    expect(component.formulario.valid).toBe(false);
  });

  it('debe rechazar un correo inválido', () => {
    const email = component.formulario.controls.email;

    email.setValue('correo-malo');
    expect(email.valid).toBe(false);
  });

  it('debe rechazar una contraseña de menos de 8 caracteres', () => {
    const password = component.formulario.controls.password;

    password.setValue('123');
    expect(password.hasError('minlength')).toBe(true);
  });

  it('debe ser válido con datos correctos', () => {
    component.formulario.setValue({
      nombre: 'Luis',
      email: 'luis@gmail.com',
      password: '12345678'
    });
    expect(component.formulario.valid).toBe(true);
  });

  it('debe marcar los campos como tocados al enviar vacío', () => {
    component.registrar();
    expect(component.formulario.controls.nombre.touched).toBe(true);
    expect(component.formulario.controls.email.touched).toBe(true);
    expect(component.formulario.controls.password.touched).toBe(true);
  });
});
