import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({books}) => {
    const {bookId,bookName,image,category,tags,author,rating} = books
    return (
        <Link to={`/books/${bookId}`}>
            <div className="cursor-pointer border p-5 rounded-2xl">
                <img className="w-80 rounded-3xl" src={image}/>
                <div className="space-x-2 mt-5">
                    <h2 className="bg-[#23be0a1a] inline-block p-2 rounded-full text-[#1ea709] font-medium">{tags.one}</h2>
                    <h2 className="bg-[#23be0a1a] inline-block p-2 rounded-full text-[#1ea709] font-medium">{tags.two}</h2>
                </div> 
                <div className="mt-3 mb-3">
                    <h1 className="text-2xl font-bold text-black">{bookName}</h1>
                    <h2 className="text-[#131313cc] font-medium">By: {author}</h2>
                </div>
                <hr className="mb-3"/>
                <div className="flex justify-between gap-10 text-[#131313cc] font-medium">
                    <h2>{category}</h2>
                    <h2 className="flex gap-2">{rating} <FaRegStar className="mt-1" /></h2>
                </div>
            </div>
        </Link>
    );
};

export default Book;