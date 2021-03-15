import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: PublicComponent }
];

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class PublicChildRoutesModule {}
