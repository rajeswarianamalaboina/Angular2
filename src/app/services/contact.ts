import { Observable } from "rxjs/Observable";
import { ContactModel } from "../classes/contact";

export interface Contact {
    addContact(contactObject: ContactModel): Observable<number>;
    getAllContacts() :   Observable<ContactModel[]>;
    getContact(id:string) : Observable<ContactModel>;
    updateContact(id: string, contactObj: ContactModel)  : Observable<number>,
    deleteContact(id: string) :  Observable<number>
}
