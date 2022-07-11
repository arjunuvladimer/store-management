import { Component, OnInit } from '@angular/core';

// Redux
import {Store} from '@ngrx/store'
import {AddBookAction} from './store/actions/book.action'
import { BookModel } from './store/models/book-store.model';
import {BookState} from './store/models/book-state.model'

// Forms
import { NgForm } from '@angular/forms';

// Rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {

  // Identity with Array of Objects Type
  bookList$: Observable<Array<BookModel>>;

  constructor(private store: Store<BookState>) {}

  ngOnInit(): void {
    // Returning Initial State, Update State from Store to the component

    // Subscribing Data
    this.bookList$ = this.store.select((store) => store.book)
  }

  // Book Actions
  addBook(form: NgForm){

    // From the component wheneve a form Trigger onSubmit 
    // Dispatch Action Creator AddBookAction(payload)
    this.store.dispatch(new AddBookAction(form.value))
    form.reset()
  }
 
}
