import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,

        loadChildren: () =>
            import('./admin-child-routes.module').then(
                (module) => module.AdminChildRoutesModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
