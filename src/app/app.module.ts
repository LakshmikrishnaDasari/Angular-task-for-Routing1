import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule , routecomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingsampleComponent } from './routingsample/routingsample.component';
import { DepartdetailComponent } from './departdetail/departdetail.component';
import { Child1Component } from './child1/child1.component';
import { StudentComponent } from './principal/teacher/student/student.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { ExportdataComponent } from './exportdata/exportdata.component';
import { ExcelService } from './services/excel/excel.service';
import { Contact } from './exportdata/contact.model';
import { ExceldComponent } from './exceld/exceld.component';
import { CheckresetComponent } from './checkreset/checkreset.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalModule } from './principal/principal.module';


@NgModule({
  declarations: [
    AppComponent,
    RoutingsampleComponent,
    routecomponents,
    DepartdetailComponent,
    Child1Component,
    
    ExportdataComponent,
    ExceldComponent,
    CheckresetComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule
  ],
  providers: [ExcelService,
    Contact],
  bootstrap: [AppComponent]
})
export class AppModule { }
