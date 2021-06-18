import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import logo from "./image/logo.png";
import "./components.css";
import ArrowUp from "./arrowUp";

function Header() {
  /*this crutch is for adding information on which page you are on*/
  let navActivH = "",
    navActivG = "",
    navActivI = "",
    navActivC = "";
  let navSlide;
  var urlId = window.location.pathname;
  urlId == "/" ? (navActivH = " navActive") : (navActivH = "");
  urlId == "/Gallery" ? (navActivG = " navActive") : (navActivG = "");
  urlId == "/About" ? (navActivI = " navActive") : (navActivI = "");
  urlId == "/Contact" ? (navActivC = " navActive") : (navActivC = "");
  /*position scroll and if >0 add classname)*/
  let [isShow, setisShow] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  scroll > 0 ? (navSlide = " sticky") : (navSlide = "");
  return (
    <>
      <Navbar
        className={"maind__header" + navSlide}
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="navLogo" href="/">
            <img
              src={logo}
              height="21"
              width="82"
              className="d-inline-block logo_white"
              alt="logog"
            />
          </Navbar.Brand>
          <div
            onClick={() => setisShow(!isShow)}
            id=" open-nav"
            className={isShow ? "menu-btn open" : "menu-btn"}
          >
            <Navbar.Toggle>
              <span></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="mr-auto">
              <NavLink className={"navlink" + navActivH} href="/">
                Главная
              </NavLink>
              <NavLink className={"navlink" + navActivG} href="/Gallery">
                Галерея
              </NavLink>
              <NavLink className={"navlink" + navActivI} href="/About">
                Информация
              </NavLink>
              <NavLink className={"navlink" + navActivC} href="/Contact">
                Контакты
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ArrowUp scrollStepInPx="50" delayInMs="16.66" />
    </>
  );
}
export default Header;
