import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.css'
})
export class LoadingScreenComponent  implements OnInit{
  isLoading = true;
  statusText = 'BUSCANDO INFORMACIÓN...';
  progress = 0;

  ngOnInit() {
    this.startLoading();
  }

  startLoading() {
    // Simulación de carga por pasos
    setTimeout(() => {
      this.statusText = 'INFORMACIÓN ENCONTRADA DAYA AREVEALO';
      this.progress = 60;
    }, 1500);

    setTimeout(() => {
      this.statusText = 'BIENVENIDO A MI PORTAFOLio...';
      this.progress = 90;
    }, 2500);

    setTimeout(() => {
      this.isLoading = false; // Aquí desaparece la pantalla
    }, 6500);
  }

}
