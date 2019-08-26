import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
