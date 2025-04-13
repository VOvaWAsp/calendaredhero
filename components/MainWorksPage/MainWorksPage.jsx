import css from "./MainWorksPage.module.css";

export default function MainWorksPage() {
  return (
    <div id="about" className={css.container}>
      <div className={css.gridContainer}>
        <div className={css.gridItem}>
          <h2 className={css.title}>OUR</h2>
        </div>
        <div className={css.gridImage1}></div>
        <div className={css.gridItem}>
          <h2 className={css.title}>WORKS</h2>
        </div>
        <div className={css.gridImage2}></div>
        <div className={css.gridItem}>
          <button className={css.btn} type="button">see more</button>
        </div>
        <div className={css.gridImage3}></div>
      </div>
    </div>
  );
}
