import {Component} from '@angular/core';
import {SkillGroup} from "./skillGroup";
import {SkillItemComponent} from "./skill-item/skill-item.component";
import {FieldsetModule} from "primeng/fieldset";
import {CommonModule} from "@angular/common";
import {StyleClassModule} from "primeng/styleclass";

@Component({
  selector: 'lp-skills',
  standalone: true,
  imports: [
    CommonModule,
    SkillItemComponent,
    FieldsetModule,
    StyleClassModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'Programmiersprachen und Styling', skills: [
        {image: 'assets/img/angular.png', name: 'Angular', rating: 5},
        {image: 'assets/img/javascript.png', name: 'Typescript', rating: 4},
        {image: 'assets/img/html.png', name: 'HTML', rating: 4},
        {image: 'assets/img/css.png', name: 'CSS', rating: 4},
        {image: 'assets/img/java.png', name: 'Java', rating: 5},
        {image: 'assets/img/csharp.png', name: '', rating: 1},
        {image: '', name: '', rating: 1},
      ]
    },
    {
      category: 'Frameworks', skills: [
        {image: 'https://primefaces.org/cdn/primeng/images/primeng.svg', name: 'PrimeNG', rating: 4},
        {
          image: 'https://repository-images.githubusercontent.com/220078160/9353b600-0e54-11ea-9712-b79b66b93c00',
          name: 'Material UI',
          rating: 3
        },
        {image: 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png', name: 'RxJS', rating: 4},
        {image: 'https://ngrx.io/assets/images/badge.svg', name: 'NgRx', rating: 2},
        {image: '', name: '', rating: 1},
      ]
    },
    {
      category: 'Datenbanken', skills: [
        {image: 'assets/img/mysql.png', name: 'MySQL', rating: 4},
        {image: 'https://cdn.pixabay.com/photo/2013/09/18/12/13/sqlite-183454_960_720.png', name: 'SQLite', rating: 4},
        {image: 'https://hibernate.org/images/hibernate_icon_whitebkg.svg', name: 'Hibernate', rating: 4},
        {
          image: 'https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Oracle.component.complex-narrative-xl.ts=1690897950703.png/content/adobe-cms/de/de/products/instana/supported-technologies/oracle-database-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage',
          name: 'Oracle',
          rating: 3
        }
      ]
    },
    {
      category: 'IDEs und Tools', skills: [
        {image: 'assets/img/IntelliJ.png', name: 'IntelliJ', rating: 4},
        {image: 'assets/img/vscode.png', name: 'VS Code', rating: 3},
        {image: 'assets/img/eclipse.png', name: 'Eclipse', rating: 4},
        {image: 'assets/img/android_studio.png', name: 'Android Studio', rating: 3},
        {image: 'assets/img/git.png', name: 'git', rating: 4},
        {image: 'assets/img/npm.png', name: 'npm', rating: 4},
        {image: '', name: '', rating: 1},
      ]
    },
    {
      category: 'Betriebssysteme', skills: [
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png',
          name: 'Windows',
          rating: 4
        },
        {image: 'assets/img/linux.png', name: 'Linux', rating: 3},
        {
          image: 'https://upload.wikimedia.org/wikipedia/de/thumb/b/b1/MacOS-Logo.svg/1077px-MacOS-Logo.svg.png',
          name: 'MacOS',
          rating: 3
        },
      ]
    },
    {
      category: 'Testing', skills: [
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/220px-Selenium_Logo.png',
          name: 'Selenium',
          rating: 4
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_jasmine.svg/1200px-Logo_jasmine.svg.png',
          name: 'Jasmine',
          rating: 3
        },
        {image: 'https://www.testautomatisierung.org/wp-content/uploads/Karma-Logo.png', name: 'Karma', rating: 3},
        {image: '', name: '', rating: 3},
      ]
    },

  ];
}
