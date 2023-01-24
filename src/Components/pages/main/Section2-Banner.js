import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/esm/Button";
import "./section2-Banner.css";

function Section2Banner() {
  return (
    <div className="section2 col-xl-12 d-flex justify-content-center align-items-center">
      <Container className="container">
        <div className="divHeader d-flex  justify-content-center align-items-center pt-5 pb-5">
          <h2>چرا سایفروال؟</h2>
        </div>
        <Row>
          <Col xl={6} sm={12}>
            <Nav className="list flex-column p-3">
              <Nav.Link className="listItem d-flex ">
                <i className=" icon bi bi-cash-coin ps-3"></i>
                <h4>مدیریت موجودی کیف پول</h4>
              </Nav.Link>

              <Nav.Link className=" listItem d-flex ">
                <i className=" icon bi bi-currency-bitcoin ps-3"></i>
                <h4>خرید و فروش بیت کوین</h4>
              </Nav.Link>

              <Nav.Link className="listItem d-flex ">
                <i className=" icon bi bi-coin ps-3"></i>
                <h4>برنامه ریزی سرمایه گذاری</h4>
              </Nav.Link>

              <Nav.Link className="listItem d-flex ">
                <i className=" icon bi bi-cash-coin ps-3"></i>
                <h4>بازرگانی فوری</h4>
              </Nav.Link>
            </Nav>
          </Col>
          <Col xl={6} sm={12} className="d-flex flex-column align-items-center">
            <div className="imgDiv"></div>
            <div className="btnDiv  d-flex justify-content-left align-items-center pt-3">
              {/* <Button variant="secondary" className="btn">
                دانلود اپلیکیشن
              </Button> */}
              <button className="custom-btn btn-12">
                <span className="fs-4 ">دانلود</span>
                <span className="fs-4 ">اپلیکیشن</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section2Banner;

{
  /* <Nav className="list flex-column p-3">
          <Nav.Link className="listItem d-flex ">
            <i className=" icon bi bi-cash-coin ps-3"></i>
            <h5>مدیریت موجودی کیف پول</h5>
          </Nav.Link>

          <Nav.Link className=" listItem d-flex ">
            <i className=" icon bi bi-currency-bitcoin ps-3"></i>
            <h5>خرید و فروش بیت کوین</h5>
          </Nav.Link>

          <Nav.Link className="listItem d-flex ">
            <i className=" icon bi bi-coin ps-3"></i>
            <h5>برنامه ریزی سرمایه گذاری</h5>
          </Nav.Link>

          <Nav.Link className="listItem d-flex ">
            <i className=" icon bi bi-cash-coin ps-3"></i>
            <h5>بازرگانی فوری</h5>
          </Nav.Link>
        </Nav> */
}
