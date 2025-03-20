import css from './Footer.module.css'

export default function Footer() {
    return (
        <div className={css.container}>
            <div className={css.blockInfo}>
            <div>
                <ul className={css.list}>
                    <li><a href="">i</a></li>
                    <li><a href="">f</a></li>
                    <li><a href="">n</a></li>
                </ul>
            </div>
            <div>
                <form>
                    <h3 className={css.subtitle}>Your feedback is valuable to us!</h3>
                    <input className={css.input} placeholder="leave it here" type="text" />
                    <button className={css.btn} type="submit">submit</button>
                </form>
            </div>
            </div>
            <div className={css.blockLogo}>
                <h2>A.P. detail</h2>
                <p>auto wash</p>
            </div>
        </div>
    )
}