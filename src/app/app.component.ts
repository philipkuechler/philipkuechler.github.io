import {Component, Inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MegaMenuItem} from "primeng/api";
import {TabMenuModule} from "primeng/tabmenu";
import {MegaMenuModule} from "primeng/megamenu";
import {PanelMenuModule} from "primeng/panelmenu";
import {DOCUMENT} from "@angular/common";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";
import {BackgroundComponent} from "./background/background.component";

@Component({
  selector: 'lp-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarModule, ButtonModule, MenuModule, TabMenuModule, MegaMenuModule, PanelMenuModule, ToggleButtonModule, FormsModule, BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  themeToggled: boolean = false;
  items: MegaMenuItem[] = [
    {
      label: 'Über mich',
      icon: 'pi pi-id-card',
      routerLink: '/about-me',
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
    }
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {

  }

  changeTheme() {
    let themeLink: HTMLLinkElement = this.document.getElementById("themeLink") as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = "assets/themes/" + (this.themeToggled ? "lara-light-blue/theme.css" : "lara-dark-blue/theme.css");
    }
  }
}
