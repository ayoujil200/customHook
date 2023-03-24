import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NavBar } from "./NavBar";
import { toast } from 'react-toastify';

type Book = {
    id: number;
    title: string;
    author: string;
    categories: string;
    description: string;
}

export const BooksPage = () => {
    let titles = "";
    let categories = "";

    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state && location.state.message;
    const [books, setBooks] = useState<Array<Book>>([]);


    const handleDelete = (bookId, e) => {
        axios.delete('http://localhost:8080/api/v1/books/' + bookId).then(() => fetchBooks()).catch(function (error) {
            if (error.response) {
                message = "error!"
            }
        });
    }

    const handleSearchByCategories = (e) => {
        categories = e.target.value;
    }

    const handleSearchByCategoriesAndTitles = async (e) => {
        let url = `http://localhost:8080/api/v1/books/search`;
        if (categories && titles) {
            url += `?categories=${encodeURIComponent(categories)}&titles=${encodeURIComponent(titles)}`;
        } else if (categories) {
            url += `?categories=${encodeURIComponent(categories)}`;
        } else if (titles) {
            url += `?titles=${encodeURIComponent(titles)}`;
        }

        const response = await axios.get(url);

        setBooks(response.data);
    }

    const handleShowDescriptionOfBook = async (book, e) => {
        navigate('/books/description', { state: { book } });
    }

    const handleSearchByTitles = (e) => {
        titles = e.target.value;
    }

    const fetchBooks = async () => {
        const response = await axios("/api/v1/books")
        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks();
        if (message) {
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        }
    }, [message])

    return (
        <>
            <NavBar />
            <div class="relative overflow-x-auto">
                <div class="flex m-2 items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" onChange={e => handleSearchByCategories(e)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search by categories (category1,category2,...)" required />
                    </div>
                </div>
                <div class="flex m-2 items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" onChange={e => handleSearchByTitles(e)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search by titles (title1,title2,...)" required />
                    </div>
                </div>
                <button type="button" onClick={e => handleSearchByCategoriesAndTitles(e)} class="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Title</th>
                            <th scope="col" class="px-6 py-3">Author</th>
                            <th scope="col" class="px-6 py-3">Categories</th>
                            <th scope="col" class="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) =>
                                <><tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                    <td onClick={e => handleShowDescriptionOfBook(book, e)} class="px-6 py-4">{book.title}</td>
                                    <td onClick={e => handleShowDescriptionOfBook(book, e)} class="px-6 py-4">{book.author}</td>
                                    <td onClick={e => handleShowDescriptionOfBook(book, e)} class="px-6 py-4">{book.categories}</td>
                                    <td class="px-6 py-4"><button type="button" onClick={e => handleDelete(book.id, e)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button></td>
                                </tr></>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}