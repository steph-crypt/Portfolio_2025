import './App.css';
import { ReactComponent as React } from './icons/react-svgrepo-com.svg';
import { ReactComponent as Typescript } from './icons/typescript-icon-svgrepo-com.svg';
import { ReactComponent as NextJs } from './icons/next-js-svgrepo-com.svg';
import { ReactComponent as Python } from './icons/python-svgrepo-com.svg';
import { ReactComponent as Javascript } from './icons/javascript-svgrepo-com.svg';
import { ReactComponent as Ruby } from './icons/rails-svgrepo-com.svg';
import { ReactComponent as GitHub } from './icons/github-svgrepo-com.svg';
import { ReactComponent as Linkedin } from './icons/linkedin-svgrepo-com.svg';
import { ReactComponent as Download } from './icons/download-minimalistic-svgrepo-com.svg';


import pdf from "./Sofia Stephenson - CV 2025 (1).pdf"


export default function App() {
  return (
    <div className="portfolio">
      <div className='container'>


      <header className="header">
        <div className="header-wrapper">  
          <h1 className="bounce-header-1">Sofia Stephenson</h1>     
           <h2 className="bounce-header-3">Frontend AI Engineer</h2>
        </div>
  

      <section className="headshot">
        <div className="circle"></div>
        {/* <img className="speech-bubble" src="/—Pngtree—comics explosion cloud dialog_2209268.png" alt="Headshot" />
        <p className="bubble-text">ask me anything</p> */}
        <img className="portrait" src="/ed2ce59c-49d4-4294-9552-f15d813efd20.png" alt="Headshot" />
      </section>
      </header>

    <div className='about'>
      <section className="bio">
        <div className="about-me-wrapper">
          <div className="about-me swirl">
            <h3>About Me</h3>
            <p>
                I am an experienced Frontend engineer with expertise in AI Machine Learning. I build beautiful scalable, mobile-first React and Next.js applications, intelligent chatbots, and train models.
            </p>
          </div>
          <div className="neural-image">
            <img className="pulsating" src="/—Pngtree—human brain neural network connections_21128488.png" alt="neural" />
          </div>
        </div>
        <div className="experience-wrapper">
          <div className="icons pulsating">
              <React />
              <Typescript/>
              <NextJs/>
              <Javascript/>
              <Python/>
              <Ruby/>
          </div>
            <div className="experience swirl">
                <h4>Professional Experience</h4>
                <p>In my 4.5 years as a professional software engineer, I have developed high-performance, user-centric features, modernized legacy systems with TypeScript, and integrated headless CMS solutions to streamline content operations. I’m passionate about creating engaging, interactive experiences, driving data-informed UX improvements, and delivering reliable, high-quality products for global audiences.</p>
            </div>
          
        </div>
      </section>
    </div>

      {/* Projects */}
      <section className="projects">
        <h3>Projects</h3>
        <ul>
          <li className='spreadshirt'><strong>Spreadshirt Homepage</strong>
            <a 
              href="https://www.spreadshirt.de/" 
              target="_blank" 
              rel="noreferrer"
            >
              <img src="/Screenshot 2025-11-08 at 16.18.24.png" alt="spreadshirt" />
        
            </a>
           </li>
          <li className='spreadshop'><strong>Spreadshop</strong> 
           <a 
              href="https://www.spreadshop.de/" 
              target="_blank" 
              rel="noreferrer"
            >
              <img src="/Screenshot 2025-11-08 at 16.19.57.png" alt="spreadshop" />
            </a>
          </li>
          <li><strong>Chat DeGrass Tyson AI</strong> — Description.</li>
          <li><strong>Amazon Reviews Compiler</strong> — Description.</li>
        </ul>
      </section>

      {/* Contact */}
      <footer className="contact">
        <h4>Contact</h4>
        <p>Email: sgandsteph@gmail.com</p>
        <div className="links">
      
          <a href={pdf} download="Sofia_Stephenson_CV.pdf">Download Resume <div className="download"><Download/></div></a>
          <a 
        
            href="https://www.linkedin.com/in/sofiags/" 
            target="_blank" 
            rel="noreferrer"
          >
            <Linkedin/>
          </a>

          <a 
            href="https://github.com/steph-crypt" 
            target="_blank" 
            rel="noreferrer"
          >
            <GitHub/>
          </a>
        </div>
      </footer>
      </div>
    </div>
  );
}
