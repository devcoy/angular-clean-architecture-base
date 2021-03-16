import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: PublicComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class PublicChildRoutesModule {}
