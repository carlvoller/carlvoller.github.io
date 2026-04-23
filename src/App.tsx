import { useEffect } from 'react'
import Landing from './sections/Landing'
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Awards from './sections/Awards';
import Footer from './sections/Footer';

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLDivElement).dataset.visible = '';
          observer.unobserve(entry.target); // stop watching once visible
        }
      });
    }, { threshold: 0.12 });

    // Attach to every element you want to animate
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, [])

  return (
    <div className='w-screen flex flex-col justify-center items-center text-white overflow-y-auto [&_a]:text-blue-500 [&_a]:underline'>
      <Landing />
      <AboutMe />
      <Experience />
      <Projects />
      <Awards />
      <Footer />
    </div>
  )
}

export default App
