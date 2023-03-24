import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {BooksPage} from "./pages/BooksPage";
import {CreateBookPage} from "./pages/CreateBookPage";
import {Layout} from "./layout/Layout";
import { BookDescription } from './pages/BookDescriptionPage';


function App() {

  return (
      <div>
          {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<BooksPage />} />
                  <Route path="create" element={<CreateBookPage />} />
                  <Route path="books/description" element={<BookDescription />} />


                  {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                  <Route path="*" element={<h1>Not Found</h1>} />
              </Route>
          </Routes>
      </div>
  )
}

export default App