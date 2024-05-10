import {Component, Input} from '@angular/core';
import {Certificate} from "../certificate";
import {NgIf} from "@angular/common";

@Component({
  selector: 'lp-certificate',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  @Input() certificate!: Certificate;
}
