import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './ui/@admin/admin.routing';
import { PublicRoutingModule } from './ui/@public/public.routing';
import { AuthRoutingModule } from './ui/auth/auth.routing';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' }
    //   { path: '**', component: NopagefoundComponent },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        PublicRoutingModule,
        AdminRoutingModule,
        AuthRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
