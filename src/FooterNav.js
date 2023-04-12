import React from "react";
import "./FooterNav.css";

const FooterNav = ({ data, className }) => {
  const { id, title, links } = data;
  return (
    <nav className={className}>
      <h2 className="footer-nav__title font-section-categories">{title}</h2>
      <ul className="footer-nav__nav-items font-paragraph-text">
        {links.map((link, index) => {
          const key = id + index;
          if (link.href.length) {
            return (
              <li className="footer-nav__nav-item" key={key}>
                <a href={link.href} className="footer-nav__link">
                  {link.text}
                </a>
              </li>
            );
          } else {
            return (
              <li className="footer-nav__nav-item" key={key}>
                <address className="footer-nav__link">{link.text}</address>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default FooterNav;
