import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.scss']
})
export class ViewdetailComponent implements OnInit {
  @ViewChild("closeBtn") closeBtn : ElementRef;
  id: any;
  bind: any;
  result:any={
    Id:'',
    Name:'',
    Vlan:'',
    Address:'',
    Portid:'',
    Password:'',
    Userid:'',
    Macid:'',
    Telephnip:'',
    Phnno:''
  };
  edit: any;
  
  constructor(public dataService: DataserviceService, public routing:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id)
    this.dataService.getData().subscribe(data5 => { 
      this.bind = data5
      console.log(this.bind)

      for(let i=0;i<this.bind.length;i++){
        if(this.id===this.bind[i].id){
          // this.result.Id=this.bind[i].id;
          this.result.Name=this.bind[i].name;
         this.result.Address=this.bind[i].address;
         this.result.Phnno=this.bind[i].phnno;
         this.result.Vlan=this.bind[i].vlan;
         this.result.Portid=this.bind[i].portid;
         this.result.Telephnip=this.bind[i].telephnip;
         this.result.Password=this.bind[i].password;
         this.result.Userid=this.bind[i].userid;
         this.result.Macid=this.bind[i].macid;
        }
        
       }



        }); 
  }

  updateDetail(value){
    console.log(value);
    this.dataService.updated(this.id,value).subscribe(res=>{
      this.edit=res;
    });
    this.closemodal();

  }


  closemodal(){
    this.closeBtn.nativeElement.click();
  }

} 
