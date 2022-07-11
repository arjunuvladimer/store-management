import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Redux
// Store Module:
// => It is helping us to create an object based state/store
// => Getting all the inbuilt functions from the Store Module
import {StoreModule} from '@ngrx/store';
import {BookReducer} from './store/reducers/book-reducer'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    // Create Store in the form of object
    StoreModule.forRoot({
      book: BookReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
