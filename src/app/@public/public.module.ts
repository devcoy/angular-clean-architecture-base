import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        HomeComponent,
        PublicComponent,
        AboutUsComponent,
        ContactComponent
    ],
    imports: [CommonModule, RouterModule, SharedModule],
    exports: [HomeComponent]
})
export class PublicModule {}
