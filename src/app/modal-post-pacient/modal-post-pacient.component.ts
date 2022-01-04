import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-post-pacient',
  templateUrl: './modal-post-pacient.component.html',
  styleUrls: ['./modal-post-pacient.component.scss']
})

export class ModalPostPacientComponent implements OnInit {

  SERVER_URL_PACIENT = "/api/pacientes/";

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder, 
    private httpClient: HttpClient,
    ) { }

  open(content: any) {
    this.modalService.open(content)
  }

  public uploadForm: FormGroup;

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      nome: [''],
      email: ['', Validators.email],
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

    this.httpClient.post<any>(this.SERVER_URL_PACIENT, formDataPacient).subscribe(
      (res) => {
        console.log(res)
        alert("Paciente cadastrado com sucesso.")
        this.uploadForm.reset();
        window.location.reload();
      } ,
      (err) => console.log(err)
    );
  }

}
