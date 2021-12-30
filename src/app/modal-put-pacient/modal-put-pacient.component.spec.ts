import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPutPacientComponent } from './modal-put-pacient.component';

describe('ModalPutPacientComponent', () => {
  let component: ModalPutPacientComponent;
  let fixture: ComponentFixture<ModalPutPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPutPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPutPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
