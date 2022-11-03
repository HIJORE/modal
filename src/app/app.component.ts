import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'modal';
  objects:any;
  editObj:any;
  constructor(private service:ModalService){}

  @ViewChild('exampleModal') myTestDiv: ElementRef | undefined;


ngOnInit(){
    this.service.getData().subscribe(data =>{
      console.log(data);
      this.objects=data;

    })
  
}
edit(object:any){

  this.editObj=object;
  
}
 
    
}
