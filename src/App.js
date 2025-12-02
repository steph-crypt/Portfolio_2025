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

const scrollToSlide = (e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute('href');
  document.querySelector(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'nearest'
  });
};

export default function App() {
  return (
    <div className="portfolio">
      <div className='container'>
      <header className="header">
        <div className="header-wrapper">  
          <h1 className="bounce-header-1">Sofia Stephenson</h1>     
           <h2 className="bounce-header-3">Frontend AI Engineer</h2>
        </div>
        <section className="headshot pulsating">
          <img className="portrait" src="/ed2ce59c-49d4-4294-9552-f15d813efd20.png" alt="Headshot" />
        </section>
        </header>
        <section className='about'>
          <div className="bio">
            <div className="about-me-wrapper">
              <div className="about-me swirl">
                <h3>About Me</h3>
                <p>
                    I am a highly experienced Frontend engineer with expertise in AI Machine Learning. I build beautiful scalable, mobile-first React, TypeScript, Javascript and Next.js applications, aswell as intelligent chatbots, train models, and intelligent synthesizes of data .
                </p>
              </div>
              <div className="neural-image">
                <img className="pulsating" src="/—Pngtree—human brain neural network connections_21128488.png" alt="neural" />
              </div>
            </div>
            <div className="experience swirl mobile">
                    <h4>Professional Experience</h4>
                    <p>In my 4.5 years as a professional software engineer, I have developed high-performance, user-centric features using React, modernized legacy systems with TypeScript, and collaborated closely with cross-functional teams to deliver fast, measurable outcomes. My work also included designing robust A/B testing experiments, building and iterating on user-facing flows, integrating headless CMS systems, and modernizing core codebases to enable long-term scalability. I am passionate about creating engaging, interactive experiences, driving data-informed UX improvements, and delivering reliable, high-quality products for global audiences.</p>
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
                <div className="experience swirl desktop">
                    <h4>Professional Experience</h4>
                    <p>In my 4.5 years as a professional software engineer, I have developed high-performance, user-centric features using React, modernized legacy systems with TypeScript, and collaborated closely with cross-functional teams to deliver fast, measurable outcomes. My work also included designing robust A/B testing experiments, building and iterating on user-facing flows, integrating headless CMS systems, and modernizing core codebases to enable long-term scalability. I am passionate about creating engaging, interactive experiences, driving data-informed UX improvements, and delivering reliable, high-quality products for global audiences.</p>
                </div>
              
            </div>
          </div>
        </section>
        <section className="projects">
          <h3>Projects</h3>
            <div class="slider">
            <a href="#slide-1" onClick={scrollToSlide}>1</a>
            <a href="#slide-2" onClick={scrollToSlide}>2</a>
            <a href="#slide-3" onClick={scrollToSlide}>3</a>
            <div class="slides">
              <div id="slide-1">
                <a 
                        href="https://www.spreadshirt.de/" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <img src="/Screenshot 2025-12-01 at 14.09.44.png" alt="chatdegrasstyson" />
                  
                      </a>
              </div>
              <div id="slide-2">
                <a 
                        href="https://www.spreadshirt.de/" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <img src="/Screenshot 2025-11-08 at 16.18.24.png" alt="spreadshirt" />
                  
                      </a>
              </div>
              <div id="slide-3">
                <a 
                        href="https://www.spreadshop.de/" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <img src="/Screenshot 2025-11-08 at 16.19.57.png" alt="spreadshop" />
                      </a>
              </div>

            </div>
          </div>
      </section>
      {/* Contact */}
      <section className="contact">
        <h4>Contact</h4>
        <p>Email: sgandsteph@gmail.com</p>
        <div className="links">
          <div className="cta-row-1">
            <a href={pdf} download="Sofia_Stephenson_CV.pdf">Download Resume <div className="download"><Download/></div></a>
          </div>
          <div className="cta-row-2">
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
        </div>
      </section>
      </div>
    </div>
  );
}
