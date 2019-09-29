import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'q';
import { map } from 'rxjs/operators';

@Injectable({ 
  providedIn: 'root'
}) 
export class DataserviceService {
  data1: any;
  deldata: any;
  editdata: Object;

  constructor( private _httpClient: HttpClient) { }

  postData(value){
    return this._httpClient.post("https://5d3fa8a1a42af00014869221.mockapi.io/datadetail",value).toPromise()
   .then((data)=>{resolve(data)
  })
  }
  getData(){
    return this._httpClient.get("https://5d3fa8a1a42af00014869221.mockapi.io/datadetail")
    .pipe(map(res=> {
      // console.log('res --------------------------', res)
      this.data1=res;
      return this.data1;

    }
  ))

  }
  deleteDetail(value){
    return this._httpClient.delete('https://5d3fa8a1a42af00014869221.mockapi.io/datadetail/'+value)
    .pipe(map(res=> {
      this.deldata = res;
      return this.deldata;
    }
  ));
  }
  
  postItem(value){
    return this._httpClient.post("https://5d3fa8a1a42af00014869221.mockapi.io/itemdetail",value).toPromise()
   .then((data)=>{resolve(data)
  })
  }

  getItem(){
    return this._httpClient.get("https://5d3fa8a1a42af00014869221.mockapi.io/itemdetail")
    .pipe(map(res=> {
      // console.log('res --------------------------', res)
      this.data1=res;
      return this.data1;

    }
  ))

  }
  deleteItem(value){
    return this._httpClient.delete('https://5d3fa8a1a42af00014869221.mockapi.io/itemdetail/'+value)
    .pipe(map(res=> {
      this.deldata = res;
      return this.deldata;
    }
  ));
  }


  updated(id,value){
    return this._httpClient.put("https://5d3fa8a1a42af00014869221.mockapi.io/datadetail/" +id ,value)
    .pipe(map(res=> {
      this.editdata = res;
      return this.editdata;
    }
  ));
  }

}
