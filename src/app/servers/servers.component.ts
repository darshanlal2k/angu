import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
  .online {
    color: white;
  }`],
})
export class ServersComponent {
  serversID: number = 10;
  serverStatus: string = "Offline";
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getServerStatus() {
    return this.serverStatus;
  }
}
