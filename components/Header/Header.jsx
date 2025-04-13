import { NavLink, useNavigate } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return (
    <div className={css.container}>
      <h2 className={css.logo}>Logo</h2>
      <nav className={css.nav}>
        <button
          className={css.link}
          href=""
          onClick={() => handleNavigate("home")}
        >
          Home
        </button>
        <button
          className={css.link}
          href=""
          onClick={() => handleNavigate("about")}
        >
          About us
        </button>
        <button
          className={css.link}
          href=""
          onClick={() => handleNavigate("services")}
        >
          Services
        </button>
        <button
          className={css.link}
          href=""
          onClick={() => handleNavigate("contact")}
        >
          Contact
        </button>
      </nav>
    </div>
  );
}
