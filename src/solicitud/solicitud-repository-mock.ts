import { Solicitud } from './entities/solicitud.entity';

export class SolicitudRepositoryMock {

mockSolcitud: Solicitud = {
  id: 1,
  nombre: 'John Doe',
  cargo: 'Assistant Professor',
  unidad: 'Informatics Department',
  telefono: '1234',
  email: 'john.doe@gmail.com',
  tipo: '',
  nombreActividad: '',
  start: undefined,
  end: undefined,
  dia: '',
  horaInicio: '',
  horaFin: '',
}

  save(solicitud: Solicitud): Promise<Solicitud> { 
    return Promise.resolve(this.mockSolcitud)
}

  findOne(id: number): Promise<Solicitud> { 
    return Promise.resolve(this.mockSolcitud);
  }

  find(): Promise<Solicitud[]> { 
    return Promise.resolve([this.mockSolcitud]);
  }

  delete(): Promise<void> { 
    return Promise.resolve();
  }
}
