import css from "./MainContactPage.module.css";

export default function MainContactPage() {
  return (
    <div id="contact" className={css.container}>
      <h2 className={css.title}>Contact us</h2>
      <div className={css.blockContact}>
        <h2 className={css.subtitle}>contact</h2>
        <hr className={css.line} />
        <div className={css.blockInfo}>
          <div className={css.cardInfo}>
            <h3 className={css.text}>TikTok</h3>
            <a className={css.link}>a.p.detail</a>
          </div>
          <div className={css.cardInfo}>
            <h3 className={css.text}>Instagram</h3>
            <a className={css.link}>a.p.detail</a>
          </div>
          <div className={css.cardInfo}>
            <h3 className={css.text}>Facebook</h3>
            <a className={css.link}>A.P.detail</a>
          </div>
          <div className={css.cardInfo}>
            <h3 className={css.text}>Phone</h3>
            <a href="tel:+17735141405" className={css.link}>+1 (773) 514 1405</a>
          </div>
          <div className={css.cardInfo}>
            <h3 className={css.text}>Email</h3>
            <a className={css.link} href="mailto:pidhorskyi.company@gmail.com">
              pidhorskyi.company@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
