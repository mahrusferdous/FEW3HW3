class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    display = () => {
        console.log(
            `Title of the book is ${this.title} and the author is ${this.author} which contains ${this.pages} pages`
        );
    };
}

let book = new Book("The Alchemist", "Paulo Coelho", 208);
book.display();

let book1 = new Book("The Secret", "Rhonda Byrne", 198);
let book2 = new Book("The Power of Now", "Eckhart Tolle", 236);
let book3 = new Book("The Monk Who Sold His Ferrari", "Robin Sharma", 98);

books = [book1, book2, book3];

function addBooks(title, author, pages) {
    books.push(new Book(title, author, pages));
}

function searchBooks(title) {
    books.map((book) => {
        if (book.title === title) {
            console.log(book);
        }
    });
}

addBooks("The 7 Habits of Highly Effective People", "Stephen Covey", 432);
searchBooks("The Power of Now");

console.log(books.filter((book) => book.pages > 100));

//  TASK 2

class Account {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    deposit = (amount) => {
        this.balance += amount;
    };

    withdraw = (amount) => {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
            return;
        }
        this.balance -= amount;
    };

    interest = (rate) => {
        this.balance += (rate / 100) * this.balance;
    };

    display = () => {
        console.log(
            `Account Number: ${this.accountNumber}, Balance: ${this.balance}, Owner: ${this.owner}`
        );
    };
}

let account = new Account(123456, 1000, "John Doe");
account.deposit(2000);
account.withdraw(500);
account.interest(5);

account.display();
