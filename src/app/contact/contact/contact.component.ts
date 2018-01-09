import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../servicesImpl/contact.service';
import { Observable } from 'rxjs';
import { ContactModel } from '../../classes/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  contacts :ContactModel[];
  errorMessage : string; 
  constructor(private router: Router,private contactService: ContactService) { }
  ngOnInit() {
    this.getAllContacts();
  }

  //Fetch all Contacts
  getAllContacts() {
    this.contactService.getAllContacts().subscribe(
      function(response){
        this.contacts = response.filter(
          contact => contact.name != null);
      }.bind(this),
      function(error){
         this.errorMessage = error;
      }.bind(this),
      function() {
        console.log("Subscription is completed");
      }
    )
  }

  deleteConatct(id:any){
    this.contactService.deleteContact(id).subscribe(
      function(successCode){
         this.getAllContacts();         
      }.bind(this),
      function(error){
         console.log(error);
         this.errorMessage = error;
      }.bind(this),
      function(){
        console.log("Subscription is completed");
      }
    )
  }
}