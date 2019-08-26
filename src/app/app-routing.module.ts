import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartdetailComponent } from './departdetail/departdetail.component';
import { Child1Component } from './child1/child1.component';
import { StudentComponent } from './principal/teacher/student/student.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

const routes: Routes = [
{path: '', redirectTo:'', pathMatch:'full'},
  { path: 'parent', component:ParentComponent},
  { path:'parent/:name', component:DepartdetailComponent,
children:[{path:'child1', component:Child1Component}]},
// {path:'orders', component:OrderListComponent},
// {path:'customers1', component:CustomerListComponent},
// {path:'student', component:StudentComponent},
{path:'customers1', loadChildren: ()=>import('./customers/customers.module').then(m=>m.CustomersModule)},

{path:'orders', loadChildren: ()=>import('./orders/orders.module').then(m=>m.OrdersModule)},
{path:'student', loadChildren: ()=>import('./principal/principal.module').then(m=>m.PrincipalModule)},

  { path: '**',component:PagenotfoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecomponents=[ParentComponent, PagenotfoundComponent, DepartdetailComponent]
