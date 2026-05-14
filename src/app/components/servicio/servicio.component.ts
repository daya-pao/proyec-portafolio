import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent {

  services = [
     {
      icon: 'fas fa-laptop-code',
      title: 'Desarrollo Web',
      description: 'Transformo tus ideas en sitios web funcionales y atractivos.',
      items: [
        'Desarrollo Frontend y Backend',
        'Diseño Responsive',
        'Integración con APIs y Bases de Datos',
        'Optimización para SEO'
      ]
    },
      {
      icon: 'fas fa-plug',
      title: 'Pruebas de APIs',
      description: 'Utilizo Postman para probar y automatizar las APIs, asegurando su funcionalidad y eficiencia.',
      items: [
        'Creación y Ejecución de Colecciones',
        'Automatización de Pruebas',
        'Validación de Respuestas y Datos',
        'Integración con CI/CD'
      ]
    },
     {
      icon: 'fas fa-database',
      title: 'Gestión de Bases de Datos',
      description: 'Gestiono y optimizo bases de datos para garantizar un rendimiento óptimo.',
      items: [
        'Diseño y Modelado de Bases de Datos',
        'Consultas y Optimización',
        'Seguridad y Backup'
      ]
    },
     {
      icon: 'fas fa-bug',
      title: 'Pruebas de Calidad (QA)',
      description: 'Pruebas exhaustivas para asegurar la calidad y funcionalidad de tus aplicaciones.',
      items: [
        'Pruebas Funcionales.',
        'Pruebas de Compatibilidad en Navegadores.',
        'Automatización Pruebas.',
        'Reporte de Errores.'
      ]
    }

  ];
 
}
