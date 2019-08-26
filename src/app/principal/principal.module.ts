import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { TeacherModule} from './teacher/teacher.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    TeacherModule
  ]
})
export class PrincipalModule { }
