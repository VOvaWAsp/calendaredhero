import { DatePicker } from "@heroui/react";
import { now, getLocalTimeZone } from "@internationalized/date";
import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectOption from "../SelectOption/SelectOption";
import css from "./Calendar.module.css";

export default function Calendar() {
  const [calendarDateTime, setCalendarDateTime] = useState(
    now(getLocalTimeZone())
  );
  const [type, setType] = useState("");
  console.log(calendarDateTime);
  const onSubmit = async (data) => {
    try {
      const formattedDate = `${calendarDateTime.year}-${String(
        calendarDateTime.month
      ).padStart(2, "0")}-${String(calendarDateTime.day).padStart(
        2,
        "0"
      )}, ${String(calendarDateTime.hour).padStart(2, "0")}:${String(
        calendarDateTime.minute
      ).padStart(2, "0")}`;
      const response = await axios.post(
        "https://apdetailapi.onrender.com/api/telegrambooking",
        {
          fullName: data.fullname,
          email: data.email,
          phone: data.phone,
          location: data.location,
          date: formattedDate,
          typeOfWashing: type.value,
        }
      );
      console.log({
        fullName: data.fullname,
        email: data.email,
        phone: data.phone,
        location: data.location,
        date: formattedDate,
        typeOfWashing: type.value,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.FormBlock}>
          <label className={css.labels} htmlFor="">
            <div className={css.blockInput}>
              <h3 className={css.subtitle}>Full name</h3>
              <input
                className={css.input}
                {...register("fullname")}
                placeholder="write your fullname"
                type="text"
              />
            </div>
          </label>
          <label className={css.labels} htmlFor="">
            <hr className={css.hr} />
            <div className={css.blockInput}>
              <h3 className={css.subtitle}>Email</h3>
              <input
                className={css.input}
                {...register("email")}
                placeholder="write your email"
                type="email"
              />
            </div>
          </label>
          <label className={css.labels} htmlFor="">
            <hr className={css.hr} />
            <div className={css.blockInput}>
              <h3 className={css.subtitle}>Phone number</h3>
              <input
                className={css.input}
                {...register("phone")}
                placeholder="write your phone number"
                type="phone"
              />
            </div>
          </label>
          <label className={css.labels} htmlFor="">
            <hr className={css.hr} />
            <div className={css.blockInput}>
              <h3 className={css.subtitle}>location</h3>
              <input
                className={css.input}
                {...register("location")}
                placeholder="write your location"
                type="text"
              />
            </div>
          </label>
          <div className={css.labels}>
            <hr className={css.hr} />
            <div className={css.blockInput}>
              <h3 className={css.subtitle}>Type of washing</h3>
              <SelectOption type={type} setType={setType} />
            </div>
          </div>
          <div className={css.labels}>
            <hr className={css.hr} />
            <div className={css.blockInput}>
              <h3 className={css.subtitle}>Choose date</h3>
              <div className="w-full max-w-xl flex flex-row gap-4">
                <DatePicker
                  onChange={setCalendarDateTime}
                  value={calendarDateTime}
                  hideTimeZone
                  showMonthAndYearPickers
                  label="Event Date"
                  variant="bordered"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={css.BlockBtn}>
        <button className={css.btn} type="submit">Book a wash</button>
        </div>
      </form>
    </div>
  );
}
