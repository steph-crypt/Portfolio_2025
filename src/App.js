import './App.css';

export default function App() {
  return (
    <div className="portfolio">
      <div className='container'>

      {/* Header */}
      <header className="header">
        <div className="header-wrapper">  
          <h1 className="bounce-header-1">Sofia Stephenson</h1>     
           <h3 className="bounce-header-3">Frontend AI Engineer</h3>
            <img className="cloud-2 slide-loop-cloud-2" src="/—Pngtree—purple gradient pastel colorful cloud_6528793.png" alt="cloud" />
            {/* <img className="cloud-3 slide-loop-cloud-3" src="/—Pngtree—purple gradient pastel colorful cloud_6528793.png" alt="cloud" />  */}
        </div>
          <img className="cloud-1 slide-loop-cloud-1" src="/—Pngtree—purple gradient pastel colorful cloud_6528793.png" alt="cloud" /> 
          <img className="cloud-4 slide-loop-cloud-4" src="/—Pngtree—purple gradient pastel colorful cloud_6528793.png" alt="cloud" />
          <img className="cloud-5 slide-loop-cloud-5" src="/—Pngtree—purple gradient pastel colorful cloud_6528793.png" alt="cloud" />
          <img className="cloud-6 slide-loop-cloud-6" src="/—Pngtree—purple gradient pastel colorful cloud_6528793.png" alt="cloud" /> 
      <section className="headshot">
        <div className="circle"></div>
        <img className="speech-bubble" src="/—Pngtree—comics explosion cloud dialog_2209268.png" alt="Headshot" />
        <p className="bubble-text">ask me anything</p>
        <img className="portrait" src="/ed2ce59c-49d4-4294-9552-f15d813efd20.png" alt="Headshot" />
      </section>
      </header>

    
    <div className='about'>
      <section className="bio">
        <div className="about-me-wrapper">
          <div className="about-me">
            <h3>About Me</h3>
            <p>
                I am an experienced Frontend engineer with expertise in AI Machine Learning. I build beautiful scalable, mobile-first React and Next.js applications, build chatbots, and train models.
            </p>
          </div>
        </div>
        <div className="experience-wrapper">
          <div className="experience">
            <h4>Professional Experience</h4>
            <p>At my former company Spreadshirt, I developed high-performance, user-centric features, modernized legacy systems with TypeScript, and integrated headless CMS solutions to streamline content operations. I’m passionate about creating engaging, interactive experiences, driving data-informed UX improvements, and delivering reliable, high-quality products for global audiences.</p>
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
      <section className="contact">
        <h3>Contact</h3>
        <p>Email: sgandsteph@gmail.com</p>
      </section>

      {/* Links */}
      <footer className="links">
        <a 
          href="https://www.linkedin.com/in/sofiags/" 
          target="_blank" 
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a 
          href="https://github.com/steph-crypt" 
          target="_blank" 
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}
