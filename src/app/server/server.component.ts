import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 2;
  serverStatus: string = "offline";
  serverAddress: Number = 101020;
  allowNewServer: string = "no server has created";
  // userEntry = "";
  userCreated = false;
  userEntry:string = "Darshan Lal";
  getServerMethod() {
    return this.serverAddress;
  }
  allowServer = false;
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 5000);
  }

  onCreateServer() {
    this.allowNewServer = "new Server has created + Name is " + this.userEntry;
  }
  onChangeServerName(event: any) {
    console.log(event);
    this.userEntry = (<HTMLInputElement>event.target).value;
  }
  OnCondition(event:any){
    this.userCreated = true;
    console.log(event);
   // this.userEntry = (<HTMLInputElement>event.target).value;

  }


}
