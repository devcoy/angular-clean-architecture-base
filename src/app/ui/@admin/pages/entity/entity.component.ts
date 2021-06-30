import { Component, OnInit } from '@angular/core';

import { GetEntityUseCase } from '../../../../core/usecases/entity/get-entity.usecase';
import { Entity } from '../../../../core/domain/entity/entity.model';

/**
 * README
 *
 * Vamos a inyectar todos los usecases (para poder usar sus métodos) de los cuales requieramos consumir data de la API.
 *
 * Regularmente estamos acostumbramos a trabjar  directamente con el Service de la API; pero hacerlo de esta manera
 * nos ayudará a separar las responsabilidades entre cada capa de la App.
 *
 */

@Component({
    selector: 'app-entity',
    templateUrl: './entity.component.html',
    styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
    data: Entity;

    constructor(private _getEntityUseCase: GetEntityUseCase) {}

    ngOnInit(): void {
        this.getEntityById(5);
    }

    getEntityById(id: number) {
        this._getEntityUseCase.getEntityById(id).subscribe(
            (resp) => {
                console.warn('[get entity by id resp]', resp);
            },
            (err) => {
                console.error(
                    'Hubo un error al tratar de obtener los datos de la Entity'
                );
            }
        );
    }
}
