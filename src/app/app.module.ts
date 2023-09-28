import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsModule } from './characters/character-details/character-details.module';
import { CharacterListModule } from './characters/character-list/character-list.module';
import { FooterModule } from './core/components/footer/footer.module';
import { HeaderModule } from './core/components/header/header.module';
import { AuthInterceptor } from './core/interceptors/authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterModule,
    HeaderModule,
    CharacterListModule,
    CharacterDetailsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
