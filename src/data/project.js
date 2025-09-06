import torriimage from "../assets/torrigateimage.png";
import fyloimage from "../assets/fyloimage.png";
import movieappimage from "../assets/movieappimage.png";
import impulseimage from "../assets/impulseimage.png";
import trexximage from "../assets/trexximage.png";

export const projects = [
  {
    type: "Conceptual Work, after a good learning of Backend Development",
    image: torriimage,
    alt: "Torii gate",
    title: "TORII-GATE",
    description:
      "The Torii Gate Web Application is a full-stack project developed in collaboration with a team of frontend and backend developers. Built with React functional components, hooks, React Router, and Tailwind CSS, it delivers a clean, responsive, and engaging user experience. The app features a secure login and sign-up system with credential recovery, along with role-based access control to distinguish permissions between users and admins. Users can upload and manage profile images, adding personalization to their accounts. UI enhancements such as sliders, modals, transitions, and animations make the interface more interactive. The frontend integrates seamlessly with backend APIs for authentication and data management. Finally, the project was deployed on Vercel, ensuring speed, scalability, and global accessibility.",
    year: 2025,
    role: "Full-Stack Developer",
    liveUrl: "https://torri-gate-frontend-lekan.vercel.app/",
    githubUrl: [
      {
        label: "Frontend",
        url: "https://github.com/DANNYWW001/torri-gate-frontend.git",
      },
      {
        label: "Backend",
        url: "https://github.com/DANNYWW001/torri-gate-backend.git",
      },
    ],
  },
  {
    type: "Conceptual Work",
    image: trexximage,
    alt: "Trexx Cars",
    title: "TREXX BUY-CARS",
    description:
      "The Trexxx Buy-Cars Web App is a personal project built with React and Tailwind CSS. It integrates API data fetching to dynamically display car listings and includes user-friendly forms. I used animations, transitions, and hover effects to create an engaging interface, supported by Bootstrap Icons. The app is fully responsive across all devices, focusing on smooth UI and accessibility. Deployed with Vercel, it delivers fast performance and easy access online.",
    year: 2025,
    role: "Front-end Developer",
    liveUrl: "https://trexxx-buy-cars.vercel.app/",
    githubUrl: "https://github.com/DANNYWW001/buyCars.git",
  },
  {
    type: "CONCEPTUAL WORK",
    image: impulseimage,
    alt: "Impulse-blog",
    title: "MYIMPULSE",
    description:
      "The MyImpulse Landing Page is a React project built with a focus on sleek styling and responsiveness. I included dummy Bootstrap Icons, such as a hamburger menu icon, to enrich the design aesthetic. The site features a Contact Us route, where users can fill out a form to send messages. Built with Tailwind CSS, it combines smooth styling with hover effects and transitions. Deployed on Vercel, the project highlights both design quality and practical functionality.",
    client: "IMPULSE",
    year: 2024,
    role: "Front-end Developer",
    liveUrl: "https://myimpulse-project.vercel.app/",
    githubUrl: "https://github.com/DANNYWW001/impulse-project.git",
  },
  {
    type: "Challenge",
    image: fyloimage,
    alt: "fylo-landing-page",
    title: "FYLO",
    description:
      "The Fylo Landing Page is a React project designed as a clean, modern landing experience. I used Tailwind CSS for styling, ensuring a responsive and visually appealing layout. React Router handled navigation between sections for smooth user flow. The UI was built with reusable functional components and React libraries for efficiency. Deployed on Vercel, it’s fully optimized for fast, cross-device accessibility.",
    client: "FYLO TECH",
    year: 2024,
    role: "Front-end Developer",
    liveUrl: "https://fylo-landing-page-gamma-three.vercel.app/",
  },

  {
    type: "Challenge: Mastering different use of javascript in react",
    image: movieappimage,
    alt: "Movie-App",
    title: "MOVIE APP",
    description:
      "The Lekan Movie App was an early project used to learn HTML and CSS comprehensively. I integrated a movie API, dynamically mapping and rendering data into the UI. React Router was used to navigate between movie lists and details. This project also marked my growth in API integration, routing, and the use of React libraries.",
    year: 2023,
    role: "Front-end Developer",
    liveUrl: "https://lekan-movie-app.vercel.app/",
  },
  // Add more projects here as needed
];
