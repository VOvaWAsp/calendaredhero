import {DatePicker} from "@heroui/react";
import {now, getLocalTimeZone} from "@internationalized/date";
import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import SelectOption from "../SelectOption/SelectOption";

export default function Calendar() {
  const [calendarDateTime, setCalendarDateTime] = useState(now(getLocalTimeZone()));
  const [type, setType] = useState("")
  console.log(calendarDateTime)
  const onSubmit = async(data) => {
    try {
      const formattedDate = `${calendarDateTime.year}-${String(calendarDateTime.month).padStart(2, "0")}-${String(calendarDateTime.day).padStart(2, "0")}, ${String(calendarDateTime.hour).padStart(2, "0")}:${String(calendarDateTime.minute).padStart(2, "0")}`;
      const response = await axios.post("https://apdetailapi.onrender.com/api/telegrambooking", {
        fullName: data.fullname,
        email: data.email,
        phone: data.phone,
        location: data.location,
        date: formattedDate,
        typeOfWashing: type.value
      });
      console.log({
        fullName: data.fullname,
        email: data.email,
        phone: data.phone,
        location: data.location,
        date: formattedDate,
        typeOfWashing: type.value
      })
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Book a wash</h2>
      <div>
        <label htmlFor="">
          <h3>Full name</h3>
          <input {...register("fullname")} placeholder="write your fullname" type="text" />
        </label>
        <label htmlFor="">
          <h3>Email</h3>
          <input {...register("email")} placeholder="write your email" type="email" />
        </label>
        <label htmlFor="">
          <h3>Phone number</h3>
          <input {...register("phone")} placeholder="write your phone number" type="phone" />
        </label>
        <label htmlFor="">
          <h3>location</h3>
          <input {...register("location")} placeholder="write your location" type="text" />
        </label>
        <div>
          <h3>Choose date</h3>
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
        <SelectOption type={type} setType={setType} />
      </div>
      <button type="submit">Book a wash</button>
    </form>
    </>
  );
}
