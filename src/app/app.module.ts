import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PublicModule } from './ui/@public/public.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, PublicModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
