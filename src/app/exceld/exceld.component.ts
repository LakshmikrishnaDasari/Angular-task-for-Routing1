import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-exceld',
  templateUrl: './exceld.component.html',
  styleUrls: ['./exceld.component.scss']
})
export class ExceldComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  arrayBuffer:any;
  file:File;
  wb:any;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }
  
   Upload() {
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read( bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
            
              console.log(worksheet)
              this.wb=JSON.stringify(worksheet)
          }
          fileReader.readAsArrayBuffer(this.file);
   }
 

}

