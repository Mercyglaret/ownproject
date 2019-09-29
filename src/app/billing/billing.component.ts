import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  items: any;
  dataitem: any;
  list: any=[];

  constructor(public dataservice:DataserviceService ) { }

ngOnInit() {
    this.dataitem=JSON.parse(localStorage.getItem("selectedItem"));
    console.log(this.dataitem);

    
  
    this.dataservice.getItem().subscribe((data)=>{
    this.items= data
    console.log(this.items);
  
    });

 
 
}

selectItem(value){
console.log(value);
// for(let i=0; i<this.dataitem[i].length; i++){
//   if(value.selecteditem=this.dataitem[i].item){

//   }
// }\

   
this.list.push(value);
console.log(this.list);

localStorage.setItem("selectedItem",JSON.stringify(this.list));

this.ngOnInit();

}
}
