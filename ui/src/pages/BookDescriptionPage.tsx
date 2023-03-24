import { useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";


export const BookDescription = () => {
    const location = useLocation();
    const book = location.state.book;

    return (
        <>
            <NavBar />

            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg mt-5 shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">book title: {book.title}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">book id: {book.id}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">book title: {book.title}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">book author: {book.author}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">book categories: {book.categories}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">book description: {book.description}</p>
            </div>

        </>
    )
}