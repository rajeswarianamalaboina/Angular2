import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactService } from '../servicesImpl/contact.service';
import { ConatctAddComponent } from './conatct-add/conatct-add.component';
import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    HttpModule
  ],
  providers : [ContactService],
  declarations: [ContactComponent, ContactDetailsComponent, ContactEditComponent, ConatctAddComponent,  SafePipe]
})
export class ContactModule { }
