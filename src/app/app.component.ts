import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MegaMenuItem} from "primeng/api";
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
  items: MegaMenuItem[] = [
    {
      label: 'Über mich',
      icon: 'pi pi-id-card',
      routerLink: '/about-me'
    },
    {
      label: 'Erfahrung',
      icon: 'pi pi-clock',
      routerLink: '/experience'
    },
    {
      label: 'Skills',
      icon: 'pi pi-star',
      routerLink: '/skills'
    },
    {
      label: 'Zertifikate',
      icon: 'pi pi-verified',
      routerLink: '/certificates'
    },
    {
      label: 'Erfolge',
      icon: 'pi pi-trophy',
      routerLink: '/achievements'
    }
  ];

  ngOnInit() {

  }
}
