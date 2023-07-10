import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
// import { ConnectionService } from 'ng-connection-service';
// import { CookieService } from 'ngx-cookie-service';
// import { MessageService } from 'primeng/api';
declare var $: any;

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  // providers: [MessageService],
})
export class AdminLayoutComponent implements OnInit {
  status = 'ONLINE';
  isConnected = true;
  activeItem: any;

  constructor(
    // private router: Router,
    // private cookie: CookieService
  ) {
   

2
   
  }

  ngOnInit() {
    console.log('object :>> Admin Module');
  }
}
