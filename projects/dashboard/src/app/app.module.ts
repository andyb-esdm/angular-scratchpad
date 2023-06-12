import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardOutletDirective } from './dashboard-outlet.directive';
import { DashboardCardContainerComponent } from './dashboard-card-container/dashboard-card-container.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldContainerComponent } from './hello-world-container/hello-world-container.component';
import { HelloWorldContainerTwoComponent } from './hello-world-container-two/hello-world-container-two.component';
import { ListComponent } from './list/list.component';
import { ListContainerComponent } from './list-container/list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardOutletDirective,
    DashboardCardContainerComponent,
    HelloWorldComponent,
    HelloWorldContainerComponent,
    HelloWorldContainerTwoComponent,
    ListComponent,
    ListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
