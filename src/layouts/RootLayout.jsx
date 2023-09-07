import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="header">
        <NavLink to="mailto:4000@dinmaegler.com">4000@dinmaegler.com</NavLink>
        <NavLink to="tel:+4570704000">+45 7070 4000</NavLink>
        <NavLink className="login-btn" to="/login">log ind</NavLink>
        <NavLink className="login-btn" to="/signup">sign up</NavLink>
      </header>
      <header className="sub-header">
        <NavLink to="/" className="logo"><img className="logo-img" src={logo} alt="logo" /></NavLink>
        <span className="sub-header_links">
          <NavLink to="/houses">boliger til salg</NavLink>
          <NavLink to="/maeglere">Mæglere</NavLink>
          <NavLink to="/favorites">Mine favoritter</NavLink>
          <NavLink to="/contact">Kontakt os</NavLink>
        </span>
      </header>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <div className="footer_div">
          <NavLink to="/" className="logo"><img className="logo-img" src={logo} alt="logo" /></NavLink>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
          <div className="footer-lists">
          <div className="contact-list">
            <NavLink to="mailto:4000@dinmaegler.com">4000@dinmaegler.com</NavLink>
            <NavLink to="tel:+4570704000">+45 7070 4000</NavLink>
            <NavLink to="/login">log ind</NavLink>
            <p>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
          </div>
          <div className="footer_sub-links">
            <h3>Quick Links</h3>
            <NavLink to="/houses">boliger til salg</NavLink>
            <NavLink to="/maeglere">Mæglere</NavLink>
            <NavLink to="/favorites">Mine favoritter</NavLink>
            <NavLink to="/contact">Kontakt os</NavLink>
          </div>
          </div>
          <div>
            <h3 className="certifaction">
              <span>Medlem af </span>DMS{" "}
              <span>Dansk Mægler Sammenslutning</span>
            </h3>
          </div>
          <div>
            <small>Layout By Jit Banik 2020</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
