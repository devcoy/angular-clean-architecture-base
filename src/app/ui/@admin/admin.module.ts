import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntityComponent } from './pages/entity/entity.component';

@NgModule({
    declarations: [DashboardComponent, EntityComponent],
    imports: [CommonModule],
    exports: [DashboardComponent]
})
export class AdminModule {}
