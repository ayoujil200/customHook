import {Link, Outlet} from "react-router-dom";

export const  Layout = () => {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

            <nav className="p-3 border-gray-200 rounded bg-gray-50">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap">Book Store</span>
                    </Link>
                    <button data-collapse-toggle="navbar-solid-bg" type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ">
                            <li>
                                <Link to="/"
                                   className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 "
                                   aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/"
                                   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">List Of Books</Link>
                            </li>
                            <li>
                                <Link to="/create"
                                   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Create Book</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <div className="md:container md:mx-auto">
                <Outlet />
            </div>

        </div>
    );
}