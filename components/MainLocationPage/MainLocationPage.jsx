import css from "./MainLocationPage.module.css";

export default function MainLocationPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Location</h2>
      <div className={css.maps}>
        <div className={css.blockLocation}>
          <h2 className={css.subtitle}>Map</h2>
          <hr className={css.line} />
          <h3 className={css.mainText}>*including neighboring arear*</h3>
          <div className={css.sectionLocation}>
            <ul className={css.list}>
              <li className={css.text}>Downtown </li>
              <li className={css.text}>Northbrook</li>
              <li className={css.text}>Evanston</li>
              <li className={css.text}>Wilmette</li>
              <li className={css.text}>Winnetka</li>
            </ul>
            <ul className={css.list}>
              <li className={css.text}>Highland Park </li>
              <li className={css.text}>Rogers Park</li>
              <li className={css.text}>Vernon Hills</li>
              <li className={css.text}>Lake Zurich</li>
              <li className={css.text}>Oak Brook</li>
            </ul>
            <ul className={css.list}>
              <li className={css.text}>Wheeling </li>
              <li className={css.text}>Schaumburg</li>
              <li className={css.text}>Aurora</li>
              <li className={css.text}>Naperville</li>
              <li className={css.text}>Niles</li>
            </ul>
            <ul className={css.list}>
              <li className={css.text}>Arlington Heights </li>
              <li className={css.text}>Park Ridge</li>
              <li className={css.text}>Skokie</li>
              <li className={css.text}>Glenview</li>
              <li className={css.text}>Des Plaines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
