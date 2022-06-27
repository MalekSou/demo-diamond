import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
readData:any;
successmsg:any;
  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
   
  }
deleteNickname(nickname:any)
{
  console.log(nickname,'deletenickname==>');
  this.service.deleteData(nickname).subscribe((res)=>{
       console.log(res,'deleteres==>');
this.successmsg = res.message;
this.service.getAllData().subscribe((res)=>{
  console.log(res,"res==>");
  this.readData = res.data;
});
  });
}

}
