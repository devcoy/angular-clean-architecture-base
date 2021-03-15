import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';

const routes: Routes = [
    {
        path: 'public',
        component: PublicComponent,

        loadChildren: () =>
            import('./public-child-routes.module').then(
                (module) => module.PublicChildRoutesModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
