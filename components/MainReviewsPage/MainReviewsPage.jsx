import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "react-rating";
import css from "./MainReviewsPage.module.css";
import "font-awesome/css/font-awesome.min.css";
import sprite from "../../images/sprite/sprite.svg";

export default function MainReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const swiperButtonPrev = useRef(null);
  const swiperButtonNext = useRef(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get(
          "https://apdetailapi.onrender.com/api/reviews"
        );
        console.log(response.data);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Reviews</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={{
          prevEl: swiperButtonPrev.current,
          nextEl: swiperButtonNext.current,
        }}
        modules={[Navigation]}
        className={css.swiper}
      >
        {reviews.map((item) => {
          return (
            <SwiperSlide className={css.blockReviews} key={item._id}>
              <div className={css.blockInfo}>
                <div className={css.blocksvg}>
                  <svg className={css.svg}>
                    <use href={`${sprite}#icon-person`}></use>
                  </svg>
                </div>
                <div className={css.blockRate}>
                  <div className={css.rateAndName}>
                    <h3 className={css.subtitle}>{item.name}</h3>
                    <Rating
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                      initialRating={parseFloat(item.rating)}
                      readonly
                    />
                  </div>
                  <p className={css.date}>53.534654</p>
                </div>
              </div>
              <div>
                <p className={css.text}>{item.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Кастомні стрілки */}
      <div ref={swiperButtonPrev} className={css.swiperButtonPrev}>
        <svg>
          <use href={`${sprite}#icon-arrowleft`}></use>
        </svg>
      </div>
      <div ref={swiperButtonNext} className={css.swiperButtonNext}>
        <svg>
          <use href={`${sprite}#icon-arrowright`}></use>
        </svg>
      </div>
    </div>
  );
}
