import React from "react";
import { Container } from "react-bootstrap";
import Calculator from "./Calculator";
import "./section6-CalcBox.css";

function Section6CalcBox() {
  return (
    <div>
      <Container className="container pt-3 pb-3">
        <div className="d-flex row">
          <div className="text col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="fs-3">محاسبه قیمت بیت کوین</div>

            <Calculator />
          </div>
          <div className="img col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 bg-secondary">
            عکس
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Section6CalcBox;
