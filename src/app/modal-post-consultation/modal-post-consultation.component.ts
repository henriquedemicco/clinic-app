import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-post-consultation',
  templateUrl: './modal-post-consultation.component.html',
  styleUrls: ['./modal-post-consultation.component.scss']
})
export class ModalPostConsultationComponent implements OnInit {

  SERVER_URL_CONSULTATION = "/api/consultas/";

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder, 
    private httpClient: HttpClient,
    ) { }

  open(content: any) {
    this.modalService.open(content)
  }

  public uploadForm: FormGroup;

  @Input() public pacientId: any = []
  @Input() public pacientName: any = []

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      data: [''],
      info: [''],
      paciente: ['']
    });
  }

  onSubmit() {

    const formDataConsultation = new FormData();
    
    formDataConsultation.append('data', this.uploadForm.get('data')?.value);
    formDataConsultation.append('info', this.uploadForm.get('info')?.value);
    formDataConsultation.append('paciente', this.pacientId);

    this.httpClient.post<any>(this.SERVER_URL_CONSULTATION, formDataConsultation).subscribe(
      (res) => {
        console.log(res)
        alert(`Consulta registrada com sucesso para ${this.pacientName}`);
        this.uploadForm.reset();
        window.location.reload();
      } ,
      (err) => console.log(err)
    );
  }

}
