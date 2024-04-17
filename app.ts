class Book{
    title:string; //todos los hijos comparten esta propiedad

    constructor(title:string) { // si inicializan las propiedades
        this.title = title;
    }

    read(){ //se crea el método
        return `I'm reading ${this.title}!`;
    }
}

class PaperBook extends Book{
    pages:number;

    constructor(title:string, pages:number){
        super(title);
        this.pages = pages;
    }

    read(){
        return `I'm reading a paper book!`;
    }
}

class ElectronicBook extends Book{
    size:number;

    constructor(title:string, size:number){
        super(title);
        this.size = size;
    }

    read(){
        return `I'm reading a digital book!`;
    }
}

class ParchmentBook extends Book{
    length:number;

    constructor(title:string, length:number){
        super(title);
        this.length = length;
    }
}

class ReadBook{
    books:Book;
    constructor(books:Book){
        this.books = books; //this.books = new Book ("One piece",150) si no tuvieramos la inyección de dependencias.
    }
    read(){
        return this.books.read();
    }
}


const phisicalBook = new PaperBook("Dragones de papel",350);
const digitalBook = new ElectronicBook("One piece",150);
const readerPaper = new ReadBook(phisicalBook);
const readerDigital= new ReadBook(digitalBook);

console.log (readerDigital.read());
console.log(readerPaper.read());
