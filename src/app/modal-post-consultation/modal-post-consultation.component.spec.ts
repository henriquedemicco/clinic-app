import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPostConsultationComponent } from './modal-post-consultation.component';

describe('ModalPostConsultationComponent', () => {
  let component: ModalPostConsultationComponent;
  let fixture: ComponentFixture<ModalPostConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPostConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPostConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
