import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-post-address',
  templateUrl: './modal-post-address.component.html',
  styleUrls: ['./modal-post-address.component.scss']
})
export class ModalPostAddressComponent implements OnInit {

  SERVER_URL_ADDRESS = "/api/enderecos/";

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
      rua: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      paciente: ['']
    });
  }

  onSubmit() {

    const formDataAddress = new FormData();
    
    formDataAddress.append('rua', this.uploadForm.get('rua')?.value);
    formDataAddress.append('numero', this.uploadForm.get('numero')?.value);
    formDataAddress.append('bairro', this.uploadForm.get('bairro')?.value);
    formDataAddress.append('cidade', this.uploadForm.get('cidade')?.value);
    formDataAddress.append('estado', this.uploadForm.get('estado')?.value);
    formDataAddress.append('paciente', this.pacientId);

    this.httpClient.post<any>(this.SERVER_URL_ADDRESS, formDataAddress).subscribe(
      (res) => {
        console.log(res)
        alert(`Novo endereço cadastrado com sucesso para ${this.pacientName}`);
        this.uploadForm.reset();
        window.location.reload();
      } ,
      (err) => console.log(err)
    );
  }

}
