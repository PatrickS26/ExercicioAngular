import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeProfessoresComponent } from './lista-de-professores.component';

describe('ListaDeProfessoresComponent', () => {
  let component: ListaDeProfessoresComponent;
  let fixture: ComponentFixture<ListaDeProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeProfessoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
