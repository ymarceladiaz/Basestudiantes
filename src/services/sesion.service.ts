import { injectable, /* inject, */ BindingScope } from '@loopback/core';
import { keys as llaves } from '../config/keys';
import { Usuario } from '../models';
const jwt = require('jsonwebtoken');

@injectable({ scope: BindingScope.TRANSIENT })
export class SesionService {
  constructor(/* Add @inject to inject parameters */) { }


  GenerarToken(usuario: Usuario): string {
    let tk =
      jwt.sign({
        exp: llaves.tiempovencimientoJWT,
        data: {
          username: usuario.nombre,
          role : usuario.tipoUsuarioId

        }
      }, llaves.clavesecretaJWT);
    return tk;
  }
  //para verifica la valide de un token jwt

  VerificarTokenJWT(token: string) {
    try {
      let decoded = jwt.verify(token, llaves.clavesecretaJWT);
      return decoded;
    } catch {
      return null;
  }

  }

}
