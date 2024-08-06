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
    { index: 1, iconClass: 'bx bxl-php'},
    { index: 2, iconClass: 'bx bxl-html5' },
    { index: 3, iconClass: 'bx bxl-angular' },
    { index: 3, iconClass: 'bx bxl-react' },
    { index: 3, iconClass: 'bx bxl-javascript' },
    { index: 4, iconClass: 'bx bxl-python' },
    { index: 5, iconClass: 'bx bxl-git'},
    { index: 6, iconClass: 'bx bxl-git'},
    { index: 7, iconClass: 'bx bxl-angular' },
    { index: 8, iconClass: 'bx bxl-react' },
    { index: 39, iconClass: 'bx bxl-javascript' }
  ];

  
}
