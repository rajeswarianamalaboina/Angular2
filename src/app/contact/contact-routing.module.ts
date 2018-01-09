import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { NgModule } from '@angular/core';
import { ConatctAddComponent } from './conatct-add/conatct-add.component';

const routes: Routes = [
  { path: '',  component:ContactComponent },
  { path : 'add', component:ConatctAddComponent },
  { path : ':id', component:ContactDetailsComponent },
  { path : ':id/edit', component:ContactEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactRoutingModule { }

