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
  contactList  : Array<Contact>  = [];
  errors : Array<string> = [];

  addContact( contact : Contact) : void   { //Ana
 
    console.log(contact);

  }

  deleteContact( contact: Contact) :void { //Guzman

  }

  isContactrepeated( contact: Contact) :boolean { //Manu
    return false;
  }

  markAscontacted( contact: Contact ) :void { //Isma

    return 

  }

/* esconder ya contactados */ // Ana

  nameLongerThanSix( name: string ) :boolean { // Guzman
    return

  }

  deleteAll() :void { // Manu

  }

  markAllasContacted () :void { //Isma
    console.log('hola mundo')
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
