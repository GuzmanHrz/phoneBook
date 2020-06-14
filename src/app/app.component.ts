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
  contactList  : Array<Contact>  = [
    {id: 1, name: "Ismael Rodriguez" ,   email: "isma@email.com" , phone: "745253453",contacted: false},
    {id: 2, name: "Juan Campayo" ,   email: "Juan@email.com" , phone: "245353245",contacted: true},
    {id: 3, name: "Angel Ramirez" ,  email: "Angel@email.com" , phone: "324543534",contacted: false}
  ];
  errors : Array<string> = [];
  editMode: boolean = false;
  addMode: boolean = false;
  idCounter: number = 3;


  addContact( contact : Contact) : void   { //Ana
    if(!this.isContactRepeated(contact) || this.nameLongerThanSix(contact.name) ){
       contact.id = ++this.idCounter;

      this.contactList.push(contact);

      this.addMode = false;
    }
    
    console.log(this.contactList);

  }

  deleteContact( contact: Contact) :void { //Guzman

    this.contactList  = this.contactList.filter( listItem => listItem !== contact );

  }

  isContactRepeated ( contact: Contact) :boolean { 
    return this.contactList.some(elementItem => elementItem.name == contact.name && elementItem.email == contact.email && elementItem.phone == contact.phone); //Manu
     
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

  private nameLongerThanSix( contactName: string ) :boolean { // Guzman
    return contactName.length > 6;
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

  edit( contact: Contact ) :void{ //Guzman
    
    let originalContanct = this.contactList.find( itemList  => itemList.id === contact.id); 
    originalContanct.name = contact.name;
    originalContanct.email  =  contact.email;
    originalContanct.phone = contact.phone;
    originalContanct.contacted = contact.contacted;


  }

  saveInLocalStorage(contact: Contact) :void { //Guzman

  }

  setAddMode() :void {
    this.addMode = true;
    this.newContact = {id: 0, name: "" ,  email: "" , phone: "",contacted: false};

  }
}
