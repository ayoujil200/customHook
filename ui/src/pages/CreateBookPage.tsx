import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from "./NavBar";
import axios from "axios";
import { ChangeEvent, useState } from "react";

class Book {
    title?: string;
    author?: string;
    categories?: string;
    description?: string;

    constructor(title?: string, author?: string, categories?: string, description?: string) {
        this.title = title;
        this.author = author;
        this.categories = categories;
        this.description = description;
    }
}

export const CreateBookPage = () => {
    var title: string;
    var description: string;
    var categories: string;
    var author: string;

    const create = () => {
        if (title && description && categories && author) {
            let book = new Book(title, author, categories, description);
            axios.post('http://localhost:8080/api/v1/books', book)
                .then(() => {
                    toast.success('your book created successfuly :)', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                })
                .catch((error) => {
                    toast.error(`Error: ${error.message}`, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                });
        } else {
            toast.warning("missong fields", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        }
    }

    const getTitle = (e) => {
        title = e.target.value;
    }

    const getDescription = (e) => {
        description = e.target.value;
    }

    const getAuthor = (e) => {
        author = e.target.value;
    }

    const getCategories = (e) => {
        categories = e.target.value;
    }

    return (
        <>
            <NavBar />
            <ToastContainer />
            <div className="flex flex-row p-2 rounded shadow-md items-center">
                <div className="basis-1/4  mx-2">
                    <div>
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" onChange={(e) => getTitle(e)} id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
                    </div>
                </div>
                <div className="basis-1/4 mx-2">
                    <div>
                        <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                        <input type="text" onChange={(e) => getAuthor(e)} id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="author" required />
                    </div>
                </div>
                <div className="basis-1/4  mx-2 ">
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" onChange={(e) => getDescription(e)} id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required />
                    </div>
                </div>
                <div className="basis-1/4  mx-2 ">
                    <div>
                        <label for="categories" class="block text-sm font-medium text-gray-900 dark:text-white">Categories</label>
                        <input type="text" onChange={(e) => getCategories(e)} id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="categories (category1, category2,...." required />
                    </div>
                </div>

                <div className="basis-1/4 mx-2">
                    <div>
                        <button type="button" onClick={() => create()} class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create new book</button>
                    </div>
                </div>
            </div>
        </>
    )
}