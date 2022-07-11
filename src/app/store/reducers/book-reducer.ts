// Import All the interface from Actions to Model
import { BookModel } from "../models/book-store.model";
import { BookAction, BookActionType } from "../actions/book.action";

// INITIAL STATE WITH BOOK MODEL WITH THE DUMMY DETAILS
const INITIAL_STATE: Array<BookModel> = [
    {
        book_id: '2380394',
        book_name: 'Fountain Head',
        book_description: 'Ayan Rand Books'
    },
]

// REDUCER => STATE, ACTION AS PARAMETERS
export function BookReducer(
    state: Array<BookModel> = INITIAL_STATE, 
    action: BookAction
    ){
    switch (action.type) {
        case BookActionType.ADD_BOOK:
            return [...state, action.payload]
            // ...state => previous state/history
            // [book_id, book_name, book_description, action.payload]
    
        default:
            return state
    }
}