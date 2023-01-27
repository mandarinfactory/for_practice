import React from 'react';
import CompMenu from './CompMenu';

const CompFooter = () => {
  return (
    <footer>
      <figure className="bg_top">
        <img src={require('../asset/img/footer/footer-bottom.png')} alt="" />
      </figure>
      <div className="inner">
        <nav className="fnb">
          <CompMenu />
        </nav>
        <nav className="sns">
          <a href="#">
            <i style={{ color: "var(--pink)" }} className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i style={{ color: "var(--pink)" }} className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="#">
            <i style={{ color: "var(--pink)" }} className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="#">
            <i style={{ color: "var(--pink)" }} className="fa-brands fa-twitch"></i>
          </a>
          <a href="#">
            <i style={{ color: "var(--pink)" }} className="fa-brands fa-youtube"></i>
          </a>
        </nav>
        <p className="copy">
          Dance Studio. Branch Studio Dublin &copy; All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default CompFooter;