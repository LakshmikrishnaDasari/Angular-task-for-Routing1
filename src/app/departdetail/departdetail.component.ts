import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-departdetail',
  templateUrl: './departdetail.component.html',
  styleUrls: ['./departdetail.component.scss']
})
export class DepartdetailComponent implements OnInit {
  departmentid ;

  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {

    // let name=parseInt(this.route.snapshot.paramMap.get('name'));
    // this.departmentid= name;
    // console.log(this.departmentid);'
    console.log(this.route);
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('route params', params);
      let Id = params.get('name');
      this.departmentid = Id;

    });


}
onprevious(){
  let previousid=this.departmentid-1;
  this.router.navigate(['/parent', previousid])
  }

  onnext(){
    let nextid=this.departmentid+1;
    this.router.navigate(['/parent', nextid])
    }
child1(){
  this.router.navigate(['child1'], {relativeTo: this.route});
}
}
