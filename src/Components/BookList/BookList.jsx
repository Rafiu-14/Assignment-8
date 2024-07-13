import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BookList = () => {
    
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-28 text-black underline">{books.length} Books</h1>

            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    books.map(books => <Book key={books.bookId} books={books}></Book>)
                }
            </div>
        </div>
    );
};

export default BookList;