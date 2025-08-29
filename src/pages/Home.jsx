import React from "react";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-text">
          <h1>HI, I AM ABIOLA OLAMILEKAN OPEYEMI.</h1>
          <p>
            A Nigerian Full-stack developer passionate about creating accessible
            and user-friendly websites.”
          </p>
          <a href="#connect" className="cta-btn">
            CONTACT ME <BsArrowUpRightCircleFill />
          </a>
          <div className="social-icons">
            <a href="#">
              <BiLogoLinkedin />
            </a>{" "}
            <a href="#">
              <FaInstagram />
            </a>{" "}
            <a href="#">
              <BsTwitterX />
            </a>{" "}
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/400?text=Profile"
          alt="Profile"
          className="hero-image"
        />
      </section>
      <Projects /> {/* Now using the modular Projects component */}
      <section className="short-about">
        <div className="short-about-text">
          <h2>ABOUT ME</h2>
          <p>
            I am a passionate Full-Stack Developer with a strong creative drive
            and a deep appreciation for the role of technology in shaping modern
            Nigeria. With a blend of analytical problem-solving skills and
            creativity, I design and develop accessible, user-friendly, and
            visually engaging web applications.
          </p>
          <Link to="/about" className="more-link">
            MORE ABOUT ME
          </Link>
        </div>
        <img
          src="https://via.placeholder.com/400?text=Profile"
          alt="Profile"
          className="short-about-image"
        />
      </section>
      <section id="connect" className="connect">
        <div className="connect-text">
          <h2>LET'S CONNECT</h2>
          <p>Say hello at robertgarcia@gmail.com</p>
          <p>
            For more info, here's my{" "}
            <a href="#" className="resume-link">
              resume
            </a>
          </p>
          <div className="social-icons">
            <a href="#">
              <BiLogoLinkedin />
            </a>{" "}
            <a href="#">
              <FaInstagram />
            </a>{" "}
            <a href="#">
              <BsTwitterX />
            </a>{" "}
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
        <ContactForm />
        <p className="copyright">© 2025 ABIOLA OLAMILEKAN</p>
      </section>
    </main>
  );
};

export default Home;
