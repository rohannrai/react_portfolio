import { ProjectProps } from '../components/ProjectCard';
import hotelImage from '../assets/hotel.jpg';
import geminiImage from '../assets/gemini.jpg';
import dietImage from '../assets/Nutririon.jpg';


export const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: 'Wanderlust : Hotel Listing Website',
    description: 'A full-featured hotel listing platform built with  Node.js, and MongoDB. Features include user authentication, product browsing, cart functionality, and payment processing.',
    image: hotelImage,
    tags: [ 'Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://wonderlust-ekp0.onrender.com/listings',
    codeLink: 'https://github.com/rohannrai/Wonderlust'
  },
  {
    id: 2,
    title: 'Gemini AI Chatbot',
    description: 'Real Time AI Chatbot using Gemini API and React',
    image: geminiImage,
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Gemini API'],
    demoLink: 'https://gemini-clone-ten-pi.vercel.app/',
    codeLink: 'https://github.com/rohannrai/GEMINI_clone'
  },
  {
    id: 3,
    title: 'Diet and Nutrition Website',
    description: 'A feature-rich blogging platform that supports markdown editing, comment sections, and user profiles. Includes a responsive design for all devices.',
    image: dietImage,
    tags: ['React', 'Typescript' , 'Tailwind CSS' , 'HTML' , 'CSS'],
    demoLink: 'https://diet-app-wvnf.vercel.app/',
    codeLink: 'https://github.com/rohannrai/Diet_app'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A real-time weather dashboard that provides detailed weather information, forecasts, and historical data for locations worldwide.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    tags: ['React', 'APIs', 'Chart.js', 'CSS'],
    demoLink: 'https://github.com/rohannrai/Weather',
    codeLink: 'https://github.com/rohannrai/Weather'
  },
   {
    id: 5,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects and skills. Features an animated interface, contact form, and responsive design.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    demoLink: '#',   
    codeLink: '#'
  }
]; 