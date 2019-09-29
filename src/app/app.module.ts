import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdddetailComponent } from './adddetail/adddetail.component';
import { HttpClientModule } from '@angular/common/http';
import { BillingComponent } from './billing/billing.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdddetailComponent,
    BillingComponent,
    ViewdetailComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'', pathMatch:'full', redirectTo:'home/adddetail'},
      { path:'home', component:HomeComponent ,
      children:[
      { path:'adddetail', component:AdddetailComponent },
      { path:'viewdetail/:id', component:ViewdetailComponent },
      { path:'items', component:ItemsComponent },
      { path:'billing', component:BillingComponent }
      ]} 
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
