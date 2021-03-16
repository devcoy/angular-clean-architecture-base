import { PublicRoutingModule } from './@public/public.routing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicModule } from './@public/public.module';
import { AdminRoutingModule } from './@admin/admin.routing';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' }
    //   { path: '**', component: NopagefoundComponent },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        PublicRoutingModule,
        AdminRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
