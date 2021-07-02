import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntityComponent } from './pages/entity/entity.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';

@NgModule({
    declarations: [AdminComponent, DashboardComponent, EntityComponent],
    imports: [CommonModule, SharedModule],
    exports: []
})
export class AdminModule {}
