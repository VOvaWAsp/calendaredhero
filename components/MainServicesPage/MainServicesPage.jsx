import { NavLink } from "react-router-dom";
import css from "./MainServicesPage.module.css";

export default function MainServicesPage() {
  return (
    <div id="services" className={css.container}>
      <h2 className={css.title}>Our services</h2>
      <div className={css.blockServices}>
        <div className={css.blockCar}>
          <div className={css.blockBtn}>
            <NavLink className={css.btn} to='booking' >
              car
            </NavLink>
          </div>
        </div>
        <div className={css.blockTruck}>
          <div className={css.blockBtn}>
            <button className={css.btn} type="button">
              truck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
