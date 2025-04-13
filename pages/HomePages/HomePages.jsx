import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import MainAdvantagesPage from "../../components/MainAdvantagesPage/MainAdvantagesPage";
import MainContactPage from "../../components/MainContactPage/MainContactPage";
import MainHeroPage from "../../components/MainHeroPage/MainHeroPage";
import MainLocationPage from "../../components/MainLocationPage/MainLocationPage";
import MainReviewsPage from "../../components/MainReviewsPage/MainReviewsPage";
import MainServicesPage from "../../components/MainServicesPage/MainServicesPage";
import MainWorksPage from "../../components/MainWorksPage/MainWorksPage";

export default function HomePages() {
    return (
        <div>
        <MainHeroPage />
        <MainAdvantagesPage />
        <MainServicesPage />
        <MainWorksPage />
        <MainLocationPage />
        <MainContactPage />
        <MainReviewsPage />
        <Footer />
        {/* <Calendar /> */}
        </div>
    )
}