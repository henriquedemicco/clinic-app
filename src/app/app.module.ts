import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './logo/logo.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { PacientsComponent } from './pacients/pacients.component';
import { ModalPostPacientComponent } from './modal-post-pacient/modal-post-pacient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ModalPostAddressComponent } from './modal-post-address/modal-post-address.component';
import { ModalPutPacientComponent } from './modal-put-pacient/modal-put-pacient.component';
import { ModalDeletePacientComponent } from './modal-delete-pacient/modal-delete-pacient.component';
import { ModalDeleteAddressComponent } from './modal-delete-address/modal-delete-address.component';
import { ModalPostConsultationComponent } from './modal-post-consultation/modal-post-consultation.component'

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchFieldComponent,
    PacientsComponent,
    ModalPostPacientComponent,
    ModalPostAddressComponent,
    ModalPutPacientComponent,
    ModalDeletePacientComponent,
    ModalDeleteAddressComponent,
    ModalPostConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    NgbModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
