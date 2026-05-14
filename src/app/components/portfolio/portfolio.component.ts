import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 
  proyects = [
    {
      name:"Plataforma Gamer",
      description:"Plataforma donde los usuarios pueden ver trailers y nocicias de  videojuegos.",
      image:"assets/pagina_game.PNG",
      github:"https://github.com/daya-pao/angular_game.git",
      tech:["angular","TtpeScrip","API"]
    },
    {
      name:"Gestion de Vacunas",
      description:"Sistema para gestionar vacunas de mascotas.",
      image:"assets/mascotasG.PNG",
      github:"https://github.com/daya-pao/mascotas_vet.git",
      tech:["PHP","MySQL","MVC"]
    },
    {
      name:"Simulador de futbol",
      description:"Juego de simulador de futbol.",
      image:"assets/simuladorF.PNG",
      github:"https://github.com/daya-pao/simulador_futbol.git",
      tech:["angular","TtpeScrip","CSS"]
    },

  ];

  selectedProject:any = null;
  opeModal(proyect:any){
    this.selectedProject = proyect;
  }

  closeModal(){
    this.selectedProject = null
  }

}
