import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TextviewComponent} from './components/textview/textview.component';
import {HttpClientModule} from "@angular/common/http";
import {PixslspaceComponent} from './components/pixslspace/pixslspace.component';

@NgModule({
  declarations: [
    AppComponent,
    TextviewComponent,
    PixslspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
