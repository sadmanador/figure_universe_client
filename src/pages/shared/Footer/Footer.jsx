import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="glass">
      <footer className="footer p-10 text-base-content">
        <div>
          <img
            src="assets/logo/logo.jpeg"
            alt=""
            className="w-32 mr-2 rounded-full"
          />
          <p>
            Figure Universe Ltd.
            <br />
            Collection of live like figures since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/add" className="link link-hover">
            Insert Figure
          </Link>
          <Link to="/all" className="link link-hover">
            All Figures
          </Link>
          <Link to="/myToys" className="link link-hover">
            My Figures
          </Link>
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">
            <p>
              Shop 218, 2/F, Ctma Centre, <br /> 1N Sai Yeung Choi St South,{" "}
              <br /> Hong Kong, Central and Western, CN
            </p>
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Cookie policy</a>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
          <Link to="/registration" className="link link-hover">
            Register
          </Link>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>
            <small>
              Copyright © 2023 - All right reserved by Figure Universe
              Industries Ltd
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
