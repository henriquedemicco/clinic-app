import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-delete-pacient',
  templateUrl: './modal-delete-pacient.component.html',
  styleUrls: ['./modal-delete-pacient.component.scss']
})
export class ModalDeletePacientComponent implements OnInit {

  SERVER_URL_PACIENT = "http://localhost:4200/api/pacientes/";

  constructor(private modalService: NgbModal,
    private httpClient: HttpClient) { }

  @Input() public pacientName: any = []
  @Input() public pacientId: any = []

  open(content: any) {
    this.modalService.open(content)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.httpClient.delete<any>(this.SERVER_URL_PACIENT + this.pacientId + "/").subscribe(
      (res) => {
        console.log(res);
        alert("Paciente excluído com sucesso.");
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }

}
