import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EntityGateway } from '../../domain/entity/entity.gateway';
import { Entity } from '../../domain/entity/entity.model';

/**
 * README
 *
 * En esta class (service) aparte de decir lo que queremos, debemos indicar como lo queremos o como lo haremos.
 * En esta class solo estamos definiendo e indicando como se van a implementar los métodos GET.
 *
 * Los usecases serán separados por el verbo Http, es decir, vamos un a tener un usecase independiente para GET, POST, PUT Y DELETE.
 * Estos usecases los vamos a inyectar en los Components (controller) que requieran consumir data de la API.
 *
 */

@Injectable({
    providedIn: 'root'
})
export class GetEntityUseCase {
    constructor(private _entityGateway: EntityGateway) {}

    getEntityById(id: number): Observable<Entity> {
        return this._entityGateway.getById(id);
    }
    getAllEntities(): Observable<Array<Entity>> {
        return this._entityGateway.getAll();
    }
}
