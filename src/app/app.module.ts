import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './characters/character-list/search/search.module';
import { FooterModule } from './core/components/footer/footer.module';
import { HeaderModule } from './core/components/header/header.module';
import { AuthInterceptor } from './core/interceptors/authentication.interceptor';
import { LoadingModule } from './shared/components/loading/loading.module';
import { CharacterListModule } from './characters/character-list/character-list.module';

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
    CharacterListModule
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
