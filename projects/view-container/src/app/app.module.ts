import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmbeddedViewComponent } from './embedded-view/embedded-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmbeddedViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
