import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-modal-put-pacient',
  templateUrl: './modal-put-pacient.component.html',
  styleUrls: ['./modal-put-pacient.component.scss']
})
export class ModalPutPacientComponent implements OnInit {

  SERVER_URL_PACIENT = "http://localhost:4200/api/pacientes/";

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder, 
    private httpClient: HttpClient,
    ) { }

  open(content: any) {
    this.modalService.open(content)
  }

  public uploadForm: FormGroup;

  @Input() public pacientName: any = []
  @Input() public pacientEmail: any = []
  @Input() public pacientGender: any = []
  @Input() public pacientCPF: any = []
  @Input() public pacientPhone: any = []
  @Input() public pacientBirthday: any = []
  @Input() public pacientId: any = []

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      sexo: [''],
      cpf: [''],
      celular: [''],
      data_nascimento: ['']
    });
  }

  onSubmit() {
    const formDataPacient = new FormData();
    
    formDataPacient.append('nome', this.uploadForm.get('nome')?.value);
    formDataPacient.append('email', this.uploadForm.get('email')?.value);
    formDataPacient.append('sexo', this.uploadForm.get('sexo')?.value);
    formDataPacient.append('cpf', this.uploadForm.get('cpf')?.value);
    formDataPacient.append('celular', this.uploadForm.get('celular')?.value);
    formDataPacient.append('data_nascimento', this.uploadForm.get('data_nascimento')?.value);


    this.httpClient.put<any>(this.SERVER_URL_PACIENT + this.pacientId + "/", formDataPacient).subscribe(
      (res) => {
        console.log(res);
        alert("Dados atualizados com sucesso.");
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }

}