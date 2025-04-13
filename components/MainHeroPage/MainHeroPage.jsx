import css from './MainHeroPage.module.css'

export default function MainHeroPage() {
    return (
        <div id='home' className={css.container}>
        <div className={css.heroSection}>
            <h1 className={css.title}>A.P. detail</h1>
            <p className={css.text}>Premium car detailing and washing services to keep your vehicle looking brand new.</p>
            <button className={css.btn} type='button'>book a wash</button>
        </div>
        </div>
    )
}