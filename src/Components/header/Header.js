import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css"


function Header() {
  // const iconHambergerRef = useRef(null);
  const drawpdownWindowRef = useRef(null);

  const test = () => {
    drawpdownWindowRef.current.classList.toggle("toggelMenuHidden");
    console.log("true");
  };

  return (
    <>
      <nav className=" navbar menu  navbar-expand-lg bg-primary pt-3 position-fixed top-0 w-100">
        <div className="container-fluid">
          <a className="navbar-brand items" href="#">
            لوگو
          </a>
          <span className="iconHamberger" onClick={test}>
            <i class="bi bi-list"></i>
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <NavLink
                  className="nav-link active items"
                  aria-current="page"
                  to="/"
                >
                  صفحه اصلی
                </NavLink>
              </li>

              <li className="nav-item me-4">
                <NavLink className="nav-link items" to="/toturial">
                  دوره های آموزشی
                </NavLink>
              </li>

              <li className="nav-item me-4">
                <NavLink className="nav-link items" to="/FreeEducation">
                  اموزش های رایگان
                </NavLink>
              </li>

              <li className="nav-item me-4 Vip d-flex align-items-center">
                <a className="nav-link items subMenuVIP">
                  پشتیبانی VIP
                </a>
                {/* <i class="bi bi-arrow-down-square-fill text-light pt-1"></i> */}
                <ul className="subMenu position-absolute pt-2 me-5 pb-2">
                  <li>
                    <NavLink
                      to="/spotSupport"
                      className="subMenuItem text-decoration-none text-light pe-3"
                    >
                      پشتیبانی اسپات
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/SpotSupportExtension"
                      className="subMenuItem text-decoration-none text-light pe-3"
                    >
                      تمدید پشتیبانی اسپات
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item me-4">
                <NavLink className="nav-link items" to="/currencyDisplay">
                  نمایش ارزها
                </NavLink>
              </li>

              <li className="nav-item me-4">
                <NavLink className="nav-link items" to="/aboutus">
                  درباره ما
                </NavLink>
              </li>

              <li className="nav-item me-4">
                <NavLink className="nav-link items" to="/contactus">
                  تماس با ما
                </NavLink>
              </li>

              <li className="nav-item me-4">
                <NavLink className="nav-link items" to="/registerAndLogin">
                  ورود و ثبت نام
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* =============================== start hamburgery menu ============================= */}
      <div
        className="toggelMenu w-50 bg-primary text-light position-fixed start-0 toggelMenuHidden"
        ref={drawpdownWindowRef}
      >
        <ul className="ul d-flex flex-column align-items-end pt-5 ">
          <li className="li pb-3">
            <NavLink to="/">صفحه اصلی</NavLink>
          </li>

          <li className="li pb-3">
            <NavLink to="/toturial">دوره های آموزشی</NavLink>
          </li>

          <li className="li pb-3">
            <NavLink to="/FreeEducation">آموزش رایگان</NavLink>
          </li>

          <li className=" nav-item me-4 Vip">
            <a className="nav-link items subMenuVIP pb-3" >
              پشتیبانی VIP
            </a>
            <ul className="subMenuToggel position-absolute ">
              <li>
                <NavLink
                  to="/spotSupport"
                  className=" text-decoration-none text-light subMenuItemtoggel"
                >
                  پشتیبانی اسپات
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/SpotSupportExtension"
                  className="subMenuItemtoggel text-decoration-none text-light "
                >
                  تمدید پشتیبانی اسپات
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="li pb-3">
            <NavLink to="/currencyDisplay">نمایش ارزها</NavLink>
          </li>

          <li className="li pb-3">
            <NavLink to="/aboutus">درباره ما</NavLink>
          </li>

          <li className="li pb-3">
            <NavLink to="/contactus">تماس با ما</NavLink>
          </li>

          <li className="li pb-3">
            <NavLink to="/registerAndLogin">ورود و ثبت نام</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
