import { Library } from "./module/Library.js";

class Book extends Library{
    actor; 
    
    constructor(actor = ''){
        super();
        this.actor = actor;
        
    }

    getBook(){
        return super.selectBook(this.actor)
    }

    
}

const book1 = new Book("Chinua Achebe");
console.log(book1.getBook());