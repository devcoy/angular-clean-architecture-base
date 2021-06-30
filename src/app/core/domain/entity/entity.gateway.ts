import { Observable } from 'rxjs';

import { Entity } from './entity.model';

/**
 * README
 *
 * Es una abstract class, en esta class solo vamos a definir los métodos que necesitaremos,
 * será el contrado que debemos seguir y cumplir en la implementación de la API (infrastructure).
 *
 */

export abstract class EntityGateway {
    abstract getById(id: number): Observable<Entity>;
    abstract getAll(): Observable<Array<Entity>>;
    abstract save(entity: Entity): Observable<void>;
}
