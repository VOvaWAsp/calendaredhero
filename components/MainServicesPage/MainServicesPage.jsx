import css from "./MainServicesPage.module.css";

export default function MainServicesPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Our services</h2>
      <div className={css.blockServices}>
        <div className={css.blockCar}>
          <div className={css.blockBtn}>
            <button className={css.btn} type="button">
              car
            </button>
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
