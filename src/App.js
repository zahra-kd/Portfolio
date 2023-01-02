import './App.css'
import Herosection from './components/Herosection/Herosection';
import Navbar from './components/Navbar/Navbar';
import Sidelinks from './components/Sidelinks/Sidelinks';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <div className='App'>
      <header>
        <Navbar/>
        <Herosection/>
        <Sidelinks/>
      </header>
      <main>
        <About/>
        <Education/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App
