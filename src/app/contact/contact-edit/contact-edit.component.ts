import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactModel } from '../../classes/contact';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../../servicesImpl/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  
  myform: FormGroup;
  id: string;
  private sub: any;
  contact : ContactModel;
  errorMessage : string;

  constructor(private router: Router, private route: ActivatedRoute,private contactService: ContactService) { }

  ngOnInit() {

    this.route.params.subscribe(params => { 
      this.id = params['id']; 
      console.log(this.id);
      this.getContact(this.id);
    }); 
    
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


  } //ngOnInit


  getContact(id:any){
    this.contactService.getContact(id).subscribe(
      function(response){
        this.myform.get('name').setValue(response.name);
        this.myform.get('email').setValue(response.email);
        this.myform.get('company').setValue(response.company);
        this.myform.get('phoneNumber').setValue(response.phoneNumber);
        this.myform.get('jobTitle').setValue(response.jobTitle);
        this.myform.get('note').setValue(response.note);
      }.bind(this),
      function(error){
          this.errorMessage = error;
      }.bind(this), 
      function(){
        console.log("Subscription is completed");
      }
    )
}

onFormSubmit(){
  this.updateContact(this.id,this.myform.value);
}

updateContact(id:any,contactObj:ContactModel){
  this.contactService.updateContact(id,contactObj).subscribe(
    function(successCode){
       this.router.navigateByUrl("contacts/"+id);         
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
    this.router.navigateByUrl("contacts/"+this.id); 
  }
}

}
