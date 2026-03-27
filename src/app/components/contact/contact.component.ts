import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  sendEmail(event:Event){
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    emailjs.sendForm(
      'service_3irjgt9',
      'template_ssb0t5b',
      form,
      'whowY2PZkr1cmrz3R'
    ).then(()=>{
      Swal.fire({
        icon:'success',
        title:'Mensaje enviado',
        text:'Gracias por Contatarme 📧'
      });

      form.reset();

    }).catch((error)=>{
      console.log(error);
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text:'No se pudo enviar el mensaje'
      });
    });
    
  }

}
