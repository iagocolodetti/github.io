import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-criptografia',
  templateUrl: './criptografia.component.html',
  styleUrls: ['./criptografia.component.css']
})
export class CriptografiaComponent {

  constructor(title: Title) {
    title.setTitle('iagocolodetti.github.io/Criptografia');
  }
  
}
