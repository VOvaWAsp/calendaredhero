import Calendar from "../../components/Calendar/Calendar";
import MainAdvantagesPage from "../../components/MainAdvantagesPage/MainAdvantagesPage";
import MainContactPage from "../../components/MainContactPage/MainContactPage";
import MainHeroPage from "../../components/MainHeroPage/MainHeroPage";
import MainLocationPage from "../../components/MainLocationPage/MainLocationPage";
import MainServicesPage from "../../components/MainServicesPage/MainServicesPage";
import MainWorksPage from "../../components/MainWorksPage/MainWorksPage";

export default function HomePages() {
    return (
        <>
        <MainHeroPage />
        <MainAdvantagesPage />
        <MainServicesPage />
        <MainWorksPage />
        <MainLocationPage />
        <MainContactPage />
        {/* <Calendar /> */}
        </>
    )
}