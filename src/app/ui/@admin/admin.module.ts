import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntityComponent } from './pages/entity/entity.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

/**
 * README
 *
 * Todos los Module se tienene que importar en el app.module para poder ser registrados
 *
 */
@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        EntityComponent,
        AdminNavbarComponent
    ],
    imports: [CommonModule, RouterModule, SharedModule],
    exports: []
})
export class AdminModule {}
