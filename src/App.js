import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0">
      {/*Header*/}
      
      <Header />

      {/*Main*/}
      <section id="main" className="snap-start">
        <Main />
      </section>

      {/*About Me*/}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/*Projects !! remember to use slider.js*/}
      <section id="Projects" className="snap-center">
        <Projects />
      </section>

      {/*Work Experience*/}
      <section id="Experience" className="snap-center">
        <Experience />
      </section>

      {/*Skills*/}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/*Contact*/}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
