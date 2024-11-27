import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, // Your components
  ],
  imports: [
    BrowserModule, // Other modules
  ],
  providers: [
    provideHttpClient(), // Use this instead of HttpClientModule
  ],
  bootstrap: [AppComponent], // Root component
})
export class AppModule {}
