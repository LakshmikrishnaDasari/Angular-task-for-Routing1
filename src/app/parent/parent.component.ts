import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {



  departs:any[]= [
    { id: 1, name: 'c.s.e' },
    { id: 2, name: 'e.c.e' }
  ]
  // private isButtonVisible = true;
  constructor(private route: Router) { }

  ngOnInit() {

    
  }
  onselect(dep){

    this.route.navigate(['/parent', dep.name]);
      
  }

}
