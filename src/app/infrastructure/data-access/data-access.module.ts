import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityGateway } from '../../core/domain/entity/entity.gateway';
import { EntityApiService } from './entity/entity-api.service';

/**
 * README
 *
 * Agrega todas las configuraciones de los providers, cada Service debe estár configurado aquí para poder ser inyectado.
 *
 * Recuerda importar este Module en el app.module
 *
 * { provide: EntityGateway, useClass: EntityApiService }
 */

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [{ provide: EntityGateway, useClass: EntityApiService }]
})
export class DataAccessModule {}
