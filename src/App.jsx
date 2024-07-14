import styles from "./App.module.css";
import { MainBody } from "./Components/MainBody/MainBody";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";

function App() {

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <MainBody />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
