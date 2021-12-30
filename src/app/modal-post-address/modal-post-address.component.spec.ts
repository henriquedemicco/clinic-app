import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPostAddressComponent } from './modal-post-address.component';

describe('ModalPostAddressComponent', () => {
  let component: ModalPostAddressComponent;
  let fixture: ComponentFixture<ModalPostAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPostAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPostAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
