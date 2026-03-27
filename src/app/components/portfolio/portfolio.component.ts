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
 
  projects = [
 
    
]

selectedProject:any = null

openProject(project:any){
this.selectedProject = project
}

closeProject(){
this.selectedProject = null
}
}
