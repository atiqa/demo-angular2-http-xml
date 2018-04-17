import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ObservableComponent }  from './observable.component';
import { PromiseComponent }  from './promise.component';
import { BookService } from './book.service';

import { XmldataComponent }  from './xmldata.component';

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule
  ],
  declarations: [
        AppComponent,
		ObservableComponent,
		PromiseComponent,
		XmldataComponent
  ],
  providers: [
        BookService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
