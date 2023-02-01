import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Documento} from './documento.model';
import {Estado} from './estado.model';

@model({
  settings: {
    foreignKeys: {
      fk_estadoId_id: {
        name: 'fk_estadoId_id',
        entity: 'Estado',
        entityKey: 'id',
        foreignKey: 'estadoId',
      },
    },
  },
})
export class Persona extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  primer_nombre: string;

  @property({
    type: 'string',
  })
  segundo_nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  primer_apellido: string;

  @property({
    type: 'string',
  })
  Segundo_apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  numero_celular: string;

  @property({
    type: 'string',
    required: true,
  })
  correo_electronico: string;

  @property({
    type: 'string',
    required: true,
  })
  documentoCC: string;

  @hasMany(() => Documento)
  documentos: Documento[];

  @belongsTo(() => Estado)
  estadoId: number;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
