import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../../servicesImpl/contact.service';
import { ContactModel } from '../../classes/contact';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id: string;
  private sub: any;
  contact : ContactModel;
  errorMessage : string;
  
  constructor(private router: Router, private route: ActivatedRoute,private contactService: ContactService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.id = params['id']; 
      console.log(this.id);
      this.getContact(this.id);
    });  
  } //ngOnInit
  
  getContact(id:any){
      this.contactService.getContact(id).subscribe(
        function(response){
            this.contact = response;
            console.log(this.contact);
        }.bind(this),
        function(error){
            this.errorMessage = error;
        }.bind(this), 
        function(){
          console.log("Subscription is completed");
        }
      )
  }

  deleteConatct(id:any){
    this.contactService.deleteContact(id).subscribe(
      function(successCode){
         this.router.navigateByUrl("contacts");         
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


  cleanURL(mapURL : string): SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(mapURL);
  }



}