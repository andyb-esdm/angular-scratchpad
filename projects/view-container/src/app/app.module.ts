import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmbeddedViewComponent } from './embedded-view/embedded-view.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    EmbeddedViewComponent,
    CreateComponentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
