import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from 'src/app/core/domain/entity/entity.model';
import { EntityGateway } from '../../../core/domain/entity/entity.gateway';
import { environment } from '../../../../environments/environment';

/**
 * README
 *
 * En esta class (service) implementamos los métodos que hayamos definido en la abstrac class de la Entity.
 *
 * Aquí estamos extendiendo EntityGateway para así implementar los métodos que hayamos definido en EntityGateway.
 *
 */

const BASE_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class EntityService extends EntityGateway {
    constructor(private _httpClient: HttpClient) {
        super();
    }

    getById(id: number): Observable<Entity> {
        return this._httpClient.get<Entity>(BASE_URL);
    }

    getAll(): Observable<Entity[]> {
        return this._httpClient.get<Array<Entity>>(BASE_URL);
    }

    save(entity: Entity): Observable<void> {
        throw new Error('Method not implemented.');
    }
}
