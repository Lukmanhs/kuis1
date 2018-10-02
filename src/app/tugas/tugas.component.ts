import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  username="";
  
  constructor() { }

  ngOnInit() {
  }
  onCreationStatus(){
    this.serverCreationStatus = 'Server telah dibuat!';
  }

  onUpdateServerName(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.username='';
  }


}
