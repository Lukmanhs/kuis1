import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  serverName= 'TestServer';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreationStatus(){
    this.serverCreationStatus = 'Server telah  dibuat!';
  }

  onUpdateServerName(event : Event){
    this.serverName =(<HTMLInputElement>event.target).value;
  }

}
