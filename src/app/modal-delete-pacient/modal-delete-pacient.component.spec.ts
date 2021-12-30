import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletePacientComponent } from './modal-delete-pacient.component';

describe('ModalDeletePacientComponent', () => {
  let component: ModalDeletePacientComponent;
  let fixture: ComponentFixture<ModalDeletePacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeletePacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletePacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
