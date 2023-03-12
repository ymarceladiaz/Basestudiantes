export namespace keys {
  export const origenCorreoElectronico = 'yulymarceladiaz5@gmail.com';
  export const asuntoNuevoUsuario = '[Nuevo usuario Basestudiantes] Mensaje de Bienvenida';
  export const tiempovencimientoJWT = Math.floor(Date.now() / 1000) + (60 * 60*8);
  export const clavesecretaJWT = 'Marcela.123';
  export const carpetaDocumentosEstudiante = '../../archivos';
  export const nombreCampDocumentoEstudiante = 'file';
  export const extensionesPermitidasDOC:string [] = ['.PDF'];
  export const tamMaxImagenPersona = 1080*1080;
}
