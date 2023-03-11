import books from './data/books.json' assert { type: "json" };

export class Library{

    selectBook(actor){
        this.book = books.find((book) => book.author == actor);
        if(typeof this.book !== undefined && this.book){
            return this.book;
        }
        return 'Livro não encontrado!';
    }
}   

