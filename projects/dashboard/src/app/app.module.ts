import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardOutletDirective } from './dashboard-outlet.directive';
import { DashboardCardContainerComponent } from './dashboard-card-container/dashboard-card-container.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldContainerComponent } from './hello-world-container/hello-world-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardOutletDirective,
    DashboardCardContainerComponent,
    HelloWorldComponent,
    HelloWorldContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
