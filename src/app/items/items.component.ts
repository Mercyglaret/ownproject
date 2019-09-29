import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @ViewChild("closeBtn") closeBtn : ElementRef;
  isSubmittingForm: boolean = false;
  data2: any;
  itemDis: any;
  constructor( public dataservice:DataserviceService , public router:Router ) { }

  ngOnInit() {
    this.dataservice.getItem().subscribe((data)=>{
      this.itemDis= data
      console.log(this.itemDis);
      
    });
  }

  closemodal(){
    this.closeBtn.nativeElement.click();
  }

 addItem(value){
 console.log(value);
 this.dataservice.postItem(value).then((data1)=>{
  this.router.navigate(['/billing']);
  this.isSubmittingForm = false;
  this.closemodal(); 
  this.ngOnInit();
  this.data2 = {};
 }).catch(() =>  {
  // Handle error here id anything wrong with the network
  this.isSubmittingForm = false;
  this.closemodal();
  this.data2 = {};
});
 
 }

 delItem(value){

  Swal.fire({
    title: 'Are you sure?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Successfully',
        'success'
      )
      this.isSubmittingForm = true;
      this.dataservice.deleteItem(value).subscribe(res=>{
        this.isSubmittingForm = false;
        this.ngOnInit();
      })
    // For more information about handling dismissals please visit
    // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Successfully',
        'error'
      )
    }
  })
 
}




}
