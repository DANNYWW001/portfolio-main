import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { FaArrowCircleUp } from "react-icons/fa";
import profileImg from "../assets/portfolioimage1.jpg";
import profileImgI from "../assets/portfolioimage2.jpg";

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
            CONTACT ME{" "}
            {isSmallScreen ? (
              <BiSolidRightTopArrowCircle size="1.5em" />
            ) : (
              <GoDotFill />
            )}
          </a>
          <div className="social-icons first-social">
            <a href="#">
              <BiLogoLinkedin />
            </a>{" "}
            <a href="https://www.instagram.com/thehardway_ishard?igsh=c3B3ZDVsNGYyd3B1&utm_source=qr">
              <FaInstagram />
            </a>{" "}
            <a href="https://x.com/_dhardwayishard?s=21">
              <BsTwitterX />
            </a>{" "}
            <a href="https://github.com/DANNYWW001">
              <FaGithub />
            </a>
          </div>
        </div>
        <img src={profileImg} alt="Profile" className="hero-image" />
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
        <img src={profileImgI} alt="Profile" className="short-about-image" />
      </section>
      <section id="connect" className="connect">
        <div className="connect-text">
          <h2>LET'S CONNECT</h2>
          <p>Say hello at olamilekanab005@gmail.com</p>
          <p>
            For more info, here's my{" "}
            <a
              href="https://drive.google.com/file/d/1bUECyqYpjQVq35mnw6qMLDnCG-gQ9hWb/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="resume-link"
            >
              resume
            </a>
          </p>
          <div className="social-icons">
            <a href="#">
              <BiLogoLinkedin />
            </a>{" "}
            <a
              href="https://www.instagram.com/thehardway_ishard?igsh=c3B3ZDVsNGYyd3B1&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>{" "}
            <a
              href="https://x.com/_dhardwayishard?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX />
            </a>{" "}
            <a
              href="https://github.com/DANNYWW001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <ContactForm />
        <p className="copyright">© 2025 ABIOLA OLAMILEKAN</p>
      </section>
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top">
          <p>
            <FaArrowCircleUp color="black" size="3em" />
          </p>
        </button>
      )}
    </main>
  );
};

export default Home;
