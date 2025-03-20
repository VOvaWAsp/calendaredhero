import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.container}>
      <h2 className={css.logo}>Logo</h2>
      <nav className={css.nav}>
        <a className={css.link} href="">
          Home
        </a>
        <a className={css.link} href="">
          About us
        </a>
        <a className={css.link} href="">
          Services
        </a>
        <a className={css.link} href="">
          Contact
        </a>
      </nav>
    </div>
  );
}
