import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./section7-News.css";

function Section7News() {
  return (
    <div>
      <Container>
        <div className="title d-flex justify-content-center pt-5 pb-4">
          آخرین اخبار بیت کوین
        </div>

        <div className="d-flex row justify-content-center align-items-center">
          {/* ====================== Card1 =======================*/}
          <div className=" col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <Card style={{ width: "25rem" }} >
              {/* <Card.Img variant="top" src="../../../../coinsss.jpg" /> */}
              <div className="imgCard"></div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-center align-items-center">
                  آموزش خرید و فروش اتوماتیک ارز
                </Card.Title>
                <Card.Text className="textCard d-flex justify-content-center align-items-center mt-3 mb-3">
                  ترید (Trade) ارز دیجیتال به معامله یا خرید و فروش بیت کوین و
                  ارزهای دیجیتال گفته می‌شود که با هدف کسب سود انجام می‌گیرد.
                  فرد معامله‌گر یا تریدر با هدف کسب سود از نمودارهای قیمتی،
                  اخبار بازار و رویدادهای آتی بازار استفاده می‌کند.
                </Card.Text>
                <Button variant="secondary d-flex justify-content-center align-items-center">
                  ادامه مطلب
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* ====================== Card2 =======================*/}
          <div className=" col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <Card style={{ width: "25rem" }}>
              {/* <Card.Img variant="top" src="../../../../coinsss.jpg" /> */}
              <div className="imgCard2"></div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-center align-items-center">
                  آموزش خرید اتریوم
                </Card.Title>
                <Card.Text className="textCard d-flex justify-content-center align-items-center mt-3 mb-3">
                  ترید (Trade) ارز دیجیتال به معامله یا خرید و فروش بیت کوین و
                  ارزهای دیجیتال گفته می‌شود که با هدف کسب سود انجام می‌گیرد.
                  فرد معامله‌گر یا تریدر با هدف کسب سود از نمودارهای قیمتی،
                  اخبار بازار و رویدادهای آتی بازار استفاده می‌کند.
                </Card.Text>
                <Button variant="secondary d-flex justify-content-center align-items-center">
                  ادامه مطلب
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* ====================== Card3 =======================*/}
          <div className=" col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
            <Card style={{ width: "25rem" }}>
              {/* <Card.Img variant="top" src="../../../../coinsss.jpg" /> */}
              <div className="imgCard3"></div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-center align-items-center">
                  آموزش خرید بیت کوین
                </Card.Title>
                <Card.Text className="textCard d-flex justify-content-center align-items-center mt-3 mb-3">
                  ترید (Trade) ارز دیجیتال به معامله یا خرید و فروش بیت کوین و
                  ارزهای دیجیتال گفته می‌شود که با هدف کسب سود انجام می‌گیرد.
                  فرد معامله‌گر یا تریدر با هدف کسب سود از نمودارهای قیمتی،
                  اخبار بازار و رویدادهای آتی بازار استفاده می‌کند.
                </Card.Text>
                <Button variant="secondary d-flex justify-content-center align-items-center">
                  ادامه مطلب
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Section7News;
