import {Component, Inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MegaMenuItem} from "primeng/api";
import {TabMenuModule} from "primeng/tabmenu";
import {MegaMenuModule} from "primeng/megamenu";
import {PanelMenuModule} from "primeng/panelmenu";
import {DOCUMENT, NgClass, NgIf} from "@angular/common";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";
import {BackgroundComponent} from "./background/background.component";

@Component({
  selector: 'lp-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarModule, ButtonModule, MenuModule, TabMenuModule, MegaMenuModule, PanelMenuModule, ToggleButtonModule, FormsModule, BackgroundComponent, NgIf, NgClass],
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
      routerLinkActiveOptions: {exact: true},
      state: [""]
    },
    {
      label: 'Erfahrung',
      icon: 'pi pi-clock',
      routerLink: '/experience',
      routerLinkActiveOptions: {exact: true}
    },
    {
      label: 'Skills',
      icon: 'pi pi-star',
      routerLink: '/skills',
      routerLinkActiveOptions: {exact: true}
    },
    {
      label: 'Zertifikate',
      icon: 'pi pi-verified',
      routerLink: '/certificates',
      routerLinkActiveOptions: {exact: true}
    }
  ];

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
  }

  ngOnInit() {

  }

  changeTheme() {
    let themeLink: HTMLLinkElement = this.document.getElementById("themeLink") as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = "assets/themes/" + (this.themeToggled ? "lara-light-blue/theme.css" : "lara-dark-blue/theme.css");
    }
  }

  checkRouteActive(route: string) {
    console.log(this.router.url)
    return route === this.router.url;
  }
}
