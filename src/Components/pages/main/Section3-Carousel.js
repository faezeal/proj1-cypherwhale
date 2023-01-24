import Carousel from "react-bootstrap/Carousel";
import React from "react";
import './section3-Carousel.css';

function Section3Carousel() {
  return (
    <div className="carouselDiv">
      <Carousel className="carousel d-flex flex-column pt-2">
        <Carousel.Item className="carouselItem">
          <div className="img">عکس</div>
          <Carousel.Caption className="carouselCaption">
            <div className="fs-3">مقاله اول</div>
            <p>
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carouselItem">
          <div className="img">عکس</div>
          <Carousel.Caption className="carouselCaption">
            <div className="fs-3">مقاله دوم</div>
            <p>
              سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
              زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carouselItem">
          <div className="img">عکس</div>
          <Carousel.Caption className="carouselCaption">
            <div className="fs-3">مقاله سوم</div>
            <p>
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طی
              زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carouselItem">
          <div className="img">عکس</div>
          <Carousel.Caption className="carouselCaption">
            <div className="fs-3">مقاله چهارم</div>
            <p>
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
              زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Section3Carousel;
