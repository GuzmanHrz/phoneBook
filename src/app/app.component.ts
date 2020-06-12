import { Component } from '@angular/core';
type Contact = {
  name:             string;
  email:            string;
  phone:            string;
  contacted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Ana, Guzman, Manu, Isma
 */
  export class AppComponent {
  title = 'phoneBook';
  newContact : Contact = {name: "" ,  email: "" , phone: "",contacted: false};
  contactList  : Array<Contact>  = [
    {name: "Isma" ,   email: "" , phone: "745253453",contacted: false},
    {name: "Juan" ,   email: "" , phone: "245353245",contacted: false},
    {name: "Angel" ,  email: "" , phone: "324543534",contacted: false}
  ];
  errors : Array<string> = [];
  editMode: boolean = false;
  addMode: boolean = false;

  addContact( contact : Contact) : void   { //Ana
 
    console.log(contact);

  }

  deleteContact( contact: Contact) :void { //Guzman

  }

  isContactrepeated( contact: Contact) :boolean { //Manu
    return false;
  }

  /* Isma */
  private isAlreadyContacted = ( isContacted: boolean, position: number ) => !isContacted ? this.contactList[position].contacted = true : this.contactList[position].contacted = false
  
  markAscontacted = ( contactName: string ) :void => this.contactList.forEach((contact: Contact, position: number) => contact.name === contactName ? this.isAlreadyContacted(contact.contacted, position) : false )
  markAllasContacted = () :void => this.contactList.forEach((contact: Contact, position: number) => !contact.contacted ? this.contactList[position].contacted = true : false )

  /* esconder ya contactados */ // Ana

  nameLongerThanSix( name: string ) :boolean { // Guzman
    return

  }

  deleteAll() :void { // Manu

  }
  
  /* Segunda Parte */

  search( data: string){ //Ana

  }

  searchByName(name: string){

  }

  searchByEmail(email:  string){

  }

  edit( contact: Contact) :void{ //Guzman

  }

  saveInLocalStorage(contact: Contact) :void { //Guzman

  }

}
