import sprite from "../../images/sprite/sprite.svg";
import css from './MainAdvantagesPage.module.css'

export default function MainAdvantagesPage() {
  return (
    <div className={css.container}>
      <h2 className={css.heroTitle}>Our advantages</h2>
      <div className={css.block}>
        <div className={css.infoCard}>
          <div className={css.blockIcon}>
          <svg className={css.svg}>
            <use href={`${sprite}#icon-succsefful`}></use>
          </svg>
          <h3 className={css.title}>Quality</h3>
          </div>
          <p className={css.text}>
            Professional care with top- grade products for a flawless finish.
          </p>
        </div>
        <div className={css.infoCard}>
          <div className={css.blockIcon}>
          <svg className={css.svg}>
          <use className={css.svg} href={`${sprite}#icon-location`}></use>
          </svg>
          <h3 className={css.title}>Location</h3>
          </div>
          <p className={css.text}>We come to your location at your convenience.</p>
        </div>
        <div className={css.infoCard}>
          <div className={css.blockIcon}>
          <svg className={css.svg}>
          <use href={`${sprite}#icon-safe`}></use>
          </svg>
          <h3 className={css.title}>Protection</h3>
          </div>
          <p className={css.text}>Hand-wash that's safe for your car, unlike automatic washes.</p>
        </div>
        <div className={css.infoCard}>
          <div className={css.blockIcon}>
          <svg className={css.svg}>
          <use href={`${sprite}#icon-available`}></use>
          </svg>
          <h3 className={css.title}>Price</h3>
          </div>
          <p className={css.text}>High-quality service at a fair price.</p>
        </div>
      </div>
    </div>
  );
}
