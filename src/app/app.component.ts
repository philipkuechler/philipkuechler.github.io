import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MegaMenuItem, MenuItem} from "primeng/api";
import {TabMenuModule} from "primeng/tabmenu";
import {MegaMenuModule} from "primeng/megamenu";
import {PanelMenuModule} from "primeng/panelmenu";

@Component({
  selector: 'lp-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarModule, ButtonModule, MenuModule, TabMenuModule, MegaMenuModule, PanelMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = "landingpage";
  items: MegaMenuItem[] = [
    {
      label: 'Über mich',
      icon: '',
    },
    {
      label: 'Erfahrungen',
      icon: ''
    },
    {
      label: 'Skills',
      icon: ''
    },
    {
      label: 'Zertifikate',
      icon: ''
    },
    {
      label: 'Erfolge',
      icon: ''
    }
  ];

  ngOnInit() {

  }
}
