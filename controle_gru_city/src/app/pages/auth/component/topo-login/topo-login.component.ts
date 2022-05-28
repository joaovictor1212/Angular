import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo-login',
  templateUrl: './topo-login.component.html',
  styleUrls: ['./topo-login.component.scss'],
})
export class TopoLoginComponent implements OnInit {
  @Input() title;
  // item = "/assets/icon/logogru.jpg"
  constructor() { }

  ngOnInit() {}

}
