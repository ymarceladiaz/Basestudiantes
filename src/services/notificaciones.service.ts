import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {keys as llaves } from '../config/keys';
const sgMail = require('@sendgrid/mail')
@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * envio de correo electronico para emali
   */

  EnviarCorreoElectronico(destino : string, asunto : string, contenido : string) {


    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: destino, // Change to your recipient
      from:llaves.origenCorreoElectronico, // Change to your verified sender
      subject: asunto,
      html: contenido,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error: any) => {
        console.error(error)
      })

  }


}
