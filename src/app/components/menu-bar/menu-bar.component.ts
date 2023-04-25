import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  
    youtube:string  ='https://www.youtube.com/channel/UCCEjtyQNEDNDwXEJvzWnXrQ';
    linkedin:string ='https://www.linkedin.com/in/jamario-nascimento/';
    gitHub:string   ='https://github.com/jamarionasciemtnto';

  constructor() { }

  ngOnInit(): void {
  }

}
