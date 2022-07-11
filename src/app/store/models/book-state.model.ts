import { BookModel} from "./book-store.model";
// Book State => readonly
export interface BookState{
    readonly book: Array<BookModel>;
}