import {Component} from '@angular/core';
import {Certificate} from "./certificate";
import {CertificateComponent} from "./certificate/certificate.component";
import {NgForOf} from "@angular/common";
import {ExperienceItemComponent} from "../experience/experience-item/experience-item.component";
import {SharedModule} from "primeng/api";
import {TimelineModule} from "primeng/timeline";

@Component({
  selector: 'lp-certificates',
  standalone: true,
  imports: [
    CertificateComponent,
    NgForOf,
    ExperienceItemComponent,
    SharedModule,
    TimelineModule
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {name: "", company: "", date: "", link: ""},
    {
      name: "Cyber Security Awareness",
      company: "Securepoint GmbH",
      date: "Dezember 2023",
      link: "https://www.linkedin.com/in/philip-k-8bbb2918b/"
    },
    {
      name: "Angular Advanced Workshop",
      company: "thecodecampus.de",
      date: "September 2023",
      link: "https://www.linkedin.com/in/philip-k-8bbb2918b/"
    },
    {
      name: "Ausbildung für Sicherheitsbeauftragte in Büro und Verwaltung - Teil 1",
      company: "VBG - Ihre gesetzliche Unfallversicherung",
      date: "August 2023",
      link: "https://www.linkedin.com/in/philip-k-8bbb2918b/"
    },
    {
      name: "Angular Intensivkurs Workshop",
      company: "workshops.de",
      date: "November 2022",
      link: "https://www.linkedin.com/in/philip-k-8bbb2918b/"
    },
    {
      name: "Cisco Certification CCNA 1",
      company: "Cisco",
      date: "Mai 2019",
      link: "https://www.linkedin.com/in/philip-k-8bbb2918b/"
    },
    {
      name: "Oracle Certified Professional, Java SE 8 Programmer",
      company: "Oracle",
      date: "Mai 2018",
      link: "https://www.youracclaim.com/badges/fdef5452-a479-4125-8c84-b4978891b788/public_url"
    },
    {
      name: "Oracle Certified Assocciate, Java SE 8 Programmer",
      company: "Oracle",
      date: "Oktober 2017",
      link: "https://www.youracclaim.com/badges/627eebf1-ec18-4758-a128-e8a49eefd598/public_url"
    },
  ];
}
