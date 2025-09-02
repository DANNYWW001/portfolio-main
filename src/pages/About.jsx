import React, { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

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

const About = () => {
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
      <section className="about">
        <div className="about-text">
          <h2>ABOUT ME</h2>
          <p>
            I am a passionate Full-Stack Developer with a strong creative drive
            and a deep appreciation for the role of technology in shaping modern
            Nigeria. With a blend of analytical problem-solving skills and
            creativity, I design and develop accessible, user-friendly, and
            visually engaging web applications.
          </p>
          <p>
            Over the years, I have honed my expertise in full-stack development
            through consistent practice, real-world projects, and professional
            experiences. From building intuitive user interfaces to writing
            clean, efficient code, I take pride in transforming ideas into
            impactful digital solutions. My goal is not only to solve technical
            challenges but also to create products that deliver meaningful value
            and positive change. Currently, I am exploring React.js, Webflow.
            Outside of coding, I enjoy playing football, exploring fashion, and
            reading. I strongly believe that learning never stops, and I
            continually seek opportunities to grow both personally and
            professionally.
          </p>
          <button className="resume-btn">
            DOWNLOAD RESUME {isSmallScreen ? <IoMdDownload  size="1.5em"/> : <GoDotFill />}{" "}
          </button>
          <div className="social-icons first-social">
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
          src="https://via.placeholder.com/600x800?text=Profile"
          alt="Profile"
          className="about-image"
        />
      </section>
      <section className="capabilities">
        <h2>MY CAPABILITIES</h2>
        <p>
          I am a passionate and adaptable Web Developer focused on building
          clean, efficient, and accessible web solutions. With expertise in both
          front-end and back-end development, alongside a strong grasp of UI/UX
          design and tools like Figma, I create seamless digital experiences
          that balance functionality and design. I thrive on solving problems,
          learning new technologies, and contributing to projects that are
          user-centered, impactful, and aligned with modern development trends.
        </p>
        <div className="skills">
          <span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span>{" "}
          <span>JQUERY</span> <span>ACCESSIBILITY</span> <span>FIGMA</span>{" "}
          <span>TAILWIND CSS</span>
        </div>
      </section>
      <section className="experience">
        <h2>MY EXPERIENCE</h2>
        <div className="exp-item">
          <h3>Freelance Developer</h3>
          <p>Nov 2023 - Present</p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="exp-item">
          <h3>Front-End Developer</h3>
          <p>Sep 2023 - Nov 2024</p>
          <p>18IT</p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="exp-item">
          <h3>Full-stack intern</h3>
          <p>Dec 2024 - Present</p>
          <p>Tech Studio</p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </div>
      </section>
      <section id="connect" className="connect">
        <div className="connect-text">
          <h2>LET'S CONNECT</h2>
          <p>Say hello at olamilekanab005@gmail.com</p>
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
          <TbArrowBigUpFilled color="var(--black)"/>
        </button>
      )}
    </main>
  );
};

export default About;
