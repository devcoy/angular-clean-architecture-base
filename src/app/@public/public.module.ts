import { RouterModule } from '@angular/router';
import { PublicChildRoutesModule } from './public-child-routes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';

@NgModule({
    declarations: [HomeComponent, PublicComponent],
    imports: [CommonModule, RouterModule],
    exports: [HomeComponent]
})
export class PublicModule {}
