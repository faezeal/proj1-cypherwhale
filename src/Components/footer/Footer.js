import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css"

function Footer() {
  return (
    <div className="containerFooter row d-flex  mt-5 bg-primary">
      <div className="clmnFooter col-12 col-xl-3 col-lg-3 col-md-12 d-flex flex-column  align-items-center text-light">
        <div className="titleFooter fs-4 text-secondary pt-4 pb-2">
          صفحات اصلی
        </div>{" "}
        <hr />
        <div className="itemFooter pb-3">
          <NavLink
            to="/"
            className="navlinkfooter text-decoration-none text-light"
          >
            صفحه اصلی
          </NavLink>
        </div>
        {/* <div className="itemFooter pb-3">
          <NavLink
            to="/"
            className="navlinkfooter text-decoration-none text-light"
          >
            دوره های آموزشی
          </NavLink>
        </div> */}
        <div className="itemFooter pb-3">
          <NavLink
            to="/aboutus"
            className="navlinkfooter text-decoration-none text-light"
          >
            درباره ما
          </NavLink>
        </div>
        <div className="itemFooter pb-3">
          <NavLink
            to="/contactus"
            className="navlinkfooter text-decoration-none text-light"
          >
            {" "}
            تماس با ما
          </NavLink>
        </div>
      </div>

      <div className="clmnFooter col-12 col-xl-3 col-lg-3 col-md-12 d-flex flex-column  align-items-center text-light">
        <div className="titleFooter fs-4 text-secondary pt-4 pb-2">
          پشتیبانی VIP
        </div>{" "}
        <hr />
        <div className="itemFooter pb-3">
          <NavLink
            to="/"
            className="navlinkfooter text-decoration-none text-light"
          >
            تمدید پشتیبانی اسپات
          </NavLink>
        </div>
        <div className="itemFooter pb-3">
          <NavLink
            to="/"
            className="navlinkfooter text-decoration-none text-light"
          >
            پشتیبانی اسپات
          </NavLink>
        </div>
      </div>

      <div className="clmnFooter col-12 col-xl-3 col-lg-3 col-md-12 d-flex flex-column align-items-center  text-light">
        <div className="titleFooter fs-4 text-secondary pt-4 pb-2">
          تماس با ما
        </div>{" "}
        <hr />
        <div className="itemFooter pb-3">شماره تماس 09226121009</div>
        <div className="itemFooter pb-3">ساعت مراجعه حضوری 9 تا 18</div>
        <div className="itemFooter pb-3">
          تهران- میدان انقلاب- خیابان کارگر جنوبی- پلاک 954- واحد 2
        </div>
      </div>

      <div className="clmnFooter col-12 col-xl-3 col-lg-3 col-md-12 d-flex flex-column align-items-center text-light">
        <div className="titleFooter fs-4 text-secondary pt-4 pb-2">
          صفحه اجتماعی
        </div>
        <div className="iconsFooter pt-4">
          <a href="https://www.google.com/">
            <i class="iconFooter bi bi-whatsapp fs-4"></i>
          </a>
          <a href="https://www.google.com/">
            <i class="iconFooter bi bi-instagram fs-4"></i>
          </a>
          <a href="https://www.google.com/">
            <i class="iconFooter bi bi-twitter fs-4"></i>
          </a>
          <a href="https://www.google.com/">
            <i class="iconFooter bi bi-linkedin fs-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
