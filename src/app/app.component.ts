import { Component } from '@angular/core';
type Contact = {
  id:               number;
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
  newContact : Contact = {id: 0, name: "" ,  email: "" , phone: "",contacted: false};
  editedContact : Contact = {id: 0, name: "" ,  email: "" , phone: "",contacted: false};
  contactList  : Array<Contact> = localStorage.getItem('contactList') === null ? [] : JSON.parse (localStorage.getItem('contactList'));
  errors : Array<string> = [];
  editMode: boolean = false;
  addMode: boolean = false;
  idCounter: number = this.contactList.length === 0 ? 0 : this.contactList[this.contactList.length - 1].id ;
 

  addContact( contact : Contact) : void   { //Ana
    if(!this.isContactRepeated(contact) && this.validNameLength(contact.name, 6)){ 
      contact.id = ++this.idCounter;
      this.contactList.push(contact);
      localStorage.setItem('contactList', JSON.stringify(this.contactList));
      this.errors = [];
      this.addMode = false;
    }

  }

  deleteContact( contact: Contact) :void { //Guzman

    this.contactList  = this.contactList.filter( listItem => listItem !== contact );
    localStorage.setItem('contactList', JSON.stringify(this.contactList));


  }

  isContactRepeated ( contact: Contact) :boolean {  //Manu 
    if (this.contactList.some(elementItem => elementItem.name == contact.name && elementItem.email == contact.email && elementItem.phone == contact.phone)){
      this.errors.push("The contact is already in the list.")
      return true;   
    }
     
  }

  /* Isma */

  /* 
    Función que busca un contacto por nombre y si lo encuentra lo marca como contactado
    @param string Nombre del contacto a buscar
  */
  markAscontacted = ( contactName: string ) :void => this.contactList.forEach((contact: Contact, position: number) => contact.name === contactName ? this.contactList[position].contacted = true : false )
  
  /* 
    Función que recorre la lista de contactos y los marca todos como contactados
  */
  markAllasContacted = () :void => this.contactList.forEach((contact: Contact, position: number) => this.contactList[position].contacted = true )

  /* esconder ya contactados */ // Ana

  private validNameLength( contactName: string, minimumLength: number ) :boolean { // Guzman
    if ( contactName.length > minimumLength ) {
      return true;
    } else {
      this.errors.push(`The name should have more than ${minimumLength} characters`);
      return false;
    }
  }

  deleteAll() :void { // Manu

    //localStorage.setItem('contactList', JSON.stringify(this.contactList));


  }
  
  /* Segunda Parte */

  search( data: string){ //Ana

  }

  searchByName(name: string){

  }

  searchByEmail(email:  string){

  }

  

  edit(contact : Contact ) :void{ //Guzman
    if (this.validNameLength(contact.name, 6)){
      let contactPosition = this.contactList.findIndex(contactIterator => contactIterator.id === contact.id);
      this.contactList[contactPosition] = contact;
      this.editMode = false;
      this.errors = [];
      localStorage.setItem('contactList', JSON.stringify(this.contactList));

     }
  }

 
  setAddMode() :void {
    this.addMode = true;
    this.newContact = {id: 0, name: "" ,  email: "" , phone: "",contacted: false};

  }

  setEditMode(contact: Contact) :void { //Guzman
    this.editMode = true;
    this.editedContact = {...contact};

  } 
}
