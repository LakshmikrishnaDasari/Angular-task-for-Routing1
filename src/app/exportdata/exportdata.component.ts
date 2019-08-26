import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Contact } from './contact.model';
import { ExcelService } from '../services/excel/excel.service';
@Component({
  selector: 'app-exportdata',
  templateUrl: './exportdata.component.html',
  styleUrls: ['./exportdata.component.scss']
})
export class ExportdataComponent implements OnInit {
  importContacts: Contact[] = [];
  exportContacts: Contact[] = [];
  constructor(private m:Contact, private s:ExcelService) { }

  ngOnInit() : void {
    for (let index = 0; index < 10; index++) {
      const contact = new Contact();
      contact.name = faker.name.findName();
      contact.phone = faker.phone.phoneNumber();
      contact.email = faker.internet.email();
      contact.address = faker.address.streetAddress();
      this.exportContacts.push(contact);
    }
   

}
onFileChange(evt: any) {
  const target: DataTransfer = <DataTransfer>(evt.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');

  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {

    const bstr: string = e.target.result;
    const data = <any[]>this.s.importFromFile(bstr);

    const header: string[] = Object.getOwnPropertyNames(new Contact());
    const importedData = data.slice(1, -1);

    this.importContacts = importedData.map(arr => {
      const obj = {};
      for (let i = 0; i < header.length; i++) {
        const k = header[i];
        obj[k] = arr[i];
      }
      return <Contact>obj;
    })

  };
  reader.readAsBinaryString(target.files[0]);

}

}