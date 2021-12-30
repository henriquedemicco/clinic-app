import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ModalPostPacientComponent } from './modal-post-pacient.component';

describe('ModalPostPacientComponent', () => {
  let component: ModalPostPacientComponent;
  let fixture: ComponentFixture<ModalPostPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPostPacientComponent ],
      imports: [ReactiveFormsModule, FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPostPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
