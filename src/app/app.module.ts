import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { DefaultComponent } from './pages/default/default.component';
import { SurahComponent } from './pages/surah/surah.component';
import { ToArabicNumberPipe } from './pipes/to-arabic-number.pipe';
import { AyahListBuilderComponent } from './components/ayah-list-builder/ayah-list-builder.component';
import { AyahRendererComponent } from './components/ayah-renderer/ayah-renderer.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { NqIconComponent } from './components/nq-icon/nq-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultComponent,
    SurahComponent,
    ToArabicNumberPipe,
    AyahListBuilderComponent,
    AyahRendererComponent,
    ThemeSwitcherComponent,
    NqIconComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
