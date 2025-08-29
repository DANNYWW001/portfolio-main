import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <p>© {new Date().getFullYear()} YourName. Built with ❤️.</p>
      <div className="socials">
        <a href="#" aria-label="GitHub" className="icon-link">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.7 1.6-1 0 0-.8-.1-1.6-.7-.9-.7-1.1-1.7-1.1-1.7-.2-1.1.3-1.7.3-1.7.7-.1 1.6.5 1.6.5.5-1.5 1.6-2.1 2.7-2.1s2.2.6 2.7 2.1c0 0 .9-.6 1.6-.5 0 0 .5.6.3 1.7 0 0-.2 1-.9 1.7-.8.6-1.6.7-1.6.7.8.3.6 1.1 1.6 1 .6-.1 1.7-1 1.7-1 0 0 .6-1 1.7-1.1 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.5 0 0-.7 2.2-3.9 1.5v2c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
          </svg>
        </a>
        <a href="#" aria-label="LinkedIn" className="icon-link">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.5c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v5.58h-3v-10h2.88v1.37h.04c.4-.76 1.39-1.55 2.86-1.55 3.06 0 3.62 2.01 3.62 4.62v5.56z" />
          </svg>
        </a>
        <a
          href="mailto:your@email.com"
          aria-label="Email"
          className="icon-link"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 13.5 0 6V4l12 7.5L24 4v2l-12 7.5z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
