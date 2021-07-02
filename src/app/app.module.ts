import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PublicModule } from './ui/@public/public.module';
import { AdminModule } from './ui/@admin/admin.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, PublicModule, AdminModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
