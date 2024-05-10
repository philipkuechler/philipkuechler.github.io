import {Component} from '@angular/core';
import {ExperienceItemComponent} from "./experience-item/experience-item.component";
import {Experience} from "./experience";
import {NgForOf} from "@angular/common";
import {TimelineModule} from "primeng/timeline";

@Component({
  selector: 'lp-experiences',
  standalone: true,
  imports: [
    ExperienceItemComponent,
    NgForOf,
    TimelineModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      job: 'Softwareentwickler',
      company: 'eves_ IT',
      description: `Ich wurde für ein, aus der Region sehr bekannten, Autohersteller eingesetzt, eine Anwendung auf Basis von
                    Java, Angular und Hibernate zu entwickeln.<br>
                    Des Weiteren bin ich aktuell einem internen Projekt zugewiesen worden, welches im Gesundheitssektor agiert.
                    Dieses Projekt wird ebenfalls mit Java und Angular entwickelt.<br>
                    Die Projekte wurden im SCRUM-Umfeld entwickelt.`,
      resumeDate: 'August 2020 - heute'
    },
    {
      job: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
      company: 'Backclick GmbH',
      description: `Innerhalb der 3 Jahre wurde ich mit der Weiterentwicklung von MySQL Datenbanken, des Backends,
                    also der entsprechenden Java-Applikation, und des Markup mit Javascript als Frontend betraut und eingesetzt.
                    Aufgesetzt wird dies auf einem Linux basierten Tomcat Webserver. Entwickelt wird mit der IDE Eclipse.<br>
                    Auch die Erstellung von Newslettern und der Kundensupport gehörte zu meinen Aufgaben.`,
      resumeDate: 'August 2017 - August 2020'
    },
    {
      job: 'Verschiedenes',
      company: 'Das Leben',
      description: `Wie das Leben manchmal so spielt, muss man manchmal einfach Geld verdienen, um zu überleben.`,
      resumeDate: 'Juli 2010 - August 2017'
    },
    {
      job: 'Einjähriges Praktikum als Anwendungsentwickler',
      company: 'CSTx',
      description: `Hier habe ich, neben der Fachoberschule Elektrotechnik, an 3 Tagen pro Woche erste Erfahrungen in der Programmierung machen dürfen.<br>
                    Zum größten Teil hatte ich die Möglichkeit, an einer App für Windows Phones zu arbeiten.`,
      resumeDate: 'August 2009 - Juli 2010'
    },
    {
      job: 'Sekundarabschluss 1',
      company: 'Realschule Georg-Eckert-Straße',
      description: ``,
      resumeDate: 'August 2004 - Juli 2008'
    }
  ];
}
