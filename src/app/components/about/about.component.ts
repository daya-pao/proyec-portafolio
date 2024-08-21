import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  cubes = [
  { index: 0, iconClass: 'bx bxl-typescript' },
  { index: 1, iconClass: 'bx bxl-php' },
  { index: 2, iconClass: 'bx bxl-html5' },
  { index: 3, iconClass: 'bx bxl-angular' },
  { index: 4, iconClass: 'bx bxl-react' },
  { index: 5, iconClass: 'bx bxl-javascript' },
  { index: 6, iconClass: 'bx bxl-typescript' },
  { index: 7, iconClass: 'bx bxl-python' },
  { index: 8, iconClass: 'bx bxl-git' },
  { index: 9, iconClass: 'bx bxl-angular' },
  { index: 10, iconClass: 'bx bxl-react' },
  { index: 11, iconClass: 'bx bxl-javascript' }
  ];

  descriptions = [
    'Typescript es Un superconjunto de JavaScript que añade tipado estático y características avanzadas, facilitando el desarrollo de aplicaciones grandes y robustas.',
    'PHP es un lenguaje de scripting del lado del servidor muy utilizado para el desarrollo web y la creación de aplicaciones dinámicas.',
    'HTML5 es la última versión del lenguaje de marcado para la creación de páginas web soportando multimedia y gráficos.',
    'Angular es un framework de desarrollo web para construir aplicaciones de una sola página con una arquitectura robusta.',
    'React es una biblioteca para construir interfaces de usuario, especialmente para aplicaciones de una sola página interactivas y dinamicas.',
    'JavaScript es un lenguaje de programación que permite la creación de contenido interactivo en la web.',
    'Typescript es Un superconjunto de JavaScript que añade tipado estático y características avanzadas, facilitando el desarrollo de aplicaciones grandes y robustas.',
    'Python es un lenguaje de programación de alto nivel conocido por su legibilidad y simplicidad.',
    'Git es un sistema de control de versiones distribuido para el seguimiento de cambios en el código fuente.',
    'Angular es un framework de desarrollo web para construir aplicaciones de una sola página con una arquitectura robusta.',
    'React es una biblioteca para construir interfaces de usuario, especialmente para aplicaciones de una sola página interactivas y dinamicas.',
    'JavaScript es un lenguaje de programación que permite la creación de contenido interactivo en la web.'
  ];

  percentages = [
    30, 30, 80,  65, 70, 85, 30, 90, 85,  65, 70,  85
  ];


  selectedIcon: string = 'bx bxl-typescript';
  description: string = 'TypeScript es un superset de JavaScript que añade tipos estáticos';
  percentage: number = 30;

  showIcon(index: number) {
    const card = document.querySelector('.card__texto') as HTMLElement;
    if (card) {
      // Determinar la animación de salida basada en el índice del cubo
      const animationOutClass = this.getAnimationOutClass(index);

      // Añadir la clase de animación de salida
      card.classList.add(animationOutClass);

      // Esperar a que la animación de salida termine antes de actualizar el contenido
      setTimeout(() => {
        const selectedCube = this.cubes.find(cube => cube.index === index);
        if (selectedCube) {
          this.selectedIcon = selectedCube.iconClass;
          this.description = this.descriptions[selectedCube.index] || ' ';
          this.percentage = this.percentages[selectedCube.index] || 0; 
          console.log('Selected Icon Class:', this.selectedIcon);
          console.log('Description:', this.description);
          console.log('Percentage:', this.percentage);
        } else {
          this.selectedIcon = '';
          this.description = '';
          console.log('Icon not found for index:', index);
        }

        // Eliminar la clase de animación de salida y añadir la clase de animación de entrada
        card.classList.remove(animationOutClass);
        const animationInClass = this.getAnimationInClass(index);
        card.classList.add(animationInClass);

        // Esperar a que la animación de entrada termine antes de eliminar la clase de animación de entrada
        setTimeout(() => {
          card.classList.remove(animationInClass);
        }, 500); // Tiempo debe coincidir con la duración de la animación en CSS
      }, 500); // Tiempo debe coincidir con la duración de la animación en CSS
    }
  }

  getAnimationOutClass(index: number): string {
    // Puedes personalizar las animaciones de salida según el índice o cualquier otra lógica
    const animations = ['slide-left-out', 'slide-right-out', 'slide-up-out'];
    return animations[index % animations.length];
  }

  getAnimationInClass(index: number): string {
    // Puedes personalizar las animaciones de entrada según el índice o cualquier otra lógica
    const animations = ['slide-left-in', 'slide-right-in', 'slide-up-in'];
    return animations[index % animations.length];
  }
  getColor(): string {
    // Puedes definir una lógica para elegir el color basado en el porcentaje
    if (this.percentage > 75) {
      return '#43f94a'; // Verde
    } else if (this.percentage > 50) {
      return '#f9d142'; // Amarillo
    } else {
      return '#f94a4a'; // Rojo
    }
  }


  /*message:string = " ";

  showMessage(){
    this.message = " SALOME";
  }

  selectedIcon:string = " "
  description:string = " "

  showIcon(index:number){
    const selectedCube = this.cubes.find(cube=> cube.index === index)
    this.selectedIcon = selectedCube ? selectedCube.iconClass: " ";
    if (selectedCube) {
      this.selectedIcon = selectedCube.iconClass;
      this.description = this.descriptions[selectedCube.index] || " "
      console.log('Selected Icon Class:', this.selectedIcon); // Imprime la clase del ícono en la consola
      console.log('description', this.description,)
    } else {
      this.selectedIcon = " "
      this.description = " "
      console.log('Icon not found for index:', index);
      
    }
  }*/
}
