import { Route, Routes } from "react-router-dom";
import HomePages from "../../pages/HomePages/HomePages";
import { Suspense } from "react";
import css from './App.module.css'
import Header from "../Header/Header";
import BookingPages from "../../pages/BookingPages/BookingPages";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className={css.container}>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/booking" element={<BookingPages />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      </Suspense>
    </div>
  )
}
