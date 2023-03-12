import { AuthenticationStrategy } from '@loopback/authentication';
import { service } from '@loopback/core';
import { HttpErrors, Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import parseBearerToken from 'parse-bearer-token'
import { SesionService } from '../services';

export class AdminStrategies implements AuthenticationStrategy {

    name: string = 'admin';
    constructor(@service(SesionService)
    public servicionSesion: SesionService ) {

    }

    async authenticate(request: Request): Promise<UserProfile | undefined> {

        const token = parseBearerToken(request);
        if (!token) {
             throw  new HttpErrors[401]("No tiene autorizacion, sin token!!");
        }
        let datos= this.servicionSesion.VerificarTokenJWT(token);

        if(datos){
            if(datos.data.role == "640a2d2ce5faa0e0bfdaa1b2"){
            let perfil : UserProfile = Object.assign({
                nombre_usurio: datos.data.username,
                rol : datos.data.role

            });
            return perfil;
        } else{
            throw  new HttpErrors[401]("Usted no tiene el rol para ejecutar esta acción");
        }
        }else{
            throw  new HttpErrors[401]("No tiene token válido");
        }



    }


}










