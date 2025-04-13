import Footer from "../../components/Footer/Footer";
import FormBooking from "../../components/FormBooking/FormBooking";
import css from './BookingPages.module.css'

export default function BookingPages() {
    return (
            <div className={css.container}>
                <FormBooking />
                <Footer />
            </div>
    )
}