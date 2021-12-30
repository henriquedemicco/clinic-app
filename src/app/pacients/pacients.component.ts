import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pacients',
  templateUrl: './pacients.component.html',
  styleUrls: ['./pacients.component.scss']
})
export class PacientsComponent implements OnInit {

  public pacients: any = [];
  public consultations: any = [];
  public addresses: any = [];

  panelOpenState = false;

  public filteredPacients: any = [];

  private _listFilter: string = '';

  @Input() public get listFilter() {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPacients = this.listFilter ? this.filterPacient(this.listFilter) : this.pacients;
  }

  filterPacient(FilterFor: string): any {
    FilterFor = FilterFor.toLowerCase();
    return this.pacients.filter(
      (pacient: any) => pacient.nome.toLowerCase().indexOf(FilterFor) !== -1 ||
      pacient.cpf.indexOf(FilterFor) !== -1
      
    )

  }

  totalLength:any;
  page:number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPacients();
    this.getConsultations();
    this.getAddresses();
  }

  public getPacients(): void {
    this.http.get('http://clinic-app-tau.vercel.app/api/pacientes/').subscribe(
      response => {
        this.pacients = response;
        this.filteredPacients = this.pacients;
      },
      error => console.log(error)
    );
    this.totalLength = this.pacients.length;
  }

  public getConsultations(): void {
    this.http.get('http://clinic-app-tau.vercel.app/api/consultas/').subscribe(
      response => {
        this.consultations = response;
      },
      error => console.log(error)
    );
  }

  public getAddresses(): void {
    this.http.get('http://clinic-app-tau.vercel.app/api/enderecos/').subscribe(
      response => {
        this.addresses = response;
      },
      error => console.log(error)
    );
  }

  

}
