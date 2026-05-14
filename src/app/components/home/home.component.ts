import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  profesiones: string [] = ['Web Developer','QA Testing',]
  profesionActual :string = '';
  indice:number = 0;

  ngOnInit(){
    this.iniciarEfecto();

  }

  iniciarEfecto(){
    this.profesionActual = this.profesiones[this.indice]

    setInterval(() => {
      this.indice = (this.indice + 1)% this.profesiones.length;
      this.profesionActual = this.profesiones[this.indice]
    },4000)
  }
}
