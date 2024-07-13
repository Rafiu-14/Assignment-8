import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {
    const books = useLoaderData()
    const {bookId} = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt)

    const notify = () => toast("Add to read");
    const notify2 = () => toast("Add to Wishlist");

    return (
        <div className="flex space-x-20 mt-10">
            <div>
                <img className="w-[400px] rounded-3xl mt-5" src={book.image} />
            </div>
            <div className="space-y-3 mt-3">
                <h1 className="text-4xl font-bold text-black">{book.bookName}</h1>
                <p className="text-[#131313cc] font-medium">By: {book.author}</p>
                <hr />
                <p className="text-[#131313cc]">{book.category}</p>
                <hr />
                <p><span className="font-bold text-black">Review: </span>{book.review}</p>
                <div className="flex gap-3">
                    <h2 className="font-bold text-black">Tag</h2>
                    <h2 className="bg-[#23be0a1a] inline-block p-2 rounded-full text-[#1ea709] font-medium">{book.tags.one}</h2>
                    <h2 className="bg-[#23be0a1a] inline-block p-2 rounded-full text-[#1ea709] font-medium">{book.tags.two}</h2>
                </div>
                <hr />
                <div className="">
                    <h1 className="text-[#131313b3] font-medium flex justify-between">Number Of Pages: <span className="text-black">{book.totalPages} pages</span></h1>
                    <h1 className="text-[#131313b3] font-medium flex justify-between">Publisher: <span className="text-black">{book.publisher}</span></h1>
                    <h1 className="text-[#131313b3] font-medium flex justify-between">Year Of Publishing: <span className="text-black">{book.yearOfPublishing}</span></h1>
                    <h1 className="text-[#131313b3] font-medium flex justify-between">Rating: <span className="text-black">{book.rating}</span></h1>
                </div>
                <div className="flex space-x-5 mt-5">
                    <button onClick={notify} className="btn border border-1px border-[#1313134d] bg-transparent text-lg text-black w-28">Read</button>
                    <ToastContainer />
                    <button onClick={notify2} className="btn bg-[#50b1c9] text-lg text-white w-28 hover:text-black">Wishlist</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;