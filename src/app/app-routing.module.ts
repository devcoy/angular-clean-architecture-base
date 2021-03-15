import { PublicRoutingModule } from './@public/public.routing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicModule } from './@public/public.module';

const routes: Routes = [
    { path: '', redirectTo: 'public', pathMatch: 'full' }
    //   { path: '**', component: NopagefoundComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes), PublicRoutingModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
