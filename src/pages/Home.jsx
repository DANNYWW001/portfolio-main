import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md"; // For small screen arrow
import { FaArrowUp } from "react-icons/fa"; // For scroll to top

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
};

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 639px)");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100 && window.innerWidth < 640);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            CONTACT ME {isSmallScreen ? <MdArrowForwardIos /> : <GoDotFill />}
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
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top">
          <FaArrowUp />
        </button>
      )}
    </main>
  );
};

export default Home;
