import React from "react";
import { Link } from "react-router-dom";
import whatsappImg from "./images/whatsapp def.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Contact() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={whatsappImg} alt="whatsapp def" className="img-fluid" style={{ height: "50px", width: "auto" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/form" className="nav-link">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link to="/quoi" className="nav-link">Inscription</Link>
              </li>
              <li className="nav-item">
                <Link to="/connexion" className="nav-link">Connexion</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">Contact</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/*Même container que la navbar pour aligner */}
      <div className="container mt-3">
        <div className="text-center mb-4">
          <h3>CONTACT US</h3>
          <h1>Send A Message</h1>
        </div>

        <div className="row">
          {/*Colonne gauche : informations de contact */}
          <div className="col-md-6">
            <p className="fs-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              <strong>Visit Us</strong><br />
              Estates Housing Company, 343 marketing, 2214 cravel street, NY-62617
            </p>

            <p className="fs-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
              <strong>Call Us</strong><br />
              +1 (21) 234 557 4567<br />
              +1 (21) 234 557 4568
            </p>

            <p className="fs-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              <strong>Email Us</strong><br />
              support@mail.com<br />
              contact@mail.com
            </p>
          </div>

          {/*Colonne droite : formulaire */}
          <div className="col-md-6">
            <input className="form-control mb-2" type="text" placeholder="Your Name*" aria-label="Your Name" />
            <input className="form-control mb-2" type="email" placeholder="Your Email*" aria-label="Your Email" />
            <input className="form-control mb-2" type="text" placeholder="Subject*" aria-label="Subject" />
            <input className="form-control mb-2" type="url" placeholder="Website URL*" aria-label="Website URL" />
            <textarea className="form-control mb-2" placeholder="Your Message*" id="floatingTextarea2" style={{ height: "100px" }} />
            <div className="text-end">
              <button className="btn btn-primary mt-2" type="submit">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;