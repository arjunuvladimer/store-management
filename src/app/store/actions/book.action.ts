// Action Creator for creating multiple actions to the store
import {Action} from '@ngrx/store'
// Imported BookModel that contains interface with Constants
import { BookModel } from '../models/book-store.model'

// Action Types
export enum BookActionType{
    ADD_BOOK = '[BOOK] Add Book' 
}

// Action Action with Action Creator from NgRx Store
export class AddBookAction implements Action{
    // Type of Action is Mandatory 
    readonly type = BookActionType.ADD_BOOK

    // Payload is an Optional with BookModel Interface Constants
    constructor(public payload: BookModel){}
}

// Type of Action with Enum Type
export type BookAction = AddBookAction