import React from "react";
import Container from "./Container";
import FooterNav from "./FooterNav";
import { footerData } from "./constants/data";
import "./Footer.css";
import Logo from "./images/Logo_Framed_Monochromatic.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container--footer">
        <div className="footer__logo-container">
          <img src={Logo} alt="Little Lemon's logo" className="footer__logo" />
        </div>
        <ul className="footer__navs">
          {footerData.map((data) => (
            <FooterNav
              key={data.id}
              data={data}
              className="footer__nav"
            ></FooterNav>
          ))}
        </ul>
        {/* <nav>
          <span>Doormat Navigation</span>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
        <nav>
          <span>Contact</span>
          <ul>
            <li>
              <address>2263 John Calvin Drive</address>
            </li>
            <li>
              <a href="tel:+17089308580">708-930-8580</a>
            </li>
            <li>
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </li>
          </ul>
        </nav>
        <nav>
          <span>Social Media Links</span>
          <ul>
            <li>
              <a href="https://facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.youtube.com">YouTube</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
          </ul>
        </nav> */}
      </Container>
    </footer>
  );
};

export default Footer;
