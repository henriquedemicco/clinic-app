import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-delete-address',
  templateUrl: './modal-delete-address.component.html',
  styleUrls: ['./modal-delete-address.component.scss']
})
export class ModalDeleteAddressComponent implements OnInit {


  SERVER_URL_ADDRESS = "http://localhost:4200/api/enderecos/";

  constructor(private modalService: NgbModal,
    private httpClient: HttpClient) { }

  @Input() public pacientName: any = []
  @Input() public pacientId: any = []
  @Input() public addressId: any = []
  @Input() public streetAddress: any = []

  open(content: any) {
    this.modalService.open(content)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.httpClient.delete<any>(this.SERVER_URL_ADDRESS + this.addressId + "/").subscribe(
      (res) => {
        console.log(res);
        alert("Endereço excluído com sucesso.");
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }

}
