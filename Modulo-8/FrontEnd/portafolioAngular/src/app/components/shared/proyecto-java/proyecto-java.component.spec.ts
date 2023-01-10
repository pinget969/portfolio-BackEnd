import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoJavaComponent } from './proyecto-java.component';

describe('ProyectoJavaComponent', () => {
  let component: ProyectoJavaComponent;
  let fixture: ComponentFixture<ProyectoJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
