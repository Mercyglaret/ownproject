import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-adddetail',
  templateUrl: './adddetail.component.html', 
  styleUrls: ['./adddetail.component.scss']
})
export class AdddetailComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  @ViewChild("closeBtn") closeBtn : ElementRef;
  isSubmittingForm: boolean = false;
  searchTest :string ="" ;
  // dtUsers =[];
  Bind:any;
  data: any;
  result: any;
  constructor(public dataService:DataserviceService) { }

  ngOnInit() {

    
    this.dataService.getData().subscribe(data5 => { 
      this.Bind = data5
      console.log(this.Bind)
      this.result = this.Bind;
      // this.dtUsers.push(this.Bind);
        });
        this.dtOptions = {
          data: this.result,
          columns: [{
            title: 'ID',
            data: 'id'
          }, {
            title: 'Name',
            data: 'name'
          }, {
            title: 'VLAN',
            data: 'vlan'
          },{
            title: 'Phone-Numebr',
            data: 'phnno'
          }]
        };

   


  }

  closemodal(){
    this.closeBtn.nativeElement.click();
  }

  addDetail(value){
    console.log(value);
    this.dataService.postData(value).then((data1)=>{
      this.isSubmittingForm = false;
      this.closemodal(); 
      this.ngOnInit();
      this.data = {};
    }).catch(() =>  {
      // Handle error here id anything wrong with the network
      this.isSubmittingForm = false;
      this.closemodal();
      this.data = {};
    });

  }
  
  deldata(value){

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
        this.dataService.deleteDetail(value).subscribe(res=>{
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
  
  filter(data){
    return data.vlan.toString().indexOf(this.searchTest.toString()) != -1;
    // return data.name.toString().indexOf(this.searchTest.toString()) != -1;
  }
}
