import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactModel } from '../../classes/contact';
import { ContactService } from '../../servicesImpl/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conatct-add',
  templateUrl: './conatct-add.component.html',
  styleUrls: ['./conatct-add.component.css']
})
export class ConatctAddComponent implements OnInit {
  
  myform: FormGroup;
  id: string;
  private sub: any;
  contact : ContactModel;
  errorMessage : string;

  constructor(private router: Router,private contactService: ContactService) { }

  ngOnInit() {

    this.myform = new FormGroup({
      
             name: new FormControl('', [ 
               Validators.required,
               Validators.minLength(5)
             ]),
             email: new FormControl('', [
               Validators.required,
               Validators.pattern("[^ @]*@[^ @]*")
             ]),
             company: new FormControl('', [ 
               Validators.required,
               Validators.minLength(5)
             ]),
             phoneNumber: new FormControl('', [ 
               Validators.required,
               Validators.minLength(10)
             ]),
             jobTitle: new FormControl('', [ 
               Validators.required,
               Validators.minLength(5)
             ]),
             note: new FormControl('', [ 
               Validators.required,
               Validators.minLength(10)
             ])
      
 });
  }

  onFormSubmit(){
    this.contactService.addContact(this.myform.value).subscribe(
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

  backToView(){
    if(window.confirm('will lose your changes that are not saved')){
      this.router.navigateByUrl("contacts"); 
    }
  }

}
