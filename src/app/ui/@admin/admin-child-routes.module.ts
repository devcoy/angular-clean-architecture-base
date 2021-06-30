import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class AdminChildRoutesModule {}
