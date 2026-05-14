import { Component } from '@angular/core';
import { NgxParticlesModule } from "@tsparticles/angular"; // Importa el módulo aquí
import { MoveDirection, OutMode, Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-background-component',
  standalone: true,
  imports: [NgxParticlesModule], // Agrégalo aquí para que Angular reconozca <ngx-particles>
  templateUrl: './background-component.component.html',
  styleUrl: './background-component.component.css'
})
export class BackgroundComponentComponent {
  id = "tsparticles";

  // Configuración de las partículas que se unen
  particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Crea líneas hacia el mouse
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 0.5 }
        },
        push: { quantity: 4 }
      },
    },
    particles: {
      color: { value: "#00f7ff" },
      links: {
        color: "#00f7ff",
        distance: 150,
        enable: true, // Esto activa la unión entre puntos
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: { default: OutMode.out },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // Función para inicializar el motor de partículas
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}